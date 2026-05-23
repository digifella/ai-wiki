---
type: concept
domain: tools-platforms
summary: A tool runner is an execution component that invokes and manages external functions, APIs, or computational processes within AI agent frameworks.
updated: 2026-05-23
group: developer-tooling-clis
---
title: "tool runner"
---

# tool runner

An execution component within [[concepts/agentic-ai]] responsible for invoking and managing external functions, APIs, or computational processes.

### Framework Implementations & Applications
- [[entities/hermes]] and [[entities/openclaw]] function as complementary [[concepts/agentic-ai]] rather than competing technologies.
- High-value [[concepts/business-applications|Business Applications]] include [[concepts/automated-trading-bots|Automated trading bots]] and [[concepts/content-creation]] [[concepts/automation|automation]].
- The interplay between these frameworks optimizes the [[concepts/tool-runner]]'s ability to execute tasks across external environments.

### RAG vs Agents: Role of Tool Runners
- **RAG** enhances LLM [[concepts/responses|responses]] via retrieved knowledge but **cannot execute external actions** (e.g., [[entities/api-calls|API calls]], data processing).
- **[[concepts/agents|Agents]]** extend RAG by incorporating **tool execution** (via tool runners) to interact with external systems and perform tasks.
- Tool runners are **essential for [[concepts/agent-capabilities|agent capabilities]]** (e.g., triggering workflows, accessing live data) but **irrelevant for [[concepts/contextualized-language-understanding|RAG systems]]**.

## Sources
- 2026 04 10 [[entities/hermes-agent|Hermes]] and [[concepts/automated-information-pipelines|OpenClaw]] Complementary [[concepts/agentic-frameworks|AI Agent Frameworks]] for Business

2026 04 14 Difference between RAG and Agents for [[concepts/workflow|workflow]]
## Source Notes
- 2026-04-07: Hermes Just Solved the Biggest Problem With OpenClaw