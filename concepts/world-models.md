---
type: concept
domain: ai-agents
tags:
  - "world-models"
  - "predictive-dynamics"
  - "latent-representation"
  - "state-estimation"
  - "ai-agents"
  - "jepa"
aliases:
  - "Computational World Models"
  - "Predictive Modeling Framework"
  - "Internal Belief State"
  - "Environmental Dynamics Modeling"
summary: A computational framework where an agent learns to predict the future states of its environment by modeling underlying dynamics to enable planning and reasoning.
updated: 2026-07-12
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# World Models

A computational framework where an agent learns to predict the future states of its environment by modeling underlying dynamics, enabling planning and [[concepts/reasoning|reasoning]] without direct interaction. Central to the argument that true adaptive AI requires moving beyond pure [[concepts/random-token-generation|next-token prediction]] ([[lab-notes/2026-06-14-Yann-LeCuns-Argument-World-Models-for-True-Adaptive-AI-B|Yann LeCun's Argument: World Models for True, Adaptive AI Beyond LLMs]]).

## Core Principles
- **Predictive Dynamics**: Modeling the causal structure and [[concepts/physics|physics]] of an environment.
- **[[concepts/hidden-state|Latent Representation]]**: Operating on abstract, high-level features rather than raw, noisy sensory input (e.g., pixels).
- **State Estimation**: Maintaining an internal belief of the environment's current state to anticipate future transitions.

## Key Architectures & Approaches
- [[concepts/llms]]: Autoregressive [[concepts/user-attention-prediction|prediction]] of discrete linguistic [[concepts/tokens|tokens]]; primarily limited by the scope of text-based data and lack of explicit environmental modeling.
- [[concepts/vl-jepa]]: A recent [[concepts/computer-vision|vision]]-centric approach to AGI emerging from [[entities/meta-ai|Meta]] [[entities/meta-fair-lab|FAIR]] Lab, focusing on predicting missing patches in [[concepts/embedding-spaces|latent space]] rather than reconstructing pixels.

## Strategic Context & Limitations
- **LLM Critique**: Current LLMs lack a coherent internal representation of the [[entities/earth|world]]; they predict text distributions without understanding physical consequences or long-term agency [[lab-notes/2026-06-14-Yann-LeCuns-Argument-World-Models-for-True-Adaptive-AI-B|Yann LeCun's Argument: World Models for True, Adaptive AI Beyond LLMs]].
- **Next [[concepts/revolution|Revolution]]**: Transitioning from narrow, reactive systems to general, proactive agents capable of simulation-based planning and robust reasoning through explicit world modeling.

## References
- [Yann LeCun's Argument: World Models for True, Adaptive AI Beyond LLMs](https://www.youtube.com/watch?v=72Xj8k5WQX4)
