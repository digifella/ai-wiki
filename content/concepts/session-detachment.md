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
updated: 2026-05-01
---
# Session Detachment

Session detachment is a [[concepts/terminal-multiplexing|terminal multiplexing]] technique that allows long-[[concepts/running|running]] processes to continue executing on a remote server even after the user disconnects from their terminal [[concepts/session|session]]. This capability is particularly valuable in [[concepts/ai-agent-workflows|AI agent workflows]] where tasks may require extended computation time or persistent monitoring. The most common tool implementing this pattern is tmux ([[entities/tmux|terminal multiplexer]]), which maintains a server process that continues running independently of any client [[concepts/connection|connection]].

## How It Works

When a user attaches to a tmux session and starts a process, that process runs within the tmux server rather than directly within their terminal client. Upon detachment—typically triggered by closing the terminal, losing network connection, or explicitly pressing Ctrl+B followed by D—the tmux server persists on the remote machine and maintains all running processes. The user can later reconnect to the same session from any terminal to check progress, view output, or interact with the running processes.

## Use Cases in AI Agents

This technique is essential for [[concepts/agentic-systems|agent systems]] deployed on remote infrastructure. AI agents performing long-duration tasks such as model [[concepts/training|training]], data processing pipelines, or [[concepts/continuous-monitoring|continuous monitoring]] loops benefit from session detachment because it eliminates dependency on a persistent client connection. Developers can start an agent process, [[concepts/detach|detach]] safely, and reconnect hours or days later to review logs or manage the session, without interrupting execution.

## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed