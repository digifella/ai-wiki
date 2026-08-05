---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "claude-code"
  - "sub-agents"
  - "context-management"
  - "context-engineering"
  - "agentic-systems"
  - "anthropic"
summary: Claude Code sub-agents are used to address challenges in agentic systems such as context management and tool usage.
updated: 2026-07-11
group: anthropic-claude
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Claude Code Sub Agents

[[concepts/compact-command|Claude Code sub-agents]] are specialized autonomous components within [[entities/anthropic-institute|Anthropic]]'s [[concepts/claude-ai|Claude]] framework that function as subordinate agents within larger [[concepts/agentic-patterns|agentic workflows]]. They can be instantiated and managed by a parent agent, enabling modular decomposition of [[concepts/complex-tasks|complex tasks]]. This architectural approach addresses key limitations in traditional [[concepts/agentic-frameworks|agentic systems]] where a single agent must manage multiple concerns simultaneously.

## Core Function and Design

[[concepts/sub-agents|Sub-agents]] are designed to handle specific, well-defined tasks within a broader system. By delegating specialized work to dedicated agents, the parent agent can focus on higher-level orchestration and [[concepts/decision-making|decision-making]]. This [[concepts/separation-of-concerns|separation of concerns]] improves both [[concepts/software-reliability|reliability]] and scalability, as each sub-agent maintains its own context and tool access relevant to its domain.

## Problem Resolution

The [[concepts/sub-agent-architecture|sub-agent pattern]] directly addresses two significant challenges in [[concepts/agentic-systems|agentic systems]]. First, it mitigates [[concepts/context-window-limitations|context window limitations]] by allowing each agent to maintain focused, task-relevant context rather than requiring one agent to hold all information. Second, it enables more precise tool usage, as [[concepts/subagents|sub-agents]] can be equipped with specialized tool sets suited to their specific responsibilities, reducing irrelevant options and potential errors.

Sub-agents communicate results back to the parent agent through defined interfaces, maintaining system coherence while distributing computational and [[concepts/cognitive-load|cognitive load]] across multiple specialized components.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Obsidian-Integration-Creating-a-Persistent-AI-Operating-System|Claude Obsidian Integration Creating a Persistent AI Operating System]] · [▶ source](https://www.youtube.com/watch?v=eIXheJcxDIg)
