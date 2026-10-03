---
type: concept
domain: ai-agents
tags:
  - "ai-safety"
  - "model-capabilities"
  - "agentic-ai"
  - "risk-mitigation"
  - "zero-trust"
  - "autonomous-agents"
aliases:
  - "AI Capability Risks"
  - "Model Power Risks"
  - "Agentic Risks"
  - "LLM Capability Hazards"
summary: "Model Capability Risks refer to potential harms arising from the advanced capabilities of large language models and AI agents, particularly regarding autonomous action execution, data exfiltration, and social engineering"
updated: 2026-07-18
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Model Capability Risks

**Model Capability Risks** refer to the potential for harm arising from the advanced capabilities of [[concepts/large-language-model]]s and [[concepts/ai-agent]]s, particularly when these systems are deployed in autonomous or semi-autonomous contexts. These risks are distinct from [[concepts/safety-concerns|Alignment failures]], focusing instead on the inherent power of the model to execute complex actions, access sensitive data, or manipulate systems.

## Key Risk Vectors

- **Autonomous Action Execution**: The ability of agents to perform irreversible actions (e.g., [[concepts/code-execution|code execution]], financial transactions) without sufficient human-in-the-[[concepts/loop|loop]] [[concepts/verification|verification]].
- **Data Exfiltration**: Capabilities to bypass [[concepts/security]] controls to access and transmit proprietary or private information.
- **Social [[entities/national-academies|Engineering]]**: Advanced persuasion capabilities that can manipulate humans or other [[concepts/ai-models|AI systems]] into granting [[concepts/security-exposure|unauthorized access]].
- **Supply Chain Attacks**: Exploiting dependencies in software ecosystems to introduce vulnerabilities.

## Mitigation Frameworks

### Zero Trust Architecture for AI
Traditional perimeter-based security is insufficient for [[concepts/agentic-ai|AI agents]]. A [[concepts/zero-trust]] approach assumes that the agent itself may be compromised or [[concepts/acting|acting]] maliciously, requiring strict verification for every action.

- **Principle of Least Privilege**: Agents should only have access to the minimum resources necessary for their specific task.
- **[[concepts/debugging-automation|Continuous Verification]]**: Every request made by an [[concepts/ai-assistant|AI agent]] must be authenticated and authorized in real-time.
- **[[concepts/disconnection|Isolation]]**: Running agents in [[concepts/isolated-environments|sandboxed environments]] to limit the blast radius of potential failures.

### Recent Developments
- **[[entities/anthropic-institute|Anthropic]]'s [[concepts/concept-of-nothingness|Zero]] [[concepts/trust|Trust]] Playbook**: A comprehensive framework released to address agent security. Key insights include:
    - Detailed strategies for securing [[concepts/ai-agents|AI agents]] against escalating cyber threats.
    - Specific guidelines for implementing zero-trust principles in [[concepts/multi-agent-workflows|agent workflows]].
    - See [[lab-notes/2026-07-18-Anthropic-Zero-Trust-Playbook-for-AI-Agent-Security-Summ|Anthropic Zero Trust Playbook for AI Agent Security Summary]] for a detailed breakdown of the 36-page document.

## Related Concepts
- [[concepts/ai-safety]]
- [[concepts/cybersecurity]]
- Prompt Injection
- [[concepts/jailbreaking]]

## References
- [Anthropic Zero Trust Playbook for AI Agent Security Summary](https://www.youtube.com/watch?v=tjRkSyfac1A)
