---
type: concept
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
tags:
  - "profile-cards"
  - "intel-indicators"
  - "filtering"
  - "automated-status"
  - "data-matching"
aliases:
  - "Profile Intel Status"
  - "No Intel Filter"
summary: Profile cards now display automated intel status indicators and a new filter tab has been added for profiles with no matched intel.
updated: 2026-07-14
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Canonical Names

Canonical Names is a standardized identification system within profile management infrastructure that establishes a single authoritative identifier for each entity. By assigning a canonical name to every profile, the system maintains consistent entity recognition across operations, even when the same entity is referenced through multiple name variations, aliases, or alternate spellings. This approach eliminates duplicate records and ensures that all references to a given entity resolve to one primary record.

## Core Functionality

The system operates by consolidating multiple name references into a single canonical form, which serves as the definitive identifier within the profile database. When new information is ingested—whether from different sources, documents, or operational contexts—the canonical naming structure allows the system to correctly associate data with existing profiles rather than creating redundant entries. This is particularly important in contexts where entities may be known by different names, transliterations, or informal variations.

## Profile Management Integration

Recent updates to the profile card interface now display automated intelligence status indicators, providing users with quick visual feedback on the matching status of canonical names against available intelligence data. A new filter tab has also been added to identify profiles where no matched intelligence currently exists, allowing administrators to prioritize data enrichment efforts and maintain database quality.
