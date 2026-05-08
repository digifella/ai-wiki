---
wiki-ingested: true
title: "Use Claude code for more than coding eg for research"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
# Use [[concepts/claude-code|Claude code]] for more than coding eg for research

---
---
<https://www.youtube.com/watch?v=RV9vBRtXagQ>
Here is a summary of the video titled **"How to Make Claude Code Cook"**, detailing how to repurpose [[entities/anthropic|Anthropic]]'s coding tool into a general-[[concepts/purpose|purpose]] [[concepts/autonomous-agent-system|autonomous agent system]].

# Hot Take: Claude Code isn't just for Coding

The core premise of the video is that **Claude Code is essentially an [[concepts/agentic-loop|agentic loop]]** wrapped in a coding-focused system message. By changing the objectives and [[concepts/instructions|instructions]] you provide, you can transform it from a [[concepts/coding-assistant|coding assistant]] into a [[concepts/general-purpose-automation-tool|general-purpose automation tool]] capable of handling research, data analysis, [[concepts/content-creation|content creation]], and file management.

## The "[[concepts/open-agent-system|Open Agent System]]" [[concepts/architecture|Architecture]]

The speaker demonstrates a custom [[concepts/file-based-architecture|file-based architecture]] called the **Open Agent System**. Instead of writing complex [[concepts/software|software]], this system relies on [[concepts/markdown|Markdown]] files to define "agents."

### How it Works

1. `**INSTRUCTIONS.md**`: The master file (or router). When Claude Code starts, it reads this file to understand what agents are available and what "triggers" ([[concepts/keywords|keywords]]) activate them.
2. **[[concepts/progressive-disclosure|Progressive Disclosure]]**: To save [[concepts/context-window|context window]] space, Claude doesn't load every agent [[concepts/slms|definition]] at once. It only reads specific agent files when a trigger word implies that specific agent is needed.
3. **Agent Files**: Each agent is a Markdown file defining:
	* **Purpose:** What the agent does.
	* **Triggers:** When to use it.
	* **Tools:** What shell [[concepts/commands|commands]] or scripts it can run.

### The Demo: Video Game History Project

The speaker runs a [[concepts/workflow|workflow]] to generate an interactive HTML history of video games without writing a single line of code manually:

1. **The Researcher Agent:** Scours the web for the history of video games based on a source prompt.
2. **The Image Curator Agent:**
	* Reads the research.
	* Searches for relevant images.
	* **Validates** the image URLs using a custom script it wrote to ensure they aren't broken.
3. **The HTML Generator Agent:** Compiles the text and images into a styled, interactive "Arcade Cabinet" HTML card viewer.
4. **The Instagram Agent (Created Live):** The speaker asks Claude to create a _new_ agent on the fly. Claude reads the system [[concepts/structure|structure]], creates the definition file, creates the slash command, and immediately uses the new agent to generate a social media post about the content.

* * *

## Practical Example: The "Jingle App"

To prove this works for arbitrary tasks, the speaker updates a personal [[concepts/web-application|web application]] that plays a daily jingle.

1. **The Scenario:** He invents a holiday ("National Nothing Day") and generates a song using Suno (an AI music generator).
2. **The Workflow:**
	* He drops the MP3 into an inbox folder.
	* He tells Claude Code to "Ingest Jingles."
	* **The Agent Actions:** Claude Code converts the audio (using ffmpeg), creates a visual theme for the app based on the holiday "vibe," generates a background image, updates the config files, and pushes the changes.
3. **Result:** The web app is fully updated with the new content automatically.

* * *

## Anthropic's "[[concepts/agent-skills|Agent Skills]]" vs. Custom System

Anthropic recently released a feature called **Agent Skills**, which allows similar functionality.

|     |     |     |
| --- | --- | --- |
| Feature | Anthropic Agent Skills | Custom "Open Agent" System |
| **[[concepts/integration|Integration]]** | Native, elegant, highly shareable. | Manual setup via Markdown files. |
| **Compatibility** | **Claude Code Only.** | **Universal.** Works with Claude Code, Codex, Cursor, [[concepts/gemini-cli|Gemini CLI]], etc. |
| **Context Usage** | Loads _all_ skill definitions into context immediately (can be token heavy). | Uses **Progressive Disclosure** (loads instructions only when needed). |

The speaker notes that while "Skills" are the future for Claude, the custom Markdown approach is currently more flexible across different [[concepts/ai-coding|AI coding]] tools.

* * *

## How to Try It (In < 3 Minutes)

You don't need to manually build the files to start. The speaker provided a GitHub repository that Claude Code can read to bootstrap itself.

1. **Open Claude Code** in your terminal.
2. **Paste the Repo URL:** Provide the link to the [Open Agent System repository](https://github.com/bladman/open-agent-system).
3. **Prompt:** Tell Claude: _"I want to create an agent that can manipulate images."_
4. **Auto-Configuration:**
	* Claude Code reads the repo's `OpenAgentDefinition.md`.
	* It understands the architecture.
	* It automatically creates the folders, instruction files, and the specific image manipulation agent you asked for.

**Conclusion:** You can use this method to build agents for meeting notes, [[concepts/data-extraction|data extraction]], file organization, or any computer task, essentially treating your CLI as an autonomous employee.   

<https://github.com/bladnman/open-agent-system>
