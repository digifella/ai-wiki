---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "repository-context"
  - "coding-assistance"
  - "performance-degradation"
  - "eth-zurich-study"
aliases:
  - "AGENTS.md file"
  - "agent context file"
  - "repo-level guidance"
  - "ai coding instructions"
summary: AGENTS.md, a repository-level context file for AI coding agents, degrades performance in coding tasks according to an ETH Zurich study.
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# AGENTS.md

Repository-level context file providing project-specific [[concepts/recommendations|guidance]] to [[concepts/ai-coding|AI coding]] agents (e.g., structure, conventions, key functions). Commonly used alongside [[entities/claude|CLAUDE]].[[concepts/markdown-files|md files]].

## Key Findings (ETH Zurich Study, 2026)
- AGENTS.md and [[concepts/claude-ai|CLAUDE]].md context files **degrade** [[concepts/ai-agent|AI agent]] performance in [[concepts/coding|coding]] tasks
- Contradicts industry practice of using such files to improve agent effectiveness
- Study titled *"Evaluating AGENTS.md: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful for [[concepts/ai-coding-assistance|Coding Agents]]?"* ([[entities/eth-zurich|ETH Zurich]], Feb 2026)

## Implications
- Context files may introduce noise or misdirection for [[concepts/agentic-ai|AI agents]]
- Requires reevaluation of repository setup practices
- Suggests minimal context may be preferable to structured context files

## References
- Study: [Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?](https://ethz.ch/study) ([[entities/eth-zurich|ETH Zurich]], Feb 2026)
- Video: [AI can work worse with Claude.md and agents.md files](https://www.youtube.com/watch?v=GcNu6wrLTJc) (Channel [[entities/theo|Theo]])
- Source Note: 2026 04 14 AI can work worse with [[concepts/claudemd|Claudemd]] and agentsmd files Channel [[entities/theo|Theo]]
