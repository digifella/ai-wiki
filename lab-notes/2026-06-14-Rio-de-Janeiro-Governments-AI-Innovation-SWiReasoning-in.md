---
title: "Rio de Janeiro Government's AI Innovation: SWiReasoning in Qwen LLM"
date: 2026-06-14
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Rio de Janeiro Government's AI Innovation: SWiReasoning in Qwen LLM
Generated: 2026-06-14 · API: Gemini 2.5 Flash · Modes: Summary

---

## Rio de Janeiro Government's AI Innovation: SWiReasoning in Qwen LLM
**Clip title:** Why Did Brazil Just Innovate On An AI Model?
**Author / channel:** Tim Carambat
**URL:** https://www.youtube.com/watch?v=vobe2sVLF1M

### Summary
This video highlights a significant and surprising innovation in the field of Large Language Models (LLMs) by the Municipal Company of Rio de Janeiro City Government. The main topic revolves around their successful post-training of an open-source model, Qwen 3.5 397B, resulting in a new model named "Rio 3.5 Open 397B." This achievement is particularly notable because it demonstrates a non-traditional entity, a municipal government, contributing meaningfully to cutting-edge AI development, outperforming established tech giants and research institutions in specific benchmarks.

The speaker presents benchmark results showing that "Rio 3.5 Open 397B" exhibits substantial performance improvements over the original Qwen 3.5 397B and even surpasses other powerful commercial and open-source models like Kimi-K2.6 and DeepSeek V4 Pro in several categories. These significant gains, some reaching over 18 percentage points in accuracy, are attributed to an "additional post-training method" developed by the Rio de Janeiro team. This method is explored further in the context of open-source science and its potential for broader adoption.

The innovative method behind these improvements is called "SWiReasoning: Switch-Thinking in Latent and Explicit for Pareto-Superior Reasoning LLMs." The video explains two types of reasoning: "explicit reasoning," similar to Chain of Thought, where the model verbalizes every step of its thought process, and "latent reasoning," where the model processes information internally without explicit verbalization. While explicit reasoning is thorough but slow, and latent reasoning can be quick but error-prone for complex tasks, SWiReasoning proposes a hybrid approach. This allows the model to intelligently switch between internal and external reasoning based on the problem's complexity, optimizing both speed and accuracy.

A practical demonstration illustrates the effectiveness of SWiReasoning, showing it solving a complex math problem in just 6 seconds with an accurate answer, compared to a Chain of Thought model taking 1 minute. The speaker emphasizes that this method is not computationally demanding, making its adoption even more appealing. The key takeaway is the immense potential of open-source AI, not just for large corporations, but for local governments and other entities to develop tailored and powerful solutions. This innovation from Rio de Janeiro serves as an inspiring example of how democratized access to AI technology can foster unexpected advancements and provide alternatives to potentially restricted proprietary models.

### Video Description & Links
#### Description
Honestly, welcome but unexpected output from Rio de Janeiro's municipal IT company with prefeitura-rio/Rio-3.5-Open-397B - a post-training version of Qwen3.5-397B-A17B using the SwiReasoning methodology - which should make thinking models smarter.

No, you cannot run this in llama.cpp yet since models are either thinking or non-thinking - so if you want to run this you will need to run this via another engine like VLLM or Transformers.

Pretty cool to see city governments working in Local AI.

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
