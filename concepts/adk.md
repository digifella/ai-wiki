---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "google-cloud"
  - "llm-frameworks"
  - "multi-agent-workflows"
  - "tool-integration"
  - "looker-integration"
  - "agent-development-kit"
aliases:
  - "Agent Development Kit"
  - "Google ADK"
summary: ADK is a framework within the Google Cloud ecosystem for building, testing, and deploying AI agents, facilitating structured workflows, tool integration, and state management.
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# ADK (Agent Development Kit)

**ADK** is a framework for building, testing, and deploying [[concepts/agentic-ai|AI agents]]. It facilitates structured [[concepts/multi-agent-workflows|agent workflows]], [[concepts/planning-errors|tool integration]], and state management, often utilized within the **[[entities/google-cloud|Google Cloud]]** ecosystem for enterprise-grade LLM applications.

## Key Integrations & Use Cases

- **Looker [[concepts/data-interaction|Data Interaction]]**: ADK can be configured to enable [[concepts/llm]] agents to interact with Looker data platforms.
    - This integration typically leverages the [[entities/mcp]] toolbox for databases to bridge the agent with the data layer.
    - See [[concepts/implementation-details|implementation details]] in [[lab-notes/2026-06-13-Configuring-an-LLM-Agent-for-Looker-Data-Interaction-Usi|Configuring an LLM Agent for Looker Data Interaction Using ADK and MCP]].

## Related Concepts

- [[concepts/llm]]
- [[concepts/agent-development|Agent Development]] Kit
- [[concepts/model-context-protocol]]
- Looker

## References

- [Configuring an LLM Agent for Looker Data Interaction Using ADK and MCP](https://www.youtube.com/watch?v=yeRvxe7MRj4)
