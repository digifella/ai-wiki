---
wiki-ingested: true
domain: business-strategy
group: products-operations-business-economics
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

https://www.youtube.com/watch?v=MUDvwqJWWIw

Here is a summary of the video on **[[entities/gary-explains|Clawdbot]]**, the [[concepts/open-source|open-source]] personal [[concepts/ai-assistant|AI assistant]].

# Clawdbot: The "Real" [[concepts/siri|Siri]] We Were Promised

Clawdbot is an open-source, self-hosted personal AI assistant that runs locally on your computer but is accessible via standard chat applications. It is described as "what Siri should have been," offering full [[concepts/computer-access|computer access]], persistent [[concepts/memory|memory]], and [[concepts/agentic-ai|agentic capabilities]].

## 🔑 Key Features

* **Runs Locally:** You host it on your own machine (Mac, [[entities/windows|Windows]], or Linux). It is fully open-source.
* **Chat Anywhere:** Connects to apps you already use like **Telegram, WhatsApp, Slack, Discord, and iMessage**. You can chat with your computer remotely from your phone.
* **Full Computer Access:** Unlike standard chatbots, Clawdbot can read [[concepts/files|files]], write [[concepts/code|code]], execute terminal [[concepts/commands|commands]], and browse the web via Chrome [[concepts/plugins|extensions]].
* **Persistent Memory:** It learns your preferences, schedule, and work [[concepts/habits|habits]] over time.
* **Proactive Agents:** It can set up cron jobs to run tasks in the background (e.g., checking emails every 10 minutes) without you initiating the chat.
* **Customizable Personality:** Uses a `soul.md` file where you can define the bot's "vibe," boundaries, and core truths (e.g., "be concise," "have opinions").

## 🛠️ Integrations & Setup

* **Simple Install:** Installs via a simple curl command.
* **ClawdHub:** A [[concepts/skill|skill]] store with 50+ native integrations including [[concepts/google-workspace|Google Workspace]] ([[entities/gmail|Gmail]], Calendar, [[concepts/motivation|Drive]]), [[entities/spotify|Spotify]], [[concepts/obsidian|Obsidian]], Home Assistant, and Twitter (X).
* **Model Agnostic:** Works with frontier models ([[entities/claude-4|Claude]] Opus/Sonnet, [[concepts/gpt-4|GPT-4]], [[concepts/gemini|Gemini]]) or **local models** via [[entities/lm-studio|LM Studio]].

## 🚀 Real-World [[concepts/use-cases|Use Cases]] Demonstrated

The video showcased several powerful examples of Clawdbot's agentic capabilities:

1. **[[entities/youtube|YouTube]] Research:** Connected to **[[concepts/grok|Grok]]** (for real-time X/Twitter access) and **[[entities/asana|Asana]]** to research, outline, and populate project management tasks for the video itself.
2. **File Management & Repair:** The user had a failed bulk upload to [[concepts/google-drive|Google Drive]]. Clawdbot:
	* Scanned the local folder and the Drive folder.
	* Identified the 212 missing files.
	* Wrote code to upload the missing files one by one (handling Google API [[concepts/rate-limits|rate limits]] automatically).
3. **Proactive [[entities/email|Email]] Assistant:** Created a cron job to check 3 different inboxes every 5 minutes, identify _only_ urgent emails based on user-defined criteria, draft replies, and send a summary to Telegram for approval.
4. **Social Media Management:** Monitored Twitter replies, drafted responses in the user's voice, and waited for user approval to publish.

## 💻 Local Models & Cost Management

A major issue with agentic AI is cost (the [[concepts/creator|creator]] spent **$130 in one day** using Claude [[entities/opus|Opus]]). To solve this:

* **LM Studio [[concepts/integration|Integration]]:** Clawdbot can download and run local models (like **[[entities/qwen|Qwen]] 3**).

<YARLE-EN-V10-TASK>ee0e5799-ec7d-46e2-a517-37b1726cec10</YARLE-EN-V10-TASK>

## ⚠️ Risks & Limitations

* **[[concepts/secure|Security]]:** You are giving an AI access to your credentials, files, and terminal. It is a non-deterministic system, meaning it can make mistakes or delete things unintentionally.
* **Memory Issues:** Like all LLMs, "memory compaction" (compressing history to fit [[concepts/context-windows|context windows]]) can cause it to lose specific details over time.
* **Stability:** The project is only ~2 months old. It creates bugs, gets stuck in [[concepts/loops|loops]], or crashes, requiring manual restarts.
* **Cost:** Without careful management of which models are used, API costs can skyrocket due to the sheer volume of [[concepts/tokens|tokens]] used for background processing.

## 🏁 Conclusion

Clawdbot represents the future of AI assistants—moving away from chat windows and into full OS integration. While it is currently for "[[concepts/power-users|power users]]" due to security risks and setup requirements, it offers a glimpse into a future where AI handles tedious digital chores autonomously.

## Related Concepts
- [[concepts/website-browsing|Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent)
- [[concepts/persistent-memory|Persistent Memory]] — [Wikipedia](https://en.wikipedia.org/wiki/Persistent_Memory)
- [[concepts/personal-ai-assistant|Personal AI Assistant]] — [Wikipedia](https://en.wikipedia.org/wiki/Personal_AI_Assistant)

## Related Entities
- [[entities/siri|Siri]] — [Wikipedia](https://en.wikipedia.org/wiki/Siri)
- [[entities/telegram|Telegram]] — [Wikipedia](https://en.wikipedia.org/wiki/Telegram)
- WhatsApp — [Wikipedia](https://en.wikipedia.org/wiki/WhatsApp)
- [[entities/slack|Slack]] — [Wikipedia](https://en.wikipedia.org/wiki/Slack)
- Discord — [Wikipedia](https://en.wikipedia.org/wiki/Discord)
- iMessage — [Wikipedia](https://en.wikipedia.org/wiki/iMessage)
- Clawdbot — [Wikipedia](https://en.wikipedia.org/wiki/Clawdbot)
- [[entities/gpt-4|GPT-4]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-4)
- [[entities/gemini|Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini)
- [[entities/claude-opus|Claude Opus]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Opus)
- Sonnet — [Wikipedia](https://en.wikipedia.org/wiki/Sonnet)