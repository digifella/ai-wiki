---
wiki-ingested: true
title: "David Ondrej - Gemini via CLI for coding"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/david-ondrej|David Ondrej]] - [[concepts/gemini|Gemini]] via CLI for [[concepts/coding|coding]]

---
---
<https://www.youtube.com/watch?v=xHKgxxuGwGw>
Here is a detailed [[concepts/summary|summary]] of the video about [[entities/google|Google]]'s new [[entities/gemini-cli|Gemini CLI]]:

### Overview

The video introduces and provides a first look at Google's newly released **[[concepts/gemini-cli|Gemini CLI]]**, an [[concepts/open-source|open-source]], autonomous [[concepts/ai-coding|AI coding]] [[entities/agent|agent]]. The [[entities/speaker|speaker]] is highly optimistic about its potential, positioning it as a major competitor to existing tools like [[concepts/claude-code|Claude Code]] and [[entities/codex|Codex]], primarily due to its impressive features and the backing of Google. The video covers its key features, a step-by-step installation guide, a live comparison with [[entities/claude-code|Claude Code]], and pro-tips for advanced usage.

### Key Features of Gemini CLI

The speaker [[concepts/highlights|highlights]] several standout features that make Gemini CLI significant:

* **Open-Source:** The entire project is available on [[entities/github|GitHub]] (`google-gemini/gemini-cli`), allowing for community contributions and custom forks.
* **1 Million Token [[concepts/context-window|Context Window]]:** It is powered by Gemini 2.5 Pro, which has a massive 1M token context window. This is 5 times larger than competitors like [[entities/claude-4|Claude 4]] [[entities/opus|Opus]] (200k), making it ideal for working with very large codebases.
* **Generous Free Tier:** Users get **1,000 free model requests per day** (with a rate limit of 60 per minute), which makes it completely free for most individual developers.
* **Built-in [[concepts/google-search|Google Search]]:** It can natively use Google Search to find up-to-date information and documentation.

### Installation and [[concepts/setup|Setup]] Guide

The speaker walks through the simple [[concepts/setup-process|setup process]]:

1. **Prerequisite:** You need **Node.js version 18 or higher** installed. A link to the Node.js download page is provided in the GitHub repository.
2. **Installation:** Open a terminal and run the command: `npm install -g @google/gemini-cli`. This command also serves to update the CLI to the latest version.
3. **Launch:** Simply type `gemini` in your terminal to start the agent.
4. **[[concepts/authentication|Authentication]]:** On first run (or by using the `/auth` command), you are given three options: **Login with Google:** The easiest method. It grants the 1,000 free daily requests. The speaker [[concepts/notes|notes]] that with this option, Google may use your data for [[concepts/training|training]], and you might be downgraded to the less powerful `gemini-2.5-flash` model during peak usage. **[[entities/gemini-api|Gemini API]] Key:** A paid option where you provide your own API key from [[entities/google-ai-studio|Google AI Studio]]. This ensures your data remains private and you consistently use the best model (Gemini 2.5 Pro). **Vertex AI:** A third option for enterprise users.

### Live Comparison: Gemini CLI vs. Claude Code

The speaker attempts to perform the same front-end coding task with both Gemini CLI and Claude Code to compare their performance.

* **The Task:** Improve the UI of thumbs-up/down [[concepts/feedback|feedback]] buttons in a [[entities/react|React]] component, specifically by replacing the default yellow emojis with more subtle icons from the Lucid React library.
* **Gemini CLI's Performance:** Initially, the speaker encounters an API error ("Too Many Requests") and has to switch from his paid API key to the free Google Login method. The agent then automatically downgrades from Gemini 2.5 Pro to **Gemini 2.5 Flash** due to "slow response times detected." The Flash model struggles with the prompt and fails to complete the task correctly.
* **Claude Code's Performance:** The speaker gives the exact same prompt to Claude Code. Claude Code immediately understands the request, identifies the correct [[concepts/files|files]], and provides the necessary code changes, successfully completing the task in seconds.
* **Conclusion:** In this head-to-head test, **Claude Code was the clear winner**, proving to be more reliable and capable for the given task. The speaker concludes that while Gemini CLI has immense potential, it is currently less polished.

### Pro-Tip for [[concepts/granular-control|Advanced Customization]]

The speaker shares a crucial tip for getting the most out of Gemini CLI by making it use the same optimized prompt file he uses for Claude Code:

1. In your project's root directory, create a folder named `.gemini`.
2. Inside that folder, create a file named `settings.json`.
3. Add the following content to the `settings.json` file: `{"contextFileName": "AGENTS.md"}`. This configuration forces Gemini CLI to use the `AGENTS.md` file as its [[concepts/system-prompt|system prompt]], allowing for consistent and highly-tuned [[concepts/instructions|instructions]] across different AI [[concepts/agents|agents]] without having to maintain separate prompt files.

### Other Mentions

* **Vectal.ai:** The speaker promotes his AI startup, Vectal.ai, as a next-generation productivity tool that integrates various [[concepts/ai-models|AI models]] (including Gemini 2.5 Pro) directly into a task management [[concepts/workflow|workflow]], allowing for project-specific and user-specific context.
* **New Society:** He mentions his online community where he provides in-depth workshops on using these AI coding tools effectively.