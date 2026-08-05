---
wiki-ingested: true
title: "RAG re-ranking with pruning - channel Prompt Engineering"
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
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[concepts/rag-re-ranking|RAG re-ranking]] with pruning - channel [[concepts/prompt-engineering|Prompt Engineering]]

---
---
<https://www.youtube.com/watch?v=TvWhDZGzJiI>
This video introduces a [[concepts/context-engineering|context engineering]] technique called **Provence** that aims to substantially reduce [[concepts/hallucination|hallucination]] in Retrieval Augmented Generation (RAG) [[concepts/systems|systems]] by **efficiently pruning irrelevant information** from retrieved contexts before they are fed to the [[concepts/large-language-model|Large Language Model]] (LLM).
Here's a breakdown of the key points:

1. **The "Garbage In, Garbage Out" Problem in RAG:**
	Regardless of whether you use an advanced RAG or a standard RAG system, the quality of the context provided to the LLM is crucial. Bad context leads to bad outputs (hallucinations). **[[concepts/vanilla-rag|Vanilla RAG]]:** [[concepts/user-query|User query]] -> Index -> Documents (top-k chunks) -> LLM -> Response. The main issue here is noise in the retrieved chunks. **RAG with Re-ranker:** User query -> Index -> Documents (top-n chunks) -> Re-ranker (selects top-k relevant chunks) -> LLM -> Response. While rerankers improve chunk relevance, they still pass _entire chunks_. Even within highly relevant chunks, many sentences might be irrelevant to the specific user query, introducing noise.
	
2. **Practical Demonstration of the Problem:**
	The [[entities/speaker|speaker]] uses a local RAG system (localGPT) to query a technical report ([[concepts/deepseek-v3|DeepSeek-V3]]) about its [[concepts/training|training]] [[concepts/cost|cost]]. Despite the correct cost being present in the document, the initial RAG output (even with hybrid search, 20 retrieved chunks, and reranking to 10 chunks) provides only the GPU hours, not the dollar amount. The retrieved chunks are large (512 [[concepts/tokens|tokens]]), and even the "relevant" ones contain extraneous information like table data and details about training mechanisms, burying the specific cost figure. The LLM struggles to extract the precise number due to this noise.
	
3. **Introducing Provence: Context Pruning for RAG:**
	Provence is based on a new paper (January 2025) titled "Provence: efficient and robust context pruning for retrieval-augmented generation." **Core Idea:** Instead of just filtering chunks, Provence works at the **sentence level**. It takes a retrieved chunk and the user query, and then removes only the sentences that are _irrelevant_ to the query, while still preserving the local context (i.e., it doesn't process sentences in isolation, ensuring clarity for dependent sentences). **Key Features:** **Sentence-level relevance:** It identifies and removes only truly irrelevant sentences within a chunk. **Context [[concepts/preservation|Preservation]]:** It encodes all sentences together using a cross-encoder [[concepts/architecture|architecture]], allowing it to understand the [[concepts/relationships|relationships]] between sentences and avoid pruning out necessary [[concepts/contextual-information|contextual information]]. **Automatic Relevance Detection:** Provence automatically determines the number of relevant sentences, removing the need to set this as a manual hyperparameter. **Performance:** Provence consistently outperforms other approaches (including standalone rerankers) in various benchmarks, maintaining performance with little-to-no drop while achieving significant context compression (e.g., 80% compression rate in the provided example). This means fewer tokens are sent to the LLM, leading to faster [[concepts/inference|inference]] and lower costs.
	
4. **Implementation and Usage:**
	The Provence model (`naver/provence-reranker-debertav3-v1`) is available on [[entities/hugging-face|Hugging Face]]. The speaker provides a [[entities/google-colab|Google Colab]] [[concepts/notebook|notebook]] demonstrating its usage. You load the model, provide the full context and the question, and Provence returns a `pruned_context` (a much smaller, cleaner text snippet) along with a `reranking_score` and `compression_rate`. **[[concepts/integration|Integration]] into RAG Pipeline:** Provence can be integrated as an additional step _after_ the initial retriever and re-ranker, or it can potentially replace the re-ranker entirely, directly taking the initial retrieved chunks and pruning them before passing to the LLM.
	
5. **Limitations:**
	The primary limitation highlighted is the **[[concepts/license|license]]:** Provence is currently licensed under CC BY-NC 4.0, which means it cannot be used for commercial purposes. The speaker hopes for an [[concepts/apache-2.0|Apache 2.0]] or MIT-licensed version to be trained by the community in the future.
	

In conclusion, Provence offers a promising approach to refine context for RAG systems, leading to more accurate, less hallucinatory, and more efficient [[concepts/responses|responses]] by intelligently reducing noise at the sentence level.
<https://github.com/PromtEngineer/localGPT>

<https://colab.research.google.com/drive/1sMVAivJ1pn-7iNnByEPF4aUlQPCt_s39?usp=sharing>

<https://huggingface.co/naver/provence-reranker-debertav3-v1>

<https://arxiv.org/pdf/2501.16214>