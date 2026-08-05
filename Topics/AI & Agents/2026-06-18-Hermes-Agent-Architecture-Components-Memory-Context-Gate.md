---
wiki-ingested: true
title: "Hermes Agent Architecture: Components, Memory, Context, Gateways, Operational Loop"
date: 2026-06-18
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-18 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Hermes Agent Architecture: Components, Memory, Context, Gateways, Operational Loop
**Clip title:** Hermes Architecture EXPLAINED: [[concepts/memory|Memory]], Context & Gateways
**[[entities/tasia-custode|Author]] / channel:** [[concepts/open-source-machine-learning|Hugging Face]]
**URL:** https://www.youtube.com/watch?v=n32qq7Kwzh0

### Summary
The video provides a high-level overview of the [[concepts/agentic-ai|Hermes Agent]]'s architecture, explaining its core components and how they interact to create a functional and [[concepts/continuously-learning-ai|continuously learning AI]]. The main objective is to help viewers understand how to use and potentially build similar agents. The discussion covers the agent's main architecture, its operational [[concepts/loop|loop]], how it manages [[concepts/memory|memory]] and context, its integration with external services via a [[concepts/gateway|gateway]], and the functionality of cron jobs.

At its core, the Hermes Agent interacts with users through a [[concepts/cli-tools|Command Line Interface]] (CLI), a Gateway for [[concepts/communication|messaging]] services (like Telegram or Slack), or a direct API. The [[concepts/ai-agent|AI Agent]] itself integrates with various components, including pre-installed tools and [[concepts/skills|skills]], and a two-tiered memory system. Internal memory consists of [[concepts/markdown|markdown]] files like `SOUL.md` (defining the agent's personality), `User.md` (storing information about the user, which Hermes automatically [[concepts/software-updates|updates]]), and `Memory.md` (for arbitrary [[concepts/factual-knowledge|facts]]). External memory, though not configured by default, allows [[concepts/connection|connection]] to providers like Mem0 or Supermemory for enhanced, specialized memory management.

The agent's operational heart is its "Agent Loop," a sequence of steps triggered by every user message. Upon receiving a message, Hermes first "builds its context." This context includes the [[concepts/system-card|system prompt]], the agent's personality and user information from `SOUL.md` and `User.md`, relevant information from arbitrary `Memory.md` facts or past sessions (if external memory is enabled), skill/tool descriptions, and the current message history. This compiled context is sent to a [[concepts/large-language-model-llm|Large Language Model (LLM)]], which may then decide to call various tools (e.g., web search, file operations) iteratively before formulating a final response. After delivering the response, a "memory update" [[concepts/phase|phase]] ensures the agent learns from the interaction, storing valuable insights into its internal memory files to improve future responses. To manage the LLM's [[concepts/context-window|context window]], Hermes implements "context compression," summarizing older messages when the [[concepts/context-windows|context length]] exceeds a configurable threshold (default 50%, adjustable to 70-80%). This compression is checked before each turn or upon error from the LLM.

The Gateway component is crucial for Hermes's [[concepts/accessibility|accessibility]] across diverse platforms. It operates an `asyncio` loop, continuously polling or listening to various messaging services (e.g., Telegram, [[entities/email|Email]], Slack, WhatsApp). For each platform, the Gateway must be independently configured. Its primary responsibility is to construct the conversation context for each incoming message by [[concepts/retrieving|retrieving]] message history from a local [[entities/sqlite-databases|SQLite]] database, appending it with the user's current message, and then forwarding the complete context to the AI Agent. The Gateway also incorporates a [[concepts/session|session]] manager to intelligently handle message [[concepts/flow|flow]], deciding whether to interrupt, steer, or queue up messages based on user [[concepts/commands|commands]] or agent status. Complementing this, Cron jobs enable scheduling automated tasks (like sending daily news updates) via a separate internal loop that checks a `jobs.json` file every minute and delivers notifications directly to the user's designated home [[concepts/chat-application|messaging platform]].

In conclusion, the Hermes Agent is designed as a modular and extensible [[concepts/ai-system|AI system]] capable of nuanced interaction and continuous learning. Its architecture emphasizes distinct components for communication (Gateway, CLI, API), internal [[concepts/reasoning|reasoning]] (Agent Loop, Context), and long-term knowledge [[concepts/storing|retention]] (Memory, SQLite, External Memory), alongside automation capabilities (Cron Jobs). This structure allows for significant [[concepts/customization|customization]] of personality, behavior, and integrations, making it a versatile platform for building intelligent agents that can learn and adapt over time.

### Video Description & Links
#### Description
Hermes is an always-on AI agent with a simple but useful architecture: an agent loop, memory, context construction, gateway integrations, and scheduled cron jobs. In this video, I walk through how Hermes builds context, talks to external services like Telegram and Slack, compresses long conversations, and learns from previous interactions.

---
🤓 *Topics Covered*
- Hermes agent architecture
- Context, memory, and compression
- Gateways, SQLite, and cron jobs

---
⏱️ *Timestamps*
00:00 - Intro
00:57 - Bird's-eye view of the architecture
03:49 - Agent loop
07:31 - Context
13:28 - Context compression
18:28 - Context compression prompt
19:59 - Gateway
28:00 - Memory
34:37 - Cron jobs

---
🔗 Links
- Written version: https://alejandro-ao.com/tutorials/hermes-agent-architecture/

---
👋 Connect with me
- My website: https://alejandro-ao.com/
- X (Twitter): https://x.com/_alejandroao
- LinkedIn: https://www.linkedin.com/in/alejandro-ao/

#### Tags
`AI agents`, `Hermes`, `Hugging Face`, `LLM agents`, `SQLite`, `agent architecture`, `agent memory`, `context engineering`, `cron jobs`, `developer tools`

#### URLs
- https://alejandro-ao.com/tutorials/hermes-agent-architecture/
- https://alejandro-ao.com/
- https://x.com/_alejandroao
- https://www.linkedin.com/in/alejandro-ao/

## Related Concepts
- [[concepts/traffic-router|Agent Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Architecture)
- [[concepts/memory-management|Memory Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory_Management)
- [[concepts/smart-coding-agent|Context Awareness]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Awareness)
- [[concepts/operational-loop|Operational Loop]] — [Wikipedia](https://en.wikipedia.org/wiki/Operational_Loop)
- [[concepts/continuously-learning-ai|Continuously Learning AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Continuously_Learning_AI)
- Hermes Agent Architecture — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent_Architecture)
- Internal Memory — [Wikipedia](https://en.wikipedia.org/wiki/Internal_Memory)
- External Memory — [Wikipedia](https://en.wikipedia.org/wiki/External_Memory)
- [[concepts/context-compaction|Context Compression]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Compression)
- Gateway Integration — [Wikipedia](https://en.wikipedia.org/wiki/Gateway_Integration)
- [[concepts/command-line-interface|Command Line Interface]] — [Wikipedia](https://en.wikipedia.org/wiki/Command_Line_Interface)
- [[concepts/large-language-model|Large Language Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Model)
- [[concepts/tool-use-capabilities|Tool Use]] — [Wikipedia](https://en.wikipedia.org/wiki/Tool_Use)
- [[concepts/session-management|Session Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Session_Management)
- [[concepts/time-based-automation|Cron Jobs]] — [Wikipedia](https://en.wikipedia.org/wiki/Cron_Jobs)
- SQLite Database — [Wikipedia](https://en.wikipedia.org/wiki/SQLite_Database)
- Asyncio Loop — [Wikipedia](https://en.wikipedia.org/wiki/Asyncio_Loop)
- [[concepts/rapid-experimentation|Continuous Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Continuous_Learning)

## Related Entities
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/telegram|Telegram]] — [Wikipedia](https://en.wikipedia.org/wiki/Telegram)
- [[entities/slack|Slack]] — [Wikipedia](https://en.wikipedia.org/wiki/Slack)
- WhatsApp — [Wikipedia](https://en.wikipedia.org/wiki/WhatsApp)
- Mem0 — [Wikipedia](https://en.wikipedia.org/wiki/Mem0)
- Supermemory — [Wikipedia](https://en.wikipedia.org/wiki/Supermemory)
- [[entities/sqlite|SQLite]] — [Wikipedia](https://en.wikipedia.org/wiki/SQLite)
- SOUL.md — [Wikipedia](https://en.wikipedia.org/wiki/SOUL.md)
- User.md — [Wikipedia](https://en.wikipedia.org/wiki/User.md)
- Memory.md — [Wikipedia](https://en.wikipedia.org/wiki/Memory.md)