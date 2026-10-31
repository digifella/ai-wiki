---
type: entity
tags:
  - "LLM"
  - "MoE"
  - "GLoM"
  - "Colibri"
  - "OpenSource"
  - "ConsumerHardware"
  - "glom-52"
  - "mixture-of-experts"
  - "consumer-hardware"
  - "local-inference"
aliases:
  - "GLoM 5.2"
summary: "GLoM 5.2 is a 744-billion parameter Mixture-of-Experts model that can be deployed on consumer-grade hardware through Colibri integration, utilizing quantization and routing techniques to bypass previous hardware limitati"
updated: 2026-07-22
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
# GLoM 5.2

**[[concepts/qwen-36-35b-a3b|GLoM 5.2]]** is a massive 744-billion parameter [[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE) [[concepts/large-language-model|Large Language Model]]. Historically constrained to high-end server infrastructure due to its size, recent developments have enabled its deployment on [[concepts/consumer-grade-hardware|consumer-grade hardware]].

## Key Developments

- **[[concepts/storage-bandwidth|Colibri]] Integration**: The [[entities/colibri]] project has successfully unlocked the execution of the 744B parameter GLoM 5.2 model on consumer laptops, challenging previous [[concepts/hardware-limitations|hardware limitations]].
- **Hardware [[concepts/accessibility|Accessibility]]**: This breakthrough allows for [[concepts/edge-deployment|local inference]] of massive MoE architectures without requiring enterprise-grade [[concepts/gpu-clusters|GPU clusters]].
- **Technical Context**: The optimization leverages advanced [[concepts/parameter-reduction|quantization]] and routing techniques to fit the model's weight matrix into consumer RAM/VRAM constraints.

## References

- [[lab-notes/2026-07-22-Colibri-Unlocking-744B-MoE-LLMs-for-Consumer-Grade-Lapto|Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops]]
- [Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops](https://www.youtube.com/watch?v=Pb6P8GW7elI)
