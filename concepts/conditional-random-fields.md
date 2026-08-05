---
type: concept
domain: maths-logic-crypto
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
updated: 2026-07-11
group: probability-statistics-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Conditional Random Fields

Conditional Random Fields (CRFs) are a class of probabilistic graphical models designed for structured [[concepts/user-attention-prediction|prediction]] tasks where the output consists of sequences or other interdependent elements. Unlike [[concepts/tts-model|generative models]] that learn the joint distribution of inputs and outputs, CRFs are discriminative models that directly estimate the conditional [[concepts/probability|probability]] of output sequences given input sequences. This discriminative approach avoids the computational burden of modeling the input distribution, making CRFs particularly efficient for many practical applications.

CRFs are widely used in [[concepts/language-processing|natural language processing]] tasks such as [[concepts/named-entity-recognition|named entity recognition]], part-of-speech tagging, and [[concepts/sequence-tagging|sequence labeling]]. The model captures dependencies between labels in an output sequence through potential functions defined over pairs of adjacent labels and observations. This ability to model label interactions while conditioning on observed data distinguishes CRFs from simpler classifiers like logistic regression, which typically make independent predictions for each element.

## Model Structure

A CRF defines the conditional probability of a label sequence given observations using an exponential family distribution. The model consists of feature functions that combine input observations with label information, weighted by [[concepts/model-weights|learned parameters]]. The normalization is performed over all possible output sequences, which requires [[concepts/inference|inference]] [[concepts/algorithms|algorithms]] such as the Viterbi [[concepts/algorithm|algorithm]] for finding the most likely sequence and the forward-backward algorithm for computing probabilities.

## Training and Inference

CRFs are typically trained using [[concepts/maximum-likelihood-estimation|maximum likelihood estimation]], with parameters optimized to maximize the conditional likelihood of training sequences. Inference involves computing the most probable label sequence for new observations. Linear-chain CRFs, where labels depend only on adjacent labels, are the most common variant and scale efficiently to long sequences.
