---
type: concept
domain: ai-agents
tags:
  - "machine-learning"
  - "large-language-models"
  - "model-optimization"
  - "parameter-count"
  - "bit-precision"
  - "storage-footprint"
  - "hardware-demands"
  - "quantization"
  - "model-compression"
  - "inference-latency"
aliases:
  - "Model Footprint"
summary: "Model size is the physical and computational footprint of a machine learning model, primarily determined by parameter count and precision."
updated: 2026-04-15
group: model-efficiency-compression
---
# Model Size

The physical and computational footprint of a [[concepts/machine-learning|machine learning]] model, primarily determined by the number of [[concepts/parameters|parameters]] (e.g., 7B, 70B) and their precision (e.g., 32-bit, 8-bit). Larger models require more [[entities/storage|storage]], [[concepts/memory|memory]], and [[concepts/computational-resources|computational resources]] for [[concepts/training|training]] and [[concepts/inference|inference]].

**Key implications:**
- **Storage:** [[concepts/full-precision|Full-precision]] 70B models (e.g., NVIDIA’s [[entities/llama|Llama]] 3.1 [[entities/nemotron|Nemotron]] 70B) require ~150GB (30 files × 5GB each).
- **[[concepts/hardware|Hardware]] demands:** High [[concepts/memory|memory]] bandwidth and [[concepts/vram|VRAM]] needed for [[concepts/inference|inference]], limiting [[concepts/deployment|deployment]] on consumer [[concepts/hardware|hardware]].
- **Trade-offs:** Larger size often correlates with better performance but increases latency and cost.

**[[concepts/quantisation|Quantisation]] as optimization technique:**
- [[concepts/model-efficiency]] reduces parameter precision (e.g., 32-bit → 8-bit), shrinking storage needs by ~75% (e.g., 70B model → ~30GB).
- Enables deployment of large models on edge devices and reduces inference latency.
- **Source:** [[entities/adam-lucek|Adam Lucek]] - [[concepts/quantisation|quantisation]] of LLM (2026-04-14 video).

[[concepts/date-2026-04-13|2026]] 04 14 [[entities/adam-luceck|Adam Lucek]] quantisation of LLM

## Source Notes
- 2026-04-14: # [[entities/qwen|Qwen]] [[concepts/tts-model|TTS model]] - [[entities/sam-witteveen|Sam Witteveen]] channel --- --- <https://www.youtube.com/watch?v=jZ8wPB-KI8g> Sure! Here’s a summary of the [[concepts/17b-parameter-model|Qwen3-TTS]] family of models: * **[[concepts/open-source|Open Source]]:** The [[entities/qwen-team|Qwen team]] recently open-sourced the Qwen3-TTS family, which includes features like voice [[concepts/design|design]], voice c ([[entities/qwen-tts-model|Qwen TTS model]] - [[entities/sam-witteveen-channel|Sam Witteveen channel]])
## Source Notes
- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)
- 2026-04-10: [[lab-notes/2026-04-10-Bonzai-8B-PrismMLs-Revolutionary-1-Bit-LLM-First-Look-Test|Bonzai 8B PrismMLs Revolutionary 1 Bit LLM First Look Test]] · [▶ source](https://www.youtube.com/watch?v=aNg47-U_x6A)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)
- 2026-04-19: [[lab-notes/2026-04-19-Qwen-36-35B-Full-Precision-vs-Ollama-Quantized-Performance-Memory-Trad|Qwen 36 35B Full Precision vs Ollama Quantized Performance Memory Trad]] · [▶ source](https://www.youtube.com/watch?v=RlGppgMDl9k)
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
- 2026-04-29: Google DeepMind