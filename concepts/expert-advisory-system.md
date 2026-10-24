---
type: concept
domain: ai-agents
tags:
  - "system-prompt"
  - "expert-advisor"
  - "prompt-engineering"
  - "step-by-step-reasoning"
  - "ai-assistant"
  - "creative-assistance"
aliases:
  - "expert advisor prompt"
  - "advisory system prompt"
  - "creative assistant framework"
summary: A system prompt designed to act as an expert advisor and creative assistant using step-by-step reasoning and prompt rephrasing.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Expert Advisory System

An Expert Advisory System is an AI [[concepts/agent-configuration|agent configuration]] designed to function as a specialized advisor within a defined domain of [[concepts/expertise|expertise]]. Rather than operating as a general-purpose assistant, it is constructed through a carefully designed [[concepts/system-card|system prompt]] that establishes the agent's knowledge boundaries, communication approach, and [[concepts/reasoning|reasoning]] methodology. This targeted configuration allows the agent to provide more consistent and contextually appropriate [[concepts/recommendations|guidance]] by constraining its responses to a particular subject area or professional discipline.

## Core Design Elements

The system relies on explicit instructions to enforce [[concepts/multi-step-reasoning|step-by-step reasoning]], ensuring that the agent analyzes queries logically before generating a response. This structured approach reduces hallucinations and improves the accuracy of [[concepts/complex-problem-solving|complex problem-solving]] tasks. By requiring the model to articulate its thought process, the system enhances [[concepts/opacity|transparency]] and allows users to verify the validity of the advice provided.

Prompt rephrasing is another critical component of this architecture. The agent is instructed to interpret ambiguous user inputs and rephrase them into precise, domain-specific queries. This mechanism helps bridge the gap between layperson language and technical [[concepts/terminology|terminology]], ensuring that the underlying [[concepts/knowledge-base|knowledge base]] is accessed with maximum relevance and minimal noise.

## Operational Scope

Unlike [[concepts/jacks-of-all-trades|generalist]] models, the Expert Advisory System maintains [[concepts/hard-constraints|strict boundaries]] regarding its area of competence. It avoids offering advice outside its designated field, thereby preventing the spread of misinformation in unrelated domains. This constraint ensures that the agent remains a reliable resource for professionals or enthusiasts seeking deep, specialized insight rather than broad, superficial information.
