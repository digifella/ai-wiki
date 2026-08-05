---
type: concept
domain: ai-agents
tags:
  - "transformer-architecture"
  - "pre-norm-dilution"
  - "attention-mechanism"
  - "kimi-model"
  - "residual-connections"
aliases:
  - "AttnRes"
  - "Attention Residuals"
summary: Attention Residuals is an architectural modification in Transformer-based models designed to mitigate pre-norm dilution by preserving the magnitude and influence of attention outputs in deep networks.
updated: 2026-07-11
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Attention Residuals

**[[concepts/attention|Attention]] Residuals** (often abbreviated as AttnRes) refers to architectural modifications in Transformer-based [[concepts/large-language-model]]s designed to mitigate issues associated with Pre-Normalization in [[concepts/deep-neural-networks|deep networks]], specifically the phenomenon known as [[concepts/pre-norm-dilution-problem|pre-norm dilution]].

## Core Problem: Pre-Norm Dilution
In standard pre-norm [[concepts/transformer-architectures|Transformer architectures]], the residual connections add the input to the output of the attention and feed-forward layers before normalization. In very deep networks, this can lead to "dilution" where the signal from the [[concepts/self-attention|attention mechanism]] becomes negligible compared to the residual path, effectively causing the attention blocks to vanish or become less influential in deeper layers. This limits the effective depth of the model and the complexity of patterns it can learn in later stages.

## Solution: Attention Residuals
Proposed by the [[entities/kimi-team|Kimi Team]] ([[entities/moonshot-ai|Moonshot AI]]), Attention Residuals introduce a mechanism to preserve the magnitude and influence of the attention output through deeper layers. By restructuring how residuals are applied or [[concepts/computational-scaling|scaling]] the attention outputs relative to the residual stream, the architecture ensures that [[concepts/attention-mechanisms|attention mechanisms]] remain potent contributors to the final representation, even in extremely deep [[concepts/large-language-model]]s.

## Key Developments
- **[[entities/kimi|Kimi]] Team Proposal**: The Kimi Team introduced this breakthrough to address the [[concepts/scaling|scaling]] limits of deep Pre-Normalization architectures.
  - See also: [[lab-notes/2026-05-25-Kimi-Teams-Attention-Residuals-LLM-Deep-Network-Breakthr|Kimi Team's Attention Residuals: LLM Deep Network Breakthrough for Pre-Norm Dilution]]
- **Impact**: Enables training of deeper models without the degradation of attention signal fidelity, potentially improving performance on tasks requiring [[concepts/complex-reasoning|complex reasoning]] or long-range dependency handling.

## Related Concepts
- Pre-Normalization
- Residual Connections
- [[concepts/transformer-models|Transformer Architecture]]
- [[concepts/large-language-model]]
