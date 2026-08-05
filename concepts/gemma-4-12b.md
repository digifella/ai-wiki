---
type: concept
domain: ai-agents
tags:
  - "gemini"
  - "large-language-model"
  - "local-inference"
  - "open-weights"
  - "google-ai"
  - "quantization"
aliases:
  - "Gemma 4"
  - "12B LLM"
  - "Unified Local AI"
summary: Gemma 4 12B is a 12-billion parameter open-weight large language model by Google optimized for local deployment, unified multi-modal capabilities, and efficient quantization via QAT.
updated: 2026-07-11
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Gemma 4 12B

[[entities/gemma]] family member, a 12-billion parameter [[concepts/llm|large language model]] optimized for [[concepts/local-deployment|local deployment]] and unified AI capabilities. Part of [[concepts/google-search|Google]]'s [[concepts/open-weight|open-weight]] ecosystem, succeeding earlier iterations like [[entities/gemma-2]].

## Key Characteristics
- **Parameters**: 12B (Balanced efficiency-performance ratio for consumer hardware)
- **Architecture**: Transformer-based, likely employing group query [[concepts/attention-mechanisms|attention]] or similar optimizations for [[concepts/speed|inference speed]]
- **[[concepts/license|License]]**: Open-weight ([[concepts/apache-2.0-license|Apache 2.0]] or compatible), enabling unrestricted local use
- **Performance**: Benchmarked as a "unified" model capable of handling diverse tasks (code, [[concepts/reasoning|reasoning]], creative [[concepts/writing|writing]]) without specialized [[concepts/fine-tuning|fine-tuning]]

## Quantization & Inference Optimization
- **QAT Variants**: Supports both official [[concepts/google-qat|Google QAT]] (Q4_0) and community-driven [[concepts/unsloth|Unsloth]] UD-Q4_K_XL quantizations for reduced [[concepts/memory|memory]] footprint while maintaining performance.
- **Comparative Analysis**: See [[lab-notes/2026-06-10-Google-QAT-vs.-Unsloth-QAT-Gemma-4-12B-Performance-Compa|Google QAT vs. Unsloth QAT: Gemma 4 12B Performance Comparison]] for [[concepts/benchmark-testing|benchmarking]] differences between [[entities/google|Google]]'s native [[concepts/parameter-reduction|quantization]] and [[entities/unsloth|Unsloth]]'s optimized methods, including [[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]] implications.
