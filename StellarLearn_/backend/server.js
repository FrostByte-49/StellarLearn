const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post("/api/mentor", async (req, res) => {
  try {
    const { prompt } = req.body; 

    if (!prompt) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await axios.post(
      "https://api.chatanywhere.com.cn/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { 
            role: "system", 
            content: "You are Nova, an AI learning mentor for StellarLearn. You help students understand complex topics, create study plans, explain concepts clearly, and provide educational guidance. Be concise, helpful, and encouraging." 
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 500,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // ✅ Better error handling for OpenAI response
    if (response.data.choices && response.data.choices[0] && response.data.choices[0].message) {
      res.json({ reply: response.data.choices[0].message.content });
    } else {
      throw new Error("Invalid response format from OpenAI");
    }
  } catch (err) {
    console.error("Backend Error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Failed to get response from AI service",
      details: err.response?.data?.error?.message || err.message,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Mentor API is running" });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});