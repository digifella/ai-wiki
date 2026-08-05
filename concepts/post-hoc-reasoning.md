---
type: concept
domain: ai-agents
tags:
  - "expert-systems"
  - "dreyfus-limitation"
  - "model-training"
  - "reasoning-fallacy"
  - "ai-history"
aliases:
  - "Rationalization"
  - "After-the-fact justification"
summary: The concept explores how the proposal by Dreyfus and Dreyfus foreshadowed limitations in the training of 1980s expert systems.
updated: 2026-07-12
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Post Hoc Reasoning

Post hoc [[concepts/reasoning|reasoning]] refers to the practice of constructing explanations for decisions or outputs after the fact, rather than through transparent logical processes during [[concepts/decision-making|decision-making]]. In [[concepts/ai-technologies|artificial intelligence]] systems, this occurs when a system produces a result through one mechanism (such as [[concepts/pattern-matching|pattern matching]] or numerical computation) but generates justifications through a separate, potentially disconnected process. The explanation is appended to legitimize the output rather than emerging naturally from the system's [[concepts/reasoning-steps|reasoning process]].

## Expert Systems and the 1980s Context

During the 1980s, expert systems were among the first widely deployed [[concepts/ai-powered-applications|AI applications]]. These systems encoded [[concepts/expertise|domain knowledge]] from human experts into rule-based formats, yet often struggled with [[concepts/opacity|transparency]]. Users received confident [[concepts/recommendations|recommendations]] paired with surface-level justifications that did not fully capture how the system weighted competing factors or made trade-offs. This gap between the decision mechanism and its explanation became a significant limitation as systems were deployed in high-stakes domains.

## The Dreyfus Critique

Hubert and Stuart [[entities/dreyfus|Dreyfus]], in their work on [[concepts/skill|skill]] acquisition, argued that [[concepts/expert-systems|rule-based systems]] could not replicate genuine expertise, which relies on intuitive [[concepts/thematic-analysis|pattern recognition]] developed through [[concepts/experience|experience]]. Their framework suggested that systems operating at lower levels of skill development—those dependent on explicit rules—would inevitably produce outputs that required post-hoc rationalization rather than stemming from integrated, [[concepts/coherent-reasoning|context-aware reasoning]]. This critique proved prescient: expert systems of that era demonstrated exactly this limitation, generating answers that were difficult to justify transparently.

Post hoc reasoning remains relevant to contemporary AI systems. Modern [[concepts/artificial-intelligence-models|machine learning models]], particularly [[concepts/deep-neural-networks|deep neural networks]], face similar challenges: their outputs often exceed the [[concepts/clarity-slider|clarity]] of their internal decision pathways, requiring explanation [[concepts/causes|mechanisms]] applied after computation. Understanding post hoc reasoning helps clarify the distinction between a system that can justify its decisions and one that can only generate plausible narratives for them.
## Source Notes
- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-07: LlamaIndex
- 2026-04-10: [[lab-notes/2026-04-10-LlamaIndexs-LiteParse-Agentic-Document-Processing-and-the-End-of|LlamaIndexs LiteParse Agentic Document Processing and the End of]] · [▶ source](https://www.youtube.com/watch?v=_lpYx03VVBM)
- 2026-04-29: Kim Percy
