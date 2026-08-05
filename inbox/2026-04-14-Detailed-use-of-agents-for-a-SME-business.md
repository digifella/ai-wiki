---
wiki-ingested: true
title: "Detailed use of agents for a SME business"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Detailed use of [[concepts/agents|agents]] for a SME business

---
---
<https://www.youtube.com/watch?v=_PxkYZ_4z50>
[[entities/patrick-ellis|Patrick Ellis]]

This video features Patrick, a CTO and co-founder of a startup, sharing insights from his talk at [[entities/microsoft|Microsoft]] on achieving 10x productivity gains using [[concepts/ai-coding|AI coding]] tools. He emphasizes that while the tools are now capable, the key is knowing how to set them up and orchestrate the right frameworks.
**[[concepts/core-ai-workflows|Core AI Workflows]] (Outside Engineering)**
Patrick outlines several core AI workflows utilized by his team, extending beyond just engineering:

* **Business Strategy:** Leverages tools like [[concepts/granola|Granola]], [[concepts/business-plan|Business Plan]], [[concepts/visualization-generation|Deep Research]], and [[concepts/notebooklm|NotebookLM]].
* **Making Plans Actionable:** Uses [[entities/chatgpt|ChatGPT]] with frameworks such as OKRs, SWOT, and BRDs.
* **Market/Product Research:** Employs [[entities/deep-research|Deep Research]] and MCPs ([[concepts/model-context-protocols|Model Context Protocols]]).
* **Internal Communication:** Relies on [[entities/granola|Granola]], Bolt.new, and ChatGPT.
* **Sales:** Utilizes AI SDR.
* **Marketing:** Integrates ChatGPT with [[concepts/templates|templates]], Midjourney, Flux, and [[concepts/cursor|Cursor]].
* **Operations [[concepts/automation|Automation]]:** Uses n8n, [[entities/zapier|Zapier]], [[concepts/claude-code|Claude Code]], and [[entities/github|GitHub]] Actions.
* **General Productivity:** Benefits from [[entities/notion|Notion]], Superwhisper, and other tools.
* **[[concepts/skill|Skill]] Acquisition:** Uses Deep Research to quickly learn and apply new [[concepts/skills|skills]], such as [[entities/youtube|YouTube]] scripts.

He [[concepts/highlights|highlights]] that their non-engineer CEO and CPO have been able to iterate on designs and product features with the same constraints as engineers, thanks to tools like Bolt. This saves significant time in communication and allows them to build prototypes and internal tooling more competently.
Patrick stresses that a major bottleneck in productivity, even with advanced AI [[concepts/coding|coding]] tools, often comes down to communication. Their goal is to eliminate meetings, communications, and documents that are no longer necessary because [[concepts/ai-models|AI models]], when given the right context, can perform these tasks.
**Core Product/Engineering AI Workflows**
Patrick then shifts to engineering-specific workflows:

* **[[concepts/vibe-coding|Vibe Coding]] vs. SDE Agents:** Discusses the distinction and effectiveness.
* **Codebase Onboarding:** Uses [[entities/claude-code|Claude Code]] and GitHub for agent Q&A.
* **Prototyping:** Streamlines the process from idea to user [[concepts/testing|testing]], generating screenshots and [[concepts/markdown|markdown]] descriptions via Bolt and Claude Code, leading to an SDE Agent.
* **SDE CoPilots:** Mentions Claude Code, Cursor, [[entities/copilot|CoPilot]], and Windswept.
* **SDE Agents:** Utilizes tools like [[concepts/codex|Codex]], Jules, Claude Code SDK, [[concepts/foundry|Foundry]], Devin, and Agent Swarms.
* **Code Review:** Employs GitHub Actions and Opus 4.
* **MCPs:** Uses Playwright, GitHub, Firecrawl/Context7, Netlify, Zapier, Terraform, etc. He explains MCPs as a standard (led by [[entities/anthropic|Anthropic]], now adopted by [[entities/openai|OpenAI]], [[entities/google|Google]], and others) that provides AI [[concepts/models|models]] with context on how to use tools.
* **New DevOps:** Relies on CLAUDE.md, cursorrules, internal MCP, and prompt management.
* **PKM / [[concepts/context-management|Context Management]]:** Leverages Notion and Markdown for personal [[concepts/knowledge-management|knowledge management]].
* **[[concepts/design|Design]]:** Utilizes Deep Research, prompt, style guides, and Playwright.

**The "80/20" Rule for AI Adaptation**
Patrick provides three key recommendations for organizations looking to [[concepts/leverage-ai|leverage AI]]:

1. **Adapt AI within your workflows:** Embrace the [[concepts/learning|learning]] curve by trying different ChatGPT/etc models to understand their [[concepts/capabilities|capabilities]]. Experience using an [[entities/prompt-engineering|agentic coding]] tool (like OpenAI's Codex, Anthropic's Claude Code, Cursor Agent, OpenHands) to understand hands-off [[concepts/workflow|workflow]].
2. **Spend 30 minutes "vibe coding":** Create a personal app with Bolt.new to get a sense of what these models are capable of. He specifically recommends using Claude Code with Opus 4.
3. **Update your "edu stack":** Pick 3 AI-first engineering podcasts/YouTube channels to follow. Read and watch content from frontier labs (e.g., OpenAI/Anthropic's YouTube channels, Anthropic's docs, especially the engineering section).

**Rethinking Product & SDLC**
Patrick concludes by offering a high-level perspective on how AI impacts product development and the [[concepts/software|Software]] Development Life Cycle (SDLC):

1. **Empower each person to build more:** This includes increasing their capacity in areas like the [[concepts/tech-stack|tech stack]], design, SEO, product management, and project management.
2. **Identify the largest bottlenecks:** These are likely in communication. Think through GenAI-native solutions. Use Bolt.new to allow PMs/Designers to quickly prototype [[concepts/ideas|ideas]] and technical feasibility. Get these [[concepts/proof|Proof]] of Concepts (PoCs) in front of customers/partners/stakeholders early to gather product, design, and engineering insights. Record meetings and leverage [[concepts/reasoning-models|reasoning models]] to help write BRD/PRD's.
3. **Build the "orchestration layer":** This involves developing DevOps for [[concepts/ai-tools|AI tools]]. Build [[concepts/systems|systems]], data pipelines, and workflows that ensure your team can easily provide all the context, prompts, and tools (MCP's) AI models need to perform.

He emphasizes that the future of software development involves engineers becoming more like orchestrators, managing a "sea of agents" that can perform tasks autonomously once provided with the right context and tools. This reduces [[concepts/friction|friction]] and drastically increases productivity.

* * *

Making PPT:

Claude code + Mario or SlideEV
