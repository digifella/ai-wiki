---
type: concept
domain: ai-agents
summary: A computational framework where an agent learns to predict the future states of its environment by modeling underlying dynamics to enable planning and reasoning.
updated: 2026-05-23
group: model-efficiency-compression
---
# World Models

A computational framework where an [[entities/agent|agent]] learns to predict the future states of its environment by modeling underlying dynamics, enabling planning and [[concepts/reasoning|reasoning]] without direct interaction.

## Core Principles
- **Predictive Dynamics**: Modeling the causal [[concepts/structure|structure]] and [[concepts/physics|physics]] of an environment.
- **Latent Representation**: Operating on abstract, high-level features rather than raw, noisy sensory input (e.g., pixels).
- **State Estimation**: Maintaining an internal belief of the environment's current state to anticipate future transitions.

## Key Architectures & Approaches
- [[concepts/llms]]: Autoregressive prediction of discrete linguistic [[concepts/tokens|tokens]]; primarily limited by the scope of text-based data.
- [[concepts/vl-jepa]]: A recent [[concepts/computer-vision|vision]]-centric approach to [[concepts/agi|AGI]] emerging from [[entities/meta-ai|Meta]] FAIR Lab and [[entities/yann-lecun|Yann LeCun]].
	- **Core Thesis**: "Language is not intelligence"; moves the focus from generative [[concepts/text|text]] to visual/sensory world modeling.
	- **Departure from Generative AI**: Aims to move away from the limitations of [[entities/chatgpt]] and purely generative paradigms.
	- **Mechanism**: Utilizes Joint-Embedding Predictive [[concepts/architecture|Architecture]] to predict information in a latent space, avoiding the computational overhead of pixel-by-pixel generation.
	- **Objective**: Establishing non-[[concepts/llm-reasoning|LLM reasoning]] architectures through visual [[concepts/predictive-modeling|predictive modeling]].

## Related Concepts
- [[concepts/agi|AGI]]
- [[concepts/generative-ai]]
- Latent Space
- Joint-Embedding Predictive [[concepts/architecture|Architecture]]

---
**Backlink:** 2026 04 14 New paper for a [[concepts/computer-vision|vision]] approach to AGI not LLM
## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: Alibaba Qwen 3.6-Plus: Agentic Coding and Multimodal Reasoning Towards Real-World Agents
- 2026-04-10: [[lab-notes/2026-04-10-Alibaba-Qwen-36-Plus-Agentic-Coding-and-Multimodal-Reasoning-Towards|Alibaba Qwen 36 Plus Agentic Coding and Multimodal Reasoning Towards]] · [▶ source](https://www.youtube.com/watch?v=v8RokQY05Bo)
- 2026-04-11: [[lab-notes/2026-04-11-Defining-Wellbeing-Laffans-Philosophical-Accounts-and-Practical-Challe|Defining Wellbeing Laffans Philosophical Accounts and Practical Challe]] · [▶ source](https://www.youtube.com/watch?v=vv4cW-NKjWI)
- 2026-04-12: [[lab-notes/2026-04-12-DreamDojo-AI-Bridging-Robotics-Sim2Real-Gap-for-Complex-Tasks|DreamDojo AI Bridging Robotics Sim2Real Gap for Complex Tasks]] · [▶ source](https://www.youtube.com/watch?v=mFSFvKquXwI)
- 2026-04-21: Google DeepMind
- 2026-04-24: OpenAI GPT-5 · [▶ source](https://www.youtube.com/watch?v=tNV9_I-zLO0)
- 2026-04-26: DeepSeek V4: China
- 2026-04-29: Google Deep Research · [▶ source](https://www.youtube.com/watch?v=FVU4qLjy2jE)