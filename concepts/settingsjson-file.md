---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
tags:
  - "mcp-servers"
  - "gemini-cli"
  - "claude-desktop"
  - "configuration"
  - "bright-data"
  - "data-extraction"
aliases:
  - "settings.json"
  - "MCP server configuration"
summary: The settings.json file is used to configure Model Context Protocol (MCP) servers, such as Bright Data, for use with the Gemini CLI and Claude Desktop.
updated: 2026-07-18
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Settings.json File

The settings.json file is a configuration file that defines [[concepts/external-tools|Model Context Protocol]] (MCP) server connections for applications like [[concepts/autonomous-coding|Gemini CLI]] and [[entities/claude-desktop|Claude Desktop]]. It serves as a standardized way to specify which [[concepts/mcp-servers|MCP servers]] are available to these applications and the parameters needed to connect to them. By maintaining this configuration in a single file, users can manage access to external tools and data sources without modifying application code.

## Structure and Configuration

The settings.json file typically contains server definitions with details such as the server name, command to execute, and any environment variables or arguments required for connection. Each MCP server entry includes metadata about how the application should communicate with that server, including protocol details and authentication parameters where applicable. This declarative approach allows multiple applications to reference the same configuration source, reducing duplication and simplifying management across different tools.

## Use Cases

Settings.json files enable integration with various external services and data providers. For example, they can configure connections to Bright Data or other MCP-compatible services, allowing AI assistants and coding tools to access real-time information, perform specialized tasks, or interact with enterprise systems. This configuration-based approach makes it straightforward to add, remove, or modify server connections without requiring application restarts or code changes.
