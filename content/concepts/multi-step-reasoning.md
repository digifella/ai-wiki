---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "cognitive-architecture"
  - "logic"
  - "llm"
  - "chain-of-thought"
  - "problem-decomposition"
  - "multimodal-reasoning"
  - "logical-consistency"
  - "sequential-logic"
aliases:
  - "chain-of-thought"
  - "step-by-step reasoning"
  - "sequential reasoning"
summary: "The process of decomposing a complex problem into a sequence of discrete, logical operations to reach a final solution."
updated: 2026-04-27
group: reasoning-context-prompting
---
# Multi-step reasoning

The process of decomposing a complex problem into a sequence of discrete, logical operations or "steps" to arrive at a final [[concepts/solution|solution]] or conclusion.

### Core Principles
- Requires [[concepts/coherent-reasoning|coherent reasoning]] to maintain [[concepts/logical-consistency|logical consistency]] across the entire chain.
- Relies on the ability to process and integrate disparate data types (e.g., text, [[concepts/code|code]], and [[concepts/computer-vision|vision]]) within a single logical [[concepts/flow|flow]].
- Often implemented through Chain-of-Thought (CoT) architectures.

### Advancements in Large Language Models
- **[[entities/gemini-3|Gemini 3]] Implementation:**
	- Capable of executing 10-15 sequential steps of [[concepts/reasoning|reasoning]] within a single task.
	- Simultaneous processing of video, [[concepts/images|images]], and code to inform the reasoning chain.
	- Direct [[concepts/integration|integration]] with [[concepts/google-workspace|Google Workspace]] for tool-augmented reasoning and execution.

---
**Backlinks:**
- 2026 04 14 8 [[concepts/gemini|Gemini]] [[concepts/scenarios|use cases]]
