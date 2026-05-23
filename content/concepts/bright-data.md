---
type: concept
domain: security-infrastructure
tags:
  - "mcp-servers"
  - "data-extraction"
  - "gemini-cli"
  - "claude-desktop"
  - "web-scraping"
  - "api-integration"
aliases:
  - "Bright Data MCP"
  - "Bright Data integration"
summary: A demonstration of configuring and using Bright Data as a Model Context Protocol (MCP) server with Gemini CLI and Claude Desktop for web data extraction.
updated: 2026-05-23
group: data-pipelines-sync-storage
---
# Bright Data

[[entities/bright-data|Bright Data]] is a web data collection platform that provides infrastructure for extracting and processing data from websites at scale. The platform offers [[concepts/capabilities|capabilities]] for [[concepts/web-scraping|web scraping]], data collection, and intelligence gathering through various proxy and collection mechanisms, serving enterprises and developers who need reliable access to public web data.

## MCP Server Integration

Bright Data can be configured as a [[concepts/external-tools|Model Context Protocol]] (MCP) server, enabling [[concepts/large-language-model-llm|large language models]] like [[concepts/claude-ai|Claude]] and Gemini to access [[concepts/web-crawling|web data extraction]] capabilities directly within their interfaces. This [[concepts/integration|integration]] allows users to invoke Bright Data's data collection functions as tools available to the [[concepts/statistical-language-modeling|language model]], streamlining workflows that require combining language model [[concepts/reasoning|reasoning]] with real-time web data retrieval.

## Configuration and Usage

To use Bright Data as an [[concepts/mcp-server|MCP server]], users configure it with [[concepts/autonomous-coding|Gemini CLI]] or [[entities/claude-desktop|Claude Desktop]] by specifying the appropriate server [[concepts/connection|connection]] details and [[concepts/authentication|authentication]] credentials. Once configured, the language model can request web data extraction tasks, which are processed through Bright Data's infrastructure and returned as context for further analysis or processing by the model.
## Source Notes
- 2026-04-29: Optimizing LLM Agent · [▶ source](https://www.youtube.com/watch?v=rU6IYiQ1SdQ)