---
type: concept
domain: ai-agents
tags:
  - "world-models"
  - "physics-simulation"
  - "generative-ai"
  - "robotics"
  - "sim-to-real"
  - "multimodal"
aliases:
  - "WFM"
  - "Physical AI Models"
  - "Physics-Aware Generative Models"
summary: World Foundation Models are large-scale generative AI models trained to predict the evolution of physical environments by learning underlying physics, semantics, and causal relationships.
updated: 2026-07-12
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# World Foundation Model

**[[concepts/world-foundation-models|World Foundation Models]] (WFMs)** are large-scale [[concepts/generative-ai-models|generative AI models]] trained to predict the evolution of physical environments. Unlike standard language or [[concepts/computer-vision|vision]] models, WFMs learn the underlying [[concepts/physics|physics]], semantics, and causal [[concepts/relationships|relationships]] of the real [[entities/earth|world]], enabling [[concepts/robotics]] to simulate, plan, and interact with physical spaces safely and efficiently.

## Core Characteristics
- **Physics-Aware Generation**: Predicts state transitions based on [[concepts/fundamental-laws-of-physics|physical laws]] ([[concepts/gravitational-pull|gravity]], [[concepts/friction|friction]], collision) rather than just pixel-level correlations.
- **[[concepts/advanced-ai-techniques-that-improve-generalization-from-simulated-data|Sim-to-Real Transfer]]**: Bridges the gap between digital simulation and physical execution by generating realistic trajectories and outcomes.
- **Multimodal Inputs/Outputs**: Processes video, [[concepts/lidar|lidar]], point clouds, and textual [[concepts/commands|commands]] to output actionable control [[concepts/policies|policies]] or synthetic [[concepts/language-data|training data]].

## Key Implementations & Developments
- [[entities/nvidia|NVIDIA]] [[entities/nvidia-cosmos-3|Cosmos 3]]: [[concepts/omnimodal-world-model|Omnimodal World Model]] for [[concepts/physical-ai|Physical AI]] and Robotics represents a major evolution in the space, introducing omnimodal capabilities for robust physical [[concepts/ai-powered-applications|AI applications]].
- Early frameworks like Genesis and Isaac Sim established the infrastructure for scalable [[concepts/physics-simulation|physics simulation]] integrated with [[concepts/tts-model|generative models]].

## Applications
- **Autonomous Driving**: Scenario generation for edge-case testing and behavior [[concepts/user-attention-prediction|prediction]].
- **Robotics**: Sample-efficient policy training via synthetic data augmentation and zero-shot adaptation to new environments.
- **Digital Twins**: High-fidelity modeling of industrial processes for predictive maintenance and optimization.

## Related Concepts
- [[concepts/generative-ai]]
- [[concepts/simulation]]
- [[concepts/machine-learning]]
- [[concepts/physical-ai-robotics|Embodied AI]]
## Source Notes
- 2026-06-02: [[lab-notes/2026-06-02-NVIDIA-Cosmos-3-Omnimodal-World-Model-for-Physical-AI-an|NVIDIA Cosmos 3: Omnimodal World Model for Physical AI and Robotics]]
