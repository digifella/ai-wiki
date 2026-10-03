---
type: concept
domain: ai-agents
tags:
  - "orchestrator-model"
  - "dynamic-routing"
  - "agent-architecture"
  - "llm-routing"
  - "multi-agent-systems"
aliases:
  - "Central Orchestrator"
  - "Agent Orchestrator"
  - "Dynamic Agent Router"
summary: An architectural pattern where a central unit dynamically selects tools and models to coordinate sub-agents for complex goals.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-11T20:32:18+00:00" }
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Orchestrator Model

An architectural pattern where a central control unit (the orchestrator) manages the flow of information, selects appropriate tools or [[concepts/large-language-model|Large Language Model]], and coordinates sub-agents to achieve complex goals. Unlike static pipelines, modern orchestrators often employ dynamic routing to optimize for cost, latency, and accuracy.

## Key Characteristics
- **Dynamic Selection:** Chooses models or tools based on real-time context rather than pre-defined static paths.
- **Interoperability:** Facilitates communication between heterogeneous AI components and external APIs.
- **State Management:** Maintains context across multiple turns or agent interactions.

## Modern Implementations & Tools

### NVIDIA NeMo Switchyard
A prominent example of dynamic routing [[concepts/infrastructure|infrastructure]] is [[lab-notes/2026-08-12-NVIDIA-NeMo-Switchyard-Dynamic-LLM-Routing-and-Interoper|NVIDIA NeMo Switchyard: Dynamic LLM Routing and Interoperability for AI Agents]]. This open-source library addresses the inefficiency of [[concepts/static-model-selection|static model selection]] by enabling intelligent routing between different LLMs.

- **Core Function:** Acts as a local agent router to dynamically select the most appropriate model for a given task.
- **Problem Solved:** Mitigates the overhead and suboptimal performance of using a single static model for diverse agent requirements.
- **Key Benefit:** Enhances interoperability and efficiency in complex [[concepts/ai-agent|AI agent]] ecosystems by matching task complexity to model capability.

## Related Concepts
- [[concepts/multi-agent-ai|Multi-Agent Systems]]
- Tool Use
- [[entities/prompt-engineering]]
- Model Routing

## References
- [NVIDIA NeMo Switchyard: Dynamic LLM Routing and Interoperability for AI Agents](https://www.youtube.com/watch?v=9hDyXi5cbQw)
