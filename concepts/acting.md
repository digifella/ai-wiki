---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "react-framework"
  - "behavior-modeling"
  - "google-adk"
  - "behavioral-types"
  - "decision-making"
  - "tool-use"
aliases:
  - "Agent Execution"
  - "Agentic Action"
  - "Tool Use"
  - "Adaptive Behavior"
summary: Acting refers to the capability of autonomous AI agents to execute actions and use external tools based on reasoning and environmental feedback, distinguishing them from static text generation systems.
updated: 2026-07-04
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-04" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Acting

"Acting" in the context of [[concepts/agentic-ai]] refers to the capability of an autonomous system to execute actions based on [[concepts/reasoning|reasoning]] and environmental [[concepts/feedback|feedback]], distinguishing it from static [[concepts/text-generation|text generation]]. This concept encompasses behavioral frameworks, tool usage, and adaptive [[concepts/decision-making|decision-making]] [[concepts/loops|loops]].

## Core Components

*   **[[concepts/react-framework|ReAct Framework]]**: A paradigm combining reasoning ([[concepts/multi-step-reasoning|chain-of-thought]]) and acting (tool usage). The agent generates a thought process, determines an action to take, observes the result, and iterates until a goal is met [[concepts/ai-agents|AI Agents]] Explained: [[entities/react|ReAct]] Framework, [[concepts/behavioral-types|Behavioral Types]], and [[concepts/google-search|Google]] ADK.
*   **Behavioral Types**: [[concepts/ai-connectors|AI agents]] exhibit distinct behavioral patterns based on their configuration, ranging from simple reactive scripts to complex, planning-oriented systems.
*   **[[entities/google|Google]] ADK ([[concepts/agent-development|Agent Development]] Kit)**: A toolkit for building production-grade agents, emphasizing modular design and integration with [[concepts/cloud-based-services|cloud infrastructure]] [[concepts/voice-assistants|AI Agents]] Explained: ReAct Framework, Behavioral Types, and [[concepts/adk|Google ADK]].

## Key Distinctions

*   **Agents vs. Chatbots**: Traditional chatbots rely on pre-defined responses or static [[concepts/pattern-matching|pattern matching]]. [[concepts/ai-bots|AI agents]] possess agency; they can plan sequences of actions, use [[concepts/external-tools|external tools]] ([[concepts/open-standard-protocols|APIs]], databases), and adapt to unexpected outcomes AI Agents Explained: ReAct Framework, Behavioral Types, and Google ADK.
*   **Reasoning [[concepts/loop|Loop]]**: The core of "acting" is the cycle of *Thought -> Action -> Observation*. This loop allows the agent to refine its approach in real-time.

## References

*   [AI Agents Explained: ReAct Framework, Behavioral Types, and Google ADK](https://www.youtube.com/watch?v=Zqno_vux6d8)
## Source Notes
- 2026-06-13: [[lab-notes/2026-06-13-AI-Agents-Explained-ReAct-Framework-Behavioral-Types-and|AI Agents Explained: ReAct Framework, Behavioral Types, and Google ADK]]
