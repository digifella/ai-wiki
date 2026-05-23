---
type: concept
domain: ai-agents
updated: 2026-05-23
group: multimodal-generative-media
---
# Hybrid SSM-Transformer

A hybrid [[concepts/neural-network|neural network]] [[concepts/architecture|architecture]] combining **[[concepts/ssm|State Space Models]] (SSMs)** with **[[concepts/transformers|Transformers]]** to achieve efficient long-sequence processing. This [[concepts/design|design]] mitigates the quadratic complexity of standard [[concepts/transformers|Transformers]] while maintaining [[entities/high-performance|high performance]] on long-context tasks.

- **Key [[concepts/innovation|innovation]]**: Integrates SSMs (for linear-time sequence modeling) with Transformers (for expressive token interaction), enabling **256k [[concepts/context-window|context window]]** [[concepts/capabilities|capabilities]] without prohibitive computational costs.
- **Real-world [[concepts/adoption|implementation]]**: [[entities/jamba|Jamba]] 1.7 by [[entities/ai21-labs|AI21 Labs]], featuring:
  - **Hybrid SSM-Transformer [[concepts/foundation-model|foundation model]]** (emphasized in [demonlamstration video](https://www.youtube.com/watch?v=wheKod-yHHM))
  - **256k [[concepts/context-window|context window]]** for extended document analysis
  - Available in **[[entities/jamba-mini-17|Jamba Mini 1.7]]** and **[[entities/jamba-large-17|Jamba Large 1.7]]** variants (video focus: **Jamba Large 1.7**)
  - Official release info: [ai21.com/jamba](https://www.ai21.com/jamba/)
- **Advantage**: [[concepts/musical-scales|Scales]] linearly with sequence length (vs. quadratic for pure Transformers), enabling practical long-context [[concepts/software|applications]].

2026 04 14 256k [[concepts/context-window|context window]] LLM

**Backlinks**: 2026 04 14 256k context window LLM
## Source Notes
- 2026-04-23: <https://www.youtube.com/watch?v=wheKod-yHHM> This video provides a detailed overview and demonstration of [[entities/ai21-labs|AI21 Labs]]' newly released [[entities/jamba|Jamba]] 1.7 model, emphasizing its unique [[concepts/hybrid-ssm-transformer|hybrid SSM-Transformer]] [[concepts/architecture|architecture]]. <https://www.ai21.com/jamba/>
- 2026-04-26: DeepSeek · [▶ source](https://www.youtube.com/watch?v=nHDnyNzvF50)
- 2026-04-30: NVIDIA Nemotron 3 · [▶ source](https://www.youtube.com/watch?v=XNaI4Xd4qXc)