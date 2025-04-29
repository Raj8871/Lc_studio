// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = process.env.PORT || 5000;

// CORS setup
app.use(cors());
app.use(express.json());

// API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// Endpoints
app.post('/generate', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text parameter is required' });
    }
    const result = await model.generateContent(text);
    const response = await result.response;
    const generatedText = response.text();
    res.json({ result: generatedText });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

```
    res.status(500).json({ error: error.message || 'Failed to generate content' });
.envjavascript
    res.status(500).json({ error: error.message || 'Failed to generate content' });
