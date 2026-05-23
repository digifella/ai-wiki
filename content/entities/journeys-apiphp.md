---
type: entity
summary: A backend endpoint responsible for managing the journeys system and delivering blog content stored as static HTML.
updated: 2026-05-23
stub: true
---
# journeys_api.php

Backend endpoint responsible for managing the `journeys` system and content delivery.

## Overview
- Manages blog content stored as static HTML within `content/{slug}.html`.

## Development Roadmap
- **Visual Editor [[concepts/adoption|Implementation]]**: Develop a [[concepts/block-based-visual-editor|block-based editor]] (sequential [[concepts/text|text]] and photo blocks) similar to [[entities/adobe-express|Adobe Express]] to replace manual HTML editing.
- **[[concepts/document-processing|Document Processing]]**: Implement logic to parse and fuse multiple PDF assets (e.g., [[entities/japan-trip|Japan trip]] documentation) into unified blog posts.

## Known Issues
- **UI [[concepts/conflict|Conflict]]**: The `homepage` `quick-nav` (second row) is currently obscured by the ticker bar.
- **Editing [[concepts/workflow|Workflow]]**: Lack of a native interface for modifying the existing `content/{slug}.html` [[concepts/files|files]].

## Security & Constraints
- **Mutation Guard**: All administrative requests must adhere to the [[concepts/same-origin-guard|same-origin guard]] protocol (`requireSameOriginForMutatingRequest()`) as established in other system modules.

## Backlinks
- 2026 04 14 New [[concepts/claude-ai|Claude]] Plan
## Source Notes