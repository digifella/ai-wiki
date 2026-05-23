---
type: concept
domain: entertainment-games
tags:
  - "tmux"
  - "background-processes"
  - "session-management"
  - "devops"
  - "persistent-execution"
aliases:
  - "tmux sessions"
  - "background task running"
  - "persistent processes"
summary: This note explains how to create and detach persistent tmux sessions to run processes such as Python, Docker, and Ollama in the background.
updated: 2026-05-23
group: individual-sports-performance
---
# Running

Running processes in the background is essential for [[concepts/development-workflows|development workflows]] that require long-lived services or computationally intensive tasks. A [[concepts/session|tmux session]] provides a persistent terminal environment that continues operating even after disconnecting from it. This approach is particularly useful for running [[entities/python|Python]] scripts, [[concepts/docker-containers|Docker containers]], and [[concepts/statistical-language-modeling|language model]] services like [[entities/ollama|Ollama]] that need to remain active independently of the user's active terminal session.

## Creating and Managing Sessions

To create a new [[concepts/tmux-sessions|tmux]] session, use the command `tmux new -s [session-name]`. This establishes a named session—for example, `tmux new -s main`—where you can execute any process: [[concepts/python|Python]] jobs, [[entities/docker-desktop|Docker]] services, [[concepts/task-specific-modeling|Ollama]] downloads, scripts, or [[concepts/text|text]] editors. The session operates as a standalone environment separate from your current shell.

## Detaching and Background Operation

Once a process is running within a tmux session, you can [[concepts/detach|detach]] from it without terminating the process. Press Ctrl+B followed by D to detach. The session persists in the background indefinitely, allowing you to disconnect from your machine, close your terminal, or start new sessions without affecting the running process. You can reconnect to a detached session [[concepts/assistive-technology|at]] any time using `tmux attach-session -t [session-name]`.
## Source Notes
- 2026-03-27: [[inbox/2026-03-27-Pre-sandbox-test|Pre-sandbox test]]
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)
- 2026-04-10: [[lab-notes/2026-04-10-Bonzai-8B-PrismMLs-Revolutionary-1-Bit-LLM-First-Look-Test|Bonzai 8B PrismMLs Revolutionary 1 Bit LLM First Look Test]] · [▶ source](https://www.youtube.com/watch?v=aNg47-U_x6A)