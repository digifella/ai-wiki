---
wiki-ingested: true
title: "Dieleman's DeepMind Insights: Building Large-Scale Diffusion Models for Image and Video"
date: 2026-07-15
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: creative-pursuits
group: video-content-systems
type: "source-summary"
aliases:
  - "lab-notes/2026-07-15-Dielemans-DeepMind-Insights-Building-Large-Scale-Diffusi"
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

## Dieleman's DeepMind Insights: Building Large-Scale Diffusion Models for Image and Video
**Clip title:** Off the Radar - Sander Dieleman ([[concepts/google-search|Google]] [[entities/deepmind|DeepMind]]) on Diffusion Models
**[[entities/tasia-custode|Author]] / channel:** Hexa
**URL:** https://www.youtube.com/watch?v=iBzlS0OHCTY

### Summary
[[entities/sander-dieleman|Sander Dieleman]], a Research Scientist at [[concepts/2026-04-29-google-deepmind|Google DeepMind]], delivered a technical but intuitively focused presentation on "[[concepts/image-and-video-diffusion-models|Diffusion models]] for image and [[concepts/video-generation|video generation]]." He began by sharing his journey, which included a PhD in [[concepts/ai-for-music|AI for music]], a stint at [[entities/spotify|Spotify]], and joining DeepMind in 2015. Initially involved with the [[entities/alphago|AlphaGo]] project, his focus shifted to [[concepts/generative-ai|generative AI]]. He noted the remarkable progress in this field, from generating rudimentary 32x32 pixel images in 2016 to today's ability to produce flagship products. Dieleman structured his talk around eight critical aspects involved in building large-scale image and video generation models.

The initial aspects covered data and representation. Dieleman stressed the paramount [[concepts/value|importance]] of [[concepts/data-curation|data curation]] for achieving [[concepts/excellence|high-quality]] results, highlighting its often-underestimated value in [[entities/tomasz-janowski|academic]] research compared to industry applications. Regarding data representation, he explained that raw pixel or video data is too massive, necessitating the use of "latent models" or "fancy pixels." These are a form of custom, adaptive compression designed to preserve the specific topological and statistical structures crucial for [[concepts/tts-model|generative models]], unlike standard compression [[concepts/algorithms|algorithms]] that discard too much vital information. For the core modeling technique, Dieleman focused on "diffusion," an iterative [[concepts/noise-reduction-techniques|denoising]] process where a [[concepts/neural-network|neural network]] learns to gradually remove noise from an image to reconstruct a clean version. Architecturally, these [[concepts/noise-reduction-techniques|denoising]] networks have evolved from U-Nets, originally borrowed from biomedical image segmentation, to today's dominant use of [[concepts/transformers|Transformers]] due to their superior performance and scalability.

When it comes to training and sampling, scale is a significant factor. Dieleman discussed the extensive use of data and model parallelism across numerous chips, leveraging frameworks like JAX to manage this complexity and minimize communication overhead. A pivotal breakthrough in sampling, often referred to as a "cheat code" for diffusion models, is "[[concepts/recommendations|guidance]]." This technique involves making both an unconditional and a conditional [[concepts/user-attention-prediction|prediction]] (e.g., guided by a text prompt) from a noisy image, amplifying the difference between these predictions, and taking small steps in that amplified direction. This significantly enhances the quality of generated samples, though it often comes at the cost of reduced diversity.

Finally, Dieleman addressed the challenges of distillation and control. Sampling from diffusion models can be slow due to the iterative nature of the denoising process. To mitigate this, techniques like "distillation" are employed, enabling models to generate [[concepts/high-quality-images|high-quality images]] in fewer steps by directly predicting the final clean image rather than merely the tangent of the denoising path. This is exemplified by "[[concepts/logical-consistency|consistency]] models." For effective control, models typically rely on "conditioning signals." While textual prompts are common, there's a growing trend towards "reference-based generation," where an image or video provides specific visual context (e.g., [[concepts/style|style]], subject) that is difficult to convey through text alone. Additionally, for video generation, advanced conditioning signals for camera motion, [[concepts/speed|speed]], and event timing are being explored, often integrated into models through strategic pre-training and post-training [[concepts/fine-tuning|fine-tuning]] using techniques like [[concepts/ai-model-fine-tuning|LoRA]] and preference tuning.

### Video Description & Links
#### Description
Sander Dieleman, Research Scientist and Director at Google DeepMind, is the Belgian scientist organizers almost couldn't get on stage, since DeepMind "doesn't do conferences anymore." He gives a fast, technical tour of what actually goes into building image and video generation models today.

From why spending time on data usually beats tweaking [[concepts/architecturetechnique|model architecture]], to the "cheat code" trick called guidance that makes nearly every flagship image model punch above its weight, this is a dense, whirlwind look under the hood of diffusion models, sourced from Dieleman's own technical blog: sander.ai. 

0:00 Why Google DeepMind almost didn't come to Brussels
1:09 Sander's path: from a PhD in Ghent to Google DeepMind
3:56 Why better data beats a better model
7:21 Diffusion, demystified: how denoising builds an image
13:34 The "cheat code" behind every image model: guidance
16:42 Making these models fast enough, and controllable, to ship

#OffTheRadar #AI #DiffusionModels

About Off the Radar

## Related Concepts
- [[concepts/visual-rendering|Diffusion Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Diffusion_model)
- [[concepts/visual-rendering|Image Generation]]
- [[concepts/video-generation|Video Generation]]
- [[concepts/generative-ai|Generative AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Generative_AI)
- [[concepts/vanishing-gradient-problem|Deep Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_learning)
- [[concepts/2026-04-29-google-deepmind|AlphaGo]] — [Wikipedia](https://en.wikipedia.org/wiki/AlphaGo)
- [[concepts/ai-for-music|AI for Music]]
- [[concepts/foundation-model|Large-Scale Models]]
- [[concepts/image-and-video-diffusion-models|Denoising Process]]
- [[concepts/recursive-multi-agent-systems|Latent Space]] — [Wikipedia](https://en.wikipedia.org/wiki/Latent_space)
- [[concepts/real-world-physics|Stochastic Processes]] — [Wikipedia](https://en.wikipedia.org/wiki/Stochastic_process)
- [[concepts/neural-networks|Neural Networks]] — [Wikipedia](https://en.wikipedia.org/wiki/Neural_network)
- [[concepts/computer-vision|Computer Vision]] — [Wikipedia](https://en.wikipedia.org/wiki/Computer_vision)
- [[concepts/transformer-models|Sequence Modeling]]
- [[concepts/transformers|Transformers]] — [Wikipedia](https://en.wikipedia.org/wiki/Transformers)
- [[concepts/recommendations|Guidance]]
- [[concepts/model-migration|Distillation]] — [Wikipedia](https://en.wikipedia.org/wiki/Distillation)
- [[concepts/logical-consistency|Consistency]] Models
- [[concepts/data-curation|Data Curation]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_curation)
- [[concepts/workflow-transformation|LoRA]] — [Wikipedia](https://en.wikipedia.org/wiki/LoRA_%28machine_learning%29)

## Related Entities
- [[entities/sander-dieleman|Sander Dieleman]]
- [[entities/google-deepmind|Google DeepMind]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_DeepMind)
- [[entities/hexa|Hexa]]
- [[entities/spotify|Spotify]] — [Wikipedia](https://en.wikipedia.org/wiki/Spotify)
- [[entities/alphago|AlphaGo]] — [Wikipedia](https://en.wikipedia.org/wiki/AlphaGo)