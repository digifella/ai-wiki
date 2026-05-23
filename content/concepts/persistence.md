---
type: concept
domain: tools-platforms
tags:
  - "tmux"
  - "session-management"
  - "process-persistence"
  - "terminal-multiplexing"
  - "detach-reattach"
aliases:
  - "tmux persistence"
  - "persistent sessions"
  - "session detaching"
summary: tmux allows for the creation of persistent sessions that can be detached without terminating running processes.
updated: 2026-05-23
group: automation-scheduling-sync
---
# Persistence

[[concepts/data-persistence|Persistence]] in the context of [[concepts/tmux-sessions|tmux]] refers to the ability to maintain [[concepts/running|running]] processes and [[concepts/terminal-multiplexing|terminal sessions]] independently of the user's [[concepts/connection|connection]]. [[concepts/background-processes|tmux sessions]] can continue executing [[concepts/commands|commands]], services, and [[concepts/software|applications]] even after the user disconnects from the terminal. This decoupling of user [[concepts/session|session]] from running processes is fundamental to why tmux is widely used in remote development and server environments.

## Creating and Detaching Sessions

A tmux session is created with a simple command like `tmux new -s session-name`, which establishes a new persistent workspace. Within this session, users can run long-running processes such as [[entities/python|Python]] jobs, [[entities/docker-desktop|Docker]] services, [[entities/ollama|Ollama]] downloads, or [[concepts/text|text]] editors. To disconnect from the session without terminating these processes, users press Ctrl+B followed by D to [[concepts/detach|detach]]. The session and all its contents remain active in the background.

## Reconnecting to Sessions

Persistent sessions can be reattached [[concepts/assistive-technology|at]] any later time using `tmux attach-session -t session-name` or `tmux a -t session-name`. This allows users to resume work exactly where they left off, with all processes continuing their execution. Multiple sessions can be maintained simultaneously, and users can switch between them, making this approach particularly valuable for managing multiple projects or long-running tasks on remote systems.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
- 2026-04-22: Lightroom Classic · [▶ source](https://youtu.be/K70wThvpHFM)
- 2026-04-27: AI Context Layer Architectures: Karpathy
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)