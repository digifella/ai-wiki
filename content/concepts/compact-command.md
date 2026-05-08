---
type: concept
domain: tools-platforms
group: developer-tooling-clis
tags:
  - "claude-code"
  - "sub-agents"
  - "context-engineering"
  - "api-optimization"
  - "agentic-ai"
  - "best-practices"
aliases:
  - "Claude Code Sub-Agents"
  - "Context Engineering for Agents"
summary: This resource covers best practices for using sub-agents within Claude Code, focusing on context engineering and API cost optimization.
updated: 2026-05-01
---
# Compact Command

Compact Command refers to a set of [[concepts/best-practices|best practices]] for implementing sub-[[concepts/agents|agents]] within [[concepts/ai-assisted-coding|Claude Code]], with emphasis on efficient [[concepts/context-management|context management]] and [[concepts/ai-conceptscost-optimizationcost-optimization|cost control]]. The approach addresses common implementation pitfalls that arise when developers initially adopt [[concepts/agentic-patterns|agentic patterns]] without careful consideration of system design. Rather than pursuing sub-agent architectures prematurely, Compact Command advocates for deliberate evaluation of when and how to decompose tasks across multiple agents.

## Context Engineering

Effective sub-agent use depends heavily on precise context engineering—providing each agent with exactly the information needed for its task without unnecessary overhead. This reduces [[concepts/token-consumption|token consumption]] and improves response quality by eliminating irrelevant details that can confuse the model or bloat [[entities/api-calls|API calls]]. Careful framing of the problem space and clear specification of agent responsibilities ensures that delegated tasks remain focused and tractable.

## Cost Optimization

Sub-agent implementations can quickly become expensive if not designed with API costs in mind. Each agent call incurs processing fees, and poorly structured delegation can multiply costs across multiple unnecessary calls. Compact Command emphasizes measuring the actual cost-benefit tradeoff of decomposition, ensuring that the improved capability or task handling justifies the additional API expenditure rather than assuming that more agents automatically yield better results.

## Source Notes
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-07: [[lab-notes/2026-04-07-Demystifying-Claude-Code-Key-Concepts-for-Non-Technical-Users|Demystifying Claude Code Key Concepts for Non Technical Users]] · [▶ source](https://www.youtube.com/watch?v=fBsHZcyUZG8)