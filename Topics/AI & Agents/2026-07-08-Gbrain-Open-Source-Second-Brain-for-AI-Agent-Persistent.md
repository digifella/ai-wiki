---
wiki-ingested: true
title: "Gbrain: Open-Source Second Brain for AI Agent Persistent Memory"
date: 2026-07-08
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
aliases:
  - "lab-notes/2026-07-08-Gbrain-Open-Source-Second-Brain-for-AI-Agent-Persistent"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Gbrain: Open-Source Second Brain for AI Agent Persistent Memory
**Clip title:** Give Your [[concepts/ai-assistant|AI Agent]] a [[concepts/personal-knowledge-management-pkm|Second Brain]] (Gbrain + [[concepts/agentic-ai|Hermes Agent]])
**[[entities/tasia-custode|Author]] / channel:** Tonbi's AI Garage
**URL:** https://www.youtube.com/watch?v=-fSjdYzrFvA

### Summary
This video introduces Gbrain, an open-source "second brain" tool designed to augment [[concepts/ai-agents|AI agents]] like [[concepts/agentic-ai|Hermes Agent]] with a persistent, searchable knowledge base. The presenter highlights a key limitation of traditional agent [[concepts/memory|memory]]: it only retains information explicitly discussed in chat sessions. [[concepts/external-data|External data]], such as meeting [[concepts/notes|notes]] or private documents, remains invisible to the agent, leading to an "[[concepts/amnesia|amnesia]] problem" that Gbrain aims to solve by making this broader context accessible.

Gbrain establishes a knowledge base for "your [[entities/earth|world]]," rather than just conversations or a specific domain. Its core data resides in [[concepts/markdown-files|Markdown files]] within a Git repository, serving as the system of record. This content is then synchronized to a local, in-process PostgreSQL database (PGlite), eliminating the need for external servers or [[concepts/docker|Docker]]. For [[concepts/document-retrieval|retrieval]], Gbrain employs a hybrid search mechanism that combines [[concepts/embedding-based-retrieval|vector search]], keyword matching, and a self-wiring [[concepts/vector-store|knowledge graph]] capable of discerning [[concepts/relationships|relationships]] between [[concepts/nodes|entities]] like people, companies, projects, meetings, and decisions, all without requiring explicit LLM calls for graph creation.

The architecture of Gbrain is notably decentralized and private, operating with "no server, no [[concepts/tunnel|tunnel]]." Hermes Agent interacts with `gbrain serve` as a local MCP (Message Control Protocol) sub-process, enabling [[concepts/hidden-engineering|seamless integration]] and exposing over 100 type-safe tools for querying and [[concepts/writing|writing]]. This setup ensures that every layer, from Markdown files to the local database, is inspectable. [[concepts/installation|Installation]] is streamlined, achievable either manually with `bun` and an embedding API key (OpenRouter is recommended for cost-effectiveness) or via the Hermes Agent's automated installation process, including optional "[[concepts/skill|skill]] packs" for various data ingestion methods.

In practical application, after seeding Gbrain with initial Markdown-based information, the Hermes Agent can leverage Gbrain to [[concepts/solution|answer]] complex questions with high accuracy and full source citations. The knowledge graph is particularly powerful, automatically identifying and displaying connections between entities, which significantly boosts retrieval [[concepts/accuracy|precision]] compared to vector-only methods. The use of an [[concepts/mcp-server|MCP server]] further optimizes performance, making interactions much faster and smoother by avoiding repeated CLI calls. Ultimately, Gbrain acts as a complementary system to Hermes Memory; while Hermes Memory remembers conversations, Gbrain offers a comprehensive "world [[concepts/catalog|catalog]]" for broader, durable knowledge, providing a cleaner and more effective integration for personal or small-team [[concepts/knowledge-management|knowledge management]].

### Video Description & Links
#### Description
Hermes can only remember what you actually talked about with it — everything else in your world is invisible to it. Gbrain, a popular open-source second brain, fixes that, and I set it up with Hermes Agent.

Gbrain (open-source, 25k+ [[concepts/stellar-objects|stars]]) gives your agent a knowledge base for your whole world — typed pages for people, companies, meetings, and decisions — including everything that never passed through your chat, like [[concepts/obsidian|Obsidian]] vaults and meeting notes. I explain how it differs from Hermes memory (which remembers your conversations) and an [[concepts/llm-wiki|LLM wiki]] like my Agent Wikis (which knows a domain), then install it with Hermes: markdown in a git repo synced to a local PGlite database, exposed as 30+ tools over MCP with no server or Docker. Along the way I show the parts that make it click — cited answers, the zero-LLM knowledge graph that maps how everything connects, and why wiring it up as an MCP server beats shelling out to the CLI. I also cover the habit that makes it [[concepts/value|worth]] it: search the brain first, write decisions back, keep world-[[concepts/factual-knowledge|facts]] out of chat memory. This is a first look — I'll follow up after using it daily for a while.

Resources:
🔗 Gbrain: https://github.com/garrytan/gbrain

Timestamps:
0:00 - What is Gbrain? (and why memory isn't enough)
2:01 - Gbrain vs Hermes memory vs an LLM wiki
4:39 - The architecture: markdown + PGlite + MCP
5:18 - Installing Gbrain with Hermes
7:46 - Seeding it + asking cited questions
8:37 - The knowledge graph (what most retrieval can't do)
9:44 - Adding the MCP server (and why it's better)
12:04 - The five rules for using it well
13:06 - Writing decisions back to the brain

#Gbrain #HermesAgent #SecondBrain #AIAgents #MCP #KnowledgeGraph #AITools #Obsidian #Productivity

#### Tags
`ai`, `hermes`, `gbrain`, `hermes agent`

#### URLs
- https://github.com/garrytan/gbrain

## Related Concepts
- [[concepts/ai-agent|AI Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)
- [[concepts/persistent-memory|Persistent Memory]] — [Wikipedia](https://en.wikipedia.org/wiki/Persistent_memory)
- [[concepts/second-brain|Second Brain]] — [Wikipedia](https://en.wikipedia.org/wiki/Enteric_nervous_system)
- [[concepts/open-source|Open-Source Software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_software)
- [[concepts/knowledge-base|Knowledge Base]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_base)
- [[concepts/vector-search|Vector Search]]
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_window)
- [[concepts/web-scraping|Data Ingestion]]
- [[concepts/knowledge-base|Agent Memory]]
- [[concepts/rag|RAG]]
- [[concepts/metadata-search|Hybrid Search]]
- [[concepts/knowledge-graph|Knowledge Graph]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_graph)
- [[concepts/web-data-automation|MCP]]
- Git Repository — [Wikipedia](https://en.wikipedia.org/wiki/Git)
- [[concepts/markdown|Markdown]] — [Wikipedia](https://en.wikipedia.org/wiki/Markdown)

## Related Entities
- [[entities/gbrain|Gbrain]]
- [[entities/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[entities/tonbis-ai-garage|Tonbi's AI Garage]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- PostgreSQL — [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)
- [[entities/openrouter|OpenRouter]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenRouter)
- [[entities/obsidian|Obsidian]] — [Wikipedia](https://en.wikipedia.org/wiki/Obsidian)
- bun — [Wikipedia](https://en.wikipedia.org/wiki/Bun)
- [[entities/mcp|MCP]]
- [[entities/git|Git]] — [Wikipedia](https://en.wikipedia.org/wiki/Git)
- Markdown — [Wikipedia](https://en.wikipedia.org/wiki/Markdown)