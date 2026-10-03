---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "source-grounded-generation"
  - "notebooklm"
  - "gemini"
  - "presentation-design"
  - "ai-generative-tools"
aliases:
  - "grounded generation"
  - "source-grounded outputs"
summary: Google NotebookLM uses Gemini to generate customized professional presentation designs as an alternative to Canva.
updated: 2026-07-12
group: multimodal-generative-media
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Source Grounded Generation

Source [[concepts/source-based-ai-grounding|Grounded Generation]] refers to [[concepts/ai-models|AI systems]] that produce new content—such as presentations, documents, or analyses—based directly on provided [[concepts/notebooklm-sources|source materials]]. Rather than generating from general [[concepts/custom-dataset|training data]] alone, these systems maintain explicit references to input documents, enabling outputs that are traceable to specific sources and customized to user-provided information. This approach addresses a key limitation of standard [[concepts/generative-ai|generative AI]]: the tendency to produce plausible-sounding but unsourced content disconnected from actual reference materials.

## How It Works

In source grounded generation, the AI model receives both a user request and specific source documents as input. The system then generates output by [[concepts/reasoning|reasoning]] over and drawing from these sources, rather than relying solely on patterns learned during training. This allows the generated content to reflect the actual information, structure, and context provided by the user, while maintaining verifiable connections between the output and its source basis.

## Practical Applications

[[concepts/notebooklm|Google NotebookLM]] exemplifies this approach by using [[concepts/gemini|Gemini]] to generate customized presentations, documents, and analyses based on uploaded source materials. Users can provide [[concepts/notes|notes]], research papers, or other documents, and the system creates tailored outputs that reference and build upon that specific content. This differs from general-purpose design tools like [[entities/canva|Canva]], which require manual [[concepts/content-creation|content creation]] and lack direct grounding in source documents.

Source grounded generation is particularly valuable in research, professional documentation, and [[concepts/knowledge-work|knowledge work]] contexts where traceability and accuracy relative to source material are important requirements.
## Source Notes
- 2026-04-08: Google's NotebookLM Just DESTROYED Canva With 1 Update
- 2026-04-07: [[lab-notes/2026-04-07-Google-NotebookLM-Enhanced-Research-and-Multi-Format-Content-Synthesis|Google NotebookLM Enhanced Research and Multi Format Content Synthesis]] · [▶ source](https://www.youtube.com/watch?v=_uXnyhrqmsU)
- 2026-04-28: Integrating Claude AI · [▶ source](https://www.youtube.com/watch?v=7sInxhTDA7U)
