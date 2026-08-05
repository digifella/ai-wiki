---
type: concept
domain: creative-pursuits
tags:
  - "generative-ai"
  - "diffusion-models"
  - "image-synthesis"
  - "video-generation"
  - "denoising-process"
  - "stable-diffusion"
aliases:
  - "Diffusion Models"
  - "Generative Diffusion"
  - "Denoising Diffusion Probabilistic Models"
  - "Image and Video Generators"
summary: Image and video diffusion models are generative AI architectures that create data by iteratively denoising random Gaussian distributions through forward and reverse processes.
updated: 2026-07-15
group: video-content-systems
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Image and Video Diffusion Models

**Definition:** A class of [[concepts/generative-ai]] models that generate data (images, video, [[concepts/audio-modality|audio]], text) by iteratively [[concepts/noise-reduction-techniques|denoising]] a random [[concepts/bell-curve|Gaussian distribution]]. The process involves two phases: a forward diffusion process that adds noise to data until it becomes pure noise, and a reverse diffusion process that learns to remove noise to reconstruct the original data distribution.

## Core Mechanism
*   **Forward Process:** $x_0 \to x_1 \to ... \to x_T$, where $T$ is the final time step resulting in pure Gaussian noise.
*   **Reverse Process:** Predicts noise $\epsilon_\theta(x_t, t)$ at each timestep to reconstruct $x_{t-1}$ from $x_t$.
*   **Loss Function:** Typically optimized using Mean Squared Error (MSE) between predicted and actual noise.

## Modalities & Applications
### Image Generation
*   Dominant architecture for high-fidelity [[concepts/image-synthesis]].

### Video Generation
*   Extends spatial denoising to temporal coherence, treating video as a sequence of frames or 3D volumes.
*   **[[concepts/computational-scaling|Scaling]] Insights:** [[lab-notes/2026-07-15-Dielemans-DeepMind-Insights-Building-Large-Scale-Diffusi|Dieleman's DeepMind Insights: Building Large-Scale Diffusion Models for Image and Video]] highlights technical strategies for building large-scale models, focusing on efficient training dynamics and architectural choices for [[concepts/video-generation|video generation]] at [[concepts/2026-04-29-google-deepmind|Google DeepMind]].

## References
*   [Dieleman's DeepMind Insights: Building Large-Scale Diffusion Models for Image and Video](https://www.youtube.com/watch?v=iBzlS0OHCTY)
