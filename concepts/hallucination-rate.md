---
type: concept
domain: ai-agents
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: training-fine-tuning-evaluation
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Hallucination Rate

[[concepts/data-hallucination|Hallucination]] rate is a quantitative metric used to evaluate the [[concepts/software-reliability|reliability]] of [[concepts/ai-models|artificial intelligence models]] by measuring the frequency with which they generate plausible but factually incorrect or unsubstantiated information. Unlike obvious syntax errors or nonsensical output, hallucinations involve the fabrication of details, false citations, or invented [[concepts/factual-knowledge|facts]] presented with apparent confidence. This characteristic makes them particularly problematic in high-stakes applications, as users may accept the generated content as accurate without independent [[concepts/verification|verification]].

The metric is typically expressed as a percentage, calculated by dividing the number of hallucinated outputs by the total number of model outputs across a defined test set. Evaluation often involves human annotators or specialized verification models to determine whether specific claims in the output correspond to ground truth data. Because "plausibility" is subjective, standardizing the definition of a hallucination remains a significant challenge in the field, leading to variations in how different organizations report their results.

Several factors influence the hallucination rate, including the size and quality of the [[concepts/custom-dataset|training data]], the complexity of the query, and the specific architecture of the model. Techniques such as [[concepts/answer-generation|retrieval-augmented generation]] (RAG) and [[concepts/fine-tuning|fine-tuning]] on verified datasets are commonly employed to mitigate this issue. Despite these efforts, reducing the hallucination rate to near [[concepts/concept-of-nothingness|zero]] remains difficult, as it often requires a trade-off between creativity and factual strictness. Consequently, monitoring this rate is essential for deploying [[concepts/ai-agents|AI agents]] in domains where accuracy is critical, such as [[concepts/health|healthcare]], law, and scientific research.
