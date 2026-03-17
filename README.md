# 🧠 Local AI Terminal

A lightweight **local AI assistant** with a terminal-style interface, powered by Ollama.
Runs fully offline — no API keys, no cloud, no data leaving your machine.

---

## ⚡ Features

* 🟢 Local LLM (Ollama)
* 💻 Terminal-style UI (black + green)
* ⚡ Fast responses (phi3 / deepseek-coder)
* 🔒 Privacy-first (runs entirely on localhost)
* 🧠 Supports coding + general conversation

---

## 🏗 Architecture

```
Browser UI → Node.js (Express) → Ollama → Local Model
```

---

## 🚀 Setup

### 1. Install Ollama

https://ollama.com/download

### 2. Pull a model

```bash
ollama pull phi3
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run server

```bash
node server.js
```

### 5. Open UI

```
http://localhost:3001
```

---

## 🧪 Example Use Cases

* Code review and debugging
* Local AI chat assistant
* Prompt engineering playground
* Testing LLM behavior offline

---

## 🔒 Privacy

This project runs entirely on your machine:

* No external API calls
* No data collection
* No tracking

---

## 📌 Roadmap

* Streaming responses
* File system integration
* AI agent commands (`/review`, `/fix`)
* Memory and context storage

---

## 🧠 Why this project?

Built as a foundation for:

* Local AI systems
* Developer copilots
* On-prem AI tools

---

## ⚙️ Tech Stack

* Node.js (Express)
* Ollama (LLM runtime)
* HTML + Vanilla JS

---

## 📄 License

MIT
