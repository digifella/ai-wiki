---
wiki-ingested: true
title: "RAG agentic search - Prompt Engineering channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# RAG [[concepts/agentic-search|agentic search]] - [[concepts/prompt-engineering|Prompt Engineering]] channel

---
---
<https://www.youtube.com/watch?v=QxBJ9ORecMY>
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video [[concepts/text-transcript|transcript]], detailing the [[concepts/architecture|architecture]] and functionality of the Hybrid [[concepts/agentic-file-search|Agentic File Search]] system.

* * *

# Agentic File Search vs. [[concepts/traditional-rag|Traditional RAG]]: The Hybrid Approach

This project explores solving the limitations of Traditional RAG (loss of context) and [[concepts/pure-agentic-search|Pure Agentic Search]] (slow [[concepts/speed|speed]]) by combining them into a **[[concepts/dual-path-search-pipeline|Dual-Path Search Pipeline]]**. The goal is to use semantic and [[concepts/metadata-search|metadata search]] to filter documents _before_ an agent creates a deep dive, offering both speed and [[concepts/accuracy|accuracy]].

## ⚠️ The Problem

* **Traditional RAG:** Fast, but chunks lose context. Splitting documents destroys [[concepts/relationships|relationships]] between sections, and [[concepts/cross-references|cross-references]] are invisible.
* **Pure Agentic Search:** Extremely accurate and capable of "backtracking" (following cross-references like a human), but **extremely slow** because it must read/scan every document in a folder to find relevance.

## 🛠 The [[concepts/solution|Solution]]: Indexed Retrieval Pipeline

To fix the speed issue, the system introduces an offline indexing layer to reduce the search space for the agent.

### 1\. Offline Indexing (Data Ingestion)

Instead of reading raw [[concepts/files|files]] at query time, the system pre-processes data:

* **Parsing:** Uses **[[concepts/docling|Docling]]** to convert all documents (PDF, DOCX, etc.) into Markdown.
* **Smart Chunking:** Splits documents into chunks and computes embeddings using **[[concepts/gemini|Gemini]]**.
* **Metadata Extraction:** Uses **LangExtract** (Gemini-powered) to extract structured metadata (e.g., invoice amounts, dates, organization names) automatically or via a custom schema.
* **[[entities/storage|Storage]]:** All data (Documents, Chunks, Embeddings, Metadata) is stored in **DuckDB**.

### 2\. Query Time [[concepts/workflow|Workflow]]

When a user asks a question:

1. **Filtering:** The query runs through **Semantic Search** (embeddings) and **Metadata Filtering** (SQL-like).
2. **Ranking:** Documents (not just chunks) are ranked based on relevance.
3. **Agent Handoff:** Only the relevant _candidate documents_ are passed to the **Agentic File Search**.
4. **Agent Execution:** The agent performs its standard loop (read, reason, cross-reference) on this smaller subset of files.

## ⚙️ Operating Modes

The architecture is flexible and supports four distinct modes:

1. **Pure Agentic (Original):** No indexing. The agent scans the entire folder. (High accuracy, Low speed).
2. **Semantic + Agentic:** Uses vector embeddings to pre-filter documents before the agent takes over.
3. **Metadata + Agentic:** Uses structured metadata (e.g., "Find documents related to Acme Corp") to filter documents.
4. **Full Hybrid (Best of All):** Combines Semantic Search, Metadata Filtering, and Agentic [[concepts/reasoning|reasoning]].

## 🖥️ Usage & Interface

The project ([[concepts/open-source|Open Source]]) includes both a CLI and a Web UI.

### Key Features

* **Auto-Discovery:** When indexing a new folder, the system can automatically detect the document type and suggest a metadata schema (e.g., identifying "Risk Factors" or "Purchase Price" in legal docs).
* **Backtracking:** Even with filtering, the agent retains the ability to "backtrack." If a document references an exhibit not in the initial filter, the agent can request to read that specific file.
* **Model Support:** Optimized for **Gemini** (due to long [[concepts/context-window|context window]] and needle-in-haystack performance) but supports local [[concepts/models|models]] (e.g., 32B [[concepts/parameters|parameters]]) via a separate branch.

### Installation

```
# Clone the repo
git clone https://github.com/PromtEngineer/agentic-file-search.git

# Install dependencies (using uv is recommended)
uv pip install .

# Configure API Key
# Create .env file with GOOGLE_API_KEY=...


```

### [[concepts/running|Running]] the System

**CLI:**
```
uv run explore --task "What is the purchase price in data/test_acquisition"


```
**Web UI:**
```
uv run uvicorn fs_explorer.server:app --port 8000


```

## 📝 Conclusion

This hybrid approach represents a "[[concepts/harness-engineering|Harness Engineering]]" pattern—giving [[concepts/agents|agents]] generalized tools rather than rigid workflows. It allows for production-level speed by filtering noise while maintaining the agent's ability to understand deep context and cross-references.
