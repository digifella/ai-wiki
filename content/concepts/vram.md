---
type: concept
domain: ai-agents
summary: VRAM is the dedicated memory on a GPU used to store model weights, activations, and intermediate data during inference and training.
updated: 2026-05-23
group: open-systems-local-models
---
- "vram"
  - "gpu"
  - "[[concepts/machine-learning|machine-learning]]"
  - "[[concepts/parameter-reduction|quantization]]"
  - "llm"
  - "video-ram"
  - "gpu-[[concepts/memory|memory]]"
  - "[[concepts/model-compression|model-compression]]"
  - "llm-[[concepts/inference|inference]]"
group: open-systems-local-[[concepts/models|models]]
aliases:
  - "Video RAM"
  - "GPU [[concepts/memory|memory]]"

# VRAM

Video [[concepts/ram|RAM]] (VRAM) is the dedicated memory on a GPU used to store [[concepts/model-weights|model weights]], activations, and intermediate data during [[concepts/inference|inference]] and [[concepts/training|training]]. Its capacity directly limits the size of models that can be executed on a single GPU, especially for resource-intensive tasks like [[concepts/large-language-model]] (LLM) [[concepts/deployment|deployment]].

- **VRAM Constraints in LLMs**: [[concepts/full-precision|Full-precision]] (32-bit) LLMs like [[entities/nvidia|NVIDIA]]'s [[entities/llama|Llama]] 3.1 [[entities/nemotron|Nemotron]] 70B (70.6 billion [[concepts/parameters|parameters]]) require ~30GB+ of VRAM (e.g., 30+ [[concepts/files|files]] [[concepts/assistive-technology|at]] ~5GB each), exceeding most consumer GPUs.
- **[[concepts/precision-reduction|Quantization]] as a [[concepts/vram-optimization|VRAM Optimization]]**: [[concepts/model-efficiency]] reduces model parameter precision (e.g., to 8-bit or 4-bit), slashing VRAM requirements by 2–4× while maintaining acceptable [[concepts/accuracy|accuracy]]. This enables deployment of large models on [[concepts/hardware|hardware]] with limited VRAM.
  - *Reference*: [[[entities/adam-lucek|Adam Lucek]] - quantization]
- **Small LLMs for [[concepts/local-inference|Local Inference]]**: For [[concepts/running|running]] well-instructed small [[concepts/large-language-models|LLMs]] on a 48GB VRAM NVIDIA GPU, quantized versions of [[entities/llama|Llama]] 3.1 70B, [[entities/gemma|Gemma]] 2 27B, [[entities/qwen|Qwen]] 2 72B, and [[entities/mistral|Mistral]] Large are viable options. These models, when properly quantized, can effectively run on a 48GB VRAM GPU.
