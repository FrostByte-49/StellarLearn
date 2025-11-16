const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Helper Function: Calls ChatAnywhere API 
async function callAI(prompt) {
  const response = await axios.post(
    "https://api.chatanywhere.com.cn/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Pixie, an educational AI assistant. Always return cleanly formatted JSON. Do NOT include markdown code blocks like ```json```. Respond in this structure only: { notes: 'string', questions: [ { question: 'string', type: 'MCQ | Conceptual | Short', difficulty: 'easy | medium | hard', options: [] } ] }"
        },
        { role: "user", content: prompt }
      ],
      max_tokens: 800,
      temperature: 0.7
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data.choices[0].message.content;
}

// Mentor Chat Endpoint
app.post("/api/mentor", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) return res.status(400).json({ error: "Message is required" });

    const aiReply = await callAI(prompt);

    res.json({ reply: aiReply });
  } catch (err) {
    console.error("Backend Error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Failed to get response from AI",
      details: err.response?.data?.error?.message || err.message
    });
  }
});

// PDF Notes Generator
app.post("/api/pdf", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text)
      return res.status(400).json({ error: "Extracted PDF text is required" });

    const prompt = `
Generate structured notes and important questions from this content:

"${text}"

Return CLEAN JSON ONLY in this structure:
{
  "notes": "well formatted bullet points, headings, clear sections",
  "questions": [
    { "question": "string", "type": "Conceptual", "difficulty": "medium", "options": [] }
  ]
}
`;

    const result = await callAI(prompt);

    // Parse JSON Safely
    const parsed = JSON.parse(result);

    res.json(parsed);
  } catch (err) {
    console.error("PDF Error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Failed to generate notes",
      details: err.response?.data?.error?.message || err.message
    });
  }
});

// YouTube Notes Generator
app.post("/api/youtube", async (req, res) => {
  try {
    const { transcript } = req.body;

    if (!transcript)
      return res
        .status(400)
        .json({ error: "Transcript is required to generate notes" });

    const prompt = `
Generate structured notes + important questions from this YouTube transcript:

"${transcript}"

Return CLEAN JSON ONLY in this structure:
{
  "notes": "clear headings, bullet points, definitions, key ideas",
  "questions": [
    { "question": "string", "type": "Short", "difficulty": "easy", "options": [] }
  ]
}
`;

    const result = await callAI(prompt);

    const parsed = JSON.parse(result);

    res.json(parsed);
  } catch (err) {
    console.error("YouTube Error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Failed to generate YouTube notes",
      details: err.response?.data?.error?.message || err.message
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "StellarLearn Mentor API is running" });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
