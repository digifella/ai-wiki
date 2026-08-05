---
wiki-ingested: true
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

https://www.youtube.com/watch?v=3GrG-dOmrLU

Here is a comprehensive [[concepts/markdown|Markdown]] guide based on the video content, detailing how to set up, configure, and master **[[entities/gary-explains|Clawdbot]] ([[concepts/openclaw|OpenClaw]])**.

# The Ultimate Guide to Clawdbot (OpenClaw)

Clawdbot is a personal, highly capable [[entities/ai-assistant|AI assistant]] that runs on your own infrastructure. It connects to services like Gmail, Asana, Slack, and [[entities/telegram|Telegram]], allowing you to execute real-world tasks through a simple chat interface.

* * *

## 1\. Installation & Setup (via Hostinger)

The video recommends using a [[concepts/vps|Virtual Private Server]] (VPS) for [[concepts/secure|security]], uptime, and ease of use.

### **Steps to Deploy:**

1. **Get a VPS:** Go to [Hostinger](https://hostinger.com/matthewb) (Use [[concepts/code|code]] `MATTHEWB` for 10% off).
2. **Select Plan:** Choose a KVM VPS plan (KVM 2 is recommended).
3. **One-Click Deploy:** Look for the **OpenClaw** template.
4. **Configuration:** During setup, you [[entities/will|will]] enter your [[concepts/api-keys|API keys]]:
	* [[entities/anthropic|Anthropic]] ([[entities/claude-4|Claude]])
	* [[entities/openai|OpenAI]]
	* [[concepts/gemini|Gemini]]
	* [[concepts/xai|xAI]] ([[entities/grok|Grok]])
	* _Note: These keys are stored on your private server, not shared._
5. **Connect Interface:** Open the terminal in Hostinger and follow the onboarding to connect your preferred chat interface (e.g., Telegram).

* * *

## 2\. Core [[concepts/architecture|Architecture]] (The [[concepts/files|Files]] that Make the Bot)

Clawdbot defines its behavior through specific Markdown (`.md`) files located in your directory. You can edit these via natural language chat.

* `**SOUL.md**`: Defines the personality, core truths, and beliefs of the bot.
* `**IDENTITY.md**`: Defines interaction style, name, vibe, emojis, and avatar.
* `**SKILLS.md**`: The capabilities library. Defines how the bot browses the web, checks email, etc.
* `**TOOLS**`: The actual code (usually `.js`) referenced by [[concepts/skills|skills]] to execute tasks (e.g., `asana-fetch.js`).
* `**MEMORY/**`: A folder where the bot stores long-term memories about the user.
* `**HEARTBEAT.md**`: Defines tasks that run on a recurring basis (system heartbeat).

* * *

## 3\. Model Management & Routing

Clawdbot allows for sophisticated model routing to balance cost, speed, and intelligence.

### **[[concepts/hierarchy|Hierarchy]] Example:**

* **Primary Model:** [[entities/claude-35-sonnet|Claude 3.5 Sonnet]] (The workhorse).
* **[[concepts/complex-tasks|Complex Tasks]]:** Routes to Claude 3 [[entities/opus|Opus]] (e.g., heavy [[concepts/coding|coding]]).
* **Fast/Cheap Tasks:** Routes to Claude 3 Haiku or [[entities/gemini-3-flash|Gemini Flash]].
* **Fallback:** If a model hits a rate limit, it automatically falls back to the next one in the chain.

### **How to Switch Models:**

* **Natural Language:** Just ask, _"Switch to [[entities/claude-sonnet|Sonnet 4]].5."_
* **Command:** Type `/model` to view current logic or force a switch.
* **Auto-Routing:** The bot assesses task complexity and chooses the best model automatically.

* * *

## 4\. Skills & Tools

Skills are repeatable processes. If Clawdbot doesn't know how to do something, you can simply tell it to, and it will write the [[concepts/skill|skill]] itself.

* **Custom Skills:** You can ask it to interact with almost any API (Gmail, Calendar, Asana, Hubspot).
* **ClawHub:** Visit `clawhub.com` to browse community-made skills.
	* _Warning:_ Always verify code from community skills before running them.
* **[[entities/cursor|Cursor]] [[entities/agent|Agent]] [[concepts/integration|Integration]]:** You can install the Cursor Agent on your VPS and control it via Clawdbot to perform complex coding tasks remotely.

* * *

## 5\. [[concepts/automation|Automation]] & Scheduling (Cron Jobs)

You can schedule tasks using natural language. Clawdbot converts these requests into Cron jobs.

* **One-off reminders:** _"In 1 hour, remind me to drink water."_
* **Recurring tasks:** _"Every Sunday, tell me which recycling bin (paper or plastic) goes out based on this schedule photo."_

* * *

## 6\. Advanced [[concepts/workflow|Workflows]]: Telegram Topics

To prevent "infinite context" issues and keep conversations organized, use **Telegram Groups with Topics**.

1. Create a Telegram Group.
2. Add Clawdbot as an **Admin** (give it permission to see all messages).
3. Create separate **Topics** for different workflows (e.g., "Video Research," "Server Updates," "[[entities/youtube|YouTube]] Analytics").
4. **Benefit:** This isolates context. The bot only loads the [[concepts/memory|memory]] relevant to that specific topic, saving tokens and reducing confusion.

* * *

## 7\. Security [[concepts/best-practices|Best Practices]]

Because Clawdbot runs code and accesses your data, security is paramount.

### **The "Clean vs. Dirty Data" Concept**

* **Clean Data:** Internal files, trusted inputs.
* **Dirty Data:** Incoming emails, web content, tweets.
* **Risk:** Prompt Injection. A malicious email could contain hidden text telling the bot to export your API keys.
* **Mitigation:** Use smarter models (Opus) for reading [[concepts/external-data|external data]] as they are more resistant to injection.

### **Security Audits**

OpenClaw has a built-in security checker. Run this periodically in your terminal:
```
openclaw security audit


```
To automatically fix issues (like permissions):
```
openclaw security audit --fix


```

### **General Tips**

* **Plan Mode:** For complex tasks, ask the bot to _propose_ a plan before executing it.
* **Environment Variables:** Never store API keys in plain text files; ensure they are in `.env`.
* **Daily Review:** Set up a scheduled task where the bot reviews its own memory and agent files daily to propose cleanup and check for errors.

* * *

## 8\. Real-World [[concepts/use-cases|Use Cases]]

### **A. Video Idea Pipeline**

* **Trigger:** Drop a link (X post, website) into Telegram.
* **Process:** Clawdbot uses Brave API to research the link + Grok API to check social sentiment.
* **Output:** Creates a formatted task in Asana for the team.

### **B. YouTube Analyst**

* **Setup:** Give Clawdbot access to YouTube Data & Analytics APIs.
* **Action:** Ask _"How are my last 3 videos performing?"_
* **Output:** Fetches view counts/metrics and posts a summary to Telegram and Slack.

### **C. Meeting Prep**

* **Trigger:** Cron job runs every morning.
* **Process:** Checks [[entities/google-calendar|Google Calendar]] for external meetings -> Searches Gmail for context on those people.
* **Output:** Sends a briefing document to Telegram before the day starts.

* * *

### **Multimedia Generation**

Clawdbot can handle multimedia via tools like **[[entities/nano-banana|Nano Banana]]** (images) or **ElevenLabs** (voice).

* _Command:_ "Create an image of a lobster."
* _Result:_ Generates and sends the image directly in the chat.

## Related Concepts
- [[concepts/ai-assistant|AI assistant]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_assistant)
- [[concepts/user-interface|chat interface]] — [Wikipedia](https://en.wikipedia.org/wiki/chat_interface)
- [[concepts/real-world-tasks|real-world tasks]] — [Wikipedia](https://en.wikipedia.org/wiki/real-world_tasks)
- [[concepts/weatherization|infrastructure]] — [Wikipedia](https://en.wikipedia.org/wiki/infrastructure)
- [[concepts/virtual-private-server-vps|virtual private server (VPS)]] — [Wikipedia](https://en.wikipedia.org/wiki/virtual_private_server_%28VPS%29)
- [[concepts/security|security]] — [Wikipedia](https://en.wikipedia.org/wiki/security)
- [[concepts/uptime|uptime]] — [Wikipedia](https://en.wikipedia.org/wiki/uptime)
- [[concepts/kvm-vps|KVM VPS]] — [Wikipedia](https://en.wikipedia.org/wiki/KVM_VPS)
- [[concepts/virtual-operating-systems|virtualization]] — [Wikipedia](https://en.wikipedia.org/wiki/virtualization)

## Related Entities
- [[entities/gmail|Gmail]] — [Wikipedia](https://en.wikipedia.org/wiki/Gmail)
- [[entities/asana|Asana]] — [Wikipedia](https://en.wikipedia.org/wiki/Asana)
- [[entities/slack|Slack]] — [Wikipedia](https://en.wikipedia.org/wiki/Slack)
- [[entities/matthew-b|Matthew B]] — [Wikipedia](https://en.wikipedia.org/wiki/Matthew_B)