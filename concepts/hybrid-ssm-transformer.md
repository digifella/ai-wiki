---
type: concept
domain: ai-agents
tags:
  - "hybrid-architecture"
  - "state-space-models"
  - "transformers"
  - "long-context"
  - "neural-networks"
aliases:
  - "Hybrid SSM-Transformer"
  - "Jamba architecture"
summary: A hybrid neural network architecture combining State Space Models with Transformers to enable efficient long-sequence processing and linear scaling.
updated: 2026-07-11
group: multimodal-generative-media
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Hybrid SSM-Transformer

A hybrid [[concepts/neural-network|neural network]] architecture combining **[[concepts/ssm|State Space Models]] (SSMs)** with **[[concepts/transformers|Transformers]]** to achieve efficient long-sequence processing. This design mitigates the quadratic complexity of standard [[concepts/transformers|Transformers]] while maintaining [[entities/high-performance|high performance]] on long-context tasks.

- **Key [[concepts/innovation|innovation]]**: Integrates SSMs (for linear-time [[concepts/transformer-models|sequence modeling]]) with Transformers (for expressive token interaction), enabling **256k [[concepts/context-window|context window]]** capabilities without prohibitive computational costs.
- **Real-[[entities/earth|world]] implementation**: [[entities/jamba|Jamba]] 1.7 by [[entities/ai21-labs|AI21 Labs]], featuring:
  - **Hybrid SSM-Transformer [[concepts/foundation-model|foundation model]]** (emphasized in [demonlamstration video](https://www.youtube.com/watch?v=wheKod-yHHM))
  - **256k [[concepts/context-window|context window]]** for extended [[concepts/document-processing|document analysis]]
  - Available in **[[entities/jamba-mini-17|Jamba Mini 1.7]]** and **[[entities/jamba-large-17|Jamba Large 1.7]]** variants (video focus: **Jamba Large 1.7**)
  - Official [[concepts/deployment|release]] info: [ai21.com/jamba](https://www.ai21.com/jamba/)
- **Advantage**: [[concepts/musical-scales|Scales]] linearly with sequence length (vs. quadratic for pure Transformers), enabling practical long-context applications.

2026 04 14 256k [[concepts/context-window|context window]] LLM

**Backlinks**: 2026 04 14 256k context window LLM
## Source Notes
- 2026-04-23: <https://www.youtube.com/watch?v=wheKod-yHHM> This video provides a detailed overview and demonstration of [[entities/ai21-labs|AI21 Labs]]' newly released [[entities/jamba|Jamba]] 1.7 model, emphasizing its unique [[concepts/hybrid-ssm-transformer|hybrid SSM-Transformer]] architecture. <https://www.ai21.com/jamba/>
- 2026-04-26: DeepSeek · [▶ source](https://www.youtube.com/watch?v=nHDnyNzvF50)
- 2026-04-30: NVIDIA Nemotron 3 · [▶ source](https://www.youtube.com/watch?v=XNaI4Xd4qXc)
