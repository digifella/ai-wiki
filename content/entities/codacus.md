---
type: entity
tags:
  - "creator"
  - "ai-educator"
  - "local-llm"
  - "llama-cpp"
  - "optimization"
  - "moe"
  - "content-creator"
  - "llm-optimization"
  - "local-inference"
  - "quantization"
  - "resource-constrained-computing"
  - "moe-models"
aliases:
  - "Codacus (Creator)"
  - "Local LLM Educator"
summary: Content creator and educator specializing in deploying and optimizing large language models on consumer hardware through techniques like quantization and mixture-of-experts architectures.
updated: 2026-05-23
---
# Codacus

[[entities/video-creator|Content creator]] and educator specializing in local [[concepts/large-language-model-llm|large language model (LLM)]] [[concepts/deployment|deployment]], optimization, and resource-constrained [[concepts/inference|inference]]. Known for tutorials on [[concepts/running|running]] high-[[concepts/parameter-models|parameter models]] on consumer-grade [[concepts/hardware|hardware]].

## Key Works & Demonstrations
- [[lab-notes/2026-05-10-Achieving-Fast-35B-MoE-AI-Model-Performance-on-6GB-VRAM|Achieving Fast 35B MoE AI Model Performance on 6GB VRAM with Llama.cpp]] (2026-05-10)
  - Channel guide: "Running a 35B AI Model on 6GB [[concepts/vram|VRAM]], FAST ([[concepts/inference-engine|llama.cpp]] Guide)"
  - Demonstrated inference of [[concepts/qwen-36-35b-a3b]] (35B [[concepts/parameters|parameters]], [[entities/mixture-of-experts]] [[concepts/architecture|architecture]]) on hardware with only 6GB VRAM
  - Leveraged [[entities/llamacpp]] for [[concepts/parameter-reduction|quantization]] and efficient execution on 8-year-old GPUs
  - Source: https://youtu.be/8F_5pdcD3HY
