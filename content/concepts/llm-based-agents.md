---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "concept"
  - "llm-agents"
  - "langchain"
  - "gemini"
  - "multi-modal"
  - "agent-systems"
  - "ai-research"
aliases:
  - "LLM Agents"
  - "Large Language Model Agents"
summary: Agents built on large language models, exemplified by a Gemini 2.5 multi-modal researcher tool constructed with LangGraph.
updated: 2026-05-01
---
# LLM Based Agents

LLM-based [[concepts/agents|agents]] are autonomous systems that leverage [[concepts/large-language-model-llm|large language models]] as their [[concepts/reasoning|reasoning]] and decision-making core. These agents combine the natural language understanding and generation capabilities of LLMs with [[concepts/external-tools|external tools]], APIs, and planning mechanisms to accomplish [[concepts/complex-tasks|complex tasks]]. Unlike static language models, agents can perceive their environment, formulate plans, take actions, and evaluate results in iterative loops.

## Architecture and Implementation

LLM-based agents are typically constructed using [[concepts/agentic-frameworks|agentic frameworks]] that manage the interaction between the model and its tools. [[concepts/langgraph-framework|LangGraph]] is a common framework for building such agents, enabling developers to define [[concepts/multi-agent-workflows|agent workflows]] as graphs where nodes represent decision points or actions and edges represent transitions. These agents often operate in multi-turn conversations where each interaction allows the model to refine its understanding and approach.

## Capabilities and Applications

Modern LLM agents demonstrate capabilities spanning research, code generation, marketing [[concepts/automation|automation]], and [[concepts/content-creation|content creation]]. Multi-modal variants, such as those built on [[concepts/gemini-25-models|Gemini 2.5]], can process and synthesize information across text, [[concepts/images|images]], and other media formats. Agents can be configured with specialized [[concepts/skills|skills]] or access to specific tools, allowing organizations to create teams of [[concepts/specialized-sub-agents|specialized agents]] working toward coordinated goals, though considerations around cost efficiency remain relevant in production deployments.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-AI-Recursive-Self-Improvement-The-Dawn-of-Intelligence-Explosion|AI Recursive Self Improvement The Dawn of Intelligence Explosion]] · [▶ source](https://www.youtube.com/watch?v=mhoFqhLXc3g)
- 2026-04-08: [[lab-notes/2026-04-08-Anthropic-Dispatch-Remote-Desktop-AI-Integration-Claude-and-OpenClaw|Anthropic Dispatch Remote Desktop AI Integration Claude and OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=1_VlT1vhN04)
- 2026-04-10: [[lab-notes/2026-04-10-NemoClaw-vs-OpenClaw-NVIDIAs-Secure-AI-Agent-for-Enterprise|NemoClaw vs OpenClaw NVIDIAs Secure AI Agent for Enterprise]] · [▶ source](https://www.youtube.com/watch?v=LfvKkrVSO-U)
- 2026-04-15: [[lab-notes/2026-04-15-Hermes-Agent-Self-Improving-AI-for-Adaptive-User-Learning|Hermes Agent Self Improving AI for Adaptive User Learning]] · [▶ source](https://www.youtube.com/watch?v=5PLDovsqKaQ)