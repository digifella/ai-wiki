---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "rag"
  - "context-engineering"
  - "hallucination-reduction"
  - "re-ranking"
  - "prompt-engineering"
aliases:
  - "Provence technique"
  - "RAG pruning"
summary: A context engineering technique that reduces hallucination in Retrieval Augmented Generation systems through re-ranking and pruning of retrieved information.
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Information Pruning

Information pruning is a [[concepts/ai-performance-optimization|context engineering]] technique employed in [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) systems to enhance response accuracy by mitigating hallucinations. It addresses the common issue where retrieved documents contain irrelevant, contradictory, or low-confidence data that can mislead language models. By selectively filtering and re-ranking retrieved passages, this method removes noisy content before it is processed, thereby constraining the model to rely on higher-quality source material.

The process typically involves two main stages: re-ranking and filtering. Re-ranking [[concepts/algorithms|algorithms]] assess the relevance of retrieved documents to the user's query, prioritizing those with the highest semantic alignment. Following this, pruning [[concepts/causes|mechanisms]] eliminate passages that fall below specific confidence thresholds or fail to meet relevance criteria. This ensures that the [[concepts/context-length|context window]] contains only the most pertinent information, reducing the [[concepts/cognitive-load|cognitive load]] on the [[concepts/statistical-language-modeling|language model]] and decreasing the likelihood of generating factually incorrect or unsupported statements.

Implementing information pruning improves the overall [[concepts/software-reliability|reliability]] of RAG pipelines by aligning the input data more closely with the generation task. It serves as a critical intermediate step between retrieval and generation, [[concepts/acting|acting]] as a [[concepts/quality-control|quality control]] layer that prevents low-value or misleading information from influencing the final output. This technique is particularly valuable in domains requiring high [[concepts/accuracy|precision]], where the presence of even minor irrelevant details can significantly degrade the utility of the generated response.
## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
