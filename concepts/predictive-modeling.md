---
type: concept
domain: maths-logic-crypto
tags:
  - "concept"
  - "scientific-method"
  - "feynman"
  - "guess-compute-compare"
  - "validation"
  - "physics-methodology"
  - "machine-learning"
  - "language-models"
aliases:
  - "Feynman's Three-Step Method"
  - "Scientific Method: Guess-Compute-Compare"
summary: Richard Feynman's three-step scientific method involving guessing, computing, comparing predictions, and validating against empirical observations.
updated: 2026-07-12
group: number-theory-prime-numbers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Predictive Modeling

[[concepts/machine-learning|Predictive modeling]] is a systematic approach to [[concepts/scientific-method|scientific inquiry]] that emphasizes the practical relationship between theory and empirical observation. Rather than treating [[concepts/mathematics|mathematics]] as an abstract discipline divorced from the physical [[entities/earth|world]], predictive modeling grounds [[concepts/mathematical-reasoning|mathematical reasoning]] in its capacity to generate [[concepts/observable-consequences|testable predictions]] about natural phenomena. This perspective, prominently articulated by physicist [[concepts/feynman|Richard Feynman]], reflects a pragmatic view of how scientific knowledge develops and validates itself.

## The Three-Step Process

Feynman's formulation of predictive modeling involves three essential steps: first, making an educated guess or proposing a [[concepts/theory|theoretical framework]]; second, deriving logical and mathematical consequences from that theory; and third, comparing predictions with empirical observations to validate or refute the hypothesis.

## Computational Implementation: Bigram Models

In the context of [[concepts/machine-learning|machine learning]], predictive modeling is operationalized through statistical models that predict the next token in a sequence based on prior context. A foundational example is the [[concepts/bigram-model|Bigram Language Model]], which serves as a simplified precursor to modern [[concepts/gpt|Generative Pre-trained Transformers]].

*   **Mechanism**: The model calculates the [[concepts/probability|probability]] of a word appearing given the immediately preceding word, effectively "guessing" the next token based on local context rather than global semantic understanding.
*   **Application**: As demonstrated in [[lab-notes/2026-06-23-Karpathy-Bigram-Language-Model-GPT-Foundation-for-Shakes|Karpathy Bigram Language Model: GPT Foundation for Shakespeare Text Generation]], this approach can generate coherent text structures (e.g., Shakespearean verse) by leveraging statistical regularities in [[concepts/custom-dataset|training data]].
*   **Significance**: This illustrates the "[[concepts/computational-resources|compute]]" and "[[concepts/feynmans-three-step-scientific-method|compare]]" phases of predictive modeling: the [[concepts/algorithm|algorithm]] computes probabilities (predictions) and generates text that is compared against the stylistic patterns of the source corpus.

## References

*   [Karpathy Bigram Language Model: GPT Foundation for Shakespeare Text Generation](https://www.youtube.com/watch?v=Qd2bAzwH9uA)
