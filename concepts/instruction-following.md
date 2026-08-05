---
type: concept
domain: ai-agents
tags:
  - "instruction-following"
  - "llm-capabilities"
  - "local-inference"
  - "model-quantization"
  - "prompt-compliance"
  - "autonomous-agents"
  - "self-improvement"
aliases:
  - "Instruction Adherence"
  - "Prompt Following"
  - "Command Execution"
  - "Task Compliance"
summary: Instruction Following is the ability of a language model to accurately interpret and execute user instructions, often involving complex reasoning, multi-step tasks, or specific formatting requirements. Recent advancements include autonomous skill creation via commands like /learn.
updated: 2026-07-11
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Instruction Following

The ability of a [[concepts/statistical-language-modeling|language model]] to accurately interpret and execute user [[concepts/instructions|instructions]], often involving complex [[concepts/reasoning|reasoning]], multi-step tasks, or specific formatting requirements. Critical for practical applications of [[concepts/large-language-model]]s in user-facing systems.

## Best Small LLMs for Local Inference (for instruction following)

For running well-instructed [[concepts/large-language-model]]s on a 48GB [[concepts/vram|VRAM]] [[entities/nvidia|NVIDIA]] GPU, the following quantized models are strong contenders:

- **[[entities/llama|Llama]] 3.1 70B (quantized)**: [[entities/llama-31|Llama 3.1]] model ([[entities/meta-ai|Meta]]) that effectively runs on 48GB VRAM for [[concepts/instruction-following-tasks|instruction-following tasks]]
- **[[entities/gemma|Gemma]] 2 27B (quantized)**: [[entities/gemma-2|Gemma 2]] model providing strong performance

## Autonomous Skill Creation and Self-Improvement

Recent developments in [[concepts/ai-agents|AI Agents]] demonstrate advanced instruction following capabilities through [[concepts/self-evolving-ai-agent-skills-optimization|autonomous skill acquisition]]. Notable examples include:

- **[[concepts/agentic-ai|Hermes Agent]]**: An [[concepts/open-source|open-source]] [[concepts/self-evolution|self-improving AI]] operator developed by [[entities/nous-research|Nous Research]]. It features a "[[concepts/skills|skills]]" module and a `/learn` command that allows the agent to autonomously create and integrate new capabilities. See [[lab-notes/2026-06-27-Hermes-Agent-Autonomous-Skill-Creation-via-learn-Command|Hermes Agent: Autonomous Skill Creation via /learn Command Introduction and Demo]] for details.

## References

- [Hermes Agent: Autonomous Skill Creation via /learn Command Introduction and Demo](https://www.youtube.com/watch?v=ex3u0tDyrao)
