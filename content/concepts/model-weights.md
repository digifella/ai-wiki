---
type: concept
domain: ai-agents
tags:
  - "machine-learning"
  - "ai"
  - "llm"
  - "model-weights"
  - "model-storage"
  - "local-inference"
  - "open-weight-models"
aliases:
  - "model parameters"
summary: "Model weights are the learned parameters stored in files (e.g., .bin, .pt) that define a model's behavior, with storage size directly impacting computational requirements."
updated: 2026-04-22
group: open-systems-local-models
---
# Model Weights

[[concepts/parameters|Parameters]] learned during [[concepts/training|training]] that define a model's behavior. Stored in [[concepts/files|files]] (e.g., `.bin`, `.pt`) and loaded for [[concepts/inference|inference]]. Size directly impacts computational requirements (e.g., 20B [[concepts/parameters|parameters]] ≈ 40GB [[entities/storage|storage]]).

## Key Characteristics
- **[[concepts/open-weight-models|Open-weight models]]** (e.g., `[[concepts/gpt-oss-20b|gpt-oss-20b]]`) publicly share [[concepts/weights|weights]] while keeping [[concepts/training|training]] [[concepts/code|code]] proprietary
- **[[concepts/local-deployment|Local deployment]]** requires downloading weights (e.g., via [[entities/hugging-face|Hugging Face]] Hub)
- **[[concepts/inference|Inference]]** executes using weights without cloud dependency; loading/[[concepts/running|running]] involves inference engines, [[concepts/memory-mapping|memory-mapping]], and [[concepts/software-performance|performance optimization]] rather than simple file execution (see 2026 04 22 [[concepts/llm-inference|LLM Inference Engines]] [[concepts/memory|Memory]] Mapping and Performance Optimization)

## Recent Developments
- Jeredblu demonstrates [[concepts/running|running]] [[entities/gpt-oss-20b]] ([[entities/openai|OpenAI]]'s [[concepts/open-weight|open-weight]] LLM) locally (see [[concepts/date-2026-04-13|2026]] 04 14 Jeredblu running LLM locally)

## Source Notes
- 2026-04-14: # [[concepts/prompt-engineering|Prompt Engineering]] channel - new RAG multi modal approach --- --- <
## Source Notes
- 2026-04-22: LLM Inference · [▶ source](https://www.youtube.com/watch?v=B18zBnjZKmc)
- 2026-04-24: DeepSeek · [▶ source](https://www.youtube.com/watch?v=u3f35QQSLqE)
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)
- 2026-04-08: [[lab-notes/2026-04-08-Llamacpp-Local-LLM-Inference-for-Accessible-Private-AI|Llamacpp Local LLM Inference for Accessible Private AI]] · [▶ source](https://www.youtube.com/watch?v=P8m5eHAyrFM)
- 2026-04-10: [[lab-notes/2026-04-10-TurboQuant-Reducing-LLM-Memory-Footprint-via-KV-Cache-Compression|TurboQuant Reducing LLM Memory Footprint via KV Cache Compression]] · [▶ source](https://www.youtube.com/watch?v=XLlQDfhyBjc)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-13: [[lab-notes/2026-04-13-Demystifying-AI-Transformer-Training-on-a-1979-PDP-11|Demystifying AI Transformer Training on a 1979 PDP 11]] · [▶ source](https://www.youtube.com/watch?v=OUE3FSIk46g)
- 2026-04-19: [[lab-notes/2026-04-19-Qwen-36-35B-Full-Precision-vs-Ollama-Quantized-Performance-Memory-Trad|Qwen 36 35B Full Precision vs Ollama Quantized Performance Memory Trad]] · [▶ source](https://www.youtube.com/watch?v=RlGppgMDl9k)
- 2026-04-20: [[lab-notes/2026-04-20-Larql-Querying-and-Modifying-LLM-Internal-Database-Structures|Larql Querying and Modifying LLM Internal Database Structures]] · [▶ source](https://www.youtube.com/watch?v=8Ppw8254nLI)
- 2026-04-27: Google Gemma · [▶ source](https://www.youtube.com/watch?v=yJr_kTCOkFo)