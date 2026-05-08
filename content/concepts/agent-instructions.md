---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "prompt-engineering"
  - "langchain"
  - "context-engineering"
  - "langgraph"
  - "rag"
  - "agent-behavior"
aliases:
  - "agent-directives"
  - "agent-parameters"
summary: "Core directives and parameters used to define the persona, constraints, and operational behavior of an AI agent."
updated: 2026-04-17
group: agent-systems-skills
---
# Agent instructions

2026 04 14 [[entities/langchain|Langchain]] [[concepts/external-knowledge|context engineering]]

Core directives and [[concepts/parameters|parameters]] used to define the persona, constraints, and operational behavior of an [[concepts/ai-agent|AI Agent]].

### Context Engineering
The practice of optimizing the [[concepts/context-window]] by strategically populating it with precise information at each stage of an agent's trajectory.

- **Essential Context Components:**
	- [[concepts/instructions|Instructions]]: Primary directives for task execution.
	- External Knowledge: Retrieved data (e.g., RAG).
	- [[concepts/tool-feedback]]: [[concepts/empirical-evidence|Observational data]] from Tool Use/environment interactions.
- **Implementation:** Frameworks like [[concepts/langgraph-framework|LangGraph]] provide the infrastructure to manage these injection strategies and agent state.

**Sources:**
- [Context Engineering for Agents (Video)](https://www.youtube.com/watch?v=4GiqzUHD5AA)

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-10: [[lab-notes/2026-04-10-OpenClaw-The-Autonomous-AI-Agents-Rise-and-Critical-Security-Flaws|OpenClaw The Autonomous AI Agents Rise and Critical Security Flaws]] · [▶ source](https://www.youtube.com/watch?v=qKqrmS6dKDg)
- 2026-04-22: AI Agent Skills · [▶ source](https://www.youtube.com/watch?v=Lg-meK5IU8Q)
- 2026-04-26: Karpathy
- 2026-04-27: Claude AI · [▶ source](https://www.youtube.com/watch?v=Ph-maUAiSU8)
- 2026-04-28: ChatGPT · [▶ source](https://www.youtube.com/watch?v=QrvVkm-8Jx4)
- 2026-04-29: Hermes · [▶ source](https://www.youtube.com/watch?v=1ve4Atbqmoo)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)