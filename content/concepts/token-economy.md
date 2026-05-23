---
type: concept
domain: ai-agents
tags:
  - "sub-agents"
  - "context-engineering"
  - "api-optimization"
  - "claude-code"
  - "best-practices"
  - "token-efficiency"
aliases:
  - "sub-agent implementation"
  - "Claude Code optimization"
summary: This concept discusses best practices and pitfalls when using sub-agents within Claude Code, focusing on context engineering and optimization.
updated: 2026-05-23
group: model-efficiency-compression
---
# Token Economy

Token economy in the context of [[concepts/agentic-ai|AI agents]] refers to the strategic management of [[concepts/computational-resources|computational resources]] and API costs when implementing [[concepts/expertise-based-ai-assistants|multi-agent systems]] within [[concepts/ai-assisted-coding|Claude Code]]. As [[concepts/agentic-systems|agent systems]] scale in complexity, the cumulative token usage across multiple sub-[[concepts/agents|agents]] can quickly become prohibitively expensive if not carefully managed. Effective token economy requires deliberate architectural choices about when to delegate tasks to [[concepts/sub-agents|sub-agents]] versus handling them within a single [[concepts/external-knowledge|agent context]].

## Context Engineering for Sub-Agents

The primary challenge in token economy is avoiding redundant context duplication across sub-agents. Each sub-[[entities/agent|agent]] invocation carries overhead from passing context, [[concepts/system-prompts|system prompts]], and task specifications. [[concepts/best-practices|Best practices]] involve minimizing the information passed to each sub-agent by providing only the specific context necessary for that agent's task, rather than duplicating full system context. This requires careful prompt [[concepts/design|design]] that balances completeness with conciseness, ensuring sub-agents have sufficient information to operate effectively without wasteful repetition.

## Common Pitfalls

A frequent mistake is implementing sub-agents prematurely before establishing whether the complexity truly warrants the added [[concepts/cost|cost]] and latency. Simple tasks that can be completed within a single agent's [[concepts/context-window|context window]] typically consume fewer [[concepts/tokens|tokens]] than delegating to [[concepts/specialized-sub-agents|specialized sub-agents]]. Additionally, insufficient planning around information [[concepts/flow|flow]] between agents can result in repeated [[entities/api-calls|API calls]] for the same data or excessive context passing. Understanding the [[concepts/token-consumption|token consumption]] patterns of your specific [[concepts/adoption|implementation]] is essential before optimizing, as assumptions about efficiency gains may not reflect actual usage.
## Source Notes
- 2026-04-26: DeepSeek V4: China