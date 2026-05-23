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
updated: 2026-05-24
---
# Agent Based Knowledge Curation

Agent-based knowledge curation is an approach to information synthesis that distributes research and content generation tasks across multiple autonomous AI agents rather than relying on a single language model to produce output directly. Each agent operates with specialized capabilities designed to search for sources, retrieve relevant information, verify claims, and cross-reference data across multiple documents. This multi-agent orchestration enables more systematic and verifiable knowledge synthesis workflows.

## How It Works

In this approach, different agents take on distinct roles within a coordinated research process. Some agents may specialize in searching and retrieving relevant sources, while others focus on reading and extracting information, synthesizing findings across documents, or validating claims against retrieved evidence. Rather than generating responses from parametric knowledge alone, the system grounds outputs in retrieved sources that can be traced and verified by users.

## Example: STORM

Stanford's STORM system exemplifies this approach by simulating a research conversation between multiple agents with different perspectives and expertise. The system conducts iterative searches, gathers sources, and synthesizes information through agent interactions before generating a final knowledge article. This process produces outputs with explicit source attribution and reduces hallucination compared to conventional language model generation.

Agent-based curation is particularly suited to tasks where verifiability, source attribution, and coverage of diverse viewpoints are important, though it typically requires more computational resources and longer execution times than single-model approaches.
