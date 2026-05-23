---
type: concept
domain: tools-platforms
summary: The memory footprint refers to the amount of RAM used by a program or system, critical for Large Language Models (LLMs) due to their high storage and execution requirements.
updated: 2026-05-23
group: platforms-runtimes-environments
---
# Memory-Footprint

The term "[[concepts/memory-overhead|memory-footprint]]" refers to the amount of [[concepts/memory|memory]] ([[concepts/ram|RAM]]) used by a program or system when [[concepts/running|running]]. In the context of [[concepts/large-language-model-llm|Large Language Models]] (LLMs), this concept is crucial as these [[concepts/models|models]] require significant amounts of RAM to store their [[concepts/weights|weights]] and activations during [[concepts/inference|inference]].

### Key Concepts:
- **[[concepts/inference-optimization|KV Cache]] Compression:** Technique that aims [[concepts/assistive-technology|at]] reducing the memory footprint of LLMs by compressing key-value cache, enabling more efficient use of available resources.
- **Compression Algorithms:** Utilized for data reduction in various formats, including [[concepts/text|text]], [[concepts/images|images]], [[concepts/audio-modality|audio]], and video [[concepts/files|files]]. In the realm of LLMs, they are used to optimize model [[entities/storage|storage]] and execution.

### Related Links:
- concept
- [[lab-notes/2026-05-15-Technical-Overview-of-LLM-Inference-Loading-Memory-and-Q|Technical Overview of LLM Inference: Loading, Memory, and Quantization]]: Technical analysis of [[concepts/model-loading|model loading]], inference mechanics, and [[concepts/quantization|quantization]] strategies affecting memory consumption; source material by [[entities/caleb-writes-code|Caleb Writes Code]]]].
