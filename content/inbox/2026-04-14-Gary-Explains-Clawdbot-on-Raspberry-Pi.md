---
wiki-ingested: true
title: "Gary Explains Clawdbot on Raspberry Pi"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: maths-cryptography
group: number-theory-prime-numbers
---
# [[entities/gary-explains|Gary Explains]] Clawdbot on [[entities/raspberry-pi|Raspberry Pi]]

---
---
<https://www.youtube.com/watch?v=qePhufA1hSE>
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video [[concepts/text-transcript|transcript]] featuring **[[concepts/openclaw|OpenClaw]]** (formerly ClawdBot/MoltBot).

# OpenClaw: The [[concepts/local-ai-assistant|Local AI Assistant]]

**Video Summary by Gary Explains**

## 1\. Introduction & Concept

The video introduces **OpenClaw**, an [[concepts/ai-assistant|AI assistant]] described as a "blank [[concepts/canvas|canvas]]" with infinite potential. It is compared to [[entities/jarvis|Jarvis]]—a powerful virtual assistant that runs locally on your machine, operates 24/7, and can perform [[concepts/complex-tasks|complex tasks]] autonomously.

* **Naming History:** The [[concepts/software|software]] has undergone three name changes in three days due to trademark/similarity issues:
	* Original: _ClawdBot_ (Too similar to [[entities/anthropic|Anthropic]]'s [[entities/claude|Claude]]).
	* Interim: _MoltBot_ (Reference to lobsters shedding skin).
	* Current: **OpenClaw**.

## 2\. What is OpenClaw?

OpenClaw is a [[concepts/gateway|gateway]] framework that connects several components to create an [[entities/openclaw|autonomous agent]]:

* **Local System Access:** It can read/write local [[concepts/files|files]] and execute [[concepts/commands|commands]].
* **LLM [[concepts/integration|Integration]]:** Connects to [[concepts/models|models]] like [[entities/openai|OpenAI]], [[concepts/claude|Claude]], or local LLMs to "understand" requests.
* **The Internet:** Access to web search (via Brave Search API) and [[concepts/browser-control|browser control]].
* **[[concepts/skills|Skills]] & Tools:** It uses "function calling" to execute [[concepts/code|code]], manage calendars, send emails, etc.

## 3\. [[concepts/hardware|Hardware]] Recommendations

Gary recommends [[concepts/running|running]] OpenClaw on a dedicated, secondary machine to ensure it runs permanently without impacting your main workstation.

* **Gary's [[concepts/setup|Setup]]:** **Raspberry Pi 5** with an NVMe [[concepts/motivation|drive]] (fast [[entities/storage|storage]], headless, low power).
* **Alternative:** A [[entities/mac|Mac]] Mini (provides access to macOS-specific tools and integrations).

## 4\. ⚠️ Critical [[concepts/security|Security]] Warning

**This is a high-risk tool.**

* **Full Access:** The bot has read/write access to your local files and potentially your online accounts.
* **[[concepts/vulnerability|Vulnerability]]:** It is currently susceptible to "social engineering." For example, if it has [[entities/email|email]] access, a stranger could email the bot claiming to be the owner and ask for sensitive files, and the bot might comply because it lacks robust [[concepts/authentication|authentication]] for incoming external prompts.
* **Advice:** Install behind a firewall and ideally on a segregated network or secondary machine (like the Pi).

## 5\. Installation & Configuration

* **Install:** A simple one-line `curl` command (requires installing prerequisites like `brew` and `Node.js`).
* **LLM Setup:** Users must provide [[concepts/api-keys|API keys]]. Gary suggests using an **OpenAI Plus subscription** to use "Open [[entities/codex|Codex]]," which avoids per-token API charges for heavy usage.
* **Channels:** You can control the bot via [[entities/telegram|Telegram]], WhatsApp, Discord, etc. Gary demonstrates setting up a **Telegram Bot** to chat with his Raspberry Pi.
* **Personality:** You can define the user (You) and the Bot (Persona). Gary named his bot "Eric" (a Monty [[concepts/python|Python]] reference).

## 6\. [[concepts/capabilities|Capabilities]] & Real-World Examples

The video showcases four escalating examples of what OpenClaw can do without explicit step-by-step [[concepts/instructions|instructions]]:

1. **Local File Management:**
	* _Prompt:_ "Create 10 text files in my home directory."
	* _Result:_ The bot immediately created the files on the Pi.
2. **[[concepts/web-development|Web Development]] & [[concepts/deployment|Deployment]]:**
	* _Prompt:_ Create a 3D rotating cube website in JS and upload it to Cloudflare Pages (Gary provided only the API token).
	* _Result:_ The bot wrote the code, navigated the Cloudflare deployment process, handled errors (creating the project first), and returned a live URL.
3. **[[concepts/software-engineering|Software Engineering]]:**
	* _Prompt:_ Create a C string library, write unit tests, and upload it to a new GitLab repository.
	* _Result:_ The bot wrote the C code, the tests, the Makefiles, and successfully pushed the project to GitLab.
4. **Autonomous [[concepts/automation|Automation]] (The "Mind-Blowing" Example):**
	* _Prompt:_ Gary provided an API token for `agentmail.to` (a service he hadn't used) and asked the bot to create an inbox and write a Python script to monitor it.
	* _Result:_ The bot figured out the API documentation, created a custom email address, wrote a script to check that inbox every 2 minutes, and set it up to notify Gary via Telegram whenever a new email arrived.

## 7\. Conclusion

OpenClaw brings us closer to the promise of a true "Jarvis-like" AI. While the setup requires some technical knowledge and there are significant security implications to consider, the ability of the bot to chain tasks (write code -> fix errors -> deploy -> notify) makes it an incredibly powerful tool for automation.

Based on the video visuals and the transcript, here are the installation commands for OpenClaw.
**Note:** Even though the name changed to **OpenClaw**, the URL in the video still uses the previous name "Molt."

### 1\. The One-Line Installer (Primary Method)

Run this command in your terminal (macOS or Linux/Raspberry Pi):
```
curl -fSsL https://molt.bot/install.sh | bash


```

### 2\. Manual Pre-requisites (Gary's "Pro Tip")

In the video, Gary mentions that while the script claims to install everything, he ran into issues (specifically regarding **Homebrew** on the Raspberry Pi) and recommended installing some dependencies manually if the script fails or hangs.
If you are on a **Raspberry Pi** (or Debian/Ubuntu [[entities/linux|Linux]]), you should ensure you have `git` and `curl` installed before running the script above:
```
sudo apt update
sudo apt install git curl


```
_(Note: The script attempts to install Node.js for you, but if you have a very old version of Node, you might need to update it manually)._

### 3\. Running the Bot

Once installed, the command to start the bot and begin the onboarding process (where you enter your API keys and set up Telegram) is:
```
claw


```

### ⚠️ Security Reminder

As emphasized in the video, **do not run this on your primary computer** or a machine containing sensitive financial/personal data. This bot has full read/write access to your file system. It is highly recommended to install this on a **Raspberry Pi** or a dedicated **secondary machine** behind a firewall.

* * *