---
wiki-ingested: true
title: "Langextract - Prompt Engineer channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: reasoning-context-prompting
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Langextract - [[entities/prompt-engineer|Prompt Engineer]] channel

---
---
<https://www.youtube.com/watch?v=dPL2vRDunMw>
The video introduces LangExtract, a new [[concepts/open-source|open-source]] project from [[entities/google|Google]] that is a Gemini-powered [[concepts/document-processing|information extraction]] library. \[0:00\] Its primary [[concepts/purpose|purpose]] is to convert [[concepts/unstructured-text|unstructured text]] data into [[concepts/structured-data|structured data]]. \[0:06\]
**Key Features and [[concepts/capabilities|Capabilities]]:**

* **Custom Schema:** LangExtract allows users to define [[concepts/custom-schemas|custom schemas]] for [[concepts/information-extraction|information extraction]], enabling the extraction of specific information they are looking for. \[0:13\]
* **Visualization:** It provides a nice visualization of the extracted information in an interactive HTML document. \[0:20, 2:54\]
* **Open Source:** LangExtract is an open-source [[concepts/python-package|Python package]] available on [[entities/github|GitHub]]. \[0:24, 0:49\]
* **[[concepts/llm-backend|LLM Backend]] Flexibility:** It supports both cloud-based [[concepts/large-language-models|Large Language Models (LLMs)]] like [[entities/gemini-ai|Google's Gemini]] family and open-source on-device [[concepts/models|models]]. \[1:06\]
* **Reliable Structured Outputs:** Users can define their desired output using LangExtract's data representation and provide "few-shot" examples. LangExtract leverages "Controlled Generation" in supported models like [[concepts/gemini|Gemini]] to ensure consistently structured outputs. \[0:50\]
* **Optimized Long-Context Information Extraction:** It handles [[concepts/knowledge-bases|information retrieval]] from large documents by using a chunking strategy, [[concepts/parallel-processing|parallel processing]], and multiple extraction passes over smaller, focused contexts. \[1:05\]
* **Flexible Across Domains:** It allows defining information extraction tasks for any domain with just a few well-chosen examples, without needing [[concepts/fine-tuning|fine-tuning]] of an LLM. \[1:05\]
* **Utilizing LLM [[concepts/world-knowledge|World Knowledge]]:** Beyond grounded entities, LangExtract can leverage an LLM's world knowledge to supplement extracted information, including implicit or inferred data. \[1:06\]

**Usage and Examples:** The video demonstrates how to use LangExtract with [[concepts/python|Python]].

1. **Installation:** Install the `langextract` package using `pip install langextract`. \[1:21\]
2. **Defining Prompt and Examples:** Define a concise prompt describing what to extract and provide high-quality "few-shot" examples to guide the model. \[1:25\] The examples consist of `ExampleData` objects, each with `text` and `extractions`. \[1:50\] `extractions` define the `extraction_class` (e.g., "[[concepts/integrity|character]]", "emotion", "relationship"), `extraction_text`, and optional `attributes` (e.g., {"emotional\_state": "wonder"}). \[2:03\]
3. **[[concepts/running|Running]] Extraction:** The `lx.extract()` function is called with `input_text`, `prompt_description`, `examples`, `model_id` (e.g., `gemini-2.5-pro`), and `api_key`. \[2:31\]
4. **Displaying Results:** The extracted entities can be printed to the console, showing the class, text, and character positions. \[4:29\]
5. **Generating Visualization:** An HTML file is generated using `lx.visualization.visualize()` to visually highlight extracted entities in context. \[4:37\]

**Practical Examples Demonstrated:**

* **Basic [[concepts/entity-extraction|Entity Extraction]] ([[entities/apple|Apple]] [[entities/inc|Inc.]] Announcement):** Extracts company, person, product, date, location, and price from a sample news text. \[3:23\]
* **Financial Report Extraction (TechCorp Quarterly Earnings Report):** Demonstrates extracting financial and business entities, including company information, stock symbols, financial metrics (revenue, income, EPS, margins), M&A activities, product launches, customer metrics, executive quotes, and forward guidance. This example also shows two levels of data: the entity and its corresponding attributes (e.g., ticker for company, period/value/change for financial metrics). \[5:48\]
* **Competitive Intelligence Extraction (News Article):** Extracts competitive intelligence like companies and their AI initiatives, investment and funding rounds, partnerships, product announcements, and key personnel. This also includes nested attributes for funding events and competitive moves. \[6:33\]
* **Customer [[concepts/feedback|Feedback]] Analysis (Product Reviews):** Extracts customer feedback insights including customer segments, company names, product features (positive/negative), [[concepts/pricing|pricing]], and quantitative metrics (ratings, savings). \[6:46\]
* **Advanced [[concepts/relationship-extraction|Relationship Extraction]] (Clinical Note):** This is highlighted as a main power of LangExtract. It extracts medication information (name, dosage, route, frequency, duration) and their [[concepts/relationships|relationships]] to medical conditions. \[7:03\] It uses `extraction_passes=2` to tell the LLM to process the information multiple times for better relationship detection, which can improve [[concepts/accuracy|accuracy]]. \[9:07\] The output can be visualized as a [[concepts/vector-store|knowledge graph]] showing relationships between conditions (red [[concepts/nodes|nodes]]), medications (green nodes), and patients (blue node). \[10:13\] For example, it shows which medication "treats" which condition. \[10:18\]

**Disclaimer:** The video explicitly states that LangExtract is _not an officially supported Google product_. It is an open-source project from some Googlers. \[11:30\] Usage is subject to the [[entities/apache-20|Apache 2.0]] [[concepts/license|License]], and for health-related applications, it is also subject to the [[concepts/health|Health]] AI [[entities/developer|Developer]] Foundations Terms of Use. \[11:31\]