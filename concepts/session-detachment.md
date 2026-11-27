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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Session Detachment

Session detachment is a terminal multiplexing technique that allows processes to continue executing on a remote server after a user disconnects from their terminal session. This is achieved by decoupling the running process from the terminal connection itself, enabling the process to persist independently of the user's active network link. The primary tool implementing this pattern is tmux, a terminal multiplexer that maintains sessions server-side regardless of client connection status.

The mechanism relies on a client-server architecture where the tmux server runs as a background daemon on the host system. When a user attaches to a session, they are merely viewing the output and sending input to this persistent server. Detaching the client removes the user's view of the session but leaves the server and its associated processes running. This allows long-running tasks, such as compilations, data transfers, or server deployments, to complete even if the SSH connection drops or the local machine loses power.

To utilize this feature, users typically create a new session or attach to an existing one using tmux commands. Detaching can be performed manually via a key binding or command, or automatically when the client exits. Reattaching later restores the user's view of the session, including the exact state of the terminal and any running processes, providing a seamless continuity of work across disconnected intervals.

## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed
