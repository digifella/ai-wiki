---
type: concept
domain: ai-agents
tags:
  - "language-modeling"
  - "nlp"
  - "markov-assumption"
  - "statistical-models"
  - "token-prediction"
  - "ai-foundations"
aliases:
  - "Bigram Model"
  - "Order-1 N-gram"
  - "Markov Language Model"
  - "Bigram LM"
summary: A Bigram Language Model is a statistical model that predicts the next token in a sequence based solely on the immediately preceding token, operating under the Markov assumption.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Bigram Language Model

A **Bigram [[concepts/statistical-language-modeling|Language Model]]** is a statistical Language Model that predicts the next token in a sequence based solely on the immediately preceding token. It operates under the Markov assumption that the [[concepts/probability|probability]] of a word depends only on the previous word, ignoring longer-range context.

## Core Mechanics

- **Probability Calculation**: Estimates $P(w_i | w_{i-1})$ by counting co-occurrences in a training corpus.
- **Vocabulary**: Requires a defined set of unique [[concepts/tokens|tokens]] (words or characters).
- **Generation**: Samples from the conditional probability distribution of the next token given the current one.
- **Limitations**: Lacks long-term [[concepts/memory|memory]]; cannot capture complex syntactic structures or semantic dependencies beyond adjacent pairs.

## Role in Modern NLP

- Serves as the pedagogical foundation for understanding [[concepts/transformer-architectures|Transformer architectures]] and GPT models.
- Demonstrates the basic principle of next-token [[concepts/user-attention-prediction|prediction]], which [[concepts/musical-scales|scales]] to [[concepts/deep-neural-networks|deep neural networks]] via [[concepts/attention-mechanisms|Attention Mechanisms]].
- Often used in introductory tutorials to visualize how language models learn distributions from text data.

## Related Resources

- [[lab-notes/2026-06-23-Karpathy-Bigram-Language-Model-GPT-Foundation-for-Shakes|Karpathy Bigram Language Model: GPT Foundation for Shakespeare Text Generation]]

## References

- [Karpathy Bigram Language Model: GPT Foundation for Shakespeare Text Generation](https://www.youtube.com/watch?v=Qd2bAzwH9uA)
