const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-thinking-exp-01-21" });

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseMimeType: "text/plain",
};

router.post('/message', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chat = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            { text: "You are Mustang, a smart and friendly AI-powered chatbot for a car marketplace..." }
          ],
        },
      ],
    });

    const result = await chat.sendMessage(userMessage);
    const response = result.response.text();

    res.json({ response });
  } catch (err) {
    console.error('Gemini API Error:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
