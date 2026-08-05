---
wiki-ingested: true
domain: ai-agents
group: training-fine-tuning-evaluation
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=hztWQcoUbt0>

This video demonstrates how to fine-tune embedding models to optimize the [[concepts/document-retrieval|document retrieval]] step in a Retrieval Augmented Generation (RAG) pipeline. The primary focus is on achieving domain-specific performance improvements efficiently and cost-effectively, without the need to fully retrain large embedding models or re-embed vast [[concepts/knowledge-bases|knowledge bases]].
**1\. The Problem & The [[concepts/solution|Solution]]: Linear Adapters**

* **Challenge:** While base embedding models are generally effective for RAG, they might not be optimized for specific domains. Full fine-tuning of these large models is computationally expensive and resource-intensive, requiring re-embedding the entire knowledge base if weights change.
* **Proposed Solution:** Based on recent research (specifically, "Efficient Domain Adaptation of Sentence [[concepts/vector-representations|Embeddings]] Using Adapters" and ChromaDB's "Embedding Adapters" technical report), a lightweight "query-only linear adapter" can significantly improve retrieval performance.
* **How it Works:** Instead of modifying the base [[concepts/embedding-model|embedding model]], a small, trainable linear layer is added _after_ the query is embedded but _before_ similarity calculation with the document embeddings. This adapter transforms the query embedding to better align it with relevant documents in the vector space.
* **Benefits:** **Super Lightweight:** Only a single linear transformation layer is trained. **Minimal Compute:** Can be trained quickly on modest [[concepts/hardware|hardware]]. **No Re-embedding:** The pre-computed document embeddings in the [[concepts/vector-database|vector database]] remain unchanged. **Effective:** Proven to be almost as effective as full [[concepts/embedding-model-fine-tuning|embedding model fine-tuning]] for domain adaptation.

**2\. Defining the RAG Application & Data Creation**

* **Goal:** To improve the [[concepts/accuracy|accuracy]] and ranking of documents retrieved for user questions in a RAG application.
* **Main Document:** [[entities/apple|Apple]]'s 2024 Environmental Progress Report (a 113-page PDF), chosen for its length and suitability for Q&A.
* **Chunking:** The document is split into manageable chunks using a token-based RecursiveCharacterTextSplitter (mimicking [[entities/openai|OpenAI]]'s file search tool defaults: 800 tokens chunk size, 400 tokens overlap), resulting in 215 chunks.
* **Synthetic Dataset Creation:** Real-world labeled query-document pairs are ideal but often unavailable. The video demonstrates generating synthetic data using a [[concepts/large-language-model|Large Language Model]] (LLM) – a technique supported by recent research ("Improving [[concepts/text-embeddings|Text Embeddings]] with [[concepts/large-language-models|Large Language Models]]"). **Process:** For each of the 215 document chunks, GPT-4o mini is prompted to generate 20 "realistic, similar, but unique" user questions that would naturally retrieve that specific chunk. This results in 4300 query-chunk pairs. **Train/Validation Split:** These pairs are shuffled and split into an 80/20 train/validation set (3440 training pairs, 860 validation pairs).

**3\. Setting Up the Vector Database & Baseline Evaluation**

* **Vector Database:** ChromaDB is used as the application's vector database.
* **Embedding Model (Base):** The `sentence-transformers/all-MiniLM-L6-v2` model is used for embeddings (384-dimensional). This is the model whose performance [[entities/will|will]] be optimized.
* **Document Retrieval Function:** A standard function is defined to retrieve the top K (default 10) most similar documents from ChromaDB based on a query embedding.
* **Evaluation Metrics:** **Mean Reciprocal Rank (MRR):** Measures how high the first correct answer appears in the retrieved list (higher is better, 1.0 is perfect). **[[concepts/recall|Recall]]@K (Hit Rate):** Measures the proportion of queries where the correct answer is found within the top K results (higher is better).
* **Baseline Performance (using only** `**all-MiniLM-L6-v2**`**):** Recall@10: 0.6116 (meaning for 61.16% of queries, the correct answer was in the top 10). MRR: 0.3133 (meaning on average, the first correct result appeared at position ~3.2 out of 10). **Goal:** Improve these baseline metrics.

**4\. Linear Adapter Training & Performance**

* **Training Techniques:** **Random Negative Sampling:** To help the adapter learn to distinguish between relevant and irrelevant information, an irrelevant document ([[entities/nvidia|NVIDIA]]'s 10K Form) is loaded and randomly sampled for negative examples during training. **Triplet Margin Loss:** This loss function encourages the model to bring similar embeddings (query and positive document) closer together in the embedding space while pushing dissimilar embeddings (query and negative document) further apart. The loss is calculated based on triplets: (Anchor: Query, Positive: Correct Document, Negative: Irrelevant Document).
* **PyTorch Implementation:** A simple `LinearAdapter` class is created (inheriting from `nn.Module`) with a single `nn.Linear` layer (384 input features, 384 output features). A `TripletDataset` class is also created to prepare the data for the triplet loss function.
* **Training Script:** A standard PyTorch training loop is implemented with a [[concepts/learning|learning]] rate scheduler (warmup and decay phases), AdamW optimizer, and gradient clipping. Hyperparameters like learning rate (0.003), batch size (32), warmup steps (100), and triplet loss margin (1.0) are chosen based on the referenced research papers.
* **Results (using the 30-epoch trained adapter):** **Recall@10:** Improved to **0.667** (66.7% hit rate). This is a **4.8 percentage point increase** (from 61.9% baseline), representing a **7.8% improvement**. **MRR:** Improved to **0.332**. This means the expected document now tends to be placed at position **3.0** (compared to 3.2 baseline), representing a **6.2% improvement**.
* **Visualization & Conclusion:** The graphs clearly show the improvement in both MRR and Hit Rate on the validation data as the adapter is trained. The 30-epoch model provided the best balance without significant overfitting. This demonstrates that even with a simple linear adapter and synthetically generated [[concepts/training-data|training data]], substantial [[concepts/performance-gains|performance gains]] can be achieved in RAG retrieval, making it a highly efficient and compute-effective method for domain adaptation. If user queries are similar to the training data, this approach can lead to a significant boost in documented retrieval.

## Related Concepts
- [[concepts/linear-adapters|Linear Adapters]] — [Wikipedia](https://en.wikipedia.org/wiki/Linear_Adapters)
- [[concepts/fine-tuning|Fine Tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/Fine_Tuning)
- [[concepts/embedding-models|Embedding Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Embedding_Models)
- [[concepts/domain-specific-performance|Domain-Specific Performance]] — [Wikipedia](https://en.wikipedia.org/wiki/Domain-Specific_Performance)
- [[concepts/knowledge-base|Knowledge Base]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Base)
- [[concepts/local-llm|Cost-Effective Solutions]] — [Wikipedia](https://en.wikipedia.org/wiki/Cost-Effective_Solutions)

## Related Entities
- [[entities/adam-lucek|Adam Lucek]] — [Wikipedia](https://en.wikipedia.org/wiki/Adam_Lucek)
- Retrieval Augmented Generation (RAG) — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation_%28RAG%29)
- {'name': '[[entities/adam-luceck|Adam Lucek]]', 'description': ''} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27Adam_Lucek%27%2C_%27description%27%3A_%27%27%7D)