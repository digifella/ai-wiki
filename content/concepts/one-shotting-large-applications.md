---
type: concept
domain: ai-agents
group: applied-ai-workflows
tags:
  - "concept"
  - "claude-code"
  - "long-running-sessions"
  - "code-fixing"
  - "ai-workflows"
  - "debugging"
aliases:
  - "Fixing Long-Running Claude Sessions"
  - "Single-Shot Application Handling"
summary: A workflow approach for effectively managing and fixing long-running Claude code sessions in a single interaction.
updated: 2026-05-01
---
# One Shotting Large Applications

One shotting large applications refers to a workflow strategy in AI-agent interactions where a complete application or substantial code project is managed, built, and debugged within a single continuous conversation [[concepts/session|session]] with [[concepts/claude-ai|Claude]]. Rather than breaking work across multiple separate interactions, this approach maintains context throughout development, allowing the model to track architectural decisions, dependencies, and state changes without loss of information between requests.

This technique is particularly relevant for cost-sensitive [[concepts/scenarios|scenarios]], since each new conversation with Claude incurs overhead and context re-establishment costs. By consolidating work into one extended session, developers can reduce redundant [[concepts/explanations|explanations]] and re-[[concepts/prompting|prompting]] of project context. However, the approach is constrained by Claude's [[concepts/context-window|context window]] limits, which means it is most practical for moderately-sized projects rather than extremely large codebases.

## Practical Considerations

The effectiveness of one shotting depends on clear initial specification and [[concepts/iterative-refinement|iterative refinement]] within the session. Developers should provide comprehensive project requirements upfront, then work through implementation and [[concepts/debugging|debugging]] sequentially. This reduces the need for context-switching and allows Claude to maintain deeper understanding of the overall system as it evolves.

[[concepts/token-consumption|Token consumption]] remains a consideration even within a single session. While one shotting reduces per-conversation overhead, very large [[concepts/software|applications]] or extensive debugging sessions may still approach context limits, requiring developers to make strategic choices about which code sections to include in detail versus reference at a high level.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]