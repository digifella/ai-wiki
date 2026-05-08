---
type: concept
domain: ai-agents
group: ai-foundations-concepts
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
updated: 2026-05-01
---
# Information Pruning

Information pruning is a [[concepts/external-knowledge|context engineering]] technique used in [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) systems to improve response quality by reducing [[concepts/data-hallucination|hallucination]]. The method operates on the principle that not all retrieved information is equally relevant or reliable. By selectively filtering and re-ranking retrieved documents or passages, information pruning removes noisy, contradictory, or tangential content that can mislead language models into generating inaccurate outputs.

## How It Works

The technique typically involves two stages: re-ranking retrieved information according to relevance or quality metrics, and then pruning away lower-ranked items before they reach the [[concepts/statistical-language-modeling|language model]]. This reduces the cognitive load on the model and decreases the likelihood that it will blend conflicting information or fabricate details to reconcile inconsistencies in the context. The specific implementation can vary, from simple relevance thresholds to more sophisticated self-editing mechanisms that evaluate information [[concepts/logical-consistency|consistency]].

## Applications and Context

Information pruning addresses a known limitation of [[concepts/contextualized-language-understanding|RAG systems]], where retrieving large quantities of documents can paradoxically harm performance. By curating the information passed to the language model, the technique helps maintain focus on the most pertinent retrieved content, leading to more grounded and factually accurate [[concepts/responses|responses]].

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)