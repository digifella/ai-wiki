---
type: concept
domain: ai-agents
summary: Instruction Following is the ability of a language model to accurately interpret and execute user instructions, often involving complex reasoning, multi-step tasks, or specific formatting requirements.
updated: 2026-05-23
group: reasoning-context-prompting
---
# Instruction Following

The ability of a [[concepts/statistical-language-modeling|language model]] to accurately interpret and execute user [[concepts/instructions|instructions]], often involving complex [[concepts/reasoning|reasoning]], multi-step tasks, or specific formatting requirements. Critical for practical [[concepts/software|applications]] of [[concepts/large-language-model]]s in user-facing systems.

## Best Small LLMs for Local Inference (for instruction following)

For [[concepts/running|running]] well-instructed [[concepts/large-language-model]]s on a 48GB [[concepts/vram|VRAM]] [[entities/nvidia|NVIDIA]] GPU, the following quantized [[concepts/models|models]] are strong contenders:

- **[[entities/llama|Llama]] 3.1 70B (quantized)**: [[entities/llama-31|Llama 3.1]] model ([[entities/meta-ai|Meta]]) that effectively runs on 48GB VRAM for [[concepts/instruction-following-tasks|instruction-following tasks]]
- **[[entities/gemma|Gemma]] 2 27B (quantized)**: [[entities/gemma-2|Gemma 2]] model providing strong performance for instruction-following
- **[[entities/qwen|Qwen]] 2 72B (quantized)**: [[entities/qwen-2|Qwen 2]] model excelling in instruction-following when quantized
- **[[entities/mistral|Mistral]] Large (quantized)**: [[entities/mistral-large|Mistral Large]] model offering strong instruction-following [[concepts/capabilities|capabilities]] when quantized

For [[concepts/running|running]] well-instructed small [[concepts/large-language-models|Large Language Models (LLMs)]] on a 48GB [[concepts/vram|VRAM]] NVIDIA GPU, [[entities/llama3-1|Llama 3.1]] 70B (quantized) is a strong contender. Other viable options include quantized versions of [[entities/gemma|Gemma]] 2 27B, [[entities/qwen|Qwen]] 2 72B, and [[entities/mistral|Mistral]] Large. These models, when properly quantized to reduce their size, can effectively run on a 48GB VRAM [[concepts/local-inference|local inference]] [[concepts/setup|setup]].
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-Benchmarking-SLMs-Identifying-4GB-General-Problem-Solving-Champions|Benchmarking SLMs Identifying 4GB General Problem Solving Champions]] · [▶ source](https://www.youtube.com/watch?v=wQxawC3sv68)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropic-Claude-Opus-47-Agentic-Coding-Multimodal-and-Memory-Advancem|Anthropic Claude Opus 47 Agentic Coding Multimodal and Memory Advancem]] · [▶ source](https://www.youtube.com/watch?v=uXF6bR4_5RY)
- 2026-04-22: OpenAI GPT Image 2 · [▶ source](https://www.youtube.com/watch?v=uvdRGC4cFhY)