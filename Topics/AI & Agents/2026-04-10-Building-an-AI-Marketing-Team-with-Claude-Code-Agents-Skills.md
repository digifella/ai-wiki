---
wiki-ingested: true
title: "Building an AI Marketing Team with Claude Code Agents  Skills"
created: "2026-04-10 14:05"
date: 2026-04-10
source: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Building an AI Marketing Team with Claude Code Agents & Skills
**Clip title:** [[entities/claude-code|Claude Code]]: Build Your Full [[concepts/ai-marketing|AI Marketing]] Team (Agents +
[[concepts/claude-skills|Claude Skills]])
**Author / channel:** [[entities/grace-leung|Grace Leung]]
**URL:** https://www.youtube.com/watch?v=yLXLHnD4fco

### Summary
This video provides a detailed, step-by-step guide on how to build and
manage an [[concepts/ai-marketing-team|AI marketing team]] using [[concepts/claude-code|Claude Code]], [[entities/anthropic|Anthropic]]'s integrated
[[concepts/coding-workspace|development environment]]. The core concept revolves around transforming
[[entities/claude|Claude]] into a comprehensive [[concepts/ai-marketing|AI marketing]] team capable of research, writing,
analysis, and [[concepts/design|design]], all working collaboratively. The presenter
illustrates this by creating a marketing team for a fictional travel brand,
GoTravel, involving five specialized [[concepts/ai-agents|AI agents]] and twelve
marketing-specific skills. The video aims to equip viewers, even
non-technical ones, with the knowledge to set up such a system from scratch.

The setup begins with establishing a structured project environment in VS
Code, including specific folders for brand context (`_context`), standard
operating procedures (`_sop`), reusable [[concepts/templates|templates]] (`_templates`), and
various marketing outputs. Crucially, a `CLAUDE.md` file is created,
serving as the central instruction document that [[concepts/claude|Claude]] reads to understand
the project's [[concepts/structure|structure]], [brand guidelines](https://en.wikipedia.org/wiki/Brand_Guidelines), and operational rules for agents
and skills. Following this, the video demonstrates creating custom
[[concepts/marketing-skills|marketing skills]]. Two methods are highlighted: a "reference-based method"
where [[concepts/claude-ai|Claude]] analyzes an existing branded presentation template to create a
new "branded-deck" skill that adheres to specific [[concepts/design|design]] rules, and
integrating with [[concepts/external-tools|external tools]] by setting up an `.mcp.json` file to
connect Claude to an [[concepts/image-generation-model|image generation model]] ([[entities/nano-banana|Nano Banana]]) for a "social
creative designer" skill, enabling it to produce on-brand social visuals.

The next [[concepts/phase|phase]] focuses on building specialized [[concepts/ai-agents|AI agents]] to manage
different aspects of marketing. The presenter explains that while
individual skills are useful, combining too many into one conversation can
dilute Claude's focus, much like a single person trying to do too many
different roles. To overcome this, agents are created, each with a defined
role, specific tools, and a set of relevant skills. Examples include a
"Data Analyst" [[entities/agent|agent]], equipped with data visualization and campaign
reporting skills to produce interactive performance dashboards, and a
"Content [[concepts/creator|Creator]]" agent, utilizing blog writing, social copy, lead magnet,
and landing page builder skills to generate integrated content. These
agents are designed to be brand-agnostic, pulling brand context at runtime,
ensuring reusability across various brands.

Finally, the video demonstrates how to orchestrate these agents and
integrate the AI team into a real-world [[concepts/workflow|workflow]]. The `CLAUDE.md` file is
updated to include explicit agent routing rules, dictating when Claude
should delegate tasks to specific agents based on the nature and complexity
of the request. For collaborative task management, the system is integrated
with Notion, allowing the [[concepts/ai-connectors|AI agents]] to scan a shared task board, prioritize
tasks, execute them (researching, designing, writing, analyzing), and
update their status with output file paths. The presenter also showcases a
remote control feature, enabling users to interact with their local [[concepts/ai-assisted-coding|Claude Code]] [[concepts/session|session]] and assign tasks to their AI team directly from a mobile
device, effectively creating a 24/7 [[concepts/ai-copywriting|AI marketing]] team.

## Related Concepts
- [[concepts/ai-marketing-team|AI Marketing Team]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Marketing_Team)
- [[concepts/claude-code|Claude Code Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code_Agents)
- [[concepts/claude-code|Claude Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Skills)
- [[concepts/ai-marketing|AI Marketing]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Marketing)
- [[concepts/execution-orchestration|AI Agent Orchestration]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agent_Orchestration)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/model-context-protocol|Model Context Protocol (MCP)]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol_%28MCP%29)
- [[entities/agent|Agent]] Routing — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Routing)
- [[concepts/workflow-automation|Workflow Automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Workflow_Automation)
- [[concepts/ui-generation|Image Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Generation)
- [[concepts/setup-process|Data Visualization]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_Visualization)
- Brand Guidelines — [Wikipedia](https://en.wikipedia.org/wiki/Brand_Guidelines)
- [[concepts/content-creation|Content Creation]] — [Wikipedia](https://en.wikipedia.org/wiki/Content_Creation)
- [[concepts/external-tool-integration|External Tool Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/External_Tool_Integration)
- Project [[concepts/structure|Structure]] — [Wikipedia](https://en.wikipedia.org/wiki/Project_Structure)
- [[concepts/taskmanagermd|Task Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Task_Management)
