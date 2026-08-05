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
  - "coding-agents"
  - "budget-hardware"
  - "ai-memory"
  - "persistent-memory"
  - "benchmarking"
  - "model-comparison"
aliases:
  - "Codacus (Creator)"
  - "Local LLM Educator"
summary: Content creator and educator specializing in deploying and optimizing large language models on consumer hardware through techniques like quantization, mixture-of-experts architectures, and persistent memory systems.
updated: 2026-07-22
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
# Codacus

[[entities/video-creator|Content creator]] and [[concepts/phil-moriarty|educator]] specializing in local [[concepts/large-language-model-llm|large language model (LLM)]] deployment, optimization, and resource-constrained [[concepts/inference|inference]]. Known for tutorials on running high-[[concepts/parameter-models|parameter models]] on [[concepts/consumer-grade-hardware|consumer-grade hardware]].

## Key Works & Demonstrations
- [[lab-notes/2026-05-10-Achieving-Fast-35B-MoE-AI-Model-Performance-on-6GB-VRAM|Achieving Fast 35B MoE AI Model Performance on 6GB VRAM with Llama.cpp]] (2026-05-10)
  - Channel guide: "Running a 35B AI Model on 6GB [[concepts/vram|VRAM]], FAST ([[concepts/inference-engine|llama.cpp]] Guide)"
  - Demonstrated inference of [[concepts/qwen-36-35b-a3b]] (35B parameters, [[entities/mixture-of-experts]] architecture) on hardware with only 6GB VRAM
  - Leveraged [[concepts/parameter-reduction|quantization]] and [[concepts/moe-models|MoE]] sparsity to bypass VRAM limits.
- [[lab-notes/2026-07-22-Bonsai-27B-vs.-Qwen-35B-LLM-Performance-and-Replacement|Bonsai 27B vs. Qwen 35B: LLM Performance and Replacement Feasibility Benchmarks]] (2026-07-22)
  - Channel guide: "Can a 3.5GB model replace my 35B daily driver? ([[entities/bonsai-27b|Bonsai 27B]])"
  - Benchmarked [[concepts/bonsai-27b|Bonsai 27B]] against [[concepts/qwen-36-35b-a3b|Qwen 35B]] to evaluate trade-offs between [[concepts/code-size|model size]], [[concepts/inference-optimization|inference speed]], and real-world applicability.
  - Investigated feasibility of replacing high-parameter daily [[concepts/causes|drivers]] with smaller, optimized models for specific [[concepts/scenarios|use cases]].

## References
- [Bonsai 27B vs. Qwen 35B: LLM Performance and Replacement Feasibility Benchmarks](https://www.youtube.com/watch?v=rBLWDJrXCp0)

## Source Notes
- 2026-07-22: [[lab-notes/2026-07-22-Bonsai-27B-vs.-Qwen-35B-LLM-Performance-and-Replacement|Bonsai 27B vs. Qwen 35B: LLM Performance and Replacement Feasibility Benchmarks]] · [▶ source](https://www.youtube.com/watch?v=rBLWDJrXCp0)
- 2026-07-13: [[lab-notes/2026-07-13-Developing-Persistent-Intelligent-Memory-for-Local-AI-wi|Developing Persistent, Intelligent Memory for Local AI with a Librarian System]] · [▶ source](https://www.youtube.com/watch?v=IwN-eK1s8og)
- 2026-05-31: [[lab-notes/2026-05-31-Budget-GPU-Local-Coding-Agent-Performance-Optimization-R|Budget GPU Local Coding Agent Performance Optimization Report]] · [▶ source](https://www.youtube.com/watch?v=0AqpaFm11oI)
- 2026-05-10: [[lab-notes/2026-05-10-Achieving-Fast-35B-MoE-AI-Model-Performance-on-6GB-VRAM|Achieving Fast 35B MoE AI Model Performance on 6GB VRAM with Llama.cpp]] · [▶ source](https://www.youtube.com/watch?v=8F_5pdcD3HY)
