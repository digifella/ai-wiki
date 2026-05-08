---
type: concept
domain: ai-agents
tags:
  - "AI"
  - "LLM"
  - "SmallLanguageModels"
  - "HuggingFace"
  - "smollm-family"
  - "small-language-models"
  - "local-deployment"
  - "slms"
aliases:
  - "SmolLM"
  - "SmolLM series"
summary: "The SmolLM family is a series of small language models developed by Hugging Face optimized for high performance, efficiency, and local deployment."
updated: 2026-04-21
group: open-systems-local-models
---
# SmolLM family

The SmolLM family is a series of small language models ([[concepts/llms|SLMs]]) developed by [[entities/hugging-face]], optimized for [[entities/high-performance|high performance]], efficiency, and [[concepts/local-deployment|local deployment]].

## Models

### SmolLM3-3B
A 3-billion parameter model designed for [[concepts/advanced-reasoning|advanced reasoning]] and local usability.
- **Key Features:**
    - **[[concepts/reasoning|Reasoning]]:** Features an advanced "[[concepts/thinking-with-3-pro|thinking mode]]" that allows the model to display its internal reasoning process prior to generating a final response.
- **[[concepts/deployment|Deployment]]:**
    - Can be served locally using [[entities/vllm|vLLM]] (see guide by [[entities/fahd-mirza|Fahd Mirza]]).
- **Resources:**
    - 2026 04 14 New SmoILM3 from hugging face
    - [Hugging Face Blog](https://huggingface.co/blog/smollm3)
    - [LLM Tutorials (GitHub)](https://github.com/samwit/llm-tutorials)
    - [Local Installation Guide (YouTube)](https://www.youtube.com/watch?v=WxABcirpB1g)
