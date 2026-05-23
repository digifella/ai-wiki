---
type: concept
domain: ai-agents
updated: 2026-05-23
group: reasoning-context-prompting
---
# One-Shot Build

A [[concepts/benchmark-testing|benchmarking]] paradigm requiring an AI model to generate a complete, complex [[concepts/output|output]] (e.g., full product documentation) from a single, comprehensive input without [[concepts/iterative-refinement|iterative refinement]] or follow-up queries.

## Key Characteristics
- Tests model's ability to synthesize large, multi-faceted inputs in one pass
- Emulates real-world [[concepts/scenarios|scenarios]] where [[concepts/prompt-engineering|prompt engineering]] is impractical
- Measures holistic understanding beyond simple task completion

## Related Comparisons
- [[entities/claude-opus|Claude Opus]] 4.5 and [[entities/chatgpt|ChatGPT]] 5.2 were evaluated on a "One-Shot Build" benchmark using a massive [[concepts/product-requirements-document|Product Requirements Document]] ([[concepts/prd|PRD]]) for the [[entities/showbiz|Showbiz]] app
  - Input: Comprehensive documentation folder containing [[concepts/technical-specs|technical specs]], [[concepts/design|design]] [[concepts/tokens|tokens]], and personality guidelines
  - Task: Generate a functional PRD from raw input without iterative [[concepts/feedback|feedback]]
- Uses an "Impossible" [[concepts/prd|PRD]] designed by [[entities/matt-maher|Matt Maher]] to push model boundaries

## Backlinks
- 2026 04 14 [[concepts/feynmans-three-step-scientific-method|Compare]] of [[concepts/claude-ai|Claude]] [[entities/opus-45|Opus 45]] vs [[entities/chatgpt|ChatGPT]] 52 [[entities/matt-maher|Matt Maher]]
## Source Notes

- 2026-04-23: <https://www.youtube.com/watch?v=iUzrE3-FHgA> Summary of comparison between [[entities/openai|OpenAI]]'s [[concepts/gpt-5|GPT-5]].2 models and [[entities/anthropic|Anthropic]]'s [[entities/claude-opus-4|Claude Opus 4]].5 using a complex "One-Shot Build" benchmark.