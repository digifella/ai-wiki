---
type: concept
domain: ai-agents
updated: 2026-05-23
group: applied-ai-workflows
---
# Embedding Model

Vector representation of data ([[concepts/text|text]], [[concepts/images|images]], etc.) capturing semantic meaning for similarity search, clustering, and model input. Used in [[concepts/rag]], [[concepts/natural-language-search|Semantic Search]], and [[concepts/natural-language-processing]].

## Key Characteristics
- Converts discrete data (e.g., text [[concepts/tokens|tokens]]) into continuous vectors
- Preserves semantic [[concepts/relationships|relationships]] (e.g., "king" - "man" + "woman" ≈ "queen")
- Requires [[concepts/vector-database|vector database]] for efficient similarity search (e.g., FAISS, ChromaDB)

## Fine-Tuning for RAG
Optimizes [[concepts/document-retrieval|document retrieval]] in [[concepts/rag]] pipelines without full model retraining:
- **Problem**: Base [[concepts/embedding-models|embedding models]] lack domain-specific optimization
- **[[concepts/solution|Solution]]**: Use [[concepts/linear-adapters|linear adapters]] for efficient [[concepts/fine-tuning|fine-tuning]]
  - Avoids full retraining of large [[concepts/models|models]]
  - Eliminates need for re-embedding vast [[concepts/knowledge-bases|knowledge bases]]
  - Achieves domain-specific [[concepts/performance-gains|performance gains]] cost-effectively
- **Reference**: 2026 04 14 [[concepts/domain-specific-fine-tuning|Fine Tuning RAG]] [[entities/adam-lucek|Adam Lucek]] ([[entities/adam-lucek|Adam Lucek]]'s guide on [[concepts/rag-embedding|embedding fine-tuning]])
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Multimodal-AI-Concepts-Approaches-and-Data-Processing-by-LLMs|Multimodal AI Concepts Approaches and Data Processing by LLMs]] · [▶ source](https://www.youtube.com/watch?v=J51oZYcNvP8)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-14: [[lab-notes/2026-04-14-Optimizing-AI-Costs-and-Privacy-with-Local-Open-Source-Models-and-Hybr|Optimizing AI Costs and Privacy with Local Open Source Models and Hybr]] · [▶ source](https://www.youtube.com/watch?v=nt7dWOEFUB4)
- 2026-04-21: Google DeepMind
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
- 2026-04-28: Apple