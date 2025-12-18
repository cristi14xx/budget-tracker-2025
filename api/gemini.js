// ═══════════════════════════════════════════════════════════════════════════════
// 🧠 FINLEY AI - Gemini API with Function Calling
// Budget Pro 2025 - Professional Financial AI Engine
// ═══════════════════════════════════════════════════════════════════════════════

export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
        return res.status(500).json({ success: false, error: 'GEMINI_API_KEY not configured in Vercel Environment Variables' });
    }

    try {
        const { 
            prompt,
            systemPrompt,
            conversationHistory = [],
            tools = [],
            functionResponses = [],
            maxTokens = 8192
        } = req.body;

        if (!prompt && functionResponses.length === 0) {
            return res.status(400).json({ success: false, error: 'Prompt or functionResponses required' });
        }

        // Build contents array
        const contents = [];
        
        // Add conversation history
        for (const msg of conversationHistory) {
            contents.push({
                role: msg.role,
                parts: Array.isArray(msg.parts) ? msg.parts : [{ text: msg.parts }]
            });
        }
        
        // If we have function responses, add the model's function call and our response
        if (functionResponses.length > 0) {
            // The function responses go in a user turn
            contents.push({
                role: 'user',
                parts: functionResponses.map(fr => ({
                    functionResponse: {
                        name: fr.name,
                        response: { result: fr.response }
                    }
                }))
            });
        } else if (prompt) {
            // Regular user message
            contents.push({
                role: 'user',
                parts: [{ text: prompt }]
            });
        }

        // Build request
        const requestBody = {
            contents: contents,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: maxTokens,
                topP: 0.95,
                topK: 40
            },
            safetySettings: [
                { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
            ]
        };

        // Add system instruction
        if (systemPrompt) {
            requestBody.systemInstruction = {
                parts: [{ text: systemPrompt }]
            };
        }

        // Add tools if provided
        if (tools && tools.length > 0) {
            requestBody.tools = [{
                functionDeclarations: tools
            }];
            requestBody.toolConfig = {
                functionCallingConfig: {
                    mode: "AUTO"
                }
            };
        }

        // Models to try in order (most capable first)
        const models = [
            'gemini-2.5-flash',
            'gemini-2.0-flash',
            'gemini-1.5-flash',
            'gemini-1.5-pro'
        ];

        let lastError = null;
        let successModel = null;

        for (const model of models) {
            try {
                console.log(`[Finley] Trying model: ${model}`);
                
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(requestBody)
                });

                const data = await response.json();

                if (data.error) {
                    console.log(`[Finley] ${model} error:`, data.error.message);
                    lastError = data.error;
                    continue;
                }

                if (data.candidates?.[0]?.content?.parts) {
                    successModel = model;
                    const parts = data.candidates[0].content.parts;
                    
                    // Extract text and function calls
                    let text = '';
                    const functionCalls = [];
                    
                    for (const part of parts) {
                        if (part.text) {
                            text += part.text;
                        }
                        if (part.functionCall) {
                            functionCalls.push({
                                name: part.functionCall.name,
                                args: part.functionCall.args || {}
                            });
                        }
                    }

                    console.log(`[Finley] Success with ${model}. Text: ${text?.length || 0} chars, FunctionCalls: ${functionCalls.length}`);
                    
                    return res.status(200).json({
                        success: true,
                        model: model,
                        text: text || null,
                        functionCalls: functionCalls,
                        finishReason: data.candidates[0].finishReason,
                        // Include raw content for multi-turn
                        modelContent: data.candidates[0].content
                    });
                }

                lastError = { message: 'No valid response parts' };
            } catch (modelError) {
                console.log(`[Finley] ${model} exception:`, modelError.message);
                lastError = { message: modelError.message };
            }
        }

        return res.status(500).json({
            success: false,
            error: lastError?.message || 'All models failed',
            triedModels: models
        });

    } catch (error) {
        console.error('[Finley] Server error:', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}
