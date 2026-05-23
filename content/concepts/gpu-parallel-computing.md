---
type: concept
domain: tools-platforms
tags:
  - "gpu-computing"
  - "parallel-computing"
  - "cuda"
  - "machine-learning"
  - "ai-training"
  - "gpgpu"
  - "nvidia"
aliases:
  - "GPGPU"
  - "GPU computing"
  - "general-purpose GPU"
summary: GPU parallel computing uses Graphics Processing Units to perform multiple simultaneous calculations for scientific and machine learning tasks beyond graphics rendering.
updated: 2026-05-23
group: platforms-runtimes-environments
---
# GPU Parallel Computing

GPU [[concepts/general-purpose-computing|parallel computing]] leverages Graphics Processing Units to perform computational tasks beyond their original [[concepts/motivation|purpose]] of rendering graphics. GPUs contain thousands of smaller processing cores arranged to handle many calculations simultaneously, making them fundamentally different from traditional CPUs which use fewer, more powerful cores optimized for sequential tasks. This architectural difference allows GPUs to dramatically accelerate workloads that can be parallelized across many data points or computational threads.

## Applications and Use Cases

GPUs have become central infrastructure for [[concepts/machine-learning|machine learning]] and [[concepts/ai-technologies|artificial intelligence]] [[concepts/training|training]], where large datasets must be processed through mathematical operations repeatedly. Scientific simulations, including molecular dynamics, weather modeling, and [[concepts/physics|physics]] calculations, also benefit from [[concepts/gpu-acceleration|GPU acceleration]]. [[concepts/financial-modeling|Financial modeling]], image processing, and cryptographic operations represent additional domains where parallel computation provides substantial speedup compared to CPU-only approaches.

## Enabling Technologies

[[concepts/cuda|CUDA]] ([[concepts/compute-unified-device-architecture|Compute Unified Device Architecture]]), developed by [[entities/nvidia|Nvidia]], was one of the first mainstream frameworks allowing programmers to write general-purpose [[concepts/code|code]] for GPUs rather than graphics-specific [[concepts/instructions|instructions]]. OpenCL and other [[concepts/open-standards|open standards]] have since emerged to enable [[concepts/gpu-architecture|GPU computing]] across different [[concepts/hardware|hardware]] manufacturers. These frameworks abstract the complexity of GPU hardware, allowing developers to write parallelizable code that executes across thousands of GPU cores.

The effectiveness of GPU parallel computing depends on algorithm suitability—tasks must be decomposable into independent or loosely-dependent parallel operations to see significant [[concepts/performance-gains|performance gains]]. [[concepts/memory|Memory]] bandwidth and data transfer between CPUs and GPUs can create bottlenecks in some [[concepts/software|applications]], requiring careful optimization of data [[concepts/exercise|movement]] alongside computation.
## Source Notes
- 2026-04-12: Nvidia CUDA in 100 Seconds
- 2026-04-10: [[lab-notes/2026-04-10-LiteParse-Free-Local-Layout-Preserving-Document-Parsing-for-LLMs|LiteParse Free Local Layout Preserving Document Parsing for LLMs]] · [▶ source](https://www.youtube.com/watch?v=1GOJn9xiCc4)
- 2026-04-27: Apple