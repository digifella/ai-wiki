---
wiki-ingested: true
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=qreMmsOY86A>
Here is a summary of the video "What is OpenRAG?" featuring IBM’s David Jones-Gilardi, formatted as a [[concepts/markdown|Markdown]] document.

* * *

# OpenRAG: [[concepts/agentic-rag-systems|Agentic RAG Systems]] Explained

## Introduction

As [[concepts/generative-ai|Generative AI]] models mature, **Context [[entities/windows|Windows]]** have become significantly larger. However, even with the potential for "infinite" context windows, **[[concepts/traditional-rag|Retrieval-Augmented Generation]] (RAG)** remains a critical [[concepts/architecture|architecture]] for modern AI systems.
**RAG** is the method of injecting specific, external information into a model at runtime—information it wasn't originally trained on, such as domain-specific knowledge or [[concepts/protected-corporate-data|protected corporate data]].

## Why RAG Still Beats "Infinite" Context

Even if a model _can_ take a million tokens, RAG is preferred for three main reasons:

1. **Cost:** Most model providers charge by the token. Ingesting an entire library for every query is prohibitively expensive.
2. **Performance:** Processing massive amounts of data in a single [[concepts/context-window|context window]] takes significantly more time (latency) than retrieving a targeted chunk.
3. **[[concepts/accuracy|Accuracy]]:** Models perform better and provide more precise responses when given the exact information they need rather than being forced to find a "needle in a haystack."

* * *

## The OpenRAG Stack

**OpenRAG** is an IBM-led [[concepts/open-source|open-source]] platform of tightly integrated tools designed to stand up an agentic RAG system in minutes. A complete system requires three core pillars:

### 1\. Ingestion: [Docling](https://github.com/DS4SD/docling)

* **The Problem:** Documents like PDFs contain tables, images, and complex layouts that traditional text-parsers often mangle.
* **The [[concepts/solution|Solution]]:** [[concepts/docling|Docling]] provides intelligent document ingestion. It identifies headers, tables, and images, extracting them into a format optimized for LLMs and AI agents. This ensures "clean" data enters the system.

### 2\. Retrieval: [OpenSearch](https://opensearch.org/)

* **The Role:** Functions as the "High-[[concepts/speed|Speed]] Librarian" ([[concepts/vector-database|Vector Database]]).
* **How it works:** Once Docling processes a document, the data is converted into [[concepts/vector-representations|vector representations]] and stored in OpenSearch. This allows for lightning-fast similarity searches to find relevant context for a user's query.

### 3\. Orchestration: [LangFlow](https://www.langflow.org/)

* **The Role:** The "Wiring and Execution Engine."
* **How it works:** LangFlow ties everything together. It connects the data sources to the models (like Anthropic or Granite) and manages the logic of how an [[entities/agent|agent]] decides to search, retrieve, and answer.

* * *

## How It Works

Once OpenRAG is installed, the [[concepts/workflow|workflow]] is straightforward:

* **Ingest Knowledge:** Users can upload various document types (PDFs, docs) or provide URLs on the fly.
* **Chat with Data:** Users can query their entire corpus of knowledge or use **filters** to search specific subsets of documents.
* **[[concepts/customization|Customization]] via Studio:** If you need to change your model provider or add an [[concepts/external-data|external data]] source, you can do so visually within the **LangFlow Studio**. Changes made in the flow are reflected in the OpenRAG UI immediately.
* **Extensibility:** Developers can use the OpenRAG UI as a reference or leverage the **LangFlow API** to build completely custom applications on top of the stack.

## Key Takeaway

OpenRAG is designed to move developers from **[[concepts/zero|zero]] to [[concepts/agentic-search|agentic search]] in minutes**. It provides a pre-configured, production-ready stack that is fully open-source, allowing for deep manipulation of the AI pipeline without starting from scratch.

* * *

_For more information, visit the [IBM OpenRAG repository](https://github.com/langflow-ai/openrag)._
<https://github.com/langflow-ai/openrag>

## Related Concepts
- [[concepts/retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval-Augmented_Generation_%28RAG%29)
- [[concepts/context-windows|Context Windows]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Windows)
- [[concepts/generative-ai-models|Generative AI models]] — [Wikipedia](https://en.wikipedia.org/wiki/Generative_AI_models)
- [[concepts/domain-specific-knowledge|Domain-specific knowledge]] — [Wikipedia](https://en.wikipedia.org/wiki/Domain-specific_knowledge)

## Related Entities
- [[entities/david-jones-gilardi|David Jones-Gilardi]] — [Wikipedia](https://en.wikipedia.org/wiki/David_Jones-Gilardi)
- [[entities/ibm|IBM]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM)
- Docling — [Wikipedia](https://en.wikipedia.org/wiki/Docling)
- OpenSearch — [Wikipedia](https://en.wikipedia.org/wiki/OpenSearch)
- LangFlow — [Wikipedia](https://en.wikipedia.org/wiki/LangFlow)
- [[entities/anthropic|Anthropic]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- [[entities/granite|Granite]] — [Wikipedia](https://en.wikipedia.org/wiki/Granite)