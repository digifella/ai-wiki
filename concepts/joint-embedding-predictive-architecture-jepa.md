---
type: concept
domain: history-anthropology
tags:
  - "ai"
  - "machine-learning"
  - "jepa"
  - "yann-lecun"
  - "representation-learning"
  - "world-model"
  - "self-supervised-learning"
  - "latent-space-prediction"
aliases:
  - "Joint Embedding Predictive Architecture"
  - "JEPA"
  - "Lecun's World Model Framework"
  - "Latent Space Prediction"
summary: Joint Embedding Predictive Architecture (JEPA) is a self-supervised learning framework proposed by Yann LeCun that predicts future states within a latent embedding space to learn world models without reconstructing raw i
updated: 2026-07-11
group: architecture-cities-heritage
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=history-anthropology name=History & Anthropology

# World Model

A **[[entities/earth|World]] Model** in AI is an internal representation that allows a system to predict future states or understand the underlying structure of an environment. This concept is central to [[concepts/reinforcement-learning]], planning, and self supervised learning.

## Key Implementations & Perspectives

### Joint Embedding Predictive Architecture (JEPA)
**[[concepts/joint-embedding-predictive-architecture|Joint Embedding Predictive Architecture]] ([[concepts/jepa|JEPA]])** is a self-supervised [[concepts/learning|learning]] framework proposed by [[entities/yann-lecun]] designed to learn World Model by predicting future states within a latent embedding space, explicitly avoiding the reconstruction of raw data [[concepts/tokens|tokens]] or pixels.

#### Core Principles
- **Latent [[concepts/user-attention-prediction|Prediction]]:** The architecture predicts [[concepts/dense-vectors|embeddings]] of future observations based on [[concepts/vector-representations|embeddings]] of current observations, operating entirely within a compressed representation space rather than the input space.
- **Reconstruction Avoidance:** Unlike autoencoders or [[concepts/large-language-models]], JEPA does not reconstruct input data; this prevents memorization of low-level details and forces the model to learn high-level semantic structures and invariants.
- **Discriminative Training:** Utilizes a discriminator to ensure embeddings are informative and to prevent trivial solutions where the predictor outputs constant values.

#### Strategic Positioning vs. LLMs
- [[entities/yann-lecun]] advocates JEPA as the primary alternative to autoregressive [[concepts/large-language-models]], arguing that predicting in [[concepts/embedding-spaces|latent space]] is more biologically plausible and computationally efficient for understanding causal structures.

### General Concept & Applications
- **Definition:** A world model acts as a simulator of the environment, enabling agents to imagine outcomes without direct interaction, thereby improving sample efficiency and planning capabilities [[lab-notes/2026-05-24-World-Models-in-AI-Concept-Implementations-and-Applicati|World Models in AI: Concept, Implementations, and Applications]].
- **Implementations:** Range from simple Markov Decision Process approximations to complex [[concepts/tts-model|generative models]] and JEPA-[[concepts/style|style]] latent predictors.
- **Applications:** Critical for [[concepts/robotics]], [[concepts/voice-assistants|autonomous systems]], and advanced agent-based models requiring long-horizon planning and counterfactual [[concepts/reasoning|reasoning]].
