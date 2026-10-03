---
type: concept
domain: ai-agents
tags:
  - "LLM"
  - "Quantization"
  - "Hardware"
  - "RAM"
  - "Local-Deployment"
  - "Coding"
  - "ram-capacity"
  - "local-inference"
  - "hardware-constraints"
  - "context-window"
aliases:
  - "System RAM"
  - "Memory Capacity"
summary: "RAM capacity determines the feasibility of loading and running local large language models by acting as a critical bottleneck for inference, mitigated by quantization techniques."
updated: 2026-08-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-02T22:07:36+00:00" }
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# RAM capacity

**RAM capacity** refers to the total amount of volatile [[concepts/memory|memory]] available to a system for [[concepts/storing|storing]] active data and program [[concepts/instructions|instructions]]. In the context of [[concepts/large-language-models]], RAM is the critical bottleneck for [[concepts/edge-deployment|local inference]], determining which model sizes can be loaded and how efficiently they can operate.

## Key Concepts

*   **VRAM vs. System RAM**: While GPU [[concepts/vram]] is preferred for acceleration, insufficient VRAM forces the system to offload layers to system RAM capacity, drastically reducing [[concepts/llm-inference-speed|inference speed]].
*   **[[concepts/parameter-reduction|Quantization]] Impact**: Techniques like [[concepts/model-compression]] (e.g., [[concepts/q4-k-m|Q4_K_M]], Q8_0) reduce the [[concepts/accuracy|precision]] of [[concepts/model-weights|model weights]], allowing larger models to fit within limited RAM capacity at the cost of minor accuracy degradation.
*   **[[concepts/context-window|Context Window]]**: The amount of RAM capacity required [[concepts/musical-scales|scales]] with the [[concepts/context-window-size|context window size]], as the entire sequence must often reside in memory during processing.

## Hardware Requirements & Use Cases

Recent analysis highlights the feasibility of running powerful [[concepts/coding|coding]] models locally by optimizing for RAM capacity constraints.

*   **Feasibility of [[concepts/real-world-coding|Local Coding LLMs]]**: [[entities/high-performance|High-performance]] coding models can now fit within standard consumer hardware limits when utilizing aggressive [[concepts/precision-reduction|quantization]].
*   **Quantization Trade-offs**: Reducing precision allows models that previously required enterprise-grade [[concepts/vram]] to run on systems with constrained RAM capacity.
*   **Hardware Sufficiency**: For many coding tasks, [[entities/the-limiting-factor|the limiting factor]] is no longer just GPU power but whether the model [[concepts/parameters|weights]] fit into available RAM capacity for efficient swapping or full loading.

For detailed benchmarks and specific hardware configurations, see: [[lab-notes/2026-08-03-Enabling-Local-Coding-LLMs-with-Quantization-Hardware-Re|Enabling Local Coding LLMs with Quantization: Hardware Requirements & Use Cases]]

## References

*   [[concepts/macro-lens|Macro Lens]]. "The Best [[concepts/local-llm|Local LLM]] for [[concepts/coding|Coding]] Already Fits in Your RAM." [https://www.youtube.com/watch?v=Ksz7WnIGTk8](https://www.youtube.com/watch?v=Ksz7WnIGTk8)
