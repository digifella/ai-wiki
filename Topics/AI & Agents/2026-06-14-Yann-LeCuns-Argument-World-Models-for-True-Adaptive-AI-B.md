---
wiki-ingested: true
title: "Yann LeCun's Argument: World Models for True, Adaptive AI Beyond LLMs"
date: 2026-06-14
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: model-efficiency-compression
type: "source-summary"
aliases:
  - "lab-notes/2026-06-14-Yann-LeCuns-Argument-World-Models-for-True-Adaptive-AI-B"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Yann LeCun's Argument: World Models for True, Adaptive AI Beyond LLMs
**Clip title:** Yann LeCun: World Models: Enabling the next AI [[concepts/revolution|revolution]]
**Author / channel:** [[concepts/computer-vision|Computer Vision]] and Geometry Group, ETH Zurich
**URL:** https://www.youtube.com/watch?v=72Xj8k5WQX4

### Summary
[[entities/yann-lecun|Yann LeCun]]'s presentation, "[[concepts/world-models|World Models]]: Enabling the next AI [[concepts/revolution|revolution]]," critiques the current state of [[concepts/ai-technologies|Artificial Intelligence]], particularly [[concepts/large-language-model-llm|Large Language Models]] (LLMs), arguing that they lack [[concepts/true-intelligence|true intelligence]] and common sense compared to humans and animals. He highlights [[concepts/moravecs-paradox|Moravec's Paradox]], where tasks difficult for humans (like complex [[concepts/mathematics|math]]) are easy for AI, while seemingly simple tasks for humans (like navigating a messy room or understanding [[concepts/physics|physics]]) remain incredibly challenging for machines. LeCun defines intelligence not as an accumulation of [[concepts/factual-knowledge|declarative knowledge]] or [[concepts/skills|skills]], but as the *ability to quickly learn and adapt* to new situations with minimal or [[concepts/concept-of-nothingness|zero]] prior training, a capability current AI falls short on.

The core challenge, according to LeCun, lies in how [[concepts/ai-models|AI systems]] learn and process real-world data. He points out that while LLMs are trained on trillions of [[concepts/tokens|tokens]] of human-produced text – a data volume that would take a human hundreds of thousands of years to read – a four-year-old child's sensory [[concepts/experience|experience]] ([[concepts/computer-vision|vision]], touch, etc.) encompasses an equivalent, if not greater, volume of richer, continuous, and highly redundant data. This redundancy, he argues, is a *feature* critical for self-supervised [[concepts/learning|learning]], not a bug. However, current [[concepts/generative-ai|generative models]] struggle with this continuous, high-dimensional data because there's an infinite number of plausible future outcomes, leading to blurry or unrealistic predictions when forced to generate every pixel or detail. Unlike humans who build abstract mental models of the world, LLMs operate largely on token-based [[concepts/user-attention-prediction|prediction]] without genuine understanding of [[concepts/physical-reality|physical reality]].

LeCun proposes a [[concepts/mindset-shift|paradigm shift]] towards "World Models" – objective-driven agents that learn causal models of their environment in *abstract representation spaces*. Instead of merely predicting the next pixel or token (feed-forward [[concepts/user-attention-prediction|prediction]]), these models would perform *[[concepts/inference|inference]] through search and optimization*, predicting the consequences of imagined actions and optimizing action sequences to achieve objectives. His favored architecture for this is the *[[concepts/jepa|Joint-Embedding Predictive Architecture]] ([[concepts/jepa|JEPA]])*, which learns abstract representations by only predicting the *relevant and predictable aspects* of future states, discarding irrelevant details. A crucial aspect of training JEPA is preventing "collapse," a phenomenon where the model learns trivial representations. LeCun advocates for "information maximization" (e.g., using techniques like SIGReg) as a method to encourage representations that are maximally informative and disentangled. This approach resonates with [[concepts/energy-based-models|Energy-Based Models]] (EBMs), which frame [[concepts/learning|learning]] as shaping an energy landscape where compatible data points have low energy and incompatible ones have high energy.

The [[entities/speaker|speaker]] presents compelling evidence from his lab's work on LeWorldModel and V-JEPA, demonstrating how these action-conditioned world models can enable robots to plan in simulated environments and how V-JEPA, trained entirely self-supervised on unlabeled video, learns intuitive [[concepts/physics|physics]] ([[concepts/object-permanence|object permanence]], stability, [[concepts/gravitational-pull|gravity]]) and common sense, which is reflected in its prediction error spiking when unphysical events occur. It also shows strong performance in downstream tasks like depth estimation and semantic segmentation. LeCun concludes with a set of provocative [[concepts/recommendations|recommendations]] for [[entities/fellow|fellow]] AI scientists: abandon [[concepts/generative-ai|generative models]], probabilistic models, and (for certain tasks) contrastive methods in favor of joint-embedding architectures, energy-based models, and regularized methods, respectively. He also suggests minimizing reliance on [[concepts/reinforcement-learning|reinforcement learning]] due to its sample inefficiency and, most controversially, states that if researchers are interested in advancing human-level, grounded AI, they should *not work on LLMs*. Instead, the focus should be on building universal causal models of complex physical systems, including humans themselves, using hierarchical JEPA World Models.

### Video Description & Links
#### Description
Talk given by Yann LeCun at ETH Zürich during "Frontiers of [[concepts/physical-ai-robotics|Embodied AI]]".

## Related Concepts
- [[concepts/world-models|World Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Mental_model)
- [[concepts/true-intelligence|True Intelligence]]
- [[concepts/moravecs-paradox|Moravec's Paradox]] — [Wikipedia](https://en.wikipedia.org/wiki/Moravec%27s_paradox)
- [[concepts/large-language-models|Large Language Models (LLMs)]]
- [[concepts/joint-embedding-predictive-architecture-jepa|Joint-Embedding Predictive Architecture (JEPA)]]
- [[concepts/yann-lecuns-jepa|Self-Supervised Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-supervised_learning)
- [[concepts/energy-based-models|Energy-Based Models]]
- [[concepts/inference|Inference]] through Search
- Common Sense [[concepts/reasoning|Reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/Commonsense_reasoning)
- Representation Collapse — [Wikipedia](https://en.wikipedia.org/wiki/Representation_collapse)
- Causal Modeling — [Wikipedia](https://en.wikipedia.org/wiki/Causal_model)

## Related Entities
- [[entities/yann-lecun|Yann LeCun]] — [Wikipedia](https://en.wikipedia.org/wiki/Yann_LeCun)
- [[entities/eth-zurich|ETH Zurich]] — [Wikipedia](https://en.wikipedia.org/wiki/ETH_Zurich)
- Large Language Models (LLMs)
- V-JEPA — [Wikipedia](https://en.wikipedia.org/wiki/World_model_%28artificial_intelligence%29)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]