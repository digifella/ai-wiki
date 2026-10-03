---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "llm-routing"
  - "nvidia"
  - "nemo"
  - "architecture"
  - "dynamic-selection"
  - "sub-agent-architecture"
  - "dynamic-routing"
  - "nvidia-nemo"
  - "agent-orchestration"
aliases:
  - "Dynamic Model Selection"
  - "Agent Routing Architecture"
  - "NeMo Switchyard"
summary: Sub-agent Architecture is a design pattern where a primary orchestrator dynamically delegates tasks to specialized LLM instances to optimize for latency, cost, and accuracy.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-11T20:32:52+00:00" }
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Sub-agent Architecture

**Sub-agent Architecture** refers to a design pattern in AI Agents where a primary orchestrator delegates specific tasks to specialized, smaller, or more cost-effective [[concepts/large-language-model|Large Language Model]] instances. This approach contrasts with [[concepts/static-model-selection|static model selection]], aiming to optimize for latency, cost, and accuracy by dynamically choosing the most appropriate tool or model for a given context.

## Core Principles
- **Dynamic Routing**: The system evaluates task complexity and requirements in real-time to select the optimal backend.
- **Specialization**: Different sub-agents are tuned for distinct capabilities (e.g., [[concepts/reasoning|reasoning]], coding, creative writing).
- **Interoperability**: Seamless data exchange and context sharing between heterogeneous models.

## Implementation: NVIDIA NeMo Switchyard
Recent developments in dynamic routing include [[entities/nvidia|NVIDIA]] [[concepts/prime-agent-innovation|NeMo Switchyard]], an open-source library designed to address the inefficiencies of static model selection. It enables local agent routing and interoperability between different LLMs.

- **Function**: Acts as a dynamic router for AI agents, allowing them to switch between models based on task needs.
- **Key Benefit**: Reduces latency and cost by avoiding the use of heavy models for simple tasks.
- **Integration**: Facilitates Interoperability between diverse [[concepts/weathernext-3|AI models]] in a unified agent workflow.

For detailed technical insights, see [[lab-notes/2026-08-12-NVIDIA-NeMo-Switchyard-Dynamic-LLM-Routing-and-Interoper|NVIDIA NeMo Switchyard: Dynamic LLM Routing and Interoperability for AI Agents]].

## References
- [NVIDIA NeMo Switchyard: Dynamic LLM Routing and Interoperability for AI Agents](https://www.youtube.com/watch?v=9hDyXi5cbQw)
