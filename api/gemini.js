// Vercel Serverless Function for Gemini API
// Based on official Google AI documentation

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

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ 
            success: false,
            error: 'API key not configured' 
        });
    }

    try {
        const { prompt, systemPrompt, maxTokens = 4096 } = req.body;

        if (!prompt) {
            return res.status(400).json({ success: false, error: 'Prompt is required' });
        }

        // Try multiple models in order of preference
        const models = [
            'gemini-2.0-flash-exp',
            'gemini-1.5-flash',
            'gemini-1.5-pro',
            'gemini-pro'
        ];

        let lastError = null;

        for (const model of models) {
            try {
                console.log(`Trying model: ${model}`);
                
                const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

                // Build request body
                const requestBody = {
                    contents: [{
                        parts: [{ text: systemPrompt ? `${systemPrompt}\n\nUser: ${prompt}` : prompt }]
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

                const response = await fetch(GEMINI_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(requestBody)
                });

                const data = await response.json();

                // Check for errors
                if (data.error) {
                    console.log(`Model ${model} error:`, data.error.message);
                    lastError = data.error;
                    continue; // Try next model
                }

                // Extract text
                if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
                    const text = data.candidates[0].content.parts[0].text;
                    console.log(`Success with model: ${model}`);
                    return res.status(200).json({
                        success: true,
                        response: text,
                        model: model
                    });
                }

                lastError = { message: 'Invalid response structure' };
            } catch (modelError) {
                console.log(`Model ${model} failed:`, modelError.message);
                lastError = { message: modelError.message };
            }
        }

        // All models failed
        return res.status(500).json({ 
            success: false,
            error: lastError?.message || 'All models failed',
            details: lastError
        });

    } catch (error) {
        console.error('Server error:', error.message);
        return res.status(500).json({ 
            success: false,
            error: 'Server error: ' + error.message 
        });
    }
}
