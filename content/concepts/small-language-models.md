---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "small-language-models"
  - "slms"
  - "model-benchmarking"
  - "open-source-ai"
  - "ocr"
  - "rag"
aliases:
  - "SLMs"
  - "4GB language models"
summary: Small Language Models are compact AI models around 4GB in size designed for general problem-solving tasks, including open-source options like Google DeepMind's Gemma family.
updated: 2026-05-23
group: ai-foundations-concepts
---
# Small Language Models

[[concepts/small-language-models-slms|Small Language Models (SLMs)]] are compact [[concepts/artificial-intelligence-models|artificial intelligence models]] typically sized around 4GB, designed to perform [[concepts/general-purpose-problem-solving|general-purpose problem-solving]] tasks efficiently. Unlike their larger counterparts, SLMs prioritize [[concepts/computational-efficiency|computational efficiency]] and [[concepts/accessibility|accessibility]] while maintaining reasonable performance across diverse [[concepts/software|applications]]. This size category represents a practical middle ground for [[concepts/deployment|deployment]] [[concepts/scenarios|scenarios]] where full-scale language models are impractical due to [[concepts/hardware|hardware]] constraints or latency requirements.

## Development and Examples

Several organizations have released [[concepts/open-source|open-source]] SLM options, notably [[entities/google-deepmind|Google DeepMind]]'s [[entities/gemma|Gemma]] family, which provides accessible alternatives to proprietary models. These models are designed to run on consumer-grade hardware and edge devices, making them suitable for [[concepts/local-deployment|local deployment]] without requiring substantial cloud infrastructure. The open-source [[entities/nature|nature]] of many SLMs enables researchers and practitioners to study, modify, and deploy models according to specific use case requirements.

## Applications

SLMs serve practical applications in [[concepts/document-processing|document processing]], [[concepts/knowledge-bases|information retrieval]] augmentation (RAG), and [[concepts/optical-character-recognition-ocr|optical character recognition (OCR)]] tasks. Their relatively small footprint makes them particularly useful for systems that require rapid [[concepts/inference|inference]] or operation on resource-constrained devices. The balance between [[concepts/code-size|model size]] and capability allows SLMs to handle general problem-solving without the computational overhead associated with larger models.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Benchmarking-SLMs-Identifying-4GB-General-Problem-Solving-Champions|Benchmarking SLMs Identifying 4GB General Problem Solving Champions]] · [▶ source](https://www.youtube.com/watch?v=wQxawC3sv68)
- 2026-04-10: [[lab-notes/2026-04-10-Benchmarking-SLMs-Identifying-4GB-General-Problem-Solving-Champions|Benchmarking SLMs Identifying 4GB General Problem Solving Champions]]
- 2026-04-12: [[lab-notes/2026-04-12-RotorQuant-vs-TurboQuant-LLM-KV-Cache-Compression-Performance-Reality-|RotorQuant vs TurboQuant LLM KV Cache Compression Performance Reality ]] · [▶ source](https://www.youtube.com/watch?v=wSxsYjScRr0)
- 2026-04-14: # [[concepts/optical-character-recognition-ocr|Nanonets OCR]] for tables to text for RAG --- --- <https://www.youtube.com/watch?v=j7oxmKCwCPM> Of course. Here is a summary of the video. **Author:** In this video from his AI and [[concepts/machine-learning|machine learning]] channel, the author provides an in-depth look at a new [[concepts/open-source|open-source]] OCR model. **Su (Nanonets OCR for tables to text for RAG)
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
- 2026-04-28: Apple
- 2026-04-30: [[lab-notes/2026-04-30-Google-DeepMinds-Gemma-4-High-Performance-Accessible-Ope|Google DeepMind's Gemma 4: High-Performance, Accessible Open-Source AI Models]]