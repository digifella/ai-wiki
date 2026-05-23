---
type: concept
domain: tools-platforms
updated: 2026-05-23
group: automation-scheduling-sync
---
# ETL

Extract, Transform, Load ([[concepts/extraterrestrial-life|ETL]]) is a core data [[concepts/integration|integration]] process for consolidating data from disparate sources into a unified target system (e.g., data warehouse or [[concepts/vector-store|knowledge graph]]). It comprises:
- **Extract**: Pulling raw data from sources (databases, documents, APIs).
- **Transform**: Cleaning, normalizing, and enriching data (e.g., [[concepts/entity-extraction|entity extraction]] via LLM).
- **Load**: Storing transformed data into target systems (e.g., [[entities/neo4j|Neo4j]] [[concepts/graph-database|graph database]]).

## Modern Applications
- [[concepts/etl-framework|Cocoindex framework]] for LLM-powered [[concepts/rag]] [[concepts/knowledge-graphs|knowledge graphs]]: Processes [[concepts/markdown|markdown]] documents to extract entities/[[concepts/relationships|relationships]] via LLM and loads [[concepts/json-structuring|structured data]] into Neo4j, enabling [[concepts/real-time-knowledge-graph|real-time knowledge graph]] [[concepts/software|applications]] (see: 2026 04 14 Cocoindex channel and knowledge Graphs for [[concepts/llm-rag|LLM RAG]]).
