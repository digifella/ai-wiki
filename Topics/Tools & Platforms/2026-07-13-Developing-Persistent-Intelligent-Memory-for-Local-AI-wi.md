---
wiki-ingested: true
title: Developing Persistent, Intelligent Memory for Local AI with a Librarian System
date: 2026-07-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: platforms-runtimes-environments
type: "source-summary"
aliases:
  - "lab-notes/2026-07-13-Developing-Persistent-Intelligent-Memory-for-Local-AI-wi"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Developing Persistent, Intelligent Memory for Local AI with a Librarian System
**Clip title:** Every [[concepts/offline-ai|Local AI]] I Run Now Shares ONE Memory | (LLM Wiki + OKF)
**Author / channel:** Codacus
**URL:** https://www.youtube.com/watch?v=IwN-eK1s8og

### Summary
This video explores the significant challenge of providing [[concepts/local-ai-agents|local AI agents]] with a persistent, evolving memory system. The presenter highlights that current approaches, such as repeatedly feeding context to the AI at the start of every [[concepts/session|session]], are inefficient and dilute the model's core intelligence. Existing "memory systems" often consume excessive resources, rely on cloud hosting (compromising privacy), or use [[concepts/answer-generation|retrieval augmented generation]] (RAG) which, while efficient for large, static [[concepts/knowledge-bases|knowledge bases]], performs simple vector matching without leveraging the LLM's intelligence during retrieval, thus sacrificing depth for speed. The core problem, the video argues, is that most advanced memory frameworks are built for large, [[concepts/frontier-intelligence|frontier models]] that can handle "half-baked" [[concepts/instructions|instructions]], whereas smaller, [[concepts/hardware-heavy-models|local LLMs]] require a more precise and managed approach to memory.

The proposed [[concepts/solution|solution]] involves shifting the [[concepts/memory-management|memory management]] burden from the AI model itself to a specialized "tool," dubbed the "Librarian." Drawing inspiration from Andrej [[concepts/compounding-knowledge|Karpathy's LLM Wiki]] concept and Google's [[concepts/data-management|Open Knowledge Format]] (OKF), this system treats memory as a network of carefully organized [[concepts/markdown|markdown]] files, with links between them. The Librarian agent is responsible for navigating these interconnected "memory segments," [[concepts/retrieving|retrieving]] precise information by leveraging the AI's intelligence at each step of the search. Unlike [[concepts/vector-databases|vector databases]], this approach focuses on [[concepts/storing|storing]] "personal context" on a KB-scale rather than TBs of data, allowing for constant evolution without the need for computationally expensive re-chunking and re-embedding every time an update occurs.

Initial attempts to have the AI directly manage this linked file system proved challenging; local LLMs often struggled with precise [[concepts/instruction-following|instruction-following]], leading to incorrect file placement or overlooked index [[concepts/software-updates|updates]]. The breakthrough involved making the Librarian an independent, deterministic agent that handles the mechanical aspects of memory management. The AI interacts with the Librarian through simple "Query," "Update," and "Add" tools, keeping the AI's own context window slim and focused on [[concepts/decision-making|decision-making]]. Furthermore, the system includes mechanical rules like "Enrich before Create" to prevent redundant new files and "Link Both Ways" to ensure comprehensive connections. Additional tools were developed for "Graph Health" (identifying orphaned concepts and broken links), "Maintain" (automatically wiring orphans into the [[concepts/vector-store|knowledge graph]]), and a "Mutate Pass" (to handle contradictions by cleanly replacing old facts with new ones, rather than simply appending).

The result is a "truly local" and "personal AI" system where the model, hardware, privacy, and most importantly, the memory, remain entirely within the user's control. All AI agents using this framework share the same persistent memory, which is stored as plain markdown files on the user's disk, allowing agents to instantly recall past interactions and [[concepts/contextual-information|contextual information]] without needing to be re-introduced in every session. The project, "understory," is [[concepts/open-source|open-source]], promoting an ecosystem where local AI can not only remember but also intelligently reorganize and consolidate its knowledge (a future "dreaming" feature), continuously getting "better at remembering while you're not even using it." This approach aims to deliver on the promise of personal AI that truly knows and understands its user across different applications and over time.

### Video Description & Links
#### Description
I gave every local AI I run ONE shared, permanent memory — teach something to one agent, and every other agent already knows it. No vector database, no cloud API, no re-embedding. Just a folder of markdown files, a "librarian" agent, and MCP.

It's built on Andrej Karpathy's LLM-wiki idea and Google's OKF (Open Knowledge Format) spec, and the whole loop runs on my own box: the [[concepts/harness|harness]], the memory, AND the model (same [[concepts/inference-engine|llama.cpp]] server everything else uses).

In this video I build understory, a drop-in memory layer for ANY [[concepts/local-llm-installation|local AI setup]]. [[entities/anything-llm|AnythingLLM]], llama.cpp web UI, [[concepts/ai-coding-agents|coding agents]], anything that speaks MCP, and I show you exactly what broke along the way: the [[concepts/cold-start-technique|cold-start problem]] (the AI never thought to check its own memory), the junk-drawer problem (every fact became an orphan file), and how a deterministic harness makes it all work on a small [[concepts/local-model|local model]]. Deterministic rules, the LLM only for decisions.

🌱 understory (free & open source): https://github.com/thecodacus/understory
Karpathy's LLM Wiki gist: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
Google's OKF spec: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md

⏱️ CHAPTERS
0:00 Your local AI has [[concepts/amnesia|amnesia]]
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
• Agent: [[concepts/typescript-development|TypeScript]] + Vercel AI SDK v5 tool loop (search / read / write / patch / link)
• Protocol: [[concepts/mcp-server|MCP server]] (streamable HTTP + stdio) — works with [[concepts/claude-ai|Claude]], llama.cpp webui, any MCP client
• [[concepts/inference|Inference]]: llama.cpp llama-server on my homelab GPU (also supports [[entities/anthropic-institute|Anthropic]] / [[entities/openrouter|OpenRouter]])
• UI: React + Vite + Tailwind, d3-force for the memory graph + query-path replay
• Server: Node + Express, single Docker container (image on GHCR)

Every byte of your AI's memory stays on your disk, readable in any text editor, diffable in git. We took back the model, the hardware, and the privacy — memory is the next thing to take back.

What should your AI remember first? Tell me in the comments. 

#localai #llamacpp #edgeai #aimemory #llm #obsidian #okf

#### Tags
`localai`, `codacus`, `homelab`, `local AI memory`, `AI agent memory`, `MCP memory server`, `LLM wiki`, `Karpathy LLM wiki`, `OKF`, `open knowledge format`, `persistent memory AI`, `AI memory layer`, `llama.cpp`, `local LLM`, `AnythingLLM`, `MCP server`, `model context protocol`, `markdown knowledge base`, `self hosted AI`, `local AI stack`, `AI agents`, `agentic memory`, `RAG alternative`, `vector database alternative`, `Qwen 3`, `home lab AI`, `privacy AI`, `open source AI memory`

#### URLs
- https://github.com/thecodacus/understory
- https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md

## Related Concepts
- [[concepts/local-ai|Local AI]]
- [[concepts/persistent-memory|Persistent Memory]] — [Wikipedia](https://en.wikipedia.org/wiki/Persistent_memory)
- [[concepts/persistent-memory|Librarian System]]
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_window)
- [[concepts/llm-wiki|LLM Wiki]]
- [[concepts/open-knowledge-framework|Open Knowledge Framework]]
- [[concepts/memory-dilution|Memory Dilution]]
- [[concepts/inference-optimization|Resource Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Resource_efficiency)
- [[concepts/web-application|Cloud Hosting]] — [Wikipedia](https://en.wikipedia.org/wiki/Cloud_computing)
- [[concepts/session-context|Session Context]]
- [[concepts/agentic-ai|AI Agents]]
- [[concepts/vector-database|Vector Database]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_database)
- [[concepts/visual-rag|Retrieval-Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)
- [[concepts/model-intelligence|Model Intelligence]]
- [[concepts/knowledge-graph|Knowledge Graph]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_graph)
- [[concepts/markdown-files|Markdown Files]]
- [[concepts/privacy|Privacy]] — [Wikipedia](https://en.wikipedia.org/wiki/Privacy)

## Related Entities
- [[entities/codacus|Codacus]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/llm-wiki|LLM Wiki]]
- [[entities/okf|OKF]]
- Understory — [Wikipedia](https://en.wikipedia.org/wiki/Understory)
- [[entities/andrej-karpathy|Andrej Karpathy]] — [Wikipedia](https://en.wikipedia.org/wiki/Andrej_Karpathy)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)