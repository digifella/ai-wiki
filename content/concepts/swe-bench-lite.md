---
type: concept
domain: tools-platforms
tags:
  - "swe-bench"
  - "ai-coding"
  - "agents"
  - "context-files"
  - "swe-bench-lite"
  - "ai-agents"
  - "software-engineering"
  - "benchmark-evaluation"
  - "code-generation"
aliases:
  - "SWE-bench Lite"
summary: "SWE-bench Lite is a lightweight benchmark for evaluating AI agents' software engineering capabilities, focusing on code generation and GitHub issue resolution."
updated: 2026-04-17
group: developer-tooling-clis
---
# SWE-bench Lite

SWE-bench Lite is a lightweight benchmark for evaluating [[concepts/agentic-ai|AI agents]]' [[concepts/software-engineering|software engineering]] capabilities, focusing on code generation and issue [[concepts/solution|resolution]] for GitHub pull requests. It serves as a streamlined alternative to the full [[concepts/SWE-bench|SWE-bench]] suite, prioritizing efficient agent evaluation.

## Key Insights

- A 2026 [[entities/eth-zurich|ETH Zurich]] study ("Evaluating [[concepts/agentsmd|AGENTS.md]]: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful for [[concepts/ai-coding-assistance|Coding Agents]]?") demonstrated that **repository-level context files** (specifically `[[concepts/agents|AGENTS]].md` and `[[concepts/claude-ai|CLAUDE]].md`) can **decrease agent performance** by introducing misleading or redundant context.
- Industry practice of using these files to guide agents contradicts empirical findings, as they may confuse agents with irrelevant repository [[concepts/metadata|metadata]].
- This finding directly impacts SWE-bench Lite's evaluation [[concepts/setup|setup]], suggesting context files should be avoided in benchmark environments.

## Related Concepts

- [[concepts/ai-coding-agents]]
- Context Files
- SWE-bench
- Agent Evaluation

## Backlink
2026 04 14 AI can work worse with Claudemd and agentsmd files Channel Theo

## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)