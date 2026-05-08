---
wiki-ingested: true
title: "Enhanced rag. Channel Prompt Engineering"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: reasoning-context-prompting
---
# Enhanced rag. Channel [[concepts/prompt-engineering|Prompt Engineering]]

---
---
https://youtu.be/xG3eS\_zHR3k?si=YBSLkDwCMRe04C9h

Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] and [[concepts/technical-overview|technical overview]] of the video content regarding **[[concepts/agentic-file-search|Agentic File Search]]**.

# Agentic File Search: Replacing RAG with Exploration

This project introduces **[[entities/fs-explorer|fs-explorer]]** (Agentic File Search), an [[concepts/open-source|open-source]] tool designed to solve the limitations of standard Retrieval-Augmented Generation (RAG) [[concepts/systems|systems]] by replacing [[concepts/semantic-similarity|semantic similarity]] search with an agentic "exploration" approach that mimics how humans research [[concepts/files|files]].

* * *

## 🚨 The Problem with Standard RAG

Most current RAG systems rely on **semantic similarity** (embedding chunks of [[concepts/text|text]] and finding vectors close to the query). This leads to several critical failures:

* **Loss of Global Context:** Chunking breaks documents apart, losing the overall narrative.
* **Broken [[concepts/cross-references|Cross-References]]:** If Document A says _"See Exhibit B for [[concepts/adjustments|adjustments]],"_ a standard [[concepts/vector-search|vector search]] might find the text "See Exhibit B" but fails to actually retrieve Document B because the [[concepts/connection|connection]] is semantic, not logical.
* **Missing Dependencies:** Standard RAG cannot follow a trail of document dependencies (e.g., File A $\\to$ File B $\\to$ File C).

## 💡 The [[concepts/solution|Solution]]: Agentic File Search

Instead of using a pre-computed index, this system uses an **[[entities/agent|Agent]]** with tools to navigate the file system dynamically. It uses a **Three-[[concepts/phase|Phase]] Strategy**:

### 1\. Parallel Document Scan

* The agent scans the beginning/preview of all files in a folder.
* **Goal:** Determine relevance without reading everything. (e.g., If the query is financial, it marks financial docs as "Relevant" and others as "Skip").
* **No Indexing:** It converts PDF/Docs to Markdown on the fly using **[[concepts/docling|Docling]]**.

### 2\. Deep Dive

* The agent reads the full text of documents marked "Relevant."
* **Discovery:** It identifies cross-references (e.g., finding a mention of "Closing Checklist").

### 3\. Backtracking (The Key Differentiator)

* If the agent finds a reference to a file that was skipped in Phase 1 (e.g., "See Exhibit B"), it **backtracks**.
* It explicitly goes back to read the previously skipped file to gather necessary context.

* * *

## 🛠️ Technical [[concepts/architecture|Architecture]]

The system mimics [[concepts/coding|coding]] [[concepts/agents|agents]] (like [[concepts/claude-code|Claude Code]]) and utilizes an event-driven [[concepts/loop|loop]] via **[[entities/llamaindex|LlamaIndex]]**.

### The Toolset (6 Tools)

The LLM has access to the following tools:

1. `scan_folder`: Lists files.
2. `parse_file`: Converts PDF/Docx to Markdown via Docling.
3. `preview_file`: Reads the first 3,000 characters.
4. `read`: Reads full text files.
5. `grep`: Regex search across files.
6. `glob`: Find files by path patterns.

### Stack

* **Frontend:** Web UI (HTML) or CLI.
* **Backend:** FastAPI.
* **Orchestration:** LlamaIndex [[concepts/workflow|Workflow]].
* **Processing:** Docling (for parsing documents).

* * *

## 🤖 Model Support & Local LLMs

The project originally used [[concepts/gemini|Gemini]] 1.5 Flash but now supports **Local [[concepts/models|Models]]** via [[entities/llama|Ollama]].

* **Recommended Model:** **[[entities/qwen|Qwen]] 2.5 32B**.
* **Findings:** The author found that smaller models (4B, 8B, 14B) failed to follow the complex [[concepts/instructions|instructions]] or hallucinated tool usage. The 32B model is the minimum viable size for this complex workflow.
* **[[concepts/hardware|Hardware]]:** The video demonstrates this [[concepts/running|running]] on an **[[entities/nvidia|NVIDIA]] [[entities/dgx-spark|DGX Spark]]** (128GB Unified [[concepts/memory|Memory]]), which allows running large models with high [[concepts/context-windows|context windows]] (64k+ [[concepts/tokens|tokens]]) locally, though [[concepts/inference|inference]] is slower than consumer [[concepts/gaming|gaming]] GPUs.

* * *

## 💻 Installation & Usage

### 1\. Installation

```
git clone https://github.com/PromtEngineer/agentic-file-search.git
cd agentic-file-search
uv pip install .
# Or with pip: pip install .


```

### 2\. Configuration (.env)

Set up your [[concepts/local-model|local model]] (if using [[entities/ollama|Ollama]]):
```
OLLAMA_HOST=http://localhost:11434
MODEL_NAME=qwen2.5:32b


```

### 3\. Running the Tool

**CLI Mode:**
```
uv run explore --task "What is the purchase price in data/acquisition?"


```
**Web UI Mode:**
```
uv run uvicorn src.server:app --host 127.0.0.1 --port 8000
# Open localhost:8000 in browser


```

* * *

## ⚠️ Important Note

This is **not a real-time chatbot**. A complex query involving multiple cross-referenced files (e.g., "What are the risks and mitigations across these 20 files?") can take **4+ minutes** and 10-20 steps to complete. It is designed for thorough **research**, not instant answers.