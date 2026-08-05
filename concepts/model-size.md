---
type: concept
domain: ai-agents
tags:
  - "model-size"
  - "parameter-count"
  - "quantisation"
  - "inference-efficiency"
  - "storage-footprint"
  - "computational-resources"
aliases:
  - "Model Footprint"
  - "Parameter Scale"
  - "LLM Size"
  - "Model Weight Volume"
summary: Model size is the physical and computational footprint of a machine learning model, primarily determined by parameter count and precision. Recent trends suggest optimizing behavior in smaller models over scaling parameters for complex tasks like tool use.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Model Size

The physical and computational footprint of a [[concepts/machine-learning|machine learning]] model, primarily determined by the [[concepts/parameter-count|number of parameters]] (e.g., 7B, 70B) and their [[concepts/accuracy|precision]] (e.g., 32-bit, 8-bit). Larger models require more [[entities/storage|storage]], [[concepts/memory|memory]], and [[concepts/computational-resources|computational resources]] for training and [[concepts/inference|inference]].

**Key implications:**
- **Storage:** [[concepts/full-precision|Full-precision]] 70B models (e.g., [[entities/nvidia|NVIDIA]]’s [[entities/llama|Llama]] 3.1 [[entities/nemotron|Nemotron]] 70B) require ~150GB (30 files × 5GB each).
- **Hardware demands:** High [[concepts/memory|memory]] [[concepts/network-speed|bandwidth]] and [[concepts/vram|VRAM]] needed for [[concepts/inference|inference]], limiting deployment on consumer hardware.
- **Trade-offs:** Larger size often correlates with better performance but increases latency and cost.

**[[concepts/quantisation|Quantisation]] as optimization technique:**
- [[concepts/model-efficiency]] reduces [[concepts/4gb-memory|memory footprint]] by lowering precision (e.g., FP16 to INT8), enabling larger models to fit within constrained hardware environments without significant [[concepts/human-performance|performance degradation]].

**Behavioral Optimization vs. [[concepts/ai-scaling-laws|Parameter Scaling]]:**
Recent discourse challenges the paradigm of infinite [[concepts/computational-scaling|scaling]], suggesting that for specific enterprise tasks, optimizing [[concepts/model-behavior|model behavior]] is more effective than increasing size.
- **[[concepts/mindset-shift|Paradigm Shift]]:** "Stop Making Models Bigger. Make Them Behave" — focusing on [[concepts/tool-use|tool use]] and disciplined output in smaller models rather than relying on massive parameter counts for general capability [[lab-notes/2026-06-16-Training-Smaller-Models-for-Disciplined-Tool-Use-in-Ente|Training Smaller Models for Disciplined Tool Use in Enterprise AI]].
- **Enterprise Efficiency:** Smaller models, when properly constrained and fine-tuned, can achieve higher [[concepts/software-reliability|reliability]] in structured workflows (e.g., [[entities/api-calls|API calls]], [[concepts/data-extraction|data extraction]]) compared to larger, unconstrained counterparts, reducing [[concepts/hallucination|hallucination]] rates and inference costs.

## References
- [Training Smaller Models for Disciplined Tool Use in Enterprise AI](https://www.youtube.com/watch?v=TNwJ1LMiENk)

## Source Notes
- 2026-07-22: [[lab-notes/2026-07-22-Ternary-Bonsai-27B-vs.-Qwen-27B-LLM-Performance-Benchmar|Ternary Bonsai 27B vs. Qwen 27B: LLM Performance Benchmarking Summary]]
