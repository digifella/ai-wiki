---
type: concept
domain: science-physics-research
tags:
  - "hardware-capabilities"
  - "local-ai"
  - "computing-constraints"
  - "vram"
  - "edge-computing"
  - "inference"
  - "model-deployment"
  - "compute-power"
aliases:
  - "Physical Constraints of Computing"
  - "Hardware Specs for AI"
  - "Local AI Hardware Requirements"
summary: Hardware capabilities for local AI are defined by memory capacity, compute power, and bandwidth, with performance tiers ranging from microcontrollers to server clusters.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T03:25:10+00:00" }
group: engineering-systems-robotics-autonomous-vehicles
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Hardware Capabilities

The physical constraints and specifications of [[concepts/computation|computing]] devices that determine their ability to run [[concepts/artificial-intelligence]] models, particularly [[concepts/local-llm|Local AI Models]].

## Key Determinants
- **[[concepts/memory|Memory]] (VRAM/RAM):** The primary bottleneck for [[concepts/code-size|model size]]. Determines the maximum [[concepts/parameter-count|parameter count]] and [[concepts/context-length|context window]].
- **[[concepts/compute-capacity|Processing Power]] ([[concepts/computational-resources|Compute]]):** Measured in FLOPS/TOPS. Determines [[concepts/inference-speed|inference speed]] and throughput.
- **[[concepts/storage-bandwidth|Memory Bandwidth]]:** Critical for [[concepts/transformer-architectures|transformer architectures]]; limits how fast data can be fed to the compute units.
- **Thermal Design Power (TDP):** Limits sustained performance on mobile and [[concepts/edge-devices|edge devices]].

## Hardware Tiers for Local AI
Based on recent analyses of running AI across diverse hardware [[lab-notes/2026-09-30-Local-AI-Models-Hardware-Capabilities-and-Project-Ideas|Local AI Models: Hardware Capabilities and Project Ideas Summary]]:

- **[[concepts/microcontrollers|Microcontrollers]] (MCUs):**
  - Extremely low power.
  - Limited to tiny models (e.g., TinyML, keyword spotting).
  - No GPU; relies on CPU/NPU.
- **Edge Devices (Phones/Tablets):**
  - Modern NPUs/GPUs allow running quantized LLMs (e.g., 7B parameters).
  - Battery life and thermal throttling are key constraints.
- **Consumer Desktops (GPU):**
  - **[[concepts/vram|VRAM]] is king:** 8GB+ for small models, 12-24GB+ for larger models (e.g., Llama-3-70B quantized).
  - [[concepts/high-bandwidth-memory-hbm|High bandwidth memory]] (HBM) in high-end cards (e.g., RTX 4090) significantly boosts [[concepts/speed|speed]].
- **Server/Cluster GPUs:**
  - Multi-GPU setups for unquantized large models.
  - Requires high-speed interconnects ([[concepts/nvlink|NVLink]]) to avoid bottlenecking.

## Project Ideas
- **[[concepts/edge-computing|Edge Deployment]]:** Running TinyML models on Arduino or [[entities/raspberry-pi]] for IoT applications.
- **[[concepts/local-ai-model|Local LLM]] Server:** Setting up a [[entities/ollama]] or [[entities/lm-studio]] instance on a desktop GPU for private chat.
- **[[concepts/precision-reduction|Quantization]] Experiments:** Comparing model accuracy vs. speed when reducing [[concepts/accuracy|precision]] (FP16 -> INT8 -> INT4).

## References
- [Local AI Models: Hardware Capabilities and Project Ideas Summary](https://www.youtube.com/watch?v=rPGJhrunbxo)
