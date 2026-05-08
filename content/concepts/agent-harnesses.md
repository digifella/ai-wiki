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
updated: 2026-05-01
---
# Agent Harnesses

Agent harnesses are frameworks that enable [[concepts/agentic-ai|AI agents]] to execute code directly alongside [[concepts/nlp|natural language processing]]. Rather than relying exclusively on [[concepts/text-generation|text generation]], these systems integrate programming capabilities that allow [[concepts/agents|agents]] to interact with external APIs, databases, and web services. This approach bridges a key limitation of language models: the gap between describing an action in text and actually performing it in a computational environment.

## Practical Advantages Over Text-Based Approaches

Direct code execution substantially improves agent [[concepts/software-reliability|reliability]] and efficiency compared to text-based alternatives like [[concepts/markdown|markdown]] representations. When agents scrape web content, for example, executing actual code retrieves real data rather than generating plausible descriptions of what data might exist. This eliminates [[concepts/data-hallucination|hallucination]] risks and enables agents to handle dynamic, real-time information. Similarly, computational tasks—mathematical operations, data transformations, or system interactions—execute orders of magnitude faster through code than through natural language approximations.

## Integration and Workflow

Agent harnesses typically function by intercepting points in an agent's decision-making process where execution becomes necessary. When an agent determines that a task requires [[concepts/external-data|external data]] retrieval or computation, the harness routes the request to a code execution environment rather than attempting to generate an answer through language alone. The results return to the agent as [[concepts/json-structuring|structured data]], informing subsequent [[concepts/reasoning-steps|reasoning steps]]. This creates a [[concepts/feedback|feedback]] loop where agents progressively refine their understanding and actions based on actual execution outcomes rather than assumed ones.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-17: [[lab-notes/2026-04-17-DeepMind-Gemma-4-Open-Efficient-AI-Empowering-Local-Device-Execution|DeepMind Gemma 4 Open Efficient AI Empowering Local Device Execution]] · [▶ source](https://www.youtube.com/watch?v=Sk9tvyRSCgY)
- 2026-04-19: [[lab-notes/2026-04-19-Karpathy-Loop-Auto-Optimize-AI-Inhuman-Iteration-for-Agent-Improvement|Karpathy Loop Auto Optimize AI Inhuman Iteration for Agent Improvement]] · [▶ source](https://www.youtube.com/watch?v=xnG8h3UnNFI)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)