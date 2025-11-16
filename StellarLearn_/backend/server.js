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
            "You are Pixie, an educational AI assistant. For notes, return clean formatted text. For questions, return valid JSON array. Follow the user's instructions carefully."
        },
        { role: "user", content: prompt }
      ],
      max_tokens: 1200,
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

    const mentorPrompt = `
As Pixie, the friendly AI learning mentor, provide a clear and helpful explanation for the following question:

"${prompt}"

Please structure your response with:
- Clear headings for main sections
- Bullet points for key concepts
- **Bold text** for important terms
- Step-by-step explanations where needed
- Practical examples if relevant
- Simple, easy-to-understand language

Make sure the response is well-organized and visually clean for the student.
`;

    const aiReply = await callAI(mentorPrompt);

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

    // First call: Generate formatted notes
    const notesPrompt = `
Create comprehensive and well-structured study notes from the following PDF content:

"${text}"

Structure your response with:

📚 MAIN TOPICS
• Clear section headings
• Key concepts in **bold**
• Important definitions

🎯 KEY POINTS
• Bullet points for main ideas
• Concise explanations
• Practical applications

💡 IMPORTANT CONCEPTS
• Critical theories and principles
• Formulas or rules if any
• Real-world connections

📝 SUMMARY
• Overall takeaways
• Main conclusions
• Key learning objectives

Format with clear spacing between sections and use **bold** for emphasis. Make it visually organized and easy to study from.
`;

    const notesResult = await callAI(notesPrompt);

    // Second call: Generate questions in JSON format
    const questionsPrompt = `
Based on this content: "${text.substring(0, 2000)}"

Generate 4-6 practice questions in JSON format only. Return ONLY valid JSON array:

[
  {
    "question": "clear question text",
    "type": "multiple-choice",
    "difficulty": "easy",
    "options": ["option1", "option2", "option3", "option4"]
  },
  {
    "question": "clear question text", 
    "type": "short-answer",
    "difficulty": "medium",
    "options": []
  },
  {
    "question": "clear question text",
    "type": "conceptual",
    "difficulty": "hard", 
    "options": []
  }
]

Include a mix of question types: multiple-choice, short-answer, and conceptual. Make sure difficulty varies.
`;

    const questionsResult = await callAI(questionsPrompt);

    // Parse questions JSON
    let questions = [];
    try {
      questions = JSON.parse(questionsResult);
    } catch (parseError) {
      console.error("Failed to parse questions JSON:", parseError);
      // Fallback questions
      questions = [
        {
          question: "What are the main concepts covered in this material?",
          type: "conceptual",
          difficulty: "medium",
          options: []
        },
        {
          question: "Explain the key takeaways from this content.",
          type: "short-answer", 
          difficulty: "medium",
          options: []
        }
      ];
    }

    res.json({ 
      notes: notesResult,
      questions: questions
    });
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

    // First call: Generate formatted notes
    const notesPrompt = `
Transform this YouTube video transcript into engaging, well-organized study notes:

"${transcript}"

Structure your response as:

🎬 VIDEO OVERVIEW
• Main topic and objectives
• Key takeaways
• Relevance to learners

📖 CORE CONTENT
• **Main concepts** explained clearly
• Step-by-step processes
• Important examples

🔍 KEY INSIGHTS
• Critical points to remember
• Common misconceptions
• Practical applications

⭐ HIGHLIGHTS
• Most valuable information
• Actionable tips
• Expert advice

Use clear headings, bullet points, and **bold** for emphasis. Make it engaging and easy to follow!
`;

    const notesResult = await callAI(notesPrompt);

    // Second call: Generate questions in JSON format
    const questionsPrompt = `
Based on this YouTube transcript: "${transcript.substring(0, 2000)}"

Generate 4-6 practice questions in JSON format only. Return ONLY valid JSON array:

[
  {
    "question": "clear question about the video content",
    "type": "multiple-choice", 
    "difficulty": "easy",
    "options": ["option1", "option2", "option3", "option4"]
  },
  {
    "question": "clear conceptual question",
    "type": "conceptual",
    "difficulty": "medium",
    "options": []
  },
  {
    "question": "clear application question", 
    "type": "short-answer",
    "difficulty": "hard",
    "options": []
  }
]

Include different question types and difficulty levels based on the video content.
`;

    const questionsResult = await callAI(questionsPrompt);

    // Parse questions JSON
    let questions = [];
    try {
      questions = JSON.parse(questionsResult);
    } catch (parseError) {
      console.error("Failed to parse questions JSON:", parseError);
      // Fallback questions
      questions = [
        {
          question: "What are the key lessons from this video?",
          type: "conceptual",
          difficulty: "medium",
          options: []
        },
        {
          question: "How can you apply the concepts from this video in practice?",
          type: "short-answer",
          difficulty: "medium", 
          options: []
        }
      ];
    }

    res.json({ 
      notes: notesResult,
      questions: questions
    });
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