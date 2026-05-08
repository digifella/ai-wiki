---
type: concept
domain: ai-agents
tags:
  - "transformer"
  - "nlp"
  - "machine-learning"
  - "architecture"
  - "transformer-architecture"
  - "bidirectional-attention"
  - "natural-language-processing"
  - "text-classification"
  - "information-extraction"
  - "sequence-labeling"
aliases:
  - "Encoder-only models"
  - "Bidirectional Transformers"
summary: "Encoder-only transformers utilize bidirectional self-attention to process entire input sequences simultaneously for tasks such as text classification and information extraction."
updated: 2026-04-17
group: multimodal-generative-media
---
# Encoder-only transformers

Architectures utilizing only the encoder component of the Transformer [[concepts/architecture|architecture]], characterized by **bidirectional [[concepts/self-attention|self-attention]]**. Unlike decoder-only models, these models process the entire input sequence simultaneously, allowing each token to attend to both preceding and following [[concepts/tokens|tokens]] in the context.

### Core Functionality & Use Cases
Primary [[concepts/software|applications]] are focused on discriminative, extractive, and sequence-labeling tasks within [[concepts/natural-language-processing]] (NLP):
- [[concepts/text-classification]]
- [[concepts/sentiment-analysis]]
- [[concepts/named-entity-recognition]] (NER)
- [[concepts/document-processing|Information Extraction]] (IE)

### Comparative Context
- **Attention Mechanism**: Uses bidirectional context, whereas Decoder-only models (e.g., [[entities/gemini]], GPT) use causal/masked self-attention to prevent looking "ahead" in the sequence.
- **Task [[concepts/specialization|Specialization]]**: While encoder-only models excel at understanding and labeling, generative [[concepts/large-language-models]] (LLMs) are optimized for autoregressive [[concepts/text-generation|text generation]].
- **Emerging Trends in Extraction**:
    - New developments like LangExtract (Google) leverage generative [[entities/gemini]] models to perform Information Extraction from unstructured text.
    - This represents a shift from traditional NLP pipelines toward using generative power for specific, non-generative extraction tasks, despite the inherent challenges of using large-scale generative models for structured tasks.

---
**Backlinks**:
- 2026 04 14 [[concepts/contextual-awareness|Langextract]] [[entities/sam-witteveen|Sam Witteveen]]
