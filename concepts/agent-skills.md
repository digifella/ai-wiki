---
type: concept
domain: ai-agents
tags:
  - "agent-skills"
  - "llm-capabilities"
  - "agentic-workflows"
  - "task-execution"
  - "code-efficiency"
  - "instruction-reuse"
  - "security"
  - "vm-isolation"
aliases:
  - "Claude Skills"
  - "Agent Capabilities"
  - "Specialized Toolsets"
summary: Agent Skills are reusable folders of instructions, scripts, and resources that enable large language models to execute complex tasks with high precision and efficiency, often requiring secure execution environments like VMs.
updated: 2026-07-11
group: agent-systems-skills
title: Agent Skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

[[concepts/agent-skills]] (formerly [[concepts/claude-code]]) are specialized capabilities and toolsets that enable [[concepts/large-language-models|Large Language Models (LLMs)]] and [[concepts/agent-harnesses|Agent Harnesses]] to execute complex, multi-step tasks with high [[concepts/accuracy|precision]].

### Key Insights
- **Definition**: [[concepts/automated-skill-invocation|Agent Skills]] are reusable [[concepts/instruction-sets|instruction manuals]] (folders containing [[concepts/instructions|instructions]], scripts, and resources) that teach models how to perform tasks, what tools to use, and what standards to follow.
- **Efficiency [[concepts/ai-workflow|Optimization]]**: Utilizing Code (e.g., [[entities/python|Python]]) for [[concepts/web-scraping]] tasks is significantly more efficient and reliable than relying on [[concepts/markdown|Markdown]] parsing.
  - [[concepts/domain-expertise-packaging|Agent Skills]] have become a "killer tool" for bridging the gap between model capabilities and specific domain execution.
- **[[concepts/security|Security]] & [[concepts/disconnection|Isolation]]**: As [[concepts/agent-harnesses|Agent Harnesses]] (e.g., [[concepts/automated-information-pipelines|OpenClaw]], [[concepts/pidev|Pi.dev]]) gain autonomy to perform actions locally, [[concepts/security-concersns|security risks]] escalate.
  - [[lab-notes/2026-07-08-Local-AI-Agent-Harnesses-Security-Risks-and-VM-Isolation|Local AI Agent Harnesses: Security Risks and VM Isolation Challenges]] highlights the necessity of [[concepts/virtual-machines|VM Isolation]] to contain potential exploits or unintended side effects from [[concepts/agentic-systems|autonomous agents]].
  - Running local agents without proper sandboxing exposes the host system to risks associated with unrestricted tool access and [[concepts/code-execution|code execution]].

### References
- [Local AI Agent Harnesses: Security Risks and VM Isolation Challenges](https://www.youtube.com/watch?v=PxoMkoNJOe4)
