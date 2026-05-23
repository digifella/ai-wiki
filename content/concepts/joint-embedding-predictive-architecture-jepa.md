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
updated: 2026-05-24
group: architecture-cities-heritage
---
# World Model

A **World Model** in [[concepts/ai|AI]] is an internal representation that allows a system to predict future states or understand the underlying [[concepts/structure|structure]] of an environment. This concept is central to [[concepts/reinforcement-learning]], [[concepts/planning]], and [[concepts/self-supervised-learning]].

## Key Implementations & Perspectives

### Joint Embedding Predictive Architecture (JEPA)
**[[concepts/joint-embedding-predictive-architecture|Joint Embedding Predictive Architecture]] ([[concepts/jepa|JEPA]])** is a self-supervised [[concepts/learning|learning]] framework proposed by [[entities/yann-lecun]] designed to learn World Model by predicting future states within a latent embedding space, explicitly avoiding the reconstruction of raw data [[concepts/tokens|tokens]] or pixels.

#### Core Principles
- **Latent Prediction:** The [[concepts/architecture|architecture]] predicts embeddings of future observations based on embeddings of current observations, operating entirely within a compressed representation space rather than the input space.
- **Reconstruction Avoidance:** Unlike autoencoders or [[concepts/large-language-models]], JEPA does not reconstruct input data; this prevents memorization of low-level details and forces the model to learn high-level semantic structures and invariants.
- **Discriminative [[concepts/training|Training]]:** Utilizes a discriminator to ensure embeddings are informative and to prevent trivial solutions where the predictor outputs constant values.

#### Strategic Positioning vs. LLMs
- [[entities/yann-lecun]] advocates JEPA as the primary alternative to [[concepts/autoregressive-models|autoregressive]] [[concepts/large-language-models]], arguing that predicting in latent space is more biologically plausible and computationally efficient for understanding causal structures.

### General Concept & Applications
- **Definition:** A world model acts as a simulator of the environment, enabling [[concepts/agents|agents]] to imagine outcomes without direct interaction, thereby improving [[concepts/sample-efficiency|sample efficiency]] and planning [[concepts/capabilities|capabilities]] [[lab-notes/2026-05-24-World-Models-in-AI-Concept-Implementations-and-Applicati|World Models in AI: Concept, Implementations, and Applications]].
- **Implementations:** [[concepts/range|Range]] from simple [[concepts/markov-decision-processes|Markov Decision Process]] approximations to complex generative [[concepts/models|models]] and JEPA-[[concepts/style|style]] latent predictors.
- **[[concepts/software|Applications]]:** Critical for [[concepts/robotics]], [[concepts/autonomous-systems|autonomous systems]], and advanced [[concepts/agent-based-models|agent-based models]] requiring long-horizon planning and counterfactual [[concepts/reasoning|reasoning]].
