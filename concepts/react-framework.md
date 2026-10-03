---
type: concept
domain: ai-agents
tags:
  - "react"
  - "reasoning"
  - "acting"
  - "llm-agents"
  - "prompting-paradigm"
  - "loop"
aliases:
  - "ReAct"
  - "Reason+Act"
summary: The ReAct framework is a prompting paradigm for LLM-based agents that enables reasoning through complex tasks by interleaving thought processes with external actions in an iterative loop.
updated: 2026-07-12
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# ReAct Framework

**[[entities/react|ReAct]]** ([[concepts/reasoning|Reasoning]] + [[concepts/acting|Acting]]) is a [[concepts/prompting|prompting]] paradigm and behavioral framework for [[concepts/llm]]-based agents. Unlike standard [[concepts/ai-bots|Chatbots]] that only generate text, ReAct enables agents to [[concepts/purpose|reason]] through [[concepts/complex-tasks|complex tasks]] by interleaving [[concepts/thought-processes|thought processes]] with external actions.

## Core Mechanism
The framework operates on a [[concepts/loop|loop]] of three steps:
1. **Thought:** The model reasons about the current state and decides on a next action.
2. **Action:** The model executes an operation (e.g., calling an [[concepts/application-programming-interface-api]], searching a [[concepts/knowledge-base]]).
3. **Observation:** The model processes the output of the action, feeding it back into the reasoning loop.

This [[concepts/software-sprint|iterative cycle]] allows agents to handle multi-step problems, verify information, and adapt to dynamic environments.

## Integration & Context
- **Distinction from Chatbots:** ReAct defines [[concepts/agentic-ai|AI agents]] by their capacity to *act* and *adapt*, moving beyond static [[concepts/pattern-matching|pattern matching]] [[lab-notes/2026-06-13-AI-Agents-Explained-ReAct-Framework-Behavioral-Types-and|AI Agents Explained: ReAct Framework, Behavioral Types, and Google ADK]].
- **[[concepts/google-search|Google]] ADK:** The principles of ReAct are foundational to modern [[concepts/agent-development|agent development]] kits, including [[entities/google|Google]] ADK, which structures how agents build behavior types and manage tool use.

## References
[AI Agents Explained: ReAct Framework, Behavioral Types, and Google ADK](https://www.youtube.com/watch?v=Zqno_vux6d8)
