---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "benchmarking"
  - "context-management"
  - "eth-zurich"
  - "coding-assistance"
aliases:
  - "AgentBench Benchmark"
  - "AI Coding Agent Evaluation"
summary: Agentbench is a benchmark for evaluating AI coding agents' context management, with a 2026 ETH Zurich study finding that repository-level context files (AGENTS.md/CLAUDE.md) decrease agent performance.
updated: 2026-07-11
group: training-fine-tuning-evaluation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# AGENTBENCH

Benchmark for evaluating [[concepts/ai-coding-agents|AI coding agents]], particularly focusing on [[concepts/context-management|context management]] techniques.

## Key Findings from ETH Zurich Study (2026)

- Recent empirical study *"Evaluating [[concepts/agentsmd|AGENTS.md]]: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful for [[concepts/ai-coding-assistance|Coding Agents]]?"* ([[entities/eth-zurich|ETH Zurich]], February 2026) found **repository-level context files (AGENTS.md/[[concepts/claude-ai|CLAUDE]].md) decrease agent performance**.
- Challenges common industry practice of using these files to guide agents.
- Agents performed **worse** with these context files compared to no context files.
- Study suggests context files may introduce noise or misdirection in agent [[concepts/reasoning|reasoning]].

## Implications

- Avoid using AGENTS.md/CLAUDE.md in repositories intended for [[concepts/ai-agent|AI agent]] interaction.
- Requires reevaluation of [[concepts/context-management|context management]] strategies in [[concepts/agent-development|agent development]].
- Suggests minimal context may outperform structured context files for [[concepts/coding|coding]] agents.

## Reference

- [Study summary video](https://www.youtube.com/watch?v=GcNu6wrLTJc) (Channel [[entities/theo|Theo]], 2026-04-14)

2026 04 14 AI can work worse with [[concepts/claudemd|Claudemd]] and agentsmd files Channel Theo
