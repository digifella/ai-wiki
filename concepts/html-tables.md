---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "html"
  - "tables"
  - "web-development"
  - "data-structure"
  - "accessibility"
aliases:
  - "HTML Grid Layout"
  - "Tabular Data Structure"
summary: HTML tables are structural elements using rows and cells to display complex information in a grid format, with accessibility and styling being key considerations.
updated: 2026-10-04
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:19:14+00:00" }
group: web-publishing-quartz-websites
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# HTML tables

## Overview
HTML tables are a fundamental structural element in [[concepts/web-application-development|web development]] used to display data in a grid format. They consist of rows (`<tr>`) and cells (`<td>` or `<th>`), allowing for the organized presentation of [[concepts/complex-information|complex information]].

## Key Concepts
- **Structure**: Defined by `<table>`, `<tr>`, `<th>`, and `<td>` tags.
- **[[concepts/accessibility|Accessibility]]**: Proper use of `scope`, `headers`, and `caption` is critical for screen readers.
- **Styling**: CSS Grid and Flexbox are often preferred for layout, but tables remain the semantic standard for [[concepts/data-tables|tabular data]].

## Related Technologies
- [[concepts/information-visualization|Data Visualization]]
- [[concepts/markdown|Markdown]] Tables
- CSS Grid

## AI & Document Parsing Context
Recent advancements in OCR and [[concepts/computer-vision]] have improved the extraction of [[concepts/json-structuring|structured data]] from unstructured sources, such as [[concepts/camera-captured-documents|camera-captured documents]].

- **[[concepts/optical-character-recognition|TeleOCR]]**: A 1.2 billion-parameter document parser developed by [[entities/china-telecom|China Telecom]]'s [[concepts/ai-research|AI research]] group.
- **Capabilities**: Designed to accurately extract [[concepts/structured-data|structured data]] from various document types, specifically handling distortions, [[concepts/shadows|shadows]], and angles inherent in photos.
- **Performance**: Claims to outperform larger models like [[entities/chatgpt-52|GPT-5.2]] in specific parsing tasks while running on [[concepts/consumer-hardware|consumer hardware]] (8GB GPU).
- **Resource**: [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]]

## References
- [TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing](https://www.youtube.com/watch?v=6TnE5pMVbCQ)
