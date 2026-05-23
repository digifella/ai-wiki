---
type: concept
domain: ai-agents
tags:
  - "llm"
  - "ai-foundation"
  - "model-capabilities"
  - "system-design"
  - "research"
updated: 2026-05-23
group: applied-ai-workflows
---
# Intrinsic Capabilities

Foundational competencies encoded during Pre-[[concepts/training|training]], independent of downstream [[concepts/prompting|prompting]], [[concepts/fine-tuning]], or system-level Orchestration Layer. Determines baseline [[concepts/reasoning|reasoning]] fidelity, language comprehension depth, pattern extraction efficiency, and emergent behavior thresholds.

## Core Dimensions
- **[[concepts/computational-scaling|Scaling]] Alignment**: Capacity correlates predictably with [[concepts/parameter-count|parameter count]], [[concepts/compute|compute]] budget, and training corpus quality ([[concepts/scaling-laws]])
- **Emergent Reasoning**: Multi-step logic, [[concepts/code|code]] synthesis, and cross-modal alignment manifest non-linearly past critical training thresholds
- **Constraint Boundaries**: Inherent limits including [[concepts/context-window|context window]] saturation, [[concepts/data-hallucination|hallucination]] propensity, and alignment [[concepts/friction|friction]] points
- **Task-Generalization**: Baseline ability to transfer learned representations to unseen domains without explicit [[concepts/instruction-tuning|instruction tuning]]

## Intrinsic vs. Extrinsic Performance
- *Intrinsic*: Fixed by [[concepts/model-weights|model weights]], architectural topology (e.g., [[concepts/attention-mechanisms|attention mechanisms]], [[concepts/mixture-of-experts|mixture-of-experts]] routing), and [[concepts/data-curation|data curation]]
- *Extrinsic*: Dynamic modifiers including prompt [[concepts/structure|structure]], [[concepts/tool-use-automation|tool-use]] delegation, RAG pipelines, and runtime [[concepts/power|control]] [[concepts/flow|flow]]
- Performance delta increasingly decouples from raw [[concepts/parameter-scaling|parameter scaling]]; marginal gains now require systematic [[concepts/harness-engineering]] rather than architectural overhauls

## Recent Insights
- Performance variance in modern LLMs is increasingly driven by orchestration [[concepts/software|code]] rather than base architectural modifications
- System-level harnessing (prompt routing, [[concepts/tool-chaining|tool chaining]], [[concepts/feedback|feedback]] [[concepts/loops|loops]]) often yields higher ROI than marginal weight updates
- Engineering focus has shifted from raw parameter [[concepts/scaling|scaling]] to deterministic control flow around stochastic generators
- See detailed breakdown in [[lab-notes/2026-05-05-Orchestration-Over-Architecture-Harness-Engineering-for|Orchestration Over Architecture: Harness Engineering for Optimal LLM Performance]]

## Related Concepts
- Emergent Abilities
- [[concepts/scaling-laws]]
- [[entities/prompt-engineering]]
- System [[concepts/architecture|Architecture]]
- Tool Use & [[concepts/function-calling|Function Calling]]
- Alignment & Safety
