---
type: concept
domain: tools-platforms-infrastructure
group: apis-integrations-mcp
tags:
  - "concept"
  - "scraping"
  - "agent-skills"
  - "llm-efficiency"
  - "markdown"
  - "code-based-tools"
  - "web-scraping"
aliases:
  - "Code vs Markdown Scraping"
  - "Agent Skills for Scraping"
summary: Exploration of why code-based approaches are more efficient than markdown for web scraping in LLM agent workflows.
updated: 2026-07-16
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Markdown Based Scraping

Markdown-based scraping refers to approaches where large language models (LLMs) used in agentic workflows extract and structure web content by converting it into markdown format. In these systems, agents parse HTML pages and represent the extracted data using markdown syntax—headers, lists, code blocks, and other formatting elements—which then flows through subsequent pipeline steps. This treats markdown as an intermediate representation format that bridges raw web content and downstream processing tasks.

## Efficiency Considerations

While markdown provides human-readable structure and is straightforward for LLMs to generate, code-based approaches often prove more efficient in practice. Direct extraction into structured data formats (JSON, CSV, or domain-specific schemas) reduces the overhead of markdown parsing and serialization. Code-based methods also enable tighter validation and type-checking at each pipeline stage, whereas markdown extraction requires additional parsing layers to convert formatted text back into usable data structures. For complex scraping workflows with multiple transformation steps, this overhead compounds across the pipeline.

## Trade-offs in Agent Design

The choice between markdown and code-based scraping depends on workflow requirements. Markdown-based approaches offer advantages in readability and can work well when intermediate results need human review or when LLM agents require transparent, interpretable representations. However, for high-volume scraping or tightly-coupled agent systems where data must be rapidly transformed and passed between components, code-based approaches that emit structured data directly tend to reduce latency and errors. The markdown format's flexibility comes at the cost of deterministic parsing and validation, making it less suitable for production workflows requiring reliability guarantees.

## Source Notes
- 2026-04-07: Agent Skills: Code Beats Markdown (Here's Why)
