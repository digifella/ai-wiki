---
type: concept
domain: ai-agents
tags:
  - "ai-coding-agents"
  - "conversation-management"
  - "context-optimization"
  - "agent-workflow"
  - "prompt-engineering"
aliases:
  - "agent-harness-design"
  - "long-running-agent-management"
summary: This document outlines a workflow for managing long-running AI coding agents using effective harnesses.
updated: 2026-05-23
group: reasoning-context-prompting
---
# Conversation Compaction

Conversation compaction is a technique for managing the [[concepts/context-window|context window]] limitations of long-[[concepts/running|running]] [[concepts/mcps|AI coding agents]]. As [[concepts/agents|agents]] execute extended workflows—such as complex [[concepts/code-generation|code generation]], [[concepts/debugging|debugging]], or multi-step development tasks—their conversation histories grow substantially. This growth can consume token budgets rapidly and degrade performance as the model must process increasingly lengthy context. Conversation compaction addresses this challenge by intelligently summarizing or condensing prior interactions while preserving essential information needed for task continuation.

## Implementation in Agent Workflows

Effective conversation compaction involves identifying key information from completed exchanges—such as decisions made, code artifacts generated, or problem states resolved—and replacing verbose interaction logs with concise summaries. This allows agents to maintain awareness of their progress and context without carrying the full [[concepts/text-transcript|transcript]] overhead. The approach is particularly valuable in [[concepts/developer-workflow|Claude Code Workflow]] [[concepts/scenarios|scenarios]], where agents iteratively develop and refine code across multiple steps.

## Practical Considerations

Successful compaction requires careful balance between brevity and completeness. Information critical to understanding current [[entities/agent|agent]] state, completed objectives, and architectural decisions should be retained, while redundant exchanges or intermediate [[concepts/reasoning-steps|reasoning steps]] can be safely condensed. The timing and frequency of compaction operations affects both [[concepts/token-optimization|token efficiency]] and agent performance, requiring calibration based on the specific task requirements and available context window.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Optimizing-Claude-Code-Hidden-Settings-for-Workflow-Output-and-Privacy|Optimizing Claude Code Hidden Settings for Workflow Output and Privacy]] · [▶ source](https://www.youtube.com/watch?v=pDoBe4qbFPE)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)