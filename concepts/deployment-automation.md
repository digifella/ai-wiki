---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "deployment-automation"
  - "visual-editor"
  - "pdf-processing"
  - "security-verification"
  - "ui-fixes"
  - "admin-mutations"
  - "same-origin-guard"
  - "static-html"
  - "ai-extraction"
  - "local-llm"
  - "privacy"
  - "ocr"
aliases:
  - "Travel Blogs Editor Implementation"
  - "Admin Mutation Security Check"
  - "UI Occlusion Fix"
  - "PDF Fusion Workflow"
  - "Lift Datalab AI"
  - "Local LLM OCR App"
summary: Tasks involving the implementation of a visual editor for blogs, UI adjustments, PDF processing, security verification for admin mutations, and AI-driven structured data extraction from PDFs using local LLMs for privacy-focused OCR.
updated: 2026-07-18
group: automation-scheduling-sync
stub: true
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
status: draft
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Deployment automation

- Implement visual editor for Travel Blogs (sequential blocks, [[entities/adobe-express|Adobe Express]] [[concepts/style|style]]).
- Current state: static HTML in `content/{slug}.html` lacks editor capability.
- Fix Quick-nav occlusion by Ticker Bar.
- Parse and fuse [[entities/japan-trip|Japan Trip]] [[concepts/pdfs|PDFs]] into single post.
- [[concepts/secure|Security]]: Verify compatibility with [[concepts/same-origin-guard]] (`requireSameOriginForMutatingRequest()`) for admin mutations.
- **PDF Processing & AI Extraction**: Evaluate [[lab-notes/2026-07-11-Lift-Datalabs-AI-for-Schema-Constrained-Local-Structured|Lift: Datalab's AI for Schema-Constrained Local Structured Data Extraction]] for schema-constrained local [[concepts/structured-data-extraction|structured data extraction]] (JSON) from PDFs and images.
	- **[[concepts/local-llm-integration|Local LLM Integration]]**: Review [[lab-notes/2026-07-18-Local-LLM-Powered-Privacy-Focused-OCR-App-Development-Su|Local LLM-Powered Privacy-Focused OCR App Development Summary Report]] regarding feasibility of [[concepts/desktop-apps|desktop apps]] using [[concepts/hardware-heavy-models|local LLMs]] and [[concepts/ai-coding-agents|coding agents]].
		- Focus on [[concepts/privacy|privacy]] and independence from [[concepts/cloud-based-services|cloud-based services]] for OCR tasks.
		- Source: [Local LLM-Powered Privacy-Focused OCR App Development Summary Report](https://www.youtube.com/watch?v=WzCk5G_gGTE)
