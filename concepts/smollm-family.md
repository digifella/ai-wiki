---
type: concept
domain: ai-agents
tags:
  - "small-language-models"
  - "local-deployment"
  - "advanced-reasoning"
  - "hugging-face"
aliases:
  - "SmolLM3-3B"
  - "SmolLM"
  - "Hugging Face SLMs"
summary: The SmolLM family is a series of small language models developed by Hugging Face optimized for high performance, efficiency, and local deployment.
updated: 2026-07-12
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# SmolLM family

The [[entities/smollm|SmolLM]] family is a series of [[concepts/small-language-models|small language models]] ([[concepts/llms|SLMs]]) developed by [[entities/hugging-face]], optimized for [[entities/high-performance|high performance]], efficiency, and [[concepts/local-deployment|local deployment]].

## Models

### SmolLM3-3B
A [[concepts/3-billion-parameter-model|3-billion parameter model]] designed for [[concepts/advanced-reasoning|advanced reasoning]] and local usability.
- **Key Features:**
    - **[[concepts/reasoning|Reasoning]]:** Features an advanced "[[concepts/thinking-with-3-pro|thinking mode]]" that allows the model to display its internal [[concepts/reasoning-steps|reasoning process]] prior to generating a final response.
- **Deployment:**
    - Can be served locally using [[entities/vllm|vLLM]] (see guide by [[entities/fahd-mirza|Fahd Mirza]]).
- **Resources:**
    - 2026 04 14 New SmoILM3 from [[concepts/open-source-machine-learning|hugging face]]
    - [Hugging Face Blog](https://huggingface.co/blog/smollm3)
    - [LLM Tutorials (GitHub)](https://github.com/samwit/llm-tutorials)
    - [Local Installation Guide (YouTube)](https://www.youtube.com/watch?v=WxABcirpB1g)
