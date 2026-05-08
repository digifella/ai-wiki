---
type: concept
domain: tools-platforms
group: developer-tooling-clis
tags:
  - "concept"
  - "tmux"
  - "terminal-multiplexer"
  - "session-management"
  - "persistent-processes"
  - "devops"
aliases:
  - "Tmux"
  - "Terminal Multiplexing"
summary: Tmux sessions allow running and detaching persistent background processes in a terminal multiplexer.
updated: 2026-05-01
---
# Tmux Sessions

[[concepts/background-processes|Tmux sessions]] are persistent terminal environments managed by the tmux [[entities/tmux|terminal multiplexer]]. A [[concepts/session|session]] can contain multiple [[entities/windows|windows]] and panes, allowing users to organize and manage multiple shell instances within a single logical workspace. Sessions remain active on the server even after the user disconnects from the client, enabling long-[[concepts/running|running]] processes to continue executing in the background.

## Creating and Managing Sessions

Sessions are created with the `tmux new-session` command or the shorthand `tmux new`. Each session is assigned a name, either specified by the user or automatically numbered. Users can attach to an existing session using `tmux attach-session`, reconnecting to their previous workspace with all windows and processes intact. Multiple users can attach to the same session simultaneously, useful for collaborative work or monitoring shared processes.

## Practical Applications

A common use case for sessions is running long-lived applications or batch jobs that should continue executing even if the network [[concepts/connection|connection]] drops or the terminal closes. Developers often maintain separate sessions for different projects, keeping build processes, servers, and monitoring tools isolated from one another. Sessions are particularly valuable on remote servers accessed via SSH, where network interruptions would otherwise terminate all running processes.

## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed