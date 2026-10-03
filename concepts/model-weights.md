---
type: concept
domain: ai-agents
tags:
  - "llm-parameters"
  - "model-storage"
  - "inference-data"
  - "quantization"
  - "local-deployment"
  - "ai-security"
  - "qwen-family"
  - "open-weight"
aliases:
  - "Learned Parameters"
  - "Model Files"
  - "Network Weights"
  - "Checkpoint Data"
summary: Model weights are the learned parameters stored in files (e.g., .bin, .pt) that define a model's behavior, with storage size directly impacting computational requirements and introducing specific security risks in open-weight ecosystems.
updated: 2026-08-03
group: open-systems-local-models
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-03T20:51:50+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Model Weights

Parameters learned during training that define a model's behavior. Stored in files (e.g., `.bin`, `.pt`) and loaded for [[concepts/inference|inference]]. Size directly impacts computational requirements (e.g., 20B parameters ≈ 40GB [[entities/storage|storage]]).

## Key Characteristics
- **[[concepts/open-weight-models|Open-weight models]]** (e.g., `[[concepts/gpt-oss-20b|gpt-oss-20b]]`) publicly share [[concepts/weights|weights]] while keeping training code proprietary
- **[[concepts/local-deployment|Local deployment]]** requires downloading [[concepts/parameters|weights]] (e.g., via [[entities/hugging-face|Hugging Face]] Hub)
- **[[concepts/inference|Inference]]** executes using weights without cloud dependency; loading/running involves [[concepts/inference-engines|inference engines]], [[concepts/memory-mapping|memory-mapping]], and [[concepts/software-performance|software performance]] optimization
- **Recent Ecosystem [[concepts/software-updates|Updates]]**: The [[concepts/deployment|release]] of **[[concepts/qwen-38-max|Qwen 3.8-Max]]** highlights the trend of high-capability models with [[concepts/open-source|open-source]] variants (e.g., [[concepts/qwen-38-27b|Qwen 3.8-27B]]) for [[concepts/local-control|local deployment]] and [[concepts/autonomous-coding|autonomous coding]] tasks [[lab-notes/2026-08-03-Qwen-3.8-Max-Autonomous-Coding-Debugging-and-Open-Source|Qwen 3.8-Max: Autonomous Coding, Debugging, and Open-Source Qwen 3.8-27B]]

## References
- [Qwen 3.8-Max: Autonomous Coding, Debugging, and Open-Source Qwen 3.8-27B](https://www.youtube.com/watch?v=L2phPnfTzrg)
