---
type: concept
domain: ai-agents
tags:
  - "language-models"
  - "rag-systems"
  - "context-engineering"
  - "prompt-engineering"
  - "hallucination-reduction"
aliases:
  - "LLM"
  - "Large Language Models"
summary: This concept page covers various aspects of large language models, including retrieval augmented generation (RAG) and context engineering techniques.
updated: 2026-05-23
group: ai-foundations-concepts
---
# Large Language Model (LLM)

A [[concepts/large-language-model|Large Language Model]] is a [[concepts/neural-network|neural network]] trained on vast amounts of [[concepts/text|text]] data to predict and generate human language. LLMs are characterized by their scale—typically containing billions of [[concepts/parameters|parameters]]—which enables them to capture complex patterns in language and perform a wide [[concepts/range|range]] of natural language tasks including [[concepts/text-generation|text generation]], translation, [[concepts/fact-based-queries|question answering]], and [[concepts/reasoning|reasoning]] across diverse domains.

## Retrieval Augmented Generation (RAG)

[[concepts/answer-generation|Retrieval Augmented Generation]] is a technique that enhances LLM [[concepts/capabilities|capabilities]] by integrating external [[concepts/knowledge-bases|information retrieval]] with language generation. Rather than relying solely on knowledge encoded during [[concepts/training|training]], [[concepts/contextualized-language-understanding|RAG systems]] retrieve relevant documents or data from external sources before generating [[concepts/responses|responses]]. This approach helps reduce hallucinations and enables LLMs to provide more accurate, up-to-date, and contextually grounded answers, particularly for knowledge-intensive tasks.

## Context Engineering

[[concepts/context-engineering|Context engineering]] refers to the strategic [[concepts/design|design]] and optimization of input context provided to LLMs. Techniques in this domain include [[concepts/prompt-based-modeling|prompt engineering]]—crafting effective [[concepts/instructions|instructions]] and examples—and [[concepts/efficient-information-retrieval|context pruning]] or re-ranking, which involves selecting and ordering the most relevant information to include in the model's input. These methods aim to improve response quality, reduce computational overhead, and minimize hallucinations by ensuring that LLMs focus on the most pertinent available information.
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-23: Excel · [▶ source](https://www.youtube.com/watch?v=jWE3ypXpuTY)
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)