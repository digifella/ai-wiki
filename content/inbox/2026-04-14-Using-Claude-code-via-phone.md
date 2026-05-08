---
wiki-ingested: true
title: "Using Claude code via phone"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
# Using [[concepts/claude-code|Claude code]] via phone

---
---
<https://www.youtube.com/watch?v=fb19HiCb8xk>
This video provides a comprehensive update on the latest features and [[concepts/community-built-tools|community-built tools]] for [[entities/anthropic|Anthropic]]'s Claude Code, demonstrating their functionality and practical applications.
Here's a detailed breakdown:
**1\. Introduction & Context (0:00-0:39)**

* The presenter [[concepts/highlights|highlights]] the rapid pace of updates from Anthropic and the growing community around Claude Code.
* He notes that while new features are released frequently, their practical usage isn't always clear from [[concepts/version-updates|release notes]] alone.
* The video aims to cover major new features and cool community tools, showing step-by-step how to best utilize them.

**2\. Community Tools Showcase (0:39-1:12)**

* **[[concepts/claude-code-templates|Claude Code Templates]] by Daniel San (@dani\_avila7) (0:39)**
	A full-blown toolkit for Claude Code. **Mobile Interface (**`**--chats**` **/** `**--tunnel**`**) (0:45):** Allows viewing Claude Code chat logs and task statuses from a mobile device (via Cloudflare Tunnel). This enables remote monitoring of long-[[concepts/running|running]] Claude Code sessions. The demo shows a user checking task results and [[concepts/conversation-history|conversation history]] on their phone. **Analytics Dashboard (**`**--analytics**`**) (1:04):** A real-time dashboard to monitor Claude Code usage (total conversations, sessions, tokens, agent usage, token [[concepts/distribution|distribution]], [[concepts/workflow|workflow]] efficiency, productivity trends, tool usage patterns). Provides high-level insights into Claude Code activity.
	
* **Claude Code Changelog Bot (by the presenter using N8N) (1:12)**
	An automated [[entities/telegram|Telegram]] bot that watches the `claude-code` NPM package for updates. It fetches the changelog, uses AI to summarize the changes, and sends them directly to Telegram messages. This tool helps users stay informed about new features and fixes efficiently.
	

**3\. Paid & Free Resources (1:12-2:13)**

* **AI-Oriented Insiders Club (Free) (1:12):** A free club offering early access to video lessons, exclusive downloads (lesson summaries, code snippets), and deep dives into agent architectures. The N8N workflow for the Claude Code Changelog Bot is available for free within this club.
* **Claude Code Builder Pack (Paid) (1:50):** A comprehensive workflow toolkit to enhance Claude Code usage. Includes source code, write-ups, and configurations from the video series, plus bonus materials. Features: Professional video compositions, building with AI agents, real-time [[concepts/feedback|feedback]] with hooks, workflow hacks, and a Claude Code Router (for multi-provider [[concepts/inference|inference]]).

**4\. Official & Community Features Deep Dive (2:13-2:12:08)**

* **Community Tool:** `**ccusage**` **(2:13)**
	A [[concepts/command-line-tool|command-line tool]] to analyze Claude Code token usage and costs from local JSONL files. **Basic Usage (2:28):** `ccusage daily`: Shows daily usage, tokens, and cost for different models (Opus, Sonnet). `ccusage monthly`: Provides a monthly breakdown. `ccusage session`: Shows usage per conversation [[concepts/session|session]]. **Live Token Usage Monitor (**`**ccusage blocks live**`**) (3:10):** Provides a real-time, second-by-second update of token usage. Shows session start/end, elapsed time, remaining time in the current 5-hour block (moving to weekly soon), current token usage, burn rate, token limit, cost, and projected usage/cost. Useful for managing API costs and avoiding [[concepts/rate-limits|rate limits]]. **Custom Status Line (**`**cc-statusline**`**) (6:56):** The presenter developed an [[concepts/open-source|open-source]] tool (`cc-statusline`) to create a highly informative custom status line for the terminal. Installation: `npx @chongdoshu/cc-statusline init`. Allows users to select what information to display (working directory, Git branch, model info, usage, costs, session time remaining, token statistics, burn rate). Supports colors and emojis. The demo shows the status line updating dynamically during Claude Code operations.
	
* **Official Feature: Customizable Status Line (**`**/statusline**`**) (3:54)**
	Released in Claude Code v1.0.71. Allows users to add their terminal prompt's information to the Claude Code interface. Running `/statusline` in Claude Code will set up a default status line and add a configuration to `~/.claude/settings.json`. The presenter recommends moving the command logic to a separate shell script (e.g., `.claude/statusline.sh`) for better organization.
	
* **Official Feature: Background [[concepts/commands|Commands]] (Ctrl-b) (1:57)**
	Released in Claude Code v1.0.71. Allows users to run any Bash command in the background while Claude Code continues to operate. Useful for running development servers (`npm run dev`), tailing logs, or other long-running processes. Demonstrates running a web server in the background and then having Claude Code analyze and fix errors output by the background process. Interaction: Press `down arrow` to see [[concepts/background-processes|background processes]], `enter` to view shell output, `k` to kill a process.
	
* **Official Feature: MCP Multiple Config Files (13:39)**
	Released in Claude Code v1.0.73. Allows specifying multiple [[concepts/model-context-protocol|Model Context Protocol]] (MCP) configuration files using `--mcp-config file1.json file2.json`. This enables modular organization of [[concepts/mcp-servers|MCP servers]] and only loading specific ones when needed, rather than a single large config file. Demonstrates loading single or multiple [[concepts/mcp-server|MCP server]] configurations.
	
* **Official Feature: Output Styles (**`**/output-style**`**) (15:35)**
	Released in Claude Code v1.0.81. Allows users to customize how Claude Code communicates its [[concepts/responses|responses]] (its "personality" or verbosity). **Setup (**`**@agent-output-style-setup**`**) (15:45):** An undocumented (at the time of recording) agent that guides you through creating a custom output style. **New Official Command (**`**/output-style**`**) (18:17):** Offers a selection of predefined and custom output styles: Default, Explanatory ([[concepts/multi-step-reasoning|step-by-step reasoning]]), [[concepts/learning|Learning]] (pauses for hands-on tasks), Pirate Dev (nautical flair), Workflow Expert (concise, action-focused). Demonstrates the "Learning" style, where Claude pauses and asks the user to perform tasks as part of the learning process. Demonstrates creating a new "Terse" style (`/output-style new`) for minimal, direct responses. This feature allows tailoring Claude Code's communication to suit different workflow stages (e.g., high-level planning vs. detailed implementation).
	

**5\. Conclusion (21:18-22:18)**

* The presenter reiterates the rapid evolution of the Claude Code ecosystem.
* He encourages viewers to engage with his content by liking, subscribing, and turning on notifications for future updates.
* He also promotes another video demonstrating Claude Code's [[concepts/capabilities|capabilities]] in [[concepts/video-creation|video creation]] and editing.
