---
wiki-ingested: true
title: "Ollama + Claude + GLM. Channel Sam Witteveen"
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

# [[entities/llama|Ollama]] + [[entities/claude-4|Claude]] + GLM. Channel [[entities/sam-witteveen|Sam Witteveen]]

---
---
<https://www.youtube.com/watch?v=NA5U06WuO34>
Here is a [[concepts/markdown|Markdown]] summary and guide based on the video content.

# Running [[concepts/claude-code|Claude Code]] Locally with Ollama and [[entities/glm-47-flash|GLM-4.7-Flash]]

This guide covers how to use the new [[concepts/anthropic-api-compatibility|Anthropic API compatibility]] in Ollama to run **Claude Code** locally using the **GLM-4.7-Flash** model.

## Overview

Ollama now supports the Anthropic API, allowing users to hook local models into tools designed for Claude. This demonstration tests the **GLM-4.7-Flash** model (a 30B parameter [[entities/mixture-of-experts|Mixture-of-Experts]] model with 3B active [[concepts/parameters|parameters]]) to see if it can function as a [[concepts/coding|local coding]] assistant.

## New Feature: `ollama launch`

Ollama released a new command called `ollama launch`. This feature simplifies the process of connecting local models to coding environments. It supports:

* Claude Code
* Codex
* Droid
* OpenCode

## Prerequisites

* **Ollama Version:** Must be updated to the latest version (v0.1.5+).
* **[[concepts/hardware|Hardware]]:** Recommended to have a Mac with Apple Silicon (M-series) or a machine with a powerful GPU. Tested on Mac Mini Pro (32GB RAM).

## Step-by-Step Setup

### 1\. Pull the Model

Open your terminal and pull the GLM model:
```
ollama pull glm-4.7-flash


```

### 2\. Configure Context Length (Crucial Step)

By default, Ollama uses a context length of **4096 tokens**. This is insufficient for coding agents like Claude Code, which will cause the model to forget instructions or fail to use tools.

1. Open the Ollama application menu bar icon.
2. Go to **Settings** (or specific model settings).
3. Change the **Context Length** to at least **64k (64000)**.

### 3\. Launch Claude Code

Run the following command in your terminal to initialize the connection:
```
ollama launch claude


```
_Alternatively, you can type_ `_ollama launch_` _to see a menu of available integrations._
Once launched, you can interact with Claude Code using the local model just as you would with the hosted version (e.g., using `/plan` mode).

## Performance Review

**The Setup Tested:** Mac Mini Pro with 32GB RAM.

### ✅ The Good

* **It Works:** The [[concepts/integration|integration]] successfully connects; Claude Code boots up and recognizes the local model.
* **Tool Recognition:** The model is capable of identifying and attempting to use MCP ([[concepts/model-context-protocol|Model Context Protocol]]) tools installed on the system.
* **Cost:** It allows for a free "backup" to the paid Anthropic API.

### ❌ The Bad

* **Speed:** It is significantly slower than the hosted Claude API. Both "pre-fill" (processing context) and "decoding" (generating text) take a long time on local hardware.
* **[[concepts/accuracy|Accuracy]]:** While it attempts to use tools, the quantized/smaller model sometimes hallucinates incorrect arguments for tools (unlike [[entities/claude-opus|Claude Opus]] or Sonnet 3.5).
* **Resource Intensive:** Running a 64k [[concepts/context-window|context window]] locally requires significant RAM/VRAM.

## Verdict

While `ollama launch` is an excellent feature for ease of use, running Claude Code locally with current [[concepts/open-weight|open-weights]] models on consumer hardware is **not yet "prime time" ready** for professional [[concepts/workflow|workflows]].

* It is currently too slow and prone to minor hallucinations compared to the paid API.
* It serves as a great [[concepts/proof|proof]] of concept.
* Future optimized coding models (like [[concepts/gemini|Gemini]] 4 or Qwen 4) may make this viable soon.
