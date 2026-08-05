---
wiki-ingested: true
title: "Use clawdcode Matthew Be"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: business-strategy
group: products-operations-business-economics
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

# Use clawdcode [[entities/matthew-be|Matthew Be]]

---
---
https://www.youtube.com/watch?v=MUDvwqJWWIw

Here is a [[concepts/summary|summary]] of the video on **Clawdbot**, the [[concepts/open-source|open-source]] [[concepts/personal-ai-assistant|personal AI assistant]].

# Clawdbot: The "Real" Siri We Were Promised

Clawdbot is an open-source, self-hosted personal AI assistant that runs locally on your computer but is accessible via standard chat applications. It is described as "what Siri should have been," offering full [[concepts/computer-access|computer access]], [[concepts/persistent-memory|persistent memory]], and agentic [[concepts/capabilities|capabilities]].

## 🔑 Key Features

* **Runs Locally:** You host it on your own machine (Mac, [[entities/windows|Windows]], or Linux). It is fully open-source.
* **Chat Anywhere:** Connects to apps you already use like **[[entities/telegram|Telegram]], WhatsApp, Slack, Discord, and iMessage**. You can chat with your computer remotely from your phone.
* **Full Computer Access:** Unlike standard chatbots, Clawdbot can read files, write code, execute terminal [[concepts/commands|commands]], and browse the web via Chrome extensions.
* **Persistent Memory:** It learns your preferences, schedule, and work habits over time.
* **Proactive Agents:** It can set up cron jobs to run tasks in the background (e.g., checking emails every 10 minutes) without you initiating the chat.
* **Customizable Personality:** Uses a `soul.md` file where you can define the bot's "vibe," boundaries, and core truths (e.g., "be concise," "have opinions").

## 🛠️ Integrations & Setup

* **Simple Install:** Installs via a simple curl command.
* **ClawdHub:** A skill store with 50+ native integrations including [[concepts/google-workspace|Google Workspace]] (Gmail, Calendar, Drive), [[entities/spotify|Spotify]], [[concepts/obsidian|Obsidian]], Home Assistant, and Twitter (X).
* **Model Agnostic:** Works with frontier models (Claude Opus/Sonnet, GPT-4, Gemini) or **local models** via [[entities/lm-studio|LM Studio]].

## 🚀 Real-World [[concepts/scenarios|Use Cases]] Demonstrated

The video showcased several powerful examples of Clawdbot's agentic capabilities:

1. **YouTube Research:** Connected to **Grok** (for real-time X/Twitter access) and **Asana** to research, outline, and populate project management tasks for the video itself.
2. **File Management & Repair:** The user had a failed bulk upload to [[concepts/google-drive|Google Drive]]. Clawdbot:
	* Scanned the local folder and the Drive folder.
	* Identified the 212 missing files.
	* Wrote code to upload the missing files one by one (handling Google API [[concepts/rate-limits|rate limits]] automatically).
3. **Proactive Email Assistant:** Created a cron job to check 3 different inboxes every 5 minutes, identify _only_ urgent emails based on user-defined criteria, draft replies, and send a summary to Telegram for approval.
4. **Social Media Management:** Monitored Twitter replies, drafted [[concepts/responses|responses]] in the user's voice, and waited for user approval to publish.

## 💻 Local Models & Cost Management

A major issue with [[concepts/agentic-ai|agentic AI]] is cost (the [[concepts/creator|creator]] spent **$130 in one day** using [[entities/claude-opus|Claude Opus]]). To solve this:

* **LM Studio [[concepts/integration|Integration]]:** Clawdbot can download and run local models (like **Qwen 3**).

<YARLE-EN-V10-TASK>ee0e5799-ec7d-46e2-a517-37b1726cec10</YARLE-EN-V10-TASK>

## ⚠️ Risks & Limitations

* **[[concepts/security|Security]]:** You are giving an AI access to your credentials, files, and terminal. It is a non-deterministic system, meaning it can make mistakes or delete things unintentionally.
* **Memory Issues:** Like all LLMs, "memory compaction" (compressing history to fit [[concepts/context-windows|context windows]]) can cause it to lose specific details over time.
* **Stability:** The project is only ~2 months old. It creates bugs, gets stuck in loops, or crashes, requiring manual restarts.
* **Cost:** Without careful management of which models are used, API costs can skyrocket due to the sheer volume of tokens used for background processing.

## 🏁 Conclusion

Clawdbot represents the future of AI assistants—moving away from chat windows and into full OS integration. While it is currently for "[[concepts/power-users|power users]]" due to security risks and setup requirements, it offers a glimpse into a future where AI handles tedious digital chores autonomously.
