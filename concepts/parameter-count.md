---
type: concept
domain: ai-agents
tags:
  - "llm-capacity"
  - "model-sizes"
  - "storage-requirements"
  - "training-complexity"
  - "quantisation"
  - "resource-optimization"
  - "moe-architecture"
aliases:
  - "Model Size"
  - "Number of Parameters"
  - "Param Count"
summary: Parameter count in large language models dictates capacity, training complexity, and storage needs, which can be reduced through techniques like quantisation without significant accuracy loss. Recent evaluations highlight the efficiency of Mixture-of-Experts (MoE) architectures, where smaller parameter counts can outperform larger dense models in specific tasks like agentic coding.
updated: 2026-07-12
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Parameter Count

The number of Parameters in a [[concepts/large-language-model]] (LLM) directly determines model capacity, training complexity, and resource requirements. For example, [[entities/nvidia|NVIDIA]]'s [[entities/llama|Llama]] 3.1 [[entities/nemotron|Nemotron]] 70B (70.6 billion parameters) requires ~150GB [[entities/storage|storage]] at [[concepts/full-precision|full precision]] (32-bit), distributed across 30+ files (~5GB each).

- [[entities/adam-lucek]] - [[concepts/quantisation|quantisation]] of LLM: Video explaining [[concepts/model-efficiency]] techniques (e.g., reducing [[concepts/accuracy|precision]] from 32-bit to 8-bit), which cuts storage needs by ~75% (e.g., 70B model from ~150GB to ~37.5GB) while preserving [[concepts/vllm|model performance]].
- [[concepts/model-efficiency]]: Technique for reducing parameter precision without significant accuracy loss, critical for deploying large models on constrained hardware.
- [[concepts/large-language-model]]: Model class where parameter count correlates with capability, though architectural efficiency (e.g., MoE) can decouple raw parameter count from performance.
- [[lab-notes/2026-06-29-Ornith-1.0-Agentic-Coding-LLM-Evaluation-35B-MoE-Superio|Ornith-1.0 Agentic Coding LLM Evaluation: 35B MoE Superiority]]: Evaluation of [[entities/ornith-1.0|Ornith-1.0]] demonstrates that a 35B [[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE) model can outperform larger [[concepts/dense-models|dense models]] in [[concepts/agentic-ai|agentic coding]] tasks, highlighting that effective parameter utilization and architecture design are as critical as raw parameter count.

## References
- [Ornith-1.0 Agentic Coding LLM Evaluation: 35B MoE Superiority](https://www.youtube.com/watch?v=Y7VL_whmAqQ)
