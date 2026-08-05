---
wiki-ingested: true
title: "Running persistent tmux sessions"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: entertainment-games
group: individual-sports-performance
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

# [[concepts/running|Running]] persistent [[concepts/tmux-sessions|tmux sessions]]

---
---
tmux new -s main
You now have a tmux [[concepts/session|session]] called main.

Inside it you can run anything:

[[concepts/python|Python]] jobs

[[concepts/docker|Docker]] services

[[entities/ollama|Ollama]] downloads

Scripts

Editors

Leave it running.

[[concepts/detach|Detach]] (without killing it):

CTRL + B then D
The session keeps running in the background forever.