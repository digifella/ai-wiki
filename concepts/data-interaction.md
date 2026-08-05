---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "data-interaction"
  - "llm-agents"
  - "adk"
  - "mcp"
  - "looker"
  - "ai-integration"
  - "semantic-querying"
  - "looker-integration"
  - "tool-use"
aliases:
  - "Agent Data Access"
  - "LLM Data Querying"
  - "Tool-Augmented Retrieval"
summary: Data interaction describes mechanisms for intelligent systems to query and manipulate data sources using semantic querying, external tools, and standardized protocols like ADK and MCP.
updated: 2026-07-11
group: data-pipelines-sync-storage
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Data Interaction

Data interaction refers to the [[concepts/causes|mechanisms]] by which intelligent systems, particularly [[concepts/llm]]s and agents, query, interpret, and manipulate structured or [[concepts/unstructured-data|unstructured data]] sources. This concept encompasses direct [[entities/api-calls|API calls]], semantic layer queries, and tool-augmented [[concepts/document-retrieval|retrieval]] patterns.

## Core Principles & Patterns
- **Semantic Querying**: Translating natural language into executable queries (e.g., SQL, LookML) via intermediate representations.
- **[[concepts/acting|Tool Use]]**: Leveraging [[concepts/external-tools|external tools]] to bridge the gap between model [[concepts/context-windows|context windows]] and live data stores.
- **[[concepts/agent-collaboration|Agent Orchestration]]**: Coordinating multiple steps—retrieval, validation, execution—to ensure accurate data responses.

## Integration Architectures

### Agent Development Kit (ADK) & MCP
Recent implementations utilize the [[concepts/agent-development|Agent Development]] Kit alongside the [[concepts/model-context-protocol]] to standardize agent-to-data interactions:
- **MCP Toolbox**: Provides standardized connectors for databases and BI platforms, allowing agents to discover available data schemas dynamically.
- **ADK Configuration**: Enables [[concepts/separation-of-concerns|modular agent design]] where specific tools (like Looker connectors) are registered as capabilities within the agent's [[concepts/loop|loop]].

### Case Study: Looker Integration
A practical implementation involves configuring an LLM agent to interact with Looker dashboards and datasets:
- **Setup**: Uses ADK to define the agent structure and MCP to expose Looker’s data endpoints.
- **Workflow**: The agent receives a [[concepts/user-query|user query]], identifies necessary metrics via MCP schema introspection, executes the query through the configured adapter, and synthesizes the results.
- **Reference Implementation**: See [[lab-notes/2026-06-13-Configuring-an-LLM-Agent-for-Looker-Data-Interaction-Usi|Configuring an LLM Agent for Looker Data Interaction Using ADK and MCP]] for detailed configuration steps involving [[entities/gemini-25-flash|Gemini 2.5 Flash]].

## References
- [Configuring an LLM Agent for Looker Data Interaction Using ADK and MCP](https://www.youtube.com/watch?v=yeRvxe7MRj4)
