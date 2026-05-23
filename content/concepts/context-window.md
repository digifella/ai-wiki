---
type: concept
domain: ai-agents
updated: 2026-05-23
group: reasoning-context-prompting
---
# Context Window

The maximum number of [[concepts/tokens|Tokens]] an LLM can process within a single [[concepts/inference|Inference]] cycle, representing the model's functional "working [[concepts/memory|memory]]."

## Core Mechanics
- **Capacity**: Defines the boundary of information the model can "attend" to simultaneously.
- **Complexity**: Historically limited by the [[concepts/attention|Attention]] Mechanism, where computational costs often scale quadratically with sequence length.
- **[[concepts/scaling|Scaling]] Strategies**:
	- FlashAttention for optimized [[concepts/memory|memory]] and [[concepts/compute|compute]] usage.
	- RoPE (Rotary Positional [[concepts/vector-representations|Embeddings]]) for context extrapolation.
	- [[concepts/rag]] ([[concepts/traditional-rag|Retrieval-Augmented Generation]]) to extend effective context via external [[concepts/source-discovery|data retrieval]].
- **[[concepts/context-management|Context Management]] Patterns**:
	- **[[concepts/subagents|Subagents]] ([[concepts/claude-code|Claude Code]])**: Utilizing [[concepts/specialized-ai-assistants|specialized AI assistants]] for [[concepts/task-specific-workflows|task-specific workflows]] to improve [[concepts/context-efficiency|context efficiency]] (Source: [[entities/ai-labs|AI Labs]]).

## Recent Model Examples
- **[[entities/jamba|Jamba]] 1.7 ([[entities/ai21-labs|AI21 Labs]])**: Newly released **[[concepts/hybrid-ssm-transformer|hybrid SSM-Transformer]] [[concepts/architecture|architecture]]** supporting a **256k context window**. Available in **[[entities/jamba-mini-17|Jamba Mini 1.7]]** and **[[entities/jamba-large-17|Jamba Large 1.7]]** variants (demonstrated in [AI21 [[entities/labs|Labs]]' showcase](

## Backlinks
- 2026 04 14 [[concepts/developer-workflow|Claude Code workflow]] using [[concepts/sub-agents|sub agents]]
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: The End of the GPU Era? 1-Bit LLMs Are Here.
- 2026-04-08: Qwen 3.6 Plus: GREATEST Opensource AI Model EVER! Beats
- 2026-04-10: How to make [[entities/claude-code|Claude Code less dumb]]
- 2026-04-12: RotorQuant vs TurboQuant: 31x [[concepts/speed|Speed Claim - Reality Check (Local AI)]]