---
title: "Dieleman's DeepMind Insights: Building Large-Scale Diffusion Models for Image and Video"
date: 2026-07-15
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Dieleman's DeepMind Insights: Building Large-Scale Diffusion Models for Image and Video
Generated: 2026-07-15 · API: Gemini 2.5 Flash · Modes: Summary

---

## Dieleman's DeepMind Insights: Building Large-Scale Diffusion Models for Image and Video
**Clip title:** Off the Radar - Sander Dieleman (Google DeepMind) on Diffusion Models
**Author / channel:** Hexa
**URL:** https://www.youtube.com/watch?v=iBzlS0OHCTY

### Summary
Sander Dieleman, a Research Scientist at Google DeepMind, delivered a technical but intuitively focused presentation on "Diffusion models for image and video generation." He began by sharing his journey, which included a PhD in AI for music, a stint at Spotify, and joining DeepMind in 2015. Initially involved with the AlphaGo project, his focus shifted to generative AI. He noted the remarkable progress in this field, from generating rudimentary 32x32 pixel images in 2016 to today's ability to produce flagship products. Dieleman structured his talk around eight critical aspects involved in building large-scale image and video generation models.

The initial aspects covered data and representation. Dieleman stressed the paramount importance of data curation for achieving high-quality results, highlighting its often-underestimated value in academic research compared to industry applications. Regarding data representation, he explained that raw pixel or video data is too massive, necessitating the use of "latent models" or "fancy pixels." These are a form of custom, adaptive compression designed to preserve the specific topological and statistical structures crucial for generative models, unlike standard compression algorithms that discard too much vital information. For the core modeling technique, Dieleman focused on "diffusion," an iterative denoising process where a neural network learns to gradually remove noise from an image to reconstruct a clean version. Architecturally, these denoising networks have evolved from U-Nets, originally borrowed from biomedical image segmentation, to today's dominant use of Transformers due to their superior performance and scalability.

When it comes to training and sampling, scale is a significant factor. Dieleman discussed the extensive use of data and model parallelism across numerous chips, leveraging frameworks like JAX to manage this complexity and minimize communication overhead. A pivotal breakthrough in sampling, often referred to as a "cheat code" for diffusion models, is "guidance." This technique involves making both an unconditional and a conditional prediction (e.g., guided by a text prompt) from a noisy image, amplifying the difference between these predictions, and taking small steps in that amplified direction. This significantly enhances the quality of generated samples, though it often comes at the cost of reduced diversity.

Finally, Dieleman addressed the challenges of distillation and control. Sampling from diffusion models can be slow due to the iterative nature of the denoising process. To mitigate this, techniques like "distillation" are employed, enabling models to generate high-quality images in fewer steps by directly predicting the final clean image rather than merely the tangent of the denoising path. This is exemplified by "consistency models." For effective control, models typically rely on "conditioning signals." While textual prompts are common, there's a growing trend towards "reference-based generation," where an image or video provides specific visual context (e.g., style, subject) that is difficult to convey through text alone. Additionally, for video generation, advanced conditioning signals for camera motion, speed, and event timing are being explored, often integrated into models through strategic pre-training and post-training fine-tuning using techniques like LoRA and preference tuning.

### Video Description & Links
#### Description
Sander Dieleman, Research Scientist and Director at Google DeepMind, is the Belgian scientist organizers almost couldn't get on stage, since DeepMind "doesn't do conferences anymore." He gives a fast, technical tour of what actually goes into building image and video generation models today.

From why spending time on data usually beats tweaking model architecture, to the "cheat code" trick called guidance that makes nearly every flagship image model punch above its weight, this is a dense, whirlwind look under the hood of diffusion models, sourced from Dieleman's own technical blog: sander.ai. 

0:00 Why Google DeepMind almost didn't come to Brussels
1:09 Sander's path: from a PhD in Ghent to Google DeepMind
3:56 Why better data beats a better model
7:21 Diffusion, demystified: how denoising builds an image
13:34 The "cheat code" behind every image model: guidance
16:42 Making these models fast enough, and controllable, to ship

#OffTheRadar #AI #DiffusionModels

About Off the Radar
This was filmed live at Off the Radar, a sold out event held in Brussels on 23 June 2026. It was the first event of its kind in Belgium: no sponsored keynotes, no booths, no badge-scanning, just the people actually building. Off the Radar brought some of the biggest names shipping AI today onto the stage, including ElevenLabs, OpenAI, Anthropic, Gradium, DeepMind, Mistral, AWS, Vercel, Cloudflare, Stripe, and Wonderful. Belgium's Minister of the Economy, Laurent Hublet, opened the day. Hexa is a proud partner of Off the Radar, alongside co-partners Penbox, HPE Growth, Fortino Ventures, We Love Founders, Max, Dups+, 24 Industries, Merchery, and Stefan Ifrim, thank you all for making this happen. More sessions from the day are on this channel. Follow along for the next edition at https://off-the-radar.com/

#### URLs
- https://off-the-radar.com/
