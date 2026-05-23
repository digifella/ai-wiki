---
type: concept
domain: ai-agents
updated: 2026-05-23
group: model-efficiency-compression
---
- "llm"
  - "local-[[concepts/inference|inference]]"
  - "[[concepts/parameter-reduction|quantization]]"
  - "instruction-following"
  - "[[concepts/video-generation|video-generation]]"
  - "[[concepts/pinokio-tool|pinokio]]"
group: model-efficiency-compression

# Local Inference

[[concepts/running|Running]] [[concepts/large-language-models|large language models (LLMs)]] directly on user-owned [[concepts/hardware|hardware]] without cloud dependency, enabling [[concepts/privacy|privacy]], offline use, and reduced latency.

## Recommended Models for Instruction Following (48GB VRAM)

- **[[entities/llama|Llama]] 3.1 70B (quantized)**: [[entities/meta-ai|Meta]]'s model excels in [[concepts/instruction-following]] tasks when [[concepts/model-efficiency]] reduces its footprint for 48GB [[entities/nvidia|NVIDIA]] GPU [[concepts/deployment|deployment]].
- **[[entities/gemma|Gemma]] 2 27B (quantized)**: Efficient balance of size and performance for instruction tasks on consumer-grade [[concepts/hardware|hardware]].
- **[[entities/qwen|Qwen]] 2 72B (quantized)**: High-performing alternative for complex instruction following with quantized optimization.
- **[[entities/mistral|Mistral]] Large (quantized)**: Suitable for instruction tasks when quantized for 48GB VRAM constraints.
- **[[entities/gpt-oss|gpt-oss]] 20B (quantized)**: [[entities/openai|OpenAI]]'s [[concepts/open-weight-model|open-weight model]] demonstrates strong instruction-following [[concepts/capabilities|capabilities]] when quantized for 48GB VRAM deployment.

## Local Video Generation

- **[[entities/pinokio|Pinokio]]**: A specialized model for [[concepts/local-video-generation|local video generation]] tasks.

## Additional Notes

- For [[concepts/running|running]] well-instructed small [[concepts/large-language-models|Large Language Models (LLMs)]] on a 48GB [[concepts/vram|VRAM]] NVIDIA GPU, [[entities/llama-31|Llama 3.1 70B]] (quantized) is a strong contender.
- Other viable options include quantized versions of [[entities/gemma|Gemma]] 2 27B, [[entities/qwen|Qwen]] 2 72B, and [[entities/mistral|Mistral]] Large.
- These [[concepts/models|models]], when properly quantized to reduce their size, can effectively run on a 48GB VRAM [[concepts/hardware|hardware]].
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-08: What Is Llama.cpp? The LLM Inference Engine for [[concepts/local-ai|Local AI]]
- 2026-04-07: [[lab-notes/2026-04-07-Benchmarking-SLMs-Identifying-4GB-General-Problem-Solving-Champions|Benchmarking SLMs Identifying 4GB General Problem Solving Champions]] · [▶ source](https://www.youtube.com/watch?v=wQxawC3sv68)
- 2026-04-10: [[lab-notes/2026-04-10-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)
- 2026-04-12: [[lab-notes/2026-04-12-Kimi-K25-Local-AI-Cluster-Performance-vs-ChatGPT-and-Claude|Kimi K25 Local AI Cluster Performance vs ChatGPT and Claude]] · [▶ source](https://www.youtube.com/watch?v=JM41u7emnwo)
- 2026-04-21: Local Mistral · [▶ source](https://www.youtube.com/watch?v=5QEDNZlDf-c)
- 2026-05-01: [[lab-notes/2026-05-01-Local-vs.-Cloud-LLMs-for-Code-Generation-Performance-Com|Local vs. Cloud LLMs for Code Generation: Performance Comparison for an Interpreter Task]]