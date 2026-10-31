---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 6a9854133c88054c60fc
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "What Is Quantization? How AI Models Get Smaller & Faster"
date: 2026-10-30
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-30-mmns33BsBcY-What-Is-Quantization-How-AI-Models-Get-Smaller-Faster"
---
## What Is Quantization? How AI Models Get Smaller & Faster
**Clip title:** What Is Quantization? How AI Models Get Smaller & Faster
**Author / channel:** IBM Technology
**URL:** https://www.youtube.com/watch?v=mmns33BsBcY

### Summary
Sure! Here is a summary of the video content:

The video discusses **quantization**, a process used in AI to compress large language models (LLMs) by storing numerical information at a lower precision. This reduction saves memory and compute space without sacrificing too much accuracy.

Key points include:

- **What is Quantization?**: It involves shrinking a model's footprint by reducing parameter precision. Models consist of weights and activations, and quantization maps these values to a smaller set of bits.
- **The Math Behind Quantization**: Standard models store information in formats like FP16 or BF16, requiring 16 bits per parameter. For a 70 billion parameter model, this requires about 140 GB of memory. Quantization reduces this by lowering precision (e.g., to FP8, INT8, or INT4), reducing memory usage significantly.
- **Approaches**: 
  - **Post-Training Quantization (PTQ)**: Compresses the model after training, which is faster and cheaper.
  - **Quantization-Aware Training (QAT)**: Simulates lower precision during training, allowing the model to adjust for precision loss. It’s more costly in compute but yields better accuracy, especially at lower precision levels like INT4.

The speaker concludes that quantization is a trade-off between speed, memory, and accuracy. While it makes large models more manageable for production, excessive quantization can cause accuracy to drop.

### Video Description & Links
#### Description
Learn more about Quantization here → https://ibm.biz/~NdqpU881V

Huge AI models come with huge memory requirements.Grace Ableidinger explains how quantization compresses LLMs using lower-precision formats like INT8 and INT4. Learn how model size, GPU memory, speed, and accuracy trade off during AI inference.

 00:00 – Understand What Quantization Does
 00:23 – See Why LLMs Need Quantization
 00:51 – Connect AI Parameters to Memory Requirements
 01:31 – Calculate the Memory Cost of a 70B LLM
 02:13 – See How Quantization Reduces Precision
 02:53 – Follow Quantization Layer by Layer
 04:21 – Compare FP16, FP8, INT8 & INT4
 05:34 – Balance Memory Savings with Model Accuracy
 06:33 – Compare PTQ vs Quantization-Aware Training
 07:17 – Choose the Right Quantization Tradeoff

AI was used in the creation of the transcript and metadata for this video.

#llm #aimodels #aiinference #machinelearning #aiengineering 

---------------------------------------------------------------------------------------------------------
Find us on YouTube:

#### Tags
`IBM`

#### URLs
- https://ibm.biz/~NdqpU881V
