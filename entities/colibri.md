---
type: entity
tags:
  - "local-inference"
  - "mixture-of-experts"
  - "ram-computing"
  - "consumer-hardware"
  - "glm-52"
  - "no-gpu"
  - "video-resource"
aliases:
  - "Colibri Method"
  - "Colibri Inference"
  - "GLM-52 RAM Inference"
  - "Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops"
summary: "Colibri is a methodology for running the 744-billion-parameter GLM-52 model on consumer-grade hardware using RAM-based inference and mixture-of-experts techniques without GPU acceleration."
updated: 2026-07-22
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
# Colibri

**[[concepts/storage-bandwidth|Colibri]]** refers to the implementation or methodology for running large-scale language models, specifically the [[entities/glm-52]] architecture, on [[concepts/consumer-grade-hardware|consumer-grade hardware]] without dedicated [[concepts/gpu-acceleration|GPU acceleration]].

## Key Characteristics
- **[[concepts/architecturetechnique|Model Architecture]]**: Utilizes [[entities/glm-52]] with a 744 billion [[concepts/parameter-count|parameter count]].
- **[[concepts/inference|Inference]] Method**: Employs [[entities/mixture-of-experts]] (MoE) techniques to optimize [[concepts/memory|memory]] usage.
- **[[concepts/hardware-compatibility|Hardware Requirements]]**: Capable of running on a single machine with approximately 25GB of RAM.
- **Acceleration**: Performs inference entirely in RAM, requiring no GPU.

## Recent Developments
- **2026-07-22**: Analysis of Colibri's capability to run 744B MoE LLMs on consumer laptops, highlighting the feasibility of executing models that [[entities/theoretically-media|theoretically]] exceed standard memory limits. See [[lab-notes/2026-07-22-Colibri-Unlocking-744B-MoE-LLMs-for-Consumer-Grade-Lapto|Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops]].
- **2026-07-14**: Documentation of [[concepts/edge-deployment|local inference]] capabilities for [[concepts/glm-52|GLM-5.2]] (744B) via the Colibri method. See [[lab-notes/2026-07-14-Colibri-Local-GLM-5.2-744B-RAM-Inference-wit

## References
- [Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops](https://www.youtube.com/watch?v=Pb6P8GW7elI)
