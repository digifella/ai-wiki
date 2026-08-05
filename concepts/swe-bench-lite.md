---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ai-agents"
  - "software-engineering"
  - "code-generation"
  - "evaluation-benchmarks"
  - "github-issues"
aliases:
  - "SWE-Bench Lite"
  - "Lite SWE-Bench"
summary: SWE-bench Lite is a lightweight benchmark for evaluating AI agents' software engineering capabilities, focusing on code generation and GitHub issue resolution.
updated: 2026-07-12
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# SWE-bench Lite

[[concepts/swe-bench-verified|SWE-bench]] Lite is a lightweight benchmark for evaluating [[concepts/agentic-ai|AI agents]]' [[concepts/software-engineering|software engineering]] capabilities, focusing on [[concepts/code-generation|code generation]] and issue [[concepts/solution|resolution]] for [[entities/github|GitHub]] pull requests. It serves as a streamlined alternative to the full [[concepts/SWE-bench|SWE-bench]] suite, prioritizing efficient [[concepts/agent-evaluation|agent evaluation]].

## Key Insights

- A 2026 [[entities/eth-zurich|ETH Zurich]] study ("Evaluating [[concepts/agentsmd|AGENTS.md]]: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful for [[concepts/ai-coding-assistance|Coding Agents]]?") demonstrated that **repository-level context files** (specifically `AGENTS.md` and `[[concepts/claude-ai|CLAUDE]].md`) can **decrease agent performance** by introducing misleading or redundant context.
- Industry practice of using these files to guide agents contradicts empirical findings, as they may confuse agents with irrelevant repository [[concepts/metadata|metadata]].
- This finding directly impacts SWE-bench Lite's evaluation setup, suggesting context files should be avoided in benchmark environments.

## Related Concepts

- [[concepts/ai-coding-agents]]
- Context Files
- [[concepts/SWE-bench|SWE-bench]]
- [[concepts/agent-evaluation|Agent Evaluation]]

## Backlink
2026 04 14 AI can work worse with [[concepts/claudemd|Claudemd]] and agentsmd files Channel [[entities/theo|Theo]]
## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
