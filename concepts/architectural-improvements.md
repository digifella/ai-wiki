---
type: concept
domain: creative-pursuits
group: design-systems-ui-infographics
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
updated: 2026-07-13
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Architectural Improvements

Architectural improvements in AI refer to enhancements made to the underlying design and structure of machine learning models, particularly in video generation systems. These improvements involve refinements to how models process information, organize computational layers, and manage sequential data generation. Such structural changes directly affect the quality, efficiency, and practical capabilities of model outputs.

## Wan 2.2 Model

Wan 2.2 is a 14-billion parameter model designed for both text-to-video and image-to-video generation tasks. The model can be run locally using ComfyUI, a node-based interface for working with diffusion models and other generative systems. This setup allows users to generate video content from textual descriptions or static images without relying on cloud-based services.

## Installation and Usage

To use Wan 2.2 locally, users install the model within ComfyUI by downloading the model weights and configuring the appropriate nodes for their desired task. The text-to-video workflow accepts text prompts and generates corresponding video sequences, while the image-to-video workflow takes a static image as input and extends it into motion-based video content. The node-based architecture of ComfyUI allows for customization of parameters such as sampling steps, guidance scales, and output resolution to control generation quality and behavior.

## Source Notes
- 2026-04-29: Google DeepMind
- 2026-04-30: NVIDIA Nemotron 3 · [▶ source](https://www.youtube.com/watch?v=XNaI4Xd4qXc)
