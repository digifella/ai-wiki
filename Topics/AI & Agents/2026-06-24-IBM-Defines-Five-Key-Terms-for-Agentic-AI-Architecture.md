---
wiki-ingested: true
title: IBM Defines Five Key Terms for Agentic AI Architecture
date: 2026-06-24
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-24 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## IBM Defines Five Key Terms for Agentic AI Architecture
**Clip title:** 5 [[concepts/ai-agent|AI Agent]] Terms You Need to Know
**[[entities/tasia-custode|Author]] / channel:** IBM Technology
**URL:** https://www.youtube.com/watch?v=k5jYwyhDMxA

### Summary
This video by Martin Keen from IBM breaks down the core components and concepts that enable "[[concepts/action-oriented-ai|Agentic AI]]" – [[concepts/ai-agents|AI agents]] capable of planning tasks, [[concepts/writing|writing]] code, and operating with [[concepts/minimal-human-involvement|minimal human involvement]]. Keen introduces five key terms that define the architecture and functionality of these [[concepts/advanced-ai-processing|advanced AI systems]], moving from internal configurations to external interactions and complex orchestrations.

Firstly, the video details the internal instruction layer of an AI agent, starting with **[[concepts/claudemd|Agents.MD]]**. This [[concepts/markdown|markdown]] file acts as a project-specific README for the agent, located at the root of a project. It provides crucial [[concepts/recommendations|directives]] such as [[concepts/commands|commands]] to execute, [[concepts/coding|coding]] conventions to follow, and even guidelines for pull request titles. `Agents.MD` files can be nested, allowing for project-specific rules to override broader ones, and this standard was developed by OpenAI and contributed to the Agentic AI Foundation (AAIF) under the [[entities/linux|Linux]] Foundation. Complementing this is the concept of an **Agent Skill**, which is a folder containing a `skill.md` file (with a description) and any necessary scripts or resources. These [[concepts/skills|skills]] are invoked dynamically by the agent only when relevant to a user's request, preventing unnecessary [[concepts/context-overload|context overload]] and [[concepts/acting|acting]] as modular, reusable capabilities.

Secondly, Keen explains how AI agents interact with external systems. The **[[concepts/external-tools|Model Context Protocol]] (MCP)** is introduced as an open standard for connecting [[concepts/ai-powered-applications|AI applications]] to a vast array of tools, data sources, and workflows. An [[concepts/mcp-server|MCP server]] wraps existing tools or data sources, presenting a standardized interface that any MCP-speaking agent can utilize, simplifying integration. For inter-agent communication, the **Agent-to-Agent (A2A)** protocol provides a standardized method for agents to communicate and delegate tasks to each other. Each agent publishes an "agent card" describing its capabilities and interaction methods, allowing other agents to understand and effectively hand off work, fostering collaborative AI ecosystems. Both MCP and A2A are [[concepts/open-standard-protocols|open standards]], governed by the AAIF, highlighting the industry's push for interoperability.

Finally, the video covers the advanced concept of **Subagents**. These are child agents spawned by a main (parent) agent to tackle specific, often large or parallelizable, pieces of work. For instance, a subagent can be tasked with reviewing thousands of code files, operating within its own fresh [[concepts/context-window|context window]] to prevent the main agent from being overwhelmed. Once its task is complete, the subagent returns a concise result, maintaining the main agent's contextual clarity. This [[concepts/parallel-processing|parallel processing]] capability allows AI agents to efficiently handle complex, multi-faceted tasks that would be unmanageable within a single context. Together, these five terms—Agents.MD, [[concepts/agent-harnesses|Agent Skills]], MCP, A2A, and Subagents—illustrate the sophisticated [[concepts/causes|mechanisms]] powering the frontier of Agentic AI today, enabling them to operate autonomously, adaptively, and interactively within complex digital environments.

### Video Description & Links
#### Description
Learn more about AI Agents here → https://ibm.biz/~dXkrYnDwR

[[concepts/frontier-ai|Frontier AI]] agents rely on more than just [[concepts/large-language-model-llm|large language models]] to function effectively. Martin Keen explains five essential concepts in agentic AI, including agents.md, agent skills, MCP, agent‑to‑agent communication, and sub‑agents. These terms define how modern AI agents actually work.

AI news moves fast. Sign up for a monthly newsletter for AI [[concepts/software-updates|updates]] from IBM → https://ibm.biz/~R5QxgtWK0

#aiagents #agenticai #aiarchitecture #mcp

#### Tags
`IBM`, `IBM Cloud`

#### URLs
- https://ibm.biz/~dXkrYnDwR
- https://ibm.biz/~R5QxgtWK0

## Related Concepts
- [[concepts/agentic-ai|Agentic AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_AI)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/time-blocking|Task Planning]] — [Wikipedia](https://en.wikipedia.org/wiki/Task_Planning)
- [[concepts/ai-coding|Code Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Code_Generation)
- [[concepts/autonomous-operation|Autonomous Operation]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_Operation)
- [[concepts/understanding-the-physical-world|AI Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Architecture)
- [[concepts/internal-instructions|Internal Instructions]] — [Wikipedia](https://en.wikipedia.org/wiki/Internal_Instructions)
- [[concepts/external-interactions|External Interactions]] — [Wikipedia](https://en.wikipedia.org/wiki/External_Interactions)
- [[concepts/complex-orchestration|Complex Orchestration]] — [Wikipedia](https://en.wikipedia.org/wiki/Complex_Orchestration)
- [[concepts/minimal-human-involvement|Minimal Human Involvement]] — [Wikipedia](https://en.wikipedia.org/wiki/Minimal_Human_Involvement)
- [[concepts/agentsmd|Agents.MD]] — [Wikipedia](https://en.wikipedia.org/wiki/Agents.MD)
- [[concepts/agent-skills|Agent Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Skills)
- Model Context Protocol (MCP) — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol_%28MCP%29)
- Agent-to-Agent (A2A) Protocol — [Wikipedia](https://en.wikipedia.org/wiki/Agent-to-Agent_%28A2A%29_Protocol)
- [[concepts/subagents|Subagents]] — [Wikipedia](https://en.wikipedia.org/wiki/Subagents)
- [[concepts/token-management|Context Window Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window_Management)

## Related Entities
- [[entities/ibm|IBM]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM)
- [[entities/martin-keen|Martin Keen]] — [Wikipedia](https://en.wikipedia.org/wiki/Martin_Keen)
- [[entities/ibm-technology|IBM Technology]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM_Technology)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- Agentic AI Foundation (AAIF) — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_AI_Foundation_%28AAIF%29)
- Linux Foundation — [Wikipedia](https://en.wikipedia.org/wiki/Linux_Foundation)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)