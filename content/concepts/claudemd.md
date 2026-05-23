---
type: concept
domain: ai-agents
updated: 2026-05-23
group: coding-agents-dev-workflows
---
# CLAUDE

Repository-level context file intended to guide [[concepts/ai-coding|AI coding]] [[concepts/agents|agents]], but recent research indicates it may **decrease** [[entities/agent|agent]] effectiveness.

## Key Findings

- [[entities/eth-zurich|ETH Zurich]]'s 2026 study *"Evaluating [[concepts/agents|AGENTS]].md: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful for [[concepts/coding|Coding]] Agents?"* found that `[[concepts/claude-ai|CLAUDE]].md` and `AGENTS.md` [[concepts/files|files]] **hinder** [[concepts/ai-agent|AI agent]] performance in [[concepts/coding|coding]] tasks.
- Contradicts common industry practice of using context files for agent guidance.
- Study demonstrates that agents perform/perform worse with these files compared to baseline configurations.
- Analysis from [[entities/theo|Theo]] confirms that [[entities/claude|Claude]].md and [[concepts/agentsmd|agents.md]] files can lead to degraded AI performance ([Source](https://www.youtube.com/watch?v=GcNu6wrLTJc)).

## Implications

- **Avoid using context files**: `CLAUDE.md` and `AGENTS.md` should be omitted from repositories to prevent degraded agent [[concepts/output|output]].
- **Alternative approaches**: Prioritize structured codebases, explicit prompts, or direct [[concepts/code|codebase]] analysis over context files.
- **Industry shift**: Challenges widespread [[concepts/adoption|adoption]] of repository-level context files in [[concepts/ai-coding-workflows|AI coding tools]].

## Related Concepts

- [[concepts/agentsmd]]: Repository-level context file concept shown to reduce [[entities/agent|agent]] effectiveness.
- [[concepts/ai-coding|AI coding]] [[concepts/agents|agents]]: Broader category of [[concepts/ai-tools|AI tools]] requiring optimized guidance methods.
- [[concepts/context-management]]: Techniques for managing [[concepts/external-knowledge|agent context]] and [[concepts/instructions|instructions]].

## Backlinks

- 2026 04 14 AI can work worse with Claudemd and agentsmd [[concepts/files|files]] Channel [[entities/theo|Theo]]
