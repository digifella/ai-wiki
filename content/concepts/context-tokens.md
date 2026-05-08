---
type: concept
domain: ai-agents
group: reasoning-context-prompting
tags:
  - "tool-calling"
  - "anthropic"
  - "claude"
  - "llm-efficiency"
  - "agent-skills"
  - "context-management"
aliases:
  - "Tool Search Tool"
  - "Programmatic Tool Calling"
summary: Discusses advanced tool-calling methods including Anthropic's Tool Search Tool and programmatic tool calling.
updated: 2026-05-01
---
# Context Tokens

Context tokens refer to the input [[concepts/tokens|tokens]] consumed by language models when processing information needed to inform [[concepts/tool-selection|tool selection]] and execution in [[concepts/agentic-frameworks|agentic systems]]. In tool-calling architectures, context tokens include the [[concepts/user-query|user query]], available [[concepts/tool-definitions|tool definitions]], [[concepts/system-prompts|system prompts]], and any retrieved or provided background information that helps the model decide which tools to invoke and how.

## Advanced Tool-Calling Methods

Recent developments in tool-calling efficiency have introduced sophisticated approaches to manage context token usage. [[entities/anthropic-institute|Anthropic]]'s Tool Search Tool represents one such advancement, allowing models to search through large tool libraries without loading all tool definitions into context simultaneously. This approach reduces [[concepts/token-consumption|token consumption]] when [[concepts/agents|agents]] have access to extensive tool sets, making it practical to deploy systems with hundreds or thousands of available tools.

Programmatic tool calling extends this concept by enabling models to generate structured tool invocations that are then executed through code rather than relying solely on natural language parsing. This method can improve [[concepts/software-reliability|reliability]] and reduce the token overhead associated with [[concepts/natural-language-descriptions|natural language descriptions]] of tool [[concepts/parameters|parameters]] and results.

Understanding and optimizing context token usage has become increasingly important as agentic systems grow more complex, since tokens directly impact both latency and operational cost in production environments.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-10: [[lab-notes/2026-04-10-Meta-Muse-Spark-Features-Performance-and-Strategic-Shift-to-Proprietar|Meta Muse Spark Features Performance and Strategic Shift to Proprietar]] · [▶ source](https://www.youtube.com/watch?v=7vkybiVRSm0)
- 2026-04-12: [[lab-notes/2026-04-12-Google-TurboQuant-LLM-Memory-Efficiency-Breakthrough-Industry-Impact|Google TurboQuant LLM Memory Efficiency Breakthrough Industry Impact]] · [▶ source](https://www.youtube.com/watch?v=erV_8yrGMA8)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropic-Claude-Opus-47-Agentic-Coding-Multimodal-and-Memory-Advancem|Anthropic Claude Opus 47 Agentic Coding Multimodal and Memory Advancem]] · [▶ source](https://www.youtube.com/watch?v=uXF6bR4_5RY)
- 2026-04-22: Graphify · [▶ source](https://www.youtube.com/watch?v=BkHps04qGgc)
- 2026-04-26: DeepSeek V4: China
- 2026-04-27: AI Context Layer Architectures: Karpathy
- 2026-04-29: Google Deep Research · [▶ source](https://www.youtube.com/watch?v=FVU4qLjy2jE)
- 2026-05-01: [[lab-notes/2026-05-01-Alibaba-Qwen-3.6-27B-Advanced-Local-Agentic-Coding-and-M|Alibaba Qwen 3.6 27B: Advanced Local Agentic Coding and Multimodal AI Capabilities]] · [▶ source](https://www.youtube.com/watch?v=N-0WtgxJ7ZU)