---
type: concept
domain: ai-agents
group: coding-agents-dev-workflows
tags:
  - "ai-agents"
  - "autonomous-optimization"
  - "experimentation"
  - "agent-improvement"
  - "self-iteration"
  - "llm-automation"
aliases:
  - "auto-optimize AI"
  - "agent self-improvement loop"
  - "autonomous experimentation"
summary: The Karpathy Loop refers to using AI agents to conduct large-scale, automated experiments for the purpose of agent improvement.
updated: 2026-05-01
---
# Karpathy Loop

The Karpathy Loop is a methodology for [[concepts/ai-agent|AI agent]] improvement that leverages [[concepts/autonomous-experimentation|autonomous experimentation]] at scale. Rather than relying on human-directed iterations, the approach involves deploying [[concepts/agentic-ai|AI agents]] to conduct large numbers of automated experiments—potentially hundreds or thousands—with minimal human intervention. This enables rapid cycles of [[concepts/testing|testing]], evaluation, and refinement that would be impractical through manual processes alone.

## Mechanism and Scale

The core principle involves setting [[concepts/agents|agents]] to work on defined improvement objectives within a [[concepts/fixed-time-budget|fixed time budget]], allowing them to explore variations and configurations autonomously. The agent conducts experiments, gathers results, and iteratively refines its approach based on outcomes. This process can continue continuously, including during periods when human operators are not actively monitoring—effectively enabling "inhuman" [[concepts/iteration|iteration]] speeds that compress what might otherwise take weeks of human-supervised work into days or hours.

## Agent Improvement Through Automation

By treating agent improvement itself as an automated problem, the Karpathy Loop sidesteps bottlenecks associated with manual experimentation design and result analysis. The accumulated data from numerous experiments provides a foundation for understanding which modifications, [[concepts/parameters|parameters]], or architectural choices yield measurable improvements. This approach assumes that at sufficient scale and iteration frequency, patterns of effective improvement become evident through the experimental data itself.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Autonomous-Social-Video-Content-Generation-and-Optimization|AI Powered Autonomous Social Video Content Generation and Optimization]] · [▶ source](https://www.youtube.com/watch?v=vjJwgXsMfjM)
- 2026-04-19: [[lab-notes/2026-04-19-Karpathy-Loop-Auto-Optimize-AI-Inhuman-Iteration-for-Agent-Improvement|Karpathy Loop Auto Optimize AI Inhuman Iteration for Agent Improvement]] · [▶ source](https://www.youtube.com/watch?v=xnG8h3UnNFI)
- 2026-04-26: Karpathy