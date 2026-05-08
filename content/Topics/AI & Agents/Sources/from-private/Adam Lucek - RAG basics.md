---
wiki-ingested: true
domain: undecided
group: needs-review
---
<https://www.youtube.com/watch?v=v3LtPuQNwh8>
This video provides a comprehensive and intuitive breakdown of **Retrieval Augmented Generation (RAG)**, explaining what it is, why it's important, how it works, and demonstrating its practical benefits.
Here's a detailed [[concepts/summary|summary]] of the key concepts and processes:

### What is Retrieval Augmented Generation (RAG)?

* **Simple [[concepts/slms|Definition]]:** RAG is a technique that augments a [[concepts/large-language-model|large language model]]'s (LLM) generation process by providing it with relevant, up-to-date information alongside a user's query. The goal is to obtain accurate and contextually rich answers or actions.
* **Why it's Important:** **LLM Limitations:** While LLMs are incredibly capable and knowledgeable (possessing "intrinsic knowledge" from their [[concepts/training-data|training data]]), they often lack access to: **Up-to-date information:** Their training data has a cutoff date (e.g., GPT-4o's is Oct 2023), so they cannot answer questions about recent events or information released after their training. **Domain-specific or proprietary information:** LLMs aren't typically trained on internal company documents or niche technical [[concepts/technical-specs|specifications]]. **Nature of Generation:** LLMs are designed to generate _novel text_ based on patterns learned during training, not to precisely regurgitate facts. This can lead to "hallucinations" or less accurate responses when precise data is required. **RAG's [[concepts/solution|Solution]]:** RAG builds upon the LLM's intrinsic knowledge by: Retrieving the _right context_ at the _right time_. Enriching the LLM's input with external, up-to-date, or specialized information. Leading to more accurate, correct, and contextually grounded responses, especially for niche or esoteric data.

### The RAG Pipeline: How It Works

The RAG pipeline involves two main phases: **[[concepts/data-indexing|Data Indexing]]** (or Knowledgebase Preparation) and **[[concepts/source-discovery|Data Retrieval]] & Generation**.

### Phase 1: Data Indexing (Knowledgebase Preparation)

This phase prepares your external knowledge to be queryable by the LLM.

1. **Data Loading (Documents):**
	**[[concepts/unstructured-data|Unstructured Data]]:** RAG typically deals with "unstructured data" – information not stored in traditional tabular databases. Examples include PowerPoints, Word documents, emails, [[entities/microsoft-excel|Excel]] files, images, audio recordings, and PDFs. **Conversion to Ingestible Form (Text-Based Processing):** LLMs primarily process raw text. **Tokenization:** Behind the scenes, text is converted into numerical "tokens" (pieces of words or phrases) for the LLM to process. These numbers also encode the semantic meaning. **Multimodal Inputs:** While some modern LLMs (like [[entities/gemini-2-5-pro|Gemini 2.5 Pro]]) are starting to accept multimodal inputs (text, video, audio, images, PDFs directly), text remains the primary focus for RAG. **Example:** A PDF datasheet for the Bosch BMV080 sensor was converted into raw [[concepts/markdown|Markdown]] text using a vision-language model ([[concepts/optical-character-recognition|OCR]]). This makes the content readable by the LLM.
	
2. **Data Splitting (Chunking):**
	**[[concepts/context-window|Context Window]] Limitation:** LLMs have a "context window," which is an upper limit on the amount of text they can process in a single input. To handle large documents, text needs to be broken into smaller, manageable "pieces" or "chunks." **Strategies:** There are various [[concepts/text-chunking|chunking strategies]] (fixed-size, semantic, recursive, document-structure-based, LLM-based). A common approach involves splitting text by common separators (periods, line breaks, paragraph starts) or by a specific token limit (e.g., 1200 tokens). **Challenge:** The key challenge is maintaining contextual coherence within chunks, ensuring important information isn't split across pieces (e.g., keeping tables or [[concepts/code|code]] blocks together). An "overlap" between chunks can help preserve context. **Example:** The ~22,000-token datasheet was split into 28 chunks of roughly 1200 tokens with 400 tokens of overlap, respecting Markdown headers for initial splitting.
	
3. **Data Embedding (Vector Embedding):**
	**Problem:** Now that the knowledge is split into many chunks, a system is needed to find the _most relevant_ chunks based on a user's query. **[[concepts/encoding|Encoding]]:** This is done by "encoding" the text into a numerical representation known as a "text embedding." This involves a separate, smaller language model (a "sentence transformer") that is specifically trained to convert text into high-dimensional vectors (lists of numbers). **Semantic Meaning:** These [[concepts/vector-representations|embeddings]] capture the _underlying semantics_ (meaning and nuances) of the text. Similar concepts (e.g., "dog" and "cat" vs. "Toyota Prius") are mapped to points that are numerically "closer" in the high-dimensional vector space. **Usefulness:** This numerical representation allows for mathematical comparisons to determine [[concepts/semantic-similarity|semantic similarity]].
	
4. **Data Storing (Vector DB):**
	**Efficient Storage:** Once chunks are embedded into vectors, they are stored in a "[[concepts/vector-database|vector database]]." These databases are optimized for storing and efficiently querying (retrieving based on similarity) large-scale vector data.
	

### Phase 2: Data Retrieval & Generation

This phase happens at runtime when a user submits a query.

1. **User Query:** The user submits their question.
2. **Query Embedding:** The user's query is also embedded into a vector using the same [[concepts/embedding-model|embedding model]] used for the chunks.
3. **Retrieval:** The query's embedding vector is then used to perform a [[concepts/vector-search|similarity search]] within the vector database. The vector database retrieves the "top K" (e.g., top 5) most semantically similar chunks (documents) from the [[concepts/knowledge-base|knowledge base]]. This ensures that only the most relevant context is selected for the LLM.
4. **Generation:** The retrieved relevant chunks (as "context") are combined with the original user query into a single, comprehensive prompt. This augmented prompt is then sent to the large language model (LLM). The LLM uses this provided context, alongside its own intrinsic knowledge, to generate a more accurate, detailed, and contextually appropriate final response.

### Practical Demonstration Recap:

The video demonstrates the RAG advantage using a niche technical question about the **Bosch Particulate Matter Sensor BMV080** (a product released _after_ GPT-4o's [[concepts/knowledge-cutoff|knowledge cutoff]]): "What is the maximum power consumption of the BMV080 in continuous measurement mode?"

* **Without RAG:** GPT-4o responded "1.3 mA," which is incorrect.
* **With RAG:** The query was passed through the RAG pipeline. The relevant information (from the datasheet, specifically the table showing "Continuous mode: 181.9 mW") was retrieved and provided to the LLM. The LLM then correctly answered "181.9 mW."

This clearly illustrates RAG's ability to provide LLMs with crucial external knowledge, overcoming their inherent limitations and significantly improving the [[concepts/accuracy|accuracy]] of their responses for domain-specific queries.

<https://raw.githubusercontent.com/ALucek/RAG-Overview/refs/heads/main/rag_breakdown.ipynb>

## Related Concepts
- [[concepts/retrieval-augmented-generation-rag|Retrieval Augmented Generation (RAG)]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation_%28RAG%29)
- [[concepts/large-language-model-llm|Large Language Model (LLM)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Model_%28LLM%29)
- [[concepts/information-provision|Information Provision]] — [Wikipedia](https://en.wikipedia.org/wiki/Information_Provision)
- [[concepts/contextualized-knowledge|Contextualized Knowledge]] — [Wikipedia](https://en.wikipedia.org/wiki/Contextualized_Knowledge)
- [[concepts/user-query|User Query]] — [Wikipedia](https://en.wikipedia.org/wiki/User_Query)
- [[concepts/answer-generation|Answer Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Answer_Generation)

## Related Entities
- [[entities/adam-lucek|Adam Lucek]] — [Wikipedia](https://en.wikipedia.org/wiki/Adam_Lucek)
- [[entities/rag-basics|RAG basics]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG_basics)