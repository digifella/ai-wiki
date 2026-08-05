---
type: concept
domain: ai-agents
tags:
  - "instruction-tuning"
  - "fine-tuning"
  - "llm-alignment"
  - "natural-language-commands"
aliases:
  - "Instruction Fine-Tuning"
  - "Aligning LLMs"
  - "Prompt Alignment"
summary: Instruction tuning is a fine-tuning technique used to align large language models to follow specific user prompts and instructions by training on instruction and output pairs.
updated: 2026-07-11
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Instruction tuning

Instruction tuning is a [[concepts/fine-tuning]] technique used to align [[concepts/large-language-models]] (LLMs) to follow specific user prompts and [[concepts/instructions|instructions]]. It transforms a base [[concepts/pre-trained-model|pre-trained model]] into an assistant capable of executing tasks through natural language [[concepts/commands|commands]] by training on (instruction, output) pairs.

### Specialized Implementations
- **[[concepts/dermatology-images|MedGemma 27B]]**: A specialized medical AI model developed by [[concepts/google-search|Google]].
	- Built on the [[concepts/gemma-3-architecture|Gemma 3 architecture]].
	- Designed for high-level medical text and image comprehension (Multimodal LLM).
	- Available in multiple [[concepts/musical-scales|scales]], including:
		- A 4B multimodal model (available in both pre-trained and instruction-tuned versions).
		- A 27B parameter variant.
	- Primary focus on Medical AI and complex multimodal medical data analysis.

---
**Backlink**: 2026 04 14 [[entities/medgemma-27b|MedGemma 27B]] [[entities/fahd-merza|Fahd Merza]]
## Source Notes

- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-07: [[lab-notes/2026-04-07-Gemma-4-E2B-LLM-Fine-Tuning-Custom-Dataset-Unsloth-Local-Tutorial|Gemma 4 E2B LLM Fine Tuning Custom Dataset Unsloth Local Tutorial]] · [▶ source](https://www.youtube.com/watch?v=cHpB0PTRx5A)
