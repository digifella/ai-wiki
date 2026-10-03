---
type: entity
tags:
  - "distributed-algorithms"
  - "systems"
  - "ist-austria"
  - "llm-quantization"
  - "gsq-rco"
  - "local-deployment"
  - "model-optimization"
  - "qwen"
aliases:
  - "Distributed Algorithms and Systems Lab"
summary: DASLab is a research lab at IST Austria focused on efficient machine learning algorithms, notably developing the GSQ+RCO framework for accurate local deployment of large language models.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-07T20:34:13+00:00" }
---
# DASLab

## Overview
**DASLab** refers to the **Distributed Algorithms and Systems** lab at [[entities/ist-austria]]. The lab is recognized for its research into efficient machine learning algorithms, particularly in the domain of [[concepts/llm-quantization|model quantization]] and optimization for local deployment.

## Key Research & Innovations
*   **GSQ+RCO Quantization Framework**: Developed by DASLab, this technique combines [[concepts/gumbel-softmax-quantization|Gumbel Softmax Quantization]] (GSQ) and [[concepts/riemannian-constrained-optimization|Riemannian Constrained Optimization]] (RCO).
    *   **Objective**: Enable high-accuracy local deployment of [[concepts/large-language-models|large language models]] without significant performance degradation.
    *   **Case Study**: Successfully applied to [[concepts/large-language-model|Qwen3.8-27B]] Quantization: GSQ+RCO for Local, Accurate LLM Deployment.
    *   **Results**: Reduced model size to ~11.8GB while maintaining zero accuracy loss compared to the full precision model.
    *   **Parameters**: Optimized for models with approximately 27 billion parameters.

## Related Resources
*   [[lab-notes/2026-09-08-Qwen3.8-27B-Quantization-GSQRCO-for-Local-Accurate-LLM-D|Qwen3.8-27B Quantization: GSQ+RCO for Local, Accurate LLM Deployment]]
*   [Qwen3.8-27B Quantization: GSQ+RCO for Local, Accurate LLM Deployment](https://www.youtube.com/watch?v=utJEkStLaok)
