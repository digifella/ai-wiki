---
wiki-ingested: true
title: "Rio de Janeiro Government's AI Innovation: SWiReasoning in Qwen LLM"
date: 2026-06-14
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
aliases:
  - "lab-notes/2026-06-14-Rio-de-Janeiro-Governments-AI-Innovation-SWiReasoning-in"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Rio de Janeiro Government's AI Innovation: SWiReasoning in Qwen LLM
**Clip title:** Why Did Brazil Just Innovate On An AI Model?
**[[entities/tasia-custode|Author]] / channel:** [[entities/timothy-karanbact|Tim Carambat]]
**URL:** https://www.youtube.com/watch?v=vobe2sVLF1M

### Summary
This video highlights a significant and surprising [[concepts/innovation|innovation]] in the field of [[concepts/large-language-model-llm|Large Language Models]] (LLMs) by the Municipal Company of Rio de Janeiro City Government. The main topic revolves around their successful post-training of an [[concepts/open-source-model|open-source model]], [[entities/alibaba-qwen|Qwen]] 3.5 397B, resulting in a new model named "Rio 3.5 Open 397B." This achievement is particularly notable because it demonstrates a non-traditional entity, a municipal government, contributing meaningfully to cutting-edge [[concepts/ai-development|AI development]], outperforming established tech giants and research institutions in specific benchmarks.

The [[entities/speaker|speaker]] presents benchmark results showing that "Rio 3.5 Open 397B" exhibits substantial performance improvements over the original Qwen 3.5 397B and even surpasses other powerful commercial and [[concepts/reasoning-models|open-source models]] like [[concepts/kimi-k2|Kimi-K2]].6 and [[entities/deepseek-v4|DeepSeek V4]] Pro in several categories. These significant gains, some reaching over 18 percentage points in accuracy, are attributed to an "additional post-training method" developed by the Rio de Janeiro team. This method is explored further in the context of [[concepts/open-source|open-source]] [[concepts/science|science]] and its potential for broader [[concepts/adoption|adoption]].

The innovative method behind these improvements is called "SWiReasoning: Switch-[[concepts/human-cognition|Thinking]] in Latent and Explicit for Pareto-Superior [[concepts/reasoning|Reasoning]] LLMs." The video explains two types of [[concepts/reasoning|reasoning]]: "explicit reasoning," similar to Chain of Thought, where the model verbalizes every step of its thought process, and "[[concepts/internal-thoughts|latent reasoning]]," where the model processes information internally without explicit verbalization. While explicit reasoning is thorough but slow, and latent reasoning can be quick but error-prone for [[concepts/complex-tasks|complex tasks]], SWiReasoning proposes a [[concepts/hybrid-approach|hybrid approach]]. This allows the model to intelligently switch between internal and external reasoning based on the problem's complexity, optimizing both [[concepts/speed|speed]] and accuracy.

A practical demonstration illustrates the effectiveness of SWiReasoning, showing it solving a complex [[concepts/mathematics|math]] problem in just 6 seconds with an accurate [[concepts/solution|answer]], compared to a Chain of Thought model taking 1 minute. The [[entities/speaker|speaker]] emphasizes that this method is not computationally demanding, making its [[concepts/adoption|adoption]] even more appealing. The key takeaway is the immense potential of open-source AI, not just for large corporations, but for local governments and other [[concepts/nodes|entities]] to develop tailored and powerful solutions. This [[concepts/innovation|innovation]] from Rio de Janeiro serves as an inspiring example of how democratized access to AI technology can foster unexpected advancements and provide alternatives to potentially restricted proprietary models.

### Video Description & Links
#### Description
Honestly, welcome but unexpected output from Rio de Janeiro's municipal IT company with prefeitura-rio/Rio-3.5-Open-397B - a post-training version of [[concepts/qwen3-model|Qwen3]].5-397B-A17B using the SwiReasoning methodology - which should make [[concepts/thinking-models|thinking models]] smarter.

No, you cannot run this in [[concepts/inference-engine|llama.cpp]] yet since models are either thinking or non-thinking - so if you want to run this you [[entities/will|will]] need to run this via another engine like [[concepts/vllm|VLLM]] or [[concepts/transformers|Transformers]].

Pretty cool to see city governments working in [[concepts/offline-ai|Local AI]].

*Links* :
Model Card: https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B
SwiReasoning: https://github.com/sdc17/SwiReasoning
SwiReasoning Paper: https://arxiv.org/pdf/2510.05069

*Chapters* :
0:00 Imagine This...
1:33 Let's Hop Into The Model Card
2:49 What is SwiReasoning?
6:07 Pretty neat!

#### URLs
- https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B
- https://github.com/sdc17/SwiReasoning
- https://arxiv.org/pdf/2510.05069

## Related Concepts
- [[concepts/qwen-llm|Qwen LLM]]
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/ai-innovation|AI Innovation]]
- Post-training — [Wikipedia](https://en.wikipedia.org/wiki/Post-training_of_large_language_models)
- [[concepts/internal-thoughts|Latent Reasoning]]
- [[concepts/thinking-with-3-pro|Chain of Thought]]
- [[concepts/open-source|Open-Source AI]]
- [[concepts/ai-benchmarks|AI Benchmarks]]
- [[concepts/local-ai|Local AI]]
- [[concepts/model-fine-tuning|Model Fine-tuning]]
- [[concepts/generative-ai|Generative AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Generative_AI)

## Related Entities
- [[entities/tim-carambat|Tim Carambat]]
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- [[entities/vllm|VLLM]] — [Wikipedia](https://en.wikipedia.org/wiki/VLLM)
- Transformers — [Wikipedia](https://en.wikipedia.org/wiki/Transformers)