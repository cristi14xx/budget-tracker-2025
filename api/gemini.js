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
        const { prompt, maxTokens = 1500 } = req.body;

        if (!prompt) {
            return res.status(400).json({ 
                success: false,
                error: 'Prompt is required' 
            });
        }

        // Official Gemini API endpoint - using gemini-2.0-flash (latest stable model)
        const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

        // Request body according to official documentation
        const requestBody = {
            contents: [{
                parts: [{ text: prompt }]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: maxTokens,
                topP: 0.8,
                topK: 40
            }
        };

        console.log('Calling Gemini API with model: gemini-2.0-flash');

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
                response: text
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
