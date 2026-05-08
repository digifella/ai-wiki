---
wiki-ingested: true
title: "New SmoILM3 from hugging face"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
---
# New SmoILM3 from [[entities/hugging-face|hugging face]]

---
---
<https://huggingface.co/blog/smollm3>
<https://github.com/samwit/llm-tutorials>

<https://www.youtube.com/watch?v=WxABcirpB1g>
[[entities/fahd-mirza|Fahd Mirza]] Used VLLM to serve locally
This video provides a detailed review and [[concepts/local-installation|local installation]] guide for the `HuggingFaceTB/SmolLM3-3B` model, a new 3-billion parameter language model from Hugging Face's [[concepts/smollm-family|SmolLM family]].
**Key Features of SmolLM3-3B:**

* **Size:** A [[concepts/3-billion-parameter-model|3-billion parameter model]].
* **Reasoning:** Features an advanced "[[concepts/thinking-mode|thinking mode]]" that allows it to show its reasoning process before generating a final answer.
* **Multilingual:** Supports 8 European languages, including English, Spanish, French, and German.
* **[[concepts/context-window|Context Window]]:** A large 128k token context window.
* **[[concepts/capabilities|Capabilities]]:** Includes [[concepts/tool-calling|tool-calling]] abilities for agentic applications.

**Installation and Setup:**

1. The presenter uses an Ubuntu system with an NVIDIA RTX 6000 GPU.
2. They use the `vLLM` library to serve the model. The installation command is `pip install vllm`.
3. The model is served on port 8000 using the command: `vllm serve HuggingFaceTB/SmolLM3-3B --host 0.0.0.0 --port 8000`.
4. For a user-friendly interface, the presenter installs and runs **[[concepts/open-webui|Open WebUI]]** on port 3000.
5. They configure Open WebUI to connect to the vLLM server by setting the API base to `http://localhost:8000/v1`.

**Model Testing and Performance:** The presenter runs several tests to evaluate the model's capabilities:

* **Reasoning and Conversation:** When prompted with a conversational request ("Hey smile, you are on camera..."), the model successfully demonstrates its reasoning feature. It analyzes the context, plans a helpful response, and even provides relevant follow-up questions.
* **Resource Consumption:** A check with `nvidia-smi` reveals a surprisingly high VRAM usage of nearly **45GB**, leading the presenter to conclude that "SmolLM" is not "small" in terms of its [[concepts/hardware-requirements|hardware requirements]].
* **Safety and [[concepts/ai-safety|Guardrails]]:** The model handles a provocative and potentially harmful question responsibly. It refuses to give a direct answer, explains its limitations as an AI, discusses the topic from a neutral, philosophical perspective, and steers the conversation back to a safe topic.
* **General Knowledge:** When asked to list the top 10 archipelago countries, the model provides a well-researched and correctly formatted list, demonstrating good general knowledge.
* **Multilingual Translation:** This test reveals a weakness. While the model handles its supported languages well, it struggles significantly with languages outside its [[concepts/training-data|training data]]. Instead of stating it doesn't know a language, it gets stuck in a repetitive, hallucinatory loop, which the presenter finds disappointing.

**Conclusion:** The `SmolLM3-3B` model is a capable [[concepts/text-generation|text-generation]] and [[concepts/reasoning-model|reasoning model]] with strong safety features. However, its "small" name is misleading due to its very high VRAM consumption. Its multilingual performance is limited, and it does not handle unsupported languages gracefully. The presenter recommends it for text and reasoning tasks but not for specialized areas like coding or for languages beyond its official support.

<https://www.youtube.com/watch?v=T4XDMeoyvU0>

Of course. Here is a detailed summary of the video "SmolLM v3: A New 3B Model by [[entities/sam-witteveen|Sam Witteveen]]:

### Introduction

The video introduces **SmolLM v3**, a new 3-billion-parameter language model developed and released by Hugging Face. The presenter emphasizes that the video will cover not only the model's performance but also, more importantly, the transparent and detailed "engineering blueprint" Hugging Face released alongside it. The goal is to explore how the model was created and to test its capabilities in reasoning, non-reasoning, and [[concepts/agentic-tasks|agentic tasks]] like function calling, to see if it could be a viable [[concepts/local-model|local model]] for running AI agents without relying on proprietary APIs.

### Model Overview and Performance

* **Release:** Hugging Face has released a new 3B model named **SmolLM3**, which includes a base version, an instruction-tuned version, and an ONNX version for optimized [[concepts/inference|inference]]. The community has already started creating GGUF versions, making it accessible on platforms like Ollama and LM Studio.
* **Performance:** On a chart comparing [[concepts/model-size|model size]] versus performance (win rate), SmolLM3 sits in an "efficiency sweet spot." It outperforms older models in its size class, such as Llama-3.2-3B and Qwen2.5-3B. It is competitive with larger 4-billion-[[concepts/parameter-models|parameter models]] like Qwen3 4B and Gemma3 4B. Its 3B size makes it suitable for running on modern mobile devices.

### Key Features and Training "Blueprint"

Hugging Face's release is particularly notable for its openness, providing a comprehensive **"SmolLM3: Blueprint"** that details the entire [[concepts/training-process|training process]]. This level of transparency is a significant contribution to the [[concepts/open-source|open-source]] community, offering a stark contrast to the often-secretive methods of proprietary labs.
**Model Features:**

* **Training Data:** Trained on an impressive 11 trillion tokens.
* **Reasoning:** The instruction model features dual-mode reasoning, allowing users to enable or disable a "[[concepts/multi-step-reasoning|chain-of-thought]]" process using `think`/`no_think` modes.
* **Multilingual:** Supports six languages: English, French, Spanish, German, Italian, and Portuguese.
* **Context Length:** Has a long context of up to 128k, extendable to 256k, using techniques like NoPE and YaRN.

**The Blueprint reveals key training details:**

* **[[concepts/architecture|Architecture]]:** It uses an architecture similar to Llama 3 but incorporates modern techniques like Grouped Query [[concepts/attention|Attention]] (GQA), "NoPE" (a [[concepts/hybrid-attention|hybrid attention]] strategy without positional embeddings), and removing weight decay from embeddings for better training stability (an idea from OLMo 2).
* **Pretraining Recipe:** A three-phase pretraining strategy was used: **Phase I:** Web-heavy data mix (85% web, 12% code, 3% math). **Phase II:** Injected higher-quality data, increasing the proportion of math and code. **Phase III:** Further upsampled high-quality math and code data.
* **Post-training:** The process included mid-training, long-context extension, [[concepts/supervised-fine-tuning|Supervised Fine-Tuning]] (SFT), and a novel alignment method called **Anchored Preference Optimization (APO)**, a more stable variant of DPO. They also utilized model merging and "model soup" techniques.

### Demo and Practical Use

The presenter demonstrates the model's capabilities in a code-based environment.

* **Reasoning vs. Non-Reasoning:** When reasoning is enabled (by default or by prompt), the model generates a detailed `<think>` block, showing its step-by-step thought process before providing a comprehensive, well-structured final answer. When reasoning is disabled (using a `/no_think` [[concepts/system-prompt|system prompt]]), the model provides a more direct and less detailed answer. The reasoning-enabled outputs are shown to be of higher quality.
* **[[concepts/code-generation|Code Generation]]:** The model performs well on code generation tasks, breaking down the problem into [[concepts/logical-steps|logical steps]] within its thinking process before writing the code.
* **Tool Use (Function Calling):** This is highlighted as a key strength. The model can correctly identify the appropriate function to call from a provided list of tools. It accurately extracts the necessary arguments from the user's prompt (e.g., identifying "Copenhagen" for a `get_weather` function). It correctly decides **not** to call a tool for conversational queries that don't require one (e.g., "How do you feel?"), simply providing a chat-based response.

### Conclusion

The video concludes that SmolLM3 is a powerful and interesting release, especially for a model of its small size. However, the most significant contribution is the **transparency** provided by the engineering blueprint. This detailed recipe for building a competitive small model, including the architecture, data mixtures, and training stages, is an invaluable resource for the open-source AI community. It empowers researchers and developers to understand, replicate, and build upon these advanced techniques.
