---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
tags:
  - "tool-calling"
  - "anthropic"
  - "ai-tools"
  - "programmatic-methods"
  - "developer-tools"
aliases:
  - "Anthropic Tool Search"
  - "Programmatic Tool Calling"
summary: This concept covers Anthropic's Tool Search Tool and advanced programmatic tool-calling methods.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Tool Search Tool

The Tool Search Tool is an advanced capability developed by Anthropic that enhances how Claude and other language models discover and utilize external tools and APIs. Rather than relying solely on predetermined tool definitions provided at the start of a conversation, this approach enables dynamic tool discovery during model inference. This allows Claude to search through available tools based on task requirements, selecting the most relevant ones without requiring exhaustive upfront specification of every possible tool.

## Dynamic Tool Discovery

Traditional tool-calling methods often require users to define a fixed set of tools in the system prompt, which can become unwieldy as the number of available functions grows. The Tool Search Tool addresses this scalability issue by allowing the model to query a registry of tools at runtime. This mechanism reduces context window usage and minimizes the cognitive load on the model by filtering irrelevant functions before execution.

## Implementation and Integration

This feature is part of Anthropic’s broader infrastructure for programmatic tool use, designed to support complex workflows where the necessary actions are not known in advance. By integrating tool search capabilities, developers can build more flexible applications that adapt to user intent dynamically. The system evaluates the relevance of available tools against the current context, ensuring that only appropriate functions are considered for invocation.

## Source Notes
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-07: [[lab-notes/2026-04-07-Claude-AI-and-Canva-Integration-for-Streamlined-Graphic-Design|Claude AI and Canva Integration for Streamlined Graphic Design]] · [▶ source](https://www.youtube.com/watch?v=gBV5FT40N_M)
- 2026-04-12: [[lab-notes/2026-04-12-Heres-what-it-actually-does-how-to-build-it-yourself|Heres what it actually does how to build it yourself]]
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)
- 2026-04-18: [[lab-notes/2026-04-18-Adobe-Lightroom-April-2024-Updates-AI-Search-Workflow-Creative-Tools|Adobe Lightroom April 2024 Updates AI Search Workflow Creative Tools]] · [▶ source](https://www.youtube.com/watch?v=AMRmW7BicMk)
- 2026-04-22: Stanford
- 2026-04-25: Claude Code · [▶ source](https://www.youtube.com/watch?v=UHVFcUzAGlM)
- 2026-04-28: Integrating Claude AI · [▶ source](https://www.youtube.com/watch?v=7sInxhTDA7U)
- 2026-04-29: Google Deep Research · [▶ source](https://www.youtube.com/watch?v=FVU4qLjy2jE)
