---
type: concept
domain: ai-agents
summary: The practice of deploying large language models on local, private hardware to enhance security, reduce latency, and enable offline capabilities.
updated: 2026-05-23
group: open-systems-local-models
---
# Local LLM serving

The practice of deploying [[concepts/large-language-models]] on local, private [[concepts/hardware|hardware]] rather than through cloud-based [[concepts/application-programming-interfaces-apis|APIs]]. Primary drivers include [[concepts/ai-security]], reduced Latency, and Offline Capability.

## Core Technologies
- **[[concepts/inference|Inference]] Engines:**
    - [[entities/vllm|vLLM]]: High-throughput serving engine utilizing PagedAttention for efficient [[concepts/memory-management|memory management]].
    - [[entities/llamacpp]]: Optimized for [[concepts/local-deployment|local deployment]] across various hardware backends via [[concepts/model-efficiency]].
    - [[entities/ollama]]: Simplified orchestration for [[concepts/running|running]] [[concepts/models|models]] locally.
- **Model Architectures:**
    - [[concepts/smollm-family|SmollLM family]]: Lightweight, [[entities/high-performance|high-performance]] models designed for efficient [[concepts/edge-computing|edge computing]].
    - [[entities/llama]]: Industry-standard [[concepts/open-weight|open-weights]].

## Technical Fundamentals
- **Execution Complexity:** LLMs are not simple executable [[concepts/files|files]]; [[concepts/inference|inference]] requires complex loading processes and management of [[concepts/model-weights|model weights]].
- **Optimization Drivers:** Efficient performance relies heavily on [[concepts/memory-mapping|memory mapping]] and [[concepts/software-performance|performance optimization]] during the loading and execution phases.

## Related Notes
- 2026 04 22 [[concepts/llm-inference|LLM Inference Engines]] [[concepts/memory|Memory]] Mapping and [[concepts/software-performance|Performance Optimization]]
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Building-an-AI-Marketing-Team-with-Claude-Code-Agents-Skills|Building an AI Marketing Team with Claude Code Agents Skills]] · [▶ source](https://www.youtube.com/watch?v=yLXLHnD4fco)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-22: AI Agent Skills · [▶ source](https://www.youtube.com/watch?v=Lg-meK5IU8Q)
- 2026-04-27: Apple