---
type: concept
domain: ai-agents
tags:
  - "generative-pre-trained-transformers"
  - "large-language-models"
  - "decoder-only-architecture"
  - "autoregressive-generation"
  - "tokenization"
  - "self-attention"
  - "natural-language-processing"
aliases:
  - "GPT"
  - "Generative Pre-trained Transformer"
  - "Decoder-only Transformer"
  - "Autoregressive Language Model"
summary: Generative Pre-trained Transformers are a class of large language models based on the decoder-only Transformer architecture that generate text by predicting the next token in a sequence conditioned on preceding context.
updated: 2026-07-11
group: multimodal-generative-media
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Generative Pre-trained Transformers

**Generative Pre-trained [[concepts/transformers|Transformers]]** (GPT) are a class of [[concepts/large-language-model]]s based on the [[concepts/transformer-models|Transformer architecture]], specifically utilizing the decoder-only variant. They are designed to generate human-like text by predicting the next token in a sequence, conditioned on the preceding context.

## Core Architecture

The GPT architecture relies on several key components to process and generate language:

*   **Tokenization**: Input text is broken down into discrete units called [[concepts/tokens|Tokens]].
*   **[[concepts/token-embedding|Token Embedding]]**: Tokens are converted into high-dimensional vectors that capture semantic meaning.
*   **[[concepts/attention-mechanisms|Attention Mechanisms]]**: The model uses [[concepts/self-attention]] to weigh the [[concepts/value|importance]] of different tokens in the input sequence relative to each other, allowing it to capture long-range dependencies and context.
*   **Feed-Forward Networks**: Process the attended representations to refine the output.
*   **[[concepts/autoregressive-generation|Autoregressive Generation]]**: The model generates text one token at a time, feeding its own output back as input for the next step.

## Key Insights from Recent Analysis

Based on the visual explanation by [[entities/caleb-writes-code|Caleb Writes Code]], the following points clarify the operational mechanics of GPT:

*   **Conceptual Foundation**: GPT serves as the foundational architecture for modern LLMs, moving beyond simple [[concepts/pattern-matching|pattern matching]] to [[concepts/contextual-understanding|contextual understanding]].
*   **Limitations of Predecessors**: The architecture addresses specific limitations found in earlier recurrent models, particularly regarding parallelization and long-context [[concepts/storing|retention]].
*   **Visualizing [[concepts/attention|Attention]]**: The attention mechanism can be visualized as the model "looking back" at previous tokens to determine relevance, effectively creating a dynamic [[concepts/context-window|context window]] for each [[concepts/user-attention-prediction|prediction]].

See also: [[lab-notes/2026-06-24-How-GPT-Works-Token-Embedding-and-Attention-Mechanisms-E|How GPT Works: Token Embedding and Attention Mechanisms Explained]]

## References

*   [How GPT Works: Token Embedding and Attention Mechanisms Explained](https://www.youtube.com/watch?v=7gkaWaDEpHg)
