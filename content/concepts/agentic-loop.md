---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "agent-loop"
  - "autonomous-agents"
  - "llm-systems"
  - "claude-code"
  - "ai-workflow"
  - "agent-architecture"
aliases:
  - "agentic loop pattern"
  - "agent control loop"
summary: A cyclic process enabling AI agents to iteratively perceive, reason, and act using large language models and tools like Claude Code.
updated: 2026-05-01
---
# Agentic Loop

An agentic loop is a cyclic process that enables [[concepts/agentic-ai|AI agents]] to operate autonomously by repeatedly perceiving their environment, [[concepts/reasoning|reasoning]] about observations, and taking actions. The loop typically involves an AI system—often powered by a [[concepts/large-language-model|large language model]] like [[concepts/claude-ai|Claude]]—receiving input, processing it through [[concepts/reasoning-steps|reasoning steps]], and executing actions via available tools. This cycle continues iteratively until the agent reaches a goal state or determines that no further action is needed.

## Core Mechanism

The agentic loop operates through three primary phases that repeat until completion. First, the agent perceives its current state through observations or user input. Second, it reasons about this information using [[concepts/statistical-language-modeling|language model]] [[concepts/inference|inference]] to determine an appropriate response or action. Third, it executes that action by calling available tools, APIs, or other external functions, which may modify the environment or retrieve new information. The results feed back into the perception phase, establishing a continuous cycle.

## Implementation Patterns

[[concepts/agentic-loops|Agentic loops]] are typically implemented using language models as the reasoning engine combined with a set of callable tools. The model processes observations as input, generates reasoning about what action to take, and selects from available tools to execute. Each [[concepts/iteration|iteration]] creates a new [[concepts/context-window|context window]] containing the previous steps, allowing the agent to maintain awareness of its progress and history. Termination conditions—such as reaching a defined goal, exhausting attempts, or determining that no further actions are productive—determine when the loop ends.

## Applications

Agentic loops enable a range of autonomous behaviors including research and analysis tasks, code generation and [[concepts/debugging|debugging]], complex [[concepts/problem-solving|problem-solving]], and [[concepts/recurring-actions|task automation]]. The effectiveness of any agentic loop depends on the quality of available tools, the clarity of goal specifications, and the reasoning capability of the underlying language model.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-29: OpenClaw · [▶ source](https://www.youtube.com/watch?v=L7FF8Zgab3M)
- 2026-04-08: [[lab-notes/2026-04-08-Agentic-Visual-Reasoning-Enhancing-VLMs-for-Precise-Object-Counting-an|Agentic Visual Reasoning Enhancing VLMs for Precise Object Counting an]] · [▶ source](https://www.youtube.com/watch?v=VFYnD1WREdU)
- 2026-04-10: [[lab-notes/2026-04-10-Alibaba-Qwen-36-Plus-Agentic-Coding-and-Multimodal-Reasoning-Towards|Alibaba Qwen 36 Plus Agentic Coding and Multimodal Reasoning Towards]] · [▶ source](https://www.youtube.com/watch?v=v8RokQY05Bo)
- 2026-04-15: [[lab-notes/2026-04-15-Hermes-Agent-Self-Improving-AI-for-Adaptive-User-Learning|Hermes Agent Self Improving AI for Adaptive User Learning]] · [▶ source](https://www.youtube.com/watch?v=5PLDovsqKaQ)
- 2026-04-26: Karpathy
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)