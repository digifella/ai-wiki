---
type: concept
domain: ai-agents
summary: The sequential path of states, actions, and observations executed by an LLM Agent to achieve a specific goal.
updated: 2026-05-23
group: agent-systems-skills
---
# Agent trajectory

The sequential path of states, actions, and observations executed by an LLM [[entities/agent|Agent]] to achieve a specific goal.

## Context Engineering
The optimization of the trajectory through [[entities/langchain|Langchain]] [[concepts/external-knowledge|context engineering]]:
- **Definition**: The [[concepts/art|art and science]] of filling the [[concepts/context-window|context window]] with the precise information required [[concepts/assistive-technology|at]] each step of the agent's trajectory.
- **Key Components**:
	- [[concepts/instructions|Instructions]]
	- External Knowledge
	- [[concepts/tool-feedback|Tool feedback]]
- **[[concepts/adoption|Implementation]]**: Frameworks such as [[concepts/langgraph-framework|LangGraph]] provide the infrastructure to manage these context transitions and strategies.

---
**Backlinks**:
- 2026 04 14 Langchain [[concepts/context-engineering|context engineering]]
## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)