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
updated: 2026-07-13
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Agent Tools

Agent Tools are capabilities that enable Claude to interact with external systems and perform actions beyond generating text. By defining tools and their specifications, developers allow Claude to autonomously decide when and how to use them based on user requests. This capability transforms Claude from a text-generation model into an agent capable of taking actions in response to user needs.

## How Agent Tools Work

The tool-use process follows a structured interaction pattern. When a user makes a request, Claude analyzes whether available tools would help fulfill it. If a tool is needed, Claude returns a structured response indicating the tool name and required parameters. The application then executes the specified tool and reports back to Claude with the results. This loop continues until Claude determines the user's request has been adequately addressed.

## Use Cases

Agent Tools enable a wide range of applications, from retrieving real-time information through API calls to modifying data in external systems. Common implementations include querying databases, calling third-party APIs, performing calculations, and automating workflows. By combining multiple tools, Claude can handle complex, multi-step tasks that require interacting with various systems.

## Defining Tools

Developers define tools by specifying their name, description, and input parameters using a structured schema. Clear descriptions help Claude understand when a tool is appropriate to use. This declarative approach allows developers to integrate Claude into existing systems without requiring changes to Claude's underlying model.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Building-an-AI-Marketing-Team-with-Claude-Code-Agents-Skills|Building an AI Marketing Team with Claude Code Agents Skills]] · [▶ source](https://www.youtube.com/watch?v=yLXLHnD4fco)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Code-20-Upgrade-Enhanced-AI-Coding-Workflow-Automation-and|Claude Code 20 Upgrade Enhanced AI Coding Workflow Automation and]] · [▶ source](https://www.youtube.com/watch?v=ShTxTquBDxY)
