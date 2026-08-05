---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "tmux"
  - "background-processes"
  - "session-management"
  - "persistent-sessions"
aliases:
  - "tmux sessions"
  - "persistent sessions"
summary: This note explains how to create and detach from persistent tmux sessions to run processes such as Python, Docker, and Ollama in the background.
updated: 2026-07-11
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Background Processes

[[concepts/background-agents|Background processes]] allow you to run long-lived applications and services without occupying your [[concepts/cli|terminal]] [[concepts/session|session]]. This is essential for [[concepts/development-workflows|development workflows]] where you need multiple services running simultaneously, such as development servers, [[concepts/docker-containers|Docker containers]], or [[concepts/statistical-language-modeling|language model]] interfaces like [[entities/ollama|Ollama]]. Rather than opening multiple terminal [[entities/windows|windows]], you can use [[concepts/tmux-sessions|tmux]] ([[entities/tmux|terminal multiplexer]]) to create detachable sessions that persist independently of your current shell.

## Creating and Using tmux Sessions

To start a new tmux session, use `tmux new -s <session-name>`. This creates a named session where you can run [[concepts/commands|commands]] as usual. Once inside the session, you can launch your process (such as `[[entities/python|python]] script.py`, `[[entities/docker-desktop|docker]]-compose up`, or `ollama serve`). To [[concepts/detach|detach]] from the session and return to your main shell, press `Ctrl+B` followed by `D`. The process continues running in the background.

To reconnect to an existing session, use `tmux attach -t <session-name>`. You can view all active sessions with `tmux list-sessions`. If a session is no longer needed, terminate it with `tmux kill-session -t <session-name>`.

## Practical Considerations

Using tmux is preferable to background operators like `&` or `nohup` because it preserves the full terminal environment and allows you to monitor output or interact with the process later. Each tmux session maintains its own shell state, so you can run multiple independent services simultaneously without conflicts. This approach is particularly useful when working over SSH connections, as [[concepts/persistent-computing|tmux sessions]] persist even if your network [[concepts/connection|connection]] drops.
## Source Notes
- 2026-04-11: [[lab-notes/2026-04-11-Claudes-Advisor-Strategy-Monitor-Tool-and-Managed-Agents-for-AI-Develo|Claudes Advisor Strategy Monitor Tool and Managed Agents for AI Develo]] · [▶ source](https://www.youtube.com/watch?v=Q-QznaH1WS0)
- 2026-04-14: [[lab-notes/2026-04-14-Transforming-NotebookLM-Mind-Maps-into-Engaging-Visuals-with-Google-Ge|Transforming NotebookLM Mind Maps into Engaging Visuals with Google Ge]] · [▶ source](https://www.youtube.com/watch?v=m25BiEBU7GU)
- 2026-04-21: Lightroom · [▶ source](https://youtu.be/797b8VFXIYs)
