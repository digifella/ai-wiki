---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "concept"
  - "ai-agents"
  - "web-scraping"
  - "llm-efficiency"
  - "agent-skills"
  - "llm-optimization"
aliases:
  - "Agent Skills"
summary: Using code for web scraping enhances LLM efficiency compared to using markdown.
updated: 2026-07-13
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Agent Harnesses

Agent harnesses are computational frameworks that enable AI agents to execute code directly rather than relying solely on natural language generation. By integrating programming capabilities into agent systems, these harnesses allow language models to interact with external APIs, databases, web services, and other computational tools. This addresses a fundamental limitation of text-only language models: the gap between describing an action and actually executing it in external systems.

## Code Execution vs. Natural Language Description

Text-based approaches require language models to generate descriptions of desired actions, which human operators or separate systems must then interpret and execute. Agent harnesses eliminate this intermediary step by allowing the model to generate executable code directly. When performing tasks like web scraping, data retrieval, or system integration, direct code execution reduces latency, minimizes interpretation errors, and enables the agent to receive real-time feedback on whether operations succeeded or failed.

## Practical Applications

Agent harnesses are particularly useful for tasks requiring interaction with structured data sources or APIs. Rather than attempting to describe web scraping results in markdown or natural language, an agent harness allows the model to write and execute scraping code, receive the actual data returned, and adapt subsequent actions based on real results. This creates a feedback loop where agents can verify outcomes, retry failed operations, and handle unexpected responses more effectively than systems restricted to text generation alone.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-17: [[lab-notes/2026-04-17-DeepMind-Gemma-4-Open-Efficient-AI-Empowering-Local-Device-Execution|DeepMind Gemma 4 Open Efficient AI Empowering Local Device Execution]] · [▶ source](https://www.youtube.com/watch?v=Sk9tvyRSCgY)
- 2026-04-19: [[lab-notes/2026-04-19-Karpathy-Loop-Auto-Optimize-AI-Inhuman-Iteration-for-Agent-Improvement|Karpathy Loop Auto Optimize AI Inhuman Iteration for Agent Improvement]] · [▶ source](https://www.youtube.com/watch?v=xnG8h3UnNFI)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)
