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
---
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
distinguished by their ability to ingest and/or generate multiple [[concepts/data-modalities|data modalities]], moving beyond the single-modality limitations of earlier AI
systems like [[concepts/large-language-models|Large Language Models (LLMs)]] that primarily process text.

Keen illustrates two primary approaches to achieving [[concepts/multimodality|multimodality]]. The
first, **[Feature-Level Fusion](https://en.wikipedia.org/wiki/Feature-Level_Fusion)**, involves connecting separate, [[concepts/custom-models|specialized models]]. For example, a text-based LLM might be paired with a [[concepts/computer-vision|vision]]
encoder. The [vision encoder](https://en.wikipedia.org/wiki/Vision_Encoder) processes image data, extracts numerical
features (a feature vector), and then passes these summarized features to
the LLM. While still used for specialized enterprise tasks due to
[[concepts/cost-effectiveness|cost-effectiveness]] and modularity, this method has a significant drawback:
information can be lost or compressed during the transfer between models.
The LLM only "sees" a numerical description of the image, not the raw
visual data itself.

The second, more advanced approach is **Native [[concepts/multimodality|Multimodality]]**. This method
integrates different data types into a single, unified model by embedding
all modalities into a "[shared vector space](https://en.wikipedia.org/wiki/Shared_Vector_Space)." In this space, different types
of data that represent similar concepts (e.g., the word "cat" and an image
of a cat) are positioned closely together. This eliminates the need for
separate models and intermediate translations, allowing the AI to reason
about all modalities cohesively and without significant information loss.

The video further explores the application of native [[concepts/modality|multimodality]] to video
data, introducing the concept of **Temporal [[concepts/reasoning|Reasoning]]**. Older methods for
processing video involved sampling individual frames and [[concepts/running|running]] them
through a vision encoder, often losing the crucial temporal context of
motion and sequence. Native [[concepts/unified-multimodal-models|multimodal models]], however, embed video with
its temporal dimension intact. They process "[spatial-temporal patches](https://en.wikipedia.org/wiki/Spatial-temporal_patches),"
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
- [[concepts/multimodal-ai|Multimodal AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Multimodal_AI)
- [[concepts/data-management|Data modality]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_modality)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/text|Text]] — [Wikipedia](https://en.wikipedia.org/wiki/Text)
- [[concepts/images|Images]] — [Wikipedia](https://en.wikipedia.org/wiki/Images)
- [[concepts/audio|Audio]] — [Wikipedia](https://en.wikipedia.org/wiki/Audio)
- [[concepts/lidar|Lidar]] — [Wikipedia](https://en.wikipedia.org/wiki/Lidar)
- [[concepts/thermal-imaging|Thermal imaging]] — [Wikipedia](https://en.wikipedia.org/wiki/Thermal_imaging)
- Feature-Level Fusion — [Wikipedia](https://en.wikipedia.org/wiki/Feature-Level_Fusion)
- Native [[concepts/modality|Multimodality]] — [Wikipedia](https://en.wikipedia.org/wiki/Native_Multimodality)
- Shared Vector Space — [Wikipedia](https://en.wikipedia.org/wiki/Shared_Vector_Space)
- [Temporal Reasoning](https://en.wikipedia.org/wiki/Temporal_Reasoning) — [Wikipedia](https://en.wikipedia.org/wiki/Temporal_Reasoning)
- Spatial-temporal patches — [Wikipedia](https://en.wikipedia.org/wiki/Spatial-temporal_patches)
- [Any-to-Any Generation](https://en.wikipedia.org/wiki/Any-to-Any_Generation) — [Wikipedia](https://en.wikipedia.org/wiki/Any-to-Any_Generation)
- Vision Encoder — [Wikipedia](https://en.wikipedia.org/wiki/Vision_Encoder)
- [Feature Vector](https://en.wikipedia.org/wiki/Feature_Vector) — [Wikipedia](https://en.wikipedia.org/wiki/Feature_Vector)
- [[concepts/computer-vision|Computer Vision]] — [Wikipedia](https://en.wikipedia.org/wiki/Computer_Vision)
- [[concepts/data-embedding|Data Embedding]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_Embedding)
- [Tokenization](https://en.wikipedia.org/wiki/Tokenization) — [Wikipedia](https://en.wikipedia.org/wiki/Tokenization)
- [[concepts/single-forward-pass-processing|Multimodal Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Multimodal_Learning)
- [Information Loss in Fusion](https://en.wikipedia.org/wiki/Information_Loss_in_Fusion) — [Wikipedia](https://en.wikipedia.org/wiki/Information_Loss_in_Fusion)
- Modular [[concepts/ai-models|AI Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Modular_AI_Models)
- [[concepts/multimodal-ai|Multimodal Reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/Multimodal_Reasoning)
- [Multimodal Generation](https://en.wikipedia.org/wiki/Multimodal_Generation) — [Wikipedia](https://en.wikipedia.org/wiki/Multimodal_Generation)
