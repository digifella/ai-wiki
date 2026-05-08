---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "critique"
  - "quality-assurance"
  - "response-evaluation"
  - "error-detection"
  - "improvement-process"
  - "agent-skills"
aliases:
  - "rigorous critique"
  - "response review"
  - "quality check"
summary: A process for performing a rigorous critique of a response to identify errors and propose improved alternatives.
updated: 2026-05-01
---
# Task Review

[[concepts/structureux|Task Review]] is a structured process in which an [[concepts/ai-agent|AI agent]] systematically evaluates its own previous response to identify deficiencies and generate improvements. Rather than accepting initial outputs as final, Task Review applies a [[concepts/diagnostic-audit|rigorous critique]] framework to uncover errors in [[concepts/reasoning|reasoning]], [[concepts/factual-accuracy|factual accuracy]], clarity, completeness, and practical applicability. This self-evaluation loop is particularly valuable in [[concepts/multi-agent-workflows|agent workflows]] where response quality directly impacts downstream tasks.

## The Review Process

A Task Review typically examines multiple dimensions of a response simultaneously. These include factual correctness, the strength of supporting evidence, clarity of explanation, coverage of relevant considerations, potential biases, and real-world feasibility. The reviewer—whether the same agent or a separate reviewing agent—identifies gaps, contradictions, or areas where the original response could be more precise or comprehensive.

## Application in Agent Workflows

Task Review functions as a [[concepts/quality-control|quality control]] mechanism within [[concepts/ai-productivity-agents|AI agent systems]]. By implementing review stages between task completion and delivery or subsequent action, workflows can catch errors before they propagate. This is especially important when [[concepts/agents|agents]] operate autonomously over extended sequences of tasks, as early error detection prevents compounding failures. Task Review can be integrated as a standard step in agent pipelines or triggered conditionally based on response complexity or consequence severity.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Claude-CoWork-Automating-Workflows-with-Local-File-Access-and-AI|Claude CoWork Automating Workflows with Local File Access and AI]] · [▶ source](https://www.youtube.com/watch?v=_ZpZ1cB67_Y)
- 2026-04-08: [[lab-notes/2026-04-08-Maximizing-Claude-Code-20-Features-and-Tips-for-AI-Automation|Maximizing Claude Code 20 Features and Tips for AI Automation]] · [▶ source](https://www.youtube.com/watch?v=fUShvacDLtw)
- 2026-04-15: [[lab-notes/2026-04-15-Hermes-Agent-Self-Improving-AI-for-Adaptive-User-Learning|Hermes Agent Self Improving AI for Adaptive User Learning]] · [▶ source](https://www.youtube.com/watch?v=5PLDovsqKaQ)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropic-Claude-Opus-47-Agentic-Coding-Multimodal-and-Memory-Advancem|Anthropic Claude Opus 47 Agentic Coding Multimodal and Memory Advancem]] · [▶ source](https://www.youtube.com/watch?v=uXF6bR4_5RY)
- 2026-04-29: OpenClaw · [▶ source](https://www.youtube.com/watch?v=L7FF8Zgab3M)