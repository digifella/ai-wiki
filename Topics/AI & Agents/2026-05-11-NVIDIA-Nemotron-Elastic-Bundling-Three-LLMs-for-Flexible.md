---
wiki-ingested: true
title: "NVIDIA Nemotron Elastic: Bundling Three LLMs for Flexible Deployment"
date: 2026-05-11
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
aliases:
  - "lab-notes/2026-05-11-NVIDIA-Nemotron-Elastic-Bundling-Three-LLMs-for-Flexible"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## NVIDIA Nemotron Elastic: Bundling Three LLMs for Flexible Deployment
**Clip title:** NVIDIA [[entities/ai-assistant|Nemotron]] Elastic: 3-in-1 Elastic LLM Like Russian Dolls in One File
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=-3SXz1_nbvc

### Summary
This video introduces [[entities/nvidia|NVIDIA]]'s [[concepts/nemotron-3-nano-model|Nemotron-3 Nano]] V3 Elastic, a groundbreaking AI [[concepts/reasoning-model|reasoning model]] that bundles three different sized models—30 billion, 23 billion, and 12 billion [[concepts/parameters|parameters]]—into a single checkpoint file. The presenter uses the analogy of Russian nesting dolls, explaining that users can download one file and then select which [[concepts/code-size|model size]] to run based on their [[concepts/hardware|hardware]] capabilities or desired [[concepts/speed|inference speed]]. This innovative [[concepts/architecture|architecture]] is a key part of NVIDIA's [[entities/ai-assistant|Nemotron]] family, which the presenter has been covering extensively. The video provides a hands-on guide to installing and serving this model on an [[entities/ubuntu|Ubuntu]] server, showcasing its features and performance.

The [[concepts/nemotron-3-nano-model|Nemotron-3 Nano]] V3 Elastic employs a sophisticated hybrid architecture, combining Mama layers for efficient sequence processing, [[concepts/attention-mechanisms|Attention]] layers for [[concepts/deep-reasoning|deep reasoning]], and a [[concepts/mixture-of-experts|Mixture of Experts]] (MoE) layer. The MoE layer is particularly noteworthy as it only activates a small slice of the network per token, making the model fast and cost-effective to run, even with its substantial total [[concepts/parameter-count|parameter count]]. For instance, the 30-billion-parameter model only activates about 3.6 billion parameters at any given moment. During training, a "teacher" model guides a "student" model, where a learnable router intelligently masks out less important [[concepts/weights|weights]] based on a set [[concepts/compute|compute]] budget (e.g., 100%, 70%, or 50%). This unique approach results in three perfectly nested models that can be "zero-shot sliced" directly from the checkpoint, eliminating the need for [[concepts/fine-tuning|fine-tuning]] or additional training for different sizes. [[concepts/performance-benchmarks|Performance benchmarks]] show that even the 12-billion-parameter Elastic model (with only 2 billion [[concepts/active-parameters|active parameters]]) is competitive with, or outperforms, other 30-billion-[[concepts/parameter-models|parameter models]] while requiring significantly less compute.

To demonstrate the model's advanced capabilities, the presenter challenges it to build a complex, real-time Air Traffic Control (ATC) simulator. The prompt requests a [[concepts/python|Python]] FastAPI application with WebSocket support, featuring two browser interfaces: an ATC Tower Dashboard (displaying live radar, flight strips, command input, communication logs, and emergency alerts) and a Pilot Cockpit View (showing primary flight display, instruments, and navigation). The Nemotron-3 Nano V3 Elastic successfully generates over 1200 lines of fully functional Python [[concepts/code|code]] for this intricate application. The live demo showcases both interfaces interacting seamlessly, with flight movements, [[concepts/commands|commands]] (like descending to a specific flight level), and emergency alerts propagating in real-time across the radar and cockpit displays. This impressive feat highlights the model's ability to not only generate code but also to "think" and architect complex [[concepts/software|software]] systems from high-level [[concepts/natural-language-descriptions|natural language descriptions]].

### Video Description & Links
#### Description
This video locally installs and tests NVIDIA-Nemotron-Labs-3-Elastic-30B-A3B-BF16, a 3-in-1 elastic LLM developed by NVIDIA. 

#elasticllm #nemotron 

▶ https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Elastic-30B-A3B-BF16

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Elastic-30B-A3B-BF16

## Related Concepts
- [[concepts/nemotron-elastic|Nemotron Elastic]]
- [[concepts/llms|LLMs]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/parameter-scaling|parameter scaling]]
- [[concepts/elastic-deployment|elastic deployment]]

## Related Entities
- [[entities/nvidia|NVIDIA]] — [Wikipedia](https://en.wikipedia.org/wiki/Nvidia)
- [[entities/fahd-mirza|Fahd Mirza]]