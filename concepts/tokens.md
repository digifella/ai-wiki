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
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Tokens

Tokens are the fundamental units of text that language models like Claude process and generate. They represent small chunks of text—typically individual words, subwords, or punctuation marks—that the model breaks input into before processing. Understanding tokens is essential when working with AI agents and Claude Skills, as token usage directly impacts both the cost and performance of API calls.

## How Tokens Work

When you send text to Claude, the model first converts it into tokens using a tokenizer. This process breaks down language into standardized units that the neural network can process mathematically. Most English words become single tokens, while longer words may split into multiple tokens. Punctuation and whitespace also consume tokens, though typically fewer than content words. The total token count for a request includes both the input (prompt) and output (response), and both are counted toward API usage and associated costs.

## Tokens and Agent Performance

In the context of agentic AI and Claude Skills, token efficiency becomes particularly important. Agents often need to maintain context across multiple steps and tool calls, meaning unnecessary tokens in prompts or system instructions accumulate quickly. Optimizing how information is structured and presented to the model can reduce token consumption while maintaining performance. Being mindful of token costs helps developers design more efficient agents and control expenses when deploying Claude-based solutions at scale.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-10: Bonsai 8B PrismMLs Revolutionary 1 Bit LLM First Look Test · [▶ source](https://www.youtube.com/watch?v=aNg47-U_x6A)
- 2026-04-11: [[lab-notes/2026-04-11-Claudes-Advisor-Strategy-Monitor-Tool-and-Managed-Agents-for-AI-Develo|Claudes Advisor Strategy Monitor Tool and Managed Agents for AI Develo]] · [▶ source](https://www.youtube.com/watch?v=Q-QznaH1WS0)
- 2026-04-12: [[lab-notes/2026-04-12-Google-TurboQuant-LLM-Memory-Efficiency-Breakthrough-Industry-Impact|Google TurboQuant LLM Memory Efficiency Breakthrough Industry Impact]] · [▶ source](https://www.youtube.com/watch?v=erV_8yrGMA8)
- 2026-04-13: [[lab-notes/2026-04-13-Demystifying-AI-Transformer-Training-on-a-1979-PDP-11|Demystifying AI Transformer Training on a 1979 PDP 11]] · [▶ source](https://www.youtube.com/watch?v=OUE3FSIk46g)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropic-Claude-Opus-47-Agentic-Coding-Multimodal-and-Memory-Advancem|Anthropic Claude Opus 47 Agentic Coding Multimodal and Memory Advancem]] · [▶ source](https://www.youtube.com/watch?v=uXF6bR4_5RY)
- 2026-04-22: Graphify · [▶ source](https://www.youtube.com/watch?v=BkHps04qGgc)
