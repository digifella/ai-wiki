---
wiki-ingested: true
title: "Running Qwen 30B locally"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Running [[entities/qwen|Qwen]] 30B locally

---
---
<https://www.youtube.com/watch?v=ZMPuS-3-qQ8>
This video provides an in-depth look at running the Qwen3-30B-A3B-Instruct-2507 [[concepts/large-language-model|large language model]] locally, specifically focusing on a quantized version optimized by [[entities/intel|Intel]] using their AutoRound algorithm.
Initially, the speaker [[concepts/notes|notes]] that the original [[entities/qwen3|Qwen3]] 30 billion parameter model typically requires at least 80GB of [[concepts/vram|VRAM]] to run locally. \[0:06, 0:13\] However, Intel has released a quantized version of this model, named Intel/Qwen3-30B-A3B-Instruct-2507-gguf-q2ks-AutoRound, which is optimized for running on CPUs or with minimal GPU VRAM. \[0:23, 0:38\]
The quantization is achieved using Intel's AutoRound algorithm. \[0:44\] AutoRound is an advanced quantization library designed for [[concepts/large-language-models|Large Language Models]] (LLMs) and Vision-Language Models (VLMs). \[1:41\] It employs a mixed-precision quantization strategy to balance performance, [[concepts/accuracy|accuracy]], and efficiency. \[1:15\] Specifically, critical components like the embedding layer and language model (LM) head layer are kept at 8 bits to preserve accuracy, while non-expert [[concepts/transformer-layers|transformer layers]] are quantized to 4 bits. \[1:28, 1:35\] The core [[concepts/model-weights|model weights]] are further compressed to 2 bits using the Q2\_K\_S method, which significantly reduces [[concepts/memory-management|memory usage]] while maintaining strong performance. \[1:54, 2:00, 2:05\] This approach allows the model to run efficiently on consumer-grade [[concepts/hardware|hardware]] without a significant drop in quality. \[2:07, 2:10\]
To run this quantized model locally, the video recommends using the [[entities/llama|llama]].cpp library. \[2:17\] The speaker demonstrates downloading the appropriate llama.cpp zip file for their Ubuntu system and navigating to the `bin` directory. \[3:04, 3:12\] The model itself, after quantization, has a size of just over 10GB, a substantial reduction from the original's approximately 64GB (16 shards of 4GB each). \[4:14, 4:26, 4:41\]
The demonstration shows the model being loaded and run in interactive mode using a `llama-cli` command. \[3:41, 5:31\] During the loading process, the [[concepts/cpu|CPU]] backend is utilized, and the model's data is downloaded and loaded. \[4:03\] When prompted with a non-serious question about annoying in-laws, the model responded with a very "safe" [[concepts/solution|answer]], emphasizing building respectful relationships. \[6:10, 6:15\] This indicates that the Qwen3 model, even in its quantized form, maintains strong safety [[concepts/ai-safety|guardrails]]. \[6:29\] The speaker then tests with a [[concepts/greek-mythology|Greek mythology]] joke, and the model provides a humorous and coherent response, demonstrating good performance despite quantization. \[8:52, 9:00\]
The system used for the demonstration features an Intel Xeon(R) Platinum 8352Y CPU with 12 cores and 128GB of [[concepts/ram|RAM]]. \[9:42, 9:51\] The video also confirms minimal GPU VRAM usage during the [[concepts/inference|inference]] process, highlighting the efficiency gains from Intel's AutoRound quantization. \[8:30\]