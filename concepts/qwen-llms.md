---
type: concept
domain: ai-agents
tags:
  - "large-language-models"
  - "alibaba-cloud"
  - "local-ai-inference"
  - "open-source-llms"
  - "model-benchmarks"
  - "agentic-ai"
  - "deepreinforce"
  - "structured-data-extraction"
  - "datalab"
aliases:
  - "Qwen Series"
  - "Tongyi Qianwen"
  - "Alibaba LLMs"
  - "Qwen Models"
  - "Ornith-1.0"
  - "Lift Datalab"
summary: Open-source LLMs including Alibaba's Qwen series, DeepReinforce's Ornith-1.0, and Datalab's Lift, optimized for local execution, agentic coding, schema-constrained extraction, and various hardware constraints.
updated: 2026-07-12
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Open-Source LLMs

[[entities/qwen|Qwen]] LLMs refers to the series of [[concepts/large-language-model-llm|large language models]] developed by [[entities/alibaba|Alibaba]] Cloud's Tongyi Lab. The ecosystem includes various parameter sizes optimized for different hardware constraints and task complexities, ranging from small [[concepts/parameter-models|parameter models]] for [[concepts/edge-devices|edge devices]] to massive models for enterprise-grade [[concepts/reasoning|reasoning]]. Additionally, specialized [[concepts/reasoning-models|open-source models]] like [[lab-notes/2026-06-27-DeepReinforces-Ornith-1.0-Self-Scaffolding-Open-Source-L|DeepReinforce's Ornith-1.0: Self-Scaffolding Open-Source LLMs for Agentic AI]] are emerging for specific [[concepts/agentic-patterns|agentic workflows]]. Recent developments also include [[lab-notes/2026-07-11-Lift-Datalabs-AI-for-Schema-Constrained-Local-Structured|Lift: Datalab's AI for Schema-Constrained Local Structured Data Extraction]], focusing on local [[concepts/structured-data-extraction|structured data extraction]].

## Key Models & Variants

- **[[entities/qwen-2|Qwen 2]].5/3.x Series**: Recent iterations focusing on improved reasoning, [[concepts/coding|coding]], and multilingual capabilities.
- **Parameter Efficiency**: Optimized for [[concepts/edge-deployment|local inference]] on constrained hardware.
- **[[lab-notes/2026-07-11-Lift-Datalabs-AI-for-Schema-Constrained-Local-Structured|Lift]]**: Developed by [[entities/datalab|Datalab]], this model addresses challenges in extracting [[concepts/json-structuring|structured data]] (specifically JSON) from PDF documents and images. It is designed for schema-constrained [[concepts/local-execution|local execution]], supporting multilingual extraction across 10 languages.

## References

- [Lift: Datalab's AI for Schema-Constrained Local Structured Data Extraction](https://www.youtube.com/watch?v=pFnVflk-4Fk)
