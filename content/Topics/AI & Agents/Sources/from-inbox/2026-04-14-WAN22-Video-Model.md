---
wiki-ingested: true
title: "WAN2.2 Video Model"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: multimodal-generative-media
---
# WAN2.2 Video Model

---
---
<https://www.youtube.com/watch?v=JukIN2g-w-M>
The video provides a detailed guide on installing and using the freshly released [[entities/wan-22|Wan 2.2]] [[concepts/text-to-video|text-to-video]] and [[concepts/image-to-video|image-to-video]] [[concepts/models|models]] locally with [[entities/comfyui|ComfyUI]]. The speaker, [[entities/fahad-mirza|Fahad Mirza]], also explains the [[concepts/architectural-improvements|architectural improvements]] of Wan 2.2 and demonstrates its capabilities with several prompts.
Here's a [[concepts/summary|summary]] of the video:

* **Introduction to Wan 2.2 (0:00-0:06, 0:21-0:37)**: The video [[concepts/highlights|highlights]] the high-quality [[concepts/video-generation|video generation]] capabilities of the newly released Wan 2.2 model. It [[concepts/notes|notes]] that Wan 2.2 is initially available with three different models: a 5-billion parameter model for both text-to-video and image-to-video, and two 14-billion parameter models specifically for text-to-video and video-to-video.
* **ComfyUI Installation Prerequisites (1:23-2:18)**: The speaker emphasizes the need for the latest version of ComfyUI. He advises users to re-install ComfyUI from scratch rather than upgrading if they encounter issues, recommending his "Easiest [[concepts/tutorial|Tutorial]] on ComfyUI" video for step-by-step installation.
* **Downloading Wan 2.2 Models (2:54-4:52)**: Users need to download three main models for the 5-billion parameter version: **Text Encoder**: A smaller text encoder (6.7 GB) located in the `ComfyUI/models/text_encoders` directory. This model converts text prompts into numerical [[concepts/vector-representations|embeddings]]. **Variational Autoencoder (VAE)**: A VAE model (1.41 GB) that converts images from latent space to pixel space, to be saved in `ComfyUI/models/vae`. **Diffusion Model**: The main diffusion model (10 GB) found in `ComfyUI/models/diffusion_models`. The speaker also mentions that separate videos [[entities/will|will]] be made for the 14-billion parameter models.
* **Text-to-Video Demonstrations (4:54-7:30)**: **Volcano and Fox (4:54-6:25)**: A video is generated using the prompt "drone shot of a volcano erupting with a fox walking on it." The generated video shows a fox walking on a hill with a volcano erupting in the background, demonstrating the model's ability to combine elements. **Steam-Powered Car (5:12-7:30)**: Another text-to-video example uses the prompt "A vintage steam-powered car speeds across a red sand dune at sunset, kicking up dust under a sky filled with two moons, while ancient ruins peek through the eroded cliffs in the distance." The resulting video impressively depicts the requested elements, including a steam-powered car, red sand dunes, two moons, and ancient ruins. [[concepts/vram|VRAM]] consumption for the 5-billion parameter model is noted to be over 20 GB.
* **Image-to-Video Demonstrations (7:36-13:51)**: **Fennec Girl (7:36-11:17)**: The [[concepts/workflow|workflow]] is switched to image-to-video. A positive prompt "a cute anime girl with fennec ears and a fluffy tail walking in a beautiful field" is used with a reference image of an anime girl. The generated video shows subtle movements of the girl in the field. **Mysterious Man (11:18-12:55)**: A custom AI-altered image of the speaker, inspired by Pulp Fiction, is used as the reference image. The prompt is "A mysterious man in a tailored suit walking through a rain-soaked city at night, neon lights reflecting on the wet streets, tension building with every step." The generated video successfully animates the image with rain effects and neon reflections, creating a tense atmosphere. **Woman with Sign (12:56-13:51)**: Another custom image of a woman is used with a prompt requesting her to hold a sign saying "Like the video." While the model attempts to generate the text, it is not perfectly legible. However, the overall movement and adherence to the other aspects of the prompt are good.
* **Architectural Innovations of Wan 2.2 (9:00-10:15)**: Wan 2.2 builds on its predecessor with key innovations: **[[entities/mixture-of-experts|Mixture-of-Experts]] (MoE) [[concepts/architecture|Architecture]]**: It employs two specialized [[concepts/agents|agents]]: one for high-noise early denoising stages (global structure management) and another for low-noise later stages (fine detail refinement). **Parameter Efficiency**: Despite a total [[concepts/parameter-count|parameter count]] of 27 billion, it maintains [[concepts/inference|inference]] efficiency by activating only 14 billion parameters per step. **Expanded [[concepts/training|Training]] Dataset**: The model uses a substantially expanded training dataset, with details available on its [[entities/hugging-face|Hugging Face]] model card.
* **Sponsors (10:16-10:49, 11:57-12:10)**: The video acknowledges its sponsors, Eigent (a multi-[[concepts/agent-workflow|agent workflow]] desktop application) and Massed Compute (a [[concepts/cloud-computing|cloud computing]] infrastructure provider).

In conclusion, the Wan 2.2 model demonstrates significant advancements in video generation from both text and images, offering high-quality results. While some minor improvements are noted for specific scenarios like text rendering, its overall performance is highly impressive.