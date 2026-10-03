---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "tmux"
  - "session-management"
  - "terminal-multiplexer"
  - "persistent-processes"
  - "developer-workflow"
aliases:
  - "tmux sessions"
  - "terminal sessions"
summary: Terminal multiplexing allows running and managing multiple terminal sessions within a single window, with tmux enabling persistent sessions that continue running after detaching.
updated: 2026-07-12
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Terminal Multiplexing

[[concepts/tmux-sessions|Terminal multiplexing]] is a software technique that allows a single [[concepts/cli|terminal]] window to display and manage multiple independent shell sessions simultaneously. Rather than opening separate terminal [[entities/windows|windows]] or tabs, a multiplexer divides the display into resizable panes, each running its own shell instance. This [[concepts/consolidation|consolidation]] reduces visual clutter and streamlines [[concepts/workspace-management|workspace organization]], particularly for developers and system administrators who frequently work with multiple [[concepts/command-line-interface|command-line]] environments.

## Key Capabilities

A [[entities/tmux|terminal multiplexer]] enables users to create, switch between, and arrange multiple panes and windows within a single display. Each pane functions as an independent shell, allowing [[concepts/parallel-processing|concurrent execution]] of different [[concepts/commands|commands]]. Users can split the screen horizontally or vertically, resize panes dynamically, and navigate between them using keyboard shortcuts. This organization proves especially useful when monitoring processes, running build tools, editing files, and managing servers simultaneously.

## Session Persistence

The primary advantage of terminal multiplexing over basic window splitting is [[concepts/context-memory|session persistence]]. When a user detaches from a multiplexer [[concepts/session|session]]—either intentionally or due to network [[concepts/disconnection|disconnection]]—the session continues running on the remote machine. Upon reconnection, the user can reattach to the same session and find all processes and panes exactly as they left them. This [[concepts/data-persistence|persistence]] makes terminal multiplexers invaluable for remote work and long-running tasks that must survive [[concepts/connection|connection]] interruptions.

## Common Tools

The most widely used terminal multiplexer is tmux (terminal multiplexer), which provides a lightweight, scriptable interface for [[concepts/session-management|session management]]. An older alternative, GNU Screen, offers similar functionality with a different command syntax. Both tools are typically installed on Unix-like systems and accessed entirely through keyboard commands, making them suitable for headless servers and remote connections where graphical interfaces are unavailable.
## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed
