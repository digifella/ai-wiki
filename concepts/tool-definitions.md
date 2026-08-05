---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "tool-calling"
  - "mcp"
  - "anthropic"
  - "docker"
  - "llm-agents"
  - "token-optimization"
aliases:
  - "Advanced Tool-Calling Methods"
  - "MCP and Docker Implementation"
summary: This page covers advanced tool-calling methods, including Anthropic's Tool Search Tool and the implementation of the Model Context Protocol (MCP) with Docker.
updated: 2026-07-12
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Tool Definitions

Tool definitions are formal specifications that enable language models to understand and invoke external functions, [[concepts/open-standard-protocols|APIs]], and services. They describe what tools are available, what parameters they accept, and what outputs they produce. This structured approach allows models to programmatically call tools rather than merely discussing them, expanding their practical capabilities beyond [[concepts/text-generation|text generation]] alone.

## Standardized Formats

Tool definitions typically follow standardized formats that include a tool name, description, and parameter schema. Common implementations include JSON Schema for parameter specification and OpenAPI standards for API documentation. These formats ensure that models can reliably parse tool specifications and generate valid function calls with appropriate arguments.

## The Model Context Protocol

The [[concepts/external-tools|Model Context Protocol]] (MCP) represents an emerging standard for [[concepts/planning-errors|tool integration]], enabling [[concepts/standardized-communication|standardized communication]] between language models and external services. MCP can be implemented across various platforms and [[concepts/containerization|containerization]] systems like [[concepts/docker|Docker]], allowing organizations to create reproducible, isolated tool environments. This approach facilitates both local tool execution and cloud-based [[concepts/service-integration|service integration]] while maintaining [[concepts/security|security]] boundaries.

## Tool Search and Discovery

Advanced implementations include automated tool discovery [[concepts/causes|mechanisms]], such as [[entities/anthropic-institute|Anthropic]]'s [[concepts/context-tokens|Tool Search Tool]], which helps models identify and select relevant tools from large tool libraries. These systems improve [[concepts/vllm|model performance]] by making dynamic [[concepts/tool-selection|tool selection]] feasible, allowing models to choose appropriate resources based on task requirements rather than relying on pre-selected tool sets.
## Source Notes

- 2026-04-29: Optimizing LLM Agent · [▶ source](https://www.youtube.com/watch?v=rU6IYiQ1SdQ)
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
