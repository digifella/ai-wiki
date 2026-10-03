---
type: concept
domain: ai-agents
group: applied-ai-workflows
tags:
  - "concept"
  - "rag"
  - "retrieval"
  - "re-ranking"
  - "context-engineering"
  - "hallucination-reduction"
  - "pruning"
aliases:
  - "k-nearest retrieval"
  - "top-k selection"
summary: A context engineering technique that reduces hallucination in RAG systems by re-ranking and pruning retrieved results.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Top K Retrieval

Top K Retrieval is a context engineering technique employed in Retrieval-Augmented Generation (RAG) systems to enhance response quality by selectively filtering retrieved documents. Instead of passing all search results to a language model, the system ranks the retrieved passages and retains only the top K most relevant results before the generation stage. This approach limits the volume of potentially conflicting or irrelevant information that reaches the model, thereby reducing hallucination and improving answer accuracy.

The mechanism typically involves an initial retrieval step followed by a re-ranking phase. After the initial search identifies a candidate set of documents, a re-ranker model evaluates the semantic relevance of each passage relative to the user's query. The system then sorts these results by relevance score and truncates the list to the top K items. This pruning process ensures that the context window is filled with the most pertinent information, allowing the language model to focus on high-quality signals rather than sifting through noise.

By constraining the input context to a manageable and highly relevant subset, Top K Retrieval mitigates the "lost in the middle" phenomenon and reduces the likelihood of the model generating facts based on incorrect or tangential data. The value of K is often tuned based on the specific capabilities of the downstream language model and the complexity of the domain, balancing the need for sufficient context against the risk of information overload.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
- 2026-04-08: [[lab-notes/2026-04-08-Llamacpp-Local-LLM-Inference-for-Accessible-Private-AI|Llamacpp Local LLM Inference for Accessible Private AI]] · [▶ source](https://www.youtube.com/watch?v=P8m5eHAyrFM)
- 2026-04-10: [[lab-notes/2026-04-10-Google-NotebookLM-Customizing-Design-for-Professional-Presentations-vi|Google NotebookLM Customizing Design for Professional Presentations vi]] · [▶ source](https://www.youtube.com/watch?v=hqquu7H7X0w)
- 2026-04-12: [[lab-notes/2026-04-12-Google-TurboQuant-LLM-Memory-Efficiency-Breakthrough-Industry-Impact|Google TurboQuant LLM Memory Efficiency Breakthrough Industry Impact]] · [▶ source](https://www.youtube.com/watch?v=erV_8yrGMA8)
