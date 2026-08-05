---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-07-11
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Compact Command

Compact Command is a methodology for implementing [[concepts/sub-agents|sub-agents]] within [[concepts/ai-assisted-coding|Claude Code]] that prioritizes efficient [[concepts/context-management|context management]] and [[concepts/cost-optimization|cost optimization]]. Rather than deploying multiple independent agents that each maintain complete system context, Compact Command uses structured delegation patterns to minimize redundant information processing. This approach reduces the total [[concepts/tokens|tokens]] consumed across agent interactions while maintaining effective [[concepts/task-decomposition|task decomposition]].

## Context Engineering

The core principle of Compact Command involves careful [[entities/national-academies|engineering]] of what context each sub-agent receives. Instead of passing full [[concepts/coding-instructions|system prompts]] and complete project state to every agent, only relevant information is forwarded at each delegation step. This requires identifying which context is necessary for a specific task and excluding extraneous details that would increase [[concepts/token-consumption|token consumption]] without adding value.

## Cost Optimization

By reducing context duplication across agent calls, Compact Command directly lowers API expenses. Each agent interaction consumes fewer tokens when limited to task-specific information, and the cumulative savings across multiple sub-agent calls becomes significant in [[concepts/complex-workflows|complex workflows]]. This makes the approach particularly valuable for applications that rely on frequent agent delegation or operate under tight budget constraints.

Compact Command complements broader [[concepts/agentic-frameworks|agentic frameworks]] by providing practical guidelines for making [[concepts/expertise-based-ai-assistants|multi-agent systems]] more efficient without sacrificing capability or performance.
## Source Notes
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-07: [[lab-notes/2026-04-07-Demystifying-Claude-Code-Key-Concepts-for-Non-Technical-Users|Demystifying Claude Code Key Concepts for Non Technical Users]] · [▶ source](https://www.youtube.com/watch?v=fBsHZcyUZG8)
