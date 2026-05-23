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
updated: 2026-05-24
---
# Agent Harnesses

Agent harnesses are frameworks that enable AI agents to execute code directly alongside natural language processing. Rather than relying exclusively on text generation, these systems integrate programming capabilities that allow agents to interact with external APIs, databases, and web services. This approach bridges a fundamental limitation of language models: the gap between describing an action in text and actually performing it in external systems.

## Code Execution and Efficiency

By incorporating code execution directly into agent workflows, harnesses improve both accuracy and efficiency compared to text-only approaches. For example, web scraping through executable code produces more reliable structured data than asking a language model to parse HTML and describe results in markdown or text format. The model can write and execute code to extract specific information, validate results, and handle errors—tasks that are error-prone when described in natural language alone.

## Integration and Capabilities

Agent harnesses typically provide standardized interfaces for connecting multiple tools and services. They manage the flow of information between the language model's reasoning layer and external systems, handling tasks like API authentication, response parsing, and error handling. This allows agents to perform complex multi-step operations that combine language understanding with precise computational or data retrieval tasks, extending their practical utility beyond conversation and text analysis.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-17: [[lab-notes/2026-04-17-DeepMind-Gemma-4-Open-Efficient-AI-Empowering-Local-Device-Execution|DeepMind Gemma 4 Open Efficient AI Empowering Local Device Execution]] · [▶ source](https://www.youtube.com/watch?v=Sk9tvyRSCgY)
- 2026-04-19: [[lab-notes/2026-04-19-Karpathy-Loop-Auto-Optimize-AI-Inhuman-Iteration-for-Agent-Improvement|Karpathy Loop Auto Optimize AI Inhuman Iteration for Agent Improvement]] · [▶ source](https://www.youtube.com/watch?v=xnG8h3UnNFI)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)