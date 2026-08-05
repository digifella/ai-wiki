---
wiki-ingested: true
title: "Cole Medin - RAG 2.0 agentic rag plus knowledge graphs"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/cole-medin|Cole Medin]] - [[concepts/rag-20|RAG 2.0]] [[concepts/agentic-rag|agentic rag]] plus [[concepts/knowledge-graphs|knowledge graphs]]

---
---
<https://www.youtube.com/watch?v=p0FERNkpyHE>

This video dives deep into building advanced Retrieval-Augmented Generation (RAG) [[concepts/systems|systems]] for AI [[concepts/agents|agents]], specifically focusing on combining **Agentic RAG** with **Knowledge Graphs**. The [[entities/speaker|speaker]] aims to find the most effective way for AI agents to search and utilize custom [[concepts/knowledge-bases|knowledge bases]].
Here's a detailed breakdown of the video's content:
**1\. The Problem & The [[concepts/solution|Solution]] (0:00)**The speaker has been exploring various RAG strategies to find the "best way possible" to give his AI agents the ability to search through his custom knowledge. He identifies Agentic RAG and Knowledge Graphs as the two most powerful strategies, and [[concepts/highlights|highlights]] that they can be easily combined to create extremely powerful knowledge retrieval systems.
**2\. Live Demo Introduction (0:30)**The video kicks off with a demonstration of the system in a [[concepts/command-line-interface|Command Line Interface]] (CLI). The Agentic RAG agent has access to both a [[concepts/vector-database|vector database]] (PostgreSQL with pgvector) and a [[concepts/vector-store|knowledge graph]] (Neo4j with [[concepts/graphiti|Graphiti]]) through agent tools. This allows the agent to intelligently pick and choose how it explores the [[concepts/knowledge-base|knowledge base]]. The speaker also mentions using [[concepts/claude-code|Claude Code]] to help build this system.
**3\. Deep Dive into the Knowledge Sources (1:30)**

* **Vector Database (PostgreSQL via Neon):** The speaker shows his PostgreSQL database, hosted on Neon, containing chunks of [[concepts/markdown|markdown]] documents, each with a corresponding embedding vector. For the demo, he has a single document titled "Big Tech AI Initiatives 2024," which is chunked and embedded.
* **[[concepts/knowledge-graph|Knowledge Graph]] (Neo4j via Graphiti):** He then showcases the same information represented in Neo4j as a knowledge graph. This relational representation highlights how different entities (like companies) are connected (e.g., [[entities/amazon|Amazon]] relates to [[entities/anthropic|Anthropic]] because Amazon invested in Anthropic; [[entities/openai|OpenAI]] relates to Azure because Azure exclusively hosts OpenAI's models). This relational [[concepts/structure|structure]] is key for advanced querying.

**4\. Agentic RAG in Action: CLI Demo with Tool Usage Visibility (3:15)**The speaker demonstrates the agent's intelligent [[concepts/tool-selection|tool selection]]:

* **Semantic Query ([[concepts/vector-search|Vector Search]]):** When asked, "What are the AI initiatives for [[entities/google|Google]]?", the agent correctly uses vector\_search to retrieve relevant document chunks.
* **Relational Query (Graph Search):** When asked, "How are OpenAI and [[entities/microsoft|Microsoft]] related?", the agent utilizes graph\_search to identify the partnership details and Azure's role.
* **Hybrid Query (Both Search Types):** For a more complex query like, "What are the initiatives for Microsoft? How does that relate to Anthropic? Use both search types", the agent leverages _both_ vector\_search and graph\_search to provide a comprehensive answer, showcasing its ability to reason and combine information from different knowledge representations.

**5\. Understanding Agentic RAG vs. Vanilla RAG (6:30)**The video uses diagrams from a Weaviate blog post to explain the fundamental difference:

* **Vanilla RAG (Inflexible):** Documents are chunked, embedded into a vector database, and then a query retrieves the most similar chunks as direct context for the [[concepts/large-language-model|Large Language Model]] (LLM). The LLM is forced to use _only_ this retrieved context. This approach is rigid and doesn't allow for dynamic search strategies.
* **Agentic RAG (Flexible):** A "Retrieval Agent" acts as an intermediary. It receives the [[concepts/user-query|user query]], then intelligently decides _which tools_ (e.g., different vector search engines, knowledge graph search, web search, calculators) to use to gather relevant information. This information is then fed to the LLM, allowing for more nuanced and accurate [[concepts/responses|responses]]. The agent's [[concepts/reasoning|reasoning]] ability is the core enhancement.

**6\. Getting the Agentic RAG System Set Up (10:37)**The speaker guides viewers through setting up their own instance of the project.

* **Prerequisites:** Python 3.11+, PostgreSQL (Neon recommended), Neo4j (local-ai-packaged or desktop recommended), and an LLM Provider API key (OpenAI, [[entities/llama|Ollama]], [[concepts/gemini|Gemini]], etc.).
* **Installation:** Create a [[concepts/virtual-environment|virtual environment]], install dependencies from requirements.txt.
* **PostgreSQL Setup:** Execute schema.sql to create necessary tables, indexes, and functions. The speaker demonstrates this in the Neon Console.
* **Neo4j Setup:** [[concepts/instructions|Instructions]] are provided for two common setup [[concepts/methods|methods]].
* **Environment Variables (.env):** Configure database [[concepts/connection|connection]] strings, Neo4j credentials, LLM provider choices (allowing for flexible switching between APIs like OpenAI, Ollama, [[entities/openrouter|OpenRouter]], Gemini), and [[concepts/embedding-models|embedding models]].
* **Document Ingestion:** Markdown documents are placed in the documents/ folder. [[concepts/running|Running]] python -m ingestion.ingest --clean processes these documents:
	* Parses and semantically chunks the documents.
	* Generates embeddings for vector search.
	* Extracts entities and [[concepts/relationships|relationships]] for the knowledge graph (a computationally expensive step that uses LLM calls).
	* Stores everything in PostgreSQL (Neon) and Neo4j.
* **Running the API Server:** python -m agent.api starts the FastAPI server, exposing the agent's API endpoints.
* **Using the CLI:** python [cli.py](https://cli.py) launches the interactive command-line interface to chat with the agent and observe its tool usage.

**7\. AI-Assisted Coding with [[entities/claude-code|Claude Code]] (28:10)**The speaker shares how Claude Code was instrumental in building this complex system:

* **Beyond [[concepts/vibe-coding|Vibe Coding]]:** He emphasizes the importance of structured development over spontaneous coding.
* **[[concepts/mcp-servers|MCP Servers]]:** He uses two "MCP" (Master Control Program) servers to manage the AI-assisted development:
	* crawl4ai-rag-[[concepts/mcp-server|mcp-server]]: Handles RAG operations, external documentation crawling, and specific PyDantic AI features.
	* mcp-server-neon: Manages Neon database operations (creating projects, running SQL, managing tables).
* **[[concepts/planning-mode|Planning Mode]] ([PLANNING.md](https://PLANNING.md), [TASK.md](https://TASK.md)):** Claude Code's "plan mode" (activated by Shift+Tab twice) forces the AI to create a comprehensive plan and task list _before_ [[concepts/writing|writing]] code. This ensures a structured approach.
	* [CLAUDE.md](https://CLAUDE.md): Contains [[concepts/global-rules|global rules]] and instructions for the AI [[entities/codex|coding assistant]] (similar to Cursor or Windsourf).
	* [PLANNING.md](https://PLANNING.md): The high-level project plan, including [[concepts/architecture|architecture]], core components, technical stack, [[concepts/design|design]] principles, etc.
	* [TASK.md](https://TASK.md): A detailed list of tasks derived from the plan, tracked by the AI.
* **Automated Development Process:** With these files as guidance, Claude Code can:
	* Create Neon database projects.
	* Execute SQL schemas and data operations.
	* Manage database tables and validate schema.
	* Fetch documentation (e.g., PyDantic AI).
	* Generate large chunks of application code.
	* Implement [[concepts/testing|testing]] and error handling.
	* **Crucially, it can literally run for an extended period (e.g., 35 minutes) to build the entire application, handling database interactions, [[entities/api-calls|API calls]], and [[concepts/code-generation|code generation]] automatically, simply requiring user approval for key actions.**
* **Power of [[concepts/agentic-ai|Agentic AI]] Development:** This approach frees developers from tedious, low-level tasks, allowing them to focus on high-level design and validation. The AI effectively becomes a highly capable, autonomous [[entities/developer|developer]].

The video concludes by reiterating the power of combining Agentic RAG and Knowledge Graphs, and highlights the potential of [[concepts/ai-coding|AI coding]] assistants like Claude Code to revolutionize [[concepts/software|software]] development.
