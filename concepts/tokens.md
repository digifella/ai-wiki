---
type: concept
domain: ai-agents
group: reasoning-context-prompting
tags:
  - "claude-skills"
  - "agent-skills"
  - "llm-efficiency"
  - "ai-agents"
  - "rick-mulready"
aliases:
  - "Claude Skills"
  - "Agent Skills"
summary: A Markdown summary of a video by Rick Mulready regarding Claude Skills, also known as Agent Skills.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Tokens

Tokens are the fundamental units of text that large language models, such as Claude, process and generate. They represent small chunks of text, typically consisting of individual words, subwords, or punctuation marks, which the model breaks input into before processing. This tokenization process converts raw language into standardized units that the underlying neural network can interpret and manipulate.

Understanding tokens is essential when working with AI agents and Claude Skills, as token usage directly impacts both the cost and performance of API calls. When text is sent to the model, a tokenizer first converts it into these discrete units. The total number of tokens in a prompt and the subsequent response determines the computational resources required, thereby influencing the pricing structure and the efficiency of the interaction.

The concept of tokenization extends beyond simple word counting, as models often split words into smaller subword components to handle vocabulary limitations and rare terms. This mechanism allows the model to generalize across a vast range of inputs while maintaining a fixed-size vocabulary. Consequently, monitoring token counts is a critical practice for developers optimizing agent workflows and managing resource allocation in AI-driven applications.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-10: Bonsai 8B PrismMLs Revolutionary 1 Bit LLM First Look Test · [▶ source](https://www.youtube.com/watch?v=aNg47-U_x6A)
- 2026-04-11: [[lab-notes/2026-04-11-Claudes-Advisor-Strategy-Monitor-Tool-and-Managed-Agents-for-AI-Develo|Claudes Advisor Strategy Monitor Tool and Managed Agents for AI Develo]] · [▶ source](https://www.youtube.com/watch?v=Q-QznaH1WS0)
- 2026-04-12: [[lab-notes/2026-04-12-Google-TurboQuant-LLM-Memory-Efficiency-Breakthrough-Industry-Impact|Google TurboQuant LLM Memory Efficiency Breakthrough Industry Impact]] · [▶ source](https://www.youtube.com/watch?v=erV_8yrGMA8)
- 2026-04-13: [[lab-notes/2026-04-13-Demystifying-AI-Transformer-Training-on-a-1979-PDP-11|Demystifying AI Transformer Training on a 1979 PDP 11]] · [▶ source](https://www.youtube.com/watch?v=OUE3FSIk46g)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropic-Claude-Opus-47-Agentic-Coding-Multimodal-and-Memory-Advancem|Anthropic Claude Opus 47 Agentic Coding Multimodal and Memory Advancem]] · [▶ source](https://www.youtube.com/watch?v=uXF6bR4_5RY)
- 2026-04-22: Graphify · [▶ source](https://www.youtube.com/watch?v=BkHps04qGgc)
