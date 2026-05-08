---
wiki-ingested: true
title: "Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases"
created: "2026-04-10 14:05"
date: 2026-04-10
source: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: model-efficiency-compression
---
## Karpathy's LLM Wiki: Beyond RAG for Persistent Knowledge Bases
**Clip title:** Karpathy's LLM Wiki: Watch Me Build a [[concepts/knowledge-base|Knowledge Base]] From
Scratch!
**Author / channel:** [[entities/onchain-ai-garage|Onchain AI Garage]]
**URL:** https://www.youtube.com/watch?v=zVEb19AwkqM

### Summary
The video introduces [[entities/andrej-karpathy|Andrej Karpathy]]'s innovative "[[concepts/llm-wiki-pattern|LLM Wiki pattern]]," a
paradigm shift from traditional [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) models
for managing personal [[concepts/knowledge-bases|knowledge bases]]. Karpathy's approach advocates for a
persistent, compounding wiki maintained entirely by a [[concepts/large-language-model|Large Language Model]]
(LLM). The fundamental problem addressed is that [[concepts/traditional-rag|traditional RAG]] systems
repeatedly "rediscover" knowledge from scratch with each query, lacking
accumulation, [[concepts/persistence|persistence]] of [[concepts/cross-references|cross-references]], and often locking user data
within provider systems.

The core idea behind the [[concepts/llm-wiki-pattern|LLM Wiki pattern]] is to offload the repetitive,
painstaking work of knowledge maintenance to the LLM, allowing the human
user to focus on higher-level tasks like curating sources and formulating
insightful questions. The architecture comprises three layers: "Raw
Sources" (immutable, read-only articles, papers, [[concepts/images|images]], etc.), "The Wiki"
(LLM-owned [[concepts/markdown|markdown]] [[concepts/files|files]] containing summaries, entities, and concepts,
which the LLM creates, updates, and cross-links), and a "Schema" (a
[[concepts/configuration|configuration]] file guiding the LLM on conventions and workflows, co-evolved
by the user and LLM). The presenter uses the analogy of the wiki as a
codebase, [[concepts/obsidian|Obsidian]] (a popular markdown editor) as the Integrated
[[concepts/coding-workspace|Development Environment]] (IDE), the LLM as the programmer, and the schema as
the [[concepts/style|style]] guide.

The system operates through three primary workflows: Ingest, Query, and
Lint. The **Ingest** [[concepts/workflow|workflow]] involves feeding new source documents into a
raw directory. The LLM automatically reads these, extracts key information,
writes summary pages, updates existing concept and entity pages with
integrated knowledge, [[concepts/flags|flags]] contradictions, updates the master index, and
logs all changes. This process incrementally "compiles" knowledge, making
the wiki smarter with each new input. The **Query** workflow allows users
to ask complex questions against the entire wiki. The LLM searches relevant
pages, synthesizes answers, and, crucially, can file valuable answers back
into the wiki as new, cross-referenced pages, leading to a [[concepts/compounding-knowledge|compounding knowledge]] effect. Finally, **Lint** acts as a health-check mechanism,
enabling the LLM to identify and suggest fixes for inconsistencies, missing
links, or data gaps, thus ensuring the wiki's [[concepts/integrity|integrity]] as it grows. The
division of labor is clear: humans direct and think, while the LLM [[entities/agent|agent]]
handles [[concepts/summarization|summarization]], [cross-referencing](https://en.wikipedia.org/wiki/Cross-referencing), and maintenance, overcoming the
human tendency to abandon wikis due to high upkeep.

This LLM-driven wiki approach offers several philosophical advantages. It
is **explicit**, providing a visible and navigable knowledge artifact
without hidden embeddings or opaque [[concepts/memory|memory]]; **yours**, as all data resides
locally on your machine, free from vendor lock-in; built on **file over
app** principles, utilizing universal markdown formats for interoperability
with any tool; and supports a "bring your own AI" [[concepts/philosophy|philosophy]], allowing
users to plug in various LLMs (like [[entities/claude|Claude]], GPT, [[entities/codex|Codex]], or [[concepts/open-source|open-source]]
models), and even fine-tune them directly on their wiki's data. This
pattern is versatile, with potential applications ranging from in-depth
research and personal [[concepts/self-improvement|self-improvement]] tracking to business intelligence,
developing trading strategies, enhancing reading comprehension, and aiding
due diligence.

The video concludes with a practical demonstration of building a "Trading
Strategies Knowledge Base" using [[concepts/claude-code|Claude Code]]. This involves setting up the
directory [[concepts/structure|structure]], ingesting raw trading video transcripts, defining a
schema for concepts and entities, and then showcasing how the LLM generates
linked concept pages (e.g., "draw on liquidity," "breaker blocks"). The
demo vividly illustrates how querying the wiki can not only retrieve
existing knowledge but also prompt the LLM to perform web searches for
external information and integrate it, further enriching the knowledge
base. The key takeaway is the creation of a persistent, ever-growing
knowledge artifact where intelligence compounds over time, significantly
reducing manual maintenance burden and empowering users with a highly
customized, explicit, and extensible knowledge system.

## Related Concepts
- [[concepts/llm-wiki|LLM Wiki pattern]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Wiki_pattern)
- [[concepts/retrieval-augmented-generation-rag|Retrieval Augmented Generation (RAG)]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation_%28RAG%29)
- [[concepts/persistent-knowledge-bases|Persistent Knowledge Bases]] — [Wikipedia](https://en.wikipedia.org/wiki/Persistent_Knowledge_Bases)
- [[concepts/knowledge-management|Knowledge Base management]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Base_management)
- [[concepts/large-language-model-llm|Large Language Model (LLM)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Model_%28LLM%29)
- [Knowledge compilation](https://en.wikipedia.org/wiki/Knowledge_compilation) — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_compilation)
- Ingest [[concepts/workflow|workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/Ingest_workflow)
- [Query workflow](https://en.wikipedia.org/wiki/Query_workflow) — [Wikipedia](https://en.wikipedia.org/wiki/Query_workflow)
- [Lint workflow](https://en.wikipedia.org/wiki/Lint_workflow) — [Wikipedia](https://en.wikipedia.org/wiki/Lint_workflow)
- [[concepts/markdown|Markdown]] — [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
- [[concepts/agentic-ai|Agentic workflows]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_workflows)
- [File over app principle](https://en.wikipedia.org/wiki/File_over_app_principle) — [Wikipedia](https://en.wikipedia.org/wiki/File_over_app_principle)
- Cross-referencing — [Wikipedia](https://en.wikipedia.org/wiki/Cross-referencing)
- [[concepts/data-conceptsintegrityintegrity|Data integrity]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_integrity)
