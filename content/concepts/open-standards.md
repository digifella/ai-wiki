---
type: concept
domain: tools-platforms
group: developer-tooling-clis
tags:
  - "concept"
  - "open-standards"
  - "llm-agents"
  - "code-efficiency"
  - "markdown"
  - "web-scraping"
  - "developer-skills"
aliases:
  - "Standards"
  - "Open Specifications"
summary: Concept exploring how code-based implementations provide greater efficiency than markdown approaches for LLM agent skills and data scraping tasks.
updated: 2026-05-01
---
# Open Standards

Open Standards refers to publicly documented technical specifications and protocols that enable interoperability across different systems and implementations. In the context of LLM [[concepts/agent-development|agent development]], open standards provide a framework for defining how [[concepts/skills|skills]], data structures, and integrations should be implemented to maximize compatibility and reduce vendor lock-in.

## Code-Based Implementation vs. Markdown Approaches

Research into LLM agent architectures has demonstrated that code-based implementations of [[concepts/agent-harnesses|agent skills]] outperform markdown-based approaches in terms of execution efficiency and data [[concepts/scraping|scraping]] [[concepts/accuracy|accuracy]]. Code implementations allow for explicit type definitions, error handling, and complex logic flows that markdown specifications cannot reliably express. This becomes particularly important when [[concepts/agents|agents]] must handle edge cases or interact with external APIs during [[concepts/information-extraction|data extraction]] tasks. Markdown approaches, while easier to write and read, often result in ambiguous [[concepts/instructions|instructions]] that require additional LLM interpretation at runtime, introducing latency and potential errors.

## Practical Implications

For organizations deploying [[concepts/llm-based-agents|LLM agents]] at scale, adopting open standards around code-based skill definitions reduces integration overhead and improves agent [[concepts/software-reliability|reliability]]. When skills are defined in executable code rather than descriptive text, the agent can validate inputs and outputs deterministically, and other systems can more easily integrate with or extend the skill definitions. This standardization becomes increasingly valuable as agent ecosystems grow more complex, particularly in [[concepts/scenarios|scenarios]] involving [[concepts/web-crawling|web scraping]], API interactions, or multi-step workflows where failure tolerance is low.

## Source Notes
- 2026-04-07: Agent Skills: Code Beats Markdown (Here's Why)
- 2026-04-08: [[lab-notes/2026-04-08-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-30: Quantum Computing · [▶ source](https://www.youtube.com/watch?v=qV7hQEtr3ic)
- 2026-04-22: [[lab-notes/2026-04-22-AI-Agent-Skills-Bridging-LLM-Procedural-Knowledge-Gaps-and-Structure|AI Agent Skills: Bridging LLM Procedural Knowledge Gaps and Structure]] · [▶ source](https://www.youtube.com/watch?v=Lg-meK5IU8Q)