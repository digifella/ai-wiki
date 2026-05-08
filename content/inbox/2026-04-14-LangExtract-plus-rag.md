---
wiki-ingested: true
title: "LangExtract plus rag"
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
# LangExtract plus rag

---
---
https://www.youtube.com/watch?v=RPpGIxmdZYs

The video introduces LangExtract, a Gemini-powered [[concepts/document-processing|information extraction]] library, and demonstrates how it can be used to build an enhanced Retrieval-Augmented Generation (RAG) system with proper [[concepts/metadata-matching|metadata matching]] to address challenges in [[concepts/traditional-rag|traditional RAG]] [[concepts/systems|systems]].
**Problem with Traditional RAG Systems (0:00)** Traditional RAG systems process documents, chunk them into text, and then store embeddings of these chunks in a [[concepts/vector-database|vector database]]. A major issue arises when documents have different versions or are from different sources. When a query is made, the system often retrieves chunks from all versions and sources, leading to "mixed results" and a "confused LLM" because it lacks the awareness to differentiate between document versions or contexts.
**[[concepts/solution|Solution]]: [[concepts/metadata|Metadata]] (0:26)** A simple solution is to add reliable metadata to each text chunk. The challenge then becomes how to extract this metadata from [[concepts/unstructured-data|unstructured data]].
**Introducing LangExtract (0:46)** The video introduces LangExtract, an [[concepts/open-source|open-source]] project from [[entities/google|Google]] (though not an official product), as a solution. LangExtract converts unstructured data into [[concepts/structured-data|structured data]] using [[concepts/large-language-models|large language models]] like the [[concepts/gemini|Gemini]] series. It allows users to define a custom schema for extraction, which is crucial for controlling the quality of the metadata. The video shows an example where a radiology report, initially unstructured, is processed by LangExtract to produce structured findings with significance.
**Building a LangExtract-Enhanced RAG System (1:46)** The video outlines a proposed [[concepts/architecture|architecture]] for an enhanced RAG system:

1. **Documents:** Input documents (e.g., v1.0, v2.0, v3.1).
2. **LangExtract:** Extracts metadata (e.g., API names, versions) and creates "smart chunks" with content and context.
3. **Vector DB with Metadata Index:** Stores both embeddings and the extracted metadata.
4. **Query:** A [[concepts/user-query|user query]] (e.g., "OAuth in v2.0?").
5. **Query Parser:** Extracts metadata filters from the query (e.g., `version=v2.0`, `service=Auth`).
6. **Metadata Filter:** Filters the results from the Vector DB based on the extracted metadata, ensuring "precise results" with "only v2.0 Auth docs," leading to "clean context" and "accurate answers."

**[[concepts/code|Code]] Implementation Walkthrough (2:03)**

* **[[concepts/setup|Setup]]:** Imports necessary packages (`langextract`, `os`, `textwrap`, `re`, `typing`, `dotenv`). Loads environment variables, including the [[entities/gemini-api|Gemini API]] key.
* **Sample Data (**`**get_sample_documents()**`**):** A [[concepts/python|Python]] function provides sample technical documentation. This includes: [[concepts/authentication|Authentication]] API Reference v2.0 (updated March 2024). Authentication API Reference v1.0 (Legacy, updated January 2023). [[entities/storage|Storage]] Service Guide (updated April 2024). Troubleshooting Guide: Authentication Errors (updated March 2024). Each document has an `id`, `title`, and `content` (raw [[concepts/unstructured-text|unstructured text]]).
* **Metadata Extraction (**`**FixedLangExtractProcessor**` **class):** The `__init__` method attempts to import `langextract` and initializes it. The core `extract_metadata` method takes documents as input and returns a list of dictionaries, each containing the original document's ID, title, and content, plus the extracted `metadata`. **[[concepts/prompt-engineering|Prompt Engineering]]:** The method defines an `improved_extraction_prompt` that specifies the fields to extract from technical documentation: `service_name`, `version_number`, `document_category` (must be 'reference', 'guide', or 'troubleshooting'), `rate_limits`, and `deprecated_items`. Precise [[concepts/instructions|instructions]] are given for extracting specific values (e.g., exact service name, only the version number). **[[concepts/few-shot-examples|Few-Shot Examples]]:** The system provides `better_examples` (few-shot examples) to guide the LLM on how the structured data should look. This is crucial for controlling the quality of extraction. **LangExtract Call:** It iterates through each document's content, calling `self.lx.extract()` with the `text_or_documents`, `prompt_description`, `examples`, and `model_id` (`gemini-2.5-flash` by default). The `extraction_passes` parameter can be set to 1 or 2 for more accurate results, though it increases [[entities/api-calls|API calls]]. **Processing and Normalization (**`**_process_and_normalize**`**):** This helper function initializes default metadata fields and then populates them based on the LangExtract results, ensuring [[concepts/logical-consistency|consistency]]. **Regex Fallback (**`**_enhanced_regex_extraction**`**):** A regex-based extraction is included as a fallback if LangExtract fails to extract key metadata fields.
* **Smart [[concepts/vector-store|Vector Store]] (**`**SmartVectorStore**` **class):** The `add_documents` method stores the documents, now enriched with metadata. The `search` method takes a query and optional filters. If no filters are provided, it performs a basic keyword search on the content. **Smart Filtering:** If filters are provided, it iterates through documents and applies fuzzy matching for `service` and exact matching for `version` and `doc_type` based on the query-extracted filters.
* **Smart Filter Extraction from Query (**`**extract_smart_filters()**`**):** This function uses [[concepts/regular-expressions|regular expressions]] and conditional logic to parse the user's query and extract relevant filters like `version`, `service`, and `doc_type`.
* **Demo Execution and Results (7:54):** The `main()` function loads the sample documents, extracts metadata using the `FixedLangExtractProcessor`, and displays the normalized metadata for each document. It then indexes these enriched documents into the `SmartVectorStore`. Four test queries are run: "How do I authenticate with OAuth in version 2.0?" "What are the [[concepts/rate-limits|rate limits]] for authentication?" "How do I troubleshoot 401 errors?" "Tell me about storage [[concepts/pricing|pricing]]." For each query, the system first extracts smart filters from the query. It then performs a search **with** metadata filtering and a search **without** filtering. **Results Analysis:** **Query 1:** With smart filters (`version: 2.0`, `service: Authentication API`), only one relevant document (`auth_v2`) is retrieved. Without filtering, all four documents are returned. **Query 2:** With smart filters (`service: Authentication API`), three documents related to authentication (both v2.0 and v1.0, plus troubleshooting for authentication errors) are retrieved, successfully narrowing down the search space from four. **Query 3:** With smart filters (`doc_type: troubleshooting`), one relevant document (`troubleshooting`) is found. **Query 4:** With smart filters (`service: Storage Service`), one relevant document (`storage`) is found.

**Conclusion (12:03)** The video concludes by emphasizing how LangExtract can be effectively used for metadata generation and subsequent filtering in RAG systems, leading to more precise and accurate results by reducing the amount of irrelevant data processed.