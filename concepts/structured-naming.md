---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "naming-conventions"
  - "file-organization"
  - "data-integrity"
  - "version-control"
  - "cross-platform-compatibility"
  - "developer-tooling"
aliases:
  - "Naming Conventions"
  - "File Naming Standards"
  - "Logical Naming Patterns"
  - "Entity Naming"
summary: Structured Naming is the systematic application of consistent, logical, and machine-readable patterns to files, directories, and data entities to ensure interoperability, ease of retrieval, and version control integrity.
updated: 2026-07-12
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Structured Naming

**Structured Naming** refers to the systematic application of consistent, logical, and machine-readable patterns to files, directories, variables, and data [[concepts/nodes|entities]]. It ensures interoperability, ease of [[concepts/document-retrieval|retrieval]], and [[concepts/app-updates|version control]] [[concepts/honesty|integrity]] across systems.

## Core Principles

- **[[concepts/logical-consistency|Consistency]]**: Apply uniform syntax (e.g., `snake_case`, `kebab-case`) across all related entities.
- **Descriptiveness**: Names must convey content, context, or purpose without requiring external documentation.
- **Chronology**: Use ISO 8601 date formats (`YYYY-MM-DD`) for time-sensitive items to ensure correct sorting.
- **[[concepts/version-numbers|Versioning]]**: Implement clear version [[concepts/indicators|indicators]] (e.g., `v1.0`, `draft`, `final`) to prevent [[concepts/ambiguity|ambiguity]].
- **Avoid Special Characters**: Exclude spaces, slashes, or OS-specific reserved characters to maintain [[concepts/platform-compatibility|cross-platform compatibility]].

## Professional Guidelines

Based on [[lab-notes/2026-06-24-Essential-Guidelines-for-Professional-File-and-Directory|Essential Guidelines for Professional File and Directory Naming]], key practices for IT professionals include:

- **[[concepts/clarity-slider|Clarity]] over Cleverness**: Prioritize immediate understanding; avoid abbreviations unless universally standard.
- **Hierarchical [[concepts/open-source-philosophy|Logic]]**: Structure directories to reflect project phases or functional categories, not just dates.
- **Case Sensitivity [[concepts/conscious-thought|Awareness]]**: Assume case-insensitive environments to prevent duplicate file errors.
- **Extension [[concepts/integrity|Integrity]]**: Always include file extensions to ensure correct program association.
- **Legacy Compatibility**: Avoid naming [[concepts/habits|habits]] that [[concepts/conflict|conflict]] with older operating systems or network protocols.

## Implementation Strategies

- **[[concepts/templates|Templates]]**: Use standardized templates for recurring file types (reports, logs, assets).
- **Automation**: Script renaming processes to enforce rules at the point of creation.
- **Documentation**: Maintain a Naming Convention Guide within the project root for team alignment.

## References

- [Essential Guidelines for Professional File and Directory Naming](https://www.youtube.com/watch?v=pjnSE99-cz0)
