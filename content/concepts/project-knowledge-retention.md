---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "claude-code"
  - "subagents"
  - "ai-agents"
  - "agent-workflow"
  - "code-generation"
aliases:
  - "Claude Code Subagent Architecture"
  - "Subagent-Based AI Coding"
summary: A video from AI Labs discusses how Claude Code utilizes subagents within its workflow.
updated: 2026-05-01
---
# Project Knowledge Retention

Project Knowledge Retention refers to the architectural pattern employed by [[concepts/ai-assisted-coding|Claude Code]], an AI-powered [[concepts/coding|coding]] agent, which delegates specialized tasks to subordinate [[concepts/agents|agents]] called [[concepts/subagents|subagents]]. Rather than operating as a monolithic system, Claude Code structures its workflow to distribute responsibilities across multiple specialized subagents, each handling distinct aspects of the coding and development process.

## Subagent Architecture

The subagent model allows Claude Code to decompose complex development tasks into manageable components. Each subagent operates within a defined scope of expertise, enabling the system to maintain specialized knowledge domains and execute focused operations more effectively than a single unified agent could achieve.

## Workflow Integration

Within the broader [[concepts/developer-workflow|Claude Code workflow]], subagents coordinate to process user requests, generate code, validate outputs, and manage project-related tasks. This distributed approach enhances the system's capability to handle complex software development [[concepts/scenarios|scenarios]] by leveraging specialized expertise at each stage of the development pipeline.
