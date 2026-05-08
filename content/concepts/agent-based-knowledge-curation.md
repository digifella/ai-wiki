---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "concept"
  - "agent-based-research"
  - "knowledge-curation"
  - "storm-ai"
  - "deep-research"
  - "verifiable-research"
aliases:
  - "STORM AI"
  - "Agent-Based Research"
summary: Stanford's STORM AI enables verifiable, agent-based research and knowledge curation.
updated: 2026-05-01
---
# Agent Based Knowledge Curation

Agent-based knowledge curation is an approach to [[concepts/information-synthesis|information synthesis]] that employs multiple [[concepts/action-oriented-ai|autonomous AI agents]] working in coordination to research, verify, and organize information on a given topic. Rather than relying on a single [[concepts/statistical-language-modeling|language model]] to generate content directly, this method distributes research and synthesis tasks across [[concepts/specialized-sub-agents|specialized agents]] that can search for sources, cross-reference claims, and construct documented knowledge representations. Each agent maintains explicit connections to source material throughout the curation process, enabling verification and traceability of the final output.

## Core Mechanism

The approach typically involves [[concepts/agents|agents]] assuming distinct roles within a research workflow. Some agents may focus on retrieving relevant sources, others on synthesizing information from multiple documents, and additional agents on fact-checking and organizing findings. This division of labor allows the system to produce outputs with documented provenance, where claims can be traced back to their original sources. The coordination between agents helps reduce hallucinations and unsupported assertions that can occur when single models generate content without external verification.

## Stanford STORM

[[entities/stanford-university|Stanford]]'s STORM (Synthesis of Topic Outlines through Retrieval and [[concepts/multi-perspective-question-asking|Multi-perspective question asking]]) is a prominent implementation of this approach. STORM uses agents to conduct [[concepts/iterative-research|iterative research]] on a topic, generating questions, retrieving relevant sources, and synthesizing findings into structured outlines and articles. The system emphasizes maintaining source attribution throughout the curation process, making the knowledge produced more verifiable and suitable for [[concepts/software|applications]] where traceability is important.
