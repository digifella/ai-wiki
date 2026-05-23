---
type: concept
domain: ai-agents
summary: GGUF is a binary serialization format designed for efficient inference and single-file distribution of large language models.
updated: 2026-05-23
group: open-systems-local-models
---
# GGUF format

[[concepts/gguf|GGUF]] is a binary serialization format designed for efficient [[concepts/inference|inference]] and [[concepts/distribution|distribution]] of [[concepts/large-language-models|large language models]] (LLMs). It is optimized for single-file [[concepts/distribution|distribution]] and [[entities/high-performance|high-performance]] loading.

### Ecosystem & Compatibility
- **[[concepts/hardware|Hardware]] Backends**: Optimized for execution across [[concepts/cpu]], GPU, and [[concepts/neural-engine|NPU]] architectures.
- **[[concepts/software|Software]] [[concepts/integration|Integration]]**:
	- Supported by [[concepts/nexa-sdk]] for private, [[concepts/local-ai-processing|local AI execution]].
	- Interoperable with MLX in specific [[concepts/deployment|deployment]] environments.
	- Core format for ecosystems including [[entities/llamacpp]] and [[entities/ollama]].

### Related Concepts
- [[concepts/model-efficiency]]
- [[concepts/inference|Inference]]
- [[concepts/ggml|GGML]]

---
Backlink: 2026 04 14 [[concepts/mlx|Nexa AI]] run [[concepts/models|models]] locally
## Source Notes

- 2026-04-23: Excel · [▶ source](https://www.youtube.com/watch?v=jWE3ypXpuTY)
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-08: [[lab-notes/2026-04-08-Llamacpp-Local-LLM-Inference-for-Accessible-Private-AI|Llamacpp Local LLM Inference for Accessible Private AI]] · [▶ source](https://www.youtube.com/watch?v=P8m5eHAyrFM)
- 2026-04-21: Local Mistral · [▶ source](https://www.youtube.com/watch?v=5QEDNZlDf-c)