---
type: concept
domain: ai-agents
tags:
  - "benchmarking"
  - "ai-evaluation"
  - "prompt-engineering"
  - "model-testing"
  - "product-requirements"
aliases:
  - "One-Shot Build Benchmark"
  - "Single-Pass Evaluation"
  - "No-Iteration Testing"
summary: A benchmarking paradigm that evaluates an AI model's ability to generate a complete, complex output from a single comprehensive input without iterative refinement or follow-up queries.
updated: 2026-07-12
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# One-Shot Build

A [[concepts/benchmark-testing|benchmarking]] paradigm requiring an AI model to generate a complete, complex output (e.g., full product documentation) from a single, comprehensive input without [[concepts/iterative-refinement|iterative refinement]] or follow-up queries.

## Key Characteristics
- Tests model's ability to synthesize large, multi-faceted inputs in one pass
- Emulates real-[[entities/earth|world]] [[concepts/scenarios|scenarios]] where [[concepts/prompt-engineering|prompt engineering]] is impractical
- Measures holistic understanding beyond simple task completion

## Related Comparisons
- [[entities/claude-opus|Claude Opus]] 4.5 and [[entities/chatgpt|ChatGPT]] 5.2 were evaluated on a "One-Shot Build" benchmark using a massive [[concepts/product-requirements-document|Product Requirements Document]] (PRD) for the [[entities/showbiz|Showbiz]] app
  - Input: Comprehensive documentation folder containing [[concepts/technical-specs|technical specs]], design [[concepts/tokens|tokens]], and personality guidelines
  - Task: Generate a functional PRD from raw input without iterative [[concepts/feedback|feedback]]
- Uses an "Impossible" PRD designed by [[entities/matt-maher|Matt Maher]] to push model boundaries

## Backlinks
- 2026 04 14 [[concepts/feynmans-three-step-scientific-method|Compare]] of [[concepts/claude-ai|Claude]] [[entities/opus-45|Opus 45]] vs [[entities/chatgpt|ChatGPT]] 52 [[entities/matt-maher|Matt Maher]]
## Source Notes

- 2026-04-23: <https://www.youtube.com/watch?v=iUzrE3-FHgA> Summary of comparison between [[entities/openai|OpenAI]]'s [[concepts/gpt-5|GPT-5]].2 models and [[entities/anthropic|Anthropic]]'s [[entities/claude-opus-4|Claude Opus 4]].5 using a complex "One-Shot Build" benchmark.
