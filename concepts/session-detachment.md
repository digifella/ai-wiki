---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "concept"
  - "tmux"
  - "session-management"
  - "process-persistence"
  - "terminal-multiplexing"
  - "detachment"
aliases:
  - "tmux session detachment"
  - "persistent terminal sessions"
summary: A tmux technique for running persistent sessions that continue executing after detaching from the terminal.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Session Detachment

Session detachment is a terminal multiplexing technique that allows processes to continue executing on a remote server after a user disconnects from their terminal session. This is achieved by decoupling the running process from the terminal connection itself, enabling the process to persist independently of the user's active network link. The primary tool implementing this pattern is tmux, a terminal multiplexer that maintains sessions server-side regardless of client connection status.

The mechanism relies on a client-server architecture where the tmux server runs as a background daemon on the host machine. When a user attaches to a session, they are merely viewing the output and sending input to this persistent server process. Detaching the client removes the user's view of the session but leaves the server and its associated processes running. This allows long-running tasks, such as data processing or software compilation, to complete even if the SSH connection drops or the local terminal is closed.

Reconnecting to a detached session restores the user's view of the running environment without restarting the underlying work. This capability is essential for managing jobs on unreliable networks or when working across different devices. By keeping the session alive on the remote host, users can resume their workflow exactly where they left off, preserving the state of the terminal and the progress of any active commands.

## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed
