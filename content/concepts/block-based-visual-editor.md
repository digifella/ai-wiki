---
type: concept
domain: creative-pursuits
tags:
  - "ux"
  - "development"
  - "content-management"
  - "editor"
  - "content-construction"
  - "visual-editor"
  - "block-based-ui"
  - "ui-development"
  - "travel-blog-editing"
aliases:
  - "Block-based editor"
  - "Content construction interface"
summary: "A content construction interface using sequential, discrete blocks to build layouts for travel blogs within the journeys ecosystem."
updated: 2026-04-20
group: design-systems-ui-infographics
---
# Block-based visual editor

A content construction interface utilizing sequential, discrete blocks (e.g., text, photos) to build layouts, modeled after the usability of Adobe Express.

## Development Requirements
- **Objective**: Provide a visual interface for creating and editing travel blogs within the  ecosystem.
- **Current State**: The system currently relies on static HTML files (`content/{slug}.html`) with no native editing capability.
- **Immediate Task**: Parse and merge two [[entities/japan-trip|Japan trip]] PDFs into a unified blog post.

## Technical & Security Constraints
- **[[concepts/security|Security]] [[concepts/compliance|Compliance]]**: All administrative mutations must utilize the [[concepts/same-origin-guard|same-origin guard]] (`requireSameOriginForMutatingRequest()`) as defined by [[entities/security-ai|Security AI]].
- **UI Regression**: The ticker bar is currently obscuring the second row of the homepage quick-nav.

## Backlinks
- 2026 04 14 New [[concepts/claude-ai|Claude]] Plan
