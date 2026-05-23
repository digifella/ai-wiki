---
type: concept
domain: security-infrastructure
tags:
  - "concept"
  - "automation"
  - "agents"
  - "chatgpt-workspace"
  - "data-pipelines"
  - "data-connectors"
  - "business-integration"
aliases:
  - "business connectors"
  - "workspace data integration"
summary: Data connectors are used within ChatGPT Workspace agents to facilitate business automation.
updated: 2026-05-23
group: data-pipelines-sync-storage
---
# Data Connectors

Data connectors are [[concepts/integration|integration]] components within [[entities/make|ChatGPT Workspace agents]] that enable communication between the [[entities/agent|agent]] system and [[concepts/external-data|external data]] sources or [[concepts/business-applications|business applications]]. They function as middleware, translating requests from [[concepts/automation|automation]] workflows into appropriate [[entities/api-calls|API calls]] and normalizing [[concepts/responses|responses]] back into formats the agent can process and act upon.

## Purpose in Business Automation

Within ChatGPT Workspace, data connectors streamline [[concepts/automated-business-operations|business process automation]] by providing agents with standardized access to enterprise systems, databases, and third-party services. Rather than requiring custom integration [[concepts/code|code]] for each [[concepts/connection|connection]], data connectors abstract the technical complexity of different APIs and data formats, allowing agents to focus on orchestrating business logic and [[concepts/decision-making|decision-making]].

## Implementation Context

Data connectors operate within the broader ecosystem of [[concepts/lightweight-automation-platforms|lightweight automation platforms]], where they serve as a critical layer enabling agents to read from and write to multiple systems simultaneously. This [[concepts/architecture|architecture]] supports [[concepts/scenarios|scenarios]] where a single [[concepts/agent-workflow|agent workflow]] needs to pull information from one system, process it through ChatGPT Workspace logic, and then push results to another destination—all within a unified automation sequence.
## Source Notes
- 2026-04-28: # [[entities/chatgpt|ChatGPT]] Workspace [[concepts/agents|Agents]]: Redefining Business [[concepts/automation|Automation]] Generated: 2026-04-28 · API: [[concepts/gemini|Gemini]] 2.5 Flash · Modes: Summary --- ## [[concepts/lightweight-automation-platforms|ChatGPT Workspace Agents]]: Redefining Business (ChatGPT Workspace Agents: Redefining Business Automation)