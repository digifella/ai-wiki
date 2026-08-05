---
wiki-ingested: true
title: "OpenCode + Ollama: Free Local AI Coding Agent Setup and Optimization"
date: 2026-06-09
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-09 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## OpenCode + Ollama: Free Local AI Coding Agent Setup and Optimization
**Clip title:** OpenCode + Ollama: I Replaced [[concepts/ai-assisted-coding|Claude Code]] With This (Full Setup)
**Author / channel:** Leon van Zyl
**URL:** https://www.youtube.com/watch?v=4r80bMX_kGg

### Summary
This video provides a comprehensive guide on leveraging Ollama with OpenCode to create a free, local [[concepts/autonomous-ai-coding-agent|AI coding agent]]. The presenter, Leon, begins by recounting his frustrating [[concepts/experience|experience]] with Claude Code, where its excessive context window usage (nearly 30,000 [[concepts/tokens|tokens]] for [[concepts/system-prompts|system prompts]] and tools before any user input) overwhelmed local models, leading to poor instruction adherence and tool call hallucinations. He then introduces OpenCode as a superior, open-source alternative that runs the exact same local models faster and more effectively.

The core of the [[concepts/tutorial|tutorial]] focuses on setting up OpenCode and Ollama. For OpenCode, [[concepts/installation|installation]] is straightforward via `npm install -g opencode-ai`. OpenCode is highlighted for its ability to connect to various AI providers, including local models. Ollama, which enables running [[concepts/large-language-model-llm|large language models]] locally, is installed by downloading its application from ollama.com. Users are advised to select an appropriate model based on their system's VRAM, with suggestions like Gemma4 for 8-12GB and [[concepts/qwen3-model|Qwen3]].6 for 24GB+ VRAM (the presenter's preferred model). Models are then "pulled" using simple `ollama pull [model_name]` [[concepts/commands|commands]]. Finally, OpenCode is configured to use Ollama as a provider, allowing access to the downloaded local models.

A crucial aspect of the video is the presenter's [[concepts/workflow|workflow]] for achieving optimal results with [[concepts/local-ai-agents|local AI agents]]. He demonstrates OpenCode's "Build" and "Plan" modes. The key takeaway is to avoid "context bloat" by breaking down complex coding tasks into smaller, highly detailed, and focused phases, each with specific actionable tasks and acceptance criteria. Attempting to feed a massive, all-encompassing plan to the agent, as Claude Code tends to do, often overwhelms local models and leads to subpar performance.

Through a practical demonstration of building a local [[concepts/chat-application|chat application]], Leon showcases how OpenCode, with its phased approach, efficiently scaffolds a Next.js project. He then guides the agent through implementing individual phases, such as project setup, data layer creation, API routes, and UI components. After encountering initial issues with response streaming in the chat app, the agent successfully debugs and resolves the problem by utilizing a "browser [[concepts/skill|skill]]," effectively [[concepts/testing|testing]] and fixing its own code. The video concludes by emphasizing the power and efficiency of OpenCode combined with Ollama for local [[concepts/development-speed|AI-assisted development]], particularly when adhering to a structured workflow of clear, incremental [[concepts/instructions|instructions]].

### Video Description & Links
#### Description
🚀 Free resources: source code, prompts, workflows + peer discussion: https://skool.com/leonvanzyl
🧪 Agentic Labs: AI coding courses, live Q&A, weekly builder challenges, direct access to me + a serious builder community: https://skool.com/agentic-labs

Learn how to set up OpenCode with Ollama to run a completely free local coding agent on your own machine. In this OpenCode + Ollama tutorial, I’ll show you why some local models struggle inside Claude Code, how to install OpenCode, connect Ollama models, choose the right [[concepts/local-model|local model]] for your [[concepts/hardware|hardware]], and use a better workflow for building apps with local [[concepts/ai-coding-agents|AI coding agents]].

Chapters:
00:00 Claude Code vs Local Models
01:03 Why OpenCode Works Better
01:34 Install OpenCode
02:03 Install Ollama
02:35 Choose a Local Model
03:37 Connect Ollama to OpenCode
04:39 Build with a [[concepts/local-agent|Local Agent]]
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

## Related Concepts
- [[concepts/task-specific-modeling|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[concepts/specialized-coding-tool|AI Coding Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Coding_Agent)
- [[concepts/open-weights|Local Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Models)
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window)
- [[concepts/local-coding-agent|Local AI Coding Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_AI_Coding_Agent)
- [[concepts/context-management|Context Window Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window_Management)
- [[concepts/token-usage-optimization|Token Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Token_Efficiency)
- [[concepts/hallucination|Model Hallucination]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Hallucination)
- [[concepts/vram-optimization|VRAM Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/VRAM_Optimization)
- [[concepts/task-decomposition|Phased Task Decomposition]] — [Wikipedia](https://en.wikipedia.org/wiki/Phased_Task_Decomposition)
- Agentic Workflow — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Workflow)
- [[concepts/open-source|Open Source AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Open_Source_AI)
- [[concepts/local-inference|Local Model Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Model_Inference)
- Next.js Development — [Wikipedia](https://en.wikipedia.org/wiki/Next.js_Development)
- [[concepts/browser-automation|Automated Testing]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Testing)
- Browser Skill [[concepts/integration|Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/Browser_Skill_Integration)

## Related Entities
- [[entities/leon-van-zyl|Leon van Zyl]] — [Wikipedia](https://en.wikipedia.org/wiki/Leon_van_Zyl)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[entities/ollama|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- OpenCode — [Wikipedia](https://en.wikipedia.org/wiki/OpenCode)
- Gemma4 — [Wikipedia](https://en.wikipedia.org/wiki/Gemma4)
- Qwen3.6 — [Wikipedia](https://en.wikipedia.org/wiki/Qwen3.6)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/npm|npm]] — [Wikipedia](https://en.wikipedia.org/wiki/npm)
- Agentic Labs — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Labs)
- Skool — [Wikipedia](https://en.wikipedia.org/wiki/Skool)