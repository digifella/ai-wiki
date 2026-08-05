---
type: concept
domain: ai-agents
group: applied-ai-workflows
tags:
  - "document-parsing"
  - "rag-systems"
  - "workflow-automation"
  - "file-format-integration"
  - "ai-agents"
aliases:
  - "N8N document parsing workflows"
  - "RAG workflow integration"
summary: The page discusses using N8N workflows to integrate diverse file formats into AI agents via RAG and document parsing tools such as Docling, LlamaParse, and Mistral OCR.
updated: 2026-07-16
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# N8n Workflows

N8n is a workflow automation platform that enables organizations to build data pipelines connecting diverse applications and services. N8n workflows consist of nodes representing individual operations or integrations, linked together to form end-to-end processes. The platform provides a visual builder interface that allows both technical and non-technical users to design, test, and deploy automation without extensive coding.

## Document Processing for AI Agents

N8n workflows can integrate document parsing and optical character recognition (OCR) tools to prepare diverse file formats for use with AI agents. Tools such as Docling, LlamaParse, and Mistral OCR can be incorporated into N8n workflows to extract structured data from PDFs, images, and other document types. This processing step is essential for implementing retrieval-augmented generation (RAG) systems, where documents must be parsed into machine-readable formats before being indexed and queried by AI models.

## Integration with RAG Pipelines

By combining document parsing capabilities with N8n's integration nodes, organizations can build end-to-end pipelines that automatically convert raw documents into knowledge bases accessible to AI agents. The workflow typically extracts text and metadata from documents, chunks the content into appropriate segments, and prepares it for embedding and retrieval. This approach allows AI agents to access and reference current information from organizational documents without requiring manual data entry or custom integration code.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
