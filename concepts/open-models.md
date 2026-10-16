---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "open-models"
  - "embedding"
  - "fine-tuning"
  - "retrieval"
  - "gemma"
  - "transparency"
  - "customization"
  - "ai-agents"
aliases:
  - "Open Source Models"
  - "Publicly Available Models"
summary: "Open models are machine learning models with publicly accessible weights and architecture that allow for customization and transparency, with recent applications focusing on fine-tuning embedding models like Gemma for im"
updated: 2026-10-09
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-08T19:45:19+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Open Models

**Open models** refer to [[concepts/artificial-intelligence-models|machine learning models]] whose weights, architecture, and [[concepts/custom-dataset|training data]] (or sufficient details to reproduce them) are publicly available for inspection, modification, and redistribution. This openness facilitates community-driven improvement, [[concepts/opacity|transparency]], and [[concepts/customization|customization]] for specific use cases.

## Key Characteristics
- **[[concepts/accessibility|Accessibility]]:** Weights and code are publicly accessible.
- **Customizability:** Users can fine-tune models for domain-specific tasks.
- **Transparency:** Architecture and training methodologies are open for audit.
- **Community Support:** Often backed by active [[concepts/developer|developer]] communities.

## Integration: Fine-tuning for Retrieval
Recent developments highlight the practical application of open models in specialized tasks like [[concepts/vector-database]] retrieval. Specifically, [[concepts/fine-tuning|fine-tuning]] open embedding models can significantly enhance performance on proprietary data.

- **Case Study:** Fine-tuning Google's [[entities/gemma]] family for retrieval tasks.
- **Resource:** [[lab-notes/2026-10-09-Fine-tuning-Google-Embedding-Gemma-2-for-Custom-Retrieva|Fine-tuning Google Embedding Gemma 2 for Custom Retrieval Tasks]]
- **Key Insight:** While off-the-shelf embedding models offer general capabilities, fine-tuning them on user's proprietary data yields superior retrieval accuracy.
- **Scope:** The process covers [[concepts/data-modality|multimodal data]] types including text, code, images, video, and audio.
- **Accessibility:** The guide emphasizes that training custom embedding models is more accessible than commonly perceived.

## Related Concepts
- [[concepts/model-weights]]
- [[concepts/transfer-learning]]
- [[concepts/embedding-models]]
- [[concepts/building-smarter-systems|RAG-Architecture]]

## References
- [Fine-tuning Google Embedding Gemma 2 for Custom Retrieval Tasks](https://www.youtube.com/watch?v=S7tFyREI19I)
