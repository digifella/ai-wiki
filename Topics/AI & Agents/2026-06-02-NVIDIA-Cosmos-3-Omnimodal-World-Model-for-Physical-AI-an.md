---
wiki-ingested: true
title: "NVIDIA Cosmos 3: Omnimodal World Model for Physical AI and Robotics"
date: 2026-06-02
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-02 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## NVIDIA Cosmos 3: Omnimodal World Model for Physical AI and Robotics
**Clip title:** Cosmos 3 - NVIDIA's World [[concepts/foundation-model|Foundation Model]]
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=2zDtIWeyqYs

### Summary
The video introduces [[entities/nvidia|NVIDIA]] Cosmos 3, an "Omnimodal [[concepts/joint-embedding-predictive-architecture-jepa|World Model]]" that represents a significant leap forward in [[concepts/ai-technologies|Artificial Intelligence]], particularly in the realm of [[concepts/physical-ai|physical AI]] and [[concepts/world-models|world models]]. Unlike previous approaches that stitched together multiple [[concepts/custom-models|specialized models]], Cosmos 3 unifies the processing and generation of information across five distinct modalities: language, image, video, [[concepts/audio-modality|audio]], and physical actions. This [[concepts/integration|integration]] allows the model to both understand and reason about real-world inputs, and to generate coherent, physically grounded outputs.

Cosmos 3's innovative [[concepts/architecture|architecture]] is built upon a "Mixture-of-[[concepts/transformers|Transformers]]" (MoT) featuring a dual-tower [[concepts/design|design]]. One tower acts as an Autoregressive "Reasoner" responsible for processing diverse inputs from the five modalities and developing a comprehensive understanding of the scene or context. The second tower functions as a "Diffusion Generator," capable of creating dynamic, high-quality outputs across the same modalities. This includes generating new videos, [[concepts/images|images]], [[concepts/audio-modality|audio]], [[concepts/text|text]], and, crucially, action sequences for [[concepts/robotics|robotics]]. The model's ability to seamlessly bridge understanding and generation makes it a powerful tool for developing intelligent agents that can interact with and simulate the physical world.

The practical [[concepts/software|applications]] of Cosmos 3 are vast, especially for training embodied AI. It can generate immense amounts of high-fidelity synthetic data, which is critical for areas like [[concepts/robotics|robotics]] and autonomous vehicles where real-world data collection is expensive, time-consuming, and often dangerous. The video demonstrates its capabilities through examples such as autonomous cars [[concepts/reasoning|reasoning]] about potential road hazards and suggesting appropriate actions, and robotic arms performing [[concepts/complex-tasks|complex tasks]] like fruit picking or organizing tools based on textual [[concepts/instructions|instructions]]. NVIDIA has released several versions, including Cosmos 3 Super (32 billion [[concepts/parameters|parameters]]) and [[entities/nano|Nano]] (8 billion [[concepts/parameters|parameters]]), with an "Edge" version optimized for real-time, on-device [[concepts/inference|inference]] expected soon.

In conclusion, NVIDIA Cosmos 3 is presented as a foundational building block for the next generation of physical [[concepts/ai-powered-applications|AI applications]]. By offering a unified [[concepts/framework-for-understanding|framework for understanding]] and generating multimodal content and actions, it provides developers with unprecedented capabilities for world generation, [[concepts/simulation|simulation]], and embodied policy [[concepts/learning|learning]]. This development signals a crucial step towards [[concepts/agi|Artificial General Intelligence]] ([[concepts/agi|AGI]]), demonstrating a sophisticated form of intelligence that is deeply grounded in the dynamics and complexities of the physical world, moving AI beyond purely language-based interactions.

### Video Description & Links
#### Description
In this video, I look [[concepts/assistive-technology|at]] Cosmos 3, NVIDIA's latest world foundation model, and how it is Omnimodal and can take in five different modalities of inputs as well as generate five different types of outputs. 

Blog: https://blogs.nvidia.com/blog/cosmos-3-physical-ai-open-world-foundation-model/
https://developer.nvidia.com/blog/develop-physical-ai-reasoning-world-and-action-models-with-nvidia-cosmos-3
HF Collection: https://huggingface.co/collections/nvidia/cosmos3
Paper: https://research.nvidia.com/labs/cosmos-lab/cosmos3/technical-report.pdf

Twitter: https://x.com/Sam_Witteveen 

🕵️ Interested in building [[concepts/llm-based-agents|LLM Agents]]? Fill out the form below
Building LLM Agents Form: https://drp.li/dIMes

👨‍💻[[entities/github|Github]]:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
00:19 NVIDIA Cosmos 3
01:38 Cosmos 3 Architecture
02:40 Cosmos 3 Models
04:12 NVIDIA Cosmos 3 Paper
05:53 Demo: Cosmos 3 Nano

#### Tags
`NVIDIA Cosmos`, `Cosmos 3`, `Cosmos3 Nano`, `Cosmos3 Super`, `physical AI`, `world foundation models`, `WFM`, `world models`, `Cosmos Predict`, `Cosmos Transfer`, `Cosmos Reason`, `NVIDIA AI`, `robotics AI`, `robot learning`, `autonomous vehicles`, `AV training`, `synthetic data generation`, `vision language model`, `VLM`, `embodied AI`, `generative AI`, `NVIDIA Isaac`, `Omniverse`, `video generation`, `AI reasoning`, `action models`, `simulation`, `NVIDIA Blackwell`, `open model`, `Hugging Face`, `machine learning`, `AI agents`

#### URLs
- https://blogs.nvidia.com/blog/cosmos-3-physical-ai-open-world-foundation-model/
- https://developer.nvidia.com/blog/develop-physical-ai-reasoning-world-and-action-models-with-nvidia-cosmos-3
- https://huggingface.co/collections/nvidia/cosmos3
- https://research.nvidia.com/labs/cosmos-lab/cosmos3/technical-report.pdf
- https://x.com/Sam_Witteveen
- https://drp.li/dIMes
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/omnimodal-world-model|Omnimodal World Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Omnimodal_World_Model)
- [[concepts/physical-ai|Physical AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Physical_AI)
- [[concepts/world-foundation-model|World Foundation Model]] — [Wikipedia](https://en.wikipedia.org/wiki/World_Foundation_Model)
- [[concepts/multimodal-ai|Multimodal Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Multimodal_Processing)
- Mixture-of-[[concepts/transformers|Transformers]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture-of-Transformers)
- Dual-tower [[concepts/design|Design]] — [Wikipedia](https://en.wikipedia.org/wiki/Dual-tower_Design)
- Autoregressive Reasoner — [Wikipedia](https://en.wikipedia.org/wiki/Autoregressive_Reasoner)
- Diffusion Generator — [Wikipedia](https://en.wikipedia.org/wiki/Diffusion_Generator)
- Synthetic Data Generation — [Wikipedia](https://en.wikipedia.org/wiki/Synthetic_Data_Generation)
- [[concepts/multi-modal-observation|Embodied AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Embodied_AI)
- [[concepts/regulatory-approval|Autonomous Vehicles]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_Vehicles)
- Robotics Action Sequences — [Wikipedia](https://en.wikipedia.org/wiki/Robotics_Action_Sequences)
- [[concepts/on-device-inference|On-device Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/On-device_Inference)
- World [[concepts/simulation|Simulation]] — [Wikipedia](https://en.wikipedia.org/wiki/World_Simulation)
- Embodied Policy [[concepts/learning|Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Embodied_Policy_Learning)
- [[concepts/artificial-general-intelligence|Artificial General Intelligence]] — [Wikipedia](https://en.wikipedia.org/wiki/Artificial_General_Intelligence)

## Related Entities
- [[entities/nvidia|NVIDIA]] — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA)
- [[entities/sam-witteveen|Sam Witteveen]] — [Wikipedia](https://en.wikipedia.org/wiki/Sam_Witteveen)
- Cosmos 3 — [Wikipedia](https://en.wikipedia.org/wiki/Cosmos_3)
- Cosmos 3 Super — [Wikipedia](https://en.wikipedia.org/wiki/Cosmos_3_Super)
- Cosmos 3 Nano — [Wikipedia](https://en.wikipedia.org/wiki/Cosmos_3_Nano)
- Cosmos 3 Edge — [Wikipedia](https://en.wikipedia.org/wiki/Cosmos_3_Edge)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- NVIDIA Research — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA_Research)