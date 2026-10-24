---
type: concept
domain: ai-agents
tags:
  - "LLM"
  - "local-deployment"
  - "llama.cpp"
  - "open-source"
  - "inference"
  - "jan"
  - "local-llm"
  - "desktop-app"
  - "privacy"
  - "llama-cpp"
aliases:
  - "Jan Desktop"
summary: Jan is a privacy-focused desktop application that enables local inference of open-source large language models using interfaces like llama.cpp.
updated: 2026-10-04
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-17T20:30:59+00:00" }
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Jan

**Jan** is a [[concepts/desktop-application|desktop application]] for running [[concepts/large-language-models|Large Language Models]] (LLMs) locally. It serves as a user-friendly interface for [[concepts/open-source-llm|Open LLMs]], prioritizing [[concepts/privacy|privacy]] and offline capability.

## Key Features
- **[[concepts/cloud-independence|Local-First Architecture]]**: All data processing occurs on-device, ensuring no data leaves the user's machine.
- **Model Agnostic**: Supports various [[concepts/open-source-models|open-source models]], including those compatible with the [[entities/gguf]] format.
- **Easy Deployment**: Simplifies the setup of local [[concepts/model-inference|inference]] engines, often leveraging libraries like [[entities/llamacpp]] under the hood.

## Integration with LLaMA.cpp
For [[concepts/power-users|advanced users]] or specific deployment needs, Jan integrates with or allows interaction via the [[entities/llamacpp]] server. This enables:
- Direct deployment of open LLMs using the [[concepts/inference-engine|LLaMA.cpp]] framework.
- Interaction with models via [[concepts/developer-apis|API endpoints]] for custom workflows.
- Reference: [[lab-notes/2026-08-18-Local-Open-LLM-Deployment-and-Interaction-using-LLaMA.cp|Local Open LLM Deployment and Interaction using LLaMA.cpp Server]]

## References
- [Local Open LLM Deployment and Interaction using LLaMA.cpp Server](https://www.youtube.com/watch?v=G_Raw7GEN0I)
