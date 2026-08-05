---
wiki-ingested: true
title: "Bonsai 27B: Qwen 27B LLM for Consumer Hardware with 10x Less Memory"
date: 2026-07-15
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-07-15 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Bonsai 27B: Qwen 27B LLM for Consumer Hardware with 10x Less Memory
**Clip title:** [[concepts/bonsai-image|Bonsai]] 27B Runs [[concepts/qwen3-model|Qwen 3.6]] 27B at 10x less [[concepts/memory|memory]].
**Author / channel:** [[entities/timothy-karanbact|Tim Carambat]]
**URL:** https://www.youtube.com/watch?v=V6LmF7TuBmY

### Summary
The video discusses [[concepts/bonsai-8b-prismml|PrismML]]'s new Bonsai 27B model, a highly compressed version of the Quine 3 27B [[concepts/statistical-language-modeling|language model]]. The main topic revolves around making powerful [[concepts/demystifying-llms|Large Language Models]] (LLMs) accessible on [[concepts/consumer-grade-hardware|consumer-grade hardware]], including smartphones and laptops with limited memory. This [[concepts/innovation|innovation]] provides hope amidst challenges like hardware [[concepts/limited-resources|scarcity]] and attacks on open-source projects, by enabling significant AI capabilities without requiring immense [[concepts/computational-resources|computational resources]].

PrismML achieves this by applying a proprietary technique to [[concepts/reasoning-models|open-source models]], focusing on "intelligence [[concepts/density|density]]"—retaining [[entities/high-performance|high performance]] and intelligence while drastically reducing file size and memory requirements. The Bonsai 27B model is offered in two main formats: Ternary and Binary (1-bit). The Ternary variant, designed for desktops, remarkably retains 95% of the [[concepts/full-precision|full-precision]] model's [[concepts/benchmark-performance|benchmark performance]] while requiring far less memory (e.g., 10GB RAM for 32,000 [[concepts/tokens|tokens]] of context). The even smaller Binary format, ideal for [[concepts/portable-devices|mobile devices]], still offers 76% of the full model's intelligence. This approach stands in [[concepts/contrast|contrast]] to traditional [[concepts/parameter-reduction|quantization]] methods, which often lead to a dramatic loss in intelligence despite reducing [[concepts/code-size|model size]].

The practical implications of Bonsai 27B are significant. Running the full Quine 3 27B model typically demands over 50GB of RAM, making it unfeasible for most personal devices. PrismML's method allows users to run a highly intelligent 27B model on a fraction of the [[concepts/feynmans-three-step-scientific-method|compute]], providing a powerful, practical option for a large majority of users who don't have dedicated, high-end [[concepts/inference|inference]] machines. The video demonstrates how to set up and run the model locally using `llama-server` (with downloads from GitHub and [[concepts/open-source-machine-learning|Hugging Face]] for the Ternary GGUF files), and even highlights a web GPU demo for quick browser-based testing. Local tests show decent performance (e.g., 37 tokens/second for [[concepts/simple-prompting|basic prompts]], 14 tokens/second for [[concepts/scraping|web scraping]] and [[concepts/summarization|summarization]] tasks), and the model successfully executed a complex, multi-step agentic task, including research, tool calls, and generating a stylized HTML report—all on a [[entities/macbook|MacBook]] Pro.

In conclusion, Bonsai 27B represents a foundational step for [[concepts/local-ai|local AI]], democratizing access to intelligent models. While there are inherent trade-offs in intelligence compared to the original, uncompressed model, the ability to run such a powerful LLM on constrained hardware is a major breakthrough. The video touches upon Jevons Paradox, questioning whether increased efficiency might simply lead to greater demand for AI, potentially still requiring vast data center resources. However, the immediate benefit for consumers and developers is undeniable: more intelligent models are now within reach on less expensive, everyday hardware.

### Video Description & Links
#### Description
The new Bonsai 27B Model from PrismML is Qwen3.6 27B - a beloved workhorse for many - into something you can run on local computer.

10x less memory and a much more modest file size while still [[concepts/benchmark-testing|benchmarking]] 95% of the original FP16 model. Of course, no model is perfect, but if you have been wanting to run Qwen3.6 27B and dont have the computer or headroom - you finally can.

The Ternary format is much smarter, but takes a bit more compute. The Binary model is enough to fit into a phone form factor. Imagine 27B, even remotely, in your pocket. That is now a reality.

**Links** :
Blog: https://prismml.com/news/bonsai-27b
Whitepaper: https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf
HuggingFace Collection: https://huggingface.co/collections/prism-ml/bonsai-27b
[[concepts/webgpu|WebGPU]] Demo: https://huggingface.co/spaces/webml-community/bonsai-webgpu-kernels

**As of now you MUST use these forks to run these models**

PrismML [[concepts/inference-engine|LLama.cpp]] repo: https://github.com/PrismML-Eng/llama.cpp
MLX Repo: https://github.com/PrismML-Eng/mlx

[[entities/anything-llm|AnythingLLM]]: https://github.com/Mintplex-Labs/anything-llm
OpenComputer: https://github.com/Mintplex-Labs/anything-llm/blob/master/open-computer/README.md

**Chapters** :
0:00 The promise of Bonsai 27B
0:57 Lets look at the benchmarks and models
2:52 Why would you choose Bonsai 27B?
5:22 How to run it locally...
6:00 Download the right binary
7:27 Download the model from HuggingFace
7:50 (Shortcut) - Use webGPU!
8:17 Picking the right files from HuggingFace
9:00 Start the llama-server and use the UI
10:52 How does it work with simple agent tasks?
12:12 What about using a whole computer and a longer task?
14:53 My thoughts on Bonsai 27B
15:26 Is this the end of the [[concepts/ai-bubble|AI bubble]]?

#### URLs
- https://prismml.com/news/bonsai-27b
- https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf
- https://huggingface.co/collections/prism-ml/bonsai-27b
- https://huggingface.co/spaces/webml-community/bonsai-webgpu-kernels
- https://github.com/PrismML-Eng/llama.cpp
- https://github.com/PrismML-Eng/mlx
- https://github.com/Mintplex-Labs/anything-llm
- https://github.com/Mintplex-Labs/anything-llm/blob/master/open-computer/README.md

## Related Concepts
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/model-efficiency|Model Compression]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Compression)
- [[concepts/personal-computer-training|Consumer Hardware]] — [Wikipedia](https://en.wikipedia.org/wiki/Consumer_Hardware)
- [[concepts/vram-optimization|Memory Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory_Optimization)
- [[concepts/open-source|Open-Source AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-Source_AI)
- [[concepts/weights|Inference Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Inference_Efficiency)
- [[concepts/local-deployment|Local Deployment]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Deployment)
- [[concepts/smartphone-ai|Smartphone AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Smartphone_AI)
- [[concepts/laptop-computing|Laptop Computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Laptop_Computing)
- [[concepts/intelligence-density|Intelligence Density]] — [Wikipedia](https://en.wikipedia.org/wiki/Intelligence_Density)
- Ternary Quantization — [Wikipedia](https://en.wikipedia.org/wiki/Ternary_Quantization)
- Binary Quantization — [Wikipedia](https://en.wikipedia.org/wiki/Binary_Quantization)
- [[concepts/gguf-format|GGUF Format]] — [Wikipedia](https://en.wikipedia.org/wiki/GGUF_Format)
- [[concepts/agentic-tasks|Agentic Tasks]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Tasks)
- Jevons Paradox — [Wikipedia](https://en.wikipedia.org/wiki/Jevons_Paradox)
- [[concepts/edge-ai|Edge AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Edge_AI)

## Related Entities
- [[entities/bonsai-27b|Bonsai 27B]] — [Wikipedia](https://en.wikipedia.org/wiki/Bonsai_27B)
- [[entities/qwen-36-27b|Qwen 3.6 27B]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.6_27B)
- [[entities/prismml|PrismML]] — [Wikipedia](https://en.wikipedia.org/wiki/PrismML)
- [[entities/tim-carambat|Tim Carambat]] — [Wikipedia](https://en.wikipedia.org/wiki/Tim_Carambat)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- llama-server — [Wikipedia](https://en.wikipedia.org/wiki/llama-server)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/macbook-pro|MacBook Pro]] — [Wikipedia](https://en.wikipedia.org/wiki/MacBook_Pro)
- Quine 3 27B — [Wikipedia](https://en.wikipedia.org/wiki/Quine_3_27B)