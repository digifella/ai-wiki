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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Settingsjson File

The `settings.json` file serves as the central configuration mechanism for connecting Model Context Protocol (MCP) servers to host applications such as the Gemini CLI and Claude Desktop. It defines the available MCP servers and specifies the necessary parameters for establishing connections, effectively acting as a bridge between the application environment and external tooling infrastructure.

This file provides a standardized method for declaring server endpoints, command-line arguments, and environment variables required for each connected service. By centralizing these definitions, it allows users to manage access to external data sources and tools without requiring modifications to the core application code or individual server implementations.

Maintaining this configuration in a single JSON file simplifies the management of multiple MCP servers, enabling consistent and reproducible setups across different development environments. It ensures that applications can dynamically discover and interact with registered servers, supporting a modular approach to extending functionality through the Model Context Protocol.
