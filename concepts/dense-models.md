---
type: concept
domain: ai-agents
tags:
  - "large-language-models"
  - "model-architecture"
  - "inference"
  - "dense-computation"
  - "ai-efficiency"
aliases:
  - "Dense LLMs"
  - "Fully Activated Models"
  - "Uniform Computation Models"
summary: Dense models are large language models that activate every parameter for each token during inference, contrasting with sparse architectures like Mixture of Experts by utilizing uniform computation and predictable latency
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Dense Models

**Dense Models** are [[concepts/large-language-model-llm|Large Language Models]] (LLMs) where every parameter is activated for every token during [[concepts/inference|inference]]. This contrasts with Sparse Models and [[concepts/mixture-of-experts|Mixture of Experts]] (MoE) architectures, which activate only a subset of parameters per token.

## Characteristics
- **Uniform Computation:** All layers and [[concepts/parameters|weights]] participate in processing each input token.
- **Hardware Efficiency:** Generally easier to optimize for standard [[concepts/gpu-clusters|GPU clusters]] due to uniform [[concepts/memory|memory]] access patterns compared to sparse routing.
- **Parameter Efficiency:** Typically require fewer [[concepts/total-parameters|total parameters]] than MoE models to achieve comparable performance, as there is no "dead" weight.
- **Latency:** Inference latency is predictable and [[concepts/musical-scales|scales]] linearly with model depth and width, without the overhead of expert routing [[concepts/open-source-philosophy|logic]].

## Comparison with Sparse Architectures
- **vs. [[entities/mixture-of-experts|Mixture of Experts]] (MoE):** Dense models often outperform MoE models of similar *active* parameter counts in specific [[concepts/reasoning|reasoning]] tasks due to better gradient [[concepts/flow|flow]] and lack of routing noise, though MoE scales better in total parameter size.
- **Recent Evaluations:** Recent benchmarks suggest that for certain [[concepts/agentic-ai|agentic]] workflows, dense models offer superior [[concepts/logical-consistency|consistency]]. For instance, the [[lab-notes/2026-06-30-Ornith-9B-Agentic-Coding-LLM-Local-Performance-Evaluatio|Ornith 9B Agentic Coding LLM: Local Performance Evaluation on Consumer Hardware]] demonstrates how dense architectures like [[concepts/qwen-llms|Ornith-1.0]] can be effectively deployed on consumer hardware for specialized [[concepts/autonomous-ai-coding-agent|agentic coding]] tasks, highlighting the viability of smaller dense models for [[concepts/edge-deployment|local inference]].

## References
- [Ornith 9B Agentic Coding LLM: Local Performance Evaluation on Consumer Hardware](https://www.youtube.com/watch?v=nFiLFCrsg1w)
