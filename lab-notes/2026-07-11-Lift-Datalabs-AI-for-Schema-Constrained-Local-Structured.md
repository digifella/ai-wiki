---
title: "Lift: Datalab's AI for Schema-Constrained Local Structured Data Extraction"
date: 2026-07-11
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Lift: Datalab's AI for Schema-Constrained Local Structured Data Extraction
Generated: 2026-07-11 · API: Gemini 2.5 Flash · Modes: Summary

---

## Lift: Datalab's AI for Schema-Constrained Local Structured Data Extraction
**Clip title:** Lift: Schema-Based PDF Extraction Tested Locally on 10 Languages
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=pFnVflk-4Fk

### Summary
The video introduces "Lift," an AI model developed by Datalab, designed to address the challenges of extracting structured data, specifically JSON, from PDF documents and images. The speaker highlights the common frustrations with general large language models (LLMs) which often produce malformed JSON, omit fields, or struggle with accuracy across complex or multi-page documents. Lift tackles this by utilizing "schema-constrained decoding," ensuring that the output JSON always conforms to a pre-defined schema, preventing hallucinations and correctly identifying missing fields as null.

Lift's capabilities extend to processing multi-page documents and rendered images, making it versatile for various real-world scenarios. A benchmark comparison shows Lift, a 9-billion parameter model, achieving a 90.2% field accuracy, placing it competitively against larger, hosted solutions like Datalab API and Gemini Flash 3.5. This performance, combined with its ability to run locally on a single GPU (demonstrated on an NVIDIA RTX A6000 with 48GB VRAM), positions Lift as an efficient and powerful tool for structured data extraction without relying on heavy cloud-based systems.

The video showcases two practical demonstrations of Lift's effectiveness. First, it extracts detailed information from an AI-generated invoice PDF into a structured JSON schema. The model successfully identifies and correctly types fields such as invoice number, dates, addresses, and line items, returning accurate numerical values and `null` for empty fields like PO number or sales rep, thus avoiding erroneous fabrications. The second, more rigorous test involves a three-page multilingual ledger containing ten orders, each presented in a different language with localized field labels and diverse numerical formats (e.g., Hindi numerals, comma-separated decimals in Spanish).

Despite the increased complexity, Lift accurately extracts the structured data, correctly identifying languages, converting localized numerals and decimals to standard formats, and leaving intentionally missing fields as `null`. While acknowledging minor imperfections (e.g., some garbled Hindi product names and an incorrect Bengali city), the overall outcome is impressive. Lift successfully maps diverse linguistic and formatting elements into a single, clean, structured JSON output, demonstrating its robust cross-language and complex document handling capabilities.

In conclusion, Lift offers a compelling solution for businesses and developers needing reliable structured data extraction from various document formats. Its key innovation lies in schema-constrained decoding, which guarantees valid and well-typed JSON output, preventing common LLM pitfalls. The model's ability to operate effectively on local hardware, even with challenging multilingual and multi-page documents, provides a powerful and practical alternative to more resource-intensive general-purpose AI solutions.

### Video Description & Links
#### Description
This video locally installs tests lift, a structured extraction model that pulls structured JSON out of PDFs and images. 

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon code: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#liftai 

PLEASE FOLLOW ME: 
▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://huggingface.co/datalab-to/lift

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.fahdmirza.com
- https://huggingface.co/datalab-to/lift
