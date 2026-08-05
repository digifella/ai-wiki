---
wiki-ingested: true
title: "Karpathy's LLM Wiki: Beyond RAG for Persistent Knowledge Bases"
created: "2026-04-07 09:30"
date: 2026-04-07
source: lab-summary
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Karpathy's LLM Wiki: Beyond RAG for Persistent Knowledge Bases
**Clip title:** Karpathy's LLM Wiki: Watch Me Build a [[concepts/knowledge-base|Knowledge Base]] From
Scratch!
**Author / channel:** Onchain AI Garage
**URL:** https://www.youtube.com/watch?v=zVEb19AwkqM

### Summary
The video introduces Andrej Karpathy's innovative "LLM Wiki pattern," a
paradigm shift from traditional [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) models
for managing personal knowledge [[concepts/number-systems|bases]]. Karpathy's approach advocates for a
persistent, compounding wiki maintained entirely by a [[concepts/large-language-model|Large Language Model]]
(LLM). The fundamental problem addressed is that [[concepts/traditional-rag|traditional RAG]] systems
repeatedly "rediscover" knowledge from scratch with each query, lacking
accumulation, [[concepts/persistence|persistence]] of [[concepts/cross-references|cross-references]], and often locking user data
within provider systems.

The core idea behind the LLM Wiki pattern is to offload the repetitive,
painstaking work of knowledge maintenance to the LLM, allowing the human
user to focus on higher-level tasks like curating sources and formulating
insightful questions. The architecture comprises three layers: "Raw
Sources" (immutable, read-only articles, papers, [[concepts/images|images]], etc.), "The Wiki"
(LLM-owned [[concepts/markdown|markdown]] [[concepts/files|files]] containing summaries, entities, and concepts,
which the LLM creates, updates, and cross-links), and a "Schema" (a
configuration file guiding the LLM on conventions and workflows, co-evolved
by the user and LLM). The presenter uses the analogy of the wiki as a
codebase, [[concepts/obsidian|Obsidian]] (a popular markdown editor) as the Integrated
Development Environment (IDE), the LLM as the programmer, and the schema as
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
users to plug in various LLMs (like [[concepts/claude|Claude]], GPT, [[concepts/codex|Codex]], or [[concepts/reasoning-models|open-source models]]), and even fine-tune them directly on their wiki's data. This
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
- [[concepts/knowledge-bases|Knowledge Bases]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Bases)
- [[concepts/persistent-knowledge-bases|Persistent Knowledge Bases]] — [Wikipedia](https://en.wikipedia.org/wiki/Persistent_Knowledge_Bases)
- [[concepts/large-language-models-llm|Large Language Models (LLM)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLM%29)
- LLM [[entities/agent|Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Agent)
- [Knowledge Ingestion](https://en.wikipedia.org/wiki/Knowledge_Ingestion) — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Ingestion)
- [[concepts/ai-powered-research-tools|Knowledge Synthesis]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Synthesis)
- [Knowledge Compounding](https://en.wikipedia.org/wiki/Knowledge_Compounding) — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Compounding)
- Markdown-based [[concepts/knowledge-base|Knowledge Base]] — [Wikipedia](https://en.wikipedia.org/wiki/Markdown-based_Knowledge_Base)
- [Schema-driven Workflows](https://en.wikipedia.org/wiki/Schema-driven_Workflows) — [Wikipedia](https://en.wikipedia.org/wiki/Schema-driven_Workflows)
- [[concepts/data-conceptsintegrityintegrity|Data Integrity]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_Integrity)
- [[concepts/fine-tuning|LLM Fine-tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Fine-tuning)
- File-over-app [[concepts/philosophy|Philosophy]] — [Wikipedia](https://en.wikipedia.org/wiki/File-over-app_Philosophy)
- Cross-referencing — [Wikipedia](https://en.wikipedia.org/wiki/Cross-referencing)
- [[concepts/information-extraction|Information Extraction]] — [Wikipedia](https://en.wikipedia.org/wiki/Information_Extraction)
- [Local-first AI](https://en.wikipedia.org/wiki/Local-first_AI) — [Wikipedia](https://en.wikipedia.org/wiki/Local-first_AI)
- [[concepts/transformer-reinforcement-learning|Open-source models]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_models)
