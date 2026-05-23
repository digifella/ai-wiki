---
type: concept
domain: ai-agents
tags:
  - "llm-interpretability"
  - "autoencoders"
  - "unsupervised-learning"
  - "mechanistic-interpretability"
  - "latent-representations"
  - "activation-analysis"
aliases:
  - "NLA explanations"
  - "Natural Language Autoencoder interpretability"
summary: Unsupervised techniques that use natural language autoencoders to derive interpretable descriptions of LLM activations and internal states without human-labeled supervision.
updated: 2026-05-23
group: reasoning-context-prompting
title: Unsupervised Explanations
---
# Unsupervised Explanations

Techniques deriving interpretable descriptions of LLM Activations and internal model states without human-labeled supervision, often utilizing latent representations from Autoencoders.

- **[[concepts/natural-language-autoencoders|Natural Language Autoencoders]]:** Research from transformer-circuits.pub demonstrates that natural language autoencoders can reconstruct activations using interpretable features, producing unsupervised [[concepts/explanations|explanations]] of LLM behavior via mapping to natural language [[concepts/tokens|tokens]].
- **Source Details:** "Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations"; URL: `https://transformer-circuits.pub/2026/nla/index.html#introduction`.
- **Ingestion Status:** [[lab-notes/2026-05-16-Natural-Language-Autoencoders-Produce-Unsupervised-Expla|URL Ingest Summary]]; 1 URL processed, 1 web page captured, converted to [[concepts/markdown|Markdown]]; 0 failures.
- **Methodology:** Leverages unsupervised feature extraction to identify circuit components and activation patterns associated with specific semantic concepts or linguistic structures.
- **Related Concepts:** Mechanistic [[concepts/interpretability|Interpretability]], Latent Variable [[concepts/models|Models]], Sparse Autoencoders, Token Attribution.
