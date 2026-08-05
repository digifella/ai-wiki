---
type: concept
domain: ai-agents
tags:
  - "hidden-markov-models"
  - "probabilistic-models"
  - "sequence-modeling"
  - "state-machines"
  - "statistical-inference"
aliases:
  - "HMM"
  - "Markov models"
summary: A type of model within the ai-agents domain.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Hidden Markov Models

A Hidden Markov Model (HMM) is a probabilistic framework for modeling sequential systems where the true underlying state remains unobservable. The model operates through two parallel processes: hidden states that transition according to fixed probabilities, and observable outputs generated from each state. This separation between hidden dynamics and visible observations makes HMMs effective for [[concepts/inference|inference]] tasks where an agent must estimate the actual system state based on incomplete or noisy sensor data.

## Core Components

An HMM consists of four essential elements: a set of hidden states, transition probabilities that govern how states change over time, emission probabilities that define which observations can arise from each state, and an initial state distribution. The transition probabilities form a matrix capturing the likelihood of moving from one state to another, while emission probabilities specify how observations relate to underlying states. Together, these components fully define the model's behavior.

## Practical Applications

HMMs are widely used in [[concepts/agentic-ai|AI agents]] for problems involving temporal [[concepts/reasoning|reasoning]] and state estimation. [[concepts/speech-recognition|Speech recognition]] systems employ HMMs to decode [[concepts/audio-modality|audio]] signals into words by modeling phoneme sequences as hidden states. Similarly, agents tracking moving objects use HMMs to filter noisy position measurements and predict future locations. The model's ability to handle uncertainty in both state evolution and observation makes it valuable for [[concepts/robotics|robotics]], [[concepts/language-processing|natural language processing]], and diagnostic systems.

## Inference Algorithms

Standard [[concepts/algorithms|algorithms]] exist for computing key quantities in HMMs. The forward [[concepts/algorithm|algorithm]] estimates the [[concepts/probability|probability]] of observations given a sequence of states, while the Viterbi algorithm finds the most likely hidden [[concepts/agent-trajectory|state sequence]]. The Baum-Welch algorithm learns [[concepts/active-parameters|model parameters]] from data when the hidden states are unknown. These well-established procedures make HMMs computationally tractable despite their inherent complexity.
