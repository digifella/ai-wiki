---
wiki-ingested: true
title: "Yann LeCun's JEPA Proposal: A Path Beyond LLMs"
date: 2026-05-05
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: model-efficiency-compression
---
# Yann LeCun's JEPA Proposal: A Path Beyond LLMs
Generated: 2026-05-05 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: [[concepts/summary|Summary]]

---

## Yann LeCun's JEPA Proposal: A Path Beyond LLMs
**Clip title:** Yann LeCun's $1B Bet Against LLMs
**Author / channel:** Welch [[entities/labs|Labs]]
**URL:** https://www.youtube.com/watch?v=kYkIdXwW2AE

### Summary
[[entities/yann-lecun|Yann LeCun]], a prominent AI researcher, is advocating for an alternative approach to [[concepts/ai-technologies|artificial intelligence]] called [[concepts/joint-embedding-predictive-architecture|Joint Embedding Predictive Architecture]] ([[concepts/jepa|JEPA]]), which he believes [[entities/will|will]] eventually surpass current [[concepts/large-language-model-llm|Large Language Models]] (LLMs). Unlike LLMs, which are largely pre-trained on [[concepts/language-data|language data]] and are generative (producing [[concepts/text|text]], [[concepts/images|images]], or video), [[concepts/jepa|JEPA]] is neither language-centric nor inherently generative. Instead, JEPA is a framework designed to train AI [[concepts/models|models]] by mapping inputs and outputs into abstract "embeddings" through encoders. A predictor then learns to anticipate the [[concepts/output|output]] embedding based on the input embedding. LeCun posits that while LLMs are proficient at [[concepts/text-manipulation|text manipulation]], their [[concepts/capabilities|capabilities]] are limited, and JEPA offers a more fundamental and robust pathway toward developing [[concepts/advanced-ai-processing|advanced AI systems]].

The video [[concepts/highlights|highlights]] the historical challenges faced by AI [[concepts/learning|learning]] paradigms, tracing the evolution from heavily data-dependent supervised learning (exemplified by early Convolutional [[concepts/neural-networks|Neural Networks]] like AlexNet) to more autonomous methods. Reinforcement learning (as seen in systems like AlphaGo) and self-supervised learning (SSL) emerged to mitigate the reliance on extensive human-labeled datasets. Although SSL achieved groundbreaking success in [[concepts/natural-language-processing|natural language processing]] with models like GPT-1, GPT-2/3, and [[entities/chatgpt|ChatGPT]], its application to visual data, particularly video, proved more difficult. Direct pixel-level prediction in [[concepts/ai-generated-videos|generative video]] models often resulted in blurry or inaccurate outputs due to the inherent uncertainty and the astronomically vast number of potential pixel combinations in future frames, a significant hurdle that current [[concepts/generative-ai|generative AI]] struggles to reliably overcome.

A crucial breakthrough for self-supervised learning in [[concepts/computer-vision|vision]] involved tackling the "representation collapse" problem, which plagued early joint embedding architectures (such as Siamese Networks). This issue arises when models learn trivial, uninformative representations, failing to extract useful features from the data. While initial solutions involved computationally intensive contrastive learning, a pivotal advancement came with the Barlow Twins model (2021), co-developed by LeCun's team. This method not only encourages similar inputs to produce similar embeddings and dissimilar inputs to produce different ones but also explicitly reduces redundancy between the outputs of distinct neurons, in line with Horace Barlow's hypothesis. Subsequent joint embedding techniques like VicReg and DINO have further refined this approach, enabling self-supervised learning to achieve image classification accuracies comparable to or even exceeding fully supervised methods, critically, without requiring human-annotated labels.

LeCun's 2022 position paper, "A Path Towards Autonomous [[concepts/machine-intelligence|Machine Intelligence]]," lays out JEPA as a holistic architecture for building truly [[concepts/agentic-ai|autonomous AI systems]]. The core principle involves shifting from direct pixel-level reconstruction to predicting future states and the consequences of actions within an abstract, learned "embedding space." This foundation allows for the development of "[[concepts/world-models|world models]]" that can simulate and predict how actions affect the environment, enabling [[concepts/ai-agents|AI agents]] to reason, plan, and learn new [[concepts/skills|skills]] with minimal [[concepts/training|training]], akin to human and animal learning processes. LeCun’s "billion-dollar bet" is that these world models, capable of [[concepts/understanding-the-physical-world|understanding the physical world]] and predicting action outcomes, are the missing component for achieving human-level intelligence and creating reliable, [[concepts/ai-agentic-applications|agentic AI systems]] that can plan proactively and ensure safety, surpassing the limitations of current auto-regressive LLMs.

### Video Description & Links
#### Description
Apply to join Hudson River Trading: https://www.hudsonrivertrading.com/welchlabs
Welch Labs Book: https://www.welchlabs.com/resources/ai-book-ezrzm-msrmc
Patreon: https://www.patreon.com/c/welchlabs

Sections
0:00 - Intro
2:28 - The Problem with Deep Learning
4:17 - Intelligence is a Cake
5:15 - The Rise of Generative AI
8:00 - Blurry Images
8:54 - HRT is an awesome place to work
11:16 - But why so Blurry?
13:30 - Do our models need to be generative?
15:16 - Siamese Networks
17:53 - Representation Collapse
19:54 - Yann’s Epiphany & Barlow Twins
27:22 - DINO
28:58 - JEPA & World Models
34:09 - But is JEPA good?
36:19 - Welch Labs Book

Special thanks to: Yann LeCun, Stephane Deny, [[entities/david|David]] Fan, Nicolas Ballas

Clip of Yann from 1989:  https://www.youtube.com/watch?v=FwFduRA_L6Q

CNN Paper: http://yann.lecun.com/exdb/publis/pdf/lecun-89e.pdf
LeNet-5 paper: http://vision.stanford.edu/cs598_spring07/papers/Lecun98.pdf

Dashcam video
https://commons.wikimedia.org/wiki/File:Car_Driving_Faadou_4K_HDR-_Rural_road_-_Canton_-_327.webm

Image Credits
https://en.wikipedia.org/wiki/File:Dota_2_Gameplay_Aug_2017.jpg
https://commons.wikimedia.org/wiki/File:Felis_catus-cat_on_snow.jpg
https://commons.wikimedia.org/wiki/File:Magnificent_CME_Erupts_on_the_Sun_-_August_31.jpg
https://commons.wikimedia.org/wiki/File:Alcedo_atthis_-_Riserve_naturali_e_aree_contigue_della_fascia_fluviale_del_Po.jpg
https://commons.wikimedia.org/wiki/File:Biandintz_eta_zaldiak_-_modified2.jpg

V-JEPA2 Robot Arm Videos
https://ai.meta.com/research/vjepa/

Supporting [[concepts/code|code]]: https://github.com/WelchLabs/videos

Created by: Sam Baskin, Pranav Gundu, and Stephen Welch 
Content ID: CFAQJOTYQHT7JYIT

#### URLs
- https://www.hudsonrivertrading.com/welchlabs
- https://www.welchlabs.com/resources/ai-book-ezrzm-msrmc
- https://www.patreon.com/c/welchlabs
- https://www.youtube.com/watch?v=FwFduRA_L6Q
- http://yann.lecun.com/exdb/publis/pdf/lecun-89e.pdf
- http://vision.stanford.edu/cs598_spring07/papers/Lecun98.pdf
- https://commons.wikimedia.org/wiki/File:Car_Driving_Faadou_4K_HDR-_Rural_road_-_Canton_-_327.webm
- https://en.wikipedia.org/wiki/File:Dota_2_Gameplay_Aug_2017.jpg
- https://commons.wikimedia.org/wiki/File:Felis_catus-cat_on_snow.jpg
- https://commons.wikimedia.org/wiki/File:Magnificent_CME_Erupts_on_the_Sun_-_August_31.jpg
- https://commons.wikimedia.org/wiki/File:Alcedo_atthis_-_Riserve_naturali_e_aree_contigue_della_fascia_fluviale_del_Po.jpg
- https://commons.wikimedia.org/wiki/File:Biandintz_eta_zaldiak_-_modified2.jpg
- https://ai.meta.com/research/vjepa/
- https://github.com/WelchLabs/videos

## Related Concepts
- [[concepts/joint-embedding-predictive-architecture-jepa|Joint Embedding Predictive Architecture (JEPA)]] — [Wikipedia](https://en.wikipedia.org/wiki/Joint_Embedding_Predictive_Architecture_%28JEPA%29)
- [[concepts/large-language-models|Large Language Models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLMs%29)

## Related Entities
- [[entities/yann-lecun|Yann LeCun]] — [Wikipedia](https://en.wikipedia.org/wiki/Yann_LeCun)
- [[entities/welch-labs|Welch Labs]] — [Wikipedia](https://en.wikipedia.org/wiki/Welch_Labs)