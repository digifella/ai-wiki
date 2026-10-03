---
type: concept
domain: tools-platforms-infrastructure
group: platforms-runtimes-environments
tags:
  - "concept"
  - "obsidian"
  - "markdown"
  - "pkm"
  - "note-taking"
  - "knowledge-management"
  - "ai-integration"
  - "github-sync"
aliases:
  - "OFM"
  - "Obsidian Markdown"
summary: Obsidian's markdown flavor used for personal knowledge management, demonstrated with Claude Code AI integration and GitHub synchronization.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Obsidian Flavored Markdown

Obsidian Flavored Markdown (OFM) is the specific markdown dialect utilized by the Obsidian personal knowledge management application. It is built upon the CommonMark specification but extends it with syntax features tailored for interconnected note-taking and knowledge organization. Unlike standard markdown variants that prioritize linear document structure, OFM emphasizes bidirectional linking and relationship mapping as core mechanisms for navigating information.

The dialect introduces wikilink syntax, typically using double square brackets, to create direct connections between notes within a vault. This feature allows users to establish a web of knowledge rather than relying solely on hierarchical file folders. The syntax supports optional display text and can link to specific headings or blocks within other files, facilitating complex navigation across large collections of documents.

In practical workflows, OFM serves as the bridge between local AI tools and version control systems. Integration with AI assistants like Claude Code enables automated summarization, tagging, and content generation directly within the markdown source. Simultaneously, the plain text nature of the files allows for seamless synchronization with GitHub, ensuring that the knowledge base remains portable, version-controlled, and accessible across different platforms without vendor lock-in.

## Source Notes
- 2026-04-08: Obsidian + Claude Code: The Second Brain Setup That Actually Works
