---
type: entity
tags:
  - "glm-model"
  - "mixture-of-experts"
  - "local-execution"
  - "ollama-integration"
  - "anthropic-api-compatibility"
aliases:
  - "GLM-4.7"
  - "GLM 4.7 Flash"
  - "Ollama GLM Channel Model"
summary: A mixture-of-experts model with 30B total and 3B active parameters that supports local execution via Ollama's Anthropic API compatibility layer.
updated: 2026-07-12
stub: true
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
status: draft
---
# GLM-4.7-Flash

## Architecture
- **Model Type**: [[entities/mixture-of-experts]] (MoE).
- **Parameters**: 30B [[concepts/total-parameters|total parameters]] with 3B [[concepts/active-parameters|active parameters]].

## Local Deployment & Integration
- **[[concepts/local-execution|Local Execution]]**: Can be used to run [[entities/claude-code]] locally.
- **Compatibility**: Leverages [[entities/ollama]]'s [[concepts/anthropic-api-compatibility|Anthropic API compatibility]] layer to interface with tools designed for [[entities/claude-4|Claude]].

## References
- 2026 04 14 [[entities/llama|Ollama]] [[concepts/claude-ai|Claude]] GLM Channel [[entities/sam-witteveen|Sam Witteveen]]
## Source Notes

- 2026-04-07: [[lab-notes/2026-04-07-OpenClaw-Autonomous-AI-Agent-Setup-Configuration-and-Advanced|OpenClaw Autonomous AI Agent Setup Configuration and Advanced]] · [▶ source](https://www.youtube.com/watch?v=u4ydH-QvPeg)
