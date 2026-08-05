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
updated: 2026-07-17
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Obsidian Flavored Markdown

Obsidian Flavored Markdown is the markdown variant used by Obsidian, a personal knowledge management application. It extends the CommonMark specification with additional syntax features designed to support interconnected note-taking and knowledge organization. The flavor prioritizes bidirectional linking and relationship mapping between notes as core features rather than relying solely on hierarchical file organization.

## Key Features

The dialect introduces wikilink syntax using double square brackets (`[[note-name]]`) for creating connections between notes, which automatically generates backlinks and a visual graph of relationships. It supports embedding content from other notes, footnotes, tables, and task lists. Callouts and admonitions are implemented through blockquote syntax extensions. Obsidian also provides support for YAML frontmatter for metadata, allowing users to attach structured information to individual notes.

## Integration and Synchronization

Notes in Obsidian are stored as plain markdown files in a local vault directory, enabling compatibility with version control systems like Git and external tools. This architecture allows workflows such as synchronizing vault contents with GitHub repositories or connecting external applications through Claude Code AI and similar integrations. The plaintext nature of the format ensures portability and long-term accessibility independent of proprietary software.

## Source Notes
- 2026-04-08: Obsidian + Claude Code: The Second Brain Setup That Actually Works
