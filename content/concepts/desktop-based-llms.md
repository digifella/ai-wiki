---
type: concept
domain: ai-agents
tags:
  - "local-ai"
  - "llm"
  - "privacy"
  - "edge-computing"
  - "local-llm"
  - "data-privacy"
  - "on-device-ai"
  - "inference-engines"
aliases:
  - "Local LLMs"
  - "On-device LLMs"
summary: "Execution of large language models on local hardware or edge devices to maintain data sovereignty and minimize reliance on cloud-based APIs."
updated: 2026-04-26
group: model-efficiency-compression
---
# Desktop-based LLMs

Execution of [[concepts/large-language-models]] on local [[concepts/hardware|hardware]] or edge devices to maintain [[concepts/data-sovereignty|data sovereignty]] and minimize reliance on cloud-based [[concepts/application-programming-interfaces-apis|APIs]].

## Core Advantages
- **Data [[concepts/privacy-protection|Privacy]]**: Processing occurs entirely on local [[concepts/hardware|hardware]], preventing sensitive [[concepts/data-leakage|data leakage]] to third-party providers.
- **Latency & Connectivity**: Enables functionality without internet dependency, reducing network-induced [[concepts/inference|inference]] delays.
- **[[concepts/cost|Cost]] Efficiency**: Eliminates per-token subscription or API costs by leveraging existing GPU and [[concepts/vram]] resources.

## Key Software & Ecosystem
- [[entities/ollama]]
- [[entities/lm-studio]]
- [[entities/anythingllm]]
	- **v1.12 "Channels" Feature**: Enables mobile interaction with [[concepts/self-hosted-llms]], providing "on the go" access to private AI assistants without complex [[concepts/setup|setup]].

## Related Concepts
- RAG ([[concepts/contextualized-language-understanding|Retrieval-Augmented Generation]])
- [[concepts/model-compression]]
- [[concepts/edge-computing]]
- [[concepts/inference|Inference]] Engines

Backlink: [[concepts/date-2026-04-13|2026]] 04 22 [[entities/anythingllm|AnythingLLM]] 1.12 Channels Mobile Interaction with Private [[concepts/self-hosted-llms|Self Hosted LLMs]]

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Optimizing-Claude-Code-Sub-Agents-for-Context-Management-in-Startup|Optimizing Claude Code Sub Agents for Context Management in Startup]] · [▶ source](https://www.youtube.com/watch?v=-O6MEtleOdA)
- 2026-04-08: [[lab-notes/2026-04-08-AI-Powered-Second-Brain-Claude-Code-Integration-with-Obsidian|AI Powered Second Brain Claude Code Integration with Obsidian]] · [▶ source](https://www.youtube.com/watch?v=2kbINqpluM0)
- 2026-04-22: [[lab-notes/2026-04-22-AnythingLLM-1.12-Channels-Mobile-Interaction-with-Private-Self-Hosted-LLMs|AnythingLLM 1.12 Channels: Mobile Interaction with Private Self-Hosted LLMs]] · [▶ source](https://youtu.be/Ei5nB5fyn7g)