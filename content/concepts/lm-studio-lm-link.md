---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "concept"
  - "lm-studio"
  - "remote-llm-access"
  - "portable-devices"
  - "local-models"
  - "private-ai"
  - "mobile-inference"
aliases:
  - "LM Studio Remote Access"
  - "LM Link Feature"
summary: LM Studio's LM Link feature enables remote access to local language models from portable devices.
updated: 2026-05-01
---
# Lm Studio Lm Link

[[entities/lm-studio|LM Studio]]'s [[entities/lm-link|LM Link]] is a feature that provides [[concepts/remote-access|remote access]] to local language models, allowing users to connect to language models [[concepts/running|running]] on a primary device from [[concepts/portable-devices|portable devices]] or other machines on the network. This capability enables developers and users to leverage locally-hosted language models without requiring the model to run directly on resource-constrained devices.

## Use Cases

The feature addresses scenarios where users need flexible access to their language models across multiple devices. This is particularly useful for mobile development, [[concepts/testing|testing]] across different [[concepts/hardware|hardware]] configurations, or enabling collaborative access to shared model instances without duplicating large model files across machines.

## Architecture

LM Link operates by exposing local language models through a network interface, allowing remote clients to send requests and receive [[concepts/responses|responses]] from the host machine running LM Studio. This approach maintains the [[concepts/privacy|privacy]] and control benefits of [[concepts/local-model|local model]] [[concepts/deployment|deployment]] while extending [[concepts/accessibility|accessibility]] beyond the primary device.

## Source Notes
- 2026-04-10: Private AI on the go… a new trick
- 2026-04-07: [[lab-notes/2026-04-07-Google-Stitch-AI-Native-Design-Canvas-for-Conversational-UIUX-Creation|Google Stitch AI Native Design Canvas for Conversational UIUX Creation]] · [▶ source](https://www.youtube.com/watch?v=jV-E2nxpSjQ)