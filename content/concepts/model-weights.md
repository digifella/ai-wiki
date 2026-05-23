---
type: concept
domain: ai-agents
summary: Model weights are the learned parameters stored in files (e.g., .bin, .pt) that define a model's behavior, with storage size directly impacting computational requirements.
updated: 2026-05-23
group: open-systems-local-models
---
# Model Weights

[[concepts/parameters|Parameters]] learned during [[concepts/training|training]] that define a model's behavior. Stored in [[concepts/files|files]] (e.g., `.bin`, `.pt`) and loaded for [[concepts/inference|inference]]. Size directly impacts computational requirements (e.g., 20B [[concepts/parameters|parameters]] ≈ 40GB [[entities/storage|storage]]).

## Key Characteristics
- **[[concepts/open-weight-models|Open-weight models]]** (e.g., `[[concepts/gpt-oss-20b|gpt-oss-20b]]`) publicly share [[concepts/weights|weights]] while keeping [[concepts/training|training]] [[concepts/code|code]] proprietary
- **[[concepts/local-deployment|Local deployment]]** requires downloading weights (e.g., via [[entities/hugging-face|Hugging Face]] Hub)
- **[[concepts/inference|Inference]]** executes using weights without cloud dependency; loading/[[concepts/running|running]] involves [[concepts/inference-engines|inference engines]], [[concepts/memory-mapping|memory-mapping]], and [[concepts/software-performance|performance optimization]] rather than simple file execution (see [[lab-notes/2026-05-15-Technical-Overview-of-LLM-Inference-Loading-Memory-and-Q|Technical Overview of LLM Inference: Loading, Memory, and Quantization]])
- **[[concepts/quantization|Quantization]]** reduces weight precision to decrease [[entities/memory|memory]] footprint and accelerate loading, enabling [[concepts/deployment|deployment]] of larger [[concepts/models|models]] on [[concepts/hardware|hardware]] with [[concepts/limited-resources|limited resources]]
- **[[concepts/memory-management|Memory management]]** during weight loading requires specialized tensor allocation and mapping strategies to ensure efficient hardware utilization and minimize latency
