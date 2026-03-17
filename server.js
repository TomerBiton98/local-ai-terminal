const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const OLLAMA_URL = "http://localhost:11434/api/generate";

app.post("/api/chat", async (req, res) => {
  try {
    const { prompt, model } = req.body;

    const selectedModel = model || "phi3";

    const system = `
You are a smart AI assistant.
and your user is XXXXX, and your name it Kado remember that
Be concise, practical, and clear.
`;

    const fullPrompt = system + "\n\n" + prompt;

    const response = await axios.post(OLLAMA_URL, {
      model: selectedModel,
      prompt: fullPrompt,
      stream: false,
      options: {
        temperature: selectedModel === "deepseek-coder" ? 0.2 : 0.6,
        num_predict: 300
      }
    });

    res.json({ response: response.data.response });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "LLM error" });
  }
});

app.listen(3001, () => {
  console.log("🚀 http://localhost:3001");
});