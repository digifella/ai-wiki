---
type: concept
domain: ai-agents
tags:
  - "gpu-interconnect"
  - "high-bandwidth"
  - "low-latency"
  - "nvidia"
  - "parallel-processing"
aliases:
  - "NVLink interconnect"
  - "GPU communication protocol"
  - "NVIDIA NVLink"
summary: NVLink is a high-speed interconnect technology by NVIDIA designed to enable efficient data sharing and low-latency communication between multiple GPUs within a system.
updated: 2026-07-12
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# NVLink

NVLink is a high-[[concepts/speed|speed]] interconnect designed for connecting multiple GPUs within a single system to enable efficient data sharing and communication. It was introduced by [[entities/nvidia|NVIDIA]] as part of their efforts to support the growing computational demands in fields such as AI, [[concepts/machine-learning|machine learning]], and [[concepts/scientific-calculation|scientific computing]].

## Key Features
- **High [[concepts/network-speed|Bandwidth]]**: NVLink provides significantly higher bandwidth compared to PCIe, allowing for more efficient GPU-to-GPU communications.
- **[[concepts/space-based-data-centers|Latency Reduction]]**: By reducing latency between GPUs, NVLink enhances overall system performance.
- **Scalability**: NVLink supports configurations with multiple GPUs, making it suitable for large-scale deployments.

## Applications
NVLink is used in various applications that require high-speed [[concepts/data-management|data transfer]] and [[concepts/parallel-processing|parallel processing]] capabilities:
- Large scale [[concepts/ai-models|AI models]] like [[concepts/minimax-m27]]
- Scientific simulations requiring extensive GPU resources

### MiniMax M2.7 Overview (Added 2026-04-12)
- **Scale**: Boasts [[concepts/229-billion-parameters|229 billion parameters]]
- **Architecture**: Leverages a [[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE) architecture
- **[[concepts/open-source|Open Source]]**: Operating under a modified [[concepts/mit-license|MIT license]]

## Related Concepts
[[concepts/gpu-architecture|GPU Architecture]]
[[concepts/mixture-of-experts|Mixture of Experts]]
[[concepts/large-language-models]]

Backlinks:
2026 04 12 [[concepts/minimax-m27|MiniMax M27]] [[concepts/open-source|Open Source]] LLM [[concepts/technical-overview|Technical Overview]] and Deployment Summary
## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
