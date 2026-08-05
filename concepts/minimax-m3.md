---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "large-language-model"
  - "open-weight"
  - "minimax-m3"
  - "multimodal"
  - "sparse-attention"
aliases:
  - "MiniMax M3"
  - "M3 LLM"
  - "MiniMax Frontier Model"
summary: MiniMax M3 is an open-weight, natively multimodal large language model featuring sparse attention mechanisms for million-token context windows and strong performance in coding and agentic reasoning tasks.
updated: 2026-07-11
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# MiniMax M3

**[[entities/minimax|MiniMax]] M3** is an [[concepts/open-weight]] [[concepts/large-language-model]] notable for its frontier-level [[concepts/coding|coding]] capabilities, native [[concepts/modality|multimodality]], and implementation of Sparse [[concepts/attention-mechanisms|Attention mechanisms]]. It supports extended [[concepts/context-windows|context windows]] (up to 1M [[concepts/tokens|tokens]]) and demonstrates strong performance in agentic [[concepts/reasoning|reasoning]] tasks.

## Key Characteristics

*   **Open-Weight Architecture**: Available for [[concepts/local-deployment|local deployment]] and [[concepts/fine-tuning|fine-tuning]], distinguishing it from closed-source counterparts.
*   **[[concepts/native-multimodality|Native Multimodality]]**: Handles multiple data types natively rather than through adapter layers.
*   **[[concepts/sparse-attention-architecture|Sparse Attention]]**: Utilizes efficient [[concepts/attention|attention]] [[concepts/causes|mechanisms]] to scale to 1M context [[entities/windows|windows]] while reducing computational overhead.
*   **Optimized [[concepts/inference|Inference]] Efficiency**: The model employs specific optimizations in its [[concepts/self-attention|attention mechanism]] to enhance [[concepts/llm-inference-speed|inference speed]] and efficiency, as detailed in [[lab-notes/2026-06-22-Minimax-M3s-Optimized-Attention-for-Efficient-LLM-Infere|Minimax M3's Optimized Attention for Efficient LLM Inference]].

## References

*   [Minimax M3's Optimized Attention for Efficient LLM Inference](https://www.youtube.com/watch?v=-zIF318p7J8)
