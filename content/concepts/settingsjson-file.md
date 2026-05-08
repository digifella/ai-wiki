---
type: concept
domain: tools-platforms
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
updated: 2026-05-01
---
# Settings.json File

The settings.json file is a configuration file used to set up [[concepts/external-tools|Model Context Protocol]] (MCP) servers for integration with [[concepts/autonomous-coding|Gemini CLI]] and [[entities/claude-desktop|Claude Desktop]]. It defines which [[concepts/mcp-servers|MCP servers]] are available and how they should be connected, enabling these [[concepts/software|applications]] to access external tools and data sources through a standardized protocol.

## Configuration and Usage

The settings.json file contains the server definitions and [[concepts/connection|connection]] [[concepts/parameters|parameters]] needed to instantiate MCP servers. When properly configured, it allows CLI and desktop applications to establish connections to servers like [[concepts/bright-data|Bright Data]], which can provide additional capabilities such as web data access and other [[concepts/contextual-information|contextual information]]. The file format follows JSON syntax and is typically located in the configuration directory of the respective application.

## Integration with Model Context Protocol

MCP servers configured through settings.json act as bridges between client applications and external services. By standardizing server configuration in a single file, users can manage multiple server connections consistently across different tools. This approach simplifies the process of extending application functionality without requiring code changes to the core application itself.
