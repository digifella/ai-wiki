---
wiki-ingested: true
title: "Lift: Datalab's AI for Schema-Constrained Local Structured Data Extraction"
date: 2026-07-11
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
type: "source-summary"
aliases:
  - "lab-notes/2026-07-11-Lift-Datalabs-AI-for-Schema-Constrained-Local-Structured"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Lift: Datalab's AI for Schema-Constrained Local Structured Data Extraction
**Clip title:** Lift: Schema-Based [[concepts/pdf-parsing|PDF Extraction]] Tested Locally on 10 Languages
**[[entities/tasia-custode|Author]] / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=pFnVflk-4Fk

### Summary
The video introduces "[[entities/lift|Lift]]," an AI model developed by [[entities/datalab|Datalab]], designed to address the challenges of extracting [[concepts/json-structuring|structured data]], specifically JSON, from PDF documents and images. The [[entities/speaker|speaker]] highlights the common frustrations with general [[concepts/large-language-model-llm|large language models]] (LLMs) which often produce [[concepts/malformed-json|malformed JSON]], omit fields, or struggle with accuracy across complex or multi-page documents. Lift tackles this by utilizing "schema-constrained decoding," ensuring that the output JSON always conforms to a pre-defined schema, preventing hallucinations and correctly identifying missing fields as null.

Lift's capabilities extend to processing multi-page documents and rendered images, making it versatile for various real-[[entities/earth|world]] [[concepts/scenarios|scenarios]]. A benchmark comparison shows Lift, a 9-billion parameter model, achieving a 90.2% field accuracy, placing it competitively against larger, hosted solutions like Datalab API and [[entities/gemini-3-flash|Gemini Flash 3]].5. This performance, combined with its ability to run locally on a single GPU (demonstrated on an [[concepts/nvidia-rtx|NVIDIA RTX]] A6000 with 48GB [[concepts/vram|VRAM]]), positions Lift as an efficient and powerful tool for structured [[concepts/data-extraction|data extraction]] without relying on heavy cloud-based systems.

The video showcases two practical demonstrations of Lift's effectiveness. First, it extracts detailed information from an AI-generated invoice PDF into a [[concepts/structured-data|structured JSON]] schema. The model successfully identifies and correctly types fields such as invoice number, dates, addresses, and line items, returning accurate numerical values and `null` for empty fields like PO number or sales rep, thus avoiding erroneous fabrications. The second, more rigorous test involves a three-page multilingual ledger containing ten orders, each presented in a different language with localized field labels and diverse numerical formats (e.g., Hindi numerals, comma-separated [[concepts/decimal-places|decimals]] in Spanish).

Despite the increased complexity, Lift accurately extracts the [[concepts/json-structuring|structured data]], correctly identifying languages, converting localized numerals and decimals to standard formats, and leaving intentionally missing fields as `null`. While acknowledging minor imperfections (e.g., some garbled Hindi product names and an incorrect Bengali city), the overall outcome is impressive. Lift successfully maps diverse linguistic and formatting elements into a single, clean, [[concepts/structured-data|structured JSON]] output, demonstrating its robust cross-language and complex [[concepts/document-interaction|document handling]] capabilities.

In conclusion, Lift offers a compelling [[concepts/solution|solution]] for businesses and developers needing reliable [[concepts/structured-data-extraction|structured data extraction]] from various document formats. Its key [[concepts/innovation|innovation]] lies in schema-constrained decoding, which guarantees valid and well-typed JSON output, preventing common LLM pitfalls. The model's ability to operate effectively on local hardware, even with challenging multilingual and multi-page documents, provides a powerful and practical alternative to more resource-intensive general-purpose AI solutions.

### Video Description & Links
#### Description
This video locally installs tests lift, a structured extraction model that pulls structured JSON out of [[concepts/pdfs|PDFs]] and images. 

#liftai 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

▶ https://huggingface.co/datalab-to/lift

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/datalab-to/lift

## Related Concepts
- [[concepts/structured-data-extraction|Structured Data Extraction]]
- [[concepts/schema-constrained-ai|Schema-Constrained AI]]
- [[concepts/json-generation|JSON Generation]]
- [[concepts/deployment-automation|PDF Processing]]
- [[concepts/qwen-llms|Local AI Inference]]
- [[concepts/multi-language-support|Multi-Language Support]]
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/data-accuracy|Data Accuracy]]
- [[concepts/document-parsing|Document Parsing]]
- [[concepts/malformed-json|Malformed JSON]]
- [[concepts/schema-constrained-ai|Schema-Constrained Decoding]]
- [[concepts/document-based-qa|Hallucination Prevention]]
- [[concepts/gpu-acceleration|GPU Acceleration]]

## Related Entities
- [[entities/lift|Lift]]
- [[entities/datalab|Datalab]]
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)