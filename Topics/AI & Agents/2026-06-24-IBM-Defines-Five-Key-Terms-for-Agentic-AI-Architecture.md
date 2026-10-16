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
aliases:
  - "lab-notes/2026-06-24-IBM-Defines-Five-Key-Terms-for-Agentic-AI-Architecture"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

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

#aiagents #agenticai #aiarchitecture #mcp

#### Tags
`IBM`, `IBM Cloud`

#### URLs
- https://ibm.biz/~dXkrYnDwR

## Related Concepts
- [[concepts/agentic-ai|Agentic AI]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)
- [[concepts/agentic-ai|AI Agents]]
- [[concepts/time-blocking|Task Planning]]
- [[concepts/ai-coding|Code Generation]]
- [[concepts/autonomous-operation|Autonomous Operation]]
- [[concepts/understanding-the-physical-world|AI Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Artificial_intelligence_in_architecture)
- [[concepts/internal-instructions|Internal Instructions]]
- [[concepts/external-interactions|External Interactions]]
- [[concepts/complex-orchestration|Complex Orchestration]]
- [[concepts/minimal-human-involvement|Minimal Human Involvement]]
- [[concepts/agentsmd|Agents.MD]]
- [[concepts/agent-skills|Agent Skills]]
- Model Context Protocol (MCP)
- Agent-to-Agent (A2A) Protocol
- [[concepts/subagents|Subagents]]
- [[concepts/token-management|Context Window Management]]

## Related Entities
- [[entities/ibm|IBM]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM)
- [[entities/martin-keen|Martin Keen]]
- [[entities/ibm-technology|IBM Technology]]
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- Agentic AI Foundation (AAIF)
- Linux Foundation — [Wikipedia](https://en.wikipedia.org/wiki/Linux_Foundation)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]