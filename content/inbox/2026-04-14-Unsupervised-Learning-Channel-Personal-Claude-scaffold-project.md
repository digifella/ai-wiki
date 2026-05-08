---
wiki-ingested: true
title: "Unsupervised Learning Channel - Personal Claude scaffold project"
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
# [[concepts/unsupervised-learning|Unsupervised Learning]] Channel - Personal Claude scaffold project

---
---
<https://www.youtube.com/watch?v=Le0DLrn7ta0>
Here is a Markdown summary of the presentation on **[[concepts/personal-ai-infrastructure|Personal AI Infrastructure]] (Kai)** by [[entities/daniel-miessler|Daniel Miessler]], hosted by [[entities/clint-gibler|Clint Gibler]].

# Personal AI Infrastructure: [[concepts/magnifying-human-potential|Magnifying Human Potential]]

**Speakers:** Daniel Miessler (Unsupervised Learning) & Clint Gibler ([[entities/tldr-sec|TL;DR Sec]]) **Date:** December 19, 2025 **Topic:** Building "Kai" (Personal AI Infrastructure) to augment human [[concepts/capabilities|capabilities]].

* * *

## 1\. [[concepts/philosophy|Philosophy]] & [[concepts/motivation|Motivation]]

**Why Build Kai?**

* **Goal:** To get really good at being human.
* **The [[concepts/post-corporate-world|Post-Corporate World]]:** Daniel believes we are heading toward a world where large-scale job markets diminish. The solution is to figure out who you are, what you value, and use AI to magnify those capabilities.
* **[[concepts/aimm-ai-maturity-model|AIMM (AI Maturity Model)]]:**
	* **Level 1 (Chatbots):** Asking questions, getting answers.
	* **Level 2 (Agentic):** The current phase (2025). Agents act on your behalf, magnify effectiveness via context and tooling.
	* **Level 3 (Workflows):** Decomposing work into automatable tasks.

## 2\. Core Design Principles

Daniel’s system, built on top of [[entities/anthropic|Anthropic]]'s "[[concepts/claude-code|Claude Code]]," diverges from standard AI use through specific engineering principles.

### A. Clear Thinking + [[concepts/prompting|Prompting]] is King

* Clear thinking $\\rightarrow$ Clear writing $\\rightarrow$ Clear prompting.
* If you cannot explain a task to yourself or another human, the AI will fail.
* Prompting is not "dead"; it is the fundamental layer of instruction.

### B. Scaffolding > Model

* The [[concepts/structure|structure]] around the model (the "scaffolding") is more important than the model itself.
* **Preference:** Daniel would choose an 18-month-old model with excellent scaffolding over a state-of-the-art model with poor scaffolding.
* Scaffolding includes workflows, memory systems, [[concepts/structured-output|structured output]], and tool [[concepts/integration|integration]].

### C. As Deterministic as Possible (Code > Prompts)

* **Rule:** If it can be done in code, do not use AI to guess the answer.
* **[[concepts/architecture|Architecture]]:** Code as factory, Intelligence as manager.
* **Efficiency:** Running deterministic code ([[concepts/cli-tools|CLI tools]], [[concepts/typescript|TypeScript]]) is faster, cheaper, and more reliable than token generation.

### D. The UNIX Philosophy & CLI

* **Modular Tooling:** Build small tools that do one thing well and pipe them together.
* **CLI as Interface:** The command line is unambiguous. [[concepts/ai-models|AI models]] function better when given clear CLI flags and options rather than vague natural language requests.
* **The Stack:** `Goal` $\\rightarrow$ `Code` $\\rightarrow$ `CLI` $\\rightarrow$ `Prompts` $\\rightarrow$ `Agents`.

### E. Spec / Test / Evals First

* Apply [[concepts/software-engineering|software engineering]] rigor to AI.
* Define success criteria before building the agent.
* Use "[[concepts/spec-driven-development|Spec-Driven Development]]."

## 3\. System Architecture (Kai / PAI)

### Directory Structure

The system is organized into a modular file structure:

* `**/Skills**`**:** High-level capabilities (e.g., `Art`, `Coding`, `Research`).
* `**/Workflows**`**:** Markdown files defining the steps to achieve a goal.
* `**/Tools**`**:** Deterministic code (TypeScript scripts) that execute specific tasks (e.g., `generate-image.ts`).

### Routing ("USE WHEN")

* The system uses a semantic routing layer.
* Each skill has a description ("USE WHEN user says create blog...").
* The system matches user intent to the correct skill, then executes the specific workflow.

### The Meta Self-Update System

* Kai can read its own documentation and source code to recommend upgrades.
* **Example:** An "Upgrade Skill" scrapes engineering blogs (e.g., Anthropic, OpenAI) and GitHub releases, compares new features against Kai's current codebase, and implements updates automatically.

### History & Observability

* Instead of complex RAG (Retrieval-Augmented Generation), Kai writes summaries of every interaction into a structured file system (`/history/learnings`, `/history/decisions`).
* The file system is treated as a fast, cheap, and effective long-term memory.

### Personalities & Voice

* Different agents (e.g., "The Architect," "The Intern," "The Researcher") have distinct [[concepts/system-prompts|system prompts]] and personalities.
* **Voice Integration:** The output is piped to ElevenLabs via a custom Voice Server to give agents specific vocal characteristics (e.g., a calm librarian vs. an energetic intern).

## 4\. Demo: The Art Skill

Daniel demonstrated the `Art` skill to visualize a "Human Story Arc."

1. **Input:** Natural language request ("Visualize the human story arc...").
2. **Routing:** Kai recognized the intent and selected the `Art` skill.
3. **Workflow:** It selected the `TechnicalDiagrams.md` workflow over generating a standard image.
4. **Execution:** It utilized the `generate.ts` tool (wrapping a specific model like [[entities/nano-banana-pro|Nano Banana Pro]] or D3.js) via the CLI to create the visual asset.
5. **Output:** A visual timeline was generated and displayed in the browser.

## 5\. Practicalities & FAQ

* **[[concepts/open-source|Open Source]]:** The base platform is available as **[PAI (Personal AI Infrastructure)](https://github.com/danielmiessler/PAI)**.
	* _Note:_ "Kai" is Daniel's private instance; "PAI" is the public framework.
* **[[concepts/tech-stack|Tech Stack]]:**
	* Base: Anthropic's Claude Code (CLI).
	* Language: TypeScript / Bun.
	* Tools: Fabric, various APIs ([[entities/google-gemini|Google Gemini]], OpenAI, ElevenLabs).
* **Costs:** Approximately **$200 - $300 USD / month**.
	* Daniel views this as a business expense with high ROI compared to the output generated.
* **For Non-Coders:** You do not need to be an engineer. The system (Kai) writes the underlying code for the tools; the human acts as the architect defining the scaffolding.

## 6\. Key Q&A Insights

* **Security:** To prevent prompt injection (e.g., when scraping web content), the system uses multiple layers of defense, including "out-of-character" checks and sandboxed execution environments.
* **Cloud vs. Local:** Daniel currently prefers cloud models (Claude/Gemini) because the **scaffolding** provided by tools like Claude Code is vastly superior to current local options, even if [[concepts/local-inference|local inference]] is free.
* **How to start:** Don't try to build everything at once. Perform a "Time Audit" of your week. Identify high-time, low-value tasks and build a specific skill to automate just that one thing.
