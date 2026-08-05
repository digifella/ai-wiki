---
domain: ai-agents
group: model-efficiency-compression
type: concept
tags:
  - "AI/Alignment"
  - "AI/Evaluation"
  - "GoodhartsLaw"
  - "Optimization"
updated: 2026-07-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Output Optimization

**Output Optimization** refers to the process of refining AI model outputs to maximize specific metrics, such as coherence, relevance, or [[concepts/token-optimization|token efficiency]]. While essential for usability, aggressive optimization risks misalignment with underlying intelligence or truth, particularly when [[concepts/proxy-metrics|proxy metrics]] diverge from actual performance.

## Key Risks & Phenomena

- **Metric [[concepts/gaming|Gaming]]**: Optimizing for surface-level [[concepts/indicators|indicators]] (e.g., token count, fluency) rather than semantic [[concepts/accuracy|correctness]] or [[concepts/reasoning|reasoning]] depth.
- **[[concepts/perverse-incentives|Goodhart's Law]]**: When a measure becomes a target, it ceases to be a good measure. In AI, this manifests when models optimize for reward signals without improving actual capability.
- **Token vs. Intelligence**: A critical distinction between generating high volumes of plausible text and demonstrating genuine reasoning or [[concepts/problem-solving|problem-solving]] abilities.

## Recent Developments

- **The "Billion-Dollar Mistake"**: Industry focus has historically prioritized token generation and consumption over verifiable intelligence gains. This misalignment creates systems that appear competent but lack robust reasoning [[lab-notes/2026-07-11-Goodharts-Law-in-AI-The-Cost-of-Confusing-Tokens-with-In|Goodhart's Law in AI: The Cost of Confusing Tokens with Intelligence]].
- **Evaluation Shifts**: Emerging frameworks emphasize reasoning traces and outcome [[concepts/verification|verification]] over fluency scores to mitigate Goodhart's Law effects.

## References

- [Goodhart's Law in AI: The Cost of Confusing Tokens with Intelligence](https://www.youtube.com/watch?v=iX-3oJwyLi4)
