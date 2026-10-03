---
type: concept
domain: ai-agents
tags:
  - "bonsai-2.7b"
  - "model-distillation"
  - "local-ai"
  - "single-gpu"
  - "prism-ml"
aliases:
  - "Bonsai 2B"
  - "Prism ML Bonsai"
summary: Bonsai 2.7B is a distilled 2.7B parameter language model by Prism ML, derived from the Qwen-38-27B architecture to enable efficient local inference on single-GPU hardware.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-18T20:30:22+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Bonsai 2.7B

**[[concepts/bonsai-image|Bonsai]] 2.7B** is an exceptionally [[concepts/compact-language-model|compact language model]] developed by [[entities/prism-ml|Prism ML]], representing a distilled version of the [[entities/qwen-38-27b]] architecture. It is designed to optimize [[concepts/local-ai|local AI]] [[concepts/accessibility|accessibility]] by enabling powerful [[concepts/ai-inference|inference]] on single-GPU setups, addressing hardware constraints for individual developers.

## Key Characteristics
- **Architecture**: Derived from [[entities/qwen-38-27b]], significantly reduced in [[concepts/parameter-count|parameter count]] to 2.7B.
- **Target Hardware**: Optimized for [[concepts/single-gpu-performance|single-GPU performance]], lowering the barrier to entry for [[concepts/local-models|local AI]] deployment.
- **Goal**: Enhance accessibility of [[concepts/large-language-models|large language models]] without requiring multi-[[concepts/gpu-clusters|GPU clusters]] or high-end enterprise hardware.

## Performance & Challenges
- Focuses on balancing model capability with the [[concepts/memory|memory]] and [[concepts/computational-resources|compute]] limits of [[concepts/consumer-grade-gpus|consumer-grade GPUs]].
- Addresses the trade-off between [[concepts/code-size|model size]] and [[concepts/inference-speed|inference speed]] in local environments.

## References
- [[lab-notes/2026-09-18-Bonzai-2.7B-AI-Single-GPU-Performance-Challenges-for-Loc|Bonzai 2.7B AI: Single-GPU Performance Challenges for Local AI Accessibility]]
- [Bonzai 2.7B AI: Single-GPU Performance Challenges for Local AI Accessibility](https://www.youtube.com/watch?v=OA5cICIzD-c)
