---
wiki-ingested: true
title: "NotebookLM  Gemini Workflow Optimizing AI Prompts for Structured Output"
created: "2026-04-10 14:05"
date: 2026-04-10
source: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## NotebookLM + Gemini Workflow: Optimizing AI Prompts for Structured Output
**Clip title:** I Built a [[entities/notebooklm|NotebookLM]] + [[entities/gemini|Gemini]] [[concepts/workflow|Workflow]] That Makes [[concepts/prompt-engineering|Prompt Engineering]] Pointless
**Author / channel:** [[entities/craig-does-ai|Craig Does AI]]
**URL:** https://www.youtube.com/watch?v=W-rtNL_Uf3I

### Summary
This video introduces a practical workflow designed to optimize "messy" or
vague AI prompts into clean, structured, and consistent outputs using
Google's [[concepts/notebooklm|NotebookLM]] and [[concepts/gemini|Gemini]]. The presenter, inspired by his wife's
preference for simplicity over complex [[concepts/prompting|prompting]] frameworks, demonstrates
how to achieve reliable AI responses without needing advanced [[entities/prompt-engineering|prompt engineering]] skills. The core problem addressed is the inconsistency and
often unsatisfactory results users get from AI when prompts lack clear
[[concepts/structure|structure]] and a defined "[[concepts/human-cognition|thinking]] guide."

The presenter explains that most prompts fail for two main reasons: a lack
of structure and an absence of a thinking guide. To combat the lack of
structure, the workflow utilizes JSON code to define the exact fields and
format the AI's output should take. This prevents the AI from "guessing"
what information is important or how to present it, ensuring consistent and
predictable results. For the "thinking guide," the [[concepts/solution|solution]] involves
providing "[example pairs](https://en.wikipedia.org/wiki/Example_Pairs)"—raw, unoptimized inputs alongside their desired,
structured outputs. These examples act as a reference point, teaching the
AI what a "good" response looks like and enabling it to self-correct and
reason effectively before generating its final answer.

Implementing this workflow is straightforward, requiring just two [[concepts/files|files]] and
taking approximately 5-10 minutes. Users create a new [[concepts/notebook|notebook]] in Google's
[[entities/notebooklm|NotebookLM]] and upload two [[concepts/text|text]] files: one containing "System [[concepts/instructions|Instructions]]"
(which includes the JSON schema and [[concepts/reasoning|reasoning]] guidelines) and another with
"Example Pairs." These files are then converted into "sources" within
[[concepts/ai-integrated-notebooks|NotebookLM]]. Finally, the [[concepts/notebooklm-notebook|NotebookLM notebook]] is attached to a new chat in
[[entities/google-gemini|Google Gemini]] (or configured as a dedicated "Gem" for repeated use). This
setup seamlessly integrates the structured instructions and examples,
allowing users to input simple, conversational prompts and receive
optimized, consistent outputs.

The primary takeaway is that this two-pronged approach—combining JSON for
output structure with example pairs for a [[concepts/reasoning|reasoning]] guide—significantly
enhances the quality and [[concepts/logical-consistency|consistency]] of AI-generated content. It empowers
users to get predictable, high-quality results from AI even with minimal
effort in crafting their initial prompts. The workflow works with a free
basic Google account, making advanced [[concepts/ai-capabilities|AI capabilities]] more accessible and
user-friendly by automating the complexities of [[concepts/prompt-optimization|prompt optimization]].

## Related Concepts
- [[concepts/gemini|Gemini Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_Workflow)
- [[concepts/structured-output|Structured Output]] — [Wikipedia](https://en.wikipedia.org/wiki/Structured_Output)
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [[concepts/prompt-engineering|Prompt Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Optimization)
- [JSON Schema](https://en.wikipedia.org/wiki/JSON_Schema) — [Wikipedia](https://en.wikipedia.org/wiki/JSON_Schema)
- [[concepts/system-instructions|System Instructions]] — [Wikipedia](https://en.wikipedia.org/wiki/System_Instructions)
- Example Pairs — [Wikipedia](https://en.wikipedia.org/wiki/Example_Pairs)
- [[concepts/ai-prompting-workflow|AI Prompting Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Prompting_Workflow)
- [Reasoning Guidelines](https://en.wikipedia.org/wiki/Reasoning_Guidelines) — [Wikipedia](https://en.wikipedia.org/wiki/Reasoning_Guidelines)
- [[concepts/usamo-2025|AI Reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Reasoning)
- [[concepts/notebooklm-workflow|NotebookLM Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/NotebookLM_Workflow)
- [[concepts/notebooklm-based-data-gathering|AI-generated Content]] — [Wikipedia](https://en.wikipedia.org/wiki/AI-generated_Content)
- [[concepts/prompting|Prompting]] Frameworks — [Wikipedia](https://en.wikipedia.org/wiki/Prompting_Frameworks)
- [[concepts/json-prompt-engineering|JSON Formatting]] — [Wikipedia](https://en.wikipedia.org/wiki/JSON_Formatting)
- [Prompting Logic](https://en.wikipedia.org/wiki/Prompting_Logic) — [Wikipedia](https://en.wikipedia.org/wiki/Prompting_Logic)
- [[concepts/creative-assistance|AI Instruction]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Instruction)
