---
wiki-ingested: true
title: "Building an AI Marketing Team with Claude Code Agents & Skills"
created: "2026-04-07 16:45"
date: 2026-04-07
source: lab-summary
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
**Clip title:** [[concepts/ai-assisted-coding|Claude Code]]: Build Your Full [[concepts/ai-marketing-team|AI Marketing Team]] (Agents +
[[concepts/instruction-reuse|Claude Skills]])
**Author / channel:** Grace Leung
**URL:** https://www.youtube.com/watch?v=yLXLHnD4fco

### Summary
This video provides a detailed, step-by-step guide on how to build and
manage an AI marketing team using Claude Code, [[entities/anthropic-institute|Anthropic]]'s integrated
development environment. The core concept revolves around transforming
Claude into a comprehensive AI marketing team capable of research, writing,
analysis, and [[concepts/design|design]], all working collaboratively. The presenter
illustrates this by creating a marketing team for a fictional travel brand,
GoTravel, involving five specialized [[concepts/ai-connectors|AI agents]] and twelve
marketing-specific skills. The video aims to equip viewers, even
non-technical ones, with the knowledge to set up such a system from scratch.

The setup begins with establishing a structured project environment in VS
Code, including specific folders for brand context (`_context`), standard
operating procedures (`_sop`), reusable [[concepts/templates|templates]] (`_templates`), and
various marketing outputs. Crucially, a `CLAUDE.md` file is created,
serving as the central instruction document that Claude reads to understand
the project's [[concepts/structure|structure]], brand guidelines, and operational rules for agents
and skills. Following this, the video demonstrates creating custom
marketing skills. Two methods are highlighted: a "reference-based method"
where Claude analyzes an existing branded presentation template to create a
new "branded-deck" skill that adheres to specific design rules, and
integrating with [[concepts/external-tools|external tools]] by setting up an `.mcp.json` file to
connect Claude to an [[concepts/image-generation-model|image generation model]] ([[entities/nano|Nano]] Banana) for a "social
creative designer" skill, enabling it to produce on-brand social visuals.

The next [[concepts/phase|phase]] focuses on building specialized AI agents to manage
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
with Notion, allowing the AI agents to scan a shared task board, prioritize
tasks, execute them (researching, designing, writing, analyzing), and
update their status with output file paths. The presenter also showcases a
remote control feature, enabling users to interact with their local Claude
Code [[concepts/session|session]] and assign tasks to their AI team directly from a mobile
device, effectively creating a 24/7 AI marketing team.

## Related Concepts
- [[concepts/ai-marketing|AI Marketing]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Marketing)
- [[concepts/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/claude-code|Claude Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Skills)
- [[concepts/agentic-ai|Agentic Workflows]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Workflows)
- [[concepts/ai-market-research|AI Market Research]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Market_Research)
- [[concepts/ai-copywriting|AI Copywriting]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Copywriting)
- [[concepts/ai-data-analysis|AI Data Analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Data_Analysis)
- [[concepts/ai-driven-graphic-design|AI Graphic Design]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Graphic_Design)
- [[concepts/model-context-protocol|Model Context Protocol (MCP)]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol_%28MCP%29)
- [[entities/agent|Agent]] Routing — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Routing)
- [Task Orchestration](https://en.wikipedia.org/wiki/Task_Orchestration) — [Wikipedia](https://en.wikipedia.org/wiki/Task_Orchestration)
- Integrated Development Environment (IDE) — [Wikipedia](https://en.wikipedia.org/wiki/Integrated_Development_Environment_%28IDE%29)
- [Custom Skills Development](https://en.wikipedia.org/wiki/Custom_Skills_Development) — [Wikipedia](https://en.wikipedia.org/wiki/Custom_Skills_Development)
- [[concepts/external-tool-integration|External Tool Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/External_Tool_Integration)
- Standard Operating Procedures (SOP) — [Wikipedia](https://en.wikipedia.org/wiki/Standard_Operating_Procedures_%28SOP%29)
- [[concepts/ui-generation|Image Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Generation)
