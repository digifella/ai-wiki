---
type: concept
domain: tools-platforms
group: developer-tooling-clis
tags:
  - "ai-agents"
  - "external-tools"
  - "data-sources"
  - "workflow-integration"
  - "protocol"
aliases:
  - "MCP"
  - "Model Context Protocol"
summary: The Model Context Protocol (MCP) enables AI agents and workflows to interact with external tools and data sources.
updated: 2026-05-01
---
# Open Source Protocol

The [[concepts/external-tools|Model Context Protocol]] (MCP) is an [[concepts/open-source|open-source]] standard that enables [[concepts/agentic-ai|AI agents]] and [[concepts/software|applications]] to connect with external tools, data sources, and services. By establishing a standardized interface, MCP allows language models and AI workflows to request information, execute actions, and integrate with diverse systems in a consistent manner. This reduces the need for custom integrations and makes it easier to build complex [[concepts/ai-powered-applications|AI applications]] that can interact with real-world data and operations.

## Architecture and Integration

MCP works by defining a protocol through which AI systems can discover, request, and utilize external resources. Rather than requiring each [[concepts/ai-application|AI application]] to build custom connectors for every tool or database it needs to access, MCP provides a unified framework. This allows developers to create reusable tools and [[concepts/data-connectors|data connectors]] that any MCP-compatible AI system can leverage, similar to how [[concepts/plugins|plugins]] or APIs work in traditional software.

## Practical Applications

In practice, MCP enables AI agents to perform tasks that require access to live information or external operations—such as querying databases, calling APIs, retrieving documents, or controlling software systems. This makes it possible to build AI workflows that go beyond static knowledge and can interact meaningfully with an [[concepts/organization|organization]]'s existing tools and infrastructure.
