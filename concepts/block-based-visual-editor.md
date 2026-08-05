---
type: concept
domain: creative-pursuits
tags:
  - "ui-design"
  - "visual-editor"
  - "block-based-layout"
  - "travel-blogs"
  - "content-construction"
  - "adobe-express-inspired"
  - "same-origin-security"
  - "web-development"
aliases:
  - "Block Editor"
  - "Visual Content Builder"
  - "Sequential Block Interface"
  - "Travel Blog Editor"
summary: A content construction interface using sequential, discrete blocks to build layouts for travel blogs within the journeys ecosystem.
updated: 2026-07-11
group: design-systems-ui-infographics
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Block-based visual editor

A content construction interface utilizing sequential, discrete blocks (e.g., text, photos) to build layouts, modeled after the usability of [[entities/adobe-express|Adobe Express]].

## Development Requirements
- **[[concepts/purpose|Objective]]**: Provide a [[concepts/gui-interface|visual interface]] for creating and editing travel blogs within the  ecosystem.
- **Current State**: The system currently relies on static HTML files (`content/{slug}.html`) with no native editing capability.
- **Immediate Task**: Parse and merge two [[entities/japan-trip|Japan trip]] [[concepts/pdfs|PDFs]] into a unified blog post.

## Technical & Security Constraints
- **[[concepts/security|Security]] [[concepts/compliance|Compliance]]**: All administrative mutations must utilize the [[concepts/same-origin-guard|same-origin guard]] (`requireSameOriginForMutatingRequest()`) as defined by [[entities/security-ai|Security AI]].
- **UI Regression**: The ticker bar is currently obscuring the second row of the homepage quick-nav.

## Backlinks
- 2026 04 14 New [[concepts/claude-ai|Claude]] Plan
