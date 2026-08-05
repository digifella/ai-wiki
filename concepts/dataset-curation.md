---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ocr"
  - "table-extraction"
  - "rag"
  - "open-source"
  - "nanonets"
  - "document-processing"
aliases:
  - "Nanonets OCR Small"
  - "OCR for Tables"
summary: The content discusses the Nanonets OCR Small open-source model for converting tables to text for RAG.
updated: 2026-07-11
group: data-pipelines-sync-storage
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Dataset Curation

Dataset curation involves the systematic collection, organization, and [[concepts/preparation|preparation]] of data for [[concepts/machine-learning|machine learning]] and [[concepts/ai-powered-applications|AI applications]]. In [[concepts/security|security]] infrastructure and data processing pipelines, effective curation ensures datasets meet quality standards and remain suitable for their intended [[concepts/scenarios|use cases]]. This process is foundational to developing reliable [[concepts/ai-models|AI systems]], as the quality and relevance of input data directly impact [[concepts/vllm|model performance]] and downstream application effectiveness.

## Core Activities

Dataset curation encompasses several interconnected activities: identifying and sourcing relevant data, removing duplicates and errors, standardizing formats, annotating or labeling data where necessary, and documenting [[concepts/metadata|metadata]]. These steps help establish consistent, usable datasets that reduce noise and improve training outcomes. Organizations often develop curation workflows tailored to specific domains, such as extracting structured information from documents or preparing [[concepts/data-modality|multimodal data]] for [[concepts/custom-models|specialized models]].

## Practical Applications

In practice, dataset curation supports diverse [[concepts/use-cases|use cases]] ranging from [[concepts/answer-generation|retrieval-augmented generation]] (RAG) systems to supervised [[concepts/learning|learning]] pipelines. For example, converting documents and tables into clean text formats suitable for RAG requires careful handling of layout, formatting, and [[concepts/web-scraping|content extraction]]. Similarly, preparing datasets for [[concepts/training-process|model training]] demands [[concepts/attention-mechanisms|attention]] to class balance, [[concepts/representative-sampling|representative sampling]], and [[concepts/quality-control|quality control]] checkpoints throughout the pipeline.

## Challenges and Maintenance

Curated datasets require ongoing maintenance as [[concepts/data-integrity|data quality]] can degrade over time due to distribution shifts or changing application requirements. Organizations must balance the effort invested in curation against the improvements in model performance and [[concepts/software-reliability|reliability]], making prioritization of high-impact datasets essential for resource-constrained teams.
