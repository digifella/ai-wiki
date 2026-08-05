---
type: concept
domain: ai-agents
tags:
  - "transformers"
  - "nlp"
  - "self-attention"
  - "text-classification"
  - "information-extraction"
aliases:
  - "Encoder-only models"
  - "Bidirectional transformers"
  - "BERT-like architectures"
summary: Encoder-only transformers utilize bidirectional self-attention to process entire input sequences simultaneously for tasks such as text classification and information extraction.
updated: 2026-07-11
group: multimodal-generative-media
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Encoder-only transformers

Architectures utilizing only the encoder component of the [[concepts/transformer-models|Transformer architecture]], characterized by **bidirectional [[concepts/self-attention|self-attention]]**. Unlike decoder-only models, these models process the entire input sequence simultaneously, allowing each token to attend to both preceding and following [[concepts/tokens|tokens]] in the context.

### Core Functionality & Use Cases
Primary applications are focused on discriminative, extractive, and [[concepts/sequence-tagging|sequence-labeling]] tasks within [[concepts/natural-language-processing]] (NLP):
- [[concepts/text-classification]]
- [[concepts/sentiment-analysis]]
- [[concepts/named-entity-recognition]] (NER)
- [[concepts/document-processing|Information Extraction]] (IE)

### Comparative Context
- **[[concepts/attention-mechanisms|Attention]] Mechanism**: Uses bidirectional context, whereas Decoder-only models (e.g., [[entities/gemini]], GPT) use causal/masked self-[[concepts/attention|attention]] to prevent looking "ahead" in the sequence.
- **Task [[concepts/specialization|Specialization]]**: While encoder-only models [[entities/excel|excel]] at understanding and labeling, generative [[concepts/large-language-models]] (LLMs) are optimized for autoregressive [[concepts/text-generation|text generation]].
- **[[concepts/emerging-trends|Emerging Trends]] in Extraction**:
    - New developments like LangExtract ([[concepts/google-search|Google]]) leverage generative [[entities/gemini]] models to perform [[concepts/information-extraction|Information Extraction]] from [[concepts/unstructured-text|unstructured text]].
    - This represents a shift from traditional NLP pipelines toward using generative power for specific, non-generative extraction tasks, despite the inherent challenges of using large-scale [[concepts/tts-model|generative models]] for structured tasks.

---
**Backlinks**:
- 2026 04 14 [[concepts/contextual-awareness|Langextract]] [[entities/sam-witteveen|Sam Witteveen]]
