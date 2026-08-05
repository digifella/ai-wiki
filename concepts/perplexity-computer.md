---
type: concept
domain: ai-agents
tags:
  - "local-ai"
  - "data-sovereignty"
  - "privacy-first"
  - "offline-inference"
  - "ai-agents"
  - "local-execution"
aliases:
  - "Local Perplexity"
  - "On-Device Perplexity"
  - "Perplexity Local Architecture"
summary: The Perplexity Computer is an architecture that decouples Perplexity's search and reasoning capabilities from cloud infrastructure to enable local execution, emphasizing data sovereignty and privacy.
updated: 2026-07-12
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Perplexity Computer

The **Perplexity Computer** refers to a conceptual or implemented architecture where [[concepts/perplexity-ai]]'s search and [[concepts/reasoning-capabilities|reasoning capabilities]] are decoupled from [[concepts/cloud-based-services|cloud infrastructure]] and executed locally. This model emphasizes [[concepts/data-sovereignty|data sovereignty]], offline functionality, and the integration of [[concepts/local-llm]]s with agent-based workflows.

## Core Architecture & Functionality

- **[[concepts/local-execution|Local Execution]]**: Runs [[concepts/inference|inference]] and [[concepts/retrieval-augmented-generation-rag-pipelines|retrieval-augmented generation (RAG) pipelines]] on local hardware, reducing latency and eliminating cloud dependency.
- **Agent Integration**: Utilizes [[concepts/ai-agent]] frameworks to automate [[concepts/complex-tasks|complex tasks]], bridging the gap between query processing and action execution.
- **Privacy-First Design**: Ensures user data and query history remain on-device, addressing concerns regarding data mining and surveillance inherent in cloud-based alternatives.

## Security & Isolation Challenges

The shift to [[concepts/local-installation|local execution]] introduces specific [[concepts/security|security]] vectors, particularly regarding how agents interact with the host system.

- **[[concepts/agentic-harness|Agent Harness]] Risks**: Generic [[concepts/ai-tools|AI tools]] designed to perform actions based on user requests (e.g., [[entities/openclaw]], [[concepts/pidev]]) pose significant [[concepts/security-concersns|security risks]] if not properly constrained. These "[[concepts/agent-harnesses|agent harnesses]]" can inadvertently execute malicious [[concepts/commands|commands]] or access sensitive files if the underlying model is compromised or prompted adversarially.
- **[[concepts/vm-isolation|VM Isolation]] Limitations**: Standard virtualization may not be sufficient to contain rogue agent behaviors. Effective [[concepts/disconnection|isolation]] requires strict sandboxing to prevent agents from escaping their designated environment and interacting with the host OS kernel or network interfaces.
- **Reference**: See [[lab-notes/2026-07-08-Local-AI-Agent-Harnesses-Security-Risks-and-VM-Isolation|Local AI Agent Harnesses: Security Risks and VM Isolation Challenges]] for detailed analysis of these vulnerabilities.

## Related Concepts

- [[concepts/local-llm]]
- [[concepts/ai-agent]]
- [[concepts/rag]]
- [[concepts/privacy|Privacy]] Computing

## References

- [Local AI Agent Harnesses: Security Risks and VM Isolation Challenges](https://www.youtube.com/watch?v=PxoMkoNJOe4)
