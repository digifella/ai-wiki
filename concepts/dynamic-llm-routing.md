---
type: concept
domain: ai-agents
tags:
  - "dynamic-llm-routing"
  - "model-selection"
  - "ai-agents"
  - "nvidia-nemo"
  - "interoperability"
aliases:
  - "Dynamic Model Routing"
  - "Adaptive LLM Selection"
  - "NeMo Switchyard"
summary: Dynamic LLM Routing is an architectural pattern that directs requests to different models based on real-time context and requirements, with NVIDIA NeMo Switchyard providing an open-source implementation for this purpose.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-11T20:30:39+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Dynamic LLM Routing

**[[concepts/cost-efficiency|Dynamic LLM Routing]]** refers to the architectural pattern of intelligently directing requests to different [[concepts/large-language-models|Large Language Models]] (LLMs) based on real-time context, cost, latency, or capability requirements, rather than relying on [[concepts/static-model-selection|static model selection]].

## Core Concepts
- **Adaptive Selection**: Choosing models dynamically based on task complexity.
- **Interoperability**: Enabling seamless communication between heterogeneous models.
- **Efficiency**: Reducing computational waste by avoiding over-provisioning for simple tasks.

## NVIDIA NeMo Switchyard
[[entities/nvidia|NVIDIA]] has introduced **[[concepts/prime-agent-innovation|NeMo Switchyard]]** as an [[concepts/open-source|open-source]] [[concepts/solution|solution]] to address the inefficiencies of static model selection in complex [[concepts/ai-agents|AI agents]].

- **Purpose**: Acts as a [[concepts/local-agent|local agent]] router to manage [[concepts/model-interoperability|dynamic LLM routing]] and interoperability.
- **Key Feature**: Allows developers to build agents that can switch between models on the fly, optimizing for performance and cost.
- **Status**: [[concepts/open-source-library|Open-source library]] designed for modern [[concepts/ai-agent|AI agent]] architectures.

For detailed technical breakdowns and video analysis, see: [[lab-notes/2026-08-12-NVIDIA-NeMo-Switchyard-Dynamic-LLM-Routing-and-Interoper|NVIDIA NeMo Switchyard: Dynamic LLM Routing and Interoperability for AI Agents]]

## References
- [[entities/sam-witteveen|Sam Witteveen]]. "[[entities/nvidia|NVIDIA]] [[concepts/prime-agent-innovation|NeMo Switchyard]]: [[concepts/cost-efficiency|Dynamic LLM Routing]] and Interoperability for [[concepts/ai-agents|AI Agents]]." [YouTube](https://www.youtube.com/watch?v=9hDyXi5cbQw). 2026-08-12.
