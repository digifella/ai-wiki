---
type: concept
domain: ai-agents
updated: 2026-04-14
group: agent-systems-skills
---
- "research"
  - "ai"
  - "multi-[[entities/agent|agent]]"
  - "[[concepts/flowise|flowise]]"
  - "[[entities/anthropic-institute|anthropic]]"
group: agent-systems-[[concepts/skills|skills]]

# Multi-agent research system

A collaborative [[concepts/architecture|architecture]] employing specialized AI [[concepts/agents|agents]] to perform complex research tasks, overcoming single-LLM limitations like [[concepts/data-hallucination|hallucination]] and shallow analysis through iterative, role-based workflows.

**Key features**:
- Emulates human research methodology via [[concepts/agent-collaboration|agent collaboration]]
- Uses distinct agent roles (researcher, critic, summarizer)
- Cross-verifies information to reduce hallucinations
- Enables deeper exploration through [[concepts/iterative-refinement|iterative refinement]]

**Recent implementation**:
- Anthropic multi agent [[concepts/visualization-generation|deep Research]] agent (2026-04-14): Flowise-based system inspired by Anthropic's approach
  - Video guide: <https://www.youtube.com/watch?v=GPsKnsYJPiI>
  - [[concepts/creator|Creator]]: [[entities/leon-van-zyl|Leon van Zyl]]
  - GitHub repository: <https://github.com/leonvanzyl/flowise-masterclass-2025/tree/master/Deep%20Research%20Agentflow>
  - Designed to overcome single LLM limitations (hallucination, insufficient depth)
  - Core concept: [[concepts/deep-research-agent-flow|deep research agent flow]]
  - Flowise registration link: <https://cloud.flowiseai.com/register?via=leonvanzyl>
- Addresses single-LLM limitations via agent-based [[concepts/workflow|workflow]]
- Structured as [[concepts/iterative-research|iterative research]] [[concepts/flow|flow]] with agent [[concepts/specialization|specialization]]

**Related concepts**:
- [[entities/flowise|Flowise]]
- [[entities/anthropic]]
- [[concepts/llm-hallucination|LLM hallucination]]
- Research agent

## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-Open-Source-AI-Agents-Revolutionizing-Development-Workflows-and|Open Source AI Agents Revolutionizing Development Workflows and]] · [▶ source](https://www.youtube.com/watch?v=sXVbWkoCVaA)
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Managed-Agents-API-Suite-for-Building-and-Deploying-Autonomous-|Claude Managed Agents API Suite for Building and Deploying Autonomous ]] · [▶ source](https://www.youtube.com/watch?v=NLWiIj47IdI)
- 2026-04-27: AI Context Layer Architectures: Karpathy