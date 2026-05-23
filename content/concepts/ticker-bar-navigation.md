---
type: concept
domain: ux-design
tags:
  - "visual-editor"
  - "travel-blogs"
  - "content-management"
  - "web-publishing"
  - "ui-navigation"
  - "block-based-editing"
aliases:
  - "ticker navigation"
  - "horizontal navigation bar"
summary: A requirement for a visual editor to create and edit travel blogs using sequential blocks of text and photos.
updated: 2026-05-23
group: information-architecture-navigation
---
# Ticker Bar Navigation

Ticker Bar Navigation is a [[concepts/visual-editing|visual editing]] interface requirement for creating and managing travel blogs on the journeys platform. The system addresses the need for a user-friendly tool that allows content creators to build blog posts using sequential blocks of [[concepts/text|text]] and photography, similar to existing consumer [[concepts/design|design]] platforms like [[entities/adobe-express|Adobe Express]]. Currently, travel blogs are stored as static HTML [[concepts/files|files]] in the content/{slug}.html directory with no integrated editing capability.

## Current State

The existing journeys system stores published blogs as static HTML but lacks an associated visual editor. The platform's navigation [[concepts/structure|structure]] includes space for additional tools in the homepage navigation's second row, where such an editor could be integrated. This gap between content [[entities/storage|storage]] and [[concepts/content-creation|content creation]] represents a barrier to efficient blog authoring and updates.

## Design Requirements

The proposed editor would enable users to arrange and edit content blocks in sequence, combining text and image elements in a structured layout. This block-based approach mirrors contemporary content creation platforms and allows for flexible composition without requiring users to write or edit HTML directly. The interface would need to bridge the gap between visual editing and the static HTML [[concepts/output|output]] format currently used for storage.
