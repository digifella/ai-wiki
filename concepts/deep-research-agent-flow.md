---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "deep-research"
  - "iterative-refinement"
  - "flowise"
  - "multi-agent-systems"
  - "workflow-orchestration"
aliases:
  - "Deep Research Workflow"
  - "Leon van Zyl Deep Research Agent"
  - "Multi-Agent Research System"
  - "Iterative Research Flow"
summary: This concept describes a multi-agent workflow implemented in Flowise that uses specialized sub-agents to perform iterative research and refinement, addressing limitations like hallucination and shallow depth found in sin
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

- "research"
  - "ai"
  - "agent"
  - "[[concepts/flowise|flowise]]"
group: agent-systems-[[concepts/skills|skills]]

# Deep Research Agent flow

A multi-[[concepts/agent-workflow|agent workflow]] for [[concepts/iterative-research|iterative research]] that overcomes single LLM limitations ([[concepts/data-hallucination|hallucination]], shallow depth) through human-like [[concepts/iterative-refinement|iterative refinement]].

- **Core inspiration**: [[entities/anthropic|Anthropic]] [[concepts/multi-agent-research-system|multi-agent research system]]
- **Key mechanism**: Multiple [[concepts/specialized-sub-agents|specialized agents]] collaboratively refine queries and validate results
- **Implementation**: Built using [[entities/flowise|Flowise]] for [[concepts/llm-orchestration|workflow orchestration]]
- **Overcomes**: Hallucinations, insufficient depth in single LLM queries
- **Resources**:
  - Video guide: [Leon van Zyl's Deep Research Agent Flow](https://www.youtube.com/watch?v=GPsKnsYJPiI)
  - [[entities/github|GitHub]] repo: [Flowise Masterclass 2025 - Deep Research Agent Flow](https://github.com/leonvanzyl/flowise-masterclass-2025/tree/master/Deep%20Research%20Agentflow)
  - [[entities/flowise-ai|Flowise]] Cloud: [Register for Flowise Cloud](https://cloud.flowiseai.com/register?via=leonvanzyl)
  - [[concepts/creator|Creator]]: [[entities/leon-van-zyl|Leon van Zyl]]
