---
type: concept
domain: ai-agents
tags:
  - "generative-ai"
  - "sequential-generation"
  - "llm-architecture"
  - "token-prediction"
  - "transformers"
  - "machine-learning"
aliases:
  - "AR Models"
  - "Sequential Generative Models"
  - "Token-by-Token Generation"
  - "Autoregressive Generation"
summary: "Auto-regressive models are generative architectures that produce data sequentially by predicting the next element in a sequence based on all preceding elements."
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Auto-regressive Models

**Auto-regressive models** are a class of [[concepts/generative-ai|generative models]] that generate data sequentially, predicting the next element in a sequence based on all preceding elements. They are the foundational architecture behind most [[concepts/large-language-model-llm|large language models]] (LLMs) and many time-series forecasting systems.

## Core Mechanism
- **[[concepts/autoregressive-generation|Sequential Generation]]**: Outputs are generated token-by-token (or step-by-step). The [[concepts/probability|probability]] distribution for the next token $x_t$ is conditioned on the history $x_{<t}$.
- **Markov Property**: Assumes the current state depends only on the immediate previous state(s), though in practice, [[concepts/attention-mechanisms|attention mechanisms]] allow access to the entire [[concepts/context-window|context window]].
- **Training [[concepts/purpose|Objective]]**: Typically trained via [[concepts/maximum-likelihood-estimation|maximum likelihood estimation]] to maximize the probability of the ground-truth sequence.

## Key Architectures
- **[[concepts/transformers|Transformers]]**: Dominant architecture for NLP, using [[concepts/transformer-attention-mechanism|self-attention]] to weigh the [[concepts/value|importance]] of different [[concepts/tokens|tokens]] in the context.
- **RNNs/LSTMs**: Older recurrent architectures, largely superseded by Transformers due to parallelization capabilities during training.
- **[[concepts/image-and-video-diffusion-models|Diffusion Models]]**: Traditionally used for image generation, now being adapted for text. Unlike auto-regressive models, diffusion models denoise data iteratively and can potentially generate tokens in parallel.

## Limitations
- **Latency**: Sequential nature prevents parallel generation during [[concepts/inference|inference]], leading to slower throughput compared to non-auto-regressive methods.
- **Error Propagation**: Mistakes in early tokens can compound, affecting subsequent predictions.
- **Context Window**: Limited by [[concepts/ram-limitations|memory constraints]] and [[concepts/self-attention|attention mechanism]] complexity.

## Recent Developments & Alternatives
- **Parallel Decoding**: Techniques like [[concepts/llm-inference-acceleration|speculative decoding]] aim to mitigate latency by generating multiple tokens in parallel and verifying them.
- **Diffusion for Text**: Emerging architectures challenge the auto-regressive paradigm by treating [[concepts/text-generation|text generation]] as a [[concepts/noise-reduction-techniques|denoising]] process, allowing for parallel token generation.
	- See [[lab-notes/2026-07-07-NVIDIAs-TwoTower-Parallel-Diffusion-Architecture-for-Fas|NVIDIA's TwoTower: Parallel Diffusion Architecture for Faster Text Generation]] for details on [[concepts/unsloth-optimization|NVIDIA]]'s approach to [[concepts/parallel-diffusion|parallel diffusion]] for text.

## Related Concepts
- Transformer
- [[concepts/large-language-model]]
- Diffusion Model
- Tokenization
- [[concepts/self-attention|Attention Mechanism]]

## References
- [NVIDIA's TwoTower: Parallel Diffusion Architecture for Faster Text Generation](https://www.youtube.com/watch?v=9z8MMi3DJxw)
