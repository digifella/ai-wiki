---
title: "Colibri: Local GLM-5.2 (744B) RAM Inference with MoE, No GPU"
date: 2026-07-14
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Colibri: Local GLM-5.2 (744B) RAM Inference with MoE, No GPU
Generated: 2026-07-14 · API: Gemini 2.5 Flash · Modes: Summary

---

## Colibri: Local GLM-5.2 (744B) RAM Inference with MoE, No GPU
**Clip title:** Colibrì: Running GLM-5.2 (744B) Locally in RAM With No GPU
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=jxML3S5C-8Y

### Summary
The video demonstrates an impressive method for running the massive 744 billion parameter GLM 5.2 language model on a single consumer-grade machine with only about 25GB of RAM. Traditionally, models of this scale require extensive data center resources and a large budget. The core innovation enabling this feat is a lightweight, pure C runtime engine called "Colibri," which operates with zero dependencies and without Python at runtime.

Colibri achieves this by leveraging the Mixture of Experts (MoE) architecture of GLM 5.2. Unlike dense models that load all parameters, MoE models only activate a small subset of "experts" for each input token. Colibri keeps the "dense model" (attention layers, roughly 9.9GB in int4 quantization) resident in RAM. For every token, a router selects only 8 out of 256 experts per layer. If these selected experts are already cached in RAM, the inference is fast. If not, they are streamed from a large (~370GB) file stored on disk. This strategic memory management and streaming are the "trick" that allows the immense model to function on limited RAM. The video explicitly highlights that the disk read speed, rather than the CPU or GPU, becomes the primary bottleneck.

The demonstration shows the setup process, including downloading the 384GB quantized model and building the Colibri engine. During live inference, the initial prompts are slower as Colibri "warms up" by caching frequently used experts. As more interactions occur, the "hit rate" (proportion of experts found in RAM) significantly increases, leading to a noticeable acceleration in response generation. Crucially, the system monitoring tools confirm that the GPU remains entirely idle throughout the process, underscoring that the entire operation is CPU- and disk-bound.

In conclusion, this project showcases a highly promising approach to making extremely large language models more accessible. By intelligently managing memory and exploiting the MoE architecture, Colibri allows GLM 5.2 to run on consumer hardware without dedicated GPUs or complex distributed systems. While the current Colibri code is custom-written for GLM 5.2's specific architecture, the underlying technique is general and holds significant potential for future advancements in local deployment of immense AI models.

### Video Description & Links
#### Description
This video installs Colibri and runs full GLM 5.2 locally without GPU.

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon code: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#colibri 

PLEASE FOLLOW ME: 
▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://github.com/JustVugg/colibri

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.fahdmirza.com
- https://github.com/JustVugg/colibri
