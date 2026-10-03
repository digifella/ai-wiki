---
wiki-ingested: true
title: "OpenAI Jalapeño Custom AI Chip: First Benchmarks and Design"
date: 2026-08-26
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: openai-chatgpt
type: "source-summary"
aliases:
  - "lab-notes/2026-08-26-OpenAI-Jalapeño-Custom-AI-Chip-First-Benchmarks-and-Desi"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## OpenAI Jalapeño Custom AI Chip: First Benchmarks and Design
**Clip title:** First Benchmark Results on an OpenAI GPU
**Author / channel:** TechTechPotato
**URL:** https://www.youtube.com/watch?v=Ic0kYWjffjI

### Summary
This video delves into the architecture, performance, and strategic implications of [[entities/openai|OpenAI]]'s first custom [[concepts/artificial-intelligence|Artificial Intelligence]] chip, codenamed "[[concepts/jalapeño|Jalapeño]]." The presenter reviews the technical slides from a presentation by [[entities/richard-ho|Richard Ho]], VP of Hardware at OpenAI, announcing their [[concepts/purpose-built-processor|purpose-built processor]] for machine learning and AI [[concepts/model-inference|inference]] workloads. The core message revolves around OpenAI's move to develop specialized hardware, in partnership with Broadcom, to optimize their specific AI models and inference operations.

A key highlight of the development process is the remarkably short nine-month timeline from initial RTL (Register-Transfer Level) to tapeout, although the broader architectural concept began earlier in October 2024. OpenAI emphasizes a deep co-design approach between hardware and software, leveraging their extensive AI expertise to accelerate chip optimization. The primary performance metrics for Jalapeño focus on user experience through end-to-end latency ("time to last token") and energy efficiency ("energy per token" or "tokens per joule"), rather than traditional metrics like raw throughput. The chip incorporates advanced techniques like [[concepts/speculative-decoding|speculative decoding]] (multi-token prediction) to enhance efficiency, with benchmarks often comparing both single-token and multi-token prediction scenarios.

The video presents several benchmarks comparing Jalapeño against [[entities/nvidia|NVIDIA]]'s latest GPUs, specifically the GB200 and GB300, across various [[concepts/open-source-ai|open-source AI models]] like GPT-OSS 120B, [[entities/deepseek-ai|DeepSeek]] R1, and Kimi K2.5. Jalapeño consistently demonstrates superior performance and lower latency. For instance, it shows up to 100 times more "mixed tokens per kilowatt" on GPT-OSS 120B for specific workloads and significantly lower end-to-end latency (e.g., 4.2x lower for GPT-OSS). These performance advantages are particularly evident at higher user loads and for longer response lengths, often pushing performance beyond what competing GPUs can achieve.

Architecturally, Jalapeño is described as a spatial design, with each chip featuring a central compute die, six HBMs (High Bandwidth [[concepts/memory|Memory]]), and an IO chiplet. The system scales from a local domain of 128 Jalapeño chips to a global domain of 2048 chips, interconnected by Broadcom Tomahawk 6 switches in a two-level Clos topology, emphasizing network-driven performance. Each core integrates tensor, SIMD, and scalar engines with a fast local L1 cache, coordinated by "gluon programs" and specialized collectives, with a strategy to compute locally and use global [[concepts/memory|memory]] only when essential. OpenAI's approach of "continuous convergence" involves iteratively refining vision, workload, simulation, and physical design using AI tools to make the chip faster and more efficient, achieving improvements like a 10% reduction in matrix unit area and an 8% reduction in SIMD unit area over optimized human baselines.

In conclusion, OpenAI's "Jalapeño" represents their commitment to building bespoke hardware to meet the demanding requirements of their [[concepts/ai-inference|AI inference]] workloads. The chip demonstrates impressive gains in interactivity, end-to-end latency, and performance-per-watt compared to leading GPUs. This Gen 1 chip is part of a multi-generational roadmap, with Gen 2 already in development and Gen 3 planned. The strategic motivation behind this internal hardware development is to gain optionality and leverage in the market, allowing OpenAI to offer diverse models at tailored performance levels and pricing points, catering to the specific, often long-lived, needs of business API clients.

### Video Description & Links
#### Description
OpenAI presents Jalapeño at Hot Chips today, its first in-house inference chip built with Broadcom, and I go through all 36 slides before the talk. Richard Ho's deck puts the headline claims on the board: up to 4x higher interactivity, close to 4x lower end-to-end latency, and performance per watt up to 100x higher against GB200 and GB300, all measured on the InferenceX benchmarks from SemiAnalysis rather than OpenAI's own models. The hardware section gives 13.4 petaflops of MXFP4 per chip, six HBM4 stacks at 216 GB and 15.4 TB/s, 700 watts, a 128 chip scale-up domain and 2048 chip scale-out on Broadcom Tomahawk 6. I also pick apart the nine month timeline, the benchmark choices, and everything the deck leaves out.

[00:00] Intro
[03:04] Nine month timeline
[05:22] InferenceX benchmark choice
[07:00] Speculative decoding explained
[10:01] Benchmark graphs
[13:49] Multi-token prediction comparison
[16:26] Architecture and HBM bandwidth
[18:51] Scale-up and scale-out
[20:58] AI aided design
[23:43] Full specifications
[26:05] Open questions
[27:48] Optionality and pricing

-----------------------

If you're in the market for something from Amazon, please use the following links. TTP may receive a commission if you purchase anything through these links.

Ending music: https://www.youtube.com/watch?v=2N0tmgau5E4
-----------------------
Welcome to the TechTechPotato (c) Dr. Ian Cutress
Ramblings about things related to Technology from an analyst for More Than Moore

#jalapeno #openai #chatgpt
------------

#### Tags
`openai`, `jalapeño`, `ai chips`, `broadcom`, `inference`, `hot chips`, `ai hardware`, `richard ho`, `openai chip`, `hbm4`, `mxfp4`, `asic`, `nvidia`, `gb300`, `ai inference`, `celestica`, `inferencex`, `semianalysis`, `custom silicon`, `openai jalapeño`, `gpt oss`, `deepseek r1`, `exaflops`, `chip design`, `low latency`, `perf per watt`, `data center`, `tokens per second`, `semiconductors`, `kv cache`, `tomahawk 6`, `roofline`, `codex`, `cerebras`, `ai compute`, `hot chips 2026`, `chip news`, `ai racks`, `tsmc n3`, `ian cutress`, `techtechpotato`, `spec decode`, `gb200`

#### URLs
- https://www.youtube.com/watch?v=2N0tmgau5E4

## Related Concepts
- [[concepts/custom-ai-chip|custom AI chip]]
- [[concepts/jalapeño|Jalapeño]] — [Wikipedia](https://en.wikipedia.org/wiki/Jalape%C3%B1o)
- [[concepts/training-data|machine learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Machine_learning)
- [[concepts/ai-inference|AI inference]]
- [[concepts/hardware-architecture|hardware architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Hardware_architecture)
- [[concepts/purpose-built-processor|purpose-built processor]]
- spatial design — [Wikipedia](https://en.wikipedia.org/wiki/Spatial_design)
- high bandwidth memory — [Wikipedia](https://en.wikipedia.org/wiki/High_Bandwidth_Memory)
- [[concepts/speculative-decoding|speculative decoding]] — [Wikipedia](https://en.wikipedia.org/wiki/Speculative_decoding)
- Clos topology — [Wikipedia](https://en.wikipedia.org/wiki/Clos_network)
- co-design — [Wikipedia](https://en.wikipedia.org/wiki/Participatory_design)
- tapeout — [Wikipedia](https://en.wikipedia.org/wiki/Tape-out)

## Related Entities
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/richard-ho|Richard Ho]] — [Wikipedia](https://en.wikipedia.org/wiki/Richard_Ho)
- Broadcom — [Wikipedia](https://en.wikipedia.org/wiki/Broadcom)
- [[entities/nvidia|NVIDIA]] — [Wikipedia](https://en.wikipedia.org/wiki/Nvidia)
- DeepSeek R1 — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek)
- Kimi K2.5 — [Wikipedia](https://en.wikipedia.org/wiki/Kimi_%28AI%29)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]