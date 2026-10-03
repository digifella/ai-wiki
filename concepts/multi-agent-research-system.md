---
type: concept
domain: ai-agents
tags:
  - "multi-agent-systems"
  - "ai-research"
  - "hallucination-mitigation"
  - "agent-collaboration"
  - "flowise"
  - "iterative-refinement"
aliases:
  - "Multi-Agent AI System"
  - "Collaborative Agent Architecture"
  - "Agent-Based Research Framework"
summary: A collaborative AI architecture utilizing specialized agents to perform complex research tasks, cross-verify information, and mitigate hallucinations through iterative refinement.
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

- "research"
  - "ai"
  - "multi-agent"
  - "[[concepts/flowise|flowise]]"
  - "[[entities/anthropic-institute|anthropic]]"
  - "IBM"
group: agent-systems-[[concepts/skills|skills]]

# Multi-Agent AI System

A collaborative architecture employing specialized [[concepts/ai-agents|AI agents]] to perform complex research tasks, overcoming single-LLM limitations like [[concepts/data-hallucination|hallucination]] and shallow analysis through iterative, role-based workflows.

**Key features**:
- Emulates human research methodology via [[concepts/agent-collaboration|agent collaboration]]
- Uses distinct agent roles ([[entities/tomasz-janowski|researcher]], critic, summarizer)
- Cross-verifies information to reduce hallucinations
- Enables deeper exploration through [[concepts/iterative-refinement|iterative refinement]]

**Recent implementation**:
- **[[entities/anthropic|Anthropic]] multi agent [[concepts/visualization-generation|deep Research]] agent (2026-04-14)**: Flowise-based system inspired by Anthropic's approach
  - Video guide: <https://www.youtube.com/watch?v=GPsKnsYJPiI>
  - [[concepts/creator|Creator]]: [[entities/leon-van-zyl|Leon van Zyl]]
  - [[entities/github|GitHub]] repository: <https://github.com/leonvanzyl/flowise-masterclass-2025/tree/master/Deep%20Research%20Agentflow>
  - Designed to overcome single LLM limitations ([[concepts/hallucination|hallucination]], insufficient context handling)

- **IBM [[concepts/expertise-based-ai-assistants|Multi-Agent Systems]] for High-Stakes Applications (2026-05-29)**
  - Source: [[lab-notes/2026-05-29-Multi-Agent-AI-Systems-Mitigating-Single-AI-Hallucinatio|Multi-Agent AI Systems: Mitigating Single AI Hallucinations for High-Stakes Applications]]
  - Presenter: [[entities/bri-kopecki|Bri Kopecki]] (IBM [[entities/ai-engineer|AI Engineer]])
  - Video: <https://www.youtube.com/watch?v=kYkZI3oj2W4>
  - **Core Problem**: Single [[concepts/agentic-ai|AI agents]] lack the ability to express uncertainty, leading to overconfident [[concepts/data-hallucination|hallucinations]] in high-stakes [[concepts/scenarios|scenarios]].
  - **[[concepts/solution|Solution]]**: [[concepts/multi-agent-frameworks|Multi-agent frameworks]] enable agents to cross-examine, validate, and critique each other's outputs, effectively simulating human [[concepts/document-review|peer review]] or [[concepts/red-teaming|red-teaming]] processes to ensure [[concepts/software-reliability|reliability]].
