---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "google-gemini"
  - "ai-features"
  - "developer-tools"
  - "ui-features"
  - "tabs"
aliases:
  - "Disco"
  - "GenTabs feature"
summary: A feature included in Google Gemini updates referred to as Disco or GenTabs.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Gentabs

[[entities/gentabs|Gentabs]], also referred to as [[entities/disco|Disco]] or GenTabs, is a [[concepts/user-interface|user interface]] feature integrated into [[concepts/gemini|Google Gemini]] that allows users to manage multiple concurrent conversations within a single window. Instead of opening separate browser tabs or chat sessions for different topics, the platform provides a tabbed interface where each tab maintains its own independent context and [[concepts/conversation-history|conversation history]]. This design enables users to switch between distinct inquiries seamlessly without losing the state of previous interactions.

The core functionality relies on the [[concepts/disconnection|isolation]] of [[concepts/context-windows|context windows]] for each tab. When a user creates a new tab, it initializes a fresh [[concepts/session|session]] with its own prompt history and model state, ensuring that information from one thread does not inadvertently influence another. This separation is critical for [[concepts/complex-workflows|complex workflows]] where users may need to reference data from one discussion while actively developing a [[concepts/solution|solution]] in another, thereby reducing [[concepts/cognitive-load|cognitive load]] and improving organizational [[concepts/clarity-slider|clarity]].

By consolidating these parallel threads, Gentabs streamlines the interaction with the AI model. Users can maintain a broader overview of their work, easily toggling between related or unrelated tasks without the [[concepts/friction|friction]] of managing multiple application instances. This structural approach supports more efficient research and development processes, allowing for a more cohesive and continuous engagement with the Gemini platform.
