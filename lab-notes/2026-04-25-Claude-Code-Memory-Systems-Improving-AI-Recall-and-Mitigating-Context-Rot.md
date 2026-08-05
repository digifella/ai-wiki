---
wiki-ingested: true
title: "Claude Code Memory Systems: Improving AI Recall and Mitigating Context Rot"
date: 2026-04-25
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: anthropic-claude
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-04-25 · API: [[concepts/gemini|Gemini]] 2.5 Flash · Modes: Summary

---

## Claude Code Memory Systems: Improving AI Recall and Mitigating Context Rot
**Clip title:** Every Claude Code Memory System Compared (So You Don't Have To)
**Author / channel:** Simon Scrapes
**URL:** https://www.youtube.com/watch?v=UHVFcUzAGlM

### Summary
This video provides a comprehensive overview of six distinct levels of [[concepts/memory|memory]] systems designed for AI [[concepts/agents|agents]], specifically within the context of [[concepts/claude-code|Claude Code]]. The main topic revolves around addressing the challenge of "[[concepts/context-rot|context rot]]" in [[concepts/large-language-models|Large Language Models]] (LLMs) and how different [[concepts/memory-structures|memory structures]] can improve an AI's ability to [[concepts/recall|recall]] and utilize information effectively across various [[concepts/scenarios|use cases]]. The [[entities/speaker|speaker]], who has developed his own "[Agentic OS](https://en.wikipedia.org/wiki/Agentic_OS)" (a business brain [[concepts/running|running]] across his digital operations), shares his research on what truly works, scales, and avoids unnecessary complexity.

The first two levels focus on native and enhanced memory within [[concepts/ai-assisted-coding|Claude Code]]. Level 1 covers "What Ships with Claude Code," introducing `Claude.md` for storing project-specific rules and brand information, which can be configured at global, workspace, or project levels. To mitigate "context rot"—where an AI's [[concepts/recall|recall]] [[concepts/accuracy|accuracy]] diminishes with increased context—it's advised to keep `Claude.md` concise (under 200 lines) and reference larger documents. This level also includes "Auto memory" (`memory.md`), which quietly takes notes on tasks and feedback, creating an indexed [[concepts/structure|structure]] of separate memory [[concepts/files|files]]. Level 2, "Reliable Memory with [[concepts/hooks|Hooks]]," builds upon this by incorporating Claude Code's `SessionStart` [[concepts/hooks|hooks]]. This ensures the `memory.md` index is automatically injected into every [[concepts/session|session]], improving [[concepts/software-reliability|reliability]]. It also suggests a structured memory system with `general.md`, `domain/[topic].md`, and `tools/[tool].md` [[concepts/files|files]], which can be regularly "reorganized" by Claude to keep them clean and consolidated. This level also opens possibilities for sharing domain knowledge among teammates.

Levels 3 and 4 escalate to more sophisticated memory retrieval methods. Level 3, "Memory By Meaning, Not [[concepts/keywords|Keywords]]," addresses the [[concepts/scaling|scaling]] limitations of keyword-based search. It introduces `Memsearch`, a Claude Code plugin that leverages [[concepts/natural-language-search|semantic search]], similar to [[concepts/openclaw|OpenClaw]]'s memory architecture. `Memsearch` chunks documents into semantically rich vectors and uses a `UserPromptSubmit` hook to automatically inject the top three semantic matches into Claude's context when a query is made, thus improving recall by meaning rather than exact [[concepts/keywords|keywords]]. While `Claude-mem` is mentioned as an alternative, its reliance on MCP tools and non-human-readable [[entities/storage|storage]] makes `Memsearch` a preferred choice for readability and automatic injection. Level 4, "Searching Your Conversations Verbatim," is for when precise recall of past conversations is critical. It uses `Mempalace`, a local-first, free RAG ([[concepts/answer-generation|Retrieval-Augmented Generation]]) system that stores conversations verbatim in a symbolic language called AAAK, allowing for rapid, exact retrieval of specific data points through a "memory palace" [[concepts/structure|structure]] of "wings, rooms, closets, and drawers."

The final two levels offer advanced, cross-tool and [[concepts/knowledge-base|knowledge-base]] solutions. Level 5, "A [[concepts/knowledge-base|Knowledge Base]] That Builds Itself," shifts from remembering conversations to building an interconnected knowledge base across various topics. Inspired by Karpathy's [[concepts/llm-wiki|LLM Wiki]], it involves organizing source documents (`raw` folder) and a dynamically maintained wiki (`wiki` folder) where Claude writes and [[concepts/cross-references|cross-references]] information. This system, often visualized through [[concepts/obsidian|Obsidian]]'s [[concepts/knowledge-graphs|knowledge graphs]], is ideal for [[entities/deep-research|deep research]] and connecting diverse information. `Recall` is presented as a hosted alternative, offering ease of use but compromising [[concepts/data-ownership|data ownership]] and being more suited for content consumption. Level 6, "One Memory Across Every AI Tool," tackles the ultimate challenge of unifying memory across all [[concepts/ai-tools|AI tools]] (Claude Code, [[entities/chatgpt|ChatGPT]], mobile, etc.). `OpenBrain` by [[entities/nate-jones|Nate Jones]] is highlighted as a robust, portable [[concepts/solution|solution]] that stores all memory in a user-owned PostgreSQL database (via Supabase). This central database, accessed via Supabase Edge Functions, acts as a single source of truth that all [[concepts/ai-tools|AI tools]] can query, ensuring real-time [[concepts/logical-consistency|consistency]]. `Mem0.ai` is also mentioned as a production-ready, cross-tool memory layer, but like `Recall`, it stores data on third-party servers.

In conclusion, the video recommends a progressive approach to adopting memory systems. For beginners, start with Level 1 by optimizing `Claude.md` and `memory.md`. Those with more experience can move to Level 2 by implementing John's hooks for reliable memory injection. If losing old decisions across months of work, users might consider Level 3 (`Memsearch`) for summarized recall or Level 4 (`Mempalace`) for word-for-word retrieval. Levels 5 and 6 cater to specific advanced needs: Level 5 for building a deep, interconnected knowledge base (Karpathy's [[concepts/llm-wiki|LLM Wiki]]), and Level 6 for a portable, user-owned memory system accessible across all [[entities/ai-tools|AI tools]] (`OpenBrain` or `Mem0.ai`). The [[entities/speaker|speaker]] personally implements up to Level 3 within his Agentic OS, emphasizing a balance between robust functionality and manageable complexity. Many of these levels can be stacked, allowing users to build increasingly powerful and integrated [[concepts/ai-memory-systems|AI memory systems]] tailored to their needs.

## Related Concepts
- [[concepts/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[concepts/ai-memory-systems|AI Memory Systems]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Memory_Systems)
- [[concepts/ai-recall|AI Recall]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Recall)
- [[concepts/context-rot|Context Rot]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Rot)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/memory-levels|Memory Levels]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory_Levels)
- [[concepts/large-language-models|Large Language Models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLMs%29)
- [[concepts/memory-structures|Memory Structures]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory_Structures)
- Agentic OS — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_OS)
- [[concepts/vector-database-retrieval|Semantic Search]] — [Wikipedia](https://en.wikipedia.org/wiki/Semantic_Search)
- [[concepts/data-embedding|Vector Embeddings]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_Embeddings)
- [[concepts/retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval-Augmented_Generation_%28RAG%29)
- [Programming Hooks](https://en.wikipedia.org/wiki/Programming_Hooks) — [Wikipedia](https://en.wikipedia.org/wiki/Programming_Hooks)
- [[concepts/chunking-strategies|Semantic Chunking]] — [Wikipedia](https://en.wikipedia.org/wiki/Semantic_Chunking)
- Symbolic Language (AAAK) — [Wikipedia](https://en.wikipedia.org/wiki/Symbolic_Language_%28AAAK%29)
- [Automated Memory Indexing](https://en.wikipedia.org/wiki/Automated_Memory_Indexing) — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Memory_Indexing)
- [Local-first RAG](https://en.wikipedia.org/wiki/Local-first_RAG) — [Wikipedia](https://en.wikipedia.org/wiki/Local-first_RAG)
- [Scalable AI Memory](https://en.wikipedia.org/wiki/Scalable_AI_Memory) — [Wikipedia](https://en.wikipedia.org/wiki/Scalable_AI_Memory)
