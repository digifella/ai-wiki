---
type: concept
domain: ai-agents
updated: 2026-05-23
group: ai-foundations-concepts
---
# JEPA

**Joint Embedding Predictive [[concepts/architecture|Architecture]]** is a [[concepts/machine-learning|machine learning]] framework proposed by [[entities/yann-lecun]] to transcend the limitations of [[concepts/llm]]s by [[concepts/learning|learning]] [[concepts/world-models|world models]] through prediction in latent embedding spaces.

## Architecture & Mechanism
- Predicts high-level representations of future states rather than reconstructing raw pixels or [[concepts/tokens|tokens]].
- Operates via a student-teacher dynamic where the teacher provides targets in the latent space and the student minimizes prediction error in joint embeddings.
- Avoids the inductive bias of next-token prediction, aiming for better [[concepts/reasoning|reasoning]] and compositional generalization.

## Strategic Context
- [[entities/yann-lecun]] identifies JEPA as the critical path beyond current [[concepts/llm]] [[concepts/scaling-laws|scaling laws]], arguing that token prediction lacks sufficient capacity for true intelligence.
- Unlike LLMs, which are largely pre-trained on statistical token sequences, JEPA focuses on structured world modeling.
- Welch [[entities/labs|Labs]] analysis [[lab-notes/2026-05-05-Yann-LeCuns-JEPA-Proposal-A-Path-Beyond-LLMs|Yann LeCun's JEPA Proposal: A Path Beyond LLMs]] frames this as a "$1B Bet Against LLMs", highlighting the architectural divergence from transformer-based autoregressive [[concepts/models|models]].
