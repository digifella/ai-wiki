---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "local-llm"
  - "ollama"
  - "anthropic-api"
  - "glm-4.7-flash"
  - "claude-code"
  - "open-source"
aliases:
  - "Running Claude Code Locally"
  - "Ollama with GLM-4.7-Flash"
summary: This guide explains how to use Ollama's Anthropic API compatibility to run Claude Code locally using models such as GLM-4.7-Flash.
updated: 2026-05-01
---
# Local Model

A local model refers to a [[concepts/large-language-model|large language model]] (LLM) that runs on a user's own [[concepts/hardware|hardware]] rather than through a cloud-based API service. Local models provide [[concepts/privacy|privacy]], reduce latency, and eliminate dependency on external services, making them useful for development, [[concepts/testing|testing]], and offline [[concepts/software|applications]].

## Running Claude Code Locally

[[entities/ollama|Ollama]], a tool for managing and [[concepts/running|running]] LLMs locally, now supports [[entities/anthropic-institute|Anthropic]] API compatibility. This allows developers to run [[concepts/ai-assisted-coding|Claude Code]] using [[concepts/reasoning-models|open-source models]] like [[entities/glm-47-flash|GLM-4.7-Flash]] without needing to connect to Anthropic's cloud infrastructure. The compatibility layer translates requests in the Anthropic API format to the format expected by the local model, enabling existing Claude Code integrations to work seamlessly with local alternatives.

## Benefits and Use Cases

Running models locally eliminates API costs associated with cloud-based services and provides control over data privacy. Developers can use this approach for iterative development, testing agent behaviors, and building applications that need to function without internet connectivity. The trade-off involves managing the [[concepts/computational-resources|computational resources]] required to run the model, which depends on the [[concepts/code-size|model size]] and available hardware.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-10: Fine-Tune [[entities/gemma-4|Gemma-4 on Your Own Dataset Locally: Step-by-Step]]
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)
- 2026-04-08: Anthropic