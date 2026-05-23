---
type: concept
domain: ai-agents
summary: Encoder-only transformers utilize bidirectional self-attention to process entire input sequences simultaneously for tasks such as text classification and information extraction.
updated: 2026-05-23
group: multimodal-generative-media
---
# Encoder-only transformers

Architectures utilizing only the encoder component of the Transformer [[concepts/architecture|architecture]], characterized by **bidirectional [[concepts/self-attention|self-attention]]**. Unlike decoder-only [[concepts/models|models]], these models process the entire input sequence simultaneously, allowing each token to attend to both preceding and following [[concepts/tokens|tokens]] in the context.

### Core Functionality & Use Cases
Primary [[concepts/software|applications]] are focused on discriminative, extractive, and [[concepts/sequence-tagging|sequence-labeling]] tasks within [[concepts/natural-language-processing]] ([[concepts/natural-language-processing-nlp|NLP]]):
- [[concepts/text-classification]]
- [[concepts/sentiment-analysis]]
- [[concepts/named-entity-recognition]] (NER)
- [[concepts/document-processing|Information Extraction]] (IE)

### Comparative Context
- **[[concepts/attention-mechanisms|Attention]] Mechanism**: Uses bidirectional context, whereas Decoder-only models (e.g., [[entities/gemini]], GPT) use causal/masked self-attention to prevent looking "ahead" in the sequence.
- **Task [[concepts/specialization|Specialization]]**: While encoder-only models [[entities/excel|excel]] [[concepts/assistive-technology|at]] understanding and labeling, generative [[concepts/large-language-models]] (LLMs) are optimized for autoregressive [[concepts/text-generation|text generation]].
- **Emerging Trends in Extraction**:
    - New developments like LangExtract ([[concepts/google-search|Google]]) leverage generative [[entities/gemini]] models to perform [[concepts/information-extraction|Information Extraction]] from [[concepts/unstructured-text|unstructured text]].
    - This represents a shift from traditional NLP pipelines toward using generative [[concepts/power|power]] for specific, non-generative extraction tasks, despite the inherent challenges of using large-scale generative models for structured tasks.

---
**Backlinks**:
- 2026 04 14 [[concepts/contextual-awareness|Langextract]] [[entities/sam-witteveen|Sam Witteveen]]
