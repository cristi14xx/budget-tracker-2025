// Vercel Serverless Function for Gemini API
// Based on official Google AI documentation: https://ai.google.dev/api/generate-content

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get API key from environment variable
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        console.error('GEMINI_API_KEY environment variable not set');
        return res.status(500).json({ 
            success: false,
            error: 'API key not configured. Add GEMINI_API_KEY to Vercel Environment Variables.' 
        });
    }

    try {
        const { prompt, systemPrompt, maxTokens = 4096 } = req.body;

        if (!prompt) {
            return res.status(400).json({ 
                success: false,
                error: 'Prompt is required' 
            });
        }

        // Use gemini-1.5-flash with v1beta endpoint (correct and stable)
        // Alternative: gemini-pro for older but very stable model
        const MODEL = 'gemini-1.5-flash-latest';
        const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;

        // Request body with system instruction support
        const requestBody = {
            contents: [{
                parts: [{ text: prompt }]
            }],
            generationConfig: {
                temperature: 0.8,
                maxOutputTokens: maxTokens,
                topP: 0.9,
                topK: 40
            },
            safetySettings: [
                { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
            ]
        };

        // Add system instruction if provided
        if (systemPrompt) {
            requestBody.systemInstruction = {
                parts: [{ text: systemPrompt }]
            };
        }

        console.log('Calling Gemini API with model:', MODEL);
        console.log('System prompt length:', systemPrompt?.length || 0);
        console.log('User prompt:', prompt.substring(0, 100) + '...');

        const response = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        // Log for debugging
        console.log('Gemini response status:', response.status);
        
        // Check for API errors
        if (data.error) {
            console.error('Gemini API error:', data.error);
            
            // Try fallback to gemini-pro if 1.5-flash fails
            if (data.error.code === 404 || data.error.message?.includes('not found')) {
                console.log('Trying fallback model: gemini-pro');
                const FALLBACK_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
                
                // Simplified request for gemini-pro (no systemInstruction)
                const fallbackBody = {
                    contents: [{
                        parts: [{ text: systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt }]
                    }],
                    generationConfig: {
                        temperature: 0.8,
                        maxOutputTokens: maxTokens
                    }
                };
                
                const fallbackResponse = await fetch(FALLBACK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(fallbackBody)
                });
                
                const fallbackData = await fallbackResponse.json();
                
                if (fallbackData.candidates?.[0]?.content?.parts?.[0]?.text) {
                    return res.status(200).json({
                        success: true,
                        response: fallbackData.candidates[0].content.parts[0].text,
                        model: 'gemini-pro (fallback)'
                    });
                }
            }
            
            return res.status(400).json({ 
                success: false,
                error: data.error.message || 'Gemini API error',
                details: data.error
            });
        }

        // Extract text from response according to official schema
        if (data.candidates && 
            data.candidates[0] && 
            data.candidates[0].content && 
            data.candidates[0].content.parts && 
            data.candidates[0].content.parts[0] &&
            data.candidates[0].content.parts[0].text) {
            
            const text = data.candidates[0].content.parts[0].text;
            console.log('Gemini response received, length:', text.length);
            
            return res.status(200).json({
                success: true,
                response: text,
                model: MODEL
            });
        }

        // If no valid response
        console.error('Invalid response structure:', JSON.stringify(data).substring(0, 500));
        return res.status(500).json({ 
            success: false,
            error: 'Invalid response from Gemini API',
            details: data
        });

    } catch (error) {
        console.error('Server error:', error.message);
        return res.status(500).json({ 
            success: false,
            error: 'Server error: ' + error.message 
        });
    }
}
