---
wiki-ingested: true
title: "EmbeddingGemma 2: On-Device Multimodal RAG with Unified Cross-Modal Embeddings"
date: 2026-10-10
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: ai-agents
group: multimodal-generative-media
aliases:
  - "lab-notes/2026-10-10-EmbeddingGemma-2-On-Device-Multimodal-RAG-with-Unified-C"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## EmbeddingGemma 2: On-Device Multimodal RAG with Unified Cross-Modal Embeddings
**Clip title:** [[entities/embedding-gemma-2|Embedding Gemma 2]]: On-Device Multimodal RAG Made Easy
**[[entities/tasia-custode|Author]] / channel:** [[concepts/prompt-based-modeling|Prompt Engineering]]
**URL:** https://www.youtube.com/watch?v=XtIBx6H9A_I

### Summary
[[concepts/google-search|Google]] has launched EmbeddingGemma 2, a significant [[concepts/open-source|open-source]] embedding model designed for multimodal [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG). This compact model, boasting 740 million parameters and available under an [[concepts/apache-2-0|Apache 2.0 license]], uniquely maps diverse data types—including text, code, images, video, and [[concepts/audio-modality|audio]]—into a single, unified vector space. Its small footprint allows it to run efficiently even on [[concepts/portable-devices|mobile devices]], unlocking new possibilities for developers in creating [[concepts/ai-powered-applications|AI applications]] that can understand and process information across various modalities. The video highlights that [[concepts/rag|traditional RAG]] systems are predominantly text-based, leaving a vast amount of multimodal personal and organizational data unsearchable or requiring cumbersome conversion steps.

At its core, EmbeddingGemma 2 functions by processing different modalities through specialized encoders before feeding them into a shared text-based backbone. A 170-million-parameter [[concepts/computer-vision|vision]] encoder handles images and video frames, while a 300-million-parameter audio encoder processes sound. These encoders convert their respective inputs into [[concepts/tokens|tokens]], which are then combined into a single sequence with text tokens. This combined sequence is processed by a 270-million-parameter backbone, based on [[concepts/23b-parameter-models|Gemma 4]], which then generates a unified 768-dimensional embedding. This architecture, combined with contrastive training on a massive mixed dataset, ensures that semantically similar items across different modalities (e.g., an image of a dog and a textual description of a dog) are positioned closely in the shared vector space, enabling seamless cross-modal search and understanding without needing intermediate transcriptions or captions.

The model offers two key deployment advantages for developers: Matryoshka Representation [[concepts/learning|Learning]] and Modular Loading. Matryoshka allows users to truncate the full 768-dimensional embedding to smaller sizes (e.g., 128, 256, 512 dimensions), significantly reducing [[concepts/storage-requirements|storage requirements]] for [[concepts/vector-databases|vector databases]] while retaining much of the model's performance for text-based tasks. Modular loading further enhances efficiency by allowing developers to load only the specific encoders needed for their application (e.g., text-only for 270M parameters, or text + vision for 440M). [[concepts/benchmark-testing|Benchmarking]] reveals that EmbeddingGemma 2 outperforms its predecessor, EmbeddingGemma 1, particularly in [[concepts/code-retrieval|code retrieval]], and shows strong performance across various modalities, making it a powerful contender for real-world applications.

Practically, EmbeddingGemma 2 demonstrates impressive capabilities in tasks such as photo search (finding images from text or image queries), [[concepts/multilingual-retrieval|multilingual retrieval]] (understanding queries in over 100 languages), and pinpointing specific moments within videos without relying on captions. It can even search through PDF pages based purely on their visual content, bypassing the need for OCR. While its performance on abstract sound effects is noted as weaker, the overall promise of an open, [[concepts/universal-embedding-model|multimodal embedding model]] that can run on-device and be fine-tuned for specific needs marks a significant step forward in making advanced AI accessible and efficient for a wider range of applications and private data [[concepts/scenarios|scenarios]].

### Video Description & Links
#### Description
Let me know in the comments what you'd build with this, and whether you want a follow-up on [[concepts/model-fine-tuning|fine-tuning]] EmbeddingGemma 2.

Colab [[concepts/notebook|notebook]]: https://colab.research.google.com/drive/1mXzvOCo-_y4r1yQ0AqAJJtU8BgU3LlCP
Model card: https://huggingface.co/google/embeddinggemma-2
Launch blog: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
[[concepts/developer|Developer]] guide: https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/
On-device guide (LiteRT, MediaPipe): https://developers.googleblog.com/google-ai-edge-with-embeddinggemma-2/
[[concepts/gemini|Gemini]] Embedding 2 paper: https://arxiv.org/abs/2605.27295
CLIP paper: https://arxiv.org/abs/2103.00020
ImageBind paper: https://arxiv.org/abs/2305.05665
ColPali paper: https://arxiv.org/abs/2407.01449

My ColPali videos:
https://www.youtube.com/watch?v=rhJJynv47Pw
https://www.youtube.com/watch?v=DI9Q60T_054

LocalGPT: https://github.com/PromtEngineer/localGPT

My voice to text App: whryte.com

00:00 - EmbeddingGemma 2: [[concepts/image-embeddings|Multimodal Embeddings]]
00:40 - Demo: Search Photos With Your Voice
01:20 - Why [[concepts/multimodal-retrieval|Multimodal Retrieval]] Matters for RAG
02:25 - Before: Convert Everything to Text
03:21 - Before: CLIP, ImageBind and ColPali
04:14 - One Backbone for Every [[concepts/modality|Modality]]
04:33 - How It Works: Embeddings, Encoders, Tokens
06:07 - Mean Pooling and the 768-Number Vector
06:29 - Contrastive Training
07:15 - [[concepts/dimensional-reduction|Matryoshka Embeddings]]: Smaller Vectors
08:05 - Modular Loading: 270M to 740M
09:00 - [[entities/google-colab|Google Colab]] Notebook
19:11 - Verdict

Credits: Big Buck Bunny © Blender Foundation (CC BY 3.0). ESC-50 by K. Piczak (CC BY-NC 3.0). Flickr30k test images. Benchmark numbers in the explainer are Google's; results in the notebook section are from my own Colab T4 run.

#### Tags
`prompt engineering`, `Prompt Engineer`, `LLMs`, `AI`, `artificial Intelligence`, `Llama`, `GPT-4`, `fine-tuning LLMs`

#### URLs
- https://colab.research.google.com/drive/1mXzvOCo-_y4r1yQ0AqAJJtU8BgU3LlCP
- https://huggingface.co/google/embeddinggemma-2
- https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/
- https://developers.googleblog.com/google-ai-edge-with-embeddinggemma-2/
- https://arxiv.org/abs/2605.27295
- https://arxiv.org/abs/2103.00020
- https://arxiv.org/abs/2305.05665
- https://arxiv.org/abs/2407.01449
- https://www.youtube.com/watch?v=rhJJynv47Pw
- https://www.youtube.com/watch?v=DI9Q60T_054
- https://github.com/PromtEngineer/localGPT

## Related Concepts
- [[concepts/embeddinggemma-2|EmbeddingGemma 2]]
- [[concepts/page-screenshots|multimodal RAG]]
- [[concepts/unified-cross-modal-embeddings|unified cross-modal embeddings]]
- [[concepts/on-device-ai|on-device AI]]
- [[concepts/embedding-spaces|vector space]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_space)
- [[concepts/open-source-model|open-source model]] — [Wikipedia](https://en.wikipedia.org/wiki/Open_source)
- [[concepts/siglip-image-encoder|vision encoder]]
- audio encoder — [Wikipedia](https://en.wikipedia.org/wiki/Audio_codec)
- [[concepts/apache-20-license|Apache 2.0 license]]
- [[concepts/fine-tuning|fine-tuning]]

## Related Entities
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)
- [[entities/gemma-4|Gemma 4]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemma_%28language_model%29)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- Colab — [Wikipedia](https://en.wikipedia.org/wiki/Colab)
- Apache — [Wikipedia](https://en.wikipedia.org/wiki/Apache)