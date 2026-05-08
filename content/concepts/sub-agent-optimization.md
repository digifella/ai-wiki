---
type: concept
domain: ai-agents
group: agent-systems-skills
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
updated: 2026-05-01
---
# Sub Agent Optimization

[[concepts/context-overload|Sub-agent optimization]] within [[concepts/ai-assisted-coding|Claude Code]] involves strategic use of [[concepts/external-knowledge|context engineering]] to improve performance and reduce computational overhead. When implementing sub-[[concepts/agents|agents]], developers must balance [[concepts/leadership|task delegation]] with the costs of maintaining separate agent instances and managing inter-agent communication. Poorly optimized sub-agent implementations can introduce unnecessary latency and increased [[concepts/token-consumption|token consumption]] without proportional gains in capability or response quality.

## Context Engineering for Sub-Agents

Effective sub-agent optimization depends on carefully engineered context that provides each agent with precisely what it needs to complete its assigned task. Rather than passing full [[concepts/conversation-history|conversation history]] or redundant [[concepts/system-instructions|system instructions]] to every sub-agent, optimization involves filtering context to task-relevant information. This reduces token overhead while maintaining the semantic clarity needed for accurate task execution. The key is determining the minimal sufficient context that allows a sub-agent to operate effectively without degradation in performance.

## Common Implementation Pitfalls

A frequent mistake in early sub-agent implementations is creating sub-agents too readily or for tasks that don't genuinely benefit from delegation. Not all problems require multiple agents; in many cases, a well-designed single agent with appropriate context performs better and consumes fewer [[concepts/tokens|tokens]]. Additionally, insufficient monitoring of sub-agent interactions can create compounding errors, where mistakes from one agent propagate to others. Developers should establish clear evaluation criteria before implementing sub-agents to ensure they solve genuine bottlenecks rather than adding unnecessary complexity.

## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-10: [[lab-notes/2026-04-10-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
- 2026-04-11: [[lab-notes/2026-04-11-Claude-Co-Work-8-Advanced-Use-Cases-for-AI-Powered-Workflow-Automation|Claude Co Work 8 Advanced Use Cases for AI Powered Workflow Automation]] · [▶ source](https://www.youtube.com/watch?v=gp3d7RAgFME)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)