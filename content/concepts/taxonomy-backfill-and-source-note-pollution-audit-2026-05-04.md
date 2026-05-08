---
type: maintenance-note
title: "Taxonomy Backfill & Source Note Pollution Audit"
created: 2026-05-04
domain: tools-platforms
group: automation-scheduling-sync
tags:
  - "maintenance"
  - "taxonomy"
  - "audit"
  - "quality-assurance"
---
# Taxonomy Backfill & Source Note Pollution Audit

**Date:** 2026-05-04
**Status:** In Progress
**Scope:** All 5,260 concepts + 1,225 entities in the AI-Vault wiki

## Background

Routine quality audit revealed two issues:
1. 528 concepts classified as "undecided" — taxonomy not applied
2. Non-AI entity pages polluted with AI-related source notes (e.g., food writer Eric Kim has Claude/Obsidian lab notes linked)

## Root Causes Identified

### Source Note Pollution (3 mechanisms)

1. **`refresh_entity_pages()` loose regex** — Line 1795 of `nemoclaw-wiki-ingest.py` matches entity aliases against ALL lab note text using raw regex. Generic entity names ("nature", "science", "speaker", "developer", "email", "storage") match in unrelated AI notes.

2. **`auto_link_keywords()` over-linking** — Called with `max_links=36` in `refresh_entity_pages()`, adding up to 36 wikilinks per entity page regardless of relevance.

3. **`AMBIGUOUS_ENTITY_CONTEXT` too small** — Only ~10 entities have context guards. Generic entities that get polluted have no protection.

## Fixes Applied

### Fix 1: refresh_entity_pages() now uses context guards
- Modified `refresh_entity_pages()` to use `_entity_mentioned()` instead of raw regex matching
- This applies the same context guards to refresh as to initial enrichment

### Fix 2: Reduced auto_link_keywords max_links
- Reduced from 36 to 8 in `refresh_entity_pages()`
- Reduced from 24 to 12 in `repair_links()`

### Fix 3: Expanded AMBIGUOUS_ENTITY_CONTEXT
- Added context guards for: nature, science, speaker, developer, creator, email, storage, canvas, america, excel, youtube, matthew-berman

## Taxonomy Backfill Plan

- Script: `nemoclaw-taxonomy-apply.py`
- Safety: dry-run test on 15 concepts before full apply
- Batches: process in chunks of ~500 concepts with verification between batches
- Verification: compare body content hash before/after each batch

## Results

### Before
- Concepts with domain: 5,260 (all have frontmatter)
- Concepts in "undecided": 528 (10%)
- AI-polluted entities: ~100+ estimated

### After (pending)
- TBD after taxonomy apply completes

## Related
- [[nemoclaw]]
- [[concepts/wiki-ingest]]
