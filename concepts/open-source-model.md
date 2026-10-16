---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "machine-learning"
  - "open-source"
  - "ai-models"
  - "software-licensing"
  - "nvidia-nemotron"
  - "glm-5.2"
  - "alibaba"
  - "document-parsing"
  - "ocr"
  - "embedding-models"
  - "multimodal"
  - "rag"
  - "google-gemma"
aliases:
  - "Open Source AI Model"
  - "Public Model"
  - "Transparent ML Model"
  - "Nemotron-3 Model"
  - "GLM-5.2"
  - "OvisOCR2"
  - "EmbeddingGemma 2"
summary: "An open-source model is a machine learning system with publicly available source code, training data, and weights for inspection and modification. Key examples include the NVIDIA Nemotron-3 family, Alibaba's GLM-5.2, Alibaba's OvisOCR2, and Google's EmbeddingGemma 2."
updated: 2026-10-10
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-10T02:50:03+00:00" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Open-Source Model

A [[concepts/machine-learning|machine learning]] model whose source code, [[concepts/training-data|training data]], and [[concepts/weights|weights]] are publicly available for inspection, modification, and redistribution.

## Example: NVIDIA Nemotron-3 Family

[[entities/nvidia|NVIDIA]] recently released the [[concepts/nemotron-3-family|Nemotron-3 family]] of [[concepts/reasoning-models|open-source models]], featuring three sizes:

* **[[entities/nano|Nano]]:** 30-billion parameters (3-billion active via [[concepts/mixture-of-experts|Mixture-of-Experts]] architecture).
* **Super:** 100-billion parameters (10-billion active).
* **Ultra:** 500-billion parameters (50-billion active).

The [[entities/gary-explains]] channel reviewed the **[[concepts/nemotron-3-nano-model|Nemotron-3 Nano]]** in th

## Example: Google EmbeddingGemma 2

[[concepts/google-search|Google]] has launched [[entities/embeddinggemma-2|EmbeddingGemma 2]], a compact [[concepts/open-source|open-source]] [[concepts/embedding-model|embedding model]] designed for multimodal [[concepts/retrieval-augmented-generation|Retrieval Augmented Generation (RAG)]].

* **Architecture:** 740 million parameters.
* **[[concepts/license|License]]:** [[concepts/apache-2-license|Apache 2.0]].
* **Capabilities:** Uniquely maps diverse data types—including text, code, images, video, and [[concepts/audio-modality|audio]]—into a single, unified cross-modal embedding space.
* **Use Case:** Optimized for on-device [[concepts/multimodal-retrieval|multimodal RAG]] applications.

See [[lab-notes/2026-10-10-EmbeddingGemma-2-On-Device-Multimodal-RAG-with-Unified-C|EmbeddingGemma 2: On-Device Multimodal RAG with Unified Cross-Modal Embeddings]] for detailed analysis.

## References

* [EmbeddingGemma 2: On-Device Multimodal RAG with Unified Cross-Modal Embeddings](https://www.youtube.com/watch?v=XtIBx6H9A_I)
