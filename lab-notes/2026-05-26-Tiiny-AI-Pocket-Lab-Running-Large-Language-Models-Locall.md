---
wiki-ingested: true
title: "Tiiny AI Pocket Lab: Running Large Language Models Locally and Privately"
date: 2026-05-26
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: entertainment-games
group: individual-sports-performance
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

Generated: 2026-05-26 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: [[concepts/summary|Summary]]

---

## Tiiny AI Pocket Lab: Running Large Language Models Locally and Privately
**[[concepts/clip-title|Clip title]]:** This Shouldn’t Be Able to Run 120B Locally
**Author / channel:** Alex Ziskind
**URL:** https://www.youtube.com/watch?v=RkzCAaIV_cQ

### Summary
The video introduces the Tiiny AI Pocket Lab, a compact device designed to run [[concepts/large-language-model-llm|large language models]] (LLMs) locally and privately, challenging the traditional need for extensive, expensive GPU [[concepts/hardware|hardware]]. The presenter [[concepts/highlights|highlights]] the growing trend of bigger GPUs and servers for AI, then dramatically reveals this pocket-sized device capable of handling models up to 120 billion [[concepts/parameters|parameters]], a claim he sets out to verify.

The Tiiny AI Pocket Lab is surprisingly powerful for its size, weighing just 305 grams. It features an ARM v9.2 CPU with a [[concepts/neural-engine|Neural Processing Unit]] (NPU) boasting 30 INT8 TOPS, an impressive 80GB of LPDDR5X [[concepts/memory|memory]], and 1TB PCIe 4.0 SSD [[entities/storage|storage]]. This allows it to directly store and process large models, rather than relying on the host computer's [[concepts/limited-resources|limited resources]]. The device connects to a host computer (a [[entities/macbook|MacBook]] Neo with only 8GB RAM is used in the demo) via USB-C, where its TiinyOS software provides a user-friendly interface. While the host MacBook could only run a 4-billion parameter model at 9 tokens/second, the Tiiny device successfully ran the GPT-OSS-120B model (which typically requires 60-80GB VRAM) locally, achieving a decoding speed of 18.86 tokens/second without stressing the MacBook's memory.

Beyond simple chat, TiinyOS offers an "Agent Store" with various pre-built [[concepts/ai-powered-applications|AI applications]] like ChatMemo ([[concepts/ai-assistant|AI assistant]]), Presenton, RAGFlow, SD Web UI (for Stable Diffusion), and TiinyBot. It also provides an SDK and [[concepts/command-line-interaction|command-line interface]], enabling developers to integrate and interact with models programmatically in [[concepts/python|Python]] or directly from the terminal, making it highly versatile for [[concepts/coding|software development]]. Models are downloaded directly to the Tiiny device via Wi-Fi (initial internet [[concepts/connection|connection]] required) and then run completely offline, ensuring [[concepts/privacy|privacy]]. The dashboard tracks token usage, which is valuable for developers to estimate costs if deploying solutions to [[concepts/cloud-based-services|cloud-based services]] later. The device handles various model types, including coding models (like Qwen3-Coder-30B, integrated into [[entities/vs-code|VS Code]]) and text-to-image models, although resources are managed by loading/unloading models as needed.

The underlying technology, PowerInfer, found on GitHub, is a CPU/GPU LLM [[concepts/inference-engine|inference engine]] that intelligently manages model activation, keeping frequently used parts "hot" and less common ones "asleep" to optimize performance and low power consumption. Although the Tiiny AI Pocket Lab is not intended to replace high-end GPU rigs, its ability to bring powerful, private, and local [[concepts/capabilities|AI capabilities]] to less capable laptops or mini PCs makes it a compelling [[concepts/solution|solution]] for developers and users seeking portable, [[concepts/mobile-ai|on-device AI]]. Currently available through a Kickstarter campaign, it presents a significant step towards democratizing access to large language models for personal and mobile use.

### Video Description & Links
#### Description
I paired a tiny AI box with the MacBook Neo—and it seriously changed what I thought was possible with [[concepts/local-ai|local AI]].
Tiiny box: https://tiiny.ai

👀 My favorite external drive (dependable): https://amzn.to/3Os9Wi3
👀 Thunderbolt 4 dock: https://amzn.to/3yVRicC

⚡ *Other gear I use:* https://www.amazon.com/shop/alexziskind

🎥 Related Videos 🎥
🧬🐍 [[entities/mac-studio|Mac Studio]] CLUSTER vs M3 Ultra 🤯 - https://youtu.be/d8yS-2OyJhw
🧳🧰 [[concepts/small-form-factor-pc|Mini PC]] portable setup - https://youtu.be/4RYmsrarOSw
🍎💻 Dev setup on Mac - https://youtu.be/KiKUN4i1SeU
💸🧠 Cheap mini runs a 70B LLM 🤯 - https://youtu.be/xyKEQjUzfAk
🧪🔥 RAM torture test on Mac - https://youtu.be/l3zIwPgan7M
🍏⚡ FREE Local LLMs on Apple [[concepts/silicon|Silicon]] | FAST! - https://youtu.be/bp2eev21Qfo
🧠📉 REALITY vs Apple’s Memory Claims | vs RTX4090m - https://youtu.be/fdvzQAWXU7A
⚡💥 Thunderbolt 5 BREAKS Apple’s Upcharge - https://youtu.be/nHqrvxcRc7o
🧠🚀 INSANE [[concepts/machine-learning|Machine Learning]] on Neural Engine - https://youtu.be/Y2FOUg_jo7k
🧱🖥️ Mac Mini Cluster - https://youtu.be/GBR6pHZ68Ho

* 🛠️ [[concepts/developer-productivity|Developer productivity]] Playlist - https://www.youtube.com/playlist?list=PLPwbI_iIX3aQCRdFGM7j4TY_7STfv2aXX

— — — — — — — — —

❤️ SUBSCRIBE TO MY [[entities/youtube|YOUTUBE]] CHANNEL 📺

Click here to subscribe: https://www.youtube.com/@AZisk?sub_confirmation=1

Join this channel to get access to perks:
https://www.youtube.com/channel/UCajiMK_CY9icRhLepS8_3ug/join

— — — — — — — — —

📱LET'S CONNECT ON SOCIAL MEDIA

ALEX ON TWITTER: https://twitter.com/digitalix

— — — — — — — — —


#macstudio #tiiny #llm

#### Tags
`software developer`, `programmer`, `software development`, `programming`, `developer`, `developer tests`, `m3 chip`, `machine learning`, `llm`, `m3max`, `m3 machine learning`, `m3 ai`, `webui`, `openui`, `open webui`, `local ai`, `local chatgpt`, `chatgpt`, `ipx`, `gmktec`, `nuc`, `beelink`, `mini pc`, `m4 pro`, `mac mini`, `apple`, `apple mini`, `mini`, `m4 mini`, `m3 ultra`, `mac studio`, `gtr9`, `gtr9 pro`, `strix halo`, `ryzen`, `Al Max+ 395`, `ollama`, `comfy ui`, `tiiny`, `tiiny ai`, `tiiny pocket`, `tiiny pocket lab`, `pocket lab`, `macbook`, `macbook neo`

#### URLs
- https://tiiny.ai
- https://amzn.to/3Os9Wi3
- https://amzn.to/3yVRicC
- https://www.amazon.com/shop/alexziskind
- https://youtu.be/d8yS-2OyJhw
- https://youtu.be/4RYmsrarOSw
- https://youtu.be/KiKUN4i1SeU
- https://youtu.be/xyKEQjUzfAk
- https://youtu.be/l3zIwPgan7M
- https://youtu.be/bp2eev21Qfo
- https://youtu.be/fdvzQAWXU7A
- https://youtu.be/nHqrvxcRc7o
- https://youtu.be/Y2FOUg_jo7k
- https://youtu.be/GBR6pHZ68Ho
- https://www.youtube.com/playlist?list=PLPwbI_iIX3aQCRdFGM7j4TY_7STfv2aXX
- https://www.youtube.com/@AZisk?sub_confirmation=1
- https://www.youtube.com/channel/UCajiMK_CY9icRhLepS8_3ug/join
- https://twitter.com/digitalix

#### YouTube Playlist URLs
- https://www.youtube.com/playlist?list=PLPwbI_iIX3aQCRdFGM7j4TY_7STfv2aXX

## Related Concepts
- [[concepts/tiiny-ai-pocket-lab|Tiiny AI Pocket Lab]] — [Wikipedia](https://en.wikipedia.org/wiki/Tiiny_AI_Pocket_Lab)
- [[concepts/large-language-models|Large Language Models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLMs%29)
- [[concepts/local-and-private-computing|Local and Private Computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_and_Private_Computing)
- [[concepts/nvidia-h100|GPU Hardware]] — [Wikipedia](https://en.wikipedia.org/wiki/GPU_Hardware)
- [[concepts/local-llm|Local LLM Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_LLM_Inference)
- Neural Processing Unit (NPU) — [Wikipedia](https://en.wikipedia.org/wiki/Neural_Processing_Unit_%28NPU%29)
- LPDDR5X Memory — [Wikipedia](https://en.wikipedia.org/wiki/LPDDR5X_Memory)
- PowerInfer Engine — [Wikipedia](https://en.wikipedia.org/wiki/PowerInfer_Engine)
- [[concepts/retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval-Augmented_Generation_%28RAG%29)
- Stable Diffusion — [Wikipedia](https://en.wikipedia.org/wiki/Stable_Diffusion)
- Offload Computing — [Wikipedia](https://en.wikipedia.org/wiki/Offload_Computing)
- ARM v9.2 [[concepts/architecture|Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/ARM_v9.2_Architecture)
- [[concepts/privacy-preserving-ai|Privacy-Preserving AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Privacy-Preserving_AI)
- [[concepts/llm-quantization|Model Quantization]] (INT8) — [Wikipedia](https://en.wikipedia.org/wiki/Model_Quantization_%28INT8%29)
- [[concepts/edge-ai|Edge AI]] Hardware — [Wikipedia](https://en.wikipedia.org/wiki/Edge_AI_Hardware)
- SDK Development — [Wikipedia](https://en.wikipedia.org/wiki/SDK_Development)
- Token Decoding Speed — [Wikipedia](https://en.wikipedia.org/wiki/Token_Decoding_Speed)
- Offline Processing — [Wikipedia](https://en.wikipedia.org/wiki/Offline_Processing)
- [[concepts/ai-agent|AI Agent]] Store — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agent_Store)
- USB-C Interface — [Wikipedia](https://en.wikipedia.org/wiki/USB-C_Interface)

## Related Entities
- [[entities/alex-ziskind|Alex Ziskind]] — [Wikipedia](https://en.wikipedia.org/wiki/Alex_Ziskind)
- Tiiny AI Pocket Lab — [Wikipedia](https://en.wikipedia.org/wiki/Tiiny_AI_Pocket_Lab)
- [[entities/gpt-oss-120b|GPT-OSS-120B]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-OSS-120B)
- TiinyOS — [Wikipedia](https://en.wikipedia.org/wiki/TiinyOS)
- Qwen3-Coder-30B — [Wikipedia](https://en.wikipedia.org/wiki/Qwen3-Coder-30B)
- MacBook Neo — [Wikipedia](https://en.wikipedia.org/wiki/MacBook_Neo)
- RAGFlow — [Wikipedia](https://en.wikipedia.org/wiki/RAGFlow)
- ChatMemo — [Wikipedia](https://en.wikipedia.org/wiki/ChatMemo)
- Presenton — [Wikipedia](https://en.wikipedia.org/wiki/Presenton)
- SD Web UI — [Wikipedia](https://en.wikipedia.org/wiki/SD_Web_UI)
- TiinyBot — [Wikipedia](https://en.wikipedia.org/wiki/TiinyBot)
- Kickstarter — [Wikipedia](https://en.wikipedia.org/wiki/Kickstarter)