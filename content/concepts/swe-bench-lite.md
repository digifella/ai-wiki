---
type: concept
domain: tools-platforms
summary: SWE-bench Lite is a lightweight benchmark for evaluating AI agents' software engineering capabilities, focusing on code generation and GitHub issue resolution.
updated: 2026-05-23
group: developer-tooling-clis
---
# SWE-bench Lite

SWE-bench Lite is a lightweight benchmark for evaluating [[concepts/agentic-ai|AI agents]]' [[concepts/software-engineering|software engineering]] [[concepts/capabilities|capabilities]], focusing on [[concepts/code-generation|code generation]] and issue [[concepts/solution|resolution]] for [[entities/github|GitHub]] pull requests. It serves as a streamlined alternative to the full [[concepts/SWE-bench|SWE-bench]] suite, prioritizing efficient [[entities/agent|agent]] evaluation.

## Key Insights

- A 2026 [[entities/eth-zurich|ETH Zurich]] study ("Evaluating [[concepts/agentsmd|AGENTS.md]]: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful for [[concepts/ai-coding-assistance|Coding Agents]]?") demonstrated that **repository-level context [[concepts/files|files]]** (specifically `[[concepts/agents|AGENTS]].md` and `[[concepts/claude-ai|CLAUDE]].md`) can **decrease agent performance** by introducing misleading or redundant context.
- Industry practice of using these files to guide agents contradicts empirical findings, as they may confuse agents with irrelevant repository [[concepts/metadata|metadata]].
- This finding directly impacts SWE-bench Lite's evaluation [[concepts/setup|setup]], suggesting context files should be avoided in benchmark environments.

## Related Concepts

- [[concepts/ai-coding-agents]]
- Context [[concepts/files|Files]]
- [[concepts/SWE-bench|SWE-bench]]
- [[entities/agent|Agent]] Evaluation

## Backlink
2026 04 14 AI can work worse with [[concepts/claudemd|Claudemd]] and agentsmd files Channel [[entities/theo|Theo]]
## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)