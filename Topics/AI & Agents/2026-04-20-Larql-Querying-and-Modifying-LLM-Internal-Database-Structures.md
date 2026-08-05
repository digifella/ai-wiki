---
wiki-ingested: true
title: "[Larql](https://en.wikipedia.org/wiki/Larql) Querying and Modifying LLM Internal Database Structures"
created: "2026-04-20 05:32"
date: 2026-04-20
source: lab-summary
source_type: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
  - "enrich"
web-enrich: true
wiki-ready: true
domain: ai-agents
group: model-efficiency-compression
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Larql: Querying and Modifying LLM Internal Database Structures
**Clip title:** LLMs Are Databases - So Query Them
**Author / channel:** Chris Hay
**URL:** https://www.youtube.com/watch?v=8Ppw8254nLI

### Summary
This video presents a groundbreaking perspective on Large Language Models (LLMs), arguing that they are not merely *analogous* to graph databases, but are *physically* organized as such at the level of their weights. The presenter introduces "Larql" (Lazarus Query Language), a tool designed to interact directly with an LLM's internal structure, allowing users to query and manipulate its knowledge like a conventional database. Using a Gema 3 model, the video demonstrates how this novel approach can uncover the granular details of an LLM's learned representations.

The demonstration begins by revealing the Gema 3 model's architecture, comprising 34 layers and nearly 350,000 features, segmented into "Syntax," "Knowledge," and "Output" bands. Through [[concepts/commands|commands]] like `STATS` and `DESCRIBE "France"`, Larql illustrates how the model processes information. Early layers focus on syntax, middle layers on knowledge extraction, and later layers on output formulation. A key insight is the concept of "[polosemanticity](https://en.wikipedia.org/wiki/Polosemanticity)," where individual features (akin to columns in the underlying data structure) are reused across different layers and contexts to represent various, sometimes seemingly unrelated, concepts. For instance, a single feature associated with "France" might also relate to "Australia," "CEO," or "fountain," requiring sophisticated disambiguation by the model.

The video highlights Larql's ability to not only query these intricate internal structures using SQL-like commands (e.g., retrieving France's borders or associated nationalities) but also to *modify* them directly. The presenter inserts a new fact ("The capital of Atlantis is Poseidon") into the model's weights without any retraining. Immediately, subsequent [[concepts/inference|inference]] queries about Atlantis correctly identify Poseidon as its capital. This capability is explained by understanding a "feature" as a combination of a "gate vector" (deciding when a feature activates) and a "down vector" (determining its output), forming an "edge" in the model's inherent graph. The model's ability to accurately [[concepts/solution|answer]] queries, despite polosemanticity, stems from its [[concepts/attention|attention]] mechanism, which acts as a "navigator" through this high-dimensional graph, selectively activating and suppressing relevant features based on the query's context.

In conclusion, the video posits that an LLM's [Feed-Forward Network](https://en.wikipedia.org/wiki/Feed-Forward_Network) (FFN) *is* the graph, and the attention mechanism *is* the routing or navigation system within it. This fundamental understanding unlocks significant implications: models can be queried, updated, and even modified by inserting or patching knowledge directly into their weights, bypassing traditional retraining. This decoupling of the attention mechanism from the knowledge store means these components could theoretically reside on different servers, leading to substantial gains in efficiency, reduced [[concepts/memory|memory]] footprint, and the potential to run extremely large models, such as Gema-4 31B, locally on standard hardware.

## Related Concepts
- [[concepts/larql-query-language|Larql Query Language]] — [Wikipedia](https://en.wikipedia.org/wiki/Larql_Query_Language)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/graph-databases|Graph Databases]] — [Wikipedia](https://en.wikipedia.org/wiki/Graph_Databases)
- [[concepts/gema-3-model|Gema 3 Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Gema_3_Model)
- Larql — [Wikipedia](https://en.wikipedia.org/wiki/Larql)
- Feed-Forward Network — [Wikipedia](https://en.wikipedia.org/wiki/Feed-Forward_Network)
- [[concepts/context-window|Attention Mechanism]] — [Wikipedia](https://en.wikipedia.org/wiki/Attention_Mechanism)
- Polosemanticity — [Wikipedia](https://en.wikipedia.org/wiki/Polosemanticity)
