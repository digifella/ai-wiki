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
updated: 2026-05-01
---
# AI Hallucination

[[concepts/hallucination|AI hallucination]] refers to the phenomenon where [[concepts/large-language-model-llm|large language models]] (LLMs) generate plausible-sounding but factually incorrect or fabricated information. This occurs because LLMs are fundamentally prediction systems trained to generate statistically likely sequences of text based on patterns in their [[concepts/training-data|training data]], rather than systems designed to retrieve or verify facts. When a model encounters a query outside its training data or in areas where training data was sparse or contradictory, it may confidently produce false information rather than acknowledging uncertainty.

## Causes

Hallucinations stem from several sources. LLMs lack access to real-time information and rely entirely on their training data, which has a [[concepts/knowledge-cutoff|knowledge cutoff]] date. The models also lack mechanisms for fact-checking or verification during generation. Additionally, when models are fine-tuned or prompted to be helpful and confident, they may prioritize providing an answer over [[concepts/accuracy|accuracy]], making them more likely to generate plausible-sounding but false content.

## Mitigation Strategies

Several approaches can reduce hallucinations. [[concepts/prompt-based-modeling|Prompt engineering]]—carefully crafting queries to guide [[concepts/model-behavior|model behavior]]—can encourage the model to express uncertainty or ask [[concepts/clarifying-questions|clarifying questions]]. Retrieval-Augmented Generation (RAG) is a more robust [[concepts/solution|solution]] that grounds model [[concepts/responses|responses]] in actual source documents, allowing the model to cite and verify information against retrieved knowledge bases. These techniques work by constraining the model's output to verifiable information rather than relying solely on learned patterns.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Nano-Banana-2-JSON-Control-for-Precise-AI-Image-Editing-in-Gemini|Nano Banana 2 JSON Control for Precise AI Image Editing in Gemini]] · [▶ source](https://www.youtube.com/watch?v=uQc4TGhvDHc)
