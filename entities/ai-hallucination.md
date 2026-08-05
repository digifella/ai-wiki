---
type: entity
tags:
  - "ai-models"
  - "large-language-models"
  - "hallucination"
  - "prompt-engineering"
  - "rag"
  - "mitigation-strategies"
aliases:
  - "LLM Hallucination"
  - "AI Model Hallucination"
summary: This page discusses the causes of hallucinations in large language models and mitigation strategies including prompt engineering and RAG.
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# AI Hallucination

[[concepts/hallucination-problem|AI hallucination]] refers to the phenomenon where [[concepts/large-language-model-llm|large language models]] (LLMs) generate plausible-sounding but factually incorrect or fabricated information. This occurs because LLMs are fundamentally [[concepts/user-attention-prediction|prediction]] systems trained to generate statistically likely sequences of text based on patterns in their [[concepts/custom-dataset|training data]], rather than systems designed to retrieve or verify [[concepts/factual-knowledge|facts]]. When a model encounters a query outside its training distribution or involving current information, it may construct false but coherent responses rather than declining to [[concepts/solution|answer]].

## Causes and Mechanisms

Hallucinations arise from several interconnected factors. LLMs lack direct access to [[concepts/external-knowledge|external knowledge]] [[concepts/number-systems|bases]] and cannot distinguish between information patterns that appeared frequently in [[concepts/language-data|training data]] versus rare or nonexistent information. Models trained on internet text may reproduce false claims that circulated online. Additionally, the [[concepts/autoregressive-decoding|autoregressive generation]] process—where each token depends on previously generated [[concepts/tokens|tokens]]—can lead models into internally consistent but factually wrong narratives. [[concepts/fine-tuning|Fine-tuning]] processes and [[concepts/reinforcement-learning|reinforcement learning]] from human [[concepts/feedback|feedback]] can sometimes amplify [[concepts/data-hallucination|hallucination]] when training signals inadvertently reward confident but incorrect outputs.

## Mitigation Strategies

Several approaches reduce hallucination frequency. [[concepts/answer-generation|Retrieval-Augmented Generation]] (RAG) grounds model outputs in external documents, limiting responses to information present in retrieved sources. [[concepts/prompt-based-modeling|Prompt engineering]] techniques, such as instructing models to cite sources or admit uncertainty, can improve [[concepts/factual-accuracy|factual accuracy]]. Ensembling multiple models or generating multiple completions and selecting the most reliable can also reduce errors. Some systems incorporate [[concepts/uncertainty-expression|confidence scoring]] or require explicit [[concepts/verification|verification]] steps before outputting factual claims. Training on higher-quality curated datasets and incorporating explicit factuality objectives during training offer longer-term improvements, though no approach entirely eliminates the problem.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Nano-Banana-2-JSON-Control-for-Precise-AI-Image-Editing-in-Gemini|Nano Banana 2 JSON Control for Precise AI Image Editing in Gemini]] · [▶ source](https://www.youtube.com/watch?v=uQc4TGhvDHc)
