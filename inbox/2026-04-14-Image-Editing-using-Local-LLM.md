---
wiki-ingested: true
title: "Image Editing using Local LLM"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[concepts/image-editing|Image Editing]] using [[concepts/local-llm|Local LLM]]

---
---
<https://www.youtube.com/watch?v=dHdjjwWzrjM>
This video introduces **[[entities/hidream-e11|HiDream-E1.1]]**, an updated instruction-based [[concepts/ai-image-editing|AI image editing]] model that the [[entities/speaker|speaker]] claims is currently the number one [[concepts/open-source|open-source]] image editor available. It supports [[concepts/dynamic-resolution|dynamic resolution]] and boasts improved image quality and editing [[concepts/accuracy|accuracy]] compared to previous [[concepts/models|models]] like OmniGen2 and [[entities/flux-kontext-dev|Flux Kontext Dev]].
**Key [[concepts/capabilities|Capabilities]] and Demonstrations:**

* **[[concepts/detail-removal|Detail Removal]]:** Effectively removes numerous raindrops from a busy street scene, maintaining background consistency.
* **Appearance and Background Change:** Transforms a woman in a city street scene to wear a cowboy hat and red dress, relocating her to a snowy forest while remarkably preserving her facial features.
* **[[concepts/photo-restoration|Photo Restoration]] and [[concepts/colorization|Colorization]]:** Successfully restores and colorizes a damaged, old [[concepts/black-and-white|black-and-white]] photograph, maintaining facial details and general likeness.
* **Creative Inpainting/Outpainting:** Adds Mount Fuji to a painting in a living room, seamlessly integrating it into the existing artwork. Changes a red [[entities/tesla|Tesla]] in a snowy landscape to blue and adds mountains to the background, preserving micro-details like grass blades. Transforms a 2D anime image into a 3D Pixar [[concepts/style|style]]. Converts an anime image of characters into a realistic photo style. Colorizes a black-and-white manga panel.
* **Text Editing:** Can change text within an image (e.g., "JOKER" to "CLOWN" on a movie poster), though minor font fidelity loss might occur.
* **Focus and Blur:** Adjusts focus by making a foreground flower sharp and blurring the background in a dark scene.
* **Object Removal:** Seamlessly removes tattoos from a man's arms and objects from a table (even handling occluded areas).
* **Artistic Style Transfer:** Converts real-life photos into styles like "Simpsons" or "South Park."

**Performance and Ranking:** HiDream-E1.1 currently ranks #4 on the Artificial Analysis Image Arena Leaderboard for "Image Editing," placing it first among free and [[concepts/reasoning-models|open-source models]], significantly outperforming Flux Kontext Dev. The top three models on this leaderboard are closed-source and paid.
**Installation Guide (using [[concepts/comfyui|ComfyUI]]):** The video provides a detailed installation [[concepts/tutorial|tutorial]] for [[concepts/running|running]] HiDream-E1.1 offline in ComfyUI:

1. **Prerequisites:** Assumes ComfyUI is already installed. If not, the speaker recommends a separate tutorial.
2. **Model Downloads:** Users need to download several model [[concepts/files|files]] from HuggingFace (specifically the `ComfyUI-Org/HiDream-I1_ComfyUI` and `ND911/HiDream-E1_1_bf16_ggufs` repositories): **Text Encoders:** Four separate files (e.g., `clip_g_hidream.safetensors`, `llama_3_1_8b_instruct.fp8_scaled.safetensors`), totaling several gigabytes. These go into `ComfyUI/models/text_encoders`. **VAE:** One file (`ae.safetensors`), around 335 MB, goes into `ComfyUI/models/vae`. **Diffusion Model (Main Model):** The _full_ HiDream-E1.1 model (`hidream_e1_1_bf16.safetensors`) is 32GB and requires over 32GB of [[concepts/vram|VRAM]] (unsuitable for most consumer GPUs). For lower VRAM GPUs, _quantized_ versions ([[concepts/gguf-format|GGUF format]]) are available, ranging from 6.57GB (Q2, highest compression, lower quality) to 18.7GB (Q8, lowest compression, higher quality). Users should choose a model slightly smaller than their GPU's VRAM. These go into `ComfyUI/models/diffusion_models`.
3. **ComfyUI [[concepts/setup|Setup]]:** Update ComfyUI via the Manager. Download the pre-built [[concepts/workflow|workflow]] file (`1_hidream_workflow.json`) from the ND911 HuggingFace repository. Drag and drop the downloaded JSON workflow file directly into the ComfyUI interface. Select the correct downloaded models (diffusion model, text encoders, VAE) from the dropdown menus within the ComfyUI [[concepts/nodes|nodes]].
4. **Usage:** Input an image and a text prompt describing the desired edit. The video explains key [[concepts/parameters|parameters]] like: **CFG (Classifier-Free Guidance):** Controls how strictly the AI follows the text prompt (higher value = more literal). **Image CFG:** Controls how much the AI adheres to the original image's details. **Sampler Name & Scheduler:** The algorithm used for image generation (default is `euler` and `simple`). **Steps:** Number of iterations for image generation (20 is a good balance between [[concepts/speed|speed]] and quality). **Denoise:** How much noise is removed from the image.

**Conclusion:** HiDream-E1.1 is highly impressive for its ability to understand complex natural language [[concepts/instructions|instructions]] and perform various image edits, particularly excelling at preserving facial identity during transformations and intricate micro-editing. While minor issues like occasional edge noise or slight font inconsistencies in text editing were observed, its overall performance makes it a leading free and open-source AI image editor. The speaker suggests using it interchangeably with Flux Kontext Dev depending on the specific use case.