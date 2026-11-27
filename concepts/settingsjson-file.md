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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Settingsjson File

The `settings.json` file serves as the central configuration mechanism for connecting Model Context Protocol (MCP) servers to host applications such as the Gemini CLI and Claude Desktop. It defines the available MCP servers and specifies the necessary parameters for establishing connections, effectively acting as a bridge between the application environment and external tooling infrastructure. This file provides a standardized method for declaring server endpoints, command-line arguments, and environment variables required for each connected service.

## Configuration Structure

The file utilizes a JSON object to map server names to their respective configuration details. Each entry typically includes the server's command or executable path, along with any required arguments and environment variables. This structure allows host applications to dynamically launch and communicate with specific MCP servers, such as Bright Data, based on the defined settings. By centralizing these configurations, the file ensures consistent and reproducible integration of external tools across different development environments.
