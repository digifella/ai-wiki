---
wiki-ingested: true
title: "Qwen TTS model - Sam Witteveen channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
---
# [[entities/qwen|Qwen]] [[concepts/tts-model|TTS model]] - [[entities/sam-witteveen-channel|Sam Witteveen channel]]

---
---
<https://www.youtube.com/watch?v=jZ8wPB-KI8g>
Sure! Here’s a [[concepts/summary|summary]] of the Qwen3-TTS family of [[concepts/models|models]]:

* **[[concepts/open-source|Open Source]]:** The [[entities/qwen-team|Qwen team]] recently open-sourced the Qwen3-TTS family, which includes features like voice [[concepts/design|design]], voice [[concepts/cloning|cloning]], and [[concepts/text-to-speech-synthesis|text-to-speech]] generation. These models are available on [[entities/hugging-face|Hugging Face]].
* **Model Sizes:** There are two main sizes:
	* **0.6B Model:** A smaller version supporting 9 premium [[concepts/timbres|timbres]] across 10 languages, suitable for low-latency streaming.
	* **1.7B Model:** A larger, more powerful version with advanced capabilities like instruction control for voice design and high-quality voice cloning.
* **Key Features:**
	* **Multilingual & Multi-dialect Support:** Supports 10 mainstream languages (Chinese, English, Japanese, Korean, German, French, Russian, Portuguese, Spanish, and Italian) and several dialects.
	* **Voice Design:** Allows users to describe a voice in natural language (e.g., "a deep, gravelly voice with wisdom") to generate speech with specific characteristics.
	* **Voice Cloning:** Can clone any voice using just a 3-second audio sample.
	* **Instruction Control:** Provides fine-grained control over emotions (happy, sad, etc.), speaking styles (whispering, shouting), and [[concepts/integrity|character]] traits.
	* **End-to-End [[concepts/architecture|Architecture]]:** Built on a discrete multi-codebook LM architecture for high-speed, high-fidelity speech reconstruction.
	* **Smart Text Handling:** Capable of correctly pronouncing complex text, such as mathematical equations and technical symbols, without needing phonetic transcriptions.
* **Demos:** The models can be tested via a Hugging Face Space demo or through provided [[entities/google-colab|Colab]] notebooks, which showcase various tasks like multi-speaker comparison, batch [[concepts/inference|inference]], and long-form text generation.