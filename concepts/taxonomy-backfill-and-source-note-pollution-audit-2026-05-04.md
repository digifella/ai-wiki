---
type: maintenance-note
domain: tools-platforms-infrastructure
tags:
  - "maintenance"
  - "taxonomy"
  - "audit"
  - "quality-assurance"
  - "data-pollution"
  - "regex-refinement"
  - "entity-linking"
aliases:
  - "Source Note Pollution Cleanup"
  - "AI-Vault Quality Audit"
  - "Entity Classification Backfill"
summary: Quality audit addressing 528 unclassified concepts and source note pollution from over-broad entity matching in wiki ingestion scripts, with fixes applied to regex guards, link limits, and context rules.
updated: 2026-07-12
created: 2026-05-04
group: platforms-runtimes-environments
title: Taxonomy Backfill & Source Note Pollution Audit
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

**Date:** 2026-05-04
**Status:** In Progress
**Scope:** All 5,260 concepts + 1,225 [[concepts/nodes|entities]] in the AI-Vault wiki

## Background

Routine [[concepts/diagnostic-audit|quality audit]] revealed two issues:
1. 528 concepts classified as "undecided" — taxonomy not applied
2. Non-AI entity pages polluted with AI-related [[concepts/feedback|source notes]] (e.g., food writer [[concepts/eric-kim|Eric Kim]] has Claude/Obsidian lab [[concepts/notes|notes]] linked)

## Root Causes Identified

### Source Note Pollution (3 mechanisms)

1. **`refresh_entity_pages()` loose [[concepts/regular-expressions|regex]]** — Line 1795 of `nemoclaw-wiki-ingest.py` matches entity aliases against ALL lab note text using raw regex. Generic entity names ("nature", "[[concepts/science|science]]", "[[entities/speaker|speaker]]", "[[concepts/developer|developer]]", "[[entities/email|email]]", "[[entities/storage|storage]]") match in unrelated [[concepts/ai-generated-notes|AI notes]].

2. **`auto_link_keywords()` over-linking** — Called with `max_links=36` in `refresh_entity_pages()`, adding up to 36 wikilinks per entity page regardless of relevance.

3. **`AMBIGUOUS_ENTITY_CONTEXT` too small** — Only ~10 entities have context guards. Generic entities that get polluted have no [[concepts/secure|protection]].

## Fixes Applied

### Fix 1: refresh_entity_pages() now uses context guards
- Modified `refresh_entity_pages()` to use `_entity_mentioned()` instead of raw regex matching
- This applies the same context guards to refresh as to initial enrichment

### Fix 2: Reduced auto_link_keywords max_links
- Reduced from 36 to 8 in `refresh_entity_pages()`
- Reduced from 24 to 12 in `repair_links()`

### Fix 3: Expanded AMBIGUOUS_ENTITY_CONTEXT
- Added context guards for: nature, [[concepts/science|science]], speaker, [[entities/developer|developer]], [[concepts/creator|creator]], email, storage, [[concepts/canvas|canvas]], [[entities/america|america]], [[entities/excel|excel]], [[entities/youtube|youtube]], [[entities/matthew-berman|matthew-berman]]

## Taxonomy Backfill Plan

- Script: `nemoclaw-taxonomy-apply.py`
- Safety: dry-run test on 15 concepts before full apply
- Batches: process in chunks of ~500 concepts with [[concepts/verification|verification]] between batches
- Verification: [[concepts/feynmans-three-step-scientific-method|compare]] body content hash before/after each batch

## Results

### Before
- Concepts with domain: 5,260 (all have frontmatter)
- Concepts in "undecided": 528 (10%)
- AI-polluted entities: ~100+ estimated

### After (pending)
- TBD after taxonomy apply completes

## Related
- [[entities/nemoclaw]]
- wiki ingest
