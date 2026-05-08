---
wiki-ingested: true
title: "Claude Code for controlling Chrome"
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
# [[concepts/claude-code|Claude Code]] for controlling Chrome

---
---
<https://www.youtube.com/watch?v=rXTvax9pyhs>
[[entities/ray-amjad|Ray Amjad]] channel
<https://www.youtube.com/watch?v=rXTvax9pyhs>

# [[entities/claude-code|Claude Code]]: Recent Features Update (December 2025)

This update covers the latest features and improvements added to **Claude Code**, versions 2.0.70 through 2.0.72.

* * *

## 1\. [[entities/claude-in-chrome|Claude in Chrome]] (Beta)

Claude Code can now directly control the **Claude in Chrome** browser extension. This allows the CLI to bridge the gap between your terminal and the web browser.

* **Key Capabilities:**
	* Navigate websites, click buttons, and fill forms.
	* Capture screenshots and record GIFs for context.
	* Debug web applications by reading browser console logs and network requests.
* **How to Use:**
	* Run the `/chrome` command in the Claude Code CLI to check status and manage permissions.
	* Use natural language to task Claude with web-based actions (e.g., _"Go to [[entities/chatgpt|ChatGPT]], ask why I should take the Master Claude Code class, and summarize the answer"_).
	* Claude can "see" the page via automated screenshots to understand the UI layout before interacting.

## 2\. Official Plugin Marketplace

A first-party marketplace is now available to discover and manage official Claude Code [[concepts/plugins|plugins]].

* **Access:** Use the `/plugin` command to open the marketplace interface.
* **Available Plugins Include:**
	* `chrome-devtools-mcp`: For in-depth browser [[concepts/debugging|debugging]].
	* `asana`: For task and project management [[concepts/integration|integration]].
	* `atlassian`: Connects to Jira and Confluence.
	* `code-review`: For automated pull request reviews.
* **Management:** Users can now disable auto-updates for specific plugins to maintain version stability.

## 3\. UI and Rendering Improvements

* **Reduced Terminal Flickering:** The rendering system has been rewritten to reduce terminal flickering by approximately 85%, providing a much smoother visual experience during long tasks.
* **Improved Syntax Highlighting:** Visual diffs are now clearer, featuring an updated color scheme and highlighted line numbers to make code changes easier to review.
* **Prompt Suggestions:** Claude now suggests logical next steps after a task finishes (e.g., suggesting a `git push` after a successful commit). Use `Tab` to accept or `Shift+Tab` to cycle through suggestions. This can be disabled via `/config`.

## 4\. Key CLI Shortcuts & [[concepts/commands|Commands]]

Several shortcuts have been updated or added to improve the [[concepts/workflow|workflow]]:

* **Thinking Toggle:** The shortcut has moved from `Tab` to `**Alt + T**` ([[entities/windows|Windows]]) or `**Option + T**` (Mac) to prevent accidental triggers.
	* _Note for Mac users:_ You may need to enable "Option key as [[entities/meta-ai|Meta]]" in your terminal settings (like Warp) to avoid [[concepts/integrity|character]] conflicts.
* **Model Switching:** Use `**Alt + P**` (Windows) or `**Option + P**` (Mac) to switch between [[concepts/models|models]] (Sonnet, [[entities/opus|Opus]], Haiku) in the middle of [[concepts/writing|writing]] a prompt.
* **Context Usage Tracking:** A new `current_usage` field is available for the status line. Users can now create custom status lines that show a "battery bar" representing how much of the [[concepts/context-window|context window]] has been used.
* **Mobile App Access:** Run the `/mobile` command to display a QR code for quick downloads of the Claude mobile app on iOS or [[entities/android|Android]].

## 5\. Other Notable Changes

* **Opus 3.5 Thinking Mode:** Thinking mode is now enabled by default when using the Claude 3.5 Opus model.
* **Shortcut Removal:** The `#` shortcut for quick [[concepts/memory|memory]] entry has been removed. Users are encouraged to edit the `CLAUDE.md` file directly for persistent [[concepts/instructions|instructions]].
* **Improved File Suggestions:** Suggestions in repositories with large `.gitignore` or `.rgignore` [[concepts/files|files]] are now up to 3x faster.