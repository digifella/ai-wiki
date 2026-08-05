---
wiki-ingested: true
title: "Grace Leung Claude skills"
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
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/grace-leung|Grace Leung]] [[entities/claude|Claude]] [[concepts/skills|skills]]

---
---
<https://www.youtube.com/watch?v=m-5DjcgFmfQ>
Channel Grace Leung
Here is a comprehensive [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video regarding [[concepts/claude|Claude]] Skills ([[concepts/agent-skills|Agent Skills]]).
<https://www.youtube.com/watch?v=m-5DjcgFmfQ>

# Claude Skills: The Game Changer for AI Workflows

## 1\. What are Claude Skills?

"Skills" (or [[entities/agent|Agent]] Skills) are essentially **reusable instruction manuals**.

* **[[concepts/slms|Definition]]:** Folders containing [[concepts/instructions|instructions]], scripts, and resources that teach Claude _how_ you want a task done, what tools to use, and what standards to follow.
* **The Problem it Solves:** Before Skills, you had to repeat complex instructions (brand voice, formatting rules) in every chat or lock them inside specific Projects.
* **The Benefit:** Skills execute automatically when needed, making instructions **portable** across any chat and **stackable** (you can use multiple skills at once).

## 2\. The Claude Ecosystem: How It All Fits Together

There is often confusion between Skills, MCP, and Projects. Here is the distinction:

|     |     |     |
| --- | --- | --- |
| Component | Role | Analogy |
| **Claude** | The **Brain** | The core intelligence making decisions. |
| **Skills** | The **Manual** | Reusable instructions on _how_ a specific task should be done. |
| **MCP** | The **Tools** | [[concepts/capabilities|Capabilities]] to interact with the outside world (file creation, database access, APIs). |
| **Projects** | The **Workspace** | A dedicated space combining Skills, Tools, and Knowledge for ongoing work. |

> **Key Insight:** Skills are not competing with MCP or Projects; they are building blocks designed to coexist.

* * *

## 3\. Three Types of Skills

You can access Skills via **Settings > Capabilities**. Note: _Code execution and file creation must be enabled._

### A. Official Skills

Built by [[entities/anthropic|Anthropic]] (e.g., `theme-factory`, `code-execution`).

* **Usage:** Enable them in settings.
* **Tip:** Do not turn them all on at once; only enable what you need to avoid confusing the model.

### B. Partner Skills

Created by Anthropic's partners (e.g., [[entities/notion|Notion]]).

* **Source:** Available on the [Official GitHub Repository](https://github.com/anthropics/skills).
* **Usage:** Download the `.zip` file from the repo and upload it to Claude.

### C. Custom Skills

Your own creations tailored to your specific workflows.

* **Format:** A `.zip` file containing instruction [[concepts/files|files]] (usually markdown/text).
* **Creation:** You can ask Claude to use the official `skill-creator` [[concepts/skill|skill]] to generate these `.zip` files for you.

* * *

## 4\. How to Create & Use Custom Skills (3 [[concepts/methods|Methods]])

### Method 1: Extend an Existing Skill

Build upon an official skill to add your specific branding or rules.

* **Scenario:** Creating a "Branded Deck" skill based on the official PowerPoint skill.
* **Process:**
	1. Attach your brand templates/guidelines.
	2. Instruct Claude to read the official PowerPoint skill + the `skill-creator` skill.
	3. Ask it to create a new skill that extends the official one with your brand assets.
	4. Claude generates a `.zip` file. Upload it in Settings.

### Method 2: Package an Existing [[concepts/workflow|Workflow]]

Take a workflow you currently use inside a "Project" and turn it into a portable Skill.

* **Scenario:** A Notion Project Reporting workflow.
* **Process:**
	1. Provide the context/instructions you currently use in your Project.
	2. Ask Claude to study the available MCP tools (e.g., Notion MCP).
	3. Ask it to package the instructions and specific tool usage into a new skill using the `skill-creator`.
* **Result:** You can now run this complex report in _any_ new chat without needing the specific Project environment.

### Method 3: Build from Scratch (Skill + MCP)

Create a new workflow that chains specific instructions with specific MCP tools.

* **Scenario:** SEO Blog [[concepts/writing|Writing]] (Keyword Research + Content Writing).
* **Process:**
	1. **Skill 1 (Research):** Ask Claude to study the Ahrefs MCP tool and create a skill that uses it to find high-volume, low-competition [[concepts/keywords|keywords]].
	2. **Skill 2 (Writing):** Create a skill that takes those keywords and writes a blog post following specific formatting guidelines (headers, [[concepts/tone|tone]], output format).
	3. **Execution:** When you ask to write a blog, Claude triggers the Research skill (using MCP), then passes that data to the Writing skill.

* * *

## 5\. When Should You Create a Skill?

Use this 3-point checklist. If you check more than two boxes, create a skill:

1. **Repetition:** Do you need to repeat the same instructions across different chats (3+ times)?
2. **[[concepts/training|Training]]:** If this were a real-world scenario, would you need to hand a human a training manual to do this correctly?
3. **Consistency:** Is strict quality or format consistency required every time?

## 6\. Important Tips & Limitations

* **Triggering:** Skills are supposed to trigger automatically based on context, but they don't always fire.
	* _Fix:_ Add a line to your **Account Level [[concepts/custom-instructions|Custom Instructions]]**: _"Whenever you are responding, always make sure you consider if any relevant skills you can use."_
* **Context usage:** Skills consume [[concepts/context-window|context window]] [[concepts/tokens|tokens]]. Be careful on the Pro plan not to overload a chat with too many heavy skills.
* **Maintenance:** Skills are static. If an underlying MCP tool changes its API/functions, the skill might break.
	* _Fix:_ Include a "Backup Plan" section in your skill instructions telling Claude what to do if a specific tool call fails.