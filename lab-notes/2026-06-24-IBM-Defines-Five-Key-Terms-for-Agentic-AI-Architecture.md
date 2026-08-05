---
title: IBM Defines Five Key Terms for Agentic AI Architecture
date: 2026-06-24
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# IBM Defines Five Key Terms for Agentic AI Architecture
Generated: 2026-06-24 · API: Gemini 2.5 Flash · Modes: Summary

---

## IBM Defines Five Key Terms for Agentic AI Architecture
**Clip title:** 5 AI Agent Terms You Need to Know
**Author / channel:** IBM Technology
**URL:** https://www.youtube.com/watch?v=k5jYwyhDMxA

### Summary
This video by Martin Keen from IBM breaks down the core components and concepts that enable "Agentic AI" – AI agents capable of planning tasks, writing code, and operating with minimal human involvement. Keen introduces five key terms that define the architecture and functionality of these advanced AI systems, moving from internal configurations to external interactions and complex orchestrations.

Firstly, the video details the internal instruction layer of an AI agent, starting with **Agents.MD**. This markdown file acts as a project-specific README for the agent, located at the root of a project. It provides crucial directives such as commands to execute, coding conventions to follow, and even guidelines for pull request titles. `Agents.MD` files can be nested, allowing for project-specific rules to override broader ones, and this standard was developed by OpenAI and contributed to the Agentic AI Foundation (AAIF) under the Linux Foundation. Complementing this is the concept of an **Agent Skill**, which is a folder containing a `skill.md` file (with a description) and any necessary scripts or resources. These skills are invoked dynamically by the agent only when relevant to a user's request, preventing unnecessary context overload and acting as modular, reusable capabilities.

Secondly, Keen explains how AI agents interact with external systems. The **Model Context Protocol (MCP)** is introduced as an open standard for connecting AI applications to a vast array of tools, data sources, and workflows. An MCP server wraps existing tools or data sources, presenting a standardized interface that any MCP-speaking agent can utilize, simplifying integration. For inter-agent communication, the **Agent-to-Agent (A2A)** protocol provides a standardized method for agents to communicate and delegate tasks to each other. Each agent publishes an "agent card" describing its capabilities and interaction methods, allowing other agents to understand and effectively hand off work, fostering collaborative AI ecosystems. Both MCP and A2A are open standards, governed by the AAIF, highlighting the industry's push for interoperability.

Finally, the video covers the advanced concept of **Subagents**. These are child agents spawned by a main (parent) agent to tackle specific, often large or parallelizable, pieces of work. For instance, a subagent can be tasked with reviewing thousands of code files, operating within its own fresh context window to prevent the main agent from being overwhelmed. Once its task is complete, the subagent returns a concise result, maintaining the main agent's contextual clarity. This parallel processing capability allows AI agents to efficiently handle complex, multi-faceted tasks that would be unmanageable within a single context. Together, these five terms—Agents.MD, Agent Skills, MCP, A2A, and Subagents—illustrate the sophisticated mechanisms powering the frontier of Agentic AI today, enabling them to operate autonomously, adaptively, and interactively within complex digital environments.

### Video Description & Links
#### Description
Learn more about AI Agents here → https://ibm.biz/~dXkrYnDwR

Frontier AI agents rely on more than just large language models to function effectively. Martin Keen explains five essential concepts in agentic AI, including agents.md, agent skills, MCP, agent‑to‑agent communication, and sub‑agents. These terms define how modern AI agents actually work.

AI news moves fast. Sign up for a monthly newsletter for AI updates from IBM → https://ibm.biz/~R5QxgtWK0

#aiagents #agenticai #aiarchitecture #mcp

#### Tags
`IBM`, `IBM Cloud`

#### URLs
- https://ibm.biz/~dXkrYnDwR
- https://ibm.biz/~R5QxgtWK0
