---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "cli"
  - "automation"
  - "terminal"
  - "ai"
  - "chrome"
  - "integration"
  - "cli-automation"
  - "terminal-integration"
  - "browser-control"
  - "claude-code"
  - "muse-code"
  - "meta"
  - "fan-out-agent"
  - "vision"
aliases:
  - "command-line-integration"
  - "terminal-browser-bridge"
  - "muse-code-integration"
summary: CLI terminal integration refers to the architecture and practices enabling command-line interfaces to orchestrate workflows and bridge terminal sessions with external services, including emerging AI agents like Muse Code.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-02T00:37:43+00:00" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# CLI terminal integration

CLI [[concepts/cli|terminal]] integration refers to the architecture and practices enabling [[concepts/command-line-interface|command-line]] interfaces to orchestrate workflows, control applications, and bridge gaps between [[concepts/terminal-multiplexing|terminal sessions]] and external services.

## Active Integrations

### Claude Code

Recent [[concepts/version-updates|version updates]] (2.0.70–2.0.72) have expanded capabilities for automation and [[concepts/browser-control|browser control]]:

*   **[[entities/claude-in-chrome|Claude in Chrome]] (Beta):** Allows the CLI to bridge the gap between your terminal and the web browser, enabling direct control of the extension.
*   **Status:** Available via update log for versions 2.0.70 through 2.0.72.

#### Resources

*   Detailed workflow [[concepts/notes|notes]]: 2026 04 14 [[concepts/ai-assisted-coding|Claude Code]] for controlling browser.

### Muse Code

[[lab-notes/2026-08-07-Muse-Code-Fan-Out-AI-Agent-with-Vision-for-Complex-Codin|Muse Code: Fan-Out AI Agent with Vision for Complex Coding and Repair]] introduces [[entities/meta|Meta]]'s [[concepts/background-agents|Muse Code]], an [[concepts/ai-coding-agent|AI coding agent]] designed to handle [[concepts/complex-workflows|complex workflows]] and "messy jobs" directly within the terminal.

*   **Architecture:** Operates as a [[concepts/complex-coding-workflows|fan-out AI agent]] with [[concepts/vision-capabilities|vision capabilities]], distinguishing itself from tools limited to simple scripts.
*   **Key Features:**
    *   [[concepts/agent-reliability|Persistent agent state]] for extensive projects.
    *   Direct terminal operation for streamlined [[concepts/coding|coding]] and repair workflows.
    *   Designed to manage complexity beyond "toy scripts."

#### Resources

*   Source: [Muse Code: Fan-Out AI Agent with Vision for Complex Coding and Repair](https://www.youtube.com/watch?v=m568RMyJKg0)
