---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "tmux"
  - "terminal-multiplexer"
  - "session-management"
  - "persistent-processes"
  - "devops"
  - "ai-agent-dev"
aliases:
  - "Tmux"
  - "Terminal Multiplexing"
summary: Tmux sessions allow running and detaching persistent background processes in a terminal multiplexer, essential for AI agent development and VPS offloading.
updated: 2026-07-12
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Tmux Sessions

[[concepts/background-processes|Tmux sessions]] are persistent [[concepts/cli|terminal]] environments managed by the tmux [[entities/tmux|terminal multiplexer]]. A [[concepts/session|session]] can contain multiple [[entities/windows|windows]] and panes, allowing users to organize and manage multiple shell instances within a single logical workspace. Sessions remain active on the server even after the user disconnects from the client, enabling long-running processes to continue executing in the background.

## Creating and Managing Sessions

Sessions are created with the `tmux new-session` command or the shorthand `tmux new`. Each session is assigned a name, either specified by the user or automatically numbered. Users can attach to an existing session using `tmux attach-session`, reconnecting to their previous workspace with all windows and processes intact. Multiple users can attach to the same session simultaneously, useful for collaborative work or monitoring shared processes.

## Practical Applications

*   **Long-lived Applications**: A common use case for sessions is running long-lived applications that require uninterrupted execution despite client disconnections.
*   **[[concepts/cloud-agents|AI Agent Development]]**: Critical for "Agentic Engineers" developing [[ai/agents|AI agents]], as tmux enables persistent, multi-tasking environments necessary for complex [[concepts/agent-collaboration|agent orchestration]] and [[concepts/debugging|debugging]] workflows.
*   **VPS Offloading**: Facilitates offloading compute-intensive tasks to a [[infrastructure/vps|Virtual Private Server]], ensuring processes continue running independently of [[concepts/personal-computer|local machine]] status or network stability. See [[lab-notes/2026-06-03-Tmux-for-AI-Agent-Development-Persistent-Sessions-and-VP|Tmux for AI Agent Development: Persistent Sessions and VPS Offloading]] for detailed implementation strategies.
