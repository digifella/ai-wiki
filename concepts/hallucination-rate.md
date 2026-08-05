---
type: concept
domain: ai-agents
group: training-fine-tuning-evaluation
tags:
  - "hallucination"
  - "ai-accuracy"
  - "llm-evaluation"
  - "factual-correctness"
  - "model-reliability"
  - "output-validation"
aliases:
  - "hallucination metric"
  - "false generation rate"
  - "confabulation rate"
summary: Hallucination rate measures the frequency with which AI models generate plausible but factually incorrect or unfounded information.
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Hallucination Rate

Hallucination rate is a quantitative metric that measures the frequency with which AI models generate plausible but factually incorrect or unsubstantiated information. Unlike obvious errors or nonsensical output, hallucinations present fabricated details, false citations, or invented facts with apparent confidence. This makes them particularly problematic because users may accept them as accurate without verification. The metric is typically expressed as a percentage, calculated by dividing the number of hallucinated outputs by the total number of model outputs across a test set.

## Measurement and Challenges

Calculating hallucination rate requires human annotation or comparison against reliable reference sources to identify false claims. This process is labor-intensive and sometimes subjective, particularly when evaluating nuanced claims or matters of interpretation. Different domains—such as medical information, legal documents, or historical facts—may require domain-specific verification approaches. As a result, hallucination rates can vary significantly depending on the evaluation methodology, test dataset, and threshold for what constitutes a hallucination.

## Importance for AI Deployment

Hallucination rate is a critical evaluation metric for AI agents and language models intended for high-stakes applications such as customer support, medical advice, or financial guidance. A high hallucination rate limits user trust and increases operational risk. Many organizations track this metric during model development and deployment to establish acceptable thresholds and identify areas where additional training, retrieval augmentation, or human oversight is necessary.
