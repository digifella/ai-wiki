---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "file-naming"
  - "conventions"
  - "consistency"
  - "compatibility"
  - "best-practices"
  - "data-management"
aliases:
  - "File Naming Standards"
  - "Naming Conventions"
  - "File Naming Rules"
summary: "Standardized rules for naming files and directories to ensure consistency, readability, and cross-system compatibility while preventing errors in version control and scripting."
updated: 2026-07-11
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# File Naming Conventions

Standardized rules for naming files and directories to ensure [[concepts/logical-consistency|consistency]], readability, and compatibility across systems. Proper conventions prevent errors in [[concepts/app-updates|Version Control]], [[concepts/data-management]], and automated scripting.

## Core Principles

- **[[concepts/clarity-slider|Clarity]] and Descriptiveness**: Names must clearly indicate content and purpose without relying on external context.
- **Consistency**: Use a uniform structure (e.g., `YYYY-MM-DD_ProjectName_Description`) across all projects.
- **Compatibility**: Avoid special characters (`\ / : * ? " < > |`) and spaces; use hyphens (`-`) or underscores (`_`) as separators.
- **Case Sensitivity**: Assume case-sensitive environments; prefer lowercase to avoid confusion.
- **Length Limits**: Keep names concise but informative; avoid excessively long strings that may exceed OS limits.

## Integration of Recent Guidelines

Based on [[lab-notes/2026-06-24-Essential-Guidelines-for-Professional-File-and-Directory|Essential Guidelines for Professional File and Directory Naming]]:

- **Beginner-Friendly Standards**: Emphasize [[concepts/habits|habits]] that prevent common IT pitfalls, even in user-friendly operating systems.
- **Professional Context**: [[concepts/structured-naming|Naming conventions]] are critical for entry-level IT professionals to establish reliable workflows.
- **System Agnosticism**: While OS interfaces may mask underlying constraints, adhering to strict naming rules ensures portability and script compatibility.

## Best Practices

- **Date Formatting**: Use ISO 8601 (`YYYY-MM-DD`) for chronological sorting.
- **Versioning**: Append [[concepts/version-numbers|version numbers]] (e.g., `v1.0`, `v2.1`) rather than using terms like "final" or "latest."
- **[[concepts/directory-structure|Directory Structure]]**: Mirror logical project hierarchies; avoid deep nesting.
- **Avoid [[concepts/ambiguity|Ambiguity]]**: Do not use generic names like `readme.txt` or `data.csv` without unique identifiers.

## References

- [Essential Guidelines for Professional File and Directory Naming](https://www.youtube.com/watch?v=pjnSE99-cz0)
