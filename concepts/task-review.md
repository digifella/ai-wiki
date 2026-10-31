---
type: concept
domain: ai-agents
tags:
  - "critique"
  - "quality-assurance"
  - "response-evaluation"
  - "error-detection"
  - "improvement-process"
  - "agent-skills"
aliases:
  - "rigorous critique"
  - "response review"
  - "quality check"
summary: A process for performing a rigorous critique of a response to identify errors and propose improved alternatives.
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Task Review

[[concepts/structureux|Task Review]] is a structured evaluation process in which an [[concepts/ai-agent|AI agent]] systematically examines its own previous response to identify errors, gaps, and areas for improvement. Rather than treating initial outputs as final answers, this mechanism applies a [[concepts/diagnostic-audit|rigorous critique]] framework to assess the quality of [[concepts/reasoning|reasoning]], [[concepts/factual-accuracy|factual accuracy]], [[concepts/clarity-slider|clarity]], completeness, and practical applicability. This self-evaluation step enables agents to catch mistakes before presenting responses to users and to propose improved alternatives when deficiencies are detected.

The process functions as a critical checkpoint within the agent's workflow, shifting the paradigm from single-pass generation to [[concepts/iterative-learning|iterative refinement]]. By subjecting its own output to scrutiny, the agent can detect logical inconsistencies, hallucinations, or incomplete information that might otherwise go unnoticed. This internal audit ensures that the final response meets established quality standards before it is committed to the [[concepts/user-interface|user interface]].

Core functions of Task Review include the identification of specific failure modes and the generation of corrective actions. When the critique identifies significant errors, the agent may trigger a re-generation cycle or provide a detailed explanation of the flaw alongside a corrected version. This capability enhances [[concepts/software-reliability|reliability]] by reducing the propagation of incorrect information and allows for more nuanced handling of complex queries that require multi-step [[concepts/verification|verification]].

Implementing Task Review contributes to the overall [[concepts/robustness|robustness]] of [[concepts/ai-productivity-agents|AI agent systems]] by introducing a layer of self-correction. It addresses the limitations of static generation models by allowing dynamic adjustment based on immediate [[concepts/feedback|feedback]]. As a result, agents utilizing this process are better equipped to handle ambiguous [[concepts/instructions|instructions]] and maintain higher levels of accuracy in their interactions.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Claude-CoWork-Automating-Workflows-with-Local-File-Access-and-AI|Claude CoWork Automating Workflows with Local File Access and AI]] · [▶ source](https://www.youtube.com/watch?v=_ZpZ1cB67_Y)
- 2026-04-08: [[lab-notes/2026-04-08-Maximizing-Claude-Code-20-Features-and-Tips-for-AI-Automation|Maximizing Claude Code 20 Features and Tips for AI Automation]] · [▶ source](https://www.youtube.com/watch?v=fUShvacDLtw)
- 2026-04-15: [[lab-notes/2026-04-15-Hermes-Agent-Self-Improving-AI-for-Adaptive-User-Learning|Hermes Agent Self Improving AI for Adaptive User Learning]] · [▶ source](https://www.youtube.com/watch?v=5PLDovsqKaQ)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropic-Claude-Opus-47-Agentic-Coding-Multimodal-and-Memory-Advancem|Anthropic Claude Opus 47 Agentic Coding Multimodal and Memory Advancem]] · [▶ source](https://www.youtube.com/watch?v=uXF6bR4_5RY)
- 2026-04-29: OpenClaw · [▶ source](https://www.youtube.com/watch?v=L7FF8Zgab3M)
