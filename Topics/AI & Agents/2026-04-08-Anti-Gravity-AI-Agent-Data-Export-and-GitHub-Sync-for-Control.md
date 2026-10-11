---
wiki-ingested: true
title: "Anti-Gravity AI Agent Data Export and GitHub Sync for Control"
created: "2026-04-08 09:11"
date: 2026-04-08
source: lab-summary
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
aliases:
  - "lab-notes/2026-04-08-Anti-Gravity-AI-Agent-Data-Export-and-GitHub-Sync-for-Control"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Anti-Gravity AI Agent Data Export and GitHub Sync for Control
**Clip title:** Antigravity Locked Me Out. Best Thing That Ever Happened.
**Author / channel:** Eric Michaud
**URL:** https://www.youtube.com/watch?v=x2uJdV00WgI

### Summary
This video provides a comprehensive guide on how to back up preferences and
projects from AI agents, specifically addressing issues faced by users of
Google Anti-Gravity. The [[entities/speaker|speaker]] highlights that Anti-Gravity recently
changed its terms of service and introduced bugs that significantly
hindered user experience, leading to long lockouts even for paying
subscribers. To counter such incidents and maintain control over one's
digital workspace, the video demonstrates a two-pronged approach: exporting
data from the current agent and syncing it with GitHub for version control
and multi-device [[concepts/logical-consistency|consistency]].

The first key point details how to extract all relevant information from
Anti-Gravity. The speaker explains that an agent's setup, including its
"brain" (memories), workflows, skills, and configurations, is stored as
local [[concepts/files|files]] on the user's computer, not locked within the application
itself. He provides a "Standard Operating Procedure" (SOP) that utilizes
specific files like `.agents` and `.gemini/antigravity` to consolidate all
these elements into a single, portable folder. While [[concepts/api-keys|API keys]] within
configuration files are sanitized during this export for security, the
process ensures that all custom settings and historical data are preserved
and ready for migration to another [[concepts/ai-agent|AI agent]], such as [[concepts/codex|Codex]] or [[concepts/claude|Claude]].

The second part of the video focuses on establishing a robust
synchronization system using GitHub. After demonstrating how to install and
log into the GitHub [[concepts/command-line-interface-cli|Command Line Interface (CLI)]], the speaker shows how to
push the consolidated project folder to a GitHub repository. This not only
provides a [[concepts/secure|secure]], version-controlled backup of all data, allowing users to
revert to previous states if mistakes are made, but also facilitates
seamless [[concepts/workflow|workflow]] across multiple devices. The speaker further illustrates
how a "hook" in his preferred coding environment ([[concepts/claude-code|Claude Code]]) automates
the pushing of changes to GitHub every time an edit is made, ensuring that
all devices are constantly in sync with the latest version of his projects
and settings.

In conclusion, the video empowers users to take ownership of their AI agent
configurations and workflows, preventing potential data loss or disruption
caused by platform changes or technical issues. By explaining how to export
existing data and then leverage GitHub for continuous, automated
synchronization, the speaker offers a practical [[concepts/solution|solution]] for maintaining a
flexible, consistent, and secure development environment. The workflow for
consolidating Anti-Gravity data is provided free in the video's
description, along with access to the speaker's entire [[concepts/obsidian|Obsidian]] vault,
reinforcing the message of [[concepts/user-control|user control]] and [[concepts/accessibility|accessibility]].

## Related Concepts
- [[concepts/ai-agent-data-export|AI agent data export]]
- [[concepts/github-synchronization|GitHub synchronization]]
- [[concepts/ai-agent-configuration-backup|AI agent configuration backup]]
- [[concepts/data-sovereignty|data sovereignty]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_sovereignty)
- [[concepts/version-control-for-ai-agents|Version control]] — [Wikipedia](https://en.wikipedia.org/wiki/Version_control)
- Multi-device [[concepts/logical-consistency|consistency]]
- [[concepts/command-line-interface-cli|Command Line Interface (CLI)]]
- [[concepts/automation|Automation]] [[concepts/hooks|hooks]]
- [[concepts/digital-workspace-control|Digital workspace control]]
- [[concepts/data-backup-strategies|Data backup strategies]]
- [[concepts/data-management|Data migration]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_migration)
- Software [[concepts/configuration-management|configuration management]] — [Wikipedia](https://en.wikipedia.org/wiki/Software_configuration_management)
- [[concepts/workflow-automation|Workflow automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Workflow)
- [Data portability](https://en.wikipedia.org/wiki/Data_portability) — [Wikipedia](https://en.wikipedia.org/wiki/Data_portability)
