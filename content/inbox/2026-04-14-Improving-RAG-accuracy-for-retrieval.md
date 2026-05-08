---
wiki-ingested: true
title: "Improving RAG accuracy for retrieval"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: applied-ai-workflows
---
# Improving RAG [[concepts/accuracy|accuracy]] for retrieval

---
---
<https://www.youtube.com/watch?v=smGbeghV1JE>
This video details how a client project successfully improved the [[concepts/recall|recall]] of its Retrieval-Augmented Generation (RAG) system from 50-60% to over 95%. The core improvements involved leveraging [[concepts/large-language-models|Large Language Models (LLMs)]] for both advanced [[concepts/data-indexing|data indexing]] and [[concepts/structured-query-generation|structured query generation]].
**Initial RAG [[concepts/setup|Setup]] (Starting Point):**

1. **Overview:** A classic RAG [[concepts/application-building|application building]] an internal chatbot for customer service staff.
	Data was fetched from various customer databases and document repositories. Preprocessed (cleaned, chunked, embedded) into a search index. A chatbot, built with [[entities/openai|OpenAI]] [[concepts/models|models]], connected to this search index. Users asked natural language questions, the bot retrieved relevant data, and returned results.
	
2. **Indexing:**
	Data included "Locations" (spas, gyms) and "Experts" (massage therapists, trainers). Each record had a `description`, `city`, and `region`. These text fields were combined into a `content` field. Embeddings of the `content` field were created for [[concepts/vector-search|vector search]]. The data was loaded into [[entities/azure|Azure]] [[concepts/ai-search|AI Search]] (acting as a [[concepts/vector-database|vector database]]).
	
3. **Retrieval:**
	User queries (e.g., "Swedish massage in Helsinki") were directly run against the search index. Two search [[concepts/methods|methods]] were initially tried: **Vector search** against `content_vector` field. **Full-text [[concepts/bm25|BM25]] search** against `content` field.
	

**Problems Encountered (Recall 50-60%):**

* **Overall low recall:** Only 50-60% of correct documents were retrieved.
* **Vector Search limitations:** It was a "total no-go" for this use case. While useful for fuzzy, semantic matching, the project required _exact_ matches for services and locations. Vector search often returned semantically similar, but incorrect, results (e.g., other types of massage, other capital cities).
* **BM25 limitations:** Not much better than vector search. Relied on the _frequency_ of search terms. A document might rank highly simply because it mentioned "massage" many times, even if it didn't offer "Swedish massage," while a precisely matching document with fewer term mentions would be ranked lower. **Conjugation was a big issue:** Especially for Finnish (the primary language), different grammatical forms of words (e.g., "Helsinki" vs. "Helsingissä") prevented exact matches with BM25.

**Advanced [[concepts/solution|Solution]] (Recall ~95%+):**
The solution involved using LLMs to enhance the data _before_ retrieval.

1. **Advanced Indexing (Indexing + LLMs):**
	**New** `**services**` **field:** A crucial change was adding a dedicated `services` field to both Location and Expert documents. This field was a list of _exact_ services offered. **LLM for service extraction:** The `services` data was not directly available. So, during the indexing pipeline (after cleaning data, before loading to the vector DB), an LLM was used to: Ingest the raw `description` text (e.g., "In our spa-section, you can enjoy hot stone therapy and relaxing Swedish massages"). Extract a structured list of services (e.g., `['hot stone therapy', 'swedish massage']`). The `content_vector` field (for vector search) was subsequently removed as it wasn't providing the desired precision.
	
2. **Advanced Retrieval (Retrieval with Structured Queries):**
	Instead of directly passing the raw [[concepts/user-query|user query]] to the search index, another LLM was introduced in the front-end: The LLM takes the user's [[concepts/natural-language-query|natural language query]] (e.g., "Swedish massage in Helsinki"). It then _restructures_ or _rewrites_ this query into a precise, structured search query using filters for specific fields (like `city` and the new `services` field). **Example structured query:** `{"search": "*", "filter": "city eq 'Helsinki' and services/any(s: s eq 'swedish massage')"}`. This structured query ensures that results are filtered _precisely_ by city and the exact services offered, rather than relying on fuzzy or frequency-based matching.
	

**Results and Trade-offs:**

* **Pros:** **Recall jumped dramatically:** For expert- and location-based searches, recall improved from 50-60% to **~95%+**, nearing 100%. Almost all previously highlighted user issues vanished.
* **Cons (Trade-offs):** **Increased indexing [[concepts/cost|cost]]:** Documents now had to be run through an LLM for service extraction, adding to processing costs. **Slight latency to front-end:** Query restructuring via an LLM added a minor delay before search results were fetched. **Mitigation:** The additional costs were deemed well worth it given the significant improvement in tool usability for hundreds of internal users, saving thousands of hours. The query restructuring LLM could be a smaller, faster model as inputs/outputs are short.

**Key Takeaway ("Don't sleep on GAR"):**
The project demonstrated that not only can Retrieval Augment Generation (RAG) allow retrieval to support LLMs, but the reverse is also true: **LLMs can be used to support and improve retrieval itself.** By using LLMs to extract [[concepts/structured-data|structured data]] during indexing and to generate structured, precise queries during retrieval, the system achieved a highly reliable performance.