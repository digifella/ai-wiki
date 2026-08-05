---
wiki-ingested: true
title: "Open Knowledge Format: Standardizing Karpathy LLM Wikis for Interoperability"
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

## Open Knowledge Format: Standardizing Karpathy LLM Wikis for Interoperability
**Clip title:** Finally, an Open Standard for the [[entities/onchain-ai-garage|Karpathy LLM Wiki]] is HERE
**[[entities/tasia-custode|Author]] / channel:** Cole Medin
**URL:** https://www.youtube.com/watch?v=T33iI6izAKw

### Summary
This video discusses the evolution of managing personal [[concepts/knowledge-bases|knowledge bases]] with [[concepts/large-language-model-llm|Large Language Models]] (LLMs), moving from individual, unstructured "LLM Wikis" to a standardized approach called the Open Knowledge Format (OKF) introduced by [[concepts/google-search|Google]]. Initially, Andrej Karpathy's concept of an LLM Wiki gained significant traction, proposing a method where an LLM agent incrementally builds and maintains a persistent, interlinked collection of [[concepts/markdown|markdown]] files. Unlike traditional [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) systems that rediscover information per query, an LLM Wiki continually processes new sources (like meeting transcripts or articles), extracts key information, [[concepts/software-updates|updates]] entity pages, revises summaries, and [[concepts/flags|flags]] contradictions, thus creating a compounding artifact or "[[concepts/personal-knowledge-management-pkm|second brain]]."

However, the video highlights a critical limitation of Karpathy's original idea: the lack of standardization. Without a common structure for [[concepts/metadata|metadata]], file organization, and cross-referencing, each person's LLM Wiki becomes unique and largely incompatible, hindering the ability to share knowledge bases efficiently among teams or across different [[concepts/ai-agents|AI agents]]. This fragmentation prevents the broader interoperability and collaborative potential that could significantly enhance AI [[concepts/agent-capabilities|agent capabilities]].

To address this, Google introduced the Open Knowledge Format (OKF), a vendor-neutral and human-friendly open specification designed to formalize the LLM-Wiki pattern into a portable and interoperable format. OKF bundles knowledge as a directory of markdown files, each featuring a small block of YAML frontmatter for structured metadata (e.g., type, title, description, tags, timestamp) and a markdown body for free-form content. This standardization allows AI agents to parse, understand, and interact with knowledge bases consistently, regardless of their origin or the specific agent being used. It also supports linking concepts to create a rich graph of [[concepts/relationships|relationships]], enabling more sophisticated knowledge traversal and query capabilities.

In conclusion, OKF represents a significant step towards a more unified and powerful future for personal and organizational AI agents. By providing a minimalist yet robust standard for knowledge representation, it unlocks unprecedented opportunities for sharing, collaboration, and efficient information processing. The ease of [[concepts/adoption|adoption]]—simply teaching an LLM agent the OKF specification—means that anyone can create, consume, and exchange these structured knowledge bundles, fostering a richer ecosystem of AI-powered "second brains" and [[concepts/swarm-intelligence|collective intelligence]]. This move from unstructured, siloed information to a standardized, interoperable format is crucial for accelerating the development and utility of [[concepts/ai-models|AI systems]].

### Video Description & Links
#### Description
Google just quietly shipped the Open Knowledge Format (OKF): an open standard that formalizes Andrej [[concepts/compounding-knowledge|Karpathy's LLM wiki]] pattern into plain markdown any AI can read with zero integration. No plugin, [[concepts/retrieval-augmented-generation-rag-pipelines|RAG pipeline]], or [[concepts/vector-databases|vector DB]]. You point your agent at a folder and ask it anything as long as it knows OKF!

You probably already have a personal agent and search that works well. And you're probably building some version of a "second brain." So why is it still basically impossible to hand your knowledge to someone else's AI and have it just work? The [[concepts/solution|answer]] is we never agreed on a format - and that's exactly what Google has now solved.

In this video I break down OKF, talk about why it's so important, and even give you a bundle so you agent can immediately search through my YouTube content.

~~~~~~~~~~~~~~~~~~~~~~~~~~

- Check out Posthog, a single platform to make your products self-driving with product analytics, sessions replay, feature flags, and more:
https://go.fundlevel.co/cmph

~~~~~~~~~~~~~~~~~~~~~~~~~~

- The Dynamous [[concepts/autonomous-ai-coding-agent|Agentic Coding]] Course is now FULLY released - learn how to build reliable and repeatable systems for [[concepts/ai-assisted-coding|AI coding]]: 
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
- [[concepts/personal-knowledge-management|Personal Knowledge Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Personal_Knowledge_Management)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/knowledge-base|Knowledge Base]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Base)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/data-management|Data Structuring]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_Structuring)
- [[concepts/semantic-interoperability|Semantic Interoperability]] — [Wikipedia](https://en.wikipedia.org/wiki/Semantic_Interoperability)
- Markdown Files — [Wikipedia](https://en.wikipedia.org/wiki/Markdown_Files)
- YAML Frontmatter — [Wikipedia](https://en.wikipedia.org/wiki/YAML_Frontmatter)
- [[concepts/visual-rag|Retrieval Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation)
- [[concepts/second-brain|Second Brain]] — [Wikipedia](https://en.wikipedia.org/wiki/Second_Brain)
- Vendor-Neutral Specification — [Wikipedia](https://en.wikipedia.org/wiki/Vendor-Neutral_Specification)
- [[concepts/knowledge-graph|Knowledge Graph]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Graph)
- Metadata Standardization — [Wikipedia](https://en.wikipedia.org/wiki/Metadata_Standardization)
- [[concepts/team-effectiveness|Collective Intelligence]] — [Wikipedia](https://en.wikipedia.org/wiki/Collective_Intelligence)

## Related Entities
- [[entities/cole-medin|Cole Medin]] — [Wikipedia](https://en.wikipedia.org/wiki/Cole_Medin)
- [[entities/andrej-karpathy|Andrej Karpathy]] — [Wikipedia](https://en.wikipedia.org/wiki/Andrej_Karpathy)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- Open Knowledge Format — [Wikipedia](https://en.wikipedia.org/wiki/Open_Knowledge_Format)
- LLM Wiki — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Wiki)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- RAG — [Wikipedia](https://en.wikipedia.org/wiki/RAG)
- Vector DB — [Wikipedia](https://en.wikipedia.org/wiki/Vector_DB)
- AI Agents — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/knowledge-management|Personal Knowledge Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Personal_Knowledge_Management)
- Second Brain — [Wikipedia](https://en.wikipedia.org/wiki/Second_Brain)