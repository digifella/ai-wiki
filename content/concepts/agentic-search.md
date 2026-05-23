---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "file-search"
  - "rag-alternative"
  - "agent-exploration"
  - "fs-explorer"
  - "search-methodology"
  - "agent-skills"
aliases:
  - "agentic-file-search"
  - "exploration-based-search"
summary: The fs-explorer project introduces agentic file search as a method to replace RAG with exploration.
updated: 2026-05-24
---
# Agentic Search

Agentic search is an information retrieval approach where autonomous agents actively explore file systems or knowledge bases rather than relying on pre-indexed query-matching systems. Instead of retrieving results from a static database, the agent navigates through documents or files iteratively, assessing relevance and deciding which paths to explore next based on discovered content. This method treats retrieval as an interactive process of navigation and discovery rather than a lookup operation.

## Distinction from RAG

Traditional Retrieval-Augmented Generation (RAG) systems depend on pre-computed embeddings and indexed content to match user queries against stored documents. Agentic search replaces this static indexing with dynamic exploration, allowing agents to discover relevant information through examination and reasoning about file structure and content. This approach can be particularly useful in scenarios where file organization itself contains meaningful signals or where the search space changes frequently, making pre-indexing impractical or inefficient.

## Practical Application

The fs-explorer project exemplifies this concept by implementing agentic file search capabilities. Rather than searching a curated index, an agent can traverse a file system, read documents, and make intelligent decisions about which directories or files to investigate based on the task at hand. This enables more flexible information discovery while potentially reducing the overhead of maintaining and updating search indices.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
- 2026-04-10: [[lab-notes/2026-04-10-Meta-Muse-Spark-Features-Performance-and-Strategic-Shift-to-Proprietar|Meta Muse Spark Features Performance and Strategic Shift to Proprietar]] · [▶ source](https://www.youtube.com/watch?v=7vkybiVRSm0)
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)
- 2026-04-17: [[lab-notes/2026-04-17-Anthropic-Claude-Opus-47-Performance-Gains-Safety-Limits-Strategic-Rel|Anthropic Claude Opus 47 Performance Gains Safety Limits Strategic Rel]] · [▶ source](https://www.youtube.com/watch?v=N4ZWCc_Fr3U)
- 2026-04-25: Claude Code · [▶ source](https://www.youtube.com/watch?v=UHVFcUzAGlM)
- 2026-04-28: Apple
- 2026-04-29: Optimizing LLM Agent · [▶ source](https://www.youtube.com/watch?v=rU6IYiQ1SdQ)