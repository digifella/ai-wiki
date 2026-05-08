---
wiki-ingested: true
domain: ai-agents
group: model-efficiency-compression
---
<https://www.youtube.com/watch?v=2KVkpUGRtnk>
This [[entities/youtube|YouTube]] video provides a comprehensive [[concepts/tutorial|tutorial]] on building a [[concepts/real-time-knowledge-graph|real-time knowledge graph]] from a collection of documents using [[concepts/large-language-models|Large Language Models]] (LLMs) and the Cocolndex data transformation framework, with [[entities/neo4j|Neo4j]] as the [[concepts/graph-database|graph database]].
**Project Goal:** The primary goal is to process a list of [[concepts/markdown|markdown]] documents, extract key concepts (entities) and [[concepts/relationships|relationships]] between them using LLMs, and then build a knowledge graph in Neo4j. Additionally, it aims to establish relationships indicating which entities are mentioned in which documents.
**Key Technologies Used:**

* **Cocolndex:** A real-time data transformation framework for AI, built with a [[concepts/rust-core|Rust core]] engine. It's an [[concepts/etl|ETL]] (Extract, Transform, Load) framework designed for preparing fresh data for AI, including building [[concepts/knowledge-graphs|knowledge graphs]] and creating [[concepts/vector-representations|embeddings]].
* **Neo4j:** A popular graph database used to store the knowledge graph.
* **PostgreSQL:** Used by Cocolndex internally for incremental processing, ensuring efficient updates.
* **Large Language Models (LLMs):** Specifically, [[entities/openai|OpenAI]]'s GPT-4o is used for [[concepts/summarization|summarization]] and relationship extraction. [[entities/llama|Ollama]] is mentioned as an alternative for on-premise LLM execution.
* **CocoInsight:** A data observability tool for Cocolndex, used to visualize and inspect the data flow and transformations.

**Detailed [[concepts/workflow|Workflow]] Steps:**

1. **Project [[concepts/setup|Setup]] (04:20):**
	**Prerequisites:** Install PostgreSQL (Cocolndex uses it for incremental processing), Neo4j (graph database), and configure an OpenAI API key (or set up Ollama for local LLMs). [[concepts/docker|Docker]] Compose is recommended for easy setup of databases. **Project Initialization:** Create a project folder (e.g., `graph`). Create `pyproject.toml` to define project [[concepts/metadata|metadata]] and dependencies (`cocolndex`, `python-dotenv`). Create `main.py` as the main script for the Cocolndex flow. Create `.env` file to store database URLs (`COCOINDEX_DATABASE_URL`) and the OpenAI API key (`OPENAI_API_KEY`). Install dependencies using `pip3 install -e .`
	
2. **Cocolndex Flow [[concepts/slms|Definition]] (**`**main.py**`**) (05:09):**
	**Flow Declaration:** A Cocolndex data flow named `DocsToKG` is defined. **Source Data Ingestion (05:19):** The `LocalFile` source is used to ingest markdown documents from a specified directory (`../docs/core`). It includes patterns to filter for `.md` and `.mdx` [[concepts/files|files]]. This step generates a `KTable` named `documents` with `filename` and `content` columns.
	
3. **LLM-based [[concepts/document-summarization|Document Summarization]] (07:33):**
	**Data Class Definition (07:54):** A [[entities/python|Python]] dataclass `DocumentSummary` is defined with `title: str` and `summary: str` fields. This acts as a schema for the LLM's output. **Transformation:** The `cocolndex.functions.ExtractByLlm` transformation is applied to the `content` of each document. It uses `gpt-4o` as the LLM model. `output_type` is set to `DocumentSummary` to guide the LLM's output format. `instruction` prompts the LLM to "Please summarize the content of the document." **Collector (Document [[concepts/nodes|Nodes]]) (07:41):** A collector named `document_node` is defined to gather information about each document. It collects the `filename` (as its primary key), the `title` from the LLM-generated [[concepts/summary|summary]], and the `summary` itself. This prepares the data for export as Neo4j nodes with the label `Document`.
	
4. **LLM-based Relationship Extraction (09:26):**
	**Data Class Definition (09:50):** A Python dataclass `Relationship` is defined with `subject: str`, `predicate: str`, and `object: str`. A detailed docstring is added to guide the LLM on what constitutes a relationship (e.g., nouns for subject/object, ignoring examples/code). **Transformation:** Another `cocolndex.functions.ExtractByLlm` transformation is applied to the `content` of each document. `output_type` is `list[Relationship]`, indicating that the LLM should output a list of triples. `instruction` prompts the LLM to "Please extract relationships from Cocolndex documents. Focus on concepts and ignore examples and [[concepts/code|code]]." **Collector (Entity Relationships) (09:32):** A collector named `entity_relationship` is defined to collect the extracted relationships. It assigns a UUID as a unique ID for each relationship. It collects `subject`, `object`, and `predicate` from the LLM's output.
	
5. **Document-Entity Mention Mapping (13:43):**
	**Collector (Entity Mentions):** A collector named `entity_mention` is used to create relationships indicating which entities are mentioned in which documents. This is done by collecting the `subject` and `object` from the `entity_relationship` collector, along with the original document's `filename`. This creates implicit links based on the existence of entities within a document.
	
6. **Export to Neo4j (17:31):**
	**Connection Specification:** A `conn_spec` is defined for the Neo4j database connection, including URL, username, and password. **Node Declaration (**`**Entity**` **Node) (19:22):** Since entities are generated _from_ relationships and not directly from the initial documents, a `flow_builder.declare()` statement is used to inform Cocolndex about the `Entity` node type for Neo4j. It specifies `Entity` as the label and `value` as the primary key. **Document Node Export (17:42):** `document_node.export()` maps the `document_node` collector's data to Neo4j nodes. `label` is set to "Document", and `primary_key_fields` is set to "filename". All fields from the `document_node` collector (filename, title, summary) are carried over as properties of the Neo4j "Document" nodes. **Relationship Export (19:33):** `entity_relationship.export()` maps the collected relationships to Neo4j relationships. `rel_type` is set to "RELATIONSHIP". `source` and `target` definitions use `NodeFromFields` to specify that the source and target of the relationship in Neo4j are "Entity" nodes, mapped by their "value" primary key. Fields from the `entity_relationship` collector (id, subject, object, predicate) are carried over as properties of the Neo4j "RELATIONSHIP" links. **Entity Mention Export (20:56):** `entity_mention.export()` maps the document-entity mentions to Neo4j relationships. `rel_type` is set to "MENTION". `source` is mapped to the "Document" node (using `filename`). `target` is mapped to the "Entity" node (using `value`). Fields from the `entity_mention` collector (id, entity, filename) are carried over as properties of the Neo4j "MENTION" links.
	

**Cocolndex Features Highlighted:**

* **Real-time & Incremental Processing:** Cocolndex's core strength, allowing continuous updates to the knowledge graph as source data changes.
* **ETL Framework:** Simplifies [[concepts/data-extraction|data extraction]], transformation (especially with AI assistance), and loading into target storages.
* **LLM [[concepts/integration|Integration]]:** Provides `ExtractByLlm` function to easily leverage LLMs for [[concepts/document-parsing|structured data extraction]] and summarization using data classes and prompts.
* **Property Graph Targets:** Native support for mapping data to graph elements (nodes, relationships, properties) in [[concepts/graph-databases|graph databases]] like Neo4j.
* **Deduplication:** Automatically handles deduplication of nodes based on defined primary keys, preventing redundant entries in the knowledge graph.
* **Data Observability (CocoInsight):** The `cocolndex server -ci` command launches a web interface to visually inspect the data flow, data transformations, and the intermediate states of the data.

**Conclusion:** The video successfully demonstrates how Cocolndex simplifies the complex process of building a real-time knowledge graph from unstructured documents using LLMs and a graph database like Neo4j. It emphasizes Cocolndex's ability to handle data transformations, manage data [[concepts/integrity|integrity]] through primary keys, and provide observability into the data pipeline.

## Related Concepts
- [[concepts/information-extraction|information extraction]] — [Wikipedia](https://en.wikipedia.org/wiki/information_extraction)
- [[concepts/vector-store|knowledge graph]] — [Wikipedia](https://en.wikipedia.org/wiki/knowledge_graph)
- [[concepts/llms|LLMs]] — [Wikipedia](https://en.wikipedia.org/wiki/LLMs)
- [[concepts/etl-framework|ETL framework]] — [Wikipedia](https://en.wikipedia.org/wiki/ETL_framework)
- [[concepts/vector-store|Neo4j]] — [Wikipedia](https://en.wikipedia.org/wiki/Neo4j)
- m — [Wikipedia](https://en.wikipedia.org/wiki/m)
- a — [Wikipedia](https://en.wikipedia.org/wiki/a)
- x — [Wikipedia](https://en.wikipedia.org/wiki/x)
- 1 — [Wikipedia](https://en.wikipedia.org/wiki/1)
- 6 — [Wikipedia](https://en.wikipedia.org/wiki/6)
- c — [Wikipedia](https://en.wikipedia.org/wiki/c)
- o — [Wikipedia](https://en.wikipedia.org/wiki/o)
- n — [Wikipedia](https://en.wikipedia.org/wiki/n)
- i — [Wikipedia](https://en.wikipedia.org/wiki/i)
- s — [Wikipedia](https://en.wikipedia.org/wiki/s)
- [[concepts/transcendental-number|e]] — [Wikipedia](https://en.wikipedia.org/wiki/e)
- t — [Wikipedia](https://en.wikipedia.org/wiki/t)
- h — [Wikipedia](https://en.wikipedia.org/wiki/h)
- l — [Wikipedia](https://en.wikipedia.org/wiki/l)
- p — [Wikipedia](https://en.wikipedia.org/wiki/p)

## Related Entities
- Large Language Models (LLMs) — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLMs%29)
- [[entities/rust|Rust]] — [Wikipedia](https://en.wikipedia.org/wiki/Rust)
- [[entities/ai|AI]] — [Wikipedia](https://en.wikipedia.org/wiki/AI)
- m — [Wikipedia](https://en.wikipedia.org/wiki/m)
- a — [Wikipedia](https://en.wikipedia.org/wiki/a)
- [[entities/x|x]] — [Wikipedia](https://en.wikipedia.org/wiki/x)
- 1 — [Wikipedia](https://en.wikipedia.org/wiki/1)
- 2 — [Wikipedia](https://en.wikipedia.org/wiki/2)
- n — [Wikipedia](https://en.wikipedia.org/wiki/n)
- e — [Wikipedia](https://en.wikipedia.org/wiki/e)
- d — [Wikipedia](https://en.wikipedia.org/wiki/d)
- p — [Wikipedia](https://en.wikipedia.org/wiki/p)
- o — [Wikipedia](https://en.wikipedia.org/wiki/o)
- l — [Wikipedia](https://en.wikipedia.org/wiki/l)
- , — [Wikipedia](https://en.wikipedia.org/wiki/%2C)