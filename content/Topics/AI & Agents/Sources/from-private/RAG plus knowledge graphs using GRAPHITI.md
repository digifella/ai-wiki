---
wiki-ingested: true
domain: undecided
group: needs-review
---
<https://www.youtube.com/watch?v=PxcOIINgiaA>
This video By [[entities/colemedin|Cole Medin]] provides a comprehensive overview of Retrieval Augmented Generation (RAG) and introduces [[concepts/graphiti|Graphiti]], an [[concepts/open-source|open-source]] platform designed to address RAG's limitations, particularly in dynamic data environments.
**1\. RAG and its Limitations (0:00 - 0:47)**

* RAG is widely used in AI [[concepts/agents|agents]] to provide them with external documents and build knowledge bases.
* However, RAG suffers from limitations:
	* **Poor Retrieval Quality:** Retrieved context might not be relevant enough.
	* **Poor [[concepts/context-utilization|Context Utilization]]:** LLM might not cite relevant parts of the retrieved context.
	* **Hallucinated [[concepts/responses|Responses]]:** LLM generates information not grounded in the retrieved context.
* A major challenge is RAG's static [[entities/nature|nature]]. It's the developer's responsibility to constantly synchronize the [[entities/agent|agent]]'s [[concepts/knowledge-base|knowledge base]] with dynamic data ([[concepts/user-control|user preferences]], internal metrics, market conditions). This process is inefficient and unreliable, making traditional RAG struggle to keep up with evolving information.

**2\. Introducing Graphiti: Real-Time Knowledge Graphs (0:47 - 1:25)**

* Graphiti aims to solve the static data problem by building "temporal-aware knowledge graphs" for AI agents.
* It acts as a dynamic layer on top of traditional RAG.
* **Key Concept:** Instead of just updating a fact, Graphiti creates a historical record. For example, if "Kendra loves Adidas shoes" changes to "Kendra loves Puma shoes" because her Adidas broke, Graphiti invalidates the old fact with a timestamp and adds the new fact, along with the reason for the change. This allows the AI agent to understand how knowledge evolves over time and query [[concepts/historical-context|historical context]].
* This temporal awareness is crucial for dynamic environments like customer support agents needing to understand past user preferences.

**3\. Graphiti Overview and Comparison (1:25 - 5:37)**

* Graphiti leverages Neo4j as its [[concepts/graph-database|graph database]] engine to store interconnected facts as [[concepts/nodes-and-relationships|nodes and relationships]]. This [[concepts/structure|structure]] allows for powerful semantic, keyword, and graph-based searches.
* **Graphiti vs. GraphRAG/LightRAG:**
	* **Primary Use:** GraphRAG/LightRAG are for static [[concepts/document-summarization|document summarization]] (e.g., documentation that doesn't change often), while Graphiti is for dynamic [[concepts/data-management|data management]].
	* **Data Handling:** [[concepts/graphrag|GraphRAG]] uses batch processing; Graphiti supports continuous, incremental updates.
	* **Knowledge Structure:** GraphRAG focuses on entity clusters and community summaries; Graphiti offers more granular episodic data, semantic entities, and communities.
	* **Temporal Handling:** GraphRAG has basic timestamp tracking; Graphiti provides explicit bi-temporal tracking (recording both when a fact was valid and when it was invalidated).
	* **Query Latency & Scalability:** GraphRAG can have seconds to tens of seconds latency and moderate scalability; Graphiti boasts typically sub-second latency and is highly optimized for large [[concepts/training-data|datasets]], making it suitable for production environments.

**4\. Quickstart and Knowledge Graph Demo (5:37 - 16:46)**

* **Requirements:** [[entities/python|Python]] 3.10+, Neo4j 5.2+, and an OpenAI API key (or alternative LLM providers like [[entities/google|Google]] [[concepts/gemini|Gemini]], Anthropic, [[entities/llama|Ollama]] for local hosting).
* **Neo4j [[concepts/setup|Setup]]:** Can be run via Neo4j Desktop or as part of a [[concepts/docker|Docker]] Compose [[concepts/local-ai|local AI]] package for a fully self-hosted [[concepts/solution|solution]].
* **Adding "Episodes" (Data):** Graphiti allows flexible data ingestion. Episodes can be simple text strings or structured JSON objects. The LLM automatically extracts entities and relationships. The temporal aspect (e.g., valid\_at, invalid\_at) is key.
* **Searching:** Graphiti provides a simple [graphiti.search](https://graphiti.search)() function for hybrid semantic/BM25 retrieval. It also supports "center node search" to refine queries around a specific entity in the graph, preventing irrelevant [[concepts/knowledge-bases|information retrieval]].
* **Live Demo:** The [[entities/speaker|speaker]] demonstrates creating a knowledge graph in Neo4j, showing nodes and relationships forming as data is inserted. Even with LLM unpredictability in forming relationships, the core connections are strong.

**5\. Real-Time RAG AI Agent with LLM Evolution Demo (16:46 - 24:47)**

* This demo showcases a Pydantic AI agent interacting with a Graphiti knowledge graph.
* **Phased Knowledge Injection:** The script inserts information about "best LLMs" in phases (e.g., [[entities/gemini-2-5-pro|Gemini 2.5 Pro]] is best, then [[entities/claude-4|Claude 4]] emerges, then "Massive Language [[concepts/models|Models]]" make LLMs obsolete).
* **Agent's Temporal [[concepts/reasoning|Reasoning]]:**
	* When asked "What is the best LLM?", the agent initially responds based on the first phase (Gemini 2.5 Pro).
	* After Claude 4 is introduced (Phase 2), the agent correctly identifies Claude 4 as the best, but _also_ mentions Gemini 2.5 Pro was _previously_ the best, demonstrating its temporal awareness and historical context.
	* After the "Massive Language Models" are introduced (Phase 3), the agent explains that traditional LLMs like Claude 4 are now obsolete, highlighting the dynamic nature of its knowledge.
* This showcases Graphiti's power in enabling AI agents to provide robust, context-aware answers by understanding how information changes over time.

**6\. Graphiti and [[concepts/agentic-rag|Agentic RAG]] (24:47 - 26:40)**

* The speaker emphasizes that knowledge graphs and traditional [[concepts/vector-databases|vector databases]] are complementary, not competing.
* An "ideal RAG solution" often combines both: an AI agent uses tools to query both a KG (for structured, temporal data) and a [[concepts/vector-database|vector database]] (for [[concepts/unstructured-text|unstructured text]]).
* This "agentic RAG" approach allows the agent to decide the best retrieval method based on the query, leading to highly effective and accurate responses.
* Graphiti is presented as a top contender for the knowledge graph component in such advanced RAG architectures due to its dynamic, temporal, and scalable capabilities.

## Related Concepts
- [[concepts/rag|RAG]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG)
- [[concepts/knowledge-graphs|Knowledge Graphs]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Graphs)
- [[concepts/vector-store|Retrieval Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation)
- [[concepts/traditional-rag|Information Retrieval]] — [Wikipedia](https://en.wikipedia.org/wiki/Information_Retrieval)
- [[concepts/contextualized-language-understanding|Contextualized Language Understanding]] — [Wikipedia](https://en.wikipedia.org/wiki/Contextualized_Language_Understanding)
- [[concepts/dynamic-data-environments|Dynamic Data Environments]] — [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_Data_Environments)

## Related Entities
- [[entities/cole-medin|Cole Medin]] — [Wikipedia](https://en.wikipedia.org/wiki/Cole_Medin)
- [[entities/graphiti|GRAPHITI]] — [Wikipedia](https://en.wikipedia.org/wiki/GRAPHITI)
- [[entities/neo4j|Neo4j]] — [Wikipedia](https://en.wikipedia.org/wiki/Neo4j)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/ollama|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[entities/anthropic|Anthropic]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- [[entities/google-gemini|Google Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Gemini)
- Docker Compose — [Wikipedia](https://en.wikipedia.org/wiki/Docker_Compose)