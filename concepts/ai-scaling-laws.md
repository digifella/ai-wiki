---
type: concept
domain: ai-agents
tags:
  - "scaling-laws"
  - "ai-performance"
  - "compute-efficiency"
  - "power-law"
  - "model-development"
aliases:
  - "AI Scaling Laws"
  - "Compute Scaling Laws"
  - "Performance Scaling"
  - "Parameter Scaling"
summary: AI scaling laws describe the power-law relationship between model performance and resources such as parameters, data, and compute.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# AI scaling laws

[[concepts/relationships|Relationships]] describing how [[concepts/vllm|model performance]] [[concepts/musical-scales|scales]] with increased parameters, data, and [[concepts/compute|compute]]. Typically follow power-law patterns (e.g., loss ∝ N<sup>-α</sup> for [[concepts/parameter-count|parameter count]] N). Key implications:
- Predictable [[concepts/performance-gains|performance gains]] from [[concepts/scaling|scaling]]
- [[concepts/productivity-trade-offs|Efficiency trade-offs]] between data/compute/parameters
- Basis for [[concepts/knowledge-acquisition|model development]] strategies

## Recent Discussions

- [[entities/mixture-of-experts|Mixture of Experts]] podcast panel (hosted by [[entities/tim-hwang|Tim Hwang]]) featuring:
  * [[entities/gabe-goodhart]] (Chief Architect, AI Open [[concepts/innovation|Innovation]])
  * [[entities/abraham-daniels|Abraham Daniels]] (Sr. Technical Product Manager, [[entities/granite|Granite]])
  * [[entities/aaron-baughman|Aaron Baughman]] (IBM [[entities/fellow|Fellow]], Master Inventor)
- Key debate points:
  - Validity of traditional [[concepts/computational-scaling|scaling]] laws amid "Fun-cember" [[concepts/model-releases|model releases]] (end-of-year surge in major model launches)
  - Analysis of [[entities/amazon]] blocking [[entities/chatgpt]] as indicator of competitive dynamics
  - Questions about [[concepts/diminishing-returns|diminishing returns]] in scaling efficiency

2026 04 14 [[entities/bob|Ibm panel]]
## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
