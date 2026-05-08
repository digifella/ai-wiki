---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
---
<https://www.youtube.com/watch?v=Zo6I9yHsNQ4>
Channel: Income Stream Surfers

Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the [[concepts/claude-code|Claude Code]] updates discussed in the video.

# Claude Code Update Summary

This video covers significant recent updates to **Claude Code** ([[entities/anthropic|Anthropic]]'s [[concepts/cli-tool|CLI tool]]), highlighting performance improvements, better session management, and new [[concepts/workflow|workflow]] features.

## 🛠️ How to Update & Check Changes

* **Check Changelog:** [[entities/google|Google]] "Claude code changelog" or visit the [[entities/github|GitHub]] repository.
* **Update Tool:** Run `claude update` or `npm install -g @anthropic-ai/claude-code` in your terminal.

* * *

## 🚀 Key Features & Updates

### 1\. Instant Auto-Compacting (v2.0.64)

* **The Change:** The auto-compacting feature is now **instant**.
* **Impact:** Previously a major annoyance that caused delays, context clearing is now immediate, significantly speeding up the workflow.

### 2\. [[concepts/usage-statistics|Usage Statistics]] (v2.0.64)

* **Command:** `/stats`
* **Function:** Displays detailed usage metrics including:
	* Token usage over time (daily/monthly).
	* [[concepts/cost|Cost]] breakdown by model (e.g., Sonnet vs. [[entities/opus|Opus]]).
	* [[concepts/coding|Coding]] streaks and session duration.
* _Note:_ Allows users to track spend on specific [[concepts/models|models]] (e.g., [[entities/claude-opus|Opus 4.5]] vs Sonnet 3.5).

### 3\. Session Management & Renaming (v2.0.67)

* **Problem:** [[concepts/session-resumption|Resuming sessions]] (`claude -r`) used to display confusing, random session IDs.
* **New [[concepts/solution|Solution]]:**
	* **Rename:** Use `/rename <name>` inside a session to give it a human-readable tag (e.g., "working on grove").
	* **Search:** In the resume menu (`claude -r`), you can now press `/` to search through your past sessions.
	* This acts like a "save file" system, making it easier to jump back into specific contexts.

### 4\. Switch Models Mid-Prompt (v2.0.65)

* **Feature:** Ability to change the LLM you are using _while_ typing a prompt, without losing your text.
* **Shortcut:**
	* **Mac:** `Option + P`
	* **Windows/Linux:** `Alt + P`

### 5\. Plan Mode Improvements (v2.0.28+)

* **Shortcut:** `Shift + Tab` to enter Plan Mode.
* **Functionality:** Allows Claude to create a high-level plan and implement it step-by-step.
* **Benefit:** The "Plan" persists and transfers between conversation contexts, meaning you don't lose the overall objective even when the [[concepts/context-window|context window]] resets (compacts).

### 6\. Connectors (MCP - [[concepts/model-context-protocol|Model Context Protocol]])

* Claude Code now supports a wide variety of integrations via MCP.
* **Examples:** GitHub, Cloudflare, [[entities/figma|Figma]], Stripe, Neon, etc.
* These connectors allow Claude to interact directly with [[concepts/external-tools|external tools]] and databases within the CLI.

### 7\. Other [[concepts/quality-of-life|Quality of Life]] Changes

* **[[concepts/thinking-with-3-pro|Thinking Mode]]:** Now enabled by default for **Opus 4.5** (improves coding quality).
* **UI Tweaks:**
	* `Tab` to accept suggestions / `Enter` to submit.
	* Christmas-themed loading spinner (seasonal update).

## Related Concepts
- [[concepts/instant-auto-compacting|Instant Auto-Compacting]] — [Wikipedia](https://en.wikipedia.org/wiki/Instant_Auto-Compacting)
- [[concepts/session-management|Session Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Session_Management)
- [[concepts/instant-auto-compaction|Workflow Features]] — [Wikipedia](https://en.wikipedia.org/wiki/Workflow_Features)

## Related Entities
- [[entities/income-stream-surfers|Income Stream Surfers]] — [Wikipedia](https://en.wikipedia.org/wiki/Income_Stream_Surfers)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)