---
title: Developing Persistent, Intelligent Memory for Local AI with a Librarian System
date: 2026-07-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Developing Persistent, Intelligent Memory for Local AI with a Librarian System
Generated: 2026-07-13 · API: Gemini 2.5 Flash · Modes: Summary

---

## Developing Persistent, Intelligent Memory for Local AI with a Librarian System
**Clip title:** Every Local AI I Run Now Shares ONE Memory | (LLM Wiki + OKF)
**Author / channel:** Codacus
**URL:** https://www.youtube.com/watch?v=IwN-eK1s8og

### Summary
This video explores the significant challenge of providing local AI agents with a persistent, evolving memory system. The presenter highlights that current approaches, such as repeatedly feeding context to the AI at the start of every session, are inefficient and dilute the model's core intelligence. Existing "memory systems" often consume excessive resources, rely on cloud hosting (compromising privacy), or use retrieval augmented generation (RAG) which, while efficient for large, static knowledge bases, performs simple vector matching without leveraging the LLM's intelligence during retrieval, thus sacrificing depth for speed. The core problem, the video argues, is that most advanced memory frameworks are built for large, frontier models that can handle "half-baked" instructions, whereas smaller, local LLMs require a more precise and managed approach to memory.

The proposed solution involves shifting the memory management burden from the AI model itself to a specialized "tool," dubbed the "Librarian." Drawing inspiration from Andrej Karpathy's LLM Wiki concept and Google's Open Knowledge Format (OKF), this system treats memory as a network of carefully organized markdown files, with links between them. The Librarian agent is responsible for navigating these interconnected "memory segments," retrieving precise information by leveraging the AI's intelligence at each step of the search. Unlike vector databases, this approach focuses on storing "personal context" on a KB-scale rather than TBs of data, allowing for constant evolution without the need for computationally expensive re-chunking and re-embedding every time an update occurs.

Initial attempts to have the AI directly manage this linked file system proved challenging; local LLMs often struggled with precise instruction-following, leading to incorrect file placement or overlooked index updates. The breakthrough involved making the Librarian an independent, deterministic agent that handles the mechanical aspects of memory management. The AI interacts with the Librarian through simple "Query," "Update," and "Add" tools, keeping the AI's own context window slim and focused on decision-making. Furthermore, the system includes mechanical rules like "Enrich before Create" to prevent redundant new files and "Link Both Ways" to ensure comprehensive connections. Additional tools were developed for "Graph Health" (identifying orphaned concepts and broken links), "Maintain" (automatically wiring orphans into the knowledge graph), and a "Mutate Pass" (to handle contradictions by cleanly replacing old facts with new ones, rather than simply appending).

The result is a "truly local" and "personal AI" system where the model, hardware, privacy, and most importantly, the memory, remain entirely within the user's control. All AI agents using this framework share the same persistent memory, which is stored as plain markdown files on the user's disk, allowing agents to instantly recall past interactions and contextual information without needing to be re-introduced in every session. The project, "understory," is open-source, promoting an ecosystem where local AI can not only remember but also intelligently reorganize and consolidate its knowledge (a future "dreaming" feature), continuously getting "better at remembering while you're not even using it." This approach aims to deliver on the promise of personal AI that truly knows and understands its user across different applications and over time.

### Video Description & Links
#### Description
I gave every local AI I run ONE shared, permanent memory — teach something to one agent, and every other agent already knows it. No vector database, no cloud API, no re-embedding. Just a folder of markdown files, a "librarian" agent, and MCP.

It's built on Andrej Karpathy's LLM-wiki idea and Google's OKF (Open Knowledge Format) spec, and the whole loop runs on my own box: the harness, the memory, AND the model (same llama.cpp server everything else uses).

In this video I build understory, a drop-in memory layer for ANY local AI setup. AnythingLLM, llama.cpp web UI, coding agents, anything that speaks MCP, and I show you exactly what broke along the way: the cold-start problem (the AI never thought to check its own memory), the junk-drawer problem (every fact became an orphan file), and how a deterministic harness makes it all work on a small local model. Deterministic rules, the LLM only for decisions.

🌱 understory (free & open source): https://github.com/thecodacus/understory
Karpathy's LLM Wiki gist: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
Google's OKF spec: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md

⏱️ CHAPTERS
0:00 Your local AI has amnesia
1:25 Why RAG is NOT the answer (memory ≠ vector DB)
3:04 The naive fix: a skill file (and how it broke)
3:50 Every library has a librarian — the architecture
5:26 Meet understory: watch the memory grow
5:59 Plug it into anything: the 3 MCP tools
6:53 Truly local, it runs on the same llama.cpp
7:44 Challenge 1: it forgot to remember (cold start)
9:19 Challenge 2: the junk drawer (linking memories)
11:01 Fixing the final gaps (lint, maintain, contradictions)
12:34 One memory, every agent
12:58 My Thoughts + the roadmap

THE STACK
• Memory: plain markdown files (Google's OKF spec) — no database, every "memory" is a file you can read, edit, and git-diff
• Agent: TypeScript + Vercel AI SDK v5 tool loop (search / read / write / patch / link)
• Protocol: MCP server (streamable HTTP + stdio) — works with Claude, llama.cpp webui, any MCP client
• Inference: llama.cpp llama-server on my homelab GPU (also supports Anthropic / OpenRouter)
• UI: React + Vite + Tailwind, d3-force for the memory graph + query-path replay
• Server: Node + Express, single Docker container (image on GHCR)


Every byte of your AI's memory stays on your disk, readable in any text editor, diffable in git. We took back the model, the hardware, and the privacy — memory is the next thing to take back.

🔔 Subscribe if you're building a local AI stack you actually own: https://youtube.com/@Codacus?sub_confirmation=1

What should your AI remember first? Tell me in the comments. 

#localai #llamacpp #edgeai #aimemory #llm #obsidian #okf

#### Tags
`localai`, `codacus`, `homelab`, `local AI memory`, `AI agent memory`, `MCP memory server`, `LLM wiki`, `Karpathy LLM wiki`, `OKF`, `open knowledge format`, `persistent memory AI`, `AI memory layer`, `llama.cpp`, `local LLM`, `AnythingLLM`, `MCP server`, `model context protocol`, `markdown knowledge base`, `self hosted AI`, `local AI stack`, `AI agents`, `agentic memory`, `RAG alternative`, `vector database alternative`, `Qwen 3`, `home lab AI`, `privacy AI`, `open source AI memory`

#### URLs
- https://github.com/thecodacus/understory
- https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
- https://youtube.com/@Codacus?sub_confirmation=1
