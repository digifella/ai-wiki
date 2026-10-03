---
wiki-ingested: true
title: "Google's agents-cli: Streamlining AI Agent Development with CLI and Skills"
date: 2026-06-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
aliases:
  - "lab-notes/2026-06-13-Googles-agents-cli-Streamlining-AI-Agent-Development-wit"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Google's agents-cli: Streamlining AI Agent Development with CLI and Skills
**Clip title:** [[concepts/google-search|Google]]'s Agents CLI: The CLI + Skills Combination to Ship [[concepts/agentic-ai|AI Agents]] EASILY
**Author / channel:** Cole Medin
**URL:** https://www.youtube.com/watch?v=1wfY7GCVvh0

### Summary
The video introduces [[concepts/google-search|Google]]'s `agents-cli`, a powerful [[concepts/open-source|open-source]] [[concepts/command-line-interaction|command-line interface]] designed to streamline the entire lifecycle of [[concepts/agentic-ai|AI agents]], from initial concept to reliable production deployment on [[entities/google-cloud|Google Cloud]]. The [[entities/speaker|speaker]] highlights a significant shift in [[concepts/cloud-agents|AI agent development]], moving away from laborious, line-by-line [[concepts/coding|coding]] with traditional frameworks like [[entities/langchain|LangChain]] towards a more automated and efficient process. This advancement, facilitated by `agents-cli` and its integrated "[[concepts/skills|skills]]," allows [[concepts/ai-coding|AI coding]] assistants to handle complex development tasks, making it substantially easier and faster to build and deploy agents compared to just six months ago.

At its core, `agents-cli` functions by providing a set of capabilities ([[concepts/commands|commands]]) that cover various stages of [[concepts/agent-development|agent development]], such as scaffolding projects (`agents-cli scaffold`), evaluating performance (`agents-cli eval`), and deploying to the cloud (`agents-cli deploy`). Complementing these commands are "skills," which are essentially detailed [[concepts/instructions|instructions]] that teach an [[entities/ai-coding-assistant|AI coding assistant]] (like [[concepts/ai-assisted-coding|Claude Code]], used in the demo) *how* to effectively utilize these CLI commands. This unique combination enables the coding assistant to autonomously navigate [[concepts/complex-tasks|complex tasks]], ranging from basic setup and coding to advanced evaluation and deployment, entirely through natural language commands, thus eliminating the need for developers to delve into extensive documentation.

The video showcases a practical demonstration where the speaker, using only natural language with an AI coding assistant, builds and deploys a "data-analyst agent." The assistant successfully installs `agents-cli` and its skills, then proceeds to generate the agent's code, execute it within a [[concepts/secure|secure]] sandbox environment to answer questions from a CSV dataset, and automatically run evaluations based on predefined test cases. Finally, the agent is seamlessly deployed to Google Cloud, complete with production-grade features such as full observability (including traces for auditing and [[concepts/memory-management|memory management]]) and identity management for setting permissions, all without a single manual command from the [[concepts/developer|developer]].

A crucial takeaway from the video is the distinction between general coding agent SDKs (like Antigravity) and production-focused frameworks like Google's ADK used with `agents-cli`. While SDKs offer immense flexibility for personal projects or "second brains" where output quality outweighs [[concepts/speed|speed]] and cost, frameworks like ADK are optimized for scalable production environments. They prioritize minimalism, [[concepts/token-optimization|token efficiency]], and rapid response times—factors critical for retaining users on platforms. The `agents-cli` leverages this efficiency, empowering developers to quickly build, evaluate, and deploy high-performing AI agents that can serve millions of users, effectively guiding even complex multi-agent or RAG system development from conception to reliable operation.

### Video Description & Links
#### Description
Building an [[concepts/ai-agent|AI agent]] is easy these days. The wild part is that shipping one to production is finally just as easy too.

In this video I build an entire AI agent and deploy it in minutes using Google's new Agents CLI (open source!). It gets its own identity, a locked-down sandbox to run the code it writes, and a full audit trail! These are the kinds of things you need when shipping production grade AI agents.

Big thanks to Google for working with me on this one. I'm genuinely impressed with what they've built here - this is how easy building and deploying AI agents should be and it's incredible to see them open sourcing this tool.

~~~~~~~~~~~~~~~~~~~~~~~~~~

- Build and deploy AI agents with Google's Agents CLI (works with any AI coding assistant):
https://fandf.co/3PsygXP

~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~

0:00 Intro: Google's Agents CLI
1:13 How Agent Building Has Changed
2:46 How Agents CLI Skills Work
4:43 Building the Agent with Claude Code
7:34 Traditional Frameworks vs Agent SDKs
9:52 Testing the Agent Locally
11:09 Agent Evaluation (Don't Skip This)
12:19 Deploying to Production (Super Easy)
14:24 Outro

~~~~~~~~~~~~~~~~~~~~~~~~~~

#### Tags
`ai`, `artificial intelligence`, `ai agents`, `software engineering`, `software development`, `coding`, `automation`, `saas`, `development`, `ai tools`, `ai agent tutorial`, `ai agent`, `ai agent claude`, `ai automation`, `ai agents tutorial`, `google`, `agents cli`, `claude code skills`, `antigravity`, `antigravity sdk`, `gemini`, `gemini 3.5 flash`, `google gemini`, `open source`, `google open source`, `agents-cli`, `google agents-cli`, `production ai agents`, `ai agent deployment`, `claude code agents`, `google ai`, `gemini ai`

#### URLs
- https://fandf.co/3PsygXP

## Related Concepts
- [[concepts/agents-cli|agents-cli]]
- [[concepts/persistence|AI agent development]]
- [[concepts/cli|CLI]]
- [[concepts/skills|skills]] — [Wikipedia](https://en.wikipedia.org/wiki/Skill)
- [[concepts/unsupervised-learning|Google Cloud]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud_Platform)
- [[concepts/command-line-interface-cli|Command-Line Interface (CLI)]]
- Google Cloud Platform — [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud_Platform)
- Agent Dev Kit (ADK)
- [[concepts/terminal-based-ai-coding-agents|AI Coding Assistants]]
- [[concepts/natural-language-programming|Natural Language Programming]] — [Wikipedia](https://en.wikipedia.org/wiki/Natural_language_programming)
- Production Deployment — [Wikipedia](https://en.wikipedia.org/wiki/Software_deployment)
- [[concepts/identity-and-access-management|Identity Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Identity_and_access_management)
- [[concepts/threat-intelligence|RAG Systems]]
- [[concepts/multi-agent-systems|Multi-Agent Systems]] — [Wikipedia](https://en.wikipedia.org/wiki/Multi-agent_system)
- [[concepts/token-usage-optimization|Token Efficiency]]
- [[concepts/transcoding|Open Source Tools]]

## Related Entities
- [[entities/cole-medin|Cole Medin]]
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_%28AI%29)
- [[entities/langchain|LangChain]] — [Wikipedia](https://en.wikipedia.org/wiki/LangChain)
- Antigravity — [Wikipedia](https://en.wikipedia.org/wiki/Anti-gravity)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)