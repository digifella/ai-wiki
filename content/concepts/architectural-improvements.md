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
updated: 2026-05-01
---
# Architectural Improvements

Architectural Improvements refers to enhancements made to the design and [[concepts/structure|structure]] of [[concepts/artificial-intelligence-models|machine learning models]], particularly in [[concepts/video-generation|video generation]] systems. The [[concepts/14b-parameter-model|Wan 2.2]] model represents a significant [[concepts/iteration|iteration]] in [[concepts/text-to-video|text-to-video]] and [[concepts/image-to-video-model|image-to-video generation]], incorporating refined architectural decisions that improve performance, quality, and efficiency. These improvements address computational requirements and output fidelity compared to earlier versions, making the model more practical for [[concepts/deployment|deployment]] on consumer-grade [[concepts/hardware|hardware]].

## Local Deployment with ComfyUI

Wan 2.2 can be installed and operated locally using ComfyUI, a node-based interface designed for [[concepts/running|running]] machine learning models on consumer computers. ComfyUI provides a visual workflow environment where users can configure [[concepts/active-parameters|model parameters]], input prompts or [[concepts/images|images]], and manage processing pipelines without requiring [[concepts/command-line-interface|command-line]] knowledge. This approach allows creators to run video generation tasks on their own systems rather than relying on [[concepts/cloud-computing|cloud services]], providing greater control over resource allocation and data [[concepts/privacy|privacy]].

## Setup and Operation

Installing Wan 2.2 within ComfyUI typically involves downloading model [[concepts/weights|weights]], placing them in the appropriate directory structure, and loading them through the application interface. Users can then create workflows combining text or image inputs with [[concepts/inference|model inference]] nodes to generate video outputs. The specific [[concepts/memory|memory]] requirements and processing time depend on hardware specifications, video length, and quality settings selected during configuration.

## Source Notes
- 2026-04-29: Google DeepMind
- 2026-04-30: NVIDIA Nemotron 3 · [▶ source](https://www.youtube.com/watch?v=XNaI4Xd4qXc)