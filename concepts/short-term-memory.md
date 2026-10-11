---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "short-term-memory"
  - "cognitive-psychology"
  - "working-memory"
  - "coala-framework"
  - "ai-agents"
aliases:
  - "STM"
  - "Working Memory"
  - "Immediate Context"
  - "Cognitive Buffer"
summary: Short-term memory is a limited-capacity cognitive system that serves as an active buffer for sensory input and immediate processing, analogous to the context window in AI agent frameworks.
updated: 2026-07-12
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Short-Term Memory

**Short-term [[concepts/memory|memory]]** (STM) is a cognitive system capable of holding a limited amount of information in an active, readily available state for a brief period. Often used interchangeably with **working memory**, though the latter implies active manipulation of information, STM serves as the immediate buffer for sensory input before it is either discarded or encoded into Long-Term Memory.

## Key Characteristics
- **Capacity**: Typically limited to 7 ± 2 items (Miller's Law) or 4 chunks (Cowan's Model).
- **Duration**: Seconds to minutes without rehearsal.
- **Function**: Acts as a [[concepts/gateway|gateway]] between Sensory Memory and Long-Term Memory, enabling immediate [[concepts/cognition|cognition]], [[concepts/decision-making|decision-making]], and [[concepts/conscious-processing|conscious processing]].

## AI Agent Analogy: CoALA Framework
In the context of [[concepts/ai-technologies|artificial intelligence]], specifically the [[concepts/coala-framework]] (Context, Operational, Agentic, Long-term), STM parallels the immediate [[concepts/context-window|context window]] or active [[concepts/reasoning|reasoning]] state of an agent.

- **Integration Point**: As detailed in [[lab-notes/2026-05-27-AI-Agent-Memory-Types-CoALA-Framework-Overview|AI Agent Memory Types: CoALA Framework Overview]], IBM's [[entities/martin-keen|Martin Keen]] outlines four critical memory types for [[concepts/agentic-ai|AI agents]], explicitly drawing analogies to human cognitive structures.
- **Short-Term Equivalent**: In this framework, the immediate context or "scratchpad" used by an LLM during [[concepts/inference|inference]] functions as the AI's short-term memory, holding transient data necessary for current [[concepts/workflow-automation|task execution]] before being summarized or stored.
- **Distinction**: Unlike human STM which decays rapidly, AI short-term memory is bounded by context window limits rather than biological decay, requiring strategic [[concepts/summarization|summarization]] or [[concepts/document-retrieval|retrieval]] [[concepts/causes|mechanisms]] to extend effective capacity.

## Related Concepts
- Working [[concepts/memory|Memory]]
- Long-Term Memory
- Sensory Memory
- Chunking
