---
type: concept
domain: ai-agents
group: reasoning-context-prompting
tags:
  - "concept"
  - "claude-code"
  - "scheduled-tasks"
  - "loops"
  - "ai-automation"
  - "prompt-engineering"
  - "google-workspace"
aliases:
  - "Scheduled Prompts"
  - "Looping Prompts"
  - "Automated Recurring Tasks"
summary: A feature in Claude Code 2.0 that enables loops and scheduled task execution integrated with Google Workspace.
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Recurring Prompts

Recurring Prompts is a feature introduced in Claude Code 2.0 that allows AI agents to execute tasks automatically on a looped or scheduled basis. Instead of requiring manual invocation for each instance, users can configure specific prompts to run at defined intervals. This capability eliminates the need for constant manual intervention, enabling continuous or periodic task execution according to a user-defined schedule.

The feature is designed to integrate with Google Workspace, allowing agents to interact with services such as Gmail, Calendar, and Drive without external orchestration tools. By leveraging native API access, the agent can perform actions like drafting emails, updating calendar events, or organizing files directly in response to the recurring prompt logic.

Configuration involves defining the trigger conditions and the specific instructions for the agent. Users specify the frequency of execution and the context required for the task. The system then monitors the environment for changes or simply executes the defined actions at the set times, ensuring consistent workflow automation.

This integration reduces the overhead of managing separate cron jobs or external scripts for routine administrative tasks. It provides a unified interface for developers and power users to maintain automated workflows within the Claude Code environment, streamlining operations that rely on both code generation and cloud service management.

## Source Notes
- 2026-04-07: Claude Code 2.0 Has Arrived (It’s Insane)
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Code-20-Upgrade-Enhanced-AI-Coding-Workflow-Automation-and|Claude Code 20 Upgrade Enhanced AI Coding Workflow Automation and]] · [▶ source](https://www.youtube.com/watch?v=ShTxTquBDxY)
- 2026-04-24: Strategies to Transform Claude AI · [▶ source](https://www.youtube.com/watch?v=c68ha7pY9aE)
- 2026-05-01: [[lab-notes/2026-05-01-Claude-AI-Productivity-Seven-Secret-Prompts-Summary-Repo|Claude AI Productivity: Seven Secret Prompts Summary Report]] · [▶ source](https://www.youtube.com/watch?v=rabGqnyd_Zw)
