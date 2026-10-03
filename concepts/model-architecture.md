---
type: concept
domain: history-anthropology
tags:
  - "AI"
  - "Agent"
  - "Architecture"
  - "LLM"
  - "Harness"
  - "Model"
  - "Performance"
  - "model-architecture"
  - "ai-agents"
  - "prompt-engineering"
  - "Qwen"
  - "Benchmark"
  - "Local-LLM"
  - "State-Space"
  - "Recurrent"
  - "Transformers"
aliases:
  - "AI System Structure"
  - "Model Infrastructure Design"
summary: Model architecture defines the structural organization of AI components, with recent shifts emphasizing the critical role of the surrounding harness and orchestration in determining performance outcomes, alongside emerging alternatives to the Transformer paradigm.
updated: 2026-10-01
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T02:15:44+00:00" }
group: architecture-cities-heritage
---
<!-- domain-nav -->
> domain-badge slug=history-anthropology name=History & Anthropology

# Model Architecture

## Core Concept
**[[concepts/architecturetechnique|Model Architecture]]** refers to the structural design and organization of components within an [[concepts/artificial-intelligence|Artificial Intelligence]] system, particularly [[concepts/large-language-models|Large Language Models]] (LLMs). It defines how data flows, how parameters are organized, and how [[concepts/computational-resources|computational resources]] are utilized to generate outputs.

## Evolution: Harness vs. Model
Recent developments indicate a [[concepts/mindset-shift|paradigm shift]] where the surrounding [[concepts/infrastructure|infrastructure]] ("harness") is becoming as critical as the underlying [[concepts/model-weights|model weights]].

- **The Harness Shift**: The "harness" ([[entities/prompt-engineering|prompt engineering]], orchestration, tool use, and [[concepts/context-management|context management]]) is increasingly determining performance outcomes more than the base model's raw capabilities [[lab-notes/2026-10-01-Beyond-Transformers-Exploring-State-Space-and-Recurrent|Beyond Transformers: Exploring State-Space and Recurrent AI Model Architectures]].

## Emerging Architectures: Beyond Transformers
While **[[concepts/transformers|Transformers]]** have dominated since 2017 (underpinning models like ChatGPT, Claude, and Gemini), inherent weaknesses are driving research into alternative structures [[lab-notes/2026-10-01-Beyond-Transformers-Exploring-State-Space-and-Recurrent|Beyond Transformers: Exploring State-Space and Recurrent AI Model Architectures]].

- **Quadratic Complexity**: Transformers suffer from quadratic computational costs relative to [[concepts/context-length|sequence length]], limiting efficiency for long-context tasks.
- **[[concepts/ssm|State-Space Models]] (SSMs)**: Emerging architectures like Mamba offer linear scaling for sequence processing, potentially addressing the efficiency bottlenecks of [[concepts/attention-mechanisms|attention mechanisms]].
- **Recurrent Architectures**: Modern recurrent models are being revisited for their ability to maintain state with lower computational overhead compared to [[concepts/self-attention|self-attention]] layers.

## References
- [Beyond Transformers: Exploring State-Space and Recurrent AI Model Architectures](https://www.youtube.com/watch?v=GSAOe0JNt94)
