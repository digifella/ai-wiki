---
type: concept
domain: ai-agents
group: training-fine-tuning-evaluation
tags:
  - "concept"
  - "hallucination"
  - "llm-behavior"
  - "numerical-errors"
  - "ai-evaluation"
  - "document-processing"
aliases:
  - "number hallucination"
  - "numerical inaccuracy"
summary: Numerical hallucination refers to instances where language models generate incorrect numbers or numerical data, discussed in the context of document processing solutions like LiteParse.
updated: 2026-05-01
---
# Numerical Hallucination

Numerical hallucination refers to the tendency of [[concepts/large-language-model-llm|large language models]] (LLMs) to generate incorrect, fabricated, or nonsensical numerical data when processing text. This occurs when models produce numbers that do not appear in source documents or contradict the actual data present. The phenomenon represents a specific category of [[concepts/data-hallucination|hallucination]]—the broader problem where LLMs generate plausible-sounding but false information—focused specifically on quantitative content.

## Context in Document Processing

Numerical hallucination has become a recognized challenge in automated document processing systems, particularly when LLMs are used to extract [[concepts/json-structuring|structured data]] from unstructured documents. Solutions like [[concepts/chart-extraction|LiteParse]], a local document parser integrated with [[entities/llamaindex|LlamaIndex]], have been developed partly to address this problem by improving the [[concepts/accuracy|accuracy]] of numerical extraction from documents. These [[concepts/numerical-data-extraction|agentic document processing]] approaches aim to reduce hallucinations through more precise parsing methodologies and document understanding strategies.

## Significance

The problem is particularly consequential in domains where accuracy of numerical data is critical, such as financial documents, contracts, research papers, and business reports. Hallucinated numbers can lead to downstream errors in data pipelines, analytics, and decision-making systems that rely on extracted information. Understanding and mitigating numerical hallucination remains an active area of research in [[concepts/nlp|natural language processing]] and practical implementation in AI-driven document systems.

## Source Notes
- 2026-04-10: LiteParse - The Local Document Parser
- 2026-04-08: LiteParse: LlamaIndex
- 2026-04-22: Stanford