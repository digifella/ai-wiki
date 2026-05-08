---
wiki-ingested: true
title: "Best small LLM for local inference for instruction following"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: reasoning-context-prompting
---
# Best small LLM for [[concepts/local-inference|local inference]] for instruction following

---
---
[[entities/google|Google]]:
For [[concepts/running|running]] well-instructed small [[concepts/large-language-models|Large Language Models (LLMs)]] on a 48GB [[concepts/vram|VRAM]] [[entities/nvidia|NVIDIA]] GPU, Llama 3.1 70B (quantized) is a strong contender. Other viable options include quantized versions of [[entities/gemma|Gemma]] 2 27B, [[entities/qwen|Qwen]] 2 72B, and [[entities/mistral|Mistral]] Large. These [[concepts/models|models]], when properly quantized to reduce their size, can effectively run on a 48GB VRAM [[concepts/setup|setup]] and provide strong performance for [[concepts/instruction-following|instruction-following]] tasks. 

Here's a more detailed breakdown:

* **Llama 3.1 70B (Quantized):**
	[[entities/meta-ai|Meta]]'s Llama 3.1 70B is a powerful model that can be quantized (reduced in size) to fit within the 48GB VRAM limit of your GPU, specifically with Q4/5 quantization. 
	
* **[[entities/gemma-2|Gemma 2]] 27B (Quantized):**
	[[entities/gemma-4-e2b|Google's Gemma]] 2 27B model offers a good balance of size and performance, and can be quantized to run effectively on your GPU. 
	
* **[[entities/qwen-2|Qwen 2]] 72B (Quantized):**
	Similar to Llama 3.1, Qwen 2 72B can be quantized for deployment on 48GB VRAM [[concepts/systems|systems]]. 
	
* **[[entities/mistral-large|Mistral Large]]:**
	Mistral's models, particularly Mistral Large, are known for their strong performance and ability to follow [[concepts/instructions|instructions]], and can also be quantized for your setup. 
	

Key considerations for your setup:

* **Quantization:**
	Quantization is crucial for fitting large models onto consumer [[concepts/hardware|hardware]]. It involves reducing the precision of the model's [[concepts/weights|weights]], which can significantly decrease the [[concepts/memory|memory]] footprint. 
	
* **GPU Layers Offloading:**
	You can also offload some of the model's layers to system [[concepts/ram|RAM]] if the entire model doesn't fit in VRAM, although this can affect performance. 
	
* **[[concepts/inference|Inference]] Frameworks:**
	Tools like [[entities/llama|Ollama]] and [[concepts/vllm|vLLM]] can help manage the loading and inference of large language models on your GPU. 
	
* **[[concepts/context-window|Context Window]]:**
	Consider the [[concepts/context-window-size|context window size]] of the model. Larger [[concepts/context-windows|context windows]] require more VRAM, so you may need to experiment to find the right balance. 
	

* * *

[[entities/chat4o|Chat4o]]:
Given your objective to build an advanced local Retrieval-Augmented Generation (RAG) and knowledge graph system on an RTX 8000, prioritising accurate JSON output over [[concepts/speed|speed]], here are tailored recommendations based on recent developments and community insights.

* * *

## 🧠 Recommended Local LLMs for Accurate JSON Output

### 1.

### [[entities/mistral-7b-instruct|Mistral 7B Instruct]] v0.3

* Strengths: Fine-tuned for instruction following with support for function calling and structured outputs.
* Compatibility: Runs efficiently on RTX 8000 using [[concepts/quantisation|4-bit quantisation]] (e.g., Q4\_K\_M).
* Usage: Compatible with inference frameworks like [[entities/llamacpp|llama.cpp]] and vLLM.
* Reference: [Mistral 7B Instruct v0.3](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3) 

### 2.

### [[entities/deepseek|DeepSeek]] 8B

* Strengths: Demonstrates high reliability in producing structured JSON outputs.
* [[concepts/integration|Integration]]: Works seamlessly with tools like [[entities/ollama|Ollama]] and Zod for schema validation.
* Reference: [DeepSeek 8B](https://huggingface.co/deepseek-ai/deepseek-llm-8b) 

### 3.

### LLaMA 3.3 70B

* Strengths: Offers superior instruction adherence and JSON formatting capabilities.
* Considerations: Requires substantial VRAM; your RTX 8000’s 48GB is adequate for running this model.
* Reference: [LLaMA 3.3 70B](https://huggingface.co/meta-llama/Llama-3-70b) 

* * *

## 🛠️ Tools to Enforce JSON [[concepts/structure|Structure]]

To enhance the reliability of JSON outputs, consider integrating the following tools:

* LM Format Enforcer: Utilises character-level parsing and tokenizer prefix trees to constrain model outputs to predefined JSON schemas or [[concepts/regular-expressions|regular expressions]].
	
	* Reference: [LM Format Enforcer](https://github.com/noamgat/lm-format-enforcer)
	
* Guidance: Provides a framework for guiding LLM outputs using [[concepts/templates|templates]] and constraints, ensuring adherence to desired formats.
	
	* Reference: [Guidance](https://github.com/microsoft/guidance)
	
* Zod with Ollama: Combines schema validation (Zod) with [[concepts/local-model|local model]] inference (Ollama) to validate and correct JSON outputs dynamically.
	
	* Reference: [Building a Self-Healing LLM JSON Processor](https://www.pedroalonso.net/blog/llm-json-processor-zod-ollama/)
	

* * *

## ⚙️ Inference Frameworks Compatible with RTX 8000

* llama.cpp: Optimised for [[concepts/cpu|CPU]] and GPU inference, supporting various quantisation formats.
	
	* Reference: [llama.cpp](https://github.com/ggerganov/llama.cpp) 
	
* Ollama: Simplifies running local models with support for structured outputs and integration with tools like Zod.
	
	* Reference: [Ollama](https://ollama.ai/) 
	
* [[entities/lm-studio|LM Studio]]: Provides a user-friendly interface for running and managing local LLMs, with features like GPU offloading.
	
	* Reference: [LM Studio](https://lmstudio.ai/)
	

* * *

## ✅ Recommendations [[concepts/summary|Summary]]

|     |     |     |     |
| --- | --- | --- | --- |
| Model | JSON [[concepts/accuracy|Accuracy]] | RTX 8000 Compatibility | [[concepts/notes|Notes]] |
| Mistral 7B Instruct | High | Excellent | Supports function calling; efficient with 4-bit quantisation. |
| DeepSeek 8B | High | Good | Reliable JSON output; integrates well with validation tools. |
| LLaMA 3.3 70B | Very High | Adequate | Requires full VRAM; offers superior instruction adherence. |

* * *

## 🔍 Next Steps

* Model Selection: Choose between Mistral 7B Instruct and DeepSeek 8B based on your balance between performance and resource utilisation.
* Tool Integration: Incorporate LM Format Enforcer or Zod with Ollama to enforce JSON structure and validate outputs.
* Framework Setup: Utilise llama.cpp or Ollama for model inference, ensuring compatibility with your RTX 8000.

If you need assistance with setting up these tools or integrating them into your RAG pipeline, feel free to ask for detailed guidance.