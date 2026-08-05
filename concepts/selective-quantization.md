---
type: concept
domain: ai-agents
tags:
  - "llm-compression"
  - "quantization"
  - "parameter-efficiency"
  - "model-optimization"
  - "memory-footprint"
aliases:
  - "Selective Quantization"
  - "Non-uniform Quantization"
  - "Layer-aware Quantization"
  - "Mixed Precision Compression"
summary: Selective quantization is an optimization technique for large language models that applies varying precision levels to different neural network components, preserving accuracy in sensitive areas while aggressively compre
updated: 2026-07-12
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Selective Quantization

**Selective [[concepts/parameter-reduction|Quantization]]** is an optimization technique in [[concepts/large-language-models]] (LLMs) that applies varying [[concepts/accuracy|precision]] levels to different parts of a [[concepts/neural-network|neural network]]. Unlike uniform [[concepts/precision-reduction|quantization]], it identifies and preserves higher precision for sensitive layers or parameters while aggressively compressing less critical components. This approach maximizes parameter efficiency and reduces [[concepts/4gb-memory|memory footprint]] with minimal impact on [[concepts/vllm|model performance]].

## Key Applications & Developments

- **DwarfStar (DS4) System**: A system [[entities/national-academies|engineering]] project demonstrating extreme compression capabilities.
	- Enables running the [[entities/deepseek]] V4 Flash model (284 billion parameters) on standard laptop hardware.
	- Utilizes selective [[concepts/quantisation|quantization]] to bypass typical [[concepts/ram-limitations|memory constraints]] associated with models of this scale.
	- Detailed analysis available in: [[lab-notes/2026-06-19-DwarfStar-Enabling-284B-DeepSeek-V4-Flash-on-Laptops-via|DwarfStar: Enabling 284B DeepSeek V4 Flash on Laptops via Selective Quantization]]

## Technical Context

- **Precision Trade-offs**: Balances FP16/FP32 [[concepts/preservation|preservation]] in [[concepts/attention-heads|attention heads]] or residual connections against INT4/INT8 quantization in dense linear layers.
- **Hardware Efficiency**: Critical for deploying MoE ([[concepts/mixture-of-experts|Mixture of Experts]]) architectures on [[concepts/consumer-grade-gpus|consumer-grade GPUs]] with limited [[concepts/vram|VRAM]].

## References

- [DwarfStar: Enabling 284B DeepSeek V4 Flash on Laptops via Selective Quantization](https://www.youtube.com/watch?v=9gHcmhUDJfw)
