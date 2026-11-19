---
wiki-ingested: true
title: "Thu Vu - build a knowledge graph from unstructured text using Python, Langchain, and Neo4j, with the"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: undecided
group: needs-review
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=undecided name=Undecided

# [[entities/thu-vu|Thu Vu]] - build a [[concepts/vector-store|knowledge graph]] from [[concepts/unstructured-text|unstructured text]] using [[entities/python|Python]], [[entities/langchain|Langchain]], and [[entities/neo4j|Neo4j]], with the

---
---
<https://www.youtube.com/watch?v=O-T_6KOXML4>
This video by Thu Vu demonstrates how to build a knowledge graph from unstructured text using Python, Langchain, and Neo4j, with the help of [[concepts/large-language-models|Large Language Models]] (LLMs). The author, Thu Vu, walks through the process step-by-step, covering:
**1\. Understanding [[concepts/knowledge-graphs|Knowledge Graphs]]:**

* A knowledge graph is a structured representation of entities and their [[concepts/relationships|relationships]].
* It provides a bird's-eye view of how everything is connected, helping to understand complex topics and relationships.
* Unlike traditional databases (tables, columns, rows), knowledge graphs represent data in a network of [[concepts/nodes|nodes]] and edges.

**2\. Building Knowledge Graphs with LLMs:**

* Traditionally, building knowledge graphs from unstructured text was a labor-intensive process.
* However, LLMs, especially models like GPT-4o and [[concepts/open-source|open-source]] LLMs, can automate this by extracting entities and relationships.
* The video highlights how LLMs can extract relevant information and represent it in a structured format, which can then be visualized as a graph.

**3\. Applications of Knowledge Graphs:**

* **Understanding Complex Data:** They help in visualizing relationships between various entities, making complex data more understandable.
* **Improving Search Results:** Knowledge graphs enhance search relevance by understanding the context and relationships between keywords.
* **Fraud Detection:** They can identify suspicious patterns and relationships in financial transactions that might be missed by traditional methods.
* **Drug Research & Discovery:** They aid in analyzing complex relationships between genes, chemical compounds, diseases, and symptoms.
* **Learning & Study:** They transform text into interactive learning experiences, making complex subjects easier to grasp.

**4\. Technical Implementation: starts at 10:43**

* The video demonstrates the use of Langchain's `LLMGraphTransformer` and `Pyvis` for visualizing the graph.
* It involves setting up a Python environment, installing necessary libraries (Langchain, [[entities/openai|OpenAI]], Python-dotenv, Pyvis), and obtaining an OpenAI API key.
* The process involves defining `allowed_nodes` and `allowed_relationships` to filter the [[concepts/data-extraction|data extraction]].
* The [[concepts/code|code]] snippet shows how to load the API key, initialize the LLM, and then use the `LLMGraphTransformer` to convert text documents into graph data.
* Finally, it demonstrates how to visualize the generated knowledge graph using Pyvis, creating an interactive HTML file.

**5\. Author's Background:**

* Thu Vu has 7 years of experience as a data analyst and data scientist at a Big4 company.
* She creates [[entities/youtube|YouTube]] videos about data [[concepts/science|science]] and AI.
* Her goal is to teach Python for data science and AI projects, making them accessible even to those without a technical background.

The video provides a practical demonstration of how to use these tools to create a knowledge graph from a given text, showcasing the extracted [[concepts/nodes-and-relationships|nodes and relationships]] in a visual format. It aims to empower viewers to build similar projects and apply these techniques in their own work.