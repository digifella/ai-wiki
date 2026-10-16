---
wiki-ingested: true
title: "Rick mulready - Claude skills"
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
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Rick mulready - [[entities/claude-4|Claude]] [[concepts/skills|skills]]

---
---
<https://www.youtube.com/watch?v=HCwfRe5EHGQ>
Here is a comprehensive [[concepts/markdown|Markdown]] summary of the video regarding **Claude Skills** (also known as [[concepts/agent-skills|Agent Skills]]).

# Claude Skills: The Ultimate Guide & [[concepts/use-cases|Use Cases]]

**Presenter:** Rick Mulready (The AI Playbook)

## 1\. What Are Claude Skills?

Think of **Claude Skills** as a "personal [[concepts/recipe-book|recipe book]]" for your AI.

* **The Problem:** Without skills, you must provide full context and instructions every time you want Claude to do a specific task. Long conversations degrade output quality and consume unnecessary tokens.
* **The [[concepts/solution|Solution]]:** You write the "recipe" (instructions) once. When invoked, Claude pulls up that specific recipe and follows it perfectly without needing re-explanation.
* **[[concepts/progressive-disclosure|Progressive Disclosure]]:** Unlike pasting a massive prompt, Claude does not load the entire skill at once. It loads information in stages **only when needed**.
	* **Benefit:** Faster responses, better results, and saved tokens.

## 2\. Accessing & Enabling Skills

* **Location:** `Settings` > `Capabilities` in the Claude Web interface.
* **Options:** You can toggle on pre-built skills (like "Brand Guidelines") or click "Upload Skill" to add your own.
* **Requirements:**
	* Must be on a **Paid Claude Plan**.
	* Currently, custom skills are **individual to the user** (not shared organization-wide on Team/Enterprise plans yet).

## 3\. Claude Projects vs. Claude Skills

It is vital to understand when to use which tool:

|     |     |     |
| --- | --- | --- |
| Feature | **Claude Projects** | **Claude Skills** |
| **[[concepts/slms|Definition]]** | A persistent context container. | An executable capability or "mini-app." |
| **Best For** | Ongoing work with consistent context. | Repeatable, specific [[concepts/workflow|workflows]]. |
| **Logic** | "Claude needs to know **X** about me/my business." | "Claude needs to perform **Inputs $\\rightarrow$ Steps $\\rightarrow$ Outputs**." |
| **Example** | Storing Brand Voice, Ideal Customer Profile (ICP). | A [[entities/youtube|YouTube]] content generator or a file converter. |

## 4\. The Anatomy of a Skill

To build a skill, you need a specific file structure zipped together:

1. `**skill.md**`**:** A Markdown file containing the instructions.
	* **YAML Frontmatter:** Defines the `name` and `description` at the very top.
	* **Body:** Step-by-step instructions and guidelines.
2. **Resource Folders:** A folder containing necessary assets (e.g., `/logos`, `/fonts`, `/examples`).
3. **Tip:** Only add context to the skill that Claude _doesn't_ already have to keep it lean.

> **Pro Tip:** You can ask Claude to write the [[concepts/code|code]] for the skill for you by [[concepts/prompting|prompting]]: _"Create a skill called \[Name\] that does the following..."_

* * *

## 5\. Top 5 Business Use Cases for Skills

### 1\. Brand Guidelines Skill

* **Function:** Ensures every visual or document created adheres to your exact brand identity.
* **How it works:** You upload your HEX codes, fonts, tone of voice, and logo usage rules.
* **Output:** When asked to create a presentation or document, Claude automatically applies your specific branding without being reminded.

### 2\. Lead Scoring Calculator

* **Function:** Prioritizes a raw list of leads based on your specific business criteria.
* **How it works:**
	1. You define criteria (e.g., Company Size, Budget, Timeline).
	2. The skill analyzes a list of leads.
	3. It generates an **[[entities/microsoft-excel|Excel]] Spreadsheet**.
* **Output:** A downloadable file with individual scores, priority rankings (Hot/Warm/Cold), and conditional formatting (Green/Yellow/Red).

### 3\. Client Report Builder

* **Function:** Automates the tedious process of gathering metrics and formatting client reports.
* **How it works:** You point the skill toward a folder containing project data, metrics, and [[concepts/notes|notes]].
* **Output:** A professionally formatted **PDF or PowerPoint** report including executive summaries, key achievements, and next steps, generated in minutes.

### 4\. Strategic [[concepts/decision-making|Decision Making]] Skill

* **Function:** Acts as a high-level business consultant to help you solve complex problems.
* **How it works:** The skill contains specific mental frameworks (e.g., First Principles, 80/20 Analysis, Systems Thinking, Jobs-to-be-Done).
* **Output:** You input a decision you are wrestling with (e.g., "Should I raise prices?"), and the skill analyzes the problem through every framework and provides a strategic recommendation.

### 5\. Survey Data Analyzer

* **Function:** Turns raw survey data into actionable insights instantly.
* **How it works:** You upload a CSV file of survey responses (even hundreds of rows).
* **Output:** The skill processes the text and data to generate:
	* An Executive Summary (Word/PDF).
	* Data Visualizations/Charts (Excel).
	* Key Findings & Quotes.
	* A Slide Deck summarizing the results.

* * *

**Summary:** Skills allow you to package your expertise, processes, and frameworks into reusable tools, significantly increasing efficiency and [[concepts/logical-consistency|consistency]] in your business workflows.