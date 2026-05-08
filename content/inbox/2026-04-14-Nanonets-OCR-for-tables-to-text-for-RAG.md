---
wiki-ingested: true
title: "Nanonets OCR for tables to text for RAG"
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
# Nanonets OCR for tables to text for RAG

---
---
<https://www.youtube.com/watch?v=j7oxmKCwCPM>

Of course. Here is a [[concepts/summary|summary]] of the video.
**Author:** In this video from his AI and [[concepts/machine-learning|machine learning]] channel, the author provides an in-depth look at a new [[concepts/open-source|open-source]] OCR model.
**Summary:**
The author introduces **[[entities/nanonets-ocr-small|Nanonets OCR Small]]**, a new, powerful, and remarkably small (3B [[concepts/parameters|parameters]]) [[concepts/optical-character-recognition|Optical Character Recognition]] (OCR) model. He contrasts it with previous [[concepts/models|models]] he has reviewed, like [[entities/llama-ocr|Llama OCR]] and [[entities/mistral-ocr|Mistral OCR]], noting that this new model takes the trend of smaller, efficient models to a new level.
The Nanonets OCR Small is built by [[concepts/fine-tuning|fine-tuning]] the **[[entities/qwen25-vl-3b|Qwen2.5-VL-3B]]** base model on a curated dataset of 250,000 pages containing diverse documents like research papers, financial reports, invoices, and legal forms.
What makes this model stand out is its ability to go beyond simple text extraction and perform specialized tasks with semantic understanding. The key [[concepts/capabilities|capabilities]] highlighted are:

1. **LaTeX Equation Recognition:** Accurately converts mathematical equations into LaTeX syntax.
2. **Intelligent Image Description:** Describes images, charts, and graphs found within documents.
3. **Signature Detection & Isolation:** Identifies and extracts handwritten signatures, even difficult ones, and places them within a <signature> tag.
4. **Watermark Extraction:** Detects and extracts watermarks (e.g., "PAID") from documents.
5. **Smart Checkbox Handling:** Correctly identifies the status of checkboxes in forms.
6. **Complex Table Extraction:** Converts complex tables from documents into structured [[concepts/markdown|markdown]] or HTML tables, making the data easy to process.

The video demonstrates that while a model like Mistral OCR might extract a plot or signature as a separate image file (making it difficult for a RAG system to use), the Nanonets model provides a detailed text description or structured tag instead. The author emphasizes that this model exemplifies a growing trend: companies taking powerful, [[concepts/open-weight|open-weight]] base models and fine-tuning them for specific, high-value, and specialized tasks, which can be run locally and privately on accessible [[concepts/hardware|hardware]] like a T4 GPU.

[nanonets/Nanonets-OCR-s · Hugging Face](https://huggingface.co/nanonets/Nanonets-OCR-s)