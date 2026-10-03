---
wiki-ingested: true
title: "Hermes Agent: Autonomous Skill Creation via /learn Command Introduction and Demo"
date: 2026-06-27
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
aliases:
  - "lab-notes/2026-06-27-Hermes-Agent-Autonomous-Skill-Creation-via-learn-Command"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Hermes Agent: Autonomous Skill Creation via /learn Command Introduction and Demo
**Clip title:** [[concepts/agentic-ai|Hermes Agent]] /learn — Teach Your [[concepts/ai-agent|AI Agent]] Anything
**[[entities/tasia-custode|Author]] / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=ex3u0tDyrao

### Summary
This video introduces the [[concepts/agentic-ai|Hermes Agent]], an [[concepts/open-source|open-source]] [[concepts/self-evolution|self-improving AI]] operator developed by [[entities/nous-research|Nous Research]], highlighting its powerful "[[concepts/skills|skills]]" feature and the newly released `/learn` command. A "[[concepts/skill|skill]]" in Hermes Agent is essentially a `SKILL.md` procedure file that defines a specific workflow. These [[concepts/skills|skills]] load on demand when relevant and become instant `/commands` that the agent can execute. Historically, users had to write these skills manually, but the new `/learn` feature revolutionizes this process by enabling the agent to create them autonomously.

The core [[concepts/innovation|innovation]] of the `/learn` command is its ability to ingest information from various sources—be it a local directory, a URL, pasted [[concepts/notes|notes]], or even the current conversation—and automatically distill that information into a reusable [[concepts/skill|skill]]. The agent gathers the raw data, processes it, extracts the underlying workflow, and then authors a proper `SKILL.md` file. This eliminates the need for manual skill creation, extra tools, or fine-tuned models, making the process highly efficient and accessible across different environments.

The presenter demonstrates this capability with two compelling examples. First, he instructs Hermes Agent to `/learn` from his personal blog (`fahdmirza.com`), asking it to focus on his [[concepts/tone|writing style]], post structure, and topics. Hermes navigates the site, analyzes multiple articles, and intelligently identifies patterns such as his preference for technical deep-dives, direct [[concepts/tone|writing style]], use of em-dashes, and specific formatting conventions. The agent then creates a `fahdmirza-blog-style` skill, which can subsequently be invoked to [[concepts/draft|draft]] new blog posts that adhere to his established style, demonstrating an impressive level of [[concepts/enhancing-ai-contextual-understanding|contextual understanding]].

In the second demonstration, the `/learn` command is applied to a local [[concepts/code|codebase]] for a [[entities/earth|World]] Cup 2026 tracker application. Without explicit [[concepts/instructions|instructions]] on the code's architecture, Hermes is tasked with [[concepts/learning|learning]] its API routes, data model, and overall structure. The agent reads the project files, comprehends the FastAPI endpoints, the [[entities/sqlite-databases|SQLite]] database schema, and even identifies outdated bug comments within the code. This results in a `/worldcup2026-tracker` skill that, when invoked, instantly provides a comprehensive overview of the application's technical details, including its API endpoints and their functions.

The video concludes by emphasizing that the `/learn` feature significantly enhances the Hermes Agent's ability to persist knowledge and improve from [[concepts/experience|experience]]. It bridges the gap between an agent "just figuring something out" and being able to consistently replicate [[concepts/complex-tasks|complex tasks]]. This self-authoring capability allows Hermes to transform diverse data into structured, actionable knowledge, making it a powerful tool for developers and engineers aiming to automate [[concepts/complex-workflows|complex workflows]] and build self-improving [[concepts/ai-models|AI systems]].

### Video Description & Links
#### Description
Hermes Agent's new /learn command turns any URL, codebase, or conversation into a reusable AI skill in seconds.

#hermesagent 

▶ https://github.com/NousResearch/hermes-agent

All rights reserved © Fahd Mirza

#### URLs
- https://github.com/NousResearch/hermes-agent

## Related Concepts
- [[concepts/autonomous-skill-creation|Autonomous Skill Creation]]
- [[concepts/learn-command|/learn Command]]
- [[concepts/skillmd|SKILL.md]]
- [[concepts/self-improving-ai|Self-Improving AI]]
- [[concepts/on-demand-loading|On-Demand Loading]]
- [[concepts/ai-operator|AI Operator]]
- [[concepts/workflow-definition|Workflow Definition]]
- Instant Commands
- [[concepts/open-source|Open-Source AI]]
- [[concepts/traffic-router|Agent Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_architecture)
- [[concepts/contextual-understanding|Contextual Understanding]]
- Knowledge [[concepts/data-persistence|Persistence]]
- [[concepts/knowledge-base|Codebase Analysis]]
- [[concepts/automated-workflow|Automated Workflow]]

## Related Entities
- [[entities/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[entities/nous-research|Nous Research]]
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- FastAPI — [Wikipedia](https://en.wikipedia.org/wiki/FastAPI)
- [[entities/sqlite|SQLite]] — [Wikipedia](https://en.wikipedia.org/wiki/SQLite)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)