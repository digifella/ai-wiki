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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Markdown Based Scraping

Markdown-based scraping is a technique in which large language models (LLMs) within agentic workflows extract and structure web content by converting raw HTML into markdown syntax. In this approach, agents parse web pages and represent the extracted data using formatting elements such as headers, lists, and code blocks. This process treats markdown as an intermediate representation format that bridges the gap between unstructured raw web content and downstream processing tasks, allowing subsequent pipeline steps to operate on a standardized, hierarchical text structure.

While markdown offers human-readable output and preserves some structural hierarchy, code-based approaches are generally considered more efficient for complex web scraping operations. Markdown lacks the precise semantic depth and data type enforcement found in structured formats like JSON or XML, which can lead to ambiguity when parsing nested or irregular HTML structures. Consequently, relying on markdown as an intermediate step often requires additional post-processing or more complex prompting strategies to ensure data integrity, whereas direct code-based extraction can handle edge cases and specific data requirements with greater precision and lower computational overhead.

## Source Notes
- 2026-04-07: Agent Skills: Code Beats Markdown (Here's Why)
