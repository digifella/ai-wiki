---
type: concept
domain: ai-agents
tags:
  - "tmux"
  - "background-processes"
  - "session-management"
  - "process-control"
  - "agent-infrastructure"
aliases:
  - "tmux session"
  - "persistent session"
  - "detached process"
summary: A tmux session allows for running and detaching background processes such as Python, Docker, and Ollama.
updated: 2026-05-23
group: agent-systems-skills
---
# Session

A session in the context of [[concepts/agentic-ai|AI agents]] and [[concepts/developer-platforms|development environments]] refers to a persistent workspace managed by [[concepts/tmux-sessions|tmux]], a [[entities/tmux|terminal multiplexer]]. A tmux session allows developers to run and manage multiple processes simultaneously, keeping them active in the background independently of the terminal window.

## Creating and Managing Sessions

To create a new tmux session, use the command `tmux new -s [session-name]`. Once created, a session can run various long-[[concepts/running|running]] processes including [[entities/python|Python]] scripts, [[concepts/docker-containers|Docker containers]], and [[entities/ollama|Ollama]] [[concepts/statistical-language-modeling|language model]] downloads. These processes continue executing even after the user disconnects from the session.

## Detaching and Persistence

Sessions can be detached from the active terminal without terminating the running processes. This is accomplished by pressing Ctrl+B followed by D. The session remains active in the background indefinitely, allowing users to reconnect to it later or leave it running as a persistent service. This capability is particularly useful for [[concepts/cloud-agents|AI agent development]], where continuous [[concepts/background-processes|background processes]] such as model serving or data processing are often necessary.
## Source Notes
<!-- No relevant sources found — AI notes were incorrectly attached to tmux session note -->