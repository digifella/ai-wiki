---
type: concept
domain: ai-agents
tags:
  - "machine-learning"
  - "world-models"
  - "latent-space"
  - "predictive-coding"
  - "yann-lecun"
aliases:
  - "Joint Embedding Predictive Architecture"
  - "JEPA Framework"
  - "Latent Space Prediction"
  - "LeCun's World Model"
summary: JEPA is a machine learning framework proposed by Yann LeCun that predicts high-level representations of future states in latent embedding spaces to facilitate world modeling.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# JEPA

**[[concepts/joint-embedding-predictive-architecture|Joint Embedding Predictive Architecture]]** is a [[concepts/machine-learning|machine learning]] framework proposed by [[entities/yann-lecun]] to transcend the limitations of [[concepts/llm]]s by [[concepts/learning|learning]] [[concepts/world-models|world models]] through [[concepts/user-attention-prediction|prediction]] in latent [[concepts/embedding-spaces|embedding spaces]].

## Architecture & Mechanism
- Predicts high-level representations of future states rather than reconstructing raw pixels or [[concepts/tokens|tokens]].
- Operates via a student-teacher dynamic where the teacher provides targets in the latent space and the student minimizes prediction error in joint [[concepts/dense-vectors|embeddings]].
- Avoids the inductive bias of [[concepts/random-token-generation|next-token prediction]], aiming for better [[concepts/reasoning|reasoning]] and compositional [[concepts/abstraction|generalization]].

## Strategic Context
- [[entities/yann-lecun]] identifies [[concepts/joint-embedding-predictive-architecture-jepa|JEPA]] as the critical path beyond current [[concepts/llm]] [[concepts/scaling-laws|scaling laws]], arguing that token prediction lacks sufficient capacity for [[concepts/true-intelligence|true intelligence]].
- Unlike LLMs, which are largely pre-trained on statistical token sequences, JEPA focuses on structured [[entities/earth|world]] modeling.
- Welch [[entities/labs|Labs]] analysis [[lab-notes/2026-05-05-Yann-LeCuns-JEPA-Proposal-A-Path-Beyond-LLMs|Yann LeCun's JEPA Proposal: A Path Beyond LLMs]] frames this as a "$1B Bet Against LLMs", highlighting the architectural divergence from transformer-based [[concepts/autoregressive-models|autoregressive models]].
