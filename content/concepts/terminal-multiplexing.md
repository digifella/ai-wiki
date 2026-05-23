---
type: concept
domain: tools-platforms
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
updated: 2026-05-23
group: developer-tooling-clis
---
# Terminal Multiplexing

[[concepts/tmux-sessions|Terminal multiplexing]] is a [[concepts/software|software]] technique that allows a single terminal window to manage multiple independent shell sessions and panes simultaneously. Rather than opening separate terminal [[entities/windows|windows]] or tabs, a multiplexer divides the display into resizable sections, each [[concepts/running|running]] its own shell instance. This [[concepts/consolidation|consolidation]] reduces visual clutter and simplifies [[concepts/workspace-management|workspace organization]], particularly for developers and system administrators who regularly work with many concurrent processes.

## Key Capabilities

The primary value of terminal multiplexing lies in [[concepts/session|session]] [[concepts/data-persistence|persistence]] and detachment. When using a multiplexer like tmux or GNU Screen, a user can start long-running processes, then disconnect from the session without terminating those processes. The session continues running on the remote or local machine, and the user can reconnect later to check status or interact with the same environment. This is especially useful over [[concepts/ssh|SSH]] connections, where a lost network link would normally kill all running processes.

## Common Tools

tmux ([[entities/tmux|terminal multiplexer]]) is the most widely adopted multiplexer in modern [[concepts/developer-platforms|development environments]], offering a clean configuration model and active maintenance. GNU Screen is an older alternative with broader historical [[concepts/deployment|deployment]], particularly on [[concepts/vintage-computing|legacy systems]]. Both tools provide similar functionality: window management within a session, pane splitting, session naming and [[concepts/persistence|persistence]], and customizable keybindings. The choice between them typically reflects personal preference and existing system familiarity rather than substantial capability differences.
## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed