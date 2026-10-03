---
type: schema
updated: 2026-08-07
---
# NemoClaw Wiki Schema

## Purpose
This wiki is maintained by the local Ollama wiki-ingest model
qwen3:30b. New notes from inbox/ are automatically ingested:
concepts and entities are extracted, pages are created or updated, and
everything is cross-linked. The broader NemoClaw loop still uses gemma4:26b for
voice routing and general vault Q&A; this schema describes the wiki conversion
stage. The human curates sources and asks questions. The LLM handles
summarisation, cross-referencing, and maintenance.

## Folder structure
- wiki/concepts/   — one page per idea, topic, method
- wiki/entities/   — one page per named person, company, book, project
- wiki/INDEX.md    — master index, auto-rebuilt after each ingest
- wiki/SCHEMA.md   — this file (human + LLM co-evolve conventions here)

## Page conventions
- Obsidian WikiLink format for all cross-references
- Frontmatter: type, tags, updated
- Bullet points preferred over prose
- Source backlinks always included: YYYY MM DD title
- Keep pages concise — dense, linked knowledge beats long prose

## Source folders processed
- inbox/        — voice notes, Telegram text notes
- Inbox/        — notes synced from sandbox
- market-intel/ — market intelligence
- lab-notes/    — YouTube/article summaries from The Lab email pipeline
