---
type: concept
domain: ai-agents
summary: NPU support is the capability of software and frameworks to leverage specialized Neural Processing Units for optimized and efficient AI model inference.
updated: 2026-05-23
group: open-systems-local-models
stub: true
---
# NPU support

The capability of [[concepts/software|software]] and frameworks to leverage specialized [[concepts/neural-processing-units|Neural Processing Units]] for optimized, [[concepts/cost-efficient-ai|efficient AI]] [[concepts/inference|model inference]].

### Key Implementations
- [[entities/nexa-ai|Nexa AI]] - run [[concepts/models|models]] locally ([[concepts/nexa-sdk|Nexa SDK]]):
    - Enables [[concepts/on-device-ai|local model execution]] across [[concepts/neural-engine|NPU]], GPU, and [[concepts/cpu]] backends.
    - Supports multiple model formats, including [[concepts/gguf|GGUF]] and [[concepts/mlx-format|MLX]].
    - Prioritizes data [[concepts/privacy|privacy]] through local-only processing.
    - Serves as a [[entities/high-performance|high-performance]] alternative to [[entities/ollama]] and [[entities/llamacpp]].

### Edge Models
- [[concepts/google-search|Google]] [[concepts/gemma-4|Gemma 4]]:
    - Multimodal [[concepts/reasoning-models|open-source models]] ([[concepts/apache-2.0|Apache 2.0]]).
    - Optimized "edge versions" ([[concepts/e2b|E2B]], E4B) for edge AI.
    - 2.3B parameter [[concepts/architecture|architecture]] designed to achieve performance parity with much larger models (e.g., 70B).

### Related Concepts
- [[concepts/hardware|Hardware]] Acceleration
- [[entities/bitnet|Edge AI]]
- [[concepts/local-llm]]
- [[concepts/inference-optimization]]

---
**Backlinks:**
- 2026 04 22 [[concepts/23b-parameter-models|Google Gemma 4]] Efficient 2.3B Parameter Multimodal [[concepts/edge-ai|Edge AI]]
- [[concepts/date-2026-04-13|2026]] 04 14 [[concepts/nexa-sdk|Nexa AI]] run [[concepts/models|models]] locally
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Anthropic-Dispatch-Remote-Desktop-AI-Integration-Claude-and-OpenClaw|Anthropic Dispatch Remote Desktop AI Integration Claude and OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=1_VlT1vhN04)
- 2026-04-09: [[lab-notes/2026-04-09-Project-Glasswing-Mitigating-Anthropic-Mythos-AIs-Zero-Day-Vulnerability-Capabilities|Project Glasswing: Mitigating Anthropic Mythos AI's Zero-Day Vulnerability Capabilities]]
- 2026-04-10: [[lab-notes/2026-04-10-NemoClaw-vs-OpenClaw-NVIDIAs-Secure-AI-Agent-for-Enterprise|NemoClaw vs OpenClaw NVIDIAs Secure AI Agent for Enterprise]] · [▶ source](https://www.youtube.com/watch?v=LfvKkrVSO-U)
- 2026-04-11: [[lab-notes/2026-04-11-Community-Health-Nursing-Core-Terminology-and-Nursing-Roles|Community Health Nursing Core Terminology and Nursing Roles]] · [▶ source](https://www.youtube.com/watch?v=WcA8bDDuVtE)
- 2026-04-22: <https://www.youtube.com/watch?v=ZxQ2DuejRhU