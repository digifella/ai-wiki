---
type: concept
domain: ai-agents
tags:
  - "citation-verification"
  - "fact-checking"
  - "hallucination-mitigation"
  - "source-validation"
  - "llm-evaluation"
aliases:
  - "Source Validation"
  - "Factual Verification"
  - "Citation Checking"
summary: Citation-Based Factual Evaluation is a methodology that verifies information by requiring explicit references from authoritative sources to distinguish verified facts from unverified assertions and mitigate AI hallucinat
updated: 2026-07-11
group: training-fine-tuning-evaluation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Citation-Based Factual Evaluation

A methodology for verifying information by requiring explicit, [[concepts/verifiable-citations|verifiable citations]] from authoritative sources rather than relying on model-generated assertions.

## Key Principles
- Requires source references for all factual claims
- Prioritizes peer-reviewed, primary sources over secondary interpretations
- Distinguishes between verified [[concepts/factual-knowledge|facts]] and unverified assertions
- Mitigates risks of [[concepts/ai-hallucinations]] in model outputs

## Related Concepts
- [[concepts/large-language-models]]: Prone to [[concepts/ai-hallucinations]] without citation [[concepts/verification|verification]]
- Fact-Checking: Requires source validation as core component
- Source [[concepts/verification|Verification]]: Foundation of citation-based evaluation

## Integration of New Note
- A 2026-03-06 [[entities/youtube|YouTube]] summary report (via [[concepts/gemini|Gemini]] 2.5 Flash) details [[concepts/ai-hallucinations]] as a pervasive issue in [[concepts/large-language-models]], where models generate plausible but factually incorrect outputs—a widespread problem not limited to minor bugs.

2026 04 14 AI Hallicinations
