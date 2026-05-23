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
updated: 2026-05-24
---
# AI Specialists

AI Specialists refers to a configuration and workflow approach for enhancing Claude's code assistance capabilities through the integration of MCP (Model Context Protocol) servers. This framework enables Claude to connect with specialized server instances that extend its functionality beyond standalone operation, allowing it to access additional context, tools, and capabilities during development work.

## Architecture and Integration

The SuperClaude framework operates by establishing connections between Claude and MCP servers, which act as intermediaries that provide domain-specific tools and information access. These servers can expose capabilities such as file system operations, database queries, API integrations, and specialized computing functions. By configuring these connections, developers can create tailored environments where Claude gains access to resources relevant to their specific coding tasks or project requirements.

## Configuration and Deployment

AI Specialists configurations typically involve setting up server definitions and connection parameters that Claude can invoke during conversation. The MCP protocol standardizes how these connections are established and how Claude requests and receives information from specialized servers. This allows for reproducible setups that can be shared across teams or projects, creating consistent development environments where Claude's assistance is enhanced with project-specific tools and context.

## Source Notes
- 2026-04-07: Marc Benioff: Salesforce
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Managed-Agents-API-Suite-for-Building-and-Deploying-Autonomous-|Claude Managed Agents API Suite for Building and Deploying Autonomous ]] · [▶ source](https://www.youtube.com/watch?v=NLWiIj47IdI)