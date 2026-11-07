---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ai-benchmark"
  - "wrapper-effect"
  - "gpt-6"
  - "benchmark-integrity"
  - "harness-influence"
  - "model-evaluation"
  - "prompt-engineering"
  - "superagent"
  - "agi-shift"
  - "claude-5"
  - "prompting-paradigm-shift"
aliases:
  - "evaluation-harness-effect"
  - "gpt-6-astra"
  - "claude-5-prompting"
summary: The wrapper effect describes how AI performance metrics are distorted by surrounding infrastructure, while recent shifts toward autonomous superagents and new prompting paradigms challenge traditional prompt engineering.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-13T20:42:19+00:00" }
group: enterprise-security-risk
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Wrapper Effect

The **wrapper effect** refers to the phenomenon where the performance metrics of an AI model are significantly distorted by the surrounding [[concepts/infrastructure|infrastructure]], [[entities/prompt-engineering|prompt engineering]], or evaluation harness rather than the model's intrinsic capabilities. This effect highlights that reported benchmark scores often reflect the quality of the evaluation-harness more than the model-capabilities.

## Key Principles
- **Infrastructure Dominance**: The choice of API, temperature settings, and post-processing steps can outweigh architectural improvements in the base model.
- **[[concepts/ai-benchmark-integrity|Benchmark Integrity]]**: Scores are not absolute; they are contingent on the specific evaluation context and tooling used.
- **Effort-Level Optimization**: Recent analyses of [[lab-notes/2026-09-14-GPT-6-Astra-Effort-Levels-Optimal-Balance-of-Efficiency|GPT-6 Astra Effort Levels: Optimal Balance of Efficiency and Quality]] suggest that optimal performance is not always achieved at maximum [[concepts/effort-levels|effort levels]], challenging the assumption that more complex prompting always yields better results.
- **Paradigm Shift**: The rise of superagent architectures and new prompting paradigms (e.g., [[entities/claude-5|Claude 5]]) indicates a move away from traditional [[entities/prompt-engineering|prompt engineering]] toward more autonomous interaction models.

## References
- [GPT-6 Astra Effort Levels: Optimal Balance of Efficiency and Quality](https://www.youtube.com/watch?v=OQipTxv9Qv0)
