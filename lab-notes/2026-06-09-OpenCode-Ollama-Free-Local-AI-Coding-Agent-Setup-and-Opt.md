---
title: "OpenCode + Ollama: Free Local AI Coding Agent Setup and Optimization"
date: 2026-06-09
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# OpenCode + Ollama: Free Local AI Coding Agent Setup and Optimization
Generated: 2026-06-09 · API: Gemini 2.5 Flash · Modes: Summary

---

## OpenCode + Ollama: Free Local AI Coding Agent Setup and Optimization
**Clip title:** OpenCode + Ollama: I Replaced Claude Code With This (Full Setup)
**Author / channel:** Leon van Zyl
**URL:** https://www.youtube.com/watch?v=4r80bMX_kGg

### Summary
This video provides a comprehensive guide on leveraging Ollama with OpenCode to create a free, local AI coding agent. The presenter, Leon, begins by recounting his frustrating experience with Claude Code, where its excessive context window usage (nearly 30,000 tokens for system prompts and tools before any user input) overwhelmed local models, leading to poor instruction adherence and tool call hallucinations. He then introduces OpenCode as a superior, open-source alternative that runs the exact same local models faster and more effectively.

The core of the tutorial focuses on setting up OpenCode and Ollama. For OpenCode, installation is straightforward via `npm install -g opencode-ai`. OpenCode is highlighted for its ability to connect to various AI providers, including local models. Ollama, which enables running large language models locally, is installed by downloading its application from ollama.com. Users are advised to select an appropriate model based on their system's VRAM, with suggestions like Gemma4 for 8-12GB and Qwen3.6 for 24GB+ VRAM (the presenter's preferred model). Models are then "pulled" using simple `ollama pull [model_name]` commands. Finally, OpenCode is configured to use Ollama as a provider, allowing access to the downloaded local models.

A crucial aspect of the video is the presenter's workflow for achieving optimal results with local AI agents. He demonstrates OpenCode's "Build" and "Plan" modes. The key takeaway is to avoid "context bloat" by breaking down complex coding tasks into smaller, highly detailed, and focused phases, each with specific actionable tasks and acceptance criteria. Attempting to feed a massive, all-encompassing plan to the agent, as Claude Code tends to do, often overwhelms local models and leads to subpar performance.

Through a practical demonstration of building a local chat application, Leon showcases how OpenCode, with its phased approach, efficiently scaffolds a Next.js project. He then guides the agent through implementing individual phases, such as project setup, data layer creation, API routes, and UI components. After encountering initial issues with response streaming in the chat app, the agent successfully debugs and resolves the problem by utilizing a "browser skill," effectively testing and fixing its own code. The video concludes by emphasizing the power and efficiency of OpenCode combined with Ollama for local AI-assisted development, particularly when adhering to a structured workflow of clear, incremental instructions.

### Video Description & Links
#### Description
🚀 Free resources: source code, prompts, workflows + peer discussion: https://skool.com/leonvanzyl
🧪 Agentic Labs: AI coding courses, live Q&A, weekly builder challenges, direct access to me + a serious builder community: https://skool.com/agentic-labs

Learn how to set up OpenCode with Ollama to run a completely free local coding agent on your own machine. In this OpenCode + Ollama tutorial, I’ll show you why some local models struggle inside Claude Code, how to install OpenCode, connect Ollama models, choose the right local model for your hardware, and use a better workflow for building apps with local AI coding agents.

Chapters:
00:00 Claude Code vs Local Models
01:03 Why OpenCode Works Better
01:34 Install OpenCode
02:03 Install Ollama
02:35 Choose a Local Model
03:37 Connect Ollama to OpenCode
04:39 Build with a Local Agent
05:11 Better Local Model Workflow
09:22 Browser Testing & Bug Fixes
10:24 Final App Demo

Business & sponsorship enquiries: leon.vanzyl@gmail.com

#claudecode #opencode #ollama

#### Tags
`how to setup claude code with ollama?`, `ollama claude code setup`, `claude code ollama setup`, `claude code with ollama`, `how to use ollama with claude code`, `opencode and claude code`, `claude code vs opencode`, `opencode vs claude code`, `claude code ollama`, `ollama claude code`, `claude code + ollama`, `claude code cli setup`, `install claude with ollama`, `claude code free setup`, `claude code setup tutorial`, `vscode claude code`, `claude code vscode`, `does vs code support the claude code?`

#### URLs
- https://skool.com/leonvanzyl
- https://skool.com/agentic-labs
