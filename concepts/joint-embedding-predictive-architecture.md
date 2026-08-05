---
type: concept
domain: history-anthropology
tags:
  - "ai"
  - "machine-learning"
  - "architecture"
  - "yann-lecun"
  - "jepa"
  - "world-models"
  - "self-supervised-learning"
  - "latent-prediction"
  - "representation-learning"
  - "ai-architecture"
aliases:
  - "JEPA"
  - "Joint Embedding Predictive Architecture"
summary: A self-supervised learning framework proposed by Yann LeCun that predicts future states or missing context within an abstract embedding space rather than reconstructing raw data.
updated: 2026-07-11
group: architecture-cities-heritage
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=history-anthropology name=History & Anthropology

# Self-Supervised Learning & Joint Embedding Predictive Architecture

**Self-Supervised [[concepts/learning|Learning]] (SSL)** is a paradigm where models learn representations from unlabeled data by generating supervisory signals from the [[concepts/data-structure|data structure]] itself. A prominent SSL framework is the **[[concepts/joint-embedding-predictive-architecture-jepa|Joint Embedding Predictive Architecture]] ([[concepts/jepa|JEPA]])**, proposed by [[entities/yann-lecun]] for training [[concepts/world-models]].

## Joint Embedding Predictive Architecture (JEPA)
JEPA predicts future states or missing context within an abstract embedding space, rather than reconstructing raw data or predicting sequential [[concepts/tokens|tokens]].

### Core Mechanics
- **Latent [[concepts/user-attention-prediction|Prediction]]:** Context encoder processes observed inputs to generate representations; predictor network forecasts representations of target inputs (future or masked) in the [[concepts/embedding-spaces|latent space]].
- **No Reconstruction:** [[concepts/loss-functions|Loss functions]] operate solely on [[concepts/dense-vectors|embeddings]], avoiding the high-dimensional noise and computational waste associated with pixel or token-level reconstruction.
- **Modularity:** Supports diverse modalities ([[concepts/computer-vision|vision]], text, sensor data) by mapping inputs to a unified representation space before prediction.

### Comparison to LLMs
- JEPA targets inefficiencies in [[concepts/large-language-models]] by modeling state transitions and causal structures directly, rather than relying on statistical co-occurrence of tokens.

## Related Projects & Challenges
- **[[lab-notes/2026-05-26-Project-Aristotle-Implications-and-Challenges|Project Aristotle: Implications and Challenges]]**: Discusses broader implications and challenges in [[concepts/ai-development|AI development]], relevant to the shift from next-token [[concepts/user-attention-prediction|prediction]] to world-modeling approaches like [[concepts/jepa|JEPA]].
