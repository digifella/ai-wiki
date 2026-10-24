---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 1ba8b87278cf7dadcea9
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "AI Models Are Eating Their Harnesses. Now What?"
date: 2026-10-18
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-18-pEHfZUrahGc-AI-Models-Are-Eating-Their-Harnesses.-Now-What"
---
## AI Models Are Eating Their Harnesses. Now What?
**Clip title:** AI Models Are Eating Their Harnesses. Now What?
**Author / channel:** Turing Post TV
**URL:** https://www.youtube.com/watch?v=pEHfZUrahGc

### Summary
Sure, here's a summary of the video content:

### Main Topic
The video discusses AI harnesses—what they are, why they are needed, and how they function alongside AI models and agents.

### Key Points Discussed
- **What is an AI Harness?**: A harness is the software that surrounds an AI model, managing its execution tools, context, and interactions with the outside world.
- **Why Do We Need Harnesses?**: While capable language models know a lot, they lack access to external tools, databases, and logs unless provided with a harness to connect them to these resources.
- **Layers of a Harness**: According to Judah Katz, a harness can be divided into two broad layers: runtime (infrastructure for running agents and executing tools) and context orchestration (determining model selection, tool exposure, prompts, context, and memory).
- **Harness Tax**: Sophisticated harnesses can add costs through extra instructions, model calls, and tool interactions, sometimes without significantly improving benchmark scores.
- **Managing Long-Running Agents**: Long-running tasks require systems that preserve task state, handle unexpected events, and allow agents to resume work after interruptions without needing continuous active conversation.

### Conclusions/Takeaways
- **Harnesses vs. Models**: While AI models provide reasoning and decision-making capabilities, harnesses make it possible to carry out those decisions in specific environments.
- **The Data Flywheel**: Harnesses make difficult tasks feasible, generating data and experience that can be used to improve future models, eventually making some original harness mechanisms unnecessary.
- **Evaluation is Key**: To know if a harness is helping or simply adding cost and complexity, developers must evaluate agent performance across different configurations using representative tasks and metrics.

### Video Description & Links
#### Description
AI harness engineering is everywhere right now. But as AI models become more capable, some engineers are removing the very instructions and orchestration that once made their agents work.

Others are building increasingly sophisticated systems to manage tools, memory, permissions, and tasks that last for days.
So do we need AI harnesses at all?

After attending @aiDotEngineer NYC, I wanted to understand why people building these systems have such different answers.
In this episode of Attention Span by Turing Post, we start with a working coding agent built in about 25 lines, then explore what happens when you give an agent more complicated work.

We look at how harnesses manage context, coordinate multiple agents, preserve state, enforce permissions, create new tools, and sometimes make models slower and more expensive. We also examine the growing evidence that better models can make parts of their own harnesses unnecessary.

Featuring research, demonstrations, and ideas from:
Jediah Katz — @cursor_ai  and @Grok Bot: runtime versus context orchestration, the harness tax, and why models are absorbing their scaffolding.

Aman Singh, Arca — Long-running agents that preserve tasks and resume work when external events arrive.
Aparna Dhinakaran, @arizeai  — Signal, persistent agent state, and recovering work across execution environments.
Belinda Neal and Keon Shahab, @anthropic-ai — Skills, MCP, agent identity, and human approval for sensitive financial operations.
Philipp Schmid, @googledeepmind — Protecting credentials with proxies and runtime controls.
Shigma, DeepSeek — Creator mode and the Cordis plugin lifecycle for dynamically managing tools.
Akshat Bubna, Modal — Dynamic execution environments and task-specific sandboxes.
NormAI and Blackstone — Using evaluations to identify scaffolding that can be removed.
Dillon Rolnick, @Nousresearch — Owning agent infrastructure and avoiding dependence on a single model provider.
We also discuss Cursor's work on token efficiency, research from UC Berkeley and Apple/EPFL, and The Smallest Coding Agent from The Focus AI.

CHAPTERS
00:00 Introduction to Harnesses
01:33 What Is an AI Harness?
04:24 Why Models Need a Harness
06:44 Runtime and Orchestration
07:55 Complexity and Optimization
11:14 Long-Running Agent Workflows
14:15 Authorization and Safety
16:56 Dynamic Tool Construction
19:33 Measuring Harness Value
22:15 The Future of the Harness
25:19 Building Practical Harnesses

REFERENCES
The Smallest Coding Agent — https://labs.thefocus.ai/recipes/smallest-coding-agent/
DeepSeek Harness https://www.youtube.com/watch?v=jtyV7O4Pt0s&t=5s
Cursor: Improved Token Efficiency — https://cursor.com/blog/improved-token-efficiency
AI Engineer NYC 2026 — https://ai.engineer/nyc/2026
Harness Tax — https://harnesstax.github.io/
Apple Machine Learning Research: Harnesses for Autonomous ML Engineering — https://machinelearning.apple.com/research/harness-autonomous-ml-engineering

ABOUT TURING POST
Turing Post is an independent AI media publication exploring how machines learn, reason, remember, and act.

Watch more Attention Span episodes and our Inference interviews here on YouTube.

#AIHarness #AIAgents #AgentEngineering

#### Tags
`AIHarness`, `AIAgents`, `AgentEngineering`

#### URLs
- https://labs.thefocus.ai/recipes/smallest-coding-agent/
- https://www.youtube.com/watch?v=jtyV7O4Pt0s&t=5s
- https://cursor.com/blog/improved-token-efficiency
- https://ai.engineer/nyc/2026
- https://harnesstax.github.io/
- https://machinelearning.apple.com/research/harness-autonomous-ml-engineering
