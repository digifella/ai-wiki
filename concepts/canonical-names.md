---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
group: data-pipelines-sync-storage
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Canonical Names

Canonical Names is a standardized identification system within the profile management [[concepts/infrastructure|infrastructure]] that establishes a single authoritative identifier for each entity. By assigning a canonical name to every profile, the system maintains consistent [[concepts/entity-extraction|entity recognition]] across operations, even when the same entity is referenced through multiple name variations, aliases, or alternate spellings. This approach eliminates duplicate records and ensures that all references to a given entity resolve to one primary record.

The system operates by consolidating multiple input sources into a unified profile structure. Recent [[concepts/software-updates|updates]] to the tools platform have enhanced this infrastructure by introducing automated intelligence status [[concepts/indicators|indicators]] on [[concepts/stakeholder-profiles|profile cards]]. These indicators provide immediate visibility into the current state of data matching and [[concepts/verification|verification]] processes, allowing users to quickly assess the [[concepts/software-reliability|reliability]] and completeness of the associated canonical data.

To support workflows involving incomplete data, a new filter tab has been added to the interface. This feature specifically targets profiles with no matched intelligence, enabling operators to isolate and address gaps in the dataset. This addition complements the core functionality of entity [[concepts/solution|resolution]] by providing a mechanism to manage and prioritize profiles that require further investigation or data enrichment.
