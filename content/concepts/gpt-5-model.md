---
type: concept
domain: ai-agents
tags:
  - "gpt-5"
  - "openai"
  - "mcp-server"
  - "model-integration"
  - "claude-code"
  - "api-optimization"
aliases:
  - "GPT-5 Integration"
  - "OpenAI GPT-5"
  - "GPT-5 Local Setup"
summary: This page details the integration of OpenAI's GPT-5 model into Claude Code using a local Model Context Protocol (MCP) server.
updated: 2026-05-23
group: openai-chatgpt
---
# Gpt 5 Model

[[concepts/3d-game-development|GPT-5]] is [[entities/openai|OpenAI]]'s [[concepts/statistical-language-modeling|language model]] that can be integrated into [[concepts/ai-assisted-coding|Claude Code]] through a [[concepts/local-model|local Model]] Context Protocol (MCP) server. This [[concepts/integration|integration]] approach allows developers to leverage GPT-5's [[concepts/capabilities|capabilities]] within the [[concepts/claude-code|Claude Code]] environment while maintaining local [[concepts/power|control]] over the server infrastructure.

## Local MCP Server Integration

The integration utilizes a [[concepts/external-tools|Model Context Protocol]] server [[concepts/running|running]] locally rather than relying solely on cloud-based [[entities/api-calls|API calls]]. This [[concepts/setup|setup]] reduces latency for certain operations and provides developers with greater control over model invocations and data [[concepts/flow|flow]]. The local [[concepts/mcp-server|MCP server]] acts as an intermediary between Claude Code and the GPT-5 model, facilitating communication and [[concepts/context-management|context management]].

## Practical Implementation

Setting up GPT-5 within Claude Code via a local MCP server involves configuring the server to handle model requests and [[concepts/responses|responses]]. This approach is particularly relevant for developers seeking to optimize API costs while maintaining access to GPT-5's capabilities. The configuration enables direct model integration that goes beyond standard API usage patterns, making it suitable for [[concepts/custom-ai-agent|custom AI agent]] workflows and specialized development [[concepts/scenarios|scenarios]].
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)