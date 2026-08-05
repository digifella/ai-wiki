---
type: concept
domain: ai-agents
tags:
  - "ML"
  - "NLP"
  - "Generative-AI"
  - "Diffusion-Models"
  - "Auto-regressive"
  - "discrete-tokens"
  - "text-diffusion"
  - "parallel-generation"
  - "nlp-architectures"
aliases:
  - "Discrete Token Architectures"
  - "Sequential Token Models"
  - "Text Generation Paradigms"
summary: Discrete token models process data as sequences from a finite vocabulary, primarily through autoregressive methods or emerging parallel approaches like text diffusion.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Discrete Token Models

**Discrete Token Models** refer to architectures in [[concepts/language-processing|natural language processing]] that generate or process data as a sequence of discrete symbols ([[concepts/tokens|tokens]]) from a finite vocabulary. This category primarily encompasses Auto-Regressive Modeling and emerging non-autoregressive approaches like diffusion-based [[concepts/text-generation|text generation]].

## Core Architectures

*   **[[concepts/auto-regressive-models|Auto-Regressive Models]]**: The dominant paradigm where tokens are generated sequentially, conditioning each step on previous outputs. Includes [[concepts/transformers|Transformers]] and LLMs.
*   **Non-Autoregressive / Parallel Generation**: Emerging methods aiming to reduce [[concepts/inference|inference]] latency by generating tokens in parallel or via [[concepts/iterative-refinement|iterative refinement]] rather than strict left-to-right dependency.

## Recent Developments & Innovations

*   **[[concepts/text-diffusion|Text Diffusion]] Adaptation**: [[concepts/2026-04-29-google-deepmind|Google DeepMind]] has explored adapting diffusion processes, traditionally used for continuous image data, to discrete text generation.
    *   [[lab-notes/2026-06-09-Text-Diffusion-Google-DeepMinds-Faster-Parallel-Text-Gen|Text Diffusion: Google DeepMind's Faster Parallel Text Generation via Denoising]] details how this approach utilizes [[concepts/noise-reduction-techniques|denoising]] [[concepts/causes|mechanisms]] to accelerate parallel text generation, challenging the sequential bottleneck of standard [[concepts/autoregressive-models|autoregressive models]].
*   **Discrete Latent Spaces**: Techniques mapping continuous latent variables to discrete codebooks (e.g., VQ-VAE) to bridge generative image and text domains.

## Key Challenges

*   **Granularity & Lossiness**: Discretization inevitably loses information compared to continuous representations.
*   **[[concepts/speed|Inference Speed]]**: While parallel methods like Text Diffusion show promise, achieving stability and coherence comparable to strong autoregressive baselines remains a research focus.
*   **[[concepts/vocabulary-size|Vocabulary Size]] [[concepts/computational-scaling|Scaling]]**: Managing efficiency as token sets grow larger in multimodal contexts.
