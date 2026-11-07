---
wiki-ingested: true
title: "BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search"
date: 2026-10-03
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: ai-agents
group: agent-systems-skills
aliases:
  - "lab-notes/2026-10-03-BM25s-Unreasonable-Effectiveness-in-LLM-Driven-Agentic-S"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search
**Clip title:** The unreasonable effectiveness of [[concepts/bm25-ranking|BM25]] for agentic search — Jo Kristian Bergum, Hornet.dev
**[[entities/tasia-custode|Author]] / channel:** AI Engineer
**URL:** https://www.youtube.com/watch?v=fZH97QHHYjY

### Summary
This video by [[entities/jo-kristian-bergum|Jo Kristian Bergum]], CEO of Hornet Dev, discusses "The unreasonable effectiveness of [[concepts/bm25-ranking|BM25]] for [[concepts/agentic-search|agentic search]]," highlighting the unexpected resurgence of this 30-year-old [[concepts/lexical-scoring-function|lexical scoring function]] in the era of [[concepts/demystifying-llms|Large Language Models]] (LLMs). Bergum defines agentic search as "search inside an [[concepts/operational-loop|agent loop]]," where an LLM attempts to accomplish a task requiring [[concepts/knowledge-bases|information retrieval]]. A successful agentic search system needs three core components: a capable LLM that can use tools and formulate queries, a "[[concepts/harness|harness]]" to expose [[concepts/document-retrieval|retrieval]] functions to the model, and an efficient retrieval [[concepts/engine|engine]] capable of handling vast document sets.

BM25, short for "Best Match 25," is fundamentally a scoring function that evaluates the relevance of a document to a query. Its renewed effectiveness isn't due to changes in BM25 itself, but rather the [[concepts/emergent-behavior|emergence]] of a "more powerful user" – advanced LLMs. These models possess extensive general knowledge, enabling them to formulate longer, more precise queries using operators and phrases gleaned from web search. This capability allows LLMs to leverage BM25's exact matching strengths for [[concepts/nodes|entities]], dates, and specific codes more effectively than human users, thereby transforming BM25 from a simple baseline into an interpretable primitive within complex [[concepts/multi-agent-workflows|agent workflows]].

Bergum emphasizes the critical role of [[concepts/retrieval-quality|retrieval quality]] due to the inherent limitation of LLM [[concepts/context-windows|context windows]], likening them to a single "floppy disk" of context compared to potentially billions of [[concepts/tokens|tokens]] in a full corpus. He uses the "BrowseComp-Plus" [[concepts/deep-research-function|deep research]] benchmark to illustrate that while LLMs (like [[concepts/gpt-4|GPT-4]]) exhibit high accuracy when provided with the correct evidence (93% [[entities/oracle|oracle]] accuracy), this accuracy significantly drops when the model must retrieve that information itself (e.g., to 64-82%). This demonstrates that [[concepts/reasoning|reasoning]] is not the bottleneck; rather, effective retrieval is paramount. Consequently, traditional single-query search [[concepts/model-performance-metrics|evaluation metrics]] are becoming less relevant, with the focus shifting to evaluating the entire agent-retriever system's ability to successfully complete a given task.

Hornet Dev is actively betting on BM25 as a fundamental primitive for agentic search [[concepts/infrastructure|infrastructure]]. Its effectiveness stems from being "exact" (good for specific data points), "cheap" (lower computational cost than embedding [[concepts/ai-inference|inference]]), and "explainable" (models can understand the literal matches, aiding query reformulation). The combination of BM25 for initial broad retrieval and basic [[concepts/command-line-interface|command-line]] tools like `grep` for refinement within a virtual file system (VFS) based workspace is presented as a powerful paradigm. This approach leverages LLMs' strengths in [[concepts/coding|coding]] and tool usage, enabling [[concepts/progressive-disclosure|progressive disclosure]] and efficient navigation of retrieved information, ultimately offering significant performance and [[concepts/leftover-utilization|cost savings]] for companies building web search [[concepts/infrastructure|infrastructure]] for agents.

### Video Description & Links
#### Description
BM25 stands for Best Match 25, and the number is not a version. A group of researchers ran a long series of scoring experiments decades ago, the twenty fifth one worked best, and the name simply stuck. Jo Kristian Bergum has spent more than twenty years on search and retrieval, and his claim is that this thirty year old lexical function is making a comeback without having changed at all. What changed is the user. A model already knows entities, companies, dates, postal codes and product identifiers, so it can write queries that are far longer and far more specific than anything a person would type, and it can fire off a dozen in a row. The old AOL query logs showed people searching in two or three words, and human query logs still look about the same today. An agent is a fundamentally more powerful user of a dumb tool.

The sharpest evidence comes from a deep research benchmark of 830 riddle like questions over roughly one hundred thousand web documents. Stuff the [[concepts/solution|answer]] bearing documents directly into the [[concepts/context-length|context window]] and accuracy is high, even for older models, which means reasoning was never the bottleneck. Hand the same model a search tool instead and accuracy drops, because now it depends on query formulation and on the retriever. Bergum compares a context window to a floppy disc, about 1.4 megabytes then and roughly 350,000 tokens now before quality degrades, so something still has to decide what goes in. He closes on a pattern he likes: dump retrieved documents into a file system workspace and let the model use grep and the other primitives it is already trained on.

[[entities/speaker|Speaker]] info:
- https://hornet.dev/

[[concepts/timestamps|Timestamps]]:
0:00 - A thirty year old scoring function makes a comeback
2:19 - Best Match 25, and where the name came from
3:37 - The function did not change, the user did
4:57 - A benchmark of 830 riddles
6:01 - Context windows are floppy discs
7:05 - Reasoning is not the bottleneck
8:37 - How a model formulates queries
9:44 - Which BM25 do you mean?
12:06 - Retrieved documents as a file system
14:42 - Classical evaluation is dead
16:32 - Four claims to take away

#### Tags
`ai`, `ai engineer`, `ai engineering`, `software development`, `tech`, `startups`, `software architecture`, `machine learning`

#### URLs
- https://hornet.dev/

## Related Concepts
- [[concepts/bm25|BM25]]
- [[concepts/agentic-search|agentic search]]
- [[concepts/lexical-scoring-function|lexical scoring function]]
- [[concepts/llm-driven-search|LLM-driven search]]
- [[concepts/vector-space-model|information retrieval]] — [Wikipedia](https://en.wikipedia.org/wiki/Information_retrieval)
- [[concepts/system-1-harness|agent loop]]
- [[concepts/query-formulation|query formulation]]
- [[concepts/vanishing-gradient-problem|tool use]] — [Wikipedia](https://en.wikipedia.org/wiki/Tool_use_by_non-human_animals)
- [[concepts/retrieval-quality|retrieval quality]]
- [[concepts/context-window-limitations|context window limitations]]
- [[concepts/progressive-disclosure|progressive disclosure]] — [Wikipedia](https://en.wikipedia.org/wiki/Progressive_disclosure)
- virtual file system — [Wikipedia](https://en.wikipedia.org/wiki/Virtual_file_system)

## Related Entities
- [[entities/jo-kristian-bergum|Jo Kristian Bergum]]
- [[entities/hornetdev|Hornet.dev]]
- [[entities/ai-engineer|AI Engineer]]
- [[entities/gpt-4|GPT-4]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-4)
- AOL — [Wikipedia](https://en.wikipedia.org/wiki/AOL)