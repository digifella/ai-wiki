---
type: concept
domain: creative-pursuits
tags:
  - "video-generation"
  - "text-to-video"
  - "image-to-video"
  - "comfyui"
  - "wan-2.2"
  - "model-installation"
  - "ai-models"
aliases:
  - "WAN 2.2 Video Model Guide"
  - "Local Video Model Setup"
summary: A guide for installing and using the Wan 2.2 text-to-video and image-to-video models locally with ComfyUI.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
group: design-systems-ui-infographics
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Architectural Improvements

Architectural improvements in [[concepts/ai-technologies|artificial intelligence]] refer to enhancements made to the underlying design and structure of [[concepts/artificial-intelligence-models|machine learning models]], particularly within [[concepts/video-generation|video generation]] systems. These refinements focus on how models process information, organize computational layers, and manage sequential data generation. Such structural changes directly influence the quality, efficiency, and practical capabilities of model outputs by optimizing the [[concepts/flow|flow]] of data through the network.

The [[concepts/14b-parameter-model|Wan 2.2]] model, a 14-billion parameter system, exemplifies these advancements by offering robust support for both [[concepts/text-to-video|text-to-video]] and [[concepts/image-to-video-model|image-to-video generation]]. Designed for [[concepts/local-control|local deployment]], it integrates with [[concepts/comfyui-ecosystem|ComfyUI]] to provide users with a flexible workflow for creating high-fidelity [[concepts/video-resource|video content]]. The model's architecture prioritizes stability and performance, allowing for detailed control over the generation process while maintaining manageable resource requirements for local hardware.

Implementing Wan 2.2 locally requires specific configuration steps within the ComfyUI environment to ensure optimal performance. Users must install the necessary [[concepts/model-weights|model weights]] and [[concepts/custom-nodes|custom nodes]] to facilitate the interaction between the [[concepts/text-prompts|text prompts]] or input images and the video generation pipeline. This setup enables creators to leverage the model's improved architectural efficiency for producing coherent and visually consistent video sequences without relying on external [[concepts/cloud-based-services|cloud services]].
## Source Notes
- 2026-04-29: Google DeepMind
- 2026-04-30: NVIDIA Nemotron 3 · [▶ source](https://www.youtube.com/watch?v=XNaI4Xd4qXc)
