---
type: concept
domain: ai-agents
updated: 2026-05-23
group: open-systems-local-models
---
# Qwen LLMs

[[entities/qwen|Qwen]] LLMs refers to the series of [[concepts/large-language-model-llm|large language models]] developed by [[entities/alibaba|Alibaba]] Cloud's Tongyi Lab. The ecosystem includes various parameter sizes optimized for different [[concepts/hardware|hardware]] constraints and task complexities, ranging from small [[concepts/parameter-models|parameter models]] for edge devices to massive [[concepts/models|models]] for enterprise-grade [[concepts/reasoning|reasoning]].

## Key Models & Variants

- **[[entities/qwen-2|Qwen 2]].5/3.x Series**: Recent iterations focusing on improved reasoning, [[concepts/coding|coding]], and multilingual [[concepts/capabilities|capabilities]].
- **Parameter Efficiency**: Notable advancements in performance-per-parameter, allowing competitive results with smaller footprints compared to predecessors.

## Recent Benchmarks & Use Cases

- **[[concepts/local-agent|Local Agent]] Performance**:
	- Evaluation of **[[concepts/qwen3-model|Qwen 3.6]] 27B** vs **[[concepts/qwen-36-35b-a3b|Qwen 3.6 35B]]** in local [[concepts/ai-agent-workflows|AI agent workflows]].
	- Primary test case: Automating Anki translation tasks.
	- Source analysis: [[lab-notes/2026-05-23-Qwen-3.6-27B-vs-35B-Local-AI-Agents-Anki-Translation-Per|Qwen 3.6 27B vs 35B Local AI Agents: Anki Translation Performance]] details [[concepts/comparative-testing|comparative testing]] by [[entities/jarods-journey|Jarods Journey]], highlighting trade-offs between [[concepts/speed|inference speed]] and translation [[concepts/accuracy|accuracy]] in local environments.

## Technical Characteristics

- **[[concepts/architecture|Architecture]]**: Transformer-based, supporting extended [[concepts/context-windows|context windows]].
- **[[concepts/deployment|Deployment]]**: Optimized for [[concepts/local-execution|local execution]] via [[entities/ollama]] or [[entities/lm-studio]], with specific variants designed for [[concepts/consumer-grade-gpus|consumer-grade GPUs]].
- **[[concepts/multilingual-support|Multilingual Support]]**: Strong performance in East Asian languages alongside English.

## References

- [[entities/alibaba|Alibaba]] Cloud Tongyi Lab Official Documentation
- [[concepts/open-source-machine-learning|Hugging Face]] Model Hub: [[entities/qwen|Qwen]] Series
