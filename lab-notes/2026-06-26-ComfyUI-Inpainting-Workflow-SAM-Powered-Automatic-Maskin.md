---
title: "ComfyUI Inpainting Workflow: SAM-Powered Automatic Masking and Targeted Image Editing"
date: 2026-06-26
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# ComfyUI Inpainting Workflow: SAM-Powered Automatic Masking and Targeted Image Editing
Generated: 2026-06-26 · API: Gemini 2.5 Flash · Modes: Summary

---

## ComfyUI Inpainting Workflow: SAM-Powered Automatic Masking and Targeted Image Editing
**Clip title:** Build a ComfyUI Inpainting Workflow and Actually Understand It | Build With Me [EP. 3]
**Author / channel:** LoRAtech
**URL:** https://www.youtube.com/watch?v=fJFnHkU6hzo

### Summary
This video, "Build With Me [Ep. 3]," delves into the advanced application of ComfyUI for image inpainting. The core objective is to demonstrate how to edit specific parts of a photograph, such as an outfit, without the tedious process of manual mask creation. Instead, the tutorial leverages the powerful SAM3 (Segment Anything Model) to automatically generate precise masks based on simple text prompts like "person" or "face," significantly streamlining the workflow for targeted image modifications.

The tutorial begins by outlining the necessary setup, highlighting that this is the first episode in the series requiring custom node packs. Viewers are guided through installing essential nodes such as `ComfyUI-InpaintCropAndStitch`, `ComfyUI-essentials`, and `ComfyUI-KJNodes` using the ComfyUI Manager, followed by a crucial system restart. The initial workflow construction involves loading fundamental models like the Diffusion Model (specifically Z-image Turbo), CLIP (Gwen 3 4B), and VAE (ae_safetensors). Standard positive and negative (Conditioning Zero Out) text prompts are then configured, which will later guide the image generation within the masked area.

The innovative aspect of this workflow lies in its automated masking and inpainting pipeline. An initial source image is loaded and resized to an optimal dimension (e.g., 1280px by its longer edge). This resized image, along with a textual segmentation prompt (e.g., "person"), is fed into the `SAM3 Detect` node, which uses the pre-loaded SAM3 model to automatically create a precise mask of the specified object. To ensure seamless integration of the inpainted region, the generated mask is then processed by `Grow Mask With Blur` to soften its edges and subsequently by `Inpaint Crop Impr.`, which crops the original image data to the masked region's dimensions while preserving context. These processed mask and image inputs are then fed into the `InpaintModelConditioning` node.

With the masking and cropping prepared, the workflow proceeds to the generative stage. The `Ksampler (Efficient)` node, leveraging the loaded Diffusion Model, positive prompt, and the conditioned inpainting model, performs the core image generation. The `denoise` setting, crucial for controlling how much the original masked area is re-imagined (recommended 0.6-0.8 for image-to-image), is adjusted alongside the `steps` parameter (e.g., 9 for Z-image Turbo, which is a faster "turbo" model). The generated latent image is then decoded back into a viewable pixel image via `VAE Decode`. Finally, the `Inpaint Stitch Impr.` node seamlessly stitches the newly generated content into the original full-size image, which is then saved as the final output. The video emphasizes experimenting with settings to achieve desired results, noting that higher quality source images generally lead to better outcomes.

In conclusion, this episode provides a comprehensive and advanced tutorial for intelligent image inpainting within ComfyUI. By automating the masking process with SAM3 and integrating precise cropping and blending techniques, users can achieve highly targeted image modifications. The workflow introduces several custom nodes and intricate connections, offering a significant leap in ComfyUI proficiency. The presenter encourages continued engagement with the series for even deeper dives into complex AI image generation workflows, promising more advanced content in the future.

### Video Description & Links
#### Description
Edit just one part of a photo using nothing but a text prompt. This ComfyUI inpainting workflow uses Z-Image Turbo, automatic SAM3 text-guided masking, and an improved crop-and-stitch pipeline to regenerate a single region of an image while leaving everything else completely untouched. No manual brush masking, no detector chains to wire up, just describe what you want changed and SAM3 finds it for you.

This is Build With Me [EP. 3] — same as the last two episodes, we're not downloading a finished template, we're building this node-by-node from a blank canvas so you actually understand what every piece is doing.

In this video I break down the full ComfyUI workflow node-by-node: how SAM3 reads a text prompt to automatically generate a mask, how Inpaint Crop (Improved) isolates just that region before sampling, how Z-Image Turbo regenerates only the masked crop, and how Inpaint Stitch (Improved) pastes the result back into the full-resolution photo with blended edges. I also cover the Conditioning Zero Out trick for skipping a real negative prompt, mask growth and blur for clean blending, and exactly which denoise range to use and why. This is also the first episode in the series using custom node packs, so I walk through precisely which ones you need and how to install them.

🔗 LINKS
Join the Discord (community, support, free workflows from past episodes): https://discord.gg/2bqQXKxsxg

1-on-1 Consultations / Custom Workflow Builds / LoRA Training: Message me on Discord for current availability and pricing — covers ComfyUI setup, model selection, LoRA training, and AI influencer growth strategy

Use my RunPod referral link to add $10 in credits and receive an extra $5 for free (cloud GPUs for ComfyUI if you don't have local VRAM): https://runpod.io?ref=jc6190fx

📦 SAM3 MODEL DOWNLOAD (RunPod / terminal)
wget -O /workspace/ComfyUI/models/checkpoints/sam3.1_multiplex_fp16.safetensors "https://huggingface.co/Comfy-Org/sam3.1/resolve/main/checkpoints/sam3.1_multiplex_fp16.safetensors?download=true"
(Adjust the destination path if your ComfyUI install isn't at /workspace/ComfyUI/)

📌 WHAT'S COVERED
* Automatic text-guided masking with SAM3 — no manual brush masking
* Z-Image Turbo inpainting on the cropped masked region only
* Inpaint Crop (Improved) + Inpaint Stitch (Improved) for seamless paste-back
* The Conditioning Zero Out trick (skip writing a real negative prompt)
* Mask growth + blur for clean, seamless edge blending
* Denoise explained: the 0.6–0.8 range and what higher vs. lower actually does
* First-time custom node pack breakdown: which packs you need and how to install them
* Built entirely from scratch on screen — no template, no pre-built file for this one

This workflow is built for anyone working with AI-generated people, AI influencer content, or photo editing in ComfyUI who wants an automated, text-prompted alternative to manual masking — whether you're swapping an outfit on a generated character or doing general inpainting on a real photo. Follow along and build it with me, then adapt it to your own subjects and source photos.

If this helped you, subscribe for more ComfyUI workflows, AI image generation breakdowns, and LoRA training tutorials every week.

────────────────────────
HASHTAGS:
#ComfyUI #ComfyUIWorkflow #AIInpainting #SAM3 #ZImageTurbo #StableDiffusion #ComfyUITutorial #AIInfluencer #LoraTraining #GenerativeAI #AIImageGeneration #ComfyUINodes #AIPhotoEditing

TAGS:
comfyui, comfyui workflow, comfyui inpainting, ai inpainting, image inpainting, automatic masking, sam3, sam 3.1, sam3 comfyui, text guided segmentation, z image turbo, z-image turbo comfyui, comfyui custom nodes, comfyui custom node packs, inpaint crop and stitch, comfyui kjnodes, comfyui tutorial, comfyui masking, ai outfit swap, ai photo editing, comfyui nodes explained, denoise tutorial comfyui, build with me, comfyui from scratch, comfyui runpod, ai influencer content, lora training, character lora, generative ai tools, stable diffusion inpainting, comfyui beginners tutorial

#### URLs
- https://discord.gg/2bqQXKxsxg
- https://runpod.io?ref=jc6190fx
- https://huggingface.co/Comfy-Org/sam3.1/resolve/main/checkpoints/sam3.1_multiplex_fp16.safetensors?download=true"
