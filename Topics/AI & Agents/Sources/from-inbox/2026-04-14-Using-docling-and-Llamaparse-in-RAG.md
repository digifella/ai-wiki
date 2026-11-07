---
wiki-ingested: true
title: "Using docling and Llamaparse in RAG"
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

# Using [[concepts/docling|docling]] and Llamaparse in RAG

---
---
<https://www.youtube.com/watch?v=eHw_6jhK8AM>
The video explores how to integrate diverse file formats into AI agents, focusing on Retrieval Augmented Generation (RAG) systems. The presenter introduces three [[concepts/document-parsing|document parsing]] solutions: LlamaParse, Docling, and [[entities/mistral-ocr|Mistral OCR]], and demonstrates their setup and use within [[concepts/n8n-workflows|n8n workflows]].
**1\. Overview of [[concepts/file-ingestion|File Ingestion]] into AI Agents:**

* **Problem:** AI agents need to interact with various data types beyond just text. A significant portion of organizational data (80-90%) is unstructured, including documents, presentations, spreadsheets, images, and audio.
* **[[concepts/solution|Solution]]:** The video outlines a RAG workflow to import over 95 file formats into a [[concepts/vector-database|vector database]]. This allows AI agents to query and interact with this vast amount of data.
* **Process:** **Step 1: Import Data:** Files (e.g., Word, PDF, PPT) are processed by OCR/AI Models (LlamaParse, Docling, Mistral OCR). **Extraction:** These models extract information into structured [[concepts/markdown|Markdown]] format. **Chunking:** The Markdown is broken into smaller chunks. **Embedding:** An [[concepts/embedding-model|embedding model]] converts chunks into numerical vectors. **Storage:** Vectors are stored in a vector database. **Step 2: Query & Retrieve Data:** A user queries the AI agent. The query is converted into a vector, which is used to search the vector database for semantically relevant results (top-K). An LLM processes these results to generate a response.

**2\. Document Parsing Solutions:**

* **LlamaParse:**
	**Features:** Extensive file compatibility (95+ formats), quick and easy setup, API-based. **Usage:** Demonstrated on LlamaCloud ([[entities/llamaindex|LlamaIndex]].ai) with a PDF. It extracts formatted Markdown, Text, JSON, and can also generate images and Excel outputs. **Pricing:** Uses a credit system ($1 for 1000 credits). Different parsing modes consume varying credits (e.g., "Agentic" mode is 10 cred/page). The free tier offers 10k credits/month (approx. 1000 pages in "Agentic" mode). **n8n [[concepts/integration|Integration]]:** The video shows how to integrate LlamaParse with n8n using an HTTP Request node to send a PDF and receive a Markdown output. It covers API key setup and parameter configuration.
	
* **Docling:**
	**Features:** [[concepts/open-source|Open-source]], self-hostable, no external APIs, cost-effective, good for strict data [[concepts/secure|security]]. Parses multiple document formats (PDF, DOCX, PPTX, XLSX, HTML, WAV, MP3, images). **Deployment:** Demonstrated using Render.com (a PaaS). The presenter deploys a Docling Serve CPU image as a web service. **Resource Requirements:** Docling is resource-intensive, requiring at least a "Standard" Render.com plan (2GB RAM, 1 CPU) for basic functionality. **n8n Integration:** The video explains how to use an HTTP Request node in n8n to call the self-hosted Docling API. It constructs a JSON payload with parsing options and the document's URL.
	
* **Mistral OCR:**
	**Features:** Very fast, high quality, affordable, easy to integrate, API-based. **Limitations:** Supports only PDF file types. **Use Case:** Ideal if primarily dealing with PDFs and looking for a cost-effective, [[entities/high-performance|high-performance]] solution without self-hosting. **n8n Integration:** The video references a separate [[concepts/tutorial|tutorial]] for Mistral OCR integration but highlights its use in multimodal RAG.
	

**3\. n8n Workflow for Multi-file Type Ingestion:**
The video presents a comprehensive n8n workflow for ingesting various files into a vector database:

* **Trigger:** Manually triggered (or could be set to listen for new files in [[entities/google-drive|Google Drive]]).
* **File Download:** An HTTP Request node downloads the target file (e.g., a DOCX or PDF from a Supabase storage bucket).
* **LlamaParse Integration:** Another HTTP Request node sends the binary file to LlamaParse (using an API key stored as a generic credential in n8n). This request configures parsing options like `high_res_ocr` and `adaptive_long_table` for optimal results.
* **Polling for Results:** A `Wait` node introduces a delay (e.g., 10 seconds) to allow LlamaParse to process the document. A `Switch` node checks the `status` of the LlamaParse job. If `PENDING`, a second `Wait` node (e.g., 3 seconds) and another HTTP Request node (using the "Get Job" endpoint) poll LlamaParse until the status is `SUCCESS`. This loop ensures that the workflow waits for parsing to complete.
* **Retrieve Markdown:** Once `SUCCESS`, an HTTP Request node (using the "Get Job Raw Md Result" endpoint) retrieves the parsed Markdown content.
* **Vector Database Ingestion:** **[[concepts/vector-representations|Embeddings]]:** An "Embeddings OpenAI" node converts the Markdown content into vector embeddings. **Document Loader:** A "Default Data Loader" node prepares the data for chunking. **Text Splitter:** A "[[concepts/recursive-character-text-splitter|Recursive Character Text Splitter]]" node chunks the document, specifying "markdown" as the split code. **Vector Store:** A "Supabase Vector Store" node adds the embeddings and chunks to a Supabase table.
* **AI Agent Interaction:** A simple AI agent using "OpenAI Chat Model" and "Simple Memory" is configured to query the Supabase Vector Store. Users can ask questions, and the agent retrieves relevant information from the ingested documents to respond.

**4\. Advanced RAG Ingestion Pipeline:**

* The video briefly showcases a more complex, fully-fledged RAG ingestion pipeline for n8n, which handles: File creation and updates from Google Drive. Dynamically selecting parsing methods (LlamaParse or other custom solutions) based on file MIME types. Handling different file types ([[entities/google-docs|Google Docs]], PDFs, HTML, CSV, Excel, [[entities/google-sheets|Google Sheets]]) with specific processing logic. Managing updates and deletions to avoid data duplication or staleness. [[concepts/metadata|Metadata]] enrichment and contextual embeddings for improved retrieval.
* This advanced pipeline is available to the presenter's community members.

**Key Takeaways:**

* Robust document parsing is crucial for building powerful AI agents that can interact with diverse, [[concepts/unstructured-data|unstructured data]].
* Solutions like LlamaParse offer extensive file compatibility and ease of use through APIs.
* Open-source, self-hostable options like Docling provide cost-effectiveness and enhanced data security for sensitive applications.
* n8n provides a flexible platform to orchestrate complex RAG workflows, integrating various parsing services, handling asynchronous operations, and managing data ingestion into [[concepts/vector-databases|vector databases]].
* Effective RAG implementation involves careful consideration of parsing quality, [[concepts/text-chunking|chunking strategies]], and retrieval mechanisms to ensure accurate and relevant AI responses.
