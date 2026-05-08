---
wiki-ingested: true
title: "Using Claude Code better - AI Jason"
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
# Using [[concepts/claude-code|Claude Code]] better - [[entities/ai-jason|AI Jason]]

---
---
<https://www.youtube.com/watch?v=UZb0if-7wGE>

This video provides a comprehensive walkthrough of using Claude Code, an [[concepts/smart-coding-agent|AI coding assistant]], highlighting its features, [[concepts/customization|customization]] options, and advanced [[concepts/workflow|workflows]]. The speaker shares his experience switching from Cursor to Claude Code and explains how he leverages various functionalities to enhance productivity.
Here's a detailed [[concepts/summary|summary]] of the video's content:
**1\. Introduction to Claude Code (0:00)**

* The speaker switched from Cursor to Claude Code due to its effectiveness.
* He emphasizes learning "a ton of things that made his Claude Code super effective."
* The video will cover [[concepts/spec-driven-development|spec-driven development]], hooks, [[concepts/custom-commands|custom commands]], and productivity tips.
* It also promotes a free e-book from HubSpot by Sundas Khalid on learning to code with [[entities/chatgpt|ChatGPT]], offering personalized roadmaps and fundamental coding concepts.

**2\. Getting Started with Claude Code (1:34)**

* **Installation:** Install the Claude Code VSCode extension for deep [[concepts/integration|integration]] with IDEs like Cursor, VSCode, or WingServe.
* **Connecting IDE:** Click "Run Claude Code" button or use `/ide` command in the terminal to connect. It automatically detects selected files/lines.
* **Initialization (**`**/init**`**):** Run `/init` to analyze the codebase and create a `CLAUDE.md` file. This file documents the project's [[concepts/tech-stack|tech stack]] (Next.js, React, Supabase, Tailwind CSS), development commands (pnpm dev, build, lint, install), [[concepts/architecture|architecture]] patterns (authentication flow, routing structure, component architecture), and environment variables. `CLAUDE.md` serves as a comprehensive guide for Claude Code, similar to Cursor's rules, providing essential context for future interactions.

**3\. Spec-Driven Development Workflow (3:40)**

* **Plan & Review Mode:** The speaker adds a "Plan & Review" section to `CLAUDE.md` which instructs Claude Code to: Always plan before starting work. Write the detailed implementation plan to `.claude/tasks/TASK_NAME.md`. Update the plan as work progresses and append detailed descriptions of changes made.
* **Implementing a Feature (Example: Online IDE Frontend):** The prompt: "We are building a beautiful online IDE frontend, help me break down into key components and put them together in the end." **Plan Mode (**`**# plan mode on**`**):** Activated by `Shift + Tab`. In this mode, the agent's tools are limited (e.g., [[concepts/no-code|no code]] editing), focusing on research and planning. It uses Web Search to understand technologies (e.g., "online IDE frontend components architecture React Next.js 2024"). Claude generates a detailed `Online IDE Frontend Implementation Plan` including: Overview Essential Components & Architecture (Layout System, File Explorer, Code Editor, Terminal, Tab System) Key [[concepts/design|Design]] Decisions Performance & [[concepts/secure|Security]] Considerations Implementation Steps (broken down into phases with deliverables and tasks) Directory Structure **Execution:** The speaker instructs Claude to proceed with "Phase 1: Core Layout & Infrastructure". Claude then creates an "Update Todos" list and begins installing dependencies and setting up the initial layout. **Documentation:** After completing a task (e.g., dependencies installed), Claude automatically updates the `CLAUDE.md` file with a summary of "What was accomplished," marking the task as `COMPLETED`. **Live Demo:** A partially implemented online IDE frontend with file explorer, resizable panels, and terminal is shown, confirming Claude's progress.

**4\. Understanding Claude Code [[concepts/agents|Agents]] and Tools (5:38)**

* **Default Tools:** Claude Code has 17 default tools, including: Bash ([[concepts/terminal-command-execution|shell commands]]), Context (workspace context), Glob (file pattern matching), Grep (content search), Read (file contents), LS (list files/directories), Edit/MultiEdit/Write (file operations), NotebookRead/Edit (Jupyter notebooks), WebFetch/WebSearch (web operations).
* **Task Tool ([[concepts/sub-agents|Sub-agents]]):** Description: "Launch a new agent for keyword/file searches." Mechanism: When the main Claude Code agent calls the `Task` tool, it creates a _new sub-agent_. Sub-agent's Tools: The sub-agent has a _subset_ of tools, excluding planning-related tools. Communication: The sub-agent receives a well-defined task from the parent, performs its operations, and returns only a summarized "findings" back to the parent agent. Benefit: This saves token consumption for the main agent, allowing for more complex operations and parallel task execution.

**5\. Customizing Claude Code with Hooks & Commands (8:57)**

* **Hooks:** Allow programmatic actions to be defined when Claude Code takes certain actions. Configured in `settings.local.json`. `**Stop**` **Hook Example:** Play a system sound (`Glass.aiff`) after Claude Code finishes a task (`Stop` event), notifying the user. **Hook Events:** `PreToolUse` (runs before a tool), `PostToolUse` (runs after a tool), `Notification` (sends notifications), `UserPromptSubmit` (when user submits a prompt), `Stop` (main agent stops), `SubagentStop` (sub-agent stops), `PreCompact` (before context compression). `**PostToolUse**` **with Type Checking Example (replicating Cursor):** Define a `PostToolUse` hook with a `matcher` for `Edit`, `MultiEdit`, `Write` tools. Run a custom Python script (`type_check.py`). The Python script: Gets the modified file path, runs `tsc --noEmit --skipLibCheck <filepath>` to perform a [[concepts/typescript|TypeScript]] type check. **Exit Codes:** Hooks communicate status via exit codes (0=success, 2=blocking error, others=non-blocking error). If `tsc` fails, `type_check.py` exits with `2`, sending `stderr` back to Claude, [[concepts/prompting|prompting]] it to review and fix type errors proactively.
* **Custom Slash Commands:** Define [[concepts/markdown|Markdown]] files (`.md`) under `.claude/commands/`. Example: `joke.md` with content "Make a joke in ALL CAPS." Running `/joke` sends this prompt to Claude, making it tell a joke. Advanced Custom Commands: Can be used for complex workflows like extracting design systems from screenshots, iterating on UI designs by spinning up parallel sub-agents with `git worktree`.
* **SuperClaude\_Framework (12:56):** An [[concepts/open-source|open-source]] package offering 16 essential commands and "Smart Personas" for Claude Code. Examples: `/sc:implement`, `/sc:build`, `/sc:design`, `/sc:analyze` (for architecture review), `/sc:troubleshoot`. **Installation (UV):** Requires `uv init` and `uv add SuperClaude`, then `uv run python -m SuperClaude install`. Installs globally. **Impact:** Adds pre-defined commands and detailed documentation to Claude Code, enhancing its capabilities significantly.

**6\. Productivity Tips & Shortcuts (14:19)**

* **Resume (**`**/resume**`**):** Allows jumping back to a past [[concepts/conversation-history|conversation history]] and continuing from that point. Useful for correcting mistakes or revisiting old tasks.
* **Export (**`**/export**`**):** Copies the entire conversation history to the clipboard or saves it to a file. Facilitates switching between different coding environments (Claude Code, Cursor, WingServe) by simply pasting the context.
* **Revert Changes (Double-tap Esc):** Reverts the conversation history to a previous point.
* `**ccundo**` **(External Package):** A package (`npm install -g ccundo`) that provides granular undo/redo functionality for Claude Code sessions, tracking file operations and allowing selective rollbacks with previews.
* **Bash Mode (**`**!**`**):** Type `!` followed by a shell command to execute it directly within Claude Code. The command and its output become part of the conversation history, providing context to Claude.
* **[[concepts/memory|Memory]] (**`**#**`**):** Type `#` followed by a statement to activate memory mode. Allows saving specific information (e.g., project context, coding principles) at either project or user level for Claude to recall later.

**7\. Connecting Custom Models ([[entities/kimi-k2|Kimi K2]] Example) (16:53)**

* **Kimi K2:** A new open-source coding model with performance comparable to [[entities/claude-4|Claude 4]] but 80% cheaper.
* **Setup:** Open your terminal's shell configuration file (`~/.zshrc` for Mac, or `.bashrc` for Linux/WSL). Export `KIMI_API_KEY` with your API key. Export `ANTHROPIC_BASE_URL` to `https://api.moonshot.ai/anthropic`. Export `ANTHROPIC_AUTH_TOKEN` to your `KIMI_API_KEY`. Define a shell function (e.g., `kimi()`) that executes `claude $1` (where `$1` is the prompt). Optionally, set `CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR=1` to ensure Claude always knows the current working directory.
* **Usage:** After configuring, you can type `kimi <your_prompt>` in any terminal to open Claude Code using the Kimi K2 model as the backend.

**Conclusion (18:10)**

* The speaker provides a quick overview of how he uses Claude Code.
* He invites viewers to join the AI Builder Club for weekly sessions on AI coding, agents, LLM applications, and practical tips like rebuilding Claude Code from scratch to understand its inner workings.
