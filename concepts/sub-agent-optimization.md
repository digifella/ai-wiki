---
type: concept
domain: ai-agents
tags:
  - "sub-agents"
  - "context-engineering"
  - "claude-code"
  - "optimization"
  - "best-practices"
  - "agent-systems"
aliases:
  - "Sub-Agent Best Practices"
  - "Claude Code Sub-Agent Optimization"
summary: This concept covers best practices and common pitfalls for optimizing sub-agents within Claude Code using context engineering.
updated: 2026-07-12
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Sub Agent Optimization

[[concepts/context-overload|Sub-agent optimization]] in [[concepts/ai-assisted-coding|Claude Code]] involves designing subordinate agents that balance specialized focus against the [[concepts/operational-costs|operational costs]] of managing multiple agent instances. Each sub-agent operates with a narrower [[concepts/context-window|context window]] and more targeted [[concepts/instructions|instructions]] than a monolithic system would maintain, allowing it to perform specific tasks with reduced overhead. However, this benefit depends critically on proper configuration; poorly designed [[concepts/sub-agents|sub-agents]] often introduce latency, context fragmentation, and [[concepts/coordination|coordination]] complexity that outweighs any [[concepts/performance-gains|performance gains]].

## Context Engineering for Sub-Agents

Effective sub-agent optimization requires careful [[concepts/ai-performance-optimization|context engineering]]—providing each agent with only the information necessary for its assigned tasks while maintaining sufficient context for accurate [[concepts/decision-making|decision-making]]. Over-provisioning context to sub-agents defeats their purpose, while under-provisioning leads to errors and excessive inter-agent communication. The key is identifying natural task boundaries where information requirements are genuinely distinct, rather than arbitrarily splitting work across agents.

## Common Implementation Pitfalls

A frequent mistake is creating too many sub-agents for marginally different tasks, which fragments execution and increases coordination overhead. Another common problem is insufficient specification of hand-off protocols between agents, leading to ambiguous state transfers or information loss. Additionally, sub-agents with overlapping responsibilities can create confusion about task ownership and duplicate work, while those with unclear failure modes may silently produce degraded results rather than escalating problems appropriately.

## Trade-offs and Constraints

The decision to implement sub-agents should account for latency introduced by inter-agent communication, the complexity of maintaining consistent state across multiple instances, and the operational burden of monitoring and [[concepts/debugging|debugging]] [[concepts/multi-agent-systems|distributed agent systems]]. Sub-agents are most effective for tasks with clear boundaries, well-defined inputs and outputs, and sufficient [[concepts/specialization|specialization]] to justify the added complexity. In cases where task coupling is tight or context requirements highly overlapping, a unified agent with focused instructions often performs better.
## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-10: [[lab-notes/2026-04-10-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
- 2026-04-11: [[lab-notes/2026-04-11-Claude-Co-Work-8-Advanced-Use-Cases-for-AI-Powered-Workflow-Automation|Claude Co Work 8 Advanced Use Cases for AI Powered Workflow Automation]] · [▶ source](https://www.youtube.com/watch?v=gp3d7RAgFME)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
