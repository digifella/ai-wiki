---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "coding"
  - "agents"
  - "context"
  - "ai-coding"
  - "context-files"
  - "repository-context"
  - "performance-degradation"
aliases:
  - "agents.md"
summary: "AGENTS.md, a repository-level context file for AI coding agents, degrades performance in coding tasks according to an ETH Zurich study."
updated: 2026-04-14
group: agent-systems-skills
---
# AGENTS.md

Repository-level context file providing project-specific guidance to [[concepts/ai-coding|AI coding]] [[concepts/agents|agents]] (e.g., [[concepts/structure|structure]], conventions, key functions). Commonly used alongside [[entities/claude|CLAUDE]].md [[concepts/files|files]].

## Key Findings (ETH Zurich Study, 2026)
- AGENTS.md and [[concepts/claude-ai|CLAUDE]].md context files **degrade** AI [[entities/agent|agent]] performance in [[concepts/coding|coding]] tasks
- Contradicts industry practice of using such files to improve agent effectiveness
- Study titled *"Evaluating AGENTS.md: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful for [[concepts/ai-coding-assistance|Coding Agents]]?"* ([[entities/eth-zurich|ETH Zurich]], Feb 2026)

## Implications
- Context files may introduce noise or misdirection for [[concepts/agentic-ai|AI agents]]
- Requires reevaluation of repository [[concepts/setup|setup]] practices
- Suggests minimal context may be preferable to structured context files

## References
- Study: [Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?](https://ethz.ch/study) ([[entities/eth-zurich|ETH Zurich]], Feb 2026)
- Video: [AI can work worse with Claude.md and agents.md files](https://www.youtube.com/watch?v=GcNu6wrLTJc) (Channel [[entities/theo|Theo]])
- Source Note: 2026 04 14 AI can work worse with Claudemd and agentsmd files Channel Theo
