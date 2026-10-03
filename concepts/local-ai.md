---
type: concept
domain: ai-agents
tags:
  - "local-ai"
  - "llm"
  - "privacy"
  - "offline"
  - "lm-studio"
  - "agentic-ai"
  - "open-source"
  - "self-hosting"
  - "quantization"
  - "speculative-decoding"
  - "neutrino-8b"
  - "meta-muse-glimmer-30b"
  - "replit"
  - "hardware-advisor"
  - "ai-development"
  - "bonsai-2.7b"
  - "prism-ml"
  - "qwen-3.8"
  - "single-gpu"
aliases:
  - "Local AI"
summary: Local AI involves running large language models and AI workloads on personal hardware to ensure privacy, offline capability, and cost efficiency.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-18T20:31:46+00:00" }
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Local AI

**[[concepts/local-models|Local AI]]** refers to the deployment and execution of [[concepts/large-language-models|Large Language Models]] (LLM) and other [[concepts/artificial-intelligence|artificial intelligence]] workloads directly on local hardware (personal computers, servers) rather than relying on remote cloud-based APIs. This approach prioritizes data [[concepts/privacy|privacy]], offline capability, and reduced latency.

## Key Concepts
- **Privacy & Security**: Data never leaves the local device, mitigating risks associated with third-party data processing.
- **[[concepts/cost-efficiency|Cost Efficiency]]**: Eliminates recurring API subscription fees; costs are limited to hardware and electricity.
- **Offline Operation**: Functionality remains intact without internet connectivity.
- **[[concepts/customization|Customization]]**: Users can fine-tune models or swap weights to suit specific use cases.
- **Hardware Accessibility**: Recent developments focus on optimizing models for single-GPU deployment to lower entry barriers.

## Model Landscape & Hardware Constraints
- **Compact Model Optimization**: Efforts to make powerful local AI accessible include creating exceptionally compact versions of larger architectures.
- **[[concepts/qwen-38-27b|Bonzai 2.7B]]**: A compact variant of the [[entities/qwen|Qwen 3.8 27B]] model developed by [[entities/prism-ml|Prism ML]]. It aims to address [[concepts/single-gpu-performance|single-GPU performance]] challenges, enabling local AI accessibility on [[concepts/consumer-hardware|consumer hardware]].
- **Performance Trade-offs**: While smaller models like [[entities/bijan-bowen|Bonzai 2.7B]] improve accessibility, they may face performance limitations compared to their larger counterparts when running on limited GPU resources.
- **Evaluation**: Detailed analysis of single-GPU performance challenges for local AI accessibility is available in [[lab-notes/2026-09-18-Bonzai-2.7B-AI-Single-GPU-Performance-Challenges-for-Loc|Bonzai 2.7B AI: Single-GPU Performance Challenges for Local AI Accessibility]].

## References
- [Bonzai 2.7B AI: Single-GPU Performance Challenges for Local AI Accessibility](https://www.youtube.com/watch?v=OA5cICIzD-c)
