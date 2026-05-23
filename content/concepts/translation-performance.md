---
type: concept
domain: ai-agents
updated: 2026-05-23
group: coding-agents-dev-workflows
---
# Translation Performance

**Translation Performance** refers to the quantitative and qualitative metrics used to evaluate the efficiency, [[concepts/accuracy|accuracy]], and utility of **[[concepts/large-language-model-llm|Large Language Models]]** in converting [[concepts/text|text]] between languages or adapting content for specific contexts (e.g., **Anki** flashcards). Key dimensions include latency, resource consumption, semantic fidelity, and [[concepts/data-hallucination|hallucination]] rates.

## Key Metrics & Factors
- **Accuracy**: Semantic equivalence, [[concepts/grammar|grammar]] correctness, and [[concepts/preservation|preservation]] of nuance.
- **Latency**: Time-to-first-token and total generation time.
- **Resource Efficiency**: [[concepts/memory|Memory]] usage and computational [[concepts/cost|cost]], particularly relevant for [[concepts/local-ai]] deployments.
- **Context Handling**: Ability to maintain [[concepts/logical-consistency|consistency]] across long documents or spaced repetition decks.

## Benchmarking & Case Studies

### Qwen 3.6 Variants (2026)
Recent evaluations highlight the trade-offs between [[concepts/code-size|model size]] and translation utility in local environments. See [[lab-notes/2026-05-23-Qwen-3.6-27B-vs-35B-Local-AI-Agents-Anki-Translation-Per|Qwen 3.6 27B vs 35B Local AI Agents: Anki Translation Performance]] for detailed comparative data.

- **Comparison**: Direct [[concepts/testing|testing]] of **[[concepts/qwen3-model|Qwen 3.6]] 27B** versus **[[concepts/qwen-36-35b-a3b|Qwen 3.6 35B]]** as local [[concepts/agents|agents]].
- **Use Case**: Automating the addition of new fields in **Anki** decks via translation.
- **Findings**:
  - The 35B variant generally offers higher semantic precision but [[concepts/assistive-technology|at]] the cost of increased [[concepts/inference|inference]] latency.
  - The 27B variant provides a more balanced throughput for real-time or batch processing where minor semantic deviations are acceptable.
  - Both [[concepts/models|models]] demonstrate viability for local [[concepts/coding|coding]] [[entities/agent|agent]] tasks involving translation workflows.

## Related Concepts
- [[concepts/local-ai]]
- Anki
- [[concepts/large-language-models]]
- [[concepts/model-quantization]]
