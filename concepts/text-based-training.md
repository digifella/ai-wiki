---
type: concept
domain: entertainment-games
tags:
  - "ai-training"
  - "natural-language-instructions"
  - "interpretability"
  - "modularity"
  - "self-evolution"
  - "skillopt"
  - "agent-behavior"
aliases:
  - "Text-Based Training"
  - "Natural Language Training"
  - "Skill Document Training"
  - "Interpretable Agent Training"
summary: "Text-Based Training is a methodology for training AI agents using human-readable natural language instructions and structured text formats to enhance interpretability, modularity, and self-evolution capabilities."
updated: 2026-07-12
group: sports-science-training-recovery
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

# Text-Based Training

**Text-Based Training** refers to methodologies where [[concepts/ai-models|AI models]] or agents are trained, fine-tuned, or guided using [[concepts/human-readable-instructions|natural language instructions]], documentation, or structured text formats rather than solely relying on raw data pipelines or binary weight [[concepts/software-updates|updates]]. This approach emphasizes [[concepts/interpretability|interpretability]], modularity, and the ability to update agent behavior through human-readable interfaces.

## Core Principles

- **Interpretability**: Training signals are encoded in human-readable formats (e.g., [[concepts/markdown|Markdown]], JSON, YAML), allowing developers to inspect and modify training [[concepts/open-source-philosophy|logic]] directly.
- **Modularity**: [[concepts/skills|Skills]] or behaviors are encapsulated in discrete text documents that can be swapped, updated, or combined without retraining the entire model.
- **[[concepts/self-evolution|Self-Evolution]]**: Agents can generate or refine their own training texts based on [[concepts/performance-feedback|performance feedback]], creating a [[concepts/loop|loop]] of continuous improvement.

## Key Implementations

### SkillOpt
A notable implementation of text-based training is **[[concepts/self-evolving-ai-agent-skills-optimization|SkillOpt]]**, a strategy developed by [[concepts/2026-04-30-microsoft|Microsoft Research]].

- **Mechanism**: [[entities/skillopt|SkillOpt]] trains a "[[concepts/skill-document|skill document]]"—a human-readable Markdown file—that defines agent behaviors.
- **Execution**: The system allows for [[concepts/local-execution|local execution]] and self-evolving [[concepts/agent-harnesses|agent skills]], reducing dependency on cloud-based retraining cycles.
- **Source**: [[lab-notes/2026-06-24-SkillOpt-Microsofts-Text-Based-Evolution-of-AI-Agent-Ski|SkillOpt: Microsoft's Text-Based Evolution of AI Agent Skills]]

## Advantages

- **Rapid [[concepts/iteration|Iteration]]**: Changes to agent behavior can be made by editing text files rather than re-running expensive training jobs.
- **[[concepts/opacity|Transparency]]**: The logic behind agent decisions is explicit in the training text, aiding in [[concepts/debugging|debugging]] and [[concepts/compliance|compliance]].
- **Portability**: Text-based [[concepts/skill|skill]] definitions can be easily shared across different agent architectures or platforms.

## References

- [SkillOpt: Microsoft's Text-Based Evolution of AI Agent Skills](https://www.youtube.com/watch?v=yj17Fvyr09s)
