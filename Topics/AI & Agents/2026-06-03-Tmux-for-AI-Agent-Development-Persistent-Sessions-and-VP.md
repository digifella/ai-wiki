---
wiki-ingested: true
title: "Tmux for AI Agent Development: Persistent Sessions and VPS Offloading"
date: 2026-06-03
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
aliases:
  - "lab-notes/2026-06-03-Tmux-for-AI-Agent-Development-Persistent-Sessions-and-VP"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Tmux for AI Agent Development: Persistent Sessions and VPS Offloading
**Clip title:** Build Anything with Tmux, Here's How
**Author / channel:** [[entities/david|David]] Ondrej
**URL:** https://www.youtube.com/watch?v=z7xyZQVK4Dg

### Summary
The video provides a comprehensive guide to `tmux`, a terminal multiplexer, emphasizing its critical role for "Agentic Engineers" in developing [[concepts/agentic-ai|AI agents]]. The main topic revolves around how `tmux` enables persistent, multi-tasking [[concepts/terminal-multiplexing|terminal sessions]], which is essential for running AI agents that often require hours or days to complete [[concepts/complex-tasks|complex tasks]] without interruption. The video highlights that many leading AI developers already leverage `tmux` for this [[concepts/motivation|purpose]].

The presenter first introduces `tmux` as a tool that allows users to run multiple terminals at once. Its most crucial feature for [[concepts/ai-development|AI development]] is its ability to keep terminal sessions alive even when the user disconnects, whether due to a laptop dying, battery running out, or simply needing to close the lid. This [[concepts/data-persistence|persistence]] is vital for long-running [[concepts/ai-agent|AI agent]] tasks, such as large refactors or goal-oriented operations (e.g., `/goal` [[concepts/commands|commands]] in [[concepts/codex|Codex]] or [[entities/hermes-agent|Hermes]]). The video then demonstrates basic `tmux` [[concepts/installation|installation]] on a local machine and fundamental commands like creating a new [[concepts/session|session]] (`tmux new -s <session_name>`), detaching (`Ctrl+B D`), and reattaching (`tmux attach -t <session_name>`). The core concepts of `tmux` – sessions, [[entities/windows|windows]] (like browser tabs), and panes (split screens within a window) – are clearly explained.

The true power of `tmux` for Agentic Engineers is unlocked when combined with a [[concepts/virtual-private-server-vps|Virtual Private Server (VPS)]]. By running `tmux` on a VPS, developers can offload heavy AI agent computations from their local machines to a remote server. This allows for continuous agent execution even if the local device is turned off, disconnected from the internet, or needs to run other tasks. The video includes a step-by-step walkthrough of setting up a VPS (using Hostinger as an example), connecting to it via [[concepts/ssh|SSH]], installing `tmux` on the Ubuntu server, and configuring essential features like mouse support.

Finally, the video demonstrates how to install and run multiple AI agents, specifically Codex CLI and [[concepts/ai-assisted-coding|Claude Code]], within different panes of a `tmux` session on the VPS. This showcases the ability to manage several long-running agents in parallel from a single terminal interface. The presenter reiterates the flexibility of detaching from the VPS session and reattaching later from any device (laptop, phone) to find the agents still actively working. The conclusion is that adopting `tmux` on a VPS is a non-negotiable step for modern AI development, allowing engineers to be significantly more efficient, persistent, and utilize their local resources optimally, essentially future-proofing their [[concepts/workflow|workflow]].

### Video Description & Links
#### Description
Get all of the assets from this video: https://www.davidondrej.com/tmux-installation-guide

We're hiring: https://www.scalesoftware.ai/

tmux: https://github.com/tmux/tmux/wiki 

Build anything with Tmux, here's how

#### Tags
`David Ondrej`, `david ondrej`, `AI`, `ChatGPT`, `artificial intelligence`, `ai`, `Artificial Intelligence`, `OpenAI`, `chatgpt`, `chat gpt`, `Chat GPT`, `AGI`, `midjourney`, `david ondrej podcast`, `GPT`, `new society`, `david ondrej new society`, `david ondrej community`, `make money with AI`, `AI Agents`, `ai agent`, `AI Agent Startup`, `AI SaaS`, `AI Startup`, `tmux`, `TMUX`, `how to tmux`, `tmux ai agents`

#### URLs
- https://www.davidondrej.com/tmux-installation-guide
- https://www.scalesoftware.ai/
- https://github.com/tmux/tmux/wiki

## Related Concepts
- [[concepts/tmux-sessions|Tmux]] — [Wikipedia](https://en.wikipedia.org/wiki/Tmux)
- [[concepts/tmux-sessions|Terminal Multiplexer]] — [Wikipedia](https://en.wikipedia.org/wiki/Terminal_multiplexer)
- [[concepts/persistence|Persistent Sessions]]
- [[concepts/persistence|AI Agent Development]]
- [[concepts/agentic-engineering|Agentic Engineering]]
- [[concepts/persistence|VPS Offloading]]
- [[concepts/session-management|Session Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Session_%28computer_networking%29)
- Window Management — [Wikipedia](https://en.wikipedia.org/wiki/Window_manager)
- [[concepts/remote-inference|Remote Execution]]
- [[concepts/million-step-task-execution|Long-running Tasks]]
- Parallel [[concepts/agent-collaboration|Agent Orchestration]]
- [[concepts/efficient-care|Resource Optimization]]
- [[entities/linux|Linux]] Administration

## Related Entities
- [[entities/david-ondrej|David Ondrej]]
- [[entities/tmux|Tmux]] — [Wikipedia](https://en.wikipedia.org/wiki/Tmux)
- Codex CLI — [Wikipedia](https://en.wikipedia.org/wiki/Codex_CLI)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_%28AI%29)
- Hostinger — [Wikipedia](https://en.wikipedia.org/wiki/Hostinger)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- SSH — [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- Skool — [Wikipedia](https://en.wikipedia.org/wiki/School)
- Scale [[concepts/software|Software]]