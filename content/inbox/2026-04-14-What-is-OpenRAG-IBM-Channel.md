---
wiki-ingested: true
title: "What is OpenRAG - IBM Channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
# What is [[entities/openrag|OpenRAG]] - IBM Channel

---
---
<https://youtu.be/qreMmsOY86A>
Here is a comprehensive [[concepts/markdown|Markdown]] document based on the video presentation by [[entities/david-jones-gilardi|David Jones-Gilardi]], [[entities/developer|Developer]] Relations Engineer at IBM.

* * *

# What is OpenRAG? An Overview of [[concepts/agentic-rag-systems|Agentic RAG Systems]]

**[[entities/speaker|Speaker]]:** David Jones-Gilardi, Developer Relations Engineer, IBM

## Introduction: The State of [[concepts/generative-ai|Generative AI]] [[concepts/context-windows|Context Windows]]

As Generative AI (GenAI) [[concepts/models|models]] have matured, their context windows have become massive. This has led to discussions in the tech community suggesting that **RAG (Retrieval-Augmented Generation)** might no longer be necessary.
However, even if context windows were virtually infinite, RAG remains extremely relevant for three main reasons when dealing with AI systems:

1. **Cost:** If you use an internet-based model provider, you pay by the token. Injecting massive amounts of data into a prompt for every task is highly expensive.
2. **Performance (Latency):** Processing a massive [[concepts/context-window|context window]] takes significantly more time.
3. **[[concepts/accuracy|Accuracy]]:** While LLMs are improving, their accuracy still cannot compare to the results produced when models are given _exactly_ the targeted information they need.

## What is RAG?

**Retrieval-Augmented Generation (RAG)** is a method used to inject external information into a model at runtime—specifically, information the model wasn't trained on. This is especially useful for:

* **[[concepts/domain-specific-knowledge|Domain-specific knowledge]]**
* **Protected/Private information** (data that cannot be scraped by public models)

## Enter OpenRAG

To build an effective agentic RAG system from scratch, you need three core components:

1. Quality data ingestion
2. Excellent hybrid search (for fast retrieval)
3. An orchestration layer to tie it all together

**OpenRAG** is an [[concepts/open-source|open-source]] platform of tightly integrated tools that makes standing up an effective, pre-configured agentic RAG system straightforward. It is built on top of three major platforms:

### 1\. [[concepts/docling|Docling]] (Data Ingestion)

Docling handles intelligent document ingestion. When you ingest a complex document like a PDF, it typically contains tables, images, and various text layouts. Docling identifies these components and extracts them in a way that is optimized for LLMs and [[concepts/agents|agents]]. Without this, you risk feeding "junk data" to your models, drastically reducing the accuracy and efficacy of your RAG agents.

### 2\. OpenSearch (Hybrid Search & Retrieval)

OpenSearch is a leading open-source search platform. Once documents are processed by Docling, they are sent to OpenSearch and stored as **[[concepts/vector-representations|vector representations]]**. This optimizes the data for incredibly fast search retrieval.

### 3\. Langflow (Orchestration)

Langflow provides the agentic and RAG foundation. It serves as the wiring and execution [[concepts/ai-workflow|AI workflow]] engine, providing connectivity to dozens of models and [[concepts/vector-store|vector store]] providers. Everything in OpenRAG is built upon Langflow.

## Using OpenRAG

Once OpenRAG is installed, you can immediately begin interacting with your data through a simple [[concepts/user-interface|user interface]].

* **Ingestion:** You can ingest tons of document types into your OpenRAG [[concepts/knowledge-base|knowledge base]]. You can also have the agent ingest URLs on the fly based on your conversations. All data is automatically processed with Docling and OpenSearch.
* **Querying:** Once the knowledge is in the system, you can ask questions in the [[concepts/chat-application|chat interface]]. You can search across your entire corpus of knowledge or use filters to target specific document groups.

## Customizing Your RAG System with Langflow

If you want to modify your RAG system—such as changing the model provider, swapping [[concepts/embedding-models|embedding models]], or altering how OpenRAG manages data—you can do this directly through the **Langflow Studio UI**.

### Example: Adding an [[concepts/external-data|External Data]] Source

If you want an agent to utilize both your OpenSearch [[concepts/vector-database|vector database]] and a brand-new external data source, you can map this out visually in Langflow:

1. **Map the Flow:** You define the inputs and outputs, placing an **Agent** in the center.
2. **Assign Tools:** You connect the OpenSearch component to the Agent as a tool. Then, you bring in your external data source and connect it as a second tool.
3. **Define Tool Descriptions:** _Crucial step:_ You must ensure the **name** and **description** of these tools are unique and highly descriptive. This [[concepts/metadata|metadata]] is exactly what the Agent reads to determine which data source to pull from when a user asks a question.

Once you modify the workflow in Langflow, your OpenRAG chat interface will immediately be able to query both the internal OpenSearch data and the new external data source.

### Custom Applications

OpenRAG allows for deep [[concepts/customization|customization]]. You can:

* Modify the Langflow workflow to change how data is processed _before_ it hits OpenSearch.
* Use the OpenRAG UI as a reference to build your own custom applications.
* Directly utilize the **Langflow API** to build entirely bespoke applications on top of your configured RAG logic.

## Conclusion

OpenRAG is designed so developers can stand up a complete, effective RAG platform in minutes rather than starting from scratch. Because it is fully open-source, it affords complete control and flexibility to manipulate every part of the [[concepts/data-pipeline|data pipeline]] to suit specific enterprise needs.
