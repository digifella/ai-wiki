---
type: concept
domain: ai-agents
tags:
  - "local-inference"
  - "llm-deployment"
  - "model-quantization"
  - "gpu-efficiency"
  - "privacy-preserving-ai"
  - "agentic-coding"
  - "document-parsing"
  - "ocr"
  - "alibaba"
  - "qwen"
  - "benchmarking"
  - "poolside"
  - "laguna-s-2.1"
  - "moe-architecture"
aliases:
  - "On-Premise LLMs"
  - "Offline Inference"
  - "Local AI Execution"
  - "Edge LLM Deployment"
  - "OvisOCR2"
  - "FableVibes"
  - "Laguna S 2.1"
summary: Local inference involves running large language models on user-owned hardware to enable privacy, offline capabilities, and reduced latency through techniques like quantization. Includes specialized models for document parsing such as Alibaba OvisOCR2, performance benchmarks for Qwen-based models like FableVibes, and agentic coding models like Poolside's Laguna S 2.1.
updated: 2026-07-31
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-31" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

- "llm"
  - "local-[[concepts/inference|inference]]"
  - "[[concepts/parameter-reduction|quantization]]"
  - "[[concepts/instruction-following|instruction-following]]"
  - "[[concepts/video-generation|video-generation]]"
  - "[[concepts/pinokio-tool|pinokio]]"
  - "[[entities/alibaba|Alibaba]] [[entities/ovisocr2|OvisOCR2]]"
  - "[[entities/qwen|Qwen]] [[entities/fablevibes|FableVibes]]"
  - "[[entities/poolside|Poolside]] [[entities/laguna-s-2.1|Laguna S 2.1]]"
group: model-efficiency-compression

# Local Inference

Running [[concepts/large-language-models|large language models (LLMs)]] directly on user-owned hardware without cloud dependency, enabling [[concepts/privacy|privacy]], offline use, and reduced latency.

## Recommended Models for Instruction Following (48GB VRAM)

- **[[entities/llama|Llama]] 3.1 70B (quantized)**: [[entities/meta-ai|Meta]]'s model excels in general-purpose tasks when quantized for [[concepts/local-control|local deployment]].
- **[[entities/qwen|Qwen]] based models**: See [[entities/fablevibes|FableVibes]] for benchmarking data on Qwen-based performance in local environments.
- **[[entities/ovisocr2|OvisOCR2]]**: Specialized for [[concepts/document-parsing|document parsing]] and OCR tasks, leveraging Alibaba's infrastructure for efficient local execution.

## Agentic Coding on Local Hardware

Recent advancements in agentic coding models allow for complex, [[concepts/deep-reasoning|multi-step reasoning]] tasks to be executed locally.

- **[[lab-notes/2026-07-31-Poolsides-Laguna-S-2.1-Efficient-Open-Source-Agentic-Cod|Poolside's Laguna S 2.1: Efficient Open-Source Agentic Coding for Local Hardware]]**:
  - Developed by Poolside, this model utilizes an 118 billion parameter [[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE) architecture.
  - Designed specifically for efficient open-source agentic coding on local hardware, balancing high capability with resource constraints.
  - Focuses on reducing the latency and [[concepts/hardware-compatibility|hardware requirements]] typically associated with large-scale [[concepts/agentic-patterns|agentic workflows]].

## References

- [Poolside's Laguna S 2.1: Efficient Open-Source Agentic Coding for Local Hardware](https://www.youtube.com/watch?v=H_Lbe69XO_8)
