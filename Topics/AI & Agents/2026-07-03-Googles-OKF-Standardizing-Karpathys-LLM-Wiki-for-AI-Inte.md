---
wiki-ingested: true
title: "Google's OKF: Standardizing Karpathy's LLM Wiki for AI Interoperability"
date: 2026-07-03
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: model-efficiency-compression
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-07-03 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Google's OKF: Standardizing Karpathy's LLM Wiki for AI Interoperability
**Clip title:** Finally, an Open Standard for the [[entities/onchain-ai-garage|Karpathy LLM Wiki]] is HERE
**[[entities/tasia-custode|Author]] / channel:** Cole Medin
**URL:** https://www.youtube.com/watch?v=T33iI6izAKw

### Summary
This video discusses the evolution of personal knowledge [[concepts/number-systems|bases]] for [[concepts/ai-agents|AI agents]], moving from [[entities/andrej-karpathy|Andrej Karpathy]]'s "[[concepts/llm-wiki|LLM Wiki]]" concept to [[concepts/google-search|Google]]'s proposed "[[concepts/data-management|Open Knowledge Format]]" (OKF). Karpathy's initial idea involves an LLM incrementally building and maintaining a persistent, structured, and interlinked collection of [[concepts/markdown|markdown]] files. Unlike traditional [[concepts/answer-generation|Retrieval-Augmented Generation]] (RAG) systems that rediscover information per query, an LLM Wiki extracts key information from new sources, [[concepts/software-updates|updates]] entity pages and topic summaries, and [[concepts/cross-references|cross-references]] existing knowledge, effectively building a "[[concepts/personal-knowledge-management-pkm|second brain]]" that compiles and retains knowledge over time.

However, the video highlights a significant drawback with individual LLM Wikis: the lack of standardization. Since each user's agent builds its wiki in a unique way (e.g., different [[concepts/metadata|metadata]], file structures), these personal [[concepts/knowledge-bases|knowledge bases]] cannot be easily shared or optimally searched by other agents or users. This fragmentation limits collaboration and the broader utility of curated knowledge.

Google's Open Knowledge Format (OKF) is introduced as a [[concepts/solution|solution]] to this standardization problem. OKF is a vendor-neutral, portable, and interoperable specification designed to formalize the LLM-wiki pattern. It proposes organizing knowledge as a directory of markdown files, where each "concept document" includes a small block of YAML frontmatter (metadata) for structured fields (like type, title, tags, timestamp, schema) and a markdown body for free-form content. This standardization allows agents to understand and traverse knowledge bases consistently, regardless of their origin, facilitating sharing, collaboration, and more [[concepts/efficient-information-retrieval|efficient information retrieval]].

The video demonstrates the practical application of OKF by showing an example "[[concepts/ai-assisted-coding|AI-Coding]] Knowledge Bundle" containing curated [[concepts/video-resource|video content]] from the [[concepts/creator|creator]]'s YouTube channel. This bundle, adhering to the OKF specification, allows an [[concepts/ai-agent|AI agent]] to learn from the provided content, query it effectively, and even navigate related concepts as if traversing a knowledge graph. The simplicity and minimal opinionation of OKF are presented as key strengths, enabling broad [[concepts/adoption|adoption]] and ensuring that the format itself is the contribution, not a complex, proprietary system. The overarching conclusion is that a standardized format like OKF is crucial for the future of personal AI agents, empowering both producers and consumers of knowledge to build richer, more shareable, and universally accessible "second brains."

### Video Description & Links
#### Description
Google just quietly shipped the Open Knowledge Format (OKF): an open standard that formalizes Andrej [[concepts/compounding-knowledge|Karpathy's LLM wiki]] pattern into plain markdown any AI can read with [[concepts/concept-of-nothingness|zero]] integration. No plugin, [[concepts/retrieval-augmented-generation-rag-pipelines|RAG pipeline]], or vector DB. You point your agent at a folder and ask it anything as long as it knows OKF!

You probably already have a personal agent and search that works well. And you're probably building some version of a "second brain." So why is it still basically impossible to hand your knowledge to someone else's AI and have it just work? The answer is we never agreed on a format - and that's exactly what Google has now solved.

In this video I break down OKF, talk about why it's so important, and even give you a bundle so you agent can immediately search through my YouTube content.

~~~~~~~~~~~~~~~~~~~~~~~~~~

- Check out Posthog, a single platform to make your products self-driving with product analytics, sessions replay, feature [[concepts/flags|flags]], and more:
https://go.fundlevel.co/cmph

~~~~~~~~~~~~~~~~~~~~~~~~~~

- The Dynamous [[concepts/autonomous-ai-coding-agent|Agentic Coding]] Course is now FULLY released - learn how to build reliable and repeatable systems for AI coding: 
https://dynamous.ai/agentic-coding-course

- My [[concepts/open-source|open-source]] OKF bundle (clone this and point your AI at it):
https://github.com/coleam00/cole-medin-ai-coding

- Open Knowledge Format (Google):
https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf

- OKF spec (the SPEC.md file):
https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md

OKF launch blog:
https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing

Karpathy's LLM Wiki:
https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f

~~~~~~~~~~~~~~~~~~~~~~~~~~

0:00 The LLM Wiki (Karpathy's Idea)
2:04 Why We Need a Standard: Google's OKF
3:20 What OKF Standardizes
6:47 Building With the OKF Spec
8:15 Sponsor: PostHog
9:35 Why OKF Matters (Even If You Never Share)
11:00 The Gift: My AI Coding Bundle
16:25 Watching My Second Brain Query It
17:33 Is OKF Too Simple?
19:05 Try It Yourself + Wrap-up

~~~~~~~~~~~~~~~~~~~~~~~~~~

Join me as I push the limits of what is possible with AI. I'll be uploading videos weekly - at least every Wednesday at 7:00 PM CDT!

#### Tags
`ai`, `artificial intelligence`, `ai agents`, `software engineering`, `software development`, `coding`, `automation`, `saas`, `development`, `llm wiki`, `andrej karpathy`, `claudecode`, `second brain`, `hermes`, `openclaw`, `okf`, `open knowledge format`, `google`, `google okf`, `google open knowledge format`, `llm wiki 2.0`, `agent memory`, `claude code second brain`, `ai second brain`, `llm second brain`, `obsidian`, `obsidian second brain`, `obsidian ai`, `notion second brain`, `notion`, `karpathy second brain`, `claude code obsidian`

#### URLs
- https://go.fundlevel.co/cmph
- https://dynamous.ai/agentic-coding-course
- https://github.com/coleam00/cole-medin-ai-coding
- https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf
- https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
- https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
- https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f

## Related Concepts
- [[concepts/open-knowledge-format|Open Knowledge Format]] — [Wikipedia](https://en.wikipedia.org/wiki/Open_Knowledge_Format)
- [[concepts/llm-wiki|LLM Wiki]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Wiki)
- [[concepts/open-knowledge-format|Personal Knowledge Base]] — [Wikipedia](https://en.wikipedia.org/wiki/Personal_Knowledge_Base)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/visual-rag|Retrieval-Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval-Augmented_Generation)
- [[concepts/markdown-files|Markdown Files]] — [Wikipedia](https://en.wikipedia.org/wiki/Markdown_Files)
- [[concepts/structured-output|Structured Data]] — [Wikipedia](https://en.wikipedia.org/wiki/Structured_Data)
- [[concepts/persistent-memory|Persistent Memory]] — [Wikipedia](https://en.wikipedia.org/wiki/Persistent_Memory)
- [[concepts/visual-rag|AI Interoperability]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Interoperability)
- [[concepts/iterative-learning|Incremental Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Incremental_Learning)
- [[concepts/knowledge-standardization|Knowledge Standardization]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Standardization)
- [[concepts/vector-databases|Vector Databases]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_Databases)
- [[concepts/vector-store|Semantic Search]] — [Wikipedia](https://en.wikipedia.org/wiki/Semantic_Search)
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window)
- YAML Frontmatter — [Wikipedia](https://en.wikipedia.org/wiki/YAML_Frontmatter)
- [[concepts/knowledge-graph|Knowledge Graph]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Graph)

## Related Entities
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/andrej-karpathy|Andrej Karpathy]] — [Wikipedia](https://en.wikipedia.org/wiki/Andrej_Karpathy)
- [[entities/cole-medin|Cole Medin]] — [Wikipedia](https://en.wikipedia.org/wiki/Cole_Medin)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- Posthog — [Wikipedia](https://en.wikipedia.org/wiki/Posthog)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)