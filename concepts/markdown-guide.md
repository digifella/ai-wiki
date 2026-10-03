---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "markdown"
  - "guide"
  - "documentation"
  - "markdown-syntax"
  - "documentation-guide"
  - "ai-agent-documentation"
  - "azure-ai-integration"
  - "developer-tooling"
  - "open-source"
  - "cli"
  - "langchain"
aliases:
  - "Markdown Syntax"
  - "Markdown Documentation"
  - "AI Agent Documentation"
summary: A guide covering basic and advanced Markdown syntax, its integration with tools like Obsidian and GitHub, and its use in documenting AI agent creation processes within Azure AI. Includes updates on OpenWiki, an automated CLI for repo documentation.
updated: 2026-07-11
group: developer-tooling-clis
stub: false
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Markdown Guide

## Basics
- **Syntax**: Simple formatting using symbols like `#`, `*`, `-`, etc.
- **Headers**: `#` for largest, `######` for smallest.
- **Lists**: `-` for unordered, `1.` for ordered.
- **Links**: `[text](url)` or WikiLink for internal links.
- **Images**: `![alt text](image url)`.

## Advanced Features
- **Tables**: Use `|` for columns and `---` for headers.
- **Code Blocks**: ```` ```language ``` ```` for syntax highlighting.
- **Footnotes**: `[^1]` with `[^1]: text` at the bottom.
- **Blockquotes**: `>` for quoted text.

## Integration with Tools
- **[[concepts/obsidian|Obsidian]]**: Supports WikiLink for internal linking.
- **[[entities/github|GitHub]]**: Renders [[concepts/markdown|markdown]] natively.
- **[[concepts/agentic-rag-systems|Agentic RAG Systems]]**: Can process markdown for documentation.

## AI Agent Documentation Automation
- **OpenWiki**: An [[concepts/open-source|open-source]] [[concepts/terminal-agent|CLI agent]] from [[entities/langchain|LangChain]] designed to simplify the generation and maintenance of documentation for codebases, specifically tailored for [[concepts/agentic-ai|AI agents]].
  - See detailed [[concepts/notes|notes]]: [[lab-notes/2026-07-06-OpenWiki-Automated-Open-Source-CLI-for-AI-Agent-Document|OpenWiki: Automated Open-Source CLI for AI Agent Documentation]]
  - Source: [OpenWiki: Automated Open-Source CLI for AI Agent Documentation](https://www.youtube.com/watch?v=nIVu3zfYprI)

## Related Concepts
- [[concepts/agentic-rag]]
- [[concepts/azure-ai]]
- [[concepts/tutorial]]
