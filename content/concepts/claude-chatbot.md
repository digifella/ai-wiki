---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "model-context-protocol"
  - "claude"
  - "chatbot"
  - "agentic-ai"
  - "workflow-automation"
aliases:
  - "Claude Agent"
  - "MCP-enabled Claude"
summary: The Model Context Protocol (MCP) allows Claude to function as an AI agent.
updated: 2026-05-23
group: anthropic-claude
---
# Claude Chatbot

[[concepts/claude-ai|Claude]] is an AI chatbot developed by [[entities/anthropic-institute|Anthropic]] that can be extended to function as an [[concepts/ai-agent|AI agent]] through the [[concepts/external-tools|Model Context Protocol]] (MCP). While [[concepts/claude|Claude]] operates as a [[concepts/ai-chatbots|conversational AI]] by default, MCP enables it to interact with external tools, systems, and data sources, transforming it from a purely text-based assistant into an [[entities/agent|agent]] capable of taking actions in response to user requests.

## Model Context Protocol

The [[concepts/mcps|Model Context Protocol]] is a standardized interface that acts as a universal connector between [[concepts/ai-models|AI models]] and external resources. MCP allows Claude to access tools, databases, and services beyond its [[concepts/training-data|training data]], enabling it to perform tasks that require real-time information or [[concepts/integration|system integration]]. This protocol provides a structured way for Claude to understand what tools are available and how to use them appropriately.

## Agent Capabilities

When equipped with MCP, Claude can function as an [[concepts/action-oriented-ai|agentic AI]] system—meaning it can plan multi-step tasks, [[entities/make|make]] decisions about which tools to use, and execute actions autonomously within defined [[concepts/parameters|parameters]]. This transformation allows Claude to move beyond answering questions to actively solving problems that require external interaction or real-time data retrieval.
## Source Notes
- 2026-04-07: Qwen 3.6 Plus: Open-Source AI
- 2026-04-10: [[lab-notes/2026-04-10-Qwen-36-Plus-Open-Source-AIs-Agentic-Capabilities-and-Frontier|Qwen 36 Plus Open Source AIs Agentic Capabilities and Frontier]] · [▶ source](https://www.youtube.com/watch?v=FuUISGqIC3k)
- 2026-04-11: [[lab-notes/2026-04-11-Claude-Co-Work-8-Advanced-Use-Cases-for-AI-Powered-Workflow-Automation|Claude Co Work 8 Advanced Use Cases for AI Powered Workflow Automation]] · [▶ source](https://www.youtube.com/watch?v=gp3d7RAgFME)
- 2026-04-28: ChatGPT · [▶ source](https://www.youtube.com/watch?v=QrvVkm-8Jx4)