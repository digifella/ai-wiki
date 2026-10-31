---
type: concept
domain: ai-agents
tags:
  - "self-supervised-learning"
  - "joint-embedding-predictive-architecture"
  - "latent-space-prediction"
  - "representational-learning"
  - "yann-lecun"
aliases:
  - "Joint Embedding Predictive Architecture"
  - "JEPA framework"
  - "LeCuns JEPA"
  - "latent space prediction model"
summary: Yann LeCun's Joint Embedding Predictive Architecture is a self-supervised learning framework that predicts future observations in a latent space to learn abstract representations without reconstructing raw data.
updated: 2026-07-12
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Yann LeCun's JEPA

**[[concepts/joint-embedding-predictive-architecture|Joint Embedding Predictive Architecture]] ([[concepts/jepa|JEPA]])** is a framework for self-supervised [[concepts/learning|learning]] proposed by [[entities/yann-lecun]] as an alternative to next-token [[concepts/user-attention-prediction|prediction]] models. It aims to learn rich, abstract representations of the [[entities/earth|world]] by predicting future observations in a [[concepts/embedding-spaces|latent space]] rather than reconstructing raw pixels or predicting the next word.

## Core Principles

- **[[concepts/joint-embedding-predictive-architecture-jepa|Latent Space Prediction]]**: Unlike Contrastive Learning or Reconstruction-based Models, JEPA does not predict raw data (pixels/tokens). It predicts [[concepts/dense-vectors|embeddings]] of future inputs using a separate context encoder.
- **[[concepts/abstraction-layer|Abstraction]] Gap**: The architecture creates a gap between the input encoder and the prediction target, forcing the model to ignore low-level details (noise, [[concepts/texture|texture]]) and focus on high-level semantic features.
- **Contextual Prediction**: The model takes a context (e.g., past video frames, previous image patches) and predicts the embedding of the future state, optimizing a loss function on the distance between predicted and actual latent [[concepts/vector-representations|embeddings]].

## Key Advantages

- **Reduced Overfitting**: By avoiding reconstruction, JEPA avoids memorizing data statistics, potentially leading to better [[concepts/abstraction|generalization]].
- **Semantic Richness**: Focuses on learning causal and structural [[concepts/relationships|relationships]] rather than superficial correlations.
- **Efficiency**: Predicting in a lower-dimensional latent space is computationally cheaper than reconstructing high-dimensional raw data.

## Related Concepts

- Self-Supervised [[concepts/learning|Learning]]
- Representational Learning
- [[concepts/world-models]]
- [[concepts/large-language-models]] (comparison to next-token [[concepts/user-attention-prediction|prediction]])

## Sources & Further Reading

- [[lab-notes/2026-05-26-Yann-LeCuns-JEPA-Joint-Embedding-Predictive-Architecture|Yann LeCun's JEPA: Joint Embedding Predictive Architecture Summary]]
