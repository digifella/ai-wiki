---
type: entity
tags:
  - "machine-learning"
  - "neural-networks"
  - "architecture"
  - "scaling"
aliases:
  - "MoE"
  - "Mixture-of-Experts"
summary: A Mixture of Experts (MoE) architecture utilizes a gating mechanism to route input data to specialized neural network sub-models for efficient capacity scaling.
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# Mixture of Experts

A [[concepts/mixture-of-experts|Mixture of Experts]] (MoE) architecture combines multiple specialized [[concepts/neural-network|neural network]] sub-models (experts), with a gating mechanism routing input data to the most relevant experts. This enables efficient [[concepts/scaling|scaling]] of model capacity without linear computational cost increases.

## Recent Developments

- **[[entities/bob|IBM Panel]] Discussion (2026-04-14)**:
  * Host: [[entities/tim-hwang|Tim Hwang]]
  * Panelists:
    - [[entities/gabe-goodhart|Gabe Goodhart]] (Chief Architect, AI Open [[concepts/innovation|Innovation]])
    - [[entities/abraham-daniels|Abraham Daniels]] (Sr. Technical Product Manager, [[entities/granite|Granite]])
    - [[entities/aaron-baughman|Aaron Baughman]] (IBM [[entities/fellow|Fellow]], Master Inventor)
  * Key Topics:
    - "Fun-cember": Sudden influx of major [[concepts/model-releases|model releases]] at year-end
    - Validity debate of [[concepts/scaling-laws]]
    - [[concepts/agent-wars]] implications in AI competition
    - [[entities/amazon]] blocking [[entities/chatgpt]] and market dynamics
  * Video: [IBM Panel Discussion](https://www.youtube.com/watch?v=_lZgapJzFho)

2026 04 14 Ibm panel
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Benchmarking-SLMs-Identifying-4GB-General-Problem-Solving-Champions|Benchmarking SLMs Identifying 4GB General Problem Solving Champions]] · [▶ source](https://www.youtube.com/watch?v=wQxawC3sv68)
- 2026-04-10: [[lab-notes/2026-04-10-DeepSeek-Engram-Solving-LLM-Inefficiency-Through-Context-Aware|DeepSeek Engram Solving LLM Inefficiency Through Context Aware]] · [▶ source](https://www.youtube.com/watch?v=DmtoVnTkQnM)
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)
- 2026-04-19: [[lab-notes/2026-04-19-Qwen-36-35B-Full-Precision-vs-Ollama-Quantized-Performance-Memory-Trad|Qwen 36 35B Full Precision vs Ollama Quantized Performance Memory Trad]] · [▶ source](https://www.youtube.com/watch?v=RlGppgMDl9k)
