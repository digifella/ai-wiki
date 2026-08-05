---
wiki-ingested: true
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=jZ8wPB-KI8g>
Sure! Here’s a summary of the Qwen3-TTS family of models:

* **[[concepts/open-source|Open Source]]:** The [[entities/qwen-team|Qwen team]] recently open-sourced the Qwen3-TTS family, which includes features like voice [[concepts/design|design]], voice [[concepts/cloning|cloning]], and [[concepts/text-to-speech-synthesis|text-to-speech]] generation. These models are available on Hugging Face.
* **Model Sizes:** There are two main sizes:
	* **0.6B Model:** A smaller version supporting 9 premium [[concepts/timbres|timbres]] across 10 languages, suitable for low-latency streaming.
	* **1.7B Model:** A larger, more powerful version with advanced capabilities like instruction control for voice design and high-quality voice cloning.
* **Key Features:**
	* **Multilingual & Multi-dialect Support:** Supports 10 mainstream languages (Chinese, English, Japanese, Korean, German, French, Russian, Portuguese, Spanish, and Italian) and several dialects.
	* **Voice Design:** Allows users to describe a voice in natural language (e.g., "a deep, gravelly voice with wisdom") to generate speech with specific characteristics.
	* **Voice Cloning:** Can clone any voice using just a 3-second audio sample.
	* **Instruction Control:** Provides fine-grained control over emotions (happy, sad, etc.), speaking styles (whispering, shouting), and [[concepts/integrity|character]] traits.
	* **End-to-End [[concepts/architecture|Architecture]]:** Built on a discrete multi-codebook LM architecture for high-[[concepts/speed|speed]], high-fidelity speech reconstruction.
	* **Smart Text Handling:** Capable of correctly pronouncing complex text, such as mathematical equations and technical symbols, without needing phonetic transcriptions.
* **Demos:** The models can be tested via a Hugging Face Space demo or through provided [[entities/google-colab|Colab]] notebooks, which showcase various tasks like multi-[[entities/speaker|speaker]] comparison, batch [[concepts/inference|inference]], and long-form [[concepts/text-generation|text generation]].

## Related Concepts
- [[concepts/timbre|Timbre]] — [Wikipedia](https://en.wikipedia.org/wiki/Timbre)
- [[concepts/voice-design|Voice Design]] — [Wikipedia](https://en.wikipedia.org/wiki/Voice_Design)
- [[concepts/text-to-speech-generation|Text-to-Speech Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Text-to-Speech_Generation)
- [[concepts/instruction-control|Instruction Control]] — [Wikipedia](https://en.wikipedia.org/wiki/Instruction_Control)
- [[concepts/multilingual-support|Multilingual Support]] — [Wikipedia](https://en.wikipedia.org/wiki/Multilingual_Support)

## Related Entities
- [[entities/qwen-tts-model|Qwen TTS model]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_TTS_model)
- [[entities/sam-witteveen|Sam Witteveen]] — [Wikipedia](https://en.wikipedia.org/wiki/Sam_Witteveen)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)