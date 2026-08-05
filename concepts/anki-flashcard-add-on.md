---
type: concept
domain: ai-agents
tags:
  - "anki"
  - "flashcards"
  - "plugins"
  - "llm-integration"
  - "automation"
  - "local-ai"
  - "workflows"
aliases:
  - "Anki Plugin"
  - "Flashcard Automation Add-on"
  - "LLM Anki Integration"
summary: Anki add-ons are plugins that extend the spaced repetition system by automating content generation, integrating with local LLMs for privacy and low latency, and optimizing workflows through field parsing and tagging.
updated: 2026-07-11
group: coding-agents-dev-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Anki Flashcard Add-on

Anki add-ons are [[concepts/plugins|plugins]] that extend the functionality of the Anki spaced repetition system, enabling automation, custom study modes, and integration with [[concepts/external-tools|external tools]] like [[concepts/large-language-model-llm|Large Language Models]] (LLMs) for content generation.

## Key Functionality & Integrations

- **Content Generation Automation**: Add-ons facilitate the use of local or cloud-based LLMs to auto-generate flashcards from source material, reducing manual entry effort.
- **Local [[concepts/ai-agent-integration|AI Agent Integration]]**: Recent developments focus on integrating [[concepts/hardware-heavy-models|local LLMs]] directly into the Anki workflow for [[concepts/privacy|privacy]] and low-latency processing.
- **Model [[concepts/performance-benchmarks|Performance Benchmarks]]**:
  - Comparative tests indicate specific [[concepts/performance-data-gathering|performance metrics]] for different model sizes in translation and card generation tasks.
  - See [[lab-notes/2026-05-23-Qwen-3.6-27B-vs-35B-Local-AI-Agents-Anki-Translation-Per|Qwen 3.6 27B vs 35B Local AI Agents: Anki Translation Performance]] for detailed analysis of [[concepts/qwen3-model|Qwen 3.6]] variants (27B vs 35B) in local [[concepts/multi-agent-workflows|agent workflows]].
- **[[concepts/workflow-optimization|Workflow Optimization]]**: Automation scripts often handle field parsing, [[concepts/duplicate-detection|duplicate detection]], and tagging based on LLM output.

## Related Concepts

- Anki
- [[concepts/local-llm]]
- [[concepts/automation]]
- [[entities/qwen]]
