---
type: concept
domain: tools-platforms
tags:
  - "gpu-hardware"
  - "nvidia"
  - "quantization"
  - "llm-performance"
  - "memory-optimization"
aliases:
  - "H100 GPU"
  - "Nvidia H100 Tensor Core"
summary: A comparison of full precision versus quantized performance and memory trade-offs for the Qwen 3.6-35B model using Ollama.
updated: 2026-05-23
group: platforms-runtimes-environments
---
# Nvidia H100

The [[entities/nvidia|Nvidia]] H100 is a [[entities/high-performance|high-performance]] GPU accelerator designed for large-scale AI and machine [[concepts/learning|learning]] workloads. As part of Nvidia's Hopper [[concepts/architecture|architecture]], the H100 offers substantial computational capacity for [[concepts/training|training]] and [[concepts/inference|inference]] of [[concepts/large-language-model-llm|large language models]], making it a standard choice in data centers and cloud infrastructure supporting [[concepts/generative-apps|generative AI applications]].

## Performance and Memory Considerations

When [[concepts/running|running]] [[concepts/large-language-models|large language models]] like [[concepts/qwen3-model|Qwen 3.6]]-35B on the H100, there are significant trade-offs between [[concepts/full-precision|full precision]] (FP32) computation and quantized variants. Full precision models provide maximum [[concepts/accuracy|accuracy]] but require substantially more [[concepts/vram|VRAM]] and computational bandwidth. [[concepts/parameter-reduction|Quantization]] techniques, such as those implemented through [[entities/ollama|Ollama]], reduce model precision to lower bit-widths (commonly INT8 or INT4), which decreases [[concepts/memory|memory]] requirements and can improve [[concepts/speed|inference speed]] while introducing minor accuracy trade-offs that are often negligible for practical [[concepts/software|applications]].

The choice between full precision and quantized approaches depends on specific [[concepts/deployment|deployment]] constraints. Full precision is preferred when maximum model fidelity is critical, while [[concepts/precision-reduction|quantization]] becomes advantageous when working within memory limitations or when prioritizing throughput over marginal accuracy gains. The H100's substantial 80GB or 141GB memory capacity accommodates larger models in full precision compared to smaller GPUs, though quantization remains valuable for reducing latency and enabling more concurrent inference requests on a single device.
## Source Notes
- 2026-04-11: [[lab-notes/2026-04-11-Artemis-II-Simulated-Mission-Report-Crew-Operations-Orion-Systems-Star|Artemis II Simulated Mission Report Crew Operations Orion Systems Star]] · [▶ source](https://www.youtube.com/watch?v=CrzP6naZGKs)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-19: [[lab-notes/2026-04-19-Qwen-36-35B-Full-Precision-vs-Ollama-Quantized-Performance-Memory-Trad|Qwen 36 35B Full Precision vs Ollama Quantized Performance Memory Trad]] · [▶ source](https://www.youtube.com/watch?v=RlGppgMDl9k)