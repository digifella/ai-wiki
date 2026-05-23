---
type: concept
domain: ai-agents
summary: The degradation of a large language model's ability to accurately retrieve and reason over information within a context window due to the accumulation of noise or competing instructions.
updated: 2026-05-23
group: reasoning-context-prompting
---
# Context rot

## Definition
The degradation of an [[concepts/large-language-model]]'s ability to accurately retrieve, prioritize, and reason over relevant information within a [[concepts/context-window]] due to the accumulation of noise, irrelevant data, or competing [[concepts/instructions|instructions]].

## Core Phenomena
- **Lost in the middle:** The tendency for [[concepts/models|models]] to exhibit reduced [[concepts/search-precision|retrieval accuracy]] for information located in the center of a long prompt.
- **Instruction Drift:** The gradual failure of a model to adhere to original [[concepts/system-instructions|system instructions]] as the context becomes saturated with new, potentially conflicting data.
- **[[concepts/attention-mechanisms|Attention]] Dilution:** The reduction of signal-to-noise ratio as the density of non-essential [[concepts/tokens|tokens]] increases, making it harder for the [[concepts/self-attention|Attention Mechanism]] to focus on critical [[concepts/tokens|tokens]].

## Mitigation Strategies
- **Multi-level [[concepts/memory|Memory]] Architectures:** [[concepts/adoption|Implementation]] of structured [[concepts/memory|memory]] systems to manage information density and improve [[concepts/ai-recall|AI Recall]] 2026 04 25 [[concepts/ai-assisted-coding|Claude Code]] Memory Systems Improving AI [[concepts/recall|Recall]] and Mitigating Context Rot.
- **[[concepts/api-cost-optimization|Claude Code]] Memory Systems:** Use of six distinct levels of memory systems designed to maintain context [[concepts/integrity|integrity]] and mitigate degradation during long-[[concepts/running|running]] [[concepts/agentic-tasks|agentic tasks]] 2026 04 25 [[concepts/claude-code|Claude Code]] Memory Systems Improving AI Recall and Mitigating Context Rot.

## Related Concepts
- RAG ([[concepts/contextualized-language-understanding|Retrieval-Augmented Generation]])
- [[concepts/data-hallucination|Hallucination]]
- Long-context LLMs
- [[concepts/agentic-ai]]
## Source Notes
- 2026-04-25: Claude Code · [▶ source](https://www.youtube.com/watch?v=UHVFcUzAGlM)
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)