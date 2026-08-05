---
type: concept
domain: ai-agents
tags:
  - "local-llm"
  - "ai-agents"
  - "privacy"
  - "quantization"
  - "inference-engines"
  - "tool-use"
  - "vram-optimization"
aliases:
  - "on-device llm deployment"
  - "local ai setup"
  - "private llm hosting"
summary: The deployment of large language models on local hardware using inference engines and quantization formats to enable privacy-focused agentic workflows and tool use.
updated: 2026-07-11
group: open-systems-local-models
stub: true
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
status: draft
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Local LLM installation

The deployment of [[concepts/large-language-models]] on local hardware to ensure [[concepts/privacy|privacy]] and enable [[concepts/agentic-ai]] workflows through [[concepts/acting|Tool Use]].

## Core Technologies
- **[[concepts/inference|Inference]] Engines**: [[entities/ollama]], [[entities/llamacpp]], [[entities/lm-studio]], [[entities/vllm|vLLM]].
- **[[concepts/parameter-reduction|Quantization]] Formats**: [[concepts/gguf|GGUF]], AWQ, EXL2 for optimizing [[concepts/vram]] usage.
- **Capabilities**: [[concepts/agentic-ai]], [[concepts/tool-calling|Function Calling]], Tool Use.

## Recent Developments
- **[[concepts/qwen-model|Qwen3-Coder-Flash]] Implementation**:
    - Specialized focus on [[concepts/agentic-ai]] and [[concepts/tool-use-capabilities|Tool Use capabilities]].
    - Comprehensive [[concepts/installation|installation]] and testing guide by [[entities/fahd-mirza|Fahd Mirza]]: [Video Link](https://www.youtube.com/watch?v=IaqzrByS8yA)
    - Covers full workflow from environment setup to advanced functional demonstration.
    - Source: 2026 04 14 New [[entities/qwen|Qwen]] agentic [[concepts/local-llm|local llm]]
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-OpenClaw-Autonomous-AI-Agent-Setup-Configuration-and-Advanced|OpenClaw Autonomous AI Agent Setup Configuration and Advanced]] · [▶ source](https://www.youtube.com/watch?v=u4ydH-QvPeg)
- 2026-04-10: [[lab-notes/2026-04-10-Integrating-Local-Gemma-4-LLMs-with-Claude-Code-Setup-and-Practical-Us|Integrating Local Gemma 4 LLMs with Claude Code Setup and Practical Us]] · [▶ source](https://www.youtube.com/watch?v=sKNq4CqWkT4)
- 2026-04-27: Google Gemma · [▶ source](https://www.youtube.com/watch?v=yJr_kTCOkFo)
- 2026-04-29: Hermes · [▶ source](https://www.youtube.com/watch?v=1ve4Atbqmoo)
