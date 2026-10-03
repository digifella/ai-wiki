---
wiki-ingested: true
title: "Hermes AI Agent Skills: Context Management and Multi-Agent Orchestration"
date: 2026-09-12
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
aliases:
  - "lab-notes/2026-09-12-Hermes-AI-Agent-Skills-Context-Management-and-Multi-Agen"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Hermes AI Agent Skills: Context Management and Multi-Agent Orchestration
**Clip title:** [[concepts/hermes-agent|Hermes Agent]] Skills That Make It 10x More Powerful
**Author / channel:** AI LABS
**URL:** https://www.youtube.com/watch?v=WJgxX0Eib6k

### Summary
The video introduces a suite of advanced skills designed to significantly enhance the capabilities and efficiency of the Hermes [[concepts/ai-coding-agent|AI coding agent]]. While Hermes already possesses inherent abilities and can learn from user workflows, these external "skills" address common limitations and expand its functionality, often becoming highly trending projects on platforms like GitHub. The core motivation behind these additions is to combat "context loss" in long AI conversations, where models tend to forget earlier details due to [[concepts/context-length|context window]] limitations, leading to suboptimal performance.

One major solution presented is the "Planning with Files" skill. This skill revolutionizes how AI agents manage long tasks by persistently storing the task plan, findings, and progress in dedicated markdown files (`task_plan.md`, `findings.md`, `progress.md`) directly in the project folder. Crucially, it employs a "hook" mechanism that re-injects these files into the agent's [[concepts/context-length|context window]] every turn, ensuring the AI cannot ignore its established plan or past learnings. This approach significantly improves an agent's focus and reliability, dramatically boosting task success rates compared to relying solely on transient chat context.

Another set of skills, "Delegate Skills," addresses the challenge of orchestrating multiple coding agents. Traditionally, users would manually assign specific tasks to different AI coding tools (like [[entities/claude-code|Claude Code]] or [[entities/openai|OpenAI]] Codex). Delegate Skills acts as an orchestrator, discovering installed coding CLIs, proposing optimal "fleet lanes" for various tasks (e.g., feature development, testing, UI), and automatically delegating work to the most suitable agent. This system often operates in an "auto-approve" mode, streamlining the development process by allowing coding agents to execute commands without constant manual intervention. Complementing this, the `rtk` (Router Toolkit) proxy further enhances efficiency by filtering and compressing terminal command outputs, reducing up to 90% of the raw bash output. This minimizes context window bloat, ensuring the AI only processes truly relevant information, thereby improving its focus and reducing token consumption.

For specialized tasks like security and research, the video highlights "Mantis" and "Agent-Reach." Mantis, developed by [[entities/google|Google]], is a collection of security-focused skills that enable AI agents to perform targeted defensive security reviews, formulate threat models, and generate roadmaps. It can be scheduled as a cron job within Hermes, providing continuous, automated security monitoring and alerting users to vulnerabilities. Agent-Reach extends the AI's research capabilities by providing access to typically restricted internet platforms like Reddit, Twitter, and GitHub, allowing Hermes to gather real-world user opinions and experiences for more comprehensive analysis.

Finally, to manage the ever-growing number of installed skills, the "Skill-Retrieval" plugin is introduced. As Hermes accumulates over a hundred skills, their names and descriptions can themselves consume a significant portion of the context window. Skill-Retrieval intelligently filters this list, injecting only the most relevant skill descriptions based on the user's current message. This smart context management reduces token usage, cuts operational costs, and prevents the agent from being distracted by irrelevant capabilities, leading to more precise and efficient responses. In conclusion, these skills collectively transform Hermes into a more robust, intelligent, and autonomous AI assistant, capable of handling complex development, security, and research workflows with enhanced [[concepts/memory|memory]] and efficiency.

### Video Description & Links
#### Description
These Hermes Agent Skills make the Hermes [[concepts/ai-agent|AI agent]] so much better. We cover the Hermes agent setup for each one, how to install Hermes agent skills, and what problem each one fixes. Most of them work with any AI coding agent, not just Hermes AI.

Community with All Resources: https://ailabspro.io/?v=WJgxX0Eib6k

Every skill in this video:
1. Planning with Files: https://github.com/OthmanAdi/planning-with-files
2. Delegate Skills: https://github.com/amElnagdy/delegate-skills
3. RTK: https://github.com/rtk-ai/rtk
4. Mantis: https://github.com/google/mantis
5. Agent Reach: https://github.com/Panniantong/Agent-Reach
6. Skill Retrieval: https://github.com/moonlight-lupin/agent-skills/tree/main/plugins/skill-retrieval

People have been building skills for Hermes Agent since launch, and some became the most trending projects on GitHub. In this video we go through the best Hermes Agent Skills we actually use, and show how to add skills to Hermes Agent one by one. Hermes ships with more than 90 skills and writes new ones from workflows it sees in your chat, but those only come from what it learns from you. The most useful Hermes Agent Skills are built by people who already solved problems Hermes can't handle on its own.

1. Planning with Files. Long conversations make your agent forget details you mentioned earlier, and it happens faster on Opus models. This moves the plan into three files in your project: task_plan.md, findings.md and progress.md. What makes it different from keeping notes yourself is the hook it installs, which forces those files into the context window so the agent can't ignore the plan. Most agents don't support hooks. Hermes does.

2. Delegate Setup. Turns Hermes into an orchestrator for every coding tool installed on your machine. It works out which tool suits which task, hands the work over, and gives you one collective report. The install lets you pick from eighteen skills. These are the best Hermes Agent code skills, because the coding goes to Claude Code, Codex or [[entities/cursor|Cursor]] instead of staying in one place.

3. RTK. Every terminal command returns output your agent has to read, and 90% of it is noise that bloats the context. RTK filters it before it reaches the context window, using a database of the commands agents run most. It isn't a skill, it's a tool you run from the terminal, so we wrote a skill that routes the agent's commands through it. That skill is in AI Labs Pro.

4. Mantis. Google's set of security review skills, split by area, for mobile or web apps. It belongs in Hermes because of cron jobs. Hermes runs all the time, so you can schedule the full review against your hosted app and get alerted on Slack when it finds something. We run the same setup on our own project.

6. Skill Retriever. Only a skill's name and description go into the context window, but they're sent with every message. Past 100 skills that's a huge chunk of context gone before you've said anything. This matches your message against your skill list and sends only the closest ones. Their docs say 11K tokens before and 2.3K after, so 9K+ saved every turn. It's a plugin, and you enable Skill Retriever from the plugins area.

If you're looking for how to install Hermes agent skills, every one has an install command in its repo. Hermes agent, how to install skills: run the command, pick the pieces you want, and the skill shows up ready to run with a slash command. The Hermes agent download skills step is one command each, and every repo is linked above if you want to add skills to Hermes Agent yourself.

One note on how to add skills in Hermes Agent: more is not better. The best skills for Hermes Agent fix a real problem you keep hitting, which is why half this list protects the context window instead of adding features.

Most of these aren't Hermes only. If your AI automation stack runs on Claude Code, [[entities/chatgpt|ChatGPT]] or [[entities/claude|Claude AI]], the same ideas apply, because they work with any AI coding agent.

00:00 Intro
00:52 Planning with Files
03:10 Delegate
04:47 RTK
06:23 Plural
07:12 Mantis
08:44 Agent Reach
09:41 Skill Retriever

Hashtags:
#ai #claudecode #hermesagent #chatgpt #aiautomation #claudeai #hermes #HermesAgentSkills

#### Tags
`hermes agent skills`, `hermes agent skill`, `hermes agent skill bundles`, `agente ia hermes agent`, `hermes agent`, `agent skills`, `hermes skills`, `hermes ai agent`, `ai agent skills`, `hermes agent setup`, `hermes agent tools`, `hermes agent 2.0`, `hermes agente`, `hermes agent models`, `hermes agent ollama`, `hermes agent install`, `install hermes agent`, `nous hermes agent`, `hermes agent free`, `hermes agent cost`, `hermes agent 2026`, `hermes agent desktop`, `hermes agent profiles`, `set up hermes agent`

#### URLs
- https://ailabspro.io/?v=WJgxX0Eib6k
- https://github.com/OthmanAdi/planning-with-files
- https://github.com/amElnagdy/delegate-skills
- https://github.com/rtk-ai/rtk
- https://github.com/google/mantis
- https://github.com/Panniantong/Agent-Reach
- https://github.com/moonlight-lupin/agent-skills/tree/main/plugins/skill-retrieval

## Related Concepts
- [[concepts/performance-optimization|Context Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_management)
- [[concepts/performance-optimization|Multi-Agent Orchestration]]
- [[concepts/ai-coding-agent|AI Coding Agent]]
- [[concepts/agent-skills|Agent Skills]]
- Router Toolkit (rtk)
- Threat Modeling — [Wikipedia](https://en.wikipedia.org/wiki/Threat_model)

## Related Entities
- [[entities/hermes-ai-agent|Hermes AI Agent]]
- [[entities/ai-labs|AI LABS]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_%28AI%29)
- Mantis — [Wikipedia](https://en.wikipedia.org/wiki/Mantis)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- GitHub — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- Reddit — [Wikipedia](https://en.wikipedia.org/wiki/Reddit)
- Twitter — [Wikipedia](https://en.wikipedia.org/wiki/X_%28social_network%29)