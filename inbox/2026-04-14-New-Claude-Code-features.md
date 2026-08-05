---
wiki-ingested: true
title: "New Claude Code features"
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
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# New [[concepts/claude-code|Claude Code]] features

---
---
<https://www.youtube.com/watch?v=o_qZa4ifDdQ>
This video provides a detailed overview of several new features and improvements in Claude Code, covering updates from versions 1.0.71 down to 1.0.57.
Here's a breakdown of the features:

1. **[[concepts/customizable-status-lines|Customizable Status Lines]] (1.0.71):**
	**What it is:** Allows users to personalize the status line at the bottom of the Claude Code terminal. **How it works:** Users can issue [[concepts/commands|commands]] like `/statusline add the weather in London with emojis` or `/statusline add how long I've been in the session, the model being used, the git branch, the folder name alongside the weather, weather should be last`. Claude will then generate and modify a Bash script (`statusline-command.sh` in `~/.claude/settings.json`) that runs in the background to fetch and display this information. **Usefulness:** Provides real-time context and personalized metrics (like [[concepts/session|session]] duration, current model, Git branch, local folder, or even data fetched from an API endpoint, e.g., unread emails, Stripe earnings) without interrupting the [[concepts/workflow|workflow]].
	
2. **Background Commands (1.0.71):**
	**What it is:** The ability to run Bash commands in the background, allowing Claude to continue processing other requests while monitoring the background task's output. **How it works:** Prepend `Ctrl-B` to any Bash command to run it in the background. Users can then use `/bashes` to list and manage these [[concepts/running|running]] background shells, view their output, or kill them. **Usefulness:** Ideal for tasks like running development servers locally (e.g., `npm run dev`), continuously monitoring [[concepts/docker|Docker]] container logs (`docker logs -f`), or tailing log [[concepts/files|files]]. Claude can keep track of error logs or server status, providing proactive assistance.
	
3. **Added Support for @-mentions in Slash Command Arguments (1.0.70):**
	**What it is:** Enables specifying specific files or folders as arguments to custom slash commands using the `@` symbol. **How it works:** When using a custom slash command (e.g., `/optimize`), typing `@` will bring up suggestions for files and folders. Selecting one will pass its path as an argument to the command. **Usefulness:** Allows for more precise targeting of operations. Instead of analyzing an entire project, users can direct Claude to focus on a specific component or directory for tasks like optimization or [[concepts/security|security]] review.
	
4. **Upgraded Opus to Version 4.1 (1.0.69):**
	**What it is:** An upgrade to the underlying Opus language model. **Usefulness:** Implies general improvements in [[concepts/reasoning|reasoning]], [[concepts/code-generation|code generation]], and understanding for tasks where Opus is used.
	
5. **[[concepts/agents|Agents]]: Added [[concepts/model-customization|Model Customization]] Support (1.0.64):**
	**What it is:** Users can now specify which Claude model (Sonnet, Opus, or Haiku) a custom [[entities/agent|agent]] should use. **How it works:** When creating a new agent, a prompt appears to select the desired model. This setting is then saved in the agent's [[concepts/slms|definition]] file (e.g., `i18n-sync-manager.md` will include `model: haiku`). **Usefulness:** Allows for optimizing the agent's performance and [[concepts/cost|cost]]. Simpler, faster tasks can use Haiku, while more [[concepts/complex-reasoning|complex reasoning]] can leverage Opus, avoiding overkill and saving [[concepts/tokens|tokens]].
	
6. **Added Hidden Files to File Search and @-mention Suggestions (1.0.64):**
	**What it is:** Hidden files and folders (e.g., `.DS_Store`, `.claude/`, `.env`, `.git/`) are now included in the auto-completion suggestions when using `@-mentions`. **Usefulness:** Improves discoverability and allows Claude to interact with important configuration or version control files that might otherwise be overlooked.
	
7. **[[concepts/text-transcript|Transcript]] Mode (Ctrl+R): Changed Esc to Exit Transcript Mode Rather Than Interrupt (1.0.61):**
	**What it is:** A workflow improvement for transcript mode. **How it works:** Pressing `Ctrl+R` reveals Claude's internal thought process and the exact context it's operating on. Previously, `Esc` would interrupt the current agent's task. Now, `Esc` simply exits the transcript view, allowing the agent to continue its work uninterrupted. **Usefulness:** Facilitates [[concepts/debugging|debugging]] and understanding Claude's [[concepts/decision-making|decision-making]] without disrupting ongoing operations.
	
8. **IDE: Added Support for Pasting Images in [[entities/vscode|VSCode]] macOS using Cmd+V (1.0.61):**
	**What it is:** Allows users to paste images directly into the Claude Code terminal on macOS. **How it works:** After taking a screenshot (e.g., using `Cmd+Shift+4` to copy to clipboard), simply press `Cmd+V` in the Claude Code input to paste the image. **Usefulness:** Streamlines the process of providing visual context to Claude, such as UI mockups, error screenshots, or diagrams, making interaction more fluid.
	
9. **Added Support for Reading [[concepts/pdfs|PDFs]] (1.0.58):**
	**What it is:** Claude Code can now read and process PDF files. **How it works:** Users can drag and drop a PDF file into the Claude Code terminal, then provide a prompt (e.g., `summarize this`). Claude will read the PDF content and respond. **Usefulness:** Highly beneficial for developers who receive feature specifications, technical documentation, or research papers in PDF format, enabling quick summaries and [[concepts/information-extraction|information extraction]].
	
10. **Added Support for Specifying a Model in Slash Commands (1.0.57):**
	**What it is:** Allows developers to hardcode a specific Claude model to be used for a given custom slash command. **How it works:** By adding a `model:` field in the frontmatter of a slash command's [[concepts/markdown|markdown]] definition (e.g., `model: opus`), that command will always use the specified model, regardless of the default conversation model. **Usefulness:** Provides [[concepts/granular-control|granular control]] over resource usage and performance for specific automated tasks, ensuring the right model is used for the right job without wasting tokens on simpler commands or underperforming on complex ones.
