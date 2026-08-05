---
wiki-ingested: true
title: "Claude Code 20 Loops Scheduled Tasks Google Workspace and Skills"
created: "2026-04-10 14:06"
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
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Claude Code 2.0: Loops, Scheduled Tasks, Google Workspace, and Skills 2.0 Updates
**Clip title:** [[entities/claude-code|Claude Code]] 2.0 Has Arrived (It’s Insane)
**Author / channel:** [[entities/simon-scrapes|Simon Scrapes]]
**URL:** https://www.youtube.com/watch?v=F4zSxfBe5R0

### Summary
The video provides a comprehensive overview of four significant new updates
to [[concepts/claude-code|Claude Code]], designed to enhance its [[concepts/automation|automation]] capabilities and
[[concepts/workflow|workflow]] efficiency. These key features are [[concepts/loops|Loops]], [[concepts/scheduled-tasks|Scheduled Tasks]], Google
Workspace Access, and Built-in [[concepts/skills-testing|Skills Testing]] (also known as [[concepts/skills-20|Skills 2.0]]),
each addressing different facets of [[concepts/ai-powered-task-management|AI-powered task management]] and
development.

First, "Loops" enable users to execute [[concepts/recurring-prompts|recurring prompts]] directly within
their active [[entities/claude-code|Claude Code]] [[concepts/session|session]]. This is facilitated by creating [[concepts/temporary-cron-jobs|temporary cron jobs]], allowing for [[concepts/continuous-monitoring|continuous monitoring]] or action, such as checking
an [[entities/email|email]] inbox every ten minutes. However, loops have specific limitations:
they expire after three days, only function while the current [[concepts/terminal|terminal]]
session is active, and do not catch up on missed runs if the session is
closed. For more persistent and long-term [[concepts/automation|automation]], "Scheduled Tasks"
offer a robust [[concepts/solution|solution]]. These tasks initiate a fresh [[concepts/claude|Claude]] Code instance
at predetermined intervals (daily, weekly, hourly), execute specified
skills by reading project [[concepts/files|files]], and then terminate the session. Unlike
loops, scheduled tasks *do* catch up on any missed runs when the
application is reopened, making them ideal for consistent [[concepts/daily-routines|daily routines]]
like repurposing video content.

A critical advancement discussed is "[[concepts/google-workspace|Google Workspace]] Access," which
significantly broadens [[concepts/ai-assisted-coding|Claude Code]]'s ability to interact with the Google
ecosystem. Previously, Claude Code's [[concepts/integration|integration]] with [[concepts/google-drive|Google Drive]] and Docs
was limited, often requiring complex API setups. This update leverages
Google's newly released [[concepts/open-source|open-source]] [[concepts/command-line-interface|Command Line Interface]] (CLI), named
`gws`, specifically designed for both human and [[concepts/ai-agent|AI agent]] interaction. `gws`
grants comprehensive access to [[concepts/motivation|Drive]], Gmail, Calendar, Docs, Sheets, and
Slides, offering over 100 pre-built recipes. It allows Claude Code to
create properly formatted Google Docs with headers, [[concepts/images|images]], and links by
executing Bash [[concepts/commands|commands]], providing a much more seamless and powerful
integration experience.

Finally, "Built-in [[concepts/skills-testing|Skills Testing]]," or Skills 2.0, introduces a
transformative approach to developing and refining AI skills within Claude
Code. Historically, improving skills involved a trial-and-error process
with no objective metrics. Skills 2.0 solves this by enabling automated
[[concepts/testing|testing]] of skills against specific, user-defined criteria. The
`[eval-viewer](https://en.wikipedia.org/wiki/eval-viewer)` feature runs multiple skill variations in parallel, providing
detailed performance reports, including pass rates, execution times, token
usage, and granular "formal grades" for each tested criterion. This allows
developers to quickly identify strengths and weaknesses, iterate based on
concrete feedback, and even A/B test different skill configurations to
optimize for efficiency and quality. This iterative testing process
accelerates skill development, transforming an imprecise [[concepts/art|art]] into a
data-driven science, ensuring that built skills consistently achieve
desired outcomes.

## Related Concepts
- [[concepts/loops|Loops]] — [Wikipedia](https://en.wikipedia.org/wiki/Loops)
- [[concepts/automation|Scheduled Tasks]] — [Wikipedia](https://en.wikipedia.org/wiki/Scheduled_Tasks)
- [[concepts/skills-20|Skills 2.0]] — [Wikipedia](https://en.wikipedia.org/wiki/Skills_2.0)
- [[concepts/workflow-automation|Workflow automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Workflow_automation)
- [[concepts/skills-testing|Skills Testing]] — [Wikipedia](https://en.wikipedia.org/wiki/Skills_Testing)
- [[concepts/recurring-prompts|Recurring prompts]] — [Wikipedia](https://en.wikipedia.org/wiki/Recurring_prompts)
- [[concepts/temporary-cron-jobs|Temporary cron jobs]] — [Wikipedia](https://en.wikipedia.org/wiki/Temporary_cron_jobs)
- [[concepts/continuous-monitoring|Continuous monitoring]] — [Wikipedia](https://en.wikipedia.org/wiki/Continuous_monitoring)
- AI [[entities/agent|agent]] interaction — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent_interaction)
- [[concepts/google-workspace-access|Google Workspace Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Workspace_Integration)
- [gws CLI](https://en.wikipedia.org/wiki/gws_CLI) — [Wikipedia](https://en.wikipedia.org/wiki/gws_CLI)
- [[concepts/browser-automation|Automated testing]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_testing)
- eval-viewer — [Wikipedia](https://en.wikipedia.org/wiki/eval-viewer)
- A/B [[concepts/testing|testing]] — [Wikipedia](https://en.wikipedia.org/wiki/A/B_testing)
- [[concepts/performance-based-content-optimization|Performance metrics]] — [Wikipedia](https://en.wikipedia.org/wiki/Performance_metrics)
- [[concepts/agent-skills|AI skills]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_skills)
