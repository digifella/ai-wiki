---
type: concept
domain: ai-agents
tags:
  - "prompt-engineering"
  - "llm-usage"
  - "superficial-results"
  - "user-behavior"
  - "output-quality"
aliases:
  - "Prompting LLMs Effectively"
  - "LLM Prompt Strategy"
summary: Kevin Patrick Robbins explains that using overly simplistic prompts results in superficial outputs from large language models.
updated: 2026-05-23
group: model-efficiency-compression
---
# Effective Use Of Llms

[[concepts/large-language-model-llm|Large language models]] (LLMs) often produce superficial outputs because users typically rely on overly simplistic prompts. When given minimal context or vague [[concepts/instructions|instructions]], LLMs lack the necessary constraints and detail to generate nuanced, substantive [[concepts/responses|responses]]. This limitation reflects a common misconception that LLMs work best with brief, straightforward queries—when in fact they perform better with well-structured, detailed prompts that clearly define the task, context, and desired [[concepts/output|output]] format.

## Prompt Engineering

Effective LLM use requires intentional prompt [[concepts/design|design]]. Rather than assuming a simple question [[entities/will|will]] yield adequate results, users should provide specific context, define the scope of the task, specify the format for responses, and articulate what success looks like. This approach—often called [[concepts/prompt-based-modeling|prompt engineering]]—transforms LLM outputs from generic to contextually appropriate and detailed.

## Code Over Markdown

When LLMs are tasked with complex operations such as [[concepts/web-crawling|web scraping]] or data processing, incorporating code-based instructions yields better results than relying on [[concepts/markdown|markdown]] descriptions or natural language [[concepts/explanations|explanations]] alone. [[concepts/code|Code]] provides unambiguous specifications that LLMs can execute more reliably than prose-based instructions, making it a more efficient approach for technical tasks that require precision and repeatability.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Agent-Skills-Why-Code-Enhances-LLM-Efficiency-Over-Markdown-for-Scrapi|Agent Skills Why Code Enhances LLM Efficiency Over Markdown for Scrapi]] · [▶ source](https://www.youtube.com/watch?v=IjiaCOt7bP8)
- 2026-04-10: [[lab-notes/2026-04-10-Anthropics-Project-Glasswing-AIs-Dual-Role-in-Software-Cybersecurity|Anthropics Project Glasswing AIs Dual Role in Software Cybersecurity]] · [▶ source](https://www.youtube.com/watch?v=INGOC6-LLv0)
- 2026-04-28: ChatGPT · [▶ source](https://www.youtube.com/watch?v=QrvVkm-8Jx4)
- 2026-04-29: Optimizing LLM Agent · [▶ source](https://www.youtube.com/watch?v=rU6IYiQ1SdQ)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)