---
type: concept
domain: ai-agents
tags:
  - "cognition"
  - "ai"
  - "hallucination"
  - "ai-hallucination"
  - "llm-errors"
  - "retrieval-augmented-generation"
  - "multi-agent-systems"
  - "model-limitations"
aliases:
  - "AI hallucination"
  - "model hallucination"
summary: A phenomenon where an AI system generates content not grounded in its training data or external knowledge, resulting in fabricated or incorrect information.
updated: 2026-05-23
group: training-fine-tuning-evaluation
---
# Hallucination

A phenomenon where an AI system generates content that is not grounded in its [[concepts/training-data|training data]] or [[concepts/external-knowledge|external knowledge]] sources, often appearing as fabricated or incorrect information.

## Key Characteristics
- **Non-factual [[concepts/output|output]]**: Information presented as factual but unverifiable or false.
- **Confidence mismatch**: High confidence in incorrect statements.
- **Contextual disconnect**: [[concepts/responses|Responses]] unrelated to input prompts.

## Causes
- **Data gaps**: Insufficient or noisy [[concepts/training|training]] data.
- **Model limitations**: Overfitting or underfitting during [[concepts/training|training]].
- **[[concepts/prompt-engineering|Prompt engineering]]**: Ambiguous or misleading user queries.

## Mitigation Strategies
- **Multi-[[entities/agent|agent]] systems**: Combining multiple LLMs to cross-validate outputs.
- **External [[concepts/verification|verification]]**: Integrating [[concepts/answer-generation|retrieval-augmented generation]] (RAG) for fact-checking.
- **Human-in-the-[[concepts/loop|loop]]**: Manual review of critical outputs.

## Related Concepts
- [[concepts/answer-generation|Retrieval-Augmented Generation]]
- [[entities/prompt-engineering]]
- [[concepts/multi-agent-systems]]

## References
- 2026 04 14 [[entities/anthropic|Anthropic]] multi [[entities/agent|agent]] [[entities/deep-research|deep Research]] agent

## New Research
- **[[entities/anthropic|Anthropic]] Multi-Agent [[concepts/deep-research-agent|Deep Research Agent]] (2026-04-14)**:
  - Designed to overcome [[concepts/data-hallucination|hallucination]] via [[concepts/deep-research-agent-flow|deep research agent flow]].
  - Uses [[entities/flowise|Flowise]] for structured workflows.
  - Addresses limitations of single LLM queries.
  - [[concepts/tutorial|Tutorial]] by [[entities/leon-van-zyl|Leon van Zyl]]: <https://www.youtube.com/watch?v=GPsKnsYJPiI>.
  - [[entities/github|GitHub]] repository: <https://github.com/leonvanzyl/flowise-masterclass-2025/tree/master/Deep%20Research%20Agentflow>.
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: Next Evolution of Retrieval-Augmented Generation
- 2026-04-10: [[entities/liteparse|LiteParse - The Local Document Parser]]
- 2026-04-08: LiteParse: LlamaIndex
- 2026-04-22: Stanford