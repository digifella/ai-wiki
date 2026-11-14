---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "claude-code"
  - "mods"
  - "ai-customization"
  - "internal-control"
  - "architecture"
  - "ui-customization"
  - "productivity"
aliases:
  - "Claude Code Mods"
summary: "Mods are a core-integrated feature in [[entities/claude-code]] that enable deep AI customization and internal control, distinguishing them from external mechanisms like Skills, Hooks, and MCP Servers."
updated: 2026-10-10
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-10T02:16:06+00:00" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Mods

**Mods** represent a significant architectural shift in [[entities/claude-code]], introducing deep [[concepts/ai-application-customization|AI customization]] and internal control enhancement. Unlike previous extension [[concepts/causes|mechanisms]], Mods are integrated directly into the core of the AI [[concepts/coding-workspace|development environment]], offering unprecedented levels of [[concepts/customization|customization]].

## Key Characteristics

*   **Core Integration**: Mods operate internally within [[entities/claude-code]], distinguishing them from [[concepts/external-tools|external tools]].
*   **Comparison to Previous Features**:
    *   **[[concepts/skills|Skills]]**: Operate externally to provide additional capabilities.
    *   **[[concepts/hooks|Hooks]]**: Operate externally to trigger actions.
    *   **[[concepts/mcp-servers|MCP Servers]]**: Operate externally to connect models to data sources.
    *   **Mods**: Integrated directly into the core
*   **Behavioral & UI Customization**: Mods directly change [[concepts/ai-assisted-coding|Claude Code]]'s internal work, allowing users to customize both the AI's behavior and the [[concepts/user-interface|user interface]] for enhanced [[concepts/productivity|productivity]].
*   **Distinction from Skills**: While Skills instruct Claude on *how* to perform a task, Mods alter the underlying environment and interface.
*   **Distinction from Connectors**: Unlike connectors that link Claude to [[concepts/third-party-applications|external applications]], Mods modify the [[concepts/hidden-state|internal state]] of the [[concepts/ai-assistant|AI assistant]] itself.

## References

*   [[lab-notes/2026-10-10-Claude-Code-Mods-Customizing-AI-Behavior-and-User-Interf|Claude Code Mods: Customizing AI Behavior and User Interface for Productivity]]
*   [Claude Code Mods: Customizing AI Behavior and User Interface for Productivity](https://www.youtube.com/watch?v=lDrAZ1wAyVs)
