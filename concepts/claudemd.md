---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "coding-tools"
  - "repository-context"
  - "agent-performance"
  - "claude-md"
  - "development-workflows"
  - "prompt-engineering"
aliases:
  - "Claude.md"
  - "AGENTS.md"
  - "Repository Context File"
  - "Agent Guidance File"
summary: A repository-level context file intended to guide AI coding agents, but recent studies indicate it may decrease agent performance.
updated: 2026-07-11
group: coding-agents-dev-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# CLAUDE

Repository-level context file intended to guide [[concepts/ai-coding|AI coding]] agents, but recent research indicates it may **decrease** agent effectiveness.

## Key Findings

- [[entities/eth-zurich|ETH Zurich]]'s 2026 study *"Evaluating AGENTS.md: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful for [[concepts/coding|Coding]] Agents?"* found that `[[concepts/claude-ai|CLAUDE]].md` and `AGENTS.md` files **hinder** [[concepts/ai-agent|AI agent]] performance in [[concepts/coding|coding]] tasks.
- Contradicts common industry practice of using context files for agent [[concepts/recommendations|guidance]].
- Study demonstrates that agents perform/perform worse with these files compared to baseline configurations.
- Analysis from [[entities/theo|Theo]] confirms that [[entities/claude|Claude]].md and [[concepts/agentsmd|agents.md]] files can lead to degraded AI performance ([Source](https://www.youtube.com/watch?v=GcNu6wrLTJc)).

## Implications

- **Avoid using context files**: `CLAUDE.md` and `AGENTS.md` should be omitted from repositories to prevent degraded agent output.
- **Alternative approaches**: Prioritize structured codebases, explicit prompts, or direct [[concepts/code|codebase]] analysis over context files.
- **Industry shift**: Challenges widespread [[concepts/adoption|adoption]] of repository-level context files in [[concepts/ai-coding-workflows|AI coding tools]].

## Related Concepts

- [[concepts/agentsmd]]: Repository-level context file concept shown to reduce agent effectiveness.
- [[concepts/ai-coding|AI coding]] agents: Broader category of [[concepts/ai-tools|AI tools]] requiring optimized [[concepts/recommendations|guidance]] methods.
- [[concepts/context-management]]: Techniques for managing [[concepts/external-knowledge|agent context]] and [[concepts/instructions|instructions]].

## Backlinks

- 2026 04 14 AI can work worse with Claudemd and agentsmd files Channel [[entities/theo|Theo]]
