---
type: concept
domain: science-physics-research
tags:
  - "power-electronics"
  - "transformers"
  - "switching-power-supply"
  - "solid-state-transformer"
  - "magnetic-cores"
aliases:
  - "HF Transformer"
  - "High-Frequency Power Transformer"
  - "SMPS Transformer"
summary: A high-frequency transformer operates at frequencies significantly higher than standard mains frequency to reduce size and weight, utilizing ferrite or amorphous metal cores in applications such as switching power suppli
updated: 2026-10-04
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-25T23:15:45+00:00" }
group: physics-fundamental-theory
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# High-Frequency Transformer

A transformer operating at frequencies significantly higher than the standard 50/60 Hz mains frequency. High-frequency operation allows for a drastic reduction in the size and weight of magnetic cores and windings, enabling compact power conversion systems.

## Core Principles
- **Frequency-Size Relationship**: Inductance and capacitance requirements scale inversely with frequency. Higher frequencies permit smaller passive components.
- **Core Materials**: Utilizes Ferrite or Amorphous [[concepts/metal|Metal]] cores to minimize Eddy Current losses and Hysteresis losses at high frequencies.
- **Switching Topologies**: Typically driven by Power MOSFETs or IGBTs in Flyback, Forward, or Push-Pull converter topologies.

## Applications
- Switching Power Supply (SMPS)
- Induction Heating
- Wireless Power Transfer
- [[concepts/solid-state-transformer]] (SST) architectures

## Related Concepts
- [[concepts/power-electronics|Power Electronics]]
- Magnetic Core
- High-Frequency Inverter

## Recent Developments
- **Solid-State Transformer (SST)**: Emerging research focuses on integrating high-frequency [[concepts/transformers|transformers]] into SSTs to replace traditional copper-wound transformers.
  - SSTs offer advantages in size, weight, and [[concepts/grid-integration|grid integration]] capabilities.
  - Key challenges include thermal management, electromagnetic interference (EMI), and cost of wide-bandgap semiconductors (e.g., SiC, GaN).
  - [[concepts/market-adoption|Market adoption]] [[concepts/faces|faces]] obstacles despite technical evolution.
  - See analysis: [[lab-notes/2026-08-26-Solid-State-Transformer-Evolution-Advantages-and-Obstacl|Solid-State Transformer: Evolution, Advantages, and Obstacles to Market Adoption]]

## References
- [Solid-State Transformer: Evolution, Advantages, and Obstacles to Market Adoption](https://www.youtube.com/watch?v=Oytqz3zuB7w)
