---
type: concept
domain: ai-agents
summary: A technique in artificial intelligence that constrains model responses to a user-provided dataset to ensure factual accuracy and minimize hallucinations.
updated: 2026-05-23
group: applied-ai-workflows
---
# Source-based AI grounding

A technique used in [[concepts/ai-technologies|Artificial Intelligence]] to constrain model [[concepts/responses|responses]] to a specific, user-provided dataset, ensuring factual [[concepts/accuracy|accuracy]] and minimizing [[concepts/data-hallucination|hallucination]].

### Core Mechanics
- **Contextual Limitation**: Uses specific sources to provide a "ground truth," reducing the likelihood of the model generating unfounded information.
- **[[concepts/information-synthesis|Information Synthesis]]**: Capable of aggregating and synthesizing data across multiple formats, including:
	- PDF
	- [[entities/google-docs]]
	- [[concepts/google-slides]]
	- [[concepts/audio-modality|Audio]]
	- URL
- **[[concepts/content-transformation|Content Transformation]]**: Enables the conversion of grounded source material into structured outputs such as [[concepts/data-tables]], [[concepts/infographic]], [[entities/google-slides|slides]], and videos.

### Key Implementations
- [[entities/notebooklm]]: A specialized tool designed for source-based grounding, acting as a comprehensive content system for productivity.

### Related Concepts
- [[concepts/retrieval-augmented-generation-rag]]
- [[concepts/context-window]]
- [[concepts/data-synthesis|Data Synthesis]]

---
**Backlink**: [[concepts/date-2026-04-13|2026]] 04 14 [[concepts/notebooklm|NotebookLM]] [[concepts/date-2026-04-13|2026]] [[entities/grace-leung|Grace Leung]] channel
