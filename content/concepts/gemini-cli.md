---
type: concept
domain: ai-agents
tags:
  - "cli-tool"
  - "google-gemini"
  - "mcp-servers"
  - "ai-coding"
  - "command-line"
  - "data-extraction"
aliases:
  - "Google Gemini CLI"
  - "Gemini Command Line Interface"
summary: A command-line interface for Google's Gemini that supports the configuration and use of Model Context Protocol (MCP) servers.
updated: 2026-05-23
group: google-ai-ecosystem
---
# Gemini Cli

[[concepts/autonomous-coding|Gemini Cli]] is a [[concepts/command-line-interface|command-line interface]] that provides access to [[concepts/google-search|Google]]'s [[entities/gemini-models|Gemini AI]] model from terminal environments. It enables users to interact with [[concepts/gemini|Gemini]] through text-based [[concepts/commands|commands]], making the model accessible for scripting, [[concepts/automation|automation]], and [[concepts/integration|integration]] into [[concepts/development-workflows|development workflows]].

## Model Context Protocol Integration

A key feature of [[concepts/cli-tool|Gemini Cli]] is its support for [[concepts/external-tools|Model Context Protocol]] (MCP) servers. [[concepts/mcp-servers|MCP servers]] extend Gemini's [[concepts/capabilities|capabilities]] by connecting it to external tools, data sources, and services. Users can configure MCP servers—such as [[concepts/bright-data|Bright Data]] for web access—within Gemini Cli to enhance the model's functionality with real-time information and specialized capabilities beyond its base [[concepts/training-data|training data]].

## Configuration and Usage

Gemini Cli allows users to configure which MCP servers connect to their Gemini instance, enabling customized setups tailored to specific [[concepts/scenarios|use cases]]. This configuration-driven approach means different users can build different environments depending on whether they need web data access, specialized APIs, or other context sources. The [[concepts/terminal-user-interface-tui|CLI interface]] keeps the tool lightweight while maintaining compatibility with the broader MCP ecosystem used by other [[concepts/ai-powered-applications|AI applications]] like [[entities/claude-desktop|Claude Desktop]].
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Autonomous-Social-Video-Content-Generation-and-Optimization|AI Powered Autonomous Social Video Content Generation and Optimization]] · [▶ source](https://www.youtube.com/watch?v=vjJwgXsMfjM)