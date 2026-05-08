---
wiki-ingested: true
title: "NotebookLM + Gemini Workflow: Optimizing AI Prompts for Structured Output"
created: "2026-04-07 14:45"
date: 2026-04-07
source: lab-summary
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
---
## NotebookLM + Gemini Workflow: Optimizing AI Prompts for Structured Output
**Clip title:** I Built a [[entities/notebook-lm|NotebookLM]] + Gemini Workflow That Makes [[entities/prompt-engineering|Prompt Engineering]] Pointless
**Author / channel:** Craig Does AI
**URL:** https://www.youtube.com/watch?v=W-rtNL_Uf3I

### Summary
This video introduces a practical workflow designed to optimize "messy" or
vague AI prompts into clean, structured, and consistent outputs using
Google's NotebookLM and Gemini. The presenter, inspired by his wife's
preference for simplicity over complex [[concepts/prompting|prompting]] frameworks, demonstrates
how to achieve reliable AI [[concepts/responses|responses]] without needing advanced [[concepts/prompt-based-modeling|prompt engineering]] skills. The core problem addressed is the inconsistency and
often unsatisfactory results users get from AI when prompts lack clear
[[concepts/structure|structure]] and a defined "thinking guide."

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
NotebookLM and upload two [[concepts/text|text]] files: one containing "System [[concepts/instructions|Instructions]]"
(which includes the JSON schema and [[concepts/reasoning|reasoning]] guidelines) and another with
"Example Pairs." These files are then converted into "sources" within
NotebookLM. Finally, the [[concepts/notebooklm-notebook|NotebookLM notebook]] is attached to a new chat in
[[entities/google-gemini|Google Gemini]] (or configured as a dedicated "Gem" for repeated use). This
[[concepts/setup|setup]] seamlessly integrates the structured instructions and examples,
allowing users to input simple, conversational prompts and receive
optimized, consistent outputs.

The primary takeaway is that this two-pronged approach—combining JSON for
output structure with example pairs for a reasoning guide—significantly
enhances the quality and [[concepts/logical-consistency|consistency]] of AI-generated content. It empowers
users to get predictable, high-quality results from AI even with minimal
effort in crafting their initial prompts. The workflow works with a free
basic Google account, making advanced AI capabilities more accessible and
user-friendly by automating the complexities of prompt optimization.

## Related Concepts
- [[concepts/notebooklm-gemini-workflow|NotebookLM-Gemini Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/NotebookLM-Gemini_Workflow)
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [[concepts/structured-output|Structured Output]] — [Wikipedia](https://en.wikipedia.org/wiki/Structured_Output)
- [[concepts/ai-prompt-optimization|AI Prompt Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Prompt_Optimization)
- [JSON Schema](https://en.wikipedia.org/wiki/JSON_Schema) — [Wikipedia](https://en.wikipedia.org/wiki/JSON_Schema)
- Example Pairs — [Wikipedia](https://en.wikipedia.org/wiki/Example_Pairs)
- [[concepts/system-instructions|System Instructions]] — [Wikipedia](https://en.wikipedia.org/wiki/System_Instructions)
- [[concepts/prompt-engineering|Prompt Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Optimization)
- [[concepts/ai-workflow|AI Workflows]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Workflows)
- [[concepts/reasoning|Reasoning]] Guidelines — [Wikipedia](https://en.wikipedia.org/wiki/Reasoning_Guidelines)
- Few-shot [[concepts/prompting|Prompting]] — [Wikipedia](https://en.wikipedia.org/wiki/Few-shot_Prompting)
- [[concepts/consistent-ai-responses|Consistent AI Responses]] — [Wikipedia](https://en.wikipedia.org/wiki/Consistent_AI_Responses)
- [Google Gems](https://en.wikipedia.org/wiki/Google_Gems) — [Wikipedia](https://en.wikipedia.org/wiki/Google_Gems)
- [Prompting Frameworks](https://en.wikipedia.org/wiki/Prompting_Frameworks) — [Wikipedia](https://en.wikipedia.org/wiki/Prompting_Frameworks)
- [Input-Output Mapping](https://en.wikipedia.org/wiki/Input-Output_Mapping) — [Wikipedia](https://en.wikipedia.org/wiki/Input-Output_Mapping)
- [Automated Prompting](https://en.wikipedia.org/wiki/Automated_Prompting) — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Prompting)
- [AI Output Structuring](https://en.wikipedia.org/wiki/AI_Output_Structuring) — [Wikipedia](https://en.wikipedia.org/wiki/AI_Output_Structuring)
