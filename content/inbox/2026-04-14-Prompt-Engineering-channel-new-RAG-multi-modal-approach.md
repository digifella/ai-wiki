---
wiki-ingested: true
title: "Prompt Engineering channel - new RAG multi modal approach"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: reasoning-context-prompting
---
# [[concepts/prompt-engineering|Prompt Engineering]] channel - new RAG multi modal approach

---
---
<https://www.youtube.com/watch?v=p7yRLIj9IyQ>
Prompt Engineering Channel: 
This video provides a comprehensive overview of **Jina Embeddings v4**, a new [[concepts/universal-embedding-model|universal embedding model]] designed for multimodal and [[concepts/multilingual-retrieval-tasks|multilingual retrieval tasks]].
Here's a detailed [[concepts/summary|summary]] of the key points:

1. **Introduction to Jina Embeddings v4:**
	* It's highlighted as a significant new embedding model that excels in various benchmarks.
	* Key [[concepts/capabilities|capabilities]] include:
		* **Multimodal:** Processes both text and images.
		* **Multilingual:** Supports multiple languages (29+).
		* **Universal:** Can be used for diverse tasks like [[concepts/text-retrieval|text retrieval]] and [[concepts/code-retrieval|code retrieval]] with the same model.
	* The [[concepts/weights|weights]] for Jina Embeddings v4 are openly available on [[entities/hugging-face|Hugging Face]].
2. **The Importance of Embeddings in RAG:**
	* The video reiterates that embeddings play a critical role in Retrieval Augmented Generation (RAG) and search [[concepts/systems|systems]].
	* [[concepts/traditional-rag|Traditional RAG]] for multimodal data often involves converting images to text descriptions (e.g., via OCR or captioning) and then using text-only embedding models. This process can lead to significant information loss.
3. **Evolution of Multimodal Embedding Approaches:**
	* **Traditional (Image-to-Text):** Convert images to text, then embed using a text-only model. Loss of visual information.
	* **ColPali:** A prior approach that converts PDF pages into images, uses a Vision LLM (like PALI) to directly encode the image content, producing _multi-vector representations_ (embeddings for different patches of the image). This is more accurate but results in much larger [[concepts/storage-requirements|storage requirements]] due to many small vectors per document.
	* **Cohere Embed 4:** Another recent multimodal embedding model that offers state-of-the-art [[concepts/accuracy|accuracy]] while producing a _fixed-size vector output_. This is efficient for storage and [[concepts/inference|inference]]. It leverages the concept of **Matryoshka Embeddings** where you can truncate the embedding to a smaller dimension (e.g., 2048 to 128) without significant performance degradation, optimizing for cost and speed.
	* **NVIDIA Llama 3.2 NeMo Retriever:** A 1-billion parameter multimodal RAG model built on Llama 3.2, also using a vision encoder and language model to process both text and images in a unified embedding space. <https://developer.nvidia.com/blog/best-in-class-multimodal-rag-how-the-llama-3-2-nemo-retriever-embedding-model-boosts-pipeline-accuracy/>
		* Note: the Nvidia retriever is built on a NIM which claims to make it easier to run locally: <https://developer.nvidia.com/nim?sortBy=developer_learning_library%2Fsort%2Ffeatured_in.nim%3Adesc%2Ctitle%3Aasc&hitsPerPage=12>  NIM requires signing up to Enterprise AI licence from Nvidia <https://docs.nvidia.com/nim/large-language-models/latest/getting-started.html> 
		* Does not look like it supports RTX8000 <https://docs.nvidia.com/nim/large-language-models/latest/supported-models.html#gpus>
4. **Deep Dive into Jina Embeddings v4 [[concepts/architecture|Architecture]]:**
	* **Backbone:** Built on the **Qwen2.5-VL-3B-Instruct** backbone (3.8 billion [[concepts/parameters|parameters]]).
	* **Shared Pathway:** Text and image inputs are processed through a shared pathway. Images are first converted to token sequences via a **Vision Encoder**, and then both modalities are jointly processed by the Language Model Decoder with contextual [[concepts/attention|attention]] layers.
	* **LORA Adapters (Task-Specific):** A unique and powerful feature. The model incorporates specific LoRA adapters (60M parameters each) for different tasks:
		* retrieval
		* sts (semantic textual similarity) / text-matching
		* code search
		* This allows the model to specialize its embedding generation based on the specific task, without modifying the frozen backbone weights.
	* **Dual Output Modes:**
		* **Single-vector embeddings:** Produces a single dense vector for the entire input. Dimensions can be truncated (Matryoshka-style) from 2048 down to 128, allowing for flexible storage and retrieval efficiency.
		* **Multi-vector embeddings:** Produces token-level embeddings (128 dimensions per token), enabling late interaction retrieval strategies where similarity is computed at a more granular level.
	* **Long Context:** Supports a remarkably long input length of up to **32,768 tokens**.
	* **Late Chunking:** The model is well-suited for "Late Chunking," where a long document is first embedded in its entirety (preserving global context through token-level embeddings), and then these token embeddings are pooled into smaller chunk-level embeddings for efficient retrieval.
5. **Performance and Features Comparison (Jina v3 vs v4):**
	* **Parameters:** v3 (559M) vs. v4 (3.8B base + 60M per adapter).
	* **Modalities:** v3 (Text only) vs. v4 (Text + Images - multimodal).
	* **Max Input Length:** v3 (8,192 tokens) vs. v4 (32,768 tokens).
	* **Image Processing:** v3 (None) vs. v4 (Up to 20 megapixels).
	* **[[concepts/multilingual-support|Multilingual Support]]:** v3 (89 languages) vs. v4 (29+ languages).
	* **Vector Types:** v3 (Single-vector only) vs. v4 (Single-vector + Multi-vector).
	* **Task LoRA Specializations:** v4 adds "Asymmetric retrieval," "[[concepts/semantic-similarity|Semantic similarity]]," and "Code retrieval" specific adapters.
6. **Practical Demonstration (Jupyter [[concepts/notebook|Notebook]]):**
	* The video shows how to load and use [[concepts/jina-embeddings-v4|jina-embeddings-v4]] from Hugging Face.
	* **Resource Warning:** It explicitly notes that due to the model's size (4B parameters), [[concepts/running|running]] certain examples (especially those involving large image inputs or multi-[[concepts/vector-representations|vector representations]]) might lead to VRAM issues on a single T4 GPU.
	* **Multilingual Text & [[concepts/image-retrieval|Image Retrieval]]:** Demonstrates embedding multilingual sci-fi quotes and sci-fi movie images. When querying with text, the model successfully retrieves the semantically closest image (e.g., "May the Force be with you" retrieves a [[entities/star-wars|Star Wars]] lightsaber duel image), showcasing its multimodal and multilingual capabilities.
	* **Text Matching:** Briefly mentioned as another supported task (e.g., for topic clustering).
	* **Code Retrieval:** The same embedding model can be used for code retrieval tasks, highlighting its versatility.

In conclusion, Jina Embeddings v4 represents a powerful and flexible advancement in [[concepts/universal-embedding-models|universal embedding models]], combining multimodal and multilingual capabilities with adaptable output vector types and specialized task-specific adapters, making it highly suitable for complex RAG and search applications.

Author: I walk you through a single, multimodal embedding model that handles text, images, tables —and even code —inside one vector space. In this short demo I show the install steps, run RAG retrieval benchmarks, and compare cost vs. traditional multi-model setups. If you’re building search or RAG pipelines, see how one all-in-one embedding can simplify your stack and boost accuracy.

LINKS:
Notebook: https://colab.research.google.co...
https://jina.ai/news/jina-embedd...
https://jina.ai/news/late-chunki...
https://huggingface.co/blog/matr...
https://cohere.com/blog/embed-4
[https://github.com/PromtEngineer...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnRWTE1yWEtZTXFkd2JJaFZmVXFZaDBSUDlRd3xBQ3Jtc0tsQ05MemlwX2QtaEh6dUY1VFNLRWIzUG9aYzJLaUZGd1NIcFVUcEtqN1NEVkhhX0tjOXZPMVBPVDNEZVE3RmZGRU5zN3RFYTlJejhtRjk3V3R4eEUtUEU4ZjZPdEpSVzhPYW10RXlTU2l2SlZiNUkxQQ&q=https%3A%2F%2Fgithub.com%2FPromtEngineer%2FlocalGPT-Vision&v=p7yRLIj9IyQ)
https://huggingface.co/blog/manu...
https://weaviate.io/developers/w...

Relevant Videos:
  ￼ • No Chunks, No Embeddings: OpenAI...  
  ￼ • Could This Gemini Trick Replace ...  
  ￼ • Multimodal RAG - Chat with Text,...  
  ￼ • OpenAI’s [[concepts/responses|Responses]] API: The Easi...
