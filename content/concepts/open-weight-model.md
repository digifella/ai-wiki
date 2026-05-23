---
type: concept
domain: ai-agents
updated: 2026-05-23
group: open-systems-local-models
---
# open-weight model

A [[concepts/machine-learning|machine learning]] model whose [[concepts/weights|weights]] (learned [[concepts/parameters|parameters]]) are publicly accessible, enabling [[concepts/local-deployment|local deployment]], auditing, and [[concepts/personalization|customization]] without proprietary restrictions. Differs from closed-weight [[concepts/models|models]] (e.g., most commercial LLMs) where weights are withheld.

Key characteristics:
- Weights available for download (e.g., via public repositories)
- May not include full [[concepts/training|training]] code/data (only weights)
- Enables offline use, [[concepts/customization|customization]], and transparency
- Often distributed under permissive licenses

Recent example:
- [[entities/openai|OpenAI]]'s `[[concepts/gpt-oss-20b|gpt-oss-20b]]` and `[[concepts/gpt-4|gpt-oss]]-120b` variants (as detailed in Jeredblu [[concepts/running|running]] LLM locally)
- Allows [[concepts/local-inference|local inference]] without API dependencies

Related concepts:
- [[concepts/large-language-model]] (LLM)
- [[concepts/open-source]]
- [[concepts/llm-quantization|Model Quantization]] (common for [[concepts/local-deployment|local deployment]])
- [[entities/hugging-face]] (platform for sharing [[concepts/open-weight-models|open-weight models]])

Backlink: 2026 04 14 Jeredblu running LLM locally
## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-27: Google Gemma · [▶ source](https://www.youtube.com/watch?v=yJr_kTCOkFo)
- 2026-04-07: [[lab-notes/2026-04-07-Self-Evolving-AI-Autonomous-Optimization-via-Iterative-Harness|Self Evolving AI Autonomous Optimization via Iterative Harness]] · [▶ source](https://www.youtube.com/watch?v=WpcRm78KOvY)