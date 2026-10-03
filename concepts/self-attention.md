---
type: concept
domain: ai-agents
tags:
  - "machine-learning"
  - "transformers"
  - "attention-mechanisms"
  - "transformer-architecture"
  - "long-range-dependencies"
  - "context-window"
aliases:
  - "attention mechanism"
summary: A core mechanism within Transformer architectures that computes the relative importance of all tokens in a sequence to capture long-range dependencies.
updated: 2026-07-12
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# self-attention

A core mechanism within [[concepts/transformer-architectures|Transformer architectures]] that allows a model to [[concepts/compute|compute]] the relative [[concepts/value|importance]] of all [[concepts/tokens|tokens]] in a sequence, enabling the capture of long-range dependencies.

### Recent Architectural Advancements
- **[[concepts/hybrid-ssm-transformer|Hybrid SSM-Transformer]] Architectures**:
    - [[entities/ai21-labs|AI21 Labs]] has released [[entities/jamba|Jamba 1.7]], which utilizes a hybrid structure to optimize performance.
    - Available in **[[entities/jamba-mini-17|Jamba Mini 1.7]]** and **[[entities/jamba-large-17|Jamba Large 1.7]]** flavors.
- **[[concepts/context-window|Context Window]] [[concepts/scaling|Scaling]]**:
    - Recent developments are pushing the boundaries of [[concepts/context-window|context window]] capabilities, with models now reaching up to 256k tokens.

---
2026 04 14 256k [[concepts/context-window|context window]] LLM
## Source Notes
- 2026-04-13: EXPOSED: The Dirty Little Secret of AI (On a 1979 PDP-11)
