---
type: concept
domain: ai-agents
updated: 2026-05-23
group: coding-agents-dev-workflows
---
# Anki Flashcard Add-on

Anki add-ons are [[concepts/plugins|plugins]] that extend the functionality of the Anki spaced repetition system, enabling automation, custom study modes, and [[concepts/integration|integration]] with [[concepts/external-tools|external tools]] like [[concepts/large-language-model-llm|Large Language Models]] (LLMs) for content generation.

## Key Functionality & Integrations

- **Content Generation Automation**: Add-ons facilitate the use of local or cloud-based LLMs to auto-generate flashcards from source material, reducing manual entry effort.
- **Local [[concepts/ai-agent-integration|AI Agent Integration]]**: Recent developments focus on integrating local LLMs directly into the Anki [[concepts/workflow|workflow]] for [[concepts/privacy|privacy]] and low-latency processing.
- **Model [[concepts/performance-benchmarks|Performance Benchmarks]]**:
  - Comparative tests indicate specific [[concepts/performance-data-gathering|performance metrics]] for different model sizes in translation and card generation tasks.
  - See [[lab-notes/2026-05-23-Qwen-3.6-27B-vs-35B-Local-AI-Agents-Anki-Translation-Per|Qwen 3.6 27B vs 35B Local AI Agents: Anki Translation Performance]] for detailed analysis of [[concepts/qwen3-model|Qwen 3.6]] variants (27B vs 35B) in local [[concepts/multi-agent-workflows|agent workflows]].
- **[[concepts/workflow-optimization|Workflow Optimization]]**: Automation scripts often handle field parsing, duplicate detection, and tagging based on LLM [[concepts/output|output]].

## Related Concepts

- Anki
- [[concepts/local-llm]]
- [[concepts/automation]]
- [[entities/qwen]]
