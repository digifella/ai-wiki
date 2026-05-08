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
updated: 2026-05-01
---
# Tokens

Tokens are the fundamental units of text that language models like [[concepts/claude-ai|Claude]] process and generate. They represent small chunks of text—typically individual words, subwords, or punctuation marks—that the model breaks input into before processing. Understanding tokens is essential when working with [[concepts/agentic-ai|AI agents]] and [[concepts/instruction-reuse|Claude Skills]], as token usage directly impacts both the cost and performance of [[entities/api-calls|API calls]].

## Token Counting and Practical Implications

Different models use different tokenization schemes, and the same text may be broken into a different number of tokens depending on the model version. This matters when designing [[concepts/agent-harnesses|agent skills]] because longer prompts, [[concepts/system-instructions|system instructions]], and tool descriptions all consume tokens. Developers need to balance comprehensive [[concepts/instructions|instructions]] and context with [[concepts/token-optimization|token efficiency]], particularly when building multi-step [[concepts/multi-agent-workflows|agent workflows]] where token costs accumulate across multiple API calls.

## Tokens in Agent Workflows

When building Claude Skills and [[concepts/agentic-systems|agent systems]], [[concepts/token-management|token management]] becomes a strategic concern. Verbose tool descriptions, lengthy [[concepts/system-prompts|system prompts]], and large [[concepts/context-windows|context windows]] increase [[concepts/token-consumption|token consumption]] per interaction. Effective agent design requires careful consideration of what information is truly necessary to include in each request, how to [[concepts/structure|structure]] prompts efficiently, and when to summarize or filter context to maintain both cost-effectiveness and response quality.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-10: [[lab-notes/2026-04-10-Bonzai-8B-PrismMLs-Revolutionary-1-Bit-LLM-First-Look-Test|Bonzai 8B PrismMLs Revolutionary 1 Bit LLM First Look Test]] · [▶ source](https://www.youtube.com/watch?v=aNg47-U_x6A)
- 2026-04-11: [[lab-notes/2026-04-11-Claudes-Advisor-Strategy-Monitor-Tool-and-Managed-Agents-for-AI-Develo|Claudes Advisor Strategy Monitor Tool and Managed Agents for AI Develo]] · [▶ source](https://www.youtube.com/watch?v=Q-QznaH1WS0)
- 2026-04-12: [[lab-notes/2026-04-12-Google-TurboQuant-LLM-Memory-Efficiency-Breakthrough-Industry-Impact|Google TurboQuant LLM Memory Efficiency Breakthrough Industry Impact]] · [▶ source](https://www.youtube.com/watch?v=erV_8yrGMA8)
- 2026-04-13: [[lab-notes/2026-04-13-Demystifying-AI-Transformer-Training-on-a-1979-PDP-11|Demystifying AI Transformer Training on a 1979 PDP 11]] · [▶ source](https://www.youtube.com/watch?v=OUE3FSIk46g)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropic-Claude-Opus-47-Agentic-Coding-Multimodal-and-Memory-Advancem|Anthropic Claude Opus 47 Agentic Coding Multimodal and Memory Advancem]] · [▶ source](https://www.youtube.com/watch?v=uXF6bR4_5RY)
- 2026-04-22: Graphify · [▶ source](https://www.youtube.com/watch?v=BkHps04qGgc)