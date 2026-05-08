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
summary: "Hallucination rate measures the frequency with which AI models generate plausible but factually incorrect or unfounded information."
updated: 2026-05-01
---
# Hallucination Rate

Hallucination rate is a quantitative metric that measures how often an AI model produces false, misleading, or unsubstantiated information while maintaining a confident or plausible tone. Rather than producing obvious errors or nonsense, hallucinations present fabricated details, incorrect citations, or invented facts as if they were true. The hallucination rate is typically expressed as a percentage of outputs that contain such errors when evaluated against a ground-truth benchmark or expert assessment.

## Measurement and Evaluation

Calculating hallucination rate requires comparing model outputs against verified factual information. Evaluation can occur across different domains—from factual question-answering and knowledge retrieval to [[concepts/summarization|summarization]] and [[concepts/reasoning|reasoning]] tasks. The metric varies significantly depending on the task, domain, and evaluation methodology. Some hallucinations are easily detected (contradictory statements), while others are subtle and may require domain expertise to identify. This variability makes standardization of hallucination rate measurement challenging across different research groups and [[concepts/software|applications]].

## Significance and Limitations

Hallucination rate has become increasingly important as language models are deployed in high-stakes applications where [[concepts/accuracy|accuracy]] is critical, such as medical information systems, legal research tools, and financial advice. A lower hallucination rate generally indicates more reliable [[concepts/model-behavior|model behavior]]. However, the metric alone is insufficient for assessing model trustworthiness—factors like the severity of errors, the model's confidence calibration, and its ability to acknowledge uncertainty also matter. Additionally, measuring hallucination rate across all possible outputs is computationally infeasible, so evaluations typically rely on sampled benchmarks that may not capture all failure modes.
