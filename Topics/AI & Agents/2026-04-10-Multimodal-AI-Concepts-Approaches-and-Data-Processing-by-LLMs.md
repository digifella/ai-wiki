---
wiki-ingested: true
title: "Multimodal AI Concepts Approaches and Data Processing by LLMs"
created: "2026-04-10 14:05"
date: 2026-04-10
source: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Multimodal AI: Concepts, Approaches, and Data Processing by LLMs
**Clip title:** What is Multimodal AI? How LLMs Process Text, Images, and
More
**Author / channel:** [[entities/ibm-technology|IBM Technology]]
**URL:** https://www.youtube.com/watch?v=J51oZYcNvP8

### Summary
The video, presented by [[entities/martin-keen|Martin Keen]] of IBM, introduces and explains the
concept of [[concepts/multimodal-ai|Multimodal AI]]. It begins by defining "modality" in the context
of AI as a [[concepts/data-modality|data modality]], referring to different types of data such as
text, images, audio, lidar, and thermal imaging. Multimodal [[concepts/ai-models|AI models]] are
distinguished by their ability to ingest and/or generate multiple data modalities, moving beyond the single-modality limitations of earlier AI
systems like [[concepts/large-language-models|Large Language Models (LLMs)]] that primarily process text.

Keen illustrates two primary approaches to achieving multimodality. The
first, **Feature-Level Fusion**, involves connecting separate, [[concepts/custom-models|specialized models]]. For example, a text-based LLM might be paired with a [[concepts/computer-vision|vision]]
encoder. The vision encoder processes image data, extracts numerical
features (a feature vector), and then passes these summarized features to
the LLM. While still used for specialized enterprise tasks due to
cost-effectiveness and modularity, this method has a significant drawback:
information can be lost or compressed during the transfer between models.
The LLM only "sees" a numerical description of the image, not the raw
visual data itself.

The second, more advanced approach is **Native Multimodality**. This method
integrates different data types into a single, unified model by embedding
all modalities into a "shared vector space." In this space, different types
of data that represent similar concepts (e.g., the word "cat" and an image
of a cat) are positioned closely together. This eliminates the need for
separate models and intermediate translations, allowing the AI to reason
about all modalities cohesively and without significant information loss.

The video further explores the application of native [[concepts/modality|multimodality]] to video
data, introducing the concept of **Temporal [[concepts/reasoning|Reasoning]]**. Older methods for
processing video involved sampling individual frames and running them
through a vision encoder, often losing the crucial temporal context of
motion and sequence. Native [[concepts/unified-multimodal-models|multimodal models]], however, embed video with
its temporal dimension intact. They process "spatial-temporal patches,"
essentially 3D cubes of information that capture both visual data and
[[concepts/exercise|movement]] over a short window of time. This means the model doesn't have to
infer motion; it's inherently part of the tokenized data.

A significant advantage of native multimodal models, especially those
incorporating temporal [[concepts/reasoning|reasoning]], is their capability for **Any-to-Any
Generation**. This allows the model to accept any combination of input
modalities (e.g., text, image, video) and generate coherent output in any
combination of modalities. For instance, one could ask the model (via text
and an image of a phone problem) how to fix something, and it could respond
with text [[concepts/instructions|instructions]] and a generated video demonstrating the [[concepts/solution|solution]].
This holistic understanding and generation across diverse data types
represent the gold standard for multimodal AI today, enabling more
comprehensive and intuitive interactions.

## Related Concepts
- [[concepts/multimodal-ai|Multimodal AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Multimodal_learning)
- [[concepts/data-management|Data modality]]
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/text|Text]]
- [[concepts/images|Images]] — [Wikipedia](https://en.wikipedia.org/wiki/Image)
- [[concepts/audio|Audio]]
- [[concepts/lidar|Lidar]] — [Wikipedia](https://en.wikipedia.org/wiki/Lidar)
- [[concepts/thermal-imaging|Thermal imaging]] — [Wikipedia](https://en.wikipedia.org/wiki/Thermography)
- Native [[concepts/modality|Multimodality]]
- [Feature Vector](https://en.wikipedia.org/wiki/Feature_%28machine_learning%29) — [Wikipedia](https://en.wikipedia.org/wiki/Feature_%28machine_learning%29)
- [[concepts/computer-vision|Computer Vision]] — [Wikipedia](https://en.wikipedia.org/wiki/Computer_vision)
- [[concepts/data-embedding|Data Embedding]]
- [[concepts/single-forward-pass-processing|Multimodal Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Multimodal_learning)
- Modular [[concepts/ai-models|AI Models]]
- [[concepts/multimodal-ai|Multimodal Reasoning]]
