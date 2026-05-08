---
wiki-ingested: true
title: "CPU optimised TTS - Kitten AI - Sam Witteveen channel"
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
# [[concepts/cpu|CPU]] optimised TTS - Kitten AI - [[entities/sam-witteveen|Sam Witteveen]] channel

---
---
<https://www.youtube.com/watch?v=YpQWdrfzSzQ>

	

CPU optimised TTS

Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video reviewing **[[entities/kitten-tts|Kitten TTS]]**.

# 🐱 Kitten [[concepts/tts-model|TTS - Model]] Overview & Review

**Kitten TTS** is a new, [[concepts/open-source|open-source]] [[concepts/text-to-speech-framework|text-to-speech framework]] developed by **[[entities/kitten-ml|Kitten ML]]**. The primary focus of this project is extreme efficiency, small file sizes, and [[concepts/cpu-optimization|CPU optimization]], making it ideal for [[concepts/edge-computing|edge computing]] and [[concepts/browser-based-applications|browser-based applications]].

* * *

## 🚀 Key Features

* **Ultra-Lightweight:** The smallest model is under **25MB**.
* **CPU Optimized:** Designed to run without a GPU.
* **Edge Ready:** Can run in browsers, mobile phones, and [[entities/iot-devices|IoT devices]] with minimal [[concepts/ram|RAM]].
* **Open Source:** Released under the permissive **[[entities/apache-20|Apache 2.0]] [[concepts/license|License]]**.
* **Fast [[concepts/inference|Inference]]:** Optimized for real-time speech synthesis.

## 📦 Model Sizes & Variations

Kitten TTS offers three distinct model sizes, plus a quantized version of the smallest model.

|     |     |     |     |
| --- | --- | --- | --- |
| Model Name | [[concepts/parameters|Parameters]] | Disk Size | Description |
| **Kitten-TTS-Mini** | 80 Million | ~80 MB | The "largest" model available. |
| **Kitten-TTS-Micro** | 40 Million | ~41 MB | Mid-[[concepts/range|range]] balance of size/quality. |
| **Kitten-TTS-[[entities/nano|Nano]]** | 15 Million | ~56 MB | The smallest base model. |
| **Nano (Int8)** | 15 Million | **< 25 MB** | 8-bit quantized version. Extremely portable. |

## 🧪 Performance & Audio Quality

The video demonstrated a comparison between the [[concepts/models|models]] using a [[entities/google|Google]] Colab [[concepts/notebook|notebook]] ([[concepts/running|running]] entirely on CPU).

* **General Quality:** While not achieving the hyper-realism of massive models (like QuenTTS or ElevenLabs), the quality is impressive relative to the tiny file size.
* **Size vs. Quality:** Surprisingly, there is not a massive degradation in voice [[concepts/integrity|character]] between the 80M (Mini) and 15M (Nano) models.
* **The 8-Bit Quantized Model:**
	* **Pros:** Runs incredibly fast; file size is negligible.
	* **Cons:** Introduces some audio artifacts; struggles slightly with punctuation and pausing (sometimes results in run-on sentences).
* **Voices:** The system creates embeddings similar to **Kokoro TTS**. Available voices include:
	* _Bella, Jasper, Luna, Bruno, Rosie, Hugo, Kiki, Leo._
	* _Notable mentions:_ **Hugo** (formal/news anchor [[concepts/style|style]]) and **Luna** ([[concepts/storytelling|storytelling]] style) performed well.

## 🛠️ Technical Details

* **Format:** The models are packaged as **ONNX** [[concepts/files|files]], contributing to their portability.
* **Installation:** capable of being installed via [[entities/pip|pip]].pip install https://github.com/KittenML/KittenTTS/releases/download/0.8/kittentts-0.8.0-py3-none-any.whlpip install soundfile 
* **Development Status:** Currently in **[[entities/developer|Developer]] Preview** (Version 0.8 tested in video).
* **Team:** Appears to be a very small team (potentially a solo developer) based on the [[entities/github|GitHub]] contributors list.

## 💭 Conclusion

Kitten TTS represents a shift toward **TinyML** in the audio space. It proves that TTS [[concepts/systems|systems]] are becoming efficient enough to run fully client-side (in-browser or on-device) without relying on heavy cloud APIs or expensive GPUs. While the audio quality has minor artifacts in the smallest versions, the trade-off for a <25MB footprint makes it a game-changer for mobile and web apps.

* * *

**Resources:**

* [KittenML GitHub](https://github.com/KittenML)
* [HuggingFace Collection](https://huggingface.co/KittenML)