---
type: concept
domain: tools-platforms-infrastructure
group: web-publishing-quartz-websites
tags:
  - "claude-code"
  - "ai-coding-assistant"
  - "customization"
  - "context-engineering"
  - "workflow-optimization"
  - "tutorials"
  - "mods"
aliases:
  - "Claude Code Guide"
  - "AI Coding Assistant Hooks"
  - "Claude Code Mods"
summary: This page contains guides and walkthroughs for using the Claude Code AI coding assistant, covering features, customization, context engineering techniques, and the new Mods system for deep internal control.
updated: 2026-10-04
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-03T21:44:19+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Hooks

Hooks function as extension points within [[entities/claude-code]], enabling developers to customize and extend the [[concepts/spec-driven-development|AI coding assistant]]'s capabilities without altering its core source code. These [[concepts/causes|mechanisms]] provide a structured approach to injecting custom behavior at specific stages of the [[concepts/software-development-process|coding workflow]], facilitating [[concepts/hidden-engineering|seamless integration]] with [[concepts/external-tools|external tools]], services, and custom scripts. By leveraging hooks, users can tailor the assistant's operations to fit specific project requirements or organizational standards.

The primary utility of hooks lies in their ability to intercept and modify the interaction between the developer and the AI model. This allows for the automation of repetitive tasks, such as formatting code before submission or validating outputs against specific criteria. Hooks can also be used to inject additional context into the AI's understanding of the codebase, improving the relevance and accuracy of generated suggestions.

## Evolution: From Hooks to Mods

While [[concepts/hooks]] and [[concepts/mcp-servers]] operate externally to provide additional capabilities, Anthropic has introduced "Mods" to enable deep internal control.

*   **Core Integration:** Unlike previous features such as skills, hooks, and [[concepts/mcp-servers]], Mods are integrated directly into [[concepts/ai-assisted-coding|Claude Code]]'s core architecture.
*   **Deep [[concepts/customization|Customization]]:** Mods offer unprecedented levels of customization for the AI [[concepts/coding-workspace|development environment]], allowing for modifications that external hooks cannot achieve.
*   **Internal Control:** This enhancement shifts the paradigm from external extension to internal modification, providing finer-grained control over the AI's behavior and [[concepts/decision-making|decision-making]] processes.

For detailed analysis and walkthroughs of this upgrade, see [[lab-notes/2026-10-04-Claude-Code-Mods-Deep-AI-Customization-and-Internal-Cont|Claude Code Mods: Deep AI Customization and Internal Control Enhancement]].

## References

*   [Claude Code Mods: Deep AI Customization and Internal Control Enhancement](https://www.youtube.com/watch?v=XaYubuLtW8M)
