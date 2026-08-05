---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "nvidia-h100"
  - "gpu-computing"
  - "hopper-architecture"
  - "ai-inference"
  - "data-center-infrastructure"
aliases:
  - "NVIDIA H100"
  - "Hopper GPU"
  - "NVIDIA AI Accelerator"
  - "H100 Tensor Core GPU"
summary: The NVIDIA H100 is a high-performance graphics processing unit built on the Hopper architecture, designed for data center AI workloads with features including third-generation Tensor Cores and NVLink interconnectivity.
updated: 2026-07-12
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## NVIDIA H100 GPUs

[[entities/nvidia|NVIDIA]]'s [[concepts/nvidia-h100|H100 GPU]] is a [[entities/high-performance|high-performance]] [[concepts/webgpu|graphics]] processing unit designed for [[concepts/techno-economics|data centers]] and AI workloads. It supports advanced features such as Tensor Core, [[concepts/nvlink|NVLink]], and PCIe Gen5 for faster [[concepts/data-management|data transfer]] speeds. The H100 incorporates the latest Hopper architecture, providing substantial improvements in [[concepts/algorithm-efficiency|computational efficiency]] compared to its predecessors.

### Key Features
- **Tensor Cores:** Enhanced with third-generation Tensor Cores that support FP8 [[concepts/accuracy|precision]] for efficient [[concepts/training-process|AI training]].
- **Interconnectivity:** [[concepts/nvlink|NVLink]] and PCIe Gen5 provide high-[[concepts/speed|speed]] data transfer capabilities.
- **[[concepts/memory|Memory]] [[concepts/network-speed|Bandwidth]]:** Offers up to 3TB/s of [[concepts/memory|memory]] bandwidth, significantly enhancing performance in large-scale [[concepts/ai-workflow|AI applications]].

### Applications
- **[[concepts/machine-learning|Machine Learning]] Training and [[concepts/inference|Inference]]:** Ideal for training and running [[concepts/inference|inference]] on deep [[concepts/learning|learning]] models, especially those with a massive [[concepts/parameter-count|number of parameters]] like [[concepts/minimax-m27]].
- **Data Center Deployments:** Suitable for cloud serv

## Ollama & GLM-4.7-Flash Integration
- **[[concepts/local-execution|Local Execution]]:** [[concepts/task-specific-modeling|Ollama]] now supports [[concepts/anthropic-api-compatibility|Anthropic API compatibility]], enabling the [[concepts/local-execution|local execution]] of [[concepts/ai-assisted-coding|Claude Code]] via [[entities/glm-47-flash|GLM-4.7-Flash]].
- **[[concepts/architecturetechnique|Model Architecture]]:** GLM-4.7-Flash is a 30B parameter [[concepts/mixture-of-experts|Mixture-of-Experts (MoE)]] model utilizing 3B [[concepts/active-parameters|active parameters]].
- **Source:** 2026 04 14 [[entities/ollama|Ollama]] [[concepts/claude-ai|Claude]] GLM Channel [[entities/sam-witteveen|Sam Witteveen]]
## Source Notes
- 2026-04-19: ## Qwen 3.6-35B Full Precision vs. Ollama Quantized Performance-Memory Trade-off **Clip title:** Comparing Full Precision vs Ollama Version of Qwen3.6-35B-A3B Locally **Author / channel:** Fahd Mirza **URL:** https://www.youtube.com/watch?v=RlGppgMDl9k ### Summary This video prov (Qwen 36-35B Full Precision vs Ollama Quantized Performance-Memory Trade-off)
- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-11: [[lab-notes/2026-04-11-Artemis-II-Simulated-Mission-Report-Crew-Operations-Orion-Systems-Star|Artemis II Simulated Mission Report Crew Operations Orion Systems Star]] · [▶ source](https://www.youtube.com/watch?v=CrzP6naZGKs)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
