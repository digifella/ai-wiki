---
type: concept
domain: tools-platforms
updated: 2026-05-23
group: developer-tooling-clis
---
# Comparative Testing

**Comparative [[concepts/testing|Testing]]** is the systematic evaluation of two or more variables, [[concepts/models|models]], or systems under controlled conditions to identify performance differentials, trade-offs, and optimal configurations. In the context of LLM Evaluation, it involves [[concepts/benchmark-testing|benchmarking]] specific [[concepts/capabilities|capabilities]] (e.g., translation, [[concepts/coding|coding]], [[concepts/reasoning|reasoning]]) across distinct model architectures or parameter sizes to determine efficacy relative to computational [[concepts/cost|cost]].

## Key Principles
- **Isolation of Variables**: Keeping [[concepts/hardware|hardware]], prompt [[concepts/structure|structure]], and dataset constant while varying only the target parameter (e.g., [[concepts/code-size|model size]]).
- **Metric Definition**: Establishing clear success criteria ([[concepts/accuracy|accuracy]], latency, token throughput).
- **Reproducibility**: Ensuring tests can be repeated with identical results.

## Recent Case Studies

### Local LLM Agent Performance (2026)
- **[[lab-notes/2026-05-23-Qwen-3.6-27B-vs-35B-Local-AI-Agents-Anki-Translation-Per|Qwen 3.6 27B vs 35B Local AI Agents: Anki Translation Performance]]**: A direct comparison of [[concepts/qwen3-model|Qwen 3.6]] variants in local [[concepts/multi-agent-workflows|agent workflows]].
	- **Scope**: Evaluated 27B vs. 35B [[concepts/parameter-models|parameter models]] using [[entities/jarods-journey|Jarods Journey]]'s testing framework.
	- **Task**: Anki [[concepts/translation-performance|translation performance]] and general coding [[entities/agent|agent]] utility.
	- **Context**: Assesses whether the marginal increase in [[concepts/parameters|parameters]] (27B → 35B) yields proportionate gains in local [[concepts/inference|inference]] efficiency and translation accuracy.

## Related Concepts
- [[A/B Testing]]
- [[concepts/benchmark-testing|Benchmarking]]
- [[concepts/large-language-models]]
- [[concepts/local-inference]]
