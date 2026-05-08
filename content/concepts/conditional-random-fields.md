---
type: concept
domain: maths-cryptography
group: probability-statistics-models
tags:
  - "probabilistic-models"
  - "graphical-models"
  - "structured-prediction"
  - "machine-learning"
  - "sequence-labeling"
aliases:
  - "CRF"
  - "Conditional Random Field"
summary: Conditional Random Fields are a class of probabilistic graphical models used for structured prediction tasks such as AI tagging.
updated: 2026-05-01
---
# Conditional Random Fields

Conditional Random Fields (CRFs) are a class of probabilistic graphical models designed for structured prediction tasks. Unlike generative models that learn the joint [[concepts/distribution|distribution]] of inputs and outputs, CRFs directly model the conditional probability of output sequences given input sequences. This discriminative approach makes them particularly well-suited for labeling and tagging problems where the [[concepts/structure|structure]] of the output depends on the input data.

## Core Mechanism

CRFs [[concepts/compute|compute]] probabilities over label sequences by combining features from the input with learned [[concepts/weights|weights]]. The model assigns a probability score to each possible output sequence, with the score determined by a weighted sum of feature functions evaluated across the sequence. This allows CRFs to capture dependencies between adjacent labels while remaining computationally tractable through efficient [[concepts/inference|inference]] algorithms such as the Viterbi algorithm for finding the most likely label sequence.

## Applications

CRFs are widely used in [[concepts/nlp|natural language processing]] tasks including part-of-speech tagging, [[concepts/named-entity-recognition|named entity recognition]], and [[concepts/sequence-tagging|sequence labeling]]. Their ability to incorporate arbitrary features and model label dependencies makes them effective for problems where the output structure matters. While [[concepts/neural-network|neural network]] approaches have become dominant in many NLP applications, CRFs remain relevant for structured prediction tasks, particularly in domains with limited [[concepts/training-data|training data]] or where [[concepts/interpretability|interpretability]] is important.
