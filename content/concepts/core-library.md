---
type: concept
domain: ai-agents
tags:
  - "llm-inference"
  - "local-deployment"
  - "model-management"
  - "gguf-format"
  - "quantization"
  - "gpu-acceleration"
  - "router-mode"
  - "api-server"
aliases:
  - "Local LLM Stack"
  - "Inference Engine Framework"
  - "Offline AI Foundation"
summary: A foundational software stack for local LLM inference and management built on engines like llama.cpp, supporting model formats like GGUF and features such as hot-swappable router mode.
updated: 2026-05-23
group: open-systems-local-models
---
# Core Library

The **Core Library** refers to the foundational [[concepts/software|software]] stack enabling local [[concepts/large-language-model-llm|Large Language Model (LLM)]] inference, management, and orchestration. It encompasses [[concepts/inference-engines|inference engines]], model formats, and routing logic required to deploy AI workloads offline or on-premise.

## Inference Engines & Runtimes

- **[[concepts/inference-engine|llama.cpp]]**: The primary C/C++ [[concepts/adoption|implementation]] for efficient [[concepts/gguf|GGUF]] [[concepts/inference|model inference]]. Supports [[concepts/cpu|CPU]] and GPU offloading.
	- **Router Mode**: A recent addition allowing native, hot-swappable switching between multiple loaded LLMs without restarting the server. This feature abstracts model management, enabling instant context switching for different tasks (e.g., [[concepts/coding|coding]] vs. creative [[concepts/writing|writing]]).
	- See detailed analysis: [[lab-notes/2026-05-22-llama.cpp-Router-Mode-Native-Hot-Swappable-Local-LLM-Swi|llama.cpp Router Mode: Native Hot-Swappable-Local-LLM-Switching]]

## Model Formats

- **GGUF**: The standard format for `llama.cpp` [[concepts/models|models]], supporting [[concepts/metadata|metadata]], tensor splits, and [[concepts/parameter-reduction|quantization]] schemes.
- **[[concepts/ggml|GGML]]**: Older tensor format, largely superseded by GGUF.

## Architecture & Components

- **Server**: HTTP/REST API interface for interacting with the [[concepts/running|running]] model(s).
- **Backend**: Handles the actual computation (CPU threads, CUDA/Vulkan/Metal [[concepts/gpu-acceleration|GPU acceleration]]).
- **Frontend/UI**: Interfaces like [[concepts/open-webui]] or text-generation-webui that consume the API.

## Key Concepts

- **[[concepts/precision-reduction|Quantization]]**: Reducing model precision (e.g., [[concepts/q4-k-m|Q4_K_M]], Q8_0) to fit within VRAM/RAM constraints.
- **[[concepts/context-window|Context Window]]**: The maximum sequence length the model can process, often limited by [[concepts/ram|RAM]] availability.
- **KV Cache**: Stores key-value pairs of processed [[concepts/tokens|tokens]] to [[concepts/speed|speed]] up subsequent generation steps.

## Integration Notes

- Ensure the Core Library is updated regularly to leverage performance improvements and new features like Router Mode.
- Cross-reference with [[concepts/on-device-inference|Local LLM Deployment]] Strategy for [[concepts/hardware-requirements|hardware requirements]].
