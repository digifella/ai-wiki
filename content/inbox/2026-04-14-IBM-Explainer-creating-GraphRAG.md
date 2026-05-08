---
wiki-ingested: true
title: "IBM Explainer - creating GraphRAG"
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
# [[entities/ibm|IBM]] Explainer - creating [[concepts/graphrag|GraphRAG]]

---
---
<https://www.youtube.com/watch?v=Za7aG-ooGLQ>
Tip: graphrags are flexible compared to [[concepts/embedding-models|embedding models]] which require the same model to be used for retrieval as was used for the embedding

The video demonstrates how to implement **[[concepts/graph-retrieval-augmented-generation|Graph Retrieval Augmented Generation]] ([[concepts/graph-rag|Graph RAG]])**, an emerging technique that leverages [[concepts/knowledge-graphs|knowledge graphs]] and [[concepts/large-language-models|Large Language Models (LLMs)]] to populate and query [[concepts/structured-data|structured data]]. It positions Graph RAG as a powerful alternative to traditional [[concepts/vector-search|vector search]] [[concepts/methods|methods]] for LLM-powered applications.
Here's a detailed [[concepts/summary|summary]] of the process explained in the video:
**Core Concepts:**

* **Knowledge Graphs:** Unlike [[concepts/vector-databases|vector databases]] that store data as numerical embeddings, Graph RAG [[concepts/systems|systems]] represent data as interconnected entities (called [[concepts/nodes|nodes]] or vertices) and [[concepts/relationships|relationships]] (called edges). This [[concepts/structure|structure]] allows for a more meaningful representation of data, where the connections between data points are as important as the data points themselves.
* **Benefits over Vector Search:** Graph RAG provides greater depth and context to retrieved information, especially for networks and complex relationships, by allowing queries to traverse these connections. This avoids the limitation of vector RAG, which typically returns only the top semantically similar results, potentially missing broader contextual relationships.

**Demonstration Steps:**

1. **Setting up the [[concepts/graph-database|Graph Database]]:**
	The presenter uses a Jupyter [[concepts/notebook|Notebook]] for the demonstration. A local instance of a graph database, [[entities/neo4j|Neo4j]], is set up using a [[concepts/containerization|containerization]] tool (Podman in this case, but [[concepts/docker|Docker]] is also an option). Credentials (username, password) are configured for database access. The APOC library is included as a plugin for Neo4j to enable additional functionalities for working with data and graphs.
	
2. **Installing and Importing Required Libraries:**
	[[concepts/python|Python]] libraries such as `langchain-openai`, `langchain-experimental`, `langchain-community`, `langchain-neo4j`, and `jupyterlab-json-repair` are installed. Specific modules like `LLMGraphTransformer` (for entity/relationship extraction), `Document` (for text input), `PromptTemplate`, `FewShotPromptTemplate` (for [[concepts/prompt-engineering|prompt engineering]]), `Neo4jGraph`, `GraphCypherQAChain` (for graph interaction and querying), and `WatsonxLLM` (for IBM Watsonx language [[concepts/models|models]]) are imported.
	
3. **Setting up Watsonx.ai Credentials:**
	[[concepts/api-keys|API keys]] and project IDs for Watsonx.ai are set up using environment variables, and the URL for accessing these services is defined.
	
4. **Creating a [[concepts/connection|Connection]] to the Database and Defining Data:**
	A connection to the local Neo4j instance is established. Sample [[concepts/unstructured-text|unstructured text]] data (describing employees, their job titles, and the groups they work in) is defined. This text serves as the input for populating the [[concepts/vector-store|knowledge graph]].
	
5. **Using an LLM to Create a [[concepts/knowledge-graph|Knowledge Graph]]:**
	An LLM is configured with specific [[concepts/parameters|parameters]] (e.g., `decoding_method`, `max_new_tokens`, `temperature`, `top_k`, `top_p`) to control its [[concepts/text-generation|text generation]] behavior. A low temperature and high token count are recommended to encourage detailed but non-hallucinatory output. The `LLMGraphTransformer` is used to transform the unstructured text into a structured format of [[concepts/nodes-and-relationships|nodes and relationships]]. The presenter specifies allowed node types (Person, Title, Group) and relationship types (TITLE, COLLABORATES, GROUP) to guide the LLM's extraction process. The `Document` class prepares the text for input. The `convert_to_graph_documents` method generates the structured nodes and relationships from the text. These extracted nodes and edges are then inserted into the Neo4j graph database using the `add_graph_documents` method.
	
6. **Examining the Created Knowledge Graph:**
	The video shows how to visualize the populated knowledge graph in the Neo4j browser, demonstrating the interconnected entities and relationships. The schema and data types of the graph (node properties, relationship types) can also be inspected programmatically, confirming the successful structuring of the data.
	
7. **Using Natural Language to Retrieve Relational Information:**
	The core of Graph RAG querying is demonstrated. **[[entities/prompt-engineering|Prompt Engineering]] for Cypher Generation:** A `FewShotPromptTemplate` is used to provide the LLM with examples of natural language questions and their corresponding correct Cypher queries. This helps the LLM learn how to translate user questions accurately. The prompt also includes [[concepts/instructions|instructions]] to constrain the LLM's output to _only_ the Cypher query, preventing verbose or invalid [[concepts/responses|responses]]. **Prompt Engineering for Natural Language Response:** A second prompt (`qa_prompt`) instructs the LLM on how to interpret the results of the Cypher query and the original natural language question to generate a clear and concise natural language answer. Again, `FewShotPromptTemplate` is used for guidance. **Querying the Graph:** The Cypher prompt, QA prompt, the knowledge graph, and an LLM (with specific parameters optimized for retrieval, like a temperature of 0 for deterministic output) are bundled into a `GraphCypherQAChain`. The chain is invoked with natural language questions (e.g., "What is John's title?", "Who does John collaborate with?", "What group is Jane in?", "Who does Jane collaborate with?"). The outputs show: The natural language question. The Cypher query generated by the LLM. The raw results from the graph database (full context). The final natural language response from the LLM. The demonstration successfully retrieves accurate answers, even for complex queries requiring multiple outputs, by leveraging the structured relationships within the knowledge graph.
	

**Conclusion:** Graph RAG effectively transforms unstructured text into a knowledge graph and uses LLMs to intelligently query this graph, providing more contextual and comprehensive answers than traditional vector search. This method allows for insights derived from the entire structure of the data rather than just [[concepts/semantic-similarity|semantic similarity]]. The video suggests that hybrid RAG systems, combining both vector and [[concepts/graph-databases|graph databases]], could offer even more powerful [[concepts/capabilities|capabilities]].