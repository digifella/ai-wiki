---
type: concept
domain: ai-agents
tags:
  - "state-space-models"
  - "sequence-modeling"
  - "efficient-inference"
  - "long-context"
  - "linear-complexity"
aliases:
  - "Mamba Architecture"
  - "Selective State-Space Model"
summary: Mamba is a state-space model architecture that enables linear-time sequence modeling and long-context processing by using hardware-aware selective state spaces instead of attention mechanisms.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Mamba

**Mamba** is a [[concepts/state-space-model|state-space model]] (SSM) architecture designed for efficient [[concepts/transformer-models|sequence modeling]], offering linear-time [[concepts/inference|inference]] and training complexity relative to sequence length. Unlike [[concepts/transformers|Transformers]], Mamba avoids the quadratic [[concepts/attention|attention]] bottleneck by using hardware-aware selective state spaces, enabling [[concepts/200k-token-context-window|long-context processing]] with constant [[concepts/memory|memory]] footprint.

## Key Characteristics
- **[[concepts/ssm|State-Space Models]]:** Adapts continuous-time SSMs to discrete sequences via structured state matrices.
- **Selective Mechanism:** Dynamically adjusts state transitions based on input content, allowing data-dependent memory [[concepts/storing|retention]].
- **Hardware Optimization:** Designed for parallel scan operations, leveraging [[concepts/low-vram-optimization|GPU efficiency]] without attention-based constraints.
- **[[concepts/context-window|Context Window]]:** Capable of handling extremely long sequences (e.g., 1M+ [[concepts/tokens|tokens]]) without degradation in [[concepts/speed|speed]] or memory usage.

## Ecosystem & Developments
- **[[concepts/open-source|Open-Source]] Trends:** The broader [[concepts/ai-landscape|AI landscape]] is seeing a shift towards [[concepts/model-customization|open-weight models]] and hybrid architectures.
- **[[entities/nvidia|NVIDIA]]'s Role:** While Mamba is distinct from [[concepts/unsloth-optimization|NVIDIA]]'s proprietary transformer efforts, NVIDIA is expanding its footprint in open-source AI through initiatives like [[lab-notes/2026-06-06-NVIDIAs-Nemotron-3-Ultra-Open-Source-AI-Model-Strategy|NVIDIA's Nemotron 3 Ultra: Open-Source AI Model Strategy]], signaling a [[concepts/strategic-pivot|strategic pivot]] from pure hardware to inclusive model ecosystems.
- **Competitive Landscape:** Mamba competes with [[concepts/transformer-architectures|Transformer architectures]] and Linear [[concepts/attention-mechanisms|Attention mechanisms]] for dominance in long-sequence modeling.

## References
- Gu, A., & Dao, T. (2023). *Mamba: Linear-Time [[concepts/transformer-models|Sequence Modeling]] with Selective State Spaces.*
