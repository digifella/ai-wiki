---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "machine-learning"
  - "cognitive-science"
  - "robotics"
  - "paradox"
  - "moravec-paradox"
  - "sensorimotor-skills"
  - "embodied-cognition"
  - "symbolic-ai"
aliases:
  - "Moravecs Paradox"
  - "Morave's Paradox"
  - "The Moravec Observation"
summary: Moravec's Paradox observes that high-level reasoning tasks require relatively little computation, while low-level sensorimotor skills demand enormous computational resources due to evolutionary history.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Moravec's Paradox

**Moravec's Paradox** is the observation that high-level [[concepts/reasoning|reasoning]] tasks (symbolic [[concepts/open-source-philosophy|logic]], [[concepts/mathematics|mathematics]]) require relatively little computation in [[concepts/ai-models|AI systems]], while low-level sensorimotor [[concepts/skills|skills]] ([[concepts/computer-vision|vision]], mobility, physical interaction) require enormous [[concepts/computational-resources|computational resources]]. Named after roboticist Hans Moravec and later articulated by Raj Reddy and Rodney Brooks, the paradox highlights a fundamental asymmetry between intellectual tasks and embodied tasks in [[concepts/ai-technologies|artificial intelligence]].

## Core Principles
- **Evolutionary Efficiency**: High-level reasoning is evolutionarily recent and computationally streamlined; sensorimotor skills are ancient, robust, and deeply ingrained through billions of years of biological evolution, making them deceptively difficult to replicate algorithmically.
- **Symbolic vs. Sub-symbolic**: Traditional AI excels at [[concepts/abstract-thinking|symbolic manipulation]] (chess, [[concepts/mathematical-reasoning|theorem proving]]) but struggles with sub-symbolic processing required for real-[[entities/earth|world]] perception and action.
- **Embodied [[concepts/cognition|Cognition]]**: Intelligence cannot be divorced from physical interaction with the environment; "[[concepts/human-cognition|thinking]]" is deeply rooted in sensory-motor systems.

## Implications for AI Development
- **LLM Limitations**: [[concepts/large-language-models]] (LLMs) demonstrate high-level [[concepts/reasoning-capabilities|reasoning capabilities]] but lack inherent grounding in the physical world, exemplifying the paradox by being strong in syntax/semantics but weak in embodied understanding.
- **[[concepts/robotics|Robotics]] Challenges**: Achieving human-like dexterity and navigation remains a harder [[entities/national-academies|engineering]] problem than building systems that can pass a graduate-level exam.
- **[[concepts/world-models|World Models]]**: To bridge this gap, AI systems require internal simulations of [[concepts/physical-reality|physical reality]]—**[[concepts/joint-embedding-predictive-architecture-jepa|World Model]]**—to predict outcomes of actions and integrate sensory data, rather than relying solely on statistical text [[concepts/user-attention-prediction|prediction]].

## Related Concepts
- Symbolic AI vs. Connectionism
- Grounding Problem
- Embodied Intelligence

## Recent Developments & Integration
- **Yann [[concepts/jepa|LeCun's World Model]] Thesis**: Contemporary research emphasizes that overcoming the limitations highlighted by Moravec's Paradox requires moving beyond pure language modeling.
	- See: [[lab-notes/2026-06-14-Yann-LeCuns-Argument-World-Models-for-True-Adaptive-AI-B|Yann LeCun's Argument: World Models for True, Adaptive AI Beyond LLMs]]
	- LeCun argues that true adaptive AI must incorporate world models to handle the [[concepts/complexity-classes|computational complexity]] of sensorimotor tasks that LLMs currently ignore.

## References
[Yann LeCun's Argument: World Models for True, Adaptive AI Beyond LLMs](https://www.youtube.com/watch?v=72Xj8k5WQX4)
