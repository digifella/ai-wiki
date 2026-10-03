---
type: concept
domain: science-physics-research
tags:
  - "stochastic-computing"
  - "p-bits"
  - "probabilistic-computing"
  - "energy-efficient-hardware"
  - "ai-inference"
aliases:
  - "probabilistic bit streams"
  - "stochastic arithmetic"
summary: Stochastic computing represents numbers as probabilistic bit streams to enable energy-efficient, noise-tolerant arithmetic operations using simple hardware logic.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-05T20:33:53+00:00" }
group: physics-fundamental-theory
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Stochastic Computing

**[[concepts/probabilistic-computing|Stochastic computing]]** is a computational paradigm where numbers are represented by streams of random bits (probabilistic bit streams or "[[concepts/p-bits|p-bits]]") rather than deterministic binary values. This approach leverages the statistical properties of these streams to perform arithmetic and logic operations, offering potential advantages in energy efficiency, noise tolerance, and hardware simplicity compared to traditional deterministic computing.

## Core Principles
- **Probabilistic Representation**: Values are encoded as the probability of a bit being '1' in a stream over time.
- **Hardware Simplicity**: Basic operations (AND, OR, NOT) can be implemented with single transistors or simple logic gates, reducing circuit complexity.
- **Noise Resilience**: Inherently tolerant to thermal noise and manufacturing variations, making it suitable for emerging non-volatile [[concepts/memory|memory]] technologies.
- **Energy Efficiency**: Potential for significant reductions in power consumption, particularly for [[concepts/ai-inference|inference]] tasks in [[concepts/artificial-intelligence]] and Machine Learning.

## Recent Developments: Extropic Z1T
In September 2026, Extropic introduced the Z1T, a hardware accelerator leveraging probabilistic p-bits to address the escalating energy demands of large [[concepts/weathernext-3|AI models]].

- **Energy Efficiency**: Claims up to 100x more [[concepts/energy-efficient-ai-hardware|energy-efficient AI hardware]] compared to traditional GPU architectures.
- **Technology**: Utilizes probabilistic p-bits for [[concepts/computation|computation]], aligning with stochastic computing principles.
- **Target Use Case**: Optimized for AI [[concepts/model-inference|model inference]] and training where energy constraints are critical.
- **Source**: [[lab-notes/2026-09-06-Extropic-Z1T-Probabilistic-P-bits-for-100x-More-Energy-E|Extropic Z1T: Probabilistic P-bits for 100x More Energy-Efficient AI Hardware]]

## Related Concepts
- [[concepts/probabilistic-computing|Probabilistic Bits]] ([[concepts/p-bits|P-bits]]): Physical devices that generate stochastic bit streams.
- Energy-Efficient [[concepts/computation|Computing]]: Focus on reducing power consumption in computational systems.
- [[concepts/neuromorphic-engineering|Neuromorphic Computing]]: Hardware inspired by biological neural structures, often overlapping with stochastic approaches.
- Deep Learning Hardware: Specialized chips designed for accelerating neural network computations.

## References
- [Extropic Z1T: Probabilistic P-bits for 100x More Energy-Efficient AI Hardware](https://www.youtube.com/watch?v=R_t9d337As8)
