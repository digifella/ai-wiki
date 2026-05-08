---
wiki-ingested: true
title: "Small LLM models"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: model-efficiency-compression
---
## [[concepts/benchmark-testing|Benchmarking]] SLMs: Identifying 4GB General [[concepts/problem-solving|Problem-Solving]] Champions  
**Clip title:** [[concepts/small-language-models|Small Language Models]] (SLMs): The New 4GB Champion  
**Author / channel:** [[entities/next-tech-and-ai|Next Tech and AI]]  
**URL:** [https://www.youtube.com/watch?v=wQxawC3sv68](https://www.youtube.com/watch?v=wQxawC3sv68)  
  
### [[concepts/summary|Summary]]  
This video evaluates the performance of several small language models (SLMs) under a [[concepts/4gb-memory-footprint|4GB memory footprint]], specifically focusing on their [[concepts/general-purpose-problem-solving|general-purpose problem-solving]] [[concepts/capabilities|capabilities]]. The host, following up on a previous video where SLMs proved useful during a [[concepts/large-language-model|large language model]] (LLM) outage, aims to identify new champions in the SLM universe. The core challenge for these smaller models is to pack sufficient "[[concepts/world-knowledge|world knowledge]]" ([[concepts/parameters|parameters]]) and intelligence ([[concepts/reasoning|reasoning]]) into a [[concepts/minimal-size|minimal size]], as more parameters generally correlate with more knowledge.  
  
The testing [[concepts/methodology|methodology]] involved three real-world benchmark [[concepts/scenarios|scenarios]] designed to challenge the models: local knowledge (Japanese pharmacy recommendation for mosquito bites), complex planning (a Mount Fuji day-hike itinerary with realistic timing and safety warnings), and technical diagnosis (troubleshooting a heating system blockage). Each scenario was scored on a scale of 0 (failure) to 2 (perfect), with a maximum total score of 6 across all three tests. A crucial principle highlighted is that [[concepts/parameter-count|parameter count]] often outweighs quantization quality up to a certain point; a heavily compressed 8-billion-parameter model can retain more knowledge than a natively small 4-billion-parameter model at high precision. However, extreme compression below 4-bit quantization can lead to models producing nonsense, establishing 4GB as a practical "hard floor."  
  
Four candidate models were tested. **[[entities/mistral|Mistral]] 8B Reasoning**, at 14GB (Q8KL), scored an excellent 4/6, beating some online flagship models, but its reasoning capability led to slower speeds and a quickly filled [[concepts/context-window|context window]]. The 8GB (Q5KL) and 4GB (IQ3M) versions dropped to 2/6, failing at complex trip planning. **Llama 3.3 8B Instruct**, while not "flashy," proved to be a consistent "workhorse." Its 14GB (Q8O) version scored 2/6, and remarkably, both its 8GB (Q6K) and 4GB (IQ3M 3-bit) versions matched this score. Llama 3.3 demonstrated stability even below Q4 quantization, was faster than Mistral due to no reasoning overhead, and was reliable for general Q&A and [[concepts/instruction-following|instruction following]]. **LFM2 ([[concepts/mixture-of-experts|Mixture of Experts]])** leveraged its MoE [[concepts/architecture|architecture]] for fast [[concepts/inference|inference]], routing queries to specialized sub-networks. The 8GB variant uniquely outperformed its larger 14GB counterpart, scoring 3/6 points, making it the fastest model in the test and ideal for low-bandwidth [[concepts/hardware|hardware]]. However, it failed the Mount Fuji planning task, making it unsuitable for safety-critical or planning-heavy tasks. Finally, **[[entities/google-gemma|Google Gemma]] 3**, with its 4B parameter Q4KM version, was a standout surprise, achieving 3/6 points. This performance is considered outstanding for its small size, showing a strong balance of logic, safety awareness, and compact size. Its larger 27B variant even matched Mistral's 4-point score.  
  
In conclusion, the 4GB limit is a critical threshold for SLMs to maintain coherence. For logic-heavy tasks where speed isn't paramount, **Mistral 8B Reasoning** is recommended. For general use, **Google [[entities/gemma-3|Gemma 3]]** offers the best balance of logic, safety, and size, especially excelling in complex diagnostics, while **Llama 3.3** is a solid, reliable alternative. For applications prioritizing speed above all else, **LFM2** is the top choice, though users should be wary of its performance in intricate planning or safety-critical scenarios. The video encourages users to download free tools like [[entities/lm-studio|LM Studio]] and experiment with these models locally for offline data processing and greater control.
