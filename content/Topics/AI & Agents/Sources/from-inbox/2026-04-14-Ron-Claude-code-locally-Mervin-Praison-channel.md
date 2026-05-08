---
wiki-ingested: true
title: "Ron Claude code locally - Mervin Praison channel"
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
# Ron [[concepts/claude-code|Claude code]] locally - [[entities/mervin-praison|Mervin Praison]] channel

---
---
<https://www.youtube.com/watch?v=kRS7DSDzo-c>
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] and step-by-step guide based on the video transcript.

# How to Run Claude Code Locally for Free (Using [[entities/llama|Ollama]])

**Claude Code** is a powerful [[entities/prompt-engineering|agentic coding]] tool that can build applications, fix errors, and refactor code. However, the official API (e.g., [[entities/opus-46|Opus 4.6]]) can be expensive ($5 input / $25 output per million tokens).
This guide explains how to run Claude Code locally using **Ollama** to keep your data private and avoid API costs.

* * *

## Prerequisites

* A computer capable of running local LLMs.
* Terminal access.

## Step-by-Step Installation

### 1\. Set up Ollama

1. Download and install Ollama from [ollama.com](https://ollama.com).
2. Open your terminal and download a model. The video recommends `gpt-oss:20b`, but you can use others like `qwen3-coder` or `mistral`.ollama pull [[entities/gpt-oss|gpt-oss]]:20b 
3. (Optional) Check your downloaded [[concepts/models|models]]:ollama list 

### 2\. Install Claude Code

Install the Claude Code tool using the official curl command:
```
curl -fsSL https://claude.ai/install.sh | bash


```

### 3\. Configure and Launch

Instead of just launching, use the config flag to select your local model:

1. Run the launch command with configuration:ollama launch claude --config 
2. A list of your local Ollama models [[entities/will|will]] appear. Select the model you wish to use (e.g., `gpt-oss:20b`).
3. Confirm launch when prompted.

* * *

## Usage Example

Once Claude Code is running in your terminal, you can issue natural language commands.

* **Prompt:** "Create a one-page website with basic information about AI Agency."
* **Process:** Claude Code will generate the file structure (e.g., `index.html`) and write the code.
* **Interaction:** You will be asked to confirm edits. Press `Enter` (Yes) or `Shift+Tab` (Allow all edits in session) to proceed.

_Note: Local models are best suited for basic to intermediate tasks compared to the paid [[entities/claude-opus|Claude Opus]] models._

* * *

## Recommended Models

The video documentation recommends the following models for the best experience with Claude Code:

* `qwen3-coder`
* `glm-4.7`
* `gpt-oss:20b`
* `gpt-oss:120b` (requires high [[concepts/vram|VRAM]])

* * *

## Troubleshooting & Settings

If you encounter errors, verify your configuration settings.

1. **Check Status:** Inside the Claude Code interface, type:
	/status 
	* Ensure **[[entities/anthropic|Anthropic]] base URL** is: `http://localhost:11434`
	* Ensure **Model** matches your downloaded Ollama model.
2. **Manual Configuration:** If needed, you can manually edit the settings file located at `~/.claude/settings.json`.
	Ensure the JSON includes:
	{  "env": {    "ANTHROPIC\_AUTH\_TOKEN": "ollama",    "ANTHROPIC\_API\_KEY": "ollama",    "ANTHROPIC\_BASE\_URL": "http://localhost:11434"  }}