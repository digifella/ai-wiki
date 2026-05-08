---
type: concept
domain: ai-agents
group: ai-foundations-concepts
tags:
  - "concept"
  - "ai-assisted-coding"
  - "claude-code"
  - "mcp-servers"
  - "superclaude"
  - "workflow-automation"
aliases:
  - "SuperClaude"
summary: SuperClaude is a configuration framework designed to enhance Claude Code using MCP servers.
updated: 2026-05-01
---
# AI Specialists

AI Specialists refers to a configuration and workflow approach for enhancing [[concepts/claude-ai|Claude]]'s code assistance capabilities through the integration of MCP ([[concepts/external-tools|Model Context Protocol]]) servers. This framework enables Claude to connect with specialized server instances that extend its functionality beyond standalone operation, allowing it to access additional context, tools, and capabilities during development work. The approach treats individual server connections as specialized "[[concepts/agents|agents]]" or extensions that provide domain-specific functionality.

## SuperClaude Framework

SuperClaude is a [[concepts/configuration-framework|configuration framework]] that implements the AI Specialists approach. It provides a structured method for setting up [[concepts/ai-assisted-coding|Claude Code]] to work in conjunction with multiple [[concepts/mcp-servers|MCP servers]], enabling developers to compose specialized capabilities for specific development tasks. The framework handles the configuration and orchestration of these server connections, allowing Claude to leverage external tools and data sources seamlessly during code generation and [[concepts/problem-solving|problem-solving]].

## Use Cases

The AI Specialists approach is typically applied in [[concepts/developer-platforms|development environments]] where Claude requires access to specialized knowledge, real-time data, or particular tools beyond its base capabilities. By connecting to configured MCP servers, Claude can integrate with version control systems, documentation repositories, [[concepts/testing|testing]] frameworks, or domain-specific tools, making it more effective for particular project types or workflows.

## Source Notes
- 2026-04-07: Marc Benioff: Salesforce
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Managed-Agents-API-Suite-for-Building-and-Deploying-Autonomous-|Claude Managed Agents API Suite for Building and Deploying Autonomous ]] · [▶ source](https://www.youtube.com/watch?v=NLWiIj47IdI)