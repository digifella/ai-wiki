---
type: concept
domain: ai-agents
updated: 2026-04-14
group: agent-systems-skills
---
- "research"
  - "ai"
  - "[[entities/agent|agent]]"
  - "[[concepts/flowise|flowise]]"
group: agent-systems-[[concepts/skills|skills]]

# Deep Research Agent flow

A multi-[[concepts/agent-workflow|agent workflow]] for [[concepts/iterative-research|iterative research]] that overcomes single LLM limitations ([[concepts/data-hallucination|hallucination]], shallow depth) through human-like [[concepts/iterative-refinement|iterative refinement]].

- **Core inspiration**: [[entities/anthropic|Anthropic]] [[concepts/multi-agent-research-system|multi-agent research system]]
- **Key mechanism**: Multiple specialized [[concepts/agents|agents]] collaboratively refine queries and validate results
- **Implementation**: Built using [[entities/flowise|Flowise]] for [[concepts/workflow|workflow]] orchestration
- **Overcomes**: Hallucinations, insufficient depth in single LLM queries
- **Resources**:
  - Video guide: [Leon van Zyl's Deep Research Agent Flow](https://www.youtube.com/watch?v=GPsKnsYJPiI)
  - GitHub repo: [Flowise Masterclass 2025 - Deep Research Agent Flow](https://github.com/leonvanzyl/flowise-masterclass-2025/tree/master/Deep%20Research%20Agentflow)
  - Flowise Cloud: [Register for Flowise Cloud](https://cloud.flowiseai.com/register?via=leonvanzyl)
  - [[concepts/creator|Creator]]: [[entities/leon-van-zyl|Leon van Zyl]]
