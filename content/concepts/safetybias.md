---
type: concept
domain: ai-agents
tags:
  - "quality-assurance"
  - "critique-process"
  - "bias-detection"
  - "response-evaluation"
  - "error-identification"
  - "ai-safety"
  - "improvement-methodology"
aliases:
  - "critical analysis"
  - "response critique"
  - "task validation"
  - "CAIA"
summary: A process for performing rigorous critiques of task responses to identify inaccuracies, biases, or areas for improvement.
updated: 2026-05-23
group: safety-guardrails-governance
---
# Safetybias

Safetybias is a structured evaluation process used in [[concepts/ai-productivity-agents|AI agent systems]] to examine task [[concepts/responses|responses]] for defects, inaccuracies, and areas of concern. Rather than accepting initial outputs uncritically, this approach involves performing a [[concepts/diagnostic-audit|rigorous critique]] of generated content to identify problems that might otherwise go undetected. The process is particularly relevant in [[concepts/safe-ai-use|AI safety]] contexts where flawed or biased responses can propagate downstream or reinforce problematic patterns.

## Core Practice

The safetybias process typically involves reviewing a completed response against multiple quality dimensions: [[concepts/factual-accuracy|factual accuracy]], logical coherence, clarity of explanation, completeness of coverage, presence of bias, and practical applicability. This systematic examination aims to surface weaknesses that a single pass through content generation might miss. Once problems are identified, the process extends beyond critique to propose concrete alternatives and generate corrected versions of the problematic content.

## Integration with Prompt Design

Safetybias functions as both a runtime [[concepts/task-review|quality check]] and a [[concepts/feedback|feedback]] mechanism for improving future [[concepts/prompting|prompting]] strategies. By documenting what errors or [[concepts/biases|biases]] appeared in [[entities/agent|agent]] responses, teams can refine their initial [[concepts/instructions|instructions]] and constraints. This iterative relationship between [[concepts/practicality-assessment|response critique]] and prompt refinement helps gradually reduce the frequency and severity of problematic outputs over time.
