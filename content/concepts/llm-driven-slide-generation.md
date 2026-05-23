---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "llm-generation"
  - "slide-presentations"
  - "markdown"
  - "marp"
  - "ai-automation"
  - "multimodal"
aliases:
  - "AI-Generated Presentations"
  - "Markdown Slide Generation"
  - "Marp System"
summary: System for automatically generating presentation slides from markdown using LLMs and tools like Marp.
updated: 2026-05-23
group: multimodal-generative-media
---
# LLM Driven Slide Generation

LLM-driven slide generation is an automated approach to creating presentation decks by leveraging [[concepts/large-language-model-llm|large language models]] (LLMs) to convert structured [[concepts/text|text]]—typically [[concepts/markdown|markdown]]—into formatted [[entities/google-slides|slides]]. The system uses tools like [[concepts/marp-system|Marp]], a markdown presentation ecosystem, to render the generated content into visual presentations. Rather than manually authoring [[concepts/google-slides|slides]] through traditional presentation [[concepts/software|software]], users can describe their content in markdown format, which an LLM then processes to generate appropriate slide [[concepts/structure|structure]], layout decisions, and formatting.

## Workflow and Implementation

The typical [[concepts/workflow|workflow]] involves feeding markdown content to an LLM, which interprets the structure and semantics to determine slide boundaries, [[concepts/hierarchy|hierarchy]], and visual [[concepts/organization|organization]]. Tools like Marp handle the conversion from markdown to HTML or PDF presentations, while the LLM can assist with content generation, refinement, and organization decisions. This approach reduces manual formatting work and allows speakers to focus on content rather than [[concepts/design|design]].

## Applications and Limitations

The system is particularly useful for rapidly generating presentations from research [[concepts/notes|notes]], documentation, or lecture materials. However, effectiveness depends on the quality of input markdown and the LLM's ability to [[entities/make|make]] appropriate presentation design choices. Complex visual requirements—custom graphics, intricate layouts, or highly stylized designs—may still require manual intervention or [[concepts/specialized-tools|specialized tools]] beyond the markdown-to-slides pipeline.
## Source Notes
- 2026-04-12: [[concepts/claude-code|Claude Code + Karpathy Slides Just Changed Presentations Forever (MARP System)]]