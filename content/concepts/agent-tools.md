---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "concept"
  - "ai-agents"
  - "autonomous-agents"
  - "claude-api"
  - "agent-tools"
  - "api-suite"
aliases:
  - "Claude Managed Agents"
  - "Claude API Suite"
summary: The Claude API Suite provides tools for building and deploying autonomous AI agents.
updated: 2026-05-01
---
# Agent Tools

Agent Tools are capabilities provided through the Claude API Suite that enable [[concepts/action-oriented-ai|autonomous AI agents]] to interact with external systems and perform actions beyond [[concepts/text-generation|text generation]]. By integrating tools into [[concepts/multi-agent-workflows|agent workflows]], [[concepts/claude-ai|Claude]] can access real-time information, call external APIs, retrieve data from databases, and execute actions in response to user requests. This transforms Claude from a text-generation system into an agent capable of taking steps in digital environments.

## How Tools Work

Tools are integrated into [[concepts/agentic-systems|agent systems]] through structured definitions that specify what capabilities are available and how they should be called. When an agent encounters a task requiring external interaction, it can request to use a defined tool, providing the necessary [[concepts/parameters|parameters]]. The system executes the tool, returns results to the agent, and the agent can then continue processing based on what was learned or accomplished.

## Common Use Cases

Agent tools enable practical [[concepts/software|applications]] such as retrieving current information from APIs, querying databases for specific data, executing business processes, and automating workflows that require interaction with multiple systems. Organizations use agent tools to build customer service systems that can look up account information, scheduling assistants that can check calendars and book appointments, and research tools that can gather and synthesize information from multiple sources.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Building-an-AI-Marketing-Team-with-Claude-Code-Agents-Skills|Building an AI Marketing Team with Claude Code Agents Skills]] · [▶ source](https://www.youtube.com/watch?v=yLXLHnD4fco)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Code-20-Upgrade-Enhanced-AI-Coding-Workflow-Automation-and|Claude Code 20 Upgrade Enhanced AI Coding Workflow Automation and]] · [▶ source](https://www.youtube.com/watch?v=ShTxTquBDxY)