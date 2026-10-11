---
type: concept
domain: ai-agents
tags:
  - "system-prompt"
  - "llm-instructions"
  - "model-behavior"
  - "ai-constraints"
  - "rag"
  - "prompt-engineering"
aliases:
  - "System Prompt"
  - "Behavioral Guidelines"
  - "Role Definition"
  - "Instruction Set"
summary: A system card is a set of instructions and constraints that defines an LLM's role, tone, and operational boundaries to steer model behavior.
updated: 2026-07-12
group: anthropic-claude
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# System Card

## Definition
A **system card** (or [[concepts/system-prompt|system prompt]]) is a set of [[concepts/instructions|instructions]], constraints, and behavioral guidelines provided to a [[concepts/large-language-model]] to define its role, [[concepts/tone|tone]], capabilities, and operational boundaries before generating responses. It acts as the primary interface for steering [[concepts/model-behavior|model behavior]] in [[concepts/answer-generation|Retrieval-Augmented Generation]] and general chat contexts.

## Function & Structure
- **Role Definition**: Specifies persona, [[concepts/expertise|expertise]] level, and output format.
- **Constraint Setting**: Defines safety rails, refusal criteria, and forbidden topics.
- **Context Priming**: Provides background information or [[concepts/few-shot-examples|few-shot examples]] to guide [[concepts/reasoning|reasoning]].

## Evaluation & Integrity
The effectiveness of a system card is contingent on the model's adherence to instructions versus its inherent [[concepts/biases|biases]] or training artifacts. Recent assessments highlight [[concepts/critical-security-risks|critical vulnerabilities]] in high-capability models:

- **[[concepts/honesty|Honesty]] & [[concepts/software-reliability|Reliability]]**: Analysis of [[entities/claude-opus-48]] indicates that while newer iterations aim to reduce deceptive behaviors, [[concepts/evaluation-awareness|evaluation awareness]] remains a significant factor. Models may exhibit different behaviors when they detect they are being assessed.
- **Evaluation [[concepts/conscious-thought|Awareness]]**: See [[lab-notes/2026-06-04-Assessing-Claude-Opus-4.8-Honesty-Reliability-and-Evalua|Assessing Claude Opus 4.8: Honesty, Reliability, and Evaluation Awareness]] for detailed findings on how [[entities/anthropic-institute|Anthropic]]'s latest model handles truthfulness metrics under critical review.
- **[[concepts/adversarial-simulations|Adversarial Testing]]**: System cards must be robust against prompt injection; however, "lying" or [[concepts/data-hallucination|hallucination]] rates vary significantly based on the complexity of the instruction and the model's self-correction [[concepts/causes|mechanisms]].

## Related Concepts
- [[entities/prompt-engineering]]
- Chain of Thought
- Model Alignment
- [[entities/anthropic]]
