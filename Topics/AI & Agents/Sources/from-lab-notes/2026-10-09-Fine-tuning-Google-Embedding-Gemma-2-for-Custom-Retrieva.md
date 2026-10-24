---
wiki-ingested: true
title: "Fine-tuning Google Embedding Gemma 2 for Custom Retrieval Tasks"
date: 2026-10-09
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: ai-agents
group: open-systems-local-models
aliases:
  - "lab-notes/2026-10-09-Fine-tuning-Google-Embedding-Gemma-2-for-Custom-Retrieva"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Fine-tuning Google Embedding Gemma 2 for Custom Retrieval Tasks
**Clip title:** Training Your Own [[concepts/embedding-model|Embedding Model]] Is Not As Hard As You Think
**[[entities/tasia-custode|Author]] / channel:** [[concepts/prompt-based-modeling|Prompt Engineering]]
**URL:** https://www.youtube.com/watch?v=S7tFyREI19I

### Summary
The video provides a comprehensive guide to [[concepts/fine-tuning|fine-tuning]] [[concepts/google-search|Google]]'s Embedding [[entities/gemma-2|Gemma 2]], an open [[concepts/vision-language-model|multimodal model]] designed for [[concepts/document-retrieval|retrieval]] tasks across various data types like text, code, images, video, and [[concepts/audio-modality|audio]]. The central premise is that while off-the-shelf [[concepts/embedding-models|embedding models]] offer general capabilities, fine-tuning them on a user's proprietary data is crucial for achieving superior performance tailored to specific applications. The video aims to [[concepts/solution|answer]] whether a few minutes of fine-tuning can significantly enhance the model's accuracy on custom data without compromising its existing general knowledge. A practical demo showcases fine-tuning the model on [[entities/youtube|YouTube]] video transcripts to accurately retrieve specific moments in videos based on [[concepts/natural-language-search|natural language queries]].

The process of fine-tuning an [[concepts/embedding-model|embedding model]] is distinct from that of a [[concepts/large-language-model-llm|Large Language Model (LLM)]]. While an LLM is trained to generate precise text responses, an embedding model transforms inputs into numerical vectors within a high-dimensional "embedding space." The [[concepts/purpose|objective]] is to adjust these vectors so that semantically similar items are positioned closer together, and dissimilar items are farther apart. The [[concepts/custom-dataset|training data]] typically consists of positive "pairs" (e.g., a query and a relevant passage). To prevent the model from collapsing all [[concepts/dense-vectors|embeddings]] into a single point, a technique called "In-batch Negatives" is employed, where other unrelated items within the same batch serve as "wrong answers," compelling the model to learn effective separation. A critical pitfall, the "duplicate trap," is addressed by ensuring that identical passages are not duplicated within the same training batch, preventing the model from incorrectly pushing away correct answers. Adhering to a consistent prompt format between training and [[concepts/ai-inference|inference]] is also highlighted as essential for maintaining performance.

For efficient fine-tuning, the video advocates using LoRA ([[concepts/lora-adapter|Low-Rank Adaptation]]). This method involves adding small, trainable matrices (LoRA adapters) alongside the original, frozen layers of the model. This significantly reduces the [[concepts/parameter-count|number of parameters]] requiring training, leading to faster training times (e.g., under 2% of total [[concepts/parameters|weights]] for the demo) and smaller saved [[concepts/model-weights|model files]]. [[entities/embedding-gemma-2|Embedding Gemma 2]]'s multimodal nature means it utilizes a shared backbone for processing all data types; consequently, fine-tuning on one [[concepts/modality|modality]] (e.g., audio) can influence the model's performance on others. Therefore, robust evaluation is critical, emphasizing the need to measure "[[concepts/search-relevance|search quality]]" on *unseen* questions and data, preferably split by source to prevent data leakage and overfitting.

Experimental results presented in the video demonstrate substantial improvements. Fine-tuning for audio classification on an everyday sounds dataset saw top-1 accuracy rise from 24.5% to 65.8% in approximately 7.5 minutes. Similarly, fine-tuning on custom YouTube video transcripts boosted top-1 accuracy from 66.3% to 75.0% in less than 3 minutes. However, a crucial insight emerged: the fine-tuned model learned the *specific labels* provided during training rather than a generalized [[concepts/skill|skill]], meaning it did not improve performance on sound categories completely withheld from the training data. The cost of this specialized improvement included a slight performance drop (around 4 points) in general text search, while photo and voice-to-photo search remained largely unaffected. A technical "reload bug" that could severely degrade [[concepts/tone|voice]] search performance when loading adapter weights was also identified and a fix provided. In conclusion, fine-tuning Embedding Gemma 2 with LoRA is highly effective for tailoring the model to specific datasets, but users should focus on creating quality paired data without batch duplicates, rigorously testing on unseen data split by source, and carefully monitoring potential impacts on other modalities or general tasks due to the model's shared backbone architecture.

### Video Description & Links
#### Description
You'll learn how to build question-passage training pairs, why in-batch negatives (MultipleNegativesRankingLoss) need a no-duplicates sampler, why training and search prompts must match, how LoRA works on a shared multimodal backbone, how to evaluate on unseen data, and a reload bug that silently breaks audio adapters.

If you have fine-tuned embedding models for your own applications, share what worked for you in the comments.

Colab [[concepts/notebook|notebook]]: https://colab.research.google.com/drive/1xq-84DLZsqteEzL52Qb__47Y_yGckeyB?usp=sharing
The first EmbeddingGemma 2 video: [EMBEDDINGGEMMA 2 VIDEO LINK]
[[concepts/unsloth-studio|Unsloth]] EmbeddingGemma 2 guide: https://unsloth.ai/docs/models/embeddinggemma-2
Unsloth [[concepts/notebook-tools|notebooks]]: https://github.com/unslothai/notebooks
Model card: https://huggingface.co/google/embeddinggemma-2
ESC-50 dataset: https://github.com/karolpiczak/ESC-50
Sentence [[concepts/transformers|Transformers]] losses: https://sbert.net/docs/package_reference/sentence_transformer/losses.html

00:00 - Fine-Tuning EmbeddingGemma 2 on Your Own Data
01:03 - [[concepts/embedding-model-fine-tuning|Embedding Fine-Tuning]] vs [[concepts/pre-trained-llms|LLM Fine-Tuning]]
02:30 - In-Batch Negatives (MultipleNegativesRankingLoss)
03:37 - The Duplicate Trap: No-Duplicates Sampler
04:45 - LoRA on a Shared Multimodal Backbone
06:30 - Notebook: ESC-50 Sounds with Unsloth on an A100
09:32 - Side Effects on Photo, Voice and Text Search
10:06 - Gotcha: Reloading an Audio Adapter
10:50 - Fine-Tuning on YouTube Transcripts
12:04 - Three Things to Get Right

#### Tags
`EmbeddingGemma 2`, `fine-tune embedding model`, `embedding fine-tuning`, `Unsloth`, `LoRA`, `sentence-transformers`, `MultipleNegativesRankingLoss`, `in-batch negatives`, `contrastive learning`, `multimodal embeddings`, `audio embeddings`, `ESC-50`, `RAG`, `semantic search`, `Colab tutorial`, `Gemma`

#### URLs
- https://colab.research.google.com/drive/1xq-84DLZsqteEzL52Qb__47Y_yGckeyB?usp=sharing
- https://unsloth.ai/docs/models/embeddinggemma-2
- https://github.com/unslothai/notebooks
- https://huggingface.co/google/embeddinggemma-2
- https://github.com/karolpiczak/ESC-50
- https://sbert.net/docs/package_reference/sentence_transformer/losses.html

## Related Concepts
- [[concepts/fine-tuning|fine-tuning]]
- [[concepts/embedding-models|embedding models]]
- [[concepts/visual-understanding|retrieval-augmented generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)
- [[concepts/visual-understanding|multimodal models]]
- [[concepts/proprietary-data-integration|proprietary data]]
- [[concepts/custom-retrieval|custom retrieval]]
- [[concepts/google-embedding-gemma-2|Google Embedding Gemma 2]]
- embedding space — [Wikipedia](https://en.wikipedia.org/wiki/Latent_space)
- [[concepts/workflow-transformation|LoRA]] — [Wikipedia](https://en.wikipedia.org/wiki/LoRA_%28machine_learning%29)
- [[concepts/low-rank-adaptation|Low-Rank Adaptation]]
- [[concepts/data-leakage|data leakage]] — [Wikipedia](https://en.wikipedia.org/wiki/Leakage_%28machine_learning%29)
- overfitting — [Wikipedia](https://en.wikipedia.org/wiki/Overfitting)
- [[concepts/search-relevance|search quality]]
- [[concepts/prompt-engineering|prompt engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)

## Related Entities
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)
- [[entities/embedding-gemma-2|Embedding Gemma 2]]
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)