---
type: concept
domain: ai-agents
tags:
  - "llm-inference"
  - "text-generation"
  - "model-optimization"
  - "computational-efficiency"
  - "speculative-decoding"
aliases:
  - "Token Generation Rate"
  - "LLM Throughput"
  - "Inference Speed"
  - "Tokens Per Second"
summary: Text generation speed is the rate at which large language models produce output tokens, influenced by model architecture, hardware constraints, and optimization techniques like speculative decoding.
updated: 2026-07-12
group: multimodal-generative-media
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Text Generation Speed

**[[concepts/text-generation|Text Generation]] [[concepts/speed|Speed]]** refers to the rate at which [[concepts/large-language-model-llm|Large Language Models]] (LLMs) produce output [[concepts/tokens|tokens]], typically measured in [[concepts/token-per-second|tokens per second]] (tok/s). It is a critical metric for [[concepts/user-experience-design|user experience]] and [[concepts/algorithm-efficiency|computational efficiency]], influenced by [[concepts/architecturetechnique|model architecture]], hardware constraints, and [[concepts/inference|inference]] [[concepts/algorithm-optimization|optimization techniques]].

## Key Factors
- **[[concepts/code-size|Model Size]]**: Larger parameter counts generally increase latency due to higher [[concepts/storage-bandwidth|memory bandwidth]] requirements.
- **[[concepts/context-window|Context Window]]**: Longer contexts increase [[concepts/attention-mechanisms|attention]] computation costs, potentially reducing throughput.
- **Hardware**: GPU/TPU [[concepts/memory|memory]] [[concepts/network-speed|bandwidth]] and [[concepts/computational-resources|compute]] power are primary bottlenecks.
- **[[concepts/llm-optimization-techniques|Optimization Techniques]]**: Methods like [[concepts/inference-optimization]] management, [[concepts/parameter-reduction|quantization]], and [[concepts/speculative-decoding|speculative decoding]] significantly impact speed.

## Optimization Techniques

### Speculative Decoding
A technique where a smaller "[[concepts/draft|draft]]" model proposes tokens, which are then verified by the larger [[concepts/target-model|target model]] in parallel, reducing sequential dependency.

- **[[concepts/deepseek-ai|DeepSeek]] [[concepts/deepseek-v4-pro|DSpark]]**: An innovative module introduced by [[entities/deepseek-ai|DeepSeek]] to accelerate [[concepts/llm-inference|LLM inference]] via optimized [[concepts/speculative-inference|speculative decoding]].
	- Not a standalone model but an add-on module.
	- Claims to make inference up to 85% faster.
	- See detailed analysis: [[lab-notes/2026-06-29-DeepSeek-DSpark-Optimizing-Speculative-Decoding-for-Acce|DeepSeek DSpark: Optimizing Speculative Decoding for Accelerated LLM Inference]]

## References
- [DeepSeek DSpark: Optimizing Speculative Decoding for Accelerated LLM Inference](https://www.youtube.com/watch?v=EMs7jHxIPyM)
