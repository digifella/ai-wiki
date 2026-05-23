---
wiki-ingested: true
title: "Context Engineering: Unlocking AI Performance via RAG and GraphRAG"
date: 2026-05-04
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: science-physics
group: engineering-systems-robotics-autonomous-vehicles
---
# Context Engineering: Unlocking AI Performance via RAG and GraphRAG
Generated: 2026-05-04 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: [[concepts/summary|Summary]]

---

## Context Engineering: Unlocking AI Performance via RAG and GraphRAG
**Clip title:** How RAG, [[concepts/graph-retrieval-augmented-generation|GraphRAG]], and [[concepts/external-knowledge|Context Engineering]] Improve AI Performance
**Author / channel:** [[entities/ibm|IBM]] Technology
**URL:** https://www.youtube.com/watch?v=pN-LfxNFiTc

### Summary
The video by [[entities/martin-keen|Martin Keen]] from [[entities/ibm|IBM]] introduces "[[concepts/context-engineering|Context Engineering]]" as the crucial missing piece for unlocking the full potential of [[concepts/ai-models|AI models]]. He argues that while current [[concepts/frontier-ai-models|frontier AI models]] [[entities/excel|excel]] at [[concepts/reasoning|reasoning]] and [[concepts/complex-tasks|complex tasks]], they often confidently provide incorrect or generic [[concepts/responses|responses]] because they lack relevant, specific context. The actual bottleneck isn't the model's inherent intelligence, but its ability to access and understand the appropriate information pertinent to a given query or task.

Context Engineering is defined as the ability of an AI system to discover the correct data, comprehend its meaning, and apply it effectively in real-time, all while adhering to existing constraints and [[concepts/governance|governance]] rules. Keen illustrates this with an example of an analyst preparing for a client meeting. Without context engineering, an AI would generate a beautifully formatted but generic meeting document. With it, the AI would intelligently pull in specific, relevant information like recent support tickets and deal history, while omitting sensitive data like internal [[concepts/pricing|pricing]] discussions due to predefined role-based access, thus creating a truly useful and [[concepts/secure|secure]] [[concepts/preparation|preparation]] document. This [[concepts/highlights|highlights]] that effective context provision is about delivering not just *more* data, but the *right* data, subject to appropriate controls.

The [[concepts/adoption|implementation]] of robust context engineering [[concepts/faces|faces]] significant challenges, primarily because enterprise data is highly fragmented. It resides in various locations (databases, document stores, APIs, [[concepts/saas|SaaS]], cloud, on-premise), comes in diverse formats (structured, unstructured), changes at different rates, and is governed by complex access permissions. Keen identifies four core pillars necessary for a successful context engineering [[concepts/solution|solution]]: 1) **Connected Access**, which provides AI visibility across the entire data estate, preferably through "zero-copy federation" to ensure data freshness and maintain original access controls. 2) A **Knowledge Layer**, which adds meaning to raw data by applying entity resolution, mapping [[concepts/relationships|relationships]] and hierarchies, and incorporating institutional knowledge and decision traces.

The final two pillars are **Precision Retrieval** and **Runtime [[concepts/governance|Governance]]**. Precision Retrieval emphasizes delivering focused, precise context, not just more data. This involves filtering documents based on intent, user role, time, and policy, avoiding overwhelming the AI with irrelevant information. Keen mentions various techniques within this, such as [[concepts/agentic-rag-systems|agentic RAG]] (iterative data requests), [[concepts/entity-relation-graphs|graph RAG]] (navigating contextual [[concepts/relationships|relationships]]), and context compression (summarizing and prioritizing relevant information). Runtime Governance ensures that all data interactions are defensible and compliant, by enforcing permissions live at both retrieval and response times. Ultimately, Keen concludes that the intelligence and [[concepts/reasoning-capabilities|reasoning capabilities]] of [[concepts/ai-models|AI models]] are no longer the primary roadblocks; instead, it is the sophisticated engineering of context that differentiates an ordinary AI [[concepts/output|output]] from a truly intelligent and impactful one. A model is only as good as the context it can access.

### Video Description & Links
#### Description
Learn more about GraphRAG here → https://ibm.biz/BdpyvE

Context is the biggest bottleneck in getting AI to do what you want. Martin Keen explains how context engineering, RAG, GraphRAG, and precision retrieval improve relevance, governance, and AI performance. Discover how to build more reliable, context‑aware systems. 🤖

AI news moves fast. Sign up for a monthly newsletter for AI updates from IBM → https://ibm.biz/BdpyvX

#agenticai #aiinfrastructure #aisystems #contextengineering

#### Tags
`IBM`, `IBM Cloud`

#### URLs
- https://ibm.biz/BdpyvE
- https://ibm.biz/BdpyvX

## Related Concepts
- [[concepts/context-engineering|Context Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Engineering)
- [[concepts/rag-relevance-awareness-graph|RAG (Relevance-Awareness Graph)]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG_%28Relevance-Awareness_Graph%29)
- [[concepts/ai-performance-optimization|AI performance optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_performance_optimization)

## Related Entities
- [[entities/ibm-technology|IBM Technology]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM_Technology)
- [[entities/martin-keen|Martin Keen]] — [Wikipedia](https://en.wikipedia.org/wiki/Martin_Keen)