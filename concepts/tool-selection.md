---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "agentic-systems"
  - "sub-agents"
  - "local-llm"
  - "optimization"
  - "decision-models"
  - "jev"
aliases:
  - "Tool Invocation"
  - "Agent Function Selection"
  - "Capability Routing"
summary: The process by which an agent determines which specific functions or software utilities to invoke to resolve a given task.
updated: 2026-09-30
group: developer-tooling-clis
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-02T01:37:55+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Tool selection

The process by which an agent determines which specific functions, capabilities, or software utilities to invoke to resolve a given task.

### Optimization via Sub-agents
In advanced [[concepts/agentic-systems|agentic systems]] like [[entities/claude-code]], tool selection challenges (such as [[concepts/context-management|context management]] overhead) are addressed through the use of [[concepts/agentic-ai|agentic AI]]:
- **[[concepts/specialization|Specialization]]**: [[concepts/subagents|Sub-agents]] act as specialized assistants invoked to handle discrete, high-complexity task types.
- **Efficiency**: Improves performance by utilizing [[concepts/task-specific-configurations|task-specific configurations]], including:
	- Tailored [[concepts/system-prompts|System prompts]]
	- Optimized, reduced sets of Tools
	- Specific operational parameters

### Structured Decision Models
To address the inefficiency of relying on [[concepts/demystifying-llms|large language models]] for every decision point, specialized decision models like [[lab-notes/2026-09-30-Jev-Enhancing-AI-Agent-Efficiency-with-Structured-Decisi|Jev: Enhancing AI Agent Efficiency with Structured Decision Models]] are employed.
- **Core Problem**: Traditional architectures use LLMs for simple decisions (tool selection, [[concepts/safety-checks|safety checks]]), causing latency and cost overhead.
- **[[concepts/solution|Solution]]**: Jev and [[concepts/openjev|OpenJev]] provide [[concepts/custom-models|specialized models]] for the iterative "[[concepts/operational-loop|agent loop]]," enhancing [[concepts/software-reliability|reliability]] and efficiency by offloading structured decisions from the primary LLM.
- **Implementation**: Integrates into the [[concepts/agent-harness|agent harness]] to streamline [[concepts/acting|tool use]] and routing logic.

### Local LLM Implementations
- **[[concepts/qwen-model|Qwen3-Coder-Flash]]**: Demonstrates advanced capabilities in [[concepts/agentic-ai|agentic coding]] and [[concepts/acting|tool use]] within local environments.

### References
- [Jev: Enhancing AI Agent Efficiency with Structured Decision Models](https://www.youtube.com/watch?v=zaLQ0AnY9dI)
