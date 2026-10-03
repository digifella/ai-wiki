---
type: concept
domain: ai-agents
tags:
  - "llm"
  - "optimization"
  - "inference"
  - "caching"
  - "deepseek"
  - "kv-cache"
  - "cost-optimization"
  - "llm-inference"
  - "cost-reduction"
  - "latency"
  - "vram"
  - "paged-attention"
aliases:
  - "Prompt Cache"
  - "Token Caching"
  - "Context Caching"
  - "KV Cache"
summary: Prompt caching and KV Cache optimization techniques that store Key-Value Cache states for processed tokens to avoid recomputation during subsequent requests with overlapping prefixes, thereby reducing latency, computational costs, and VRAM fragmentation through mechanisms like Paged Attention.
updated: 2026-07-12
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Prompt Caching & KV Cache Optimization

**Prompt [[concepts/caching|Caching]]** is an optimization technique in [[concepts/large-language-model-llm|Large Language Model (LLM)]] inference that stores the results of previously processed [[concepts/tokens|tokens]] (specifically Key-Value Cache states) to avoid recomputation during subsequent requests with identical or overlapping prefixes. This significantly reduces latency and computational costs for repetitive context loading.

## Mechanism

- **KV State Reuse**: Instead of re-running the Transformer [[concepts/inference|forward pass]] for every token in the prompt, the system retrieves pre-computed hidden states for cached segments.
- **Prefix Matching**: Effective when queries share long common prefixes (e.g., [[concepts/system-prompts|system prompts]], document contexts, or multi-turn [[concepts/conversation-history|conversation history]]).
- **Hardware Efficiency**: Reduces demand on GPU [[concepts/memory|memory]] [[concepts/network-speed|bandwidth]] by minimizing redundant calculations.

## VRAM Optimization and Paged Attention

Recent advancements focus on optimizing [[concepts/vram|GPU memory]] (VRAM) utilization to address fragmentation and improve throughput at scale:

- **VRAM Fragmentation**: Traditional contiguous memory allocation for KV caches leads to significant waste and limits the number of concurrent requests a GPU can handle.
- **[[concepts/inference-optimization|Paged Attention]]**: Inspired by virtual [[concepts/memory-management|memory management]] in operating systems, this technique decouples logical KV cache blocks from physical memory blocks, allowing non-contiguous allocation and reducing fragmentation.
- **Throughput Improvement**: By efficiently managing VRAM, systems can serve more concurrent requests without increasing latency, directly impacting overall [[concepts/reasoning-efficiency|inference efficiency]].

See also: [[lab-notes/2026-07-05-KV-Cache-and-Paged-Attention-Accelerating-LLM-Inference|KV Cache and Paged Attention: Accelerating LLM Inference through VRAM Optimization]]

## References

- [KV Cache and Paged Attention: Accelerating LLM Inference through VRAM Optimization](https://www.youtube.com/watch?v=o0gkdZBtwEg) ([[entities/ibm-technology|IBM Technology]])
