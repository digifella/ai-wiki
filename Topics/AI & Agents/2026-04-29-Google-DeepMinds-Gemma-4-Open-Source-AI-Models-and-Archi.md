---
wiki-ingested: true
title: "Google DeepMind's Gemma 4: Open-Source AI Models and Architectural Innovations"
date: 2026-04-29
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: google-ai-ecosystem
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-04-29 · API: [[concepts/gemini|Gemini]] 2.5 Flash · Modes: Summary

---

## Google DeepMind's Gemma 4: Open-Source AI Models and Architectural Innovations
**Clip title:** Open Models at Google DeepMind — Cassidy Hardin, Google DeepMind
**Author / channel:** AI Engineer
**URL:** https://www.youtube.com/watch?v=_A367W_qvc8

### Summary
[[entities/google-deepmind|Google DeepMind]] has introduced [[concepts/23b-parameter-models|Gemma 4]], the latest generation in their family of [[concepts/open-source|open-source]] [[concepts/ai-models|AI models]], which the presenter highlights for its unprecedented performance at smaller scales. Launched under an [[concepts/apache-2.0-license|Apache 2.0 License]], [[concepts/e4b-model|Gemma 4]] aims to be more accessible for everyday developers, fostering easier [[concepts/integration|integration]] into various [[concepts/development-workflows|development workflows]] from [[concepts/testing|testing]] to [[concepts/deployment|deployment]]. The release features a [[concepts/range|range]] of models designed for diverse applications and hardware, marking a significant step forward in open-source AI capabilities.

The Gemma 4 family includes four distinct models: two smaller, "effective" models (E2B and E4B) optimized for [on-device applications](https://en.wikipedia.org/wiki/on-device_applications) like phones, iPads, and laptops, and two larger models (26B and 31B) for more [[concepts/complex-reasoning|complex reasoning]] tasks. The E2B and E4B support [[concepts/text|text]], [[concepts/computer-vision|vision]], and [[concepts/audio|audio]] inputs, while the 26B and 31B focus on [[concepts/text|text]] and vision, with the 26B being the first Gemma [[concepts/mixture-of-experts|Mixture of Experts]] (MoE) model. Notably, the larger 31B (Dense) and 26B (MoE) models have achieved top rankings on the [[entities/llm-arena|LLM Arena]], outperforming models significantly larger than themselves, setting a new benchmark for what small [[concepts/reasoning-models|open-source models]] can achieve.

A core focus of Gemma 4's enhancements lies in its refined architecture. Improvements to the [[concepts/self-attention|attention mechanism]] include a strategic interleaving of local and global layers (5:1 ratio, or 4:1 for E2B), utilizing sliding [[entities/windows|windows]] for local [[concepts/attention-mechanisms|attention]] while global layers attend to all preceding [[concepts/tokens|tokens]]. A key [[concepts/innovation|innovation]], Grouped Query [[concepts/attention-mechanisms|Attention]] (GQA), boosts efficiency by having groups of queries share key and value heads—two for local layers and eight for global layers (with doubled key/value head lengths for global layers). Furthermore, the 26B model introduces a Mixture of Experts (MoE) [[concepts/design|design]], featuring 128 total experts with eight active per [[concepts/inference|forward pass]], alongside a larger, constantly active shared expert. For the on-device effective models (E2B and E4B), Per-Layer Embeddings (PLE) were implemented, storing embedding tables in flash [[concepts/memory|memory]] instead of [[concepts/vram|VRAM]], drastically reducing [[concepts/memory-overhead|memory overhead]] and enabling superior performance on constrained hardware.

Gemma 4 also extends its native [[concepts/multimodal-capabilities|multimodal capabilities]], building upon the vision support introduced in [[entities/gemma-3|Gemma 3]], and now adding audio to the E2B and E4B models. The [vision encoder](https://en.wikipedia.org/wiki/vision_encoder) supports variable aspect ratios and resolutions for [[concepts/images|images]], allowing developers to choose from five different soft [token budgets](https://en.wikipedia.org/wiki/token_budgets) to optimize for specific tasks like OCR or object recognition. [[concepts/images|Images]] are processed by splitting them into 16x16 pixel patches, which are then pooled into single embeddings and passed to the model, ensuring spatial positional [[concepts/encoding|encoding]] is maintained. For audio, the E2B and E4B models incorporate a 305 million-parameter conformer and an audio tokenizer, enabling advanced [[concepts/speech-recognition|speech recognition]] and translation by processing audio embeddings rather than raw [[concepts/tokens|tokens]].

In conclusion, Gemma 4 represents a substantial leap in open-source AI, pushing the boundaries of performance, efficiency, and [[concepts/accessibility|accessibility]] across a spectrum of model sizes and modalities. Developers can get started with Gemma 4 today by downloading and self-hosting all models via [[concepts/open-source-machine-learning|Hugging Face]], Kaggle, or [[entities/ollama|Ollama]], or by accessing the larger 31B and 26B models through Google Cloud-hosted options like [[entities/ai-studio|AI Studio]] and Vertex AI for prototyping and deploying advanced agential workflows.

### Video Description & Links

## Related Concepts
- [[concepts/reasoning-models|open-source AI models]] — [Wikipedia](https://en.wikipedia.org/wiki/open-source_AI_models)
- [[concepts/23b-parameter-models|23b-parameter models]] — [Wikipedia](https://en.wikipedia.org/wiki/23b-parameter_models)
- [[concepts/understanding-the-physical-world|AI architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_architecture)
- [[concepts/mixture-of-experts|Mixture of Experts (MoE)]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_Experts_%28MoE%29)
- Grouped Query Attention (GQA) — [Wikipedia](https://en.wikipedia.org/wiki/Grouped_Query_Attention_%28GQA%29)
- Per-Layer Embeddings (PLE) — [Wikipedia](https://en.wikipedia.org/wiki/Per-Layer_Embeddings_%28PLE%29)
- self-[[concepts/self-attention|attention mechanism]] — [Wikipedia](https://en.wikipedia.org/wiki/self-attention_mechanism)
- [[concepts/multimodal-capabilities|multimodal capabilities]] — [Wikipedia](https://en.wikipedia.org/wiki/multimodal_capabilities)
- on-device applications — [Wikipedia](https://en.wikipedia.org/wiki/on-device_applications)
- [local and global attention](https://en.wikipedia.org/wiki/local_and_global_attention) — [Wikipedia](https://en.wikipedia.org/wiki/local_and_global_attention)
- sliding [[entities/windows|windows]] — [Wikipedia](https://en.wikipedia.org/wiki/sliding_windows)
- vision encoder — [Wikipedia](https://en.wikipedia.org/wiki/vision_encoder)
- [[concepts/memory-overhead|memory overhead]] optimization — [Wikipedia](https://en.wikipedia.org/wiki/memory_overhead_optimization)
- [[concepts/open-source|Apache 2.0 License]] — [Wikipedia](https://en.wikipedia.org/wiki/Apache_2.0_License)
- [[concepts/complex-reasoning|complex reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/complex_reasoning)
- [[concepts/computer-vision|computer vision]] — [Wikipedia](https://en.wikipedia.org/wiki/computer_vision)
- [[concepts/audio-processing|audio processing]] — [Wikipedia](https://en.wikipedia.org/wiki/audio_processing)
- token budgets — [Wikipedia](https://en.wikipedia.org/wiki/token_budgets)
