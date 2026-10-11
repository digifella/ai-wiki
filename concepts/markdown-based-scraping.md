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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Markdown Based Scraping

Markdown based scraping is a technique where large language models (LLMs) within agentic workflows convert raw HTML into markdown syntax. In this approach, agents parse web pages and represent the extracted data using formatting elements such as headers, lists, and code blocks. This process treats markdown as an intermediate representation format that bridges the gap between unstructured raw web content and downstream processing tasks. The primary advantage of this method lies in its ability to preserve the semantic structure of web pages while significantly reducing the token count required to represent the content compared to raw HTML.

## Limitations in Agentic Workflows

Despite its utility for human readability and storage efficiency, code-based approaches are increasingly viewed as more efficient for automated LLM agent workflows. Raw HTML contains explicit structural tags that allow parsers to precisely locate data without ambiguity. Markdown, by contrast, relies on implicit formatting rules that can lead to parsing errors or loss of nested context when processed by automated systems. Agents often struggle to reconstruct the original DOM hierarchy from markdown, leading to inaccuracies in data extraction.

## Preference for Code-Based Parsing

Consequently, modern infrastructure trends favor direct HTML parsing or structured data formats like JSON over markdown intermediaries. Code-based parsers can handle malformed HTML more robustly and extract specific nodes with higher precision than LLMs attempting to interpret markdown semantics. This shift reduces computational overhead and improves reliability, as agents can interact directly with the source structure rather than relying on the LLM to infer relationships from a flattened text representation.

## Source Notes
- 2026-04-07: Agent Skills: Code Beats Markdown (Here's Why)
