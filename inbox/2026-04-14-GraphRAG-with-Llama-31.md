---
wiki-ingested: true
title: "GraphRAG with Llama 31"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[concepts/graphrag|GraphRAG]] with [[concepts/llama-31|Llama 31]]

---
---
<https://www.youtube.com/watch?v=nkbyD4joa0A>
Channe: [[entities/coding-crash-courses|Coding Crash Courses]]
This video demonstrates how to perform GraphRAG (Retrieval Augmented Generation using graphs) with a local [[concepts/large-language-model|Large Language Model]] (LLM), Llama 3.1, and the [[entities/neo4j|Neo4j]] [[concepts/graph-database|graph database]], highlighting the power and cost-effectiveness of [[concepts/local-solutions|local solutions]] for this approach.
Here's a detailed [[concepts/summary|summary]]:
**1\. What is GraphRAG and Why is it Useful?**

* GraphRAG is an RAG approach that considers the **[[concepts/relationships|relationships]] between entities (or documents)**.
* **Key Concepts:** **[[concepts/nodes|Nodes]]:** Represent entities or concepts extracted from data chunks (e.g., people, organizations, events, locations). Nodes contain attributes and properties. **Relationships:** Represent connections and relations between nodes (e.g., hierarchical like parent-child, temporal like before-after, causal like cause-effect). Relationships also have properties describing their [[entities/nature|nature]] and strength.
* **Benefit:** When dealing with many documents, this creates a rich graph [[concepts/structure|structure]] that describes complex relationships, providing deeper context than simple [[concepts/vector-search|vector search]].
* **Drawback:** GraphRAG is computationally expensive because it requires extracting entities and relationships from each document using an LLM, and then computing the graph structure.

**2\. [[concepts/solution|Solution]]: [[concepts/local-llm|Local LLM]] (Llama 3.1 with [[entities/llama|Ollama]]) & Neo4j**

* To mitigate the [[concepts/cost|cost]] and computational burden, the video proposes using a locally [[concepts/running|running]] LLM.
* **Tools:** **Llama 3.1:** A state-of-the-[[concepts/art|art]] LLM from [[entities/meta-ai|Meta]]. **[[entities/ollama|Ollama]]:** A framework for running [[concepts/large-language-models|large language models]] locally. **Neo4j:** A graph database for storing the extracted [[concepts/vector-store|knowledge graph]].

**3\. Demonstration Scenario:**

* Creating a [[concepts/knowledge-graph|knowledge graph]] from information about a large Italian family who owns multiple restaurants in different places. This scenario involves many people, locations, businesses, and intricate relationships.

**4\. [[concepts/setup|Setup]] Steps:**

* **Ollama Setup:** Download Ollama from `ollama.com` for your operating system (macOS, [[entities/linux|Linux]], [[entities/windows|Windows]]). Verify installation via `ollama --help` in the terminal. Pull the Llama 3.1 model using `ollama run llama3.1:8b` (or choose larger [[concepts/models|models]] like 70B, 405B if your [[concepts/hardware|hardware]] supports it, as they offer better results but are significantly larger in size).
* **Neo4j Setup:** Use a `docker-compose.yaml` file to set up a Neo4j instance. This includes building from a `neo4j` folder which contains a `Dockerfile` to integrate the `apoc` plugin (necessary for some graph features). Run `docker-compose up` in the terminal to start the Neo4j container.
* **[[concepts/python|Python]] Environment ([[entities/vs-code|VS Code]] / Jupyter [[concepts/notebook|Notebook]]):** Install required Python packages: `langchain-community`, `langchain-openai`, `langchain-ollama`, `langchain-experimental`, `neo4j`, `tiktoken`, `yfiles_jupyter_graphs`, `python-dotenv`. Import various classes from [[entities/langchain|LangChain]] for prompts, parsers, graph [[concepts/integration|integration]] (`Neo4jGraph`, `LLMGraphTransformer`), embeddings (`OpenAIEmbeddings`), and vector stores (`Neo4jVector`). Load environment variables from a `.env` file ([[entities/openai|OpenAI]] API Key, Neo4j URI, username, password). Instantiate `Neo4jGraph` to connect to the database.

**5\. Graph Creation Process:**

* **Data Loading & Chunking:** Load text data from `dummytext.txt` using LangChain's `TextLoader`. Split the loaded text into smaller chunks (chunk size 250, overlap 24) using `RecursiveCharacterTextSplitter`.
* **LLM Graph Transformation:** Initialize `LLMGraphTransformer` with the chosen LLM (Llama 3.1 via ChatOllama, or GPT-4o-mini as a fallback). Call `llm_transformer.convert_to_graph_documents(documents)`: This crucial step uses the LLM to extract nodes (entities) and relationships from each document chunk. (Note: This step is computationally intensive, taking several minutes even for small datasets, as observed in the video.) The output is a list of `GraphDocument` objects, showing the extracted nodes (with IDs and types) and relationships.
* **Storing in Neo4j:** Use `graph.add_graph_documents()` to persist the `GraphDocument` objects into the Neo4j database.
* **Graph Visualization:** Connect to Neo4j using the database driver and a [[concepts/session|session]]. Run a Cypher query (`MATCH (s)-[r:MENTIONS]->(t) RETURN s,r,t`) to fetch all connected [[concepts/nodes-and-relationships|nodes and relationships]]. Use `yfiles_jupyter_graphs.GraphWidget` to visualize the intricate knowledge graph directly in the Jupyter notebook, showcasing the relationships between different entities.

**6\. Hybrid Retrieval Setup:**

* To enable efficient searching, a hybrid retrieval approach is used: **Vector Store Creation:** Create a `Neo4jVector` index from the existing graph using `Neo4jVector.from_existing_graph`. This allows semantic search on the document contents within Neo4j. **[[concepts/entity-extraction|Entity Extraction]] for Querying:** Define a Pydantic `Entities` class to specify the desired output structure for entity extraction (list of strings for names). Create an `entity_chain` using `llm.with_structured_output(Entities)` with a [[concepts/system-prompt|system prompt]] guiding the LLM to extract person and organization entities. This chain is invoked with a user question (e.g., "Who are Nonna Lucia and Giovanni Caruso?") to extract relevant entity names.
* **Graph Retriever Function:** A `graph_retriever` function is defined: It first uses the `entity_chain` to extract entities from the user's question. Then, it constructs a Cypher query to retrieve the neighborhood of these extracted entities from the Neo4j graph, focusing on "MENTIONS" relationships and returning related nodes and their connections. This provides structured, relevant information from the knowledge graph.
* **Full Hybrid Retriever Function:** A `full_retriever` function combines both approaches: It calls `graph_retriever` to get graph-based context. It also calls the `vector_retriever` to get semantically similar document chunks. The outputs from both are combined into a single string (`final_data`) that serves as the context for the final LLM query.

**7\. Final RAG Chain and Query:**

* A standard LangChain RAG chain is constructed: A `ChatPromptTemplate` is defined, instructing the LLM to answer based _only_ on the provided `context` and the `question`. The `chain` is built by: Passing the prompt template. Assigning the `context` dynamically by invoking the `full_retriever` function (`RunnablePassthrough.assign(context=full_retriever)`). Passing the output to the LLM (Llama 3.1). Using `StrOutputParser` for clean string output.
* **Example Query:** The chain is invoked with a question like "Who is Nonna Lucia? Did she teach anyone about restaurants or cooking?".
* **Result:** The LLM successfully retrieves and synthesizes information from the hybrid context (both graph and vector data) to provide an accurate answer: "Nonna Lucia is the matriarch of the Caruso family and a culinary mentor. She taught her grandchildren the art of Sicilian cooking, including recipes for Caponata and Fresh Pasta."

The video concludes by emphasizing the effectiveness of this GraphRAG approach with local LLMs and Neo4j for enhancing RAG [[concepts/capabilities|capabilities]] by leveraging structured relational knowledge.