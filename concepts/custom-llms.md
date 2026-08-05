---
type: concept
domain: ai-agents
tags:
  - "llm-customization"
  - "model-fine-tuning"
  - "local-ai"
  - "small-language-models"
  - "parameter-efficient-training"
  - "domain-specialization"
aliases:
  - "Custom Large Language Models"
  - "Specialized LLMs"
  - "Fine-tuned Models"
  - "Personal AI Models"
summary: Custom LLMs are large language models adapted for specific domains or tasks through fine-tuning or training, often enabling efficient local execution on consumer hardware.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Custom LLMs

**Custom LLMs** refer to [[concepts/large-language-model-llm|Large Language Models]] that have been fine-tuned, trained from scratch, or adapted for specific domains, tasks, or user preferences. Unlike general-purpose [[concepts/foundation-model|foundation models]], custom LLMs are optimized for particular [[concepts/scenarios|use cases]], often requiring less computational power if the [[concepts/pre-trained-model|base model]] is small or if [[concepts/ai-model-fine-tuning|parameter-efficient fine-tuning]] techniques are employed.

## Key Characteristics
- **[[concepts/specialization|Specialization]]**: Tailored to specific datasets (e.g., medical, legal, code) or styles.
- **Efficiency**: Can run on consumer hardware if using [[concepts/small-language-models]] ([[concepts/compact-language-model|SLMs]]) or [[concepts/quantization-techniques|quantization techniques]].
- **[[concepts/privacy|Privacy]]**: Data remains local, avoiding cloud-based [[concepts/inference|inference]] risks.

## Training on Personal Hardware
Recent developments allow for the training and [[concepts/model-fine-tuning|fine-tuning]] of small models on standard personal computers, democratizing access to [[concepts/model-customization|model customization]].

- **Feasibility**: It is possible to train custom LLMs on a PC without specialized high-end hardware, provided the [[concepts/code-size|model size]] is constrained (e.g., <7B parameters) and efficient training methods are used.
- **Process**: The workflow typically involves [[concepts/data-cleaning|data preparation]], selecting a base model, and using frameworks that support low-resource training.
- **Reference**: See [[lab-notes/2026-07-11-Personal-Computer-Training-of-Small-Language-Models-for|Personal Computer Training of Small Language Models for Text Generation]] for a practical guide on training tiny LLMs in hours.

## Related Concepts
- [[concepts/fine-tuning]]
- [[concepts/model-compression]]
- [[concepts/small-language-models]]
- [[concepts/local-llm]]

## References
- [Personal Computer Training of Small Language Models for Text Generation](https://www.youtube.com/watch?v=T9egZA5ppQw)
