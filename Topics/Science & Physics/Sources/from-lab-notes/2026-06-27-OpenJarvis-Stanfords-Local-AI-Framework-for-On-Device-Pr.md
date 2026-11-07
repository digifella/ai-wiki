---
wiki-ingested: true
title: "OpenJarvis: Stanford's Local AI Framework for On-Device Privacy and Efficiency"
date: 2026-06-27
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
type: "source-summary"
domain: science-physics-research
group: engineering-systems-robotics-autonomous-vehicles
aliases:
  - "lab-notes/2026-06-27-OpenJarvis-Stanfords-Local-AI-Framework-for-On-Device-Pr"
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

## OpenJarvis: Stanford's Local AI Framework for On-Device Privacy and Efficiency
**Clip title:** [[concepts/data-synthesis-automation|OpenJarvis]] + Ollama: [[concepts/ai-desktop-agent|Local AI Agent]] That Tracks Every Watt
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=0fdbQvwOrgQ

### Summary
The video introduces OpenJarvis, a novel local-first personal AI framework developed by [[entities/stanford|Stanford]]'s Hazy Research and [[concepts/computational-scaling|Scaling]] Intelligence Labs. Its core [[concepts/philosophy|philosophy]] centers on empowering users with personal AI that runs directly on their devices, ensuring privacy and control by default, rather than relying on [[concepts/cloud-based-services|cloud infrastructure]]. The presenter highlights OpenJarvis's open-source nature and its [[concepts/hidden-engineering|seamless integration]] with Olama and other [[concepts/local-models|local models]], making existing models readily usable.

OpenJarvis is structured around five key primitives: User Interfaces (CLI, browser, [[concepts/communication|messaging]] channels), Agents (composable [[concepts/reasoning|reasoning]] over intelligence and tools), Intelligence (on-device [[concepts/demystifying-llms|Large Language Models]] like Qwen, [[concepts/gpt-4|GPT-OSS]], Gemma), Tools & Memory (tool protocols, semantic storage), and [[concepts/learning|Learning]] (self-improvement from personal traces). The "Engine" acts as the [[concepts/ai-inference|inference]] layer, supporting various backends such as Olama, vLLM, SGLang, and [[concepts/inference-engine|llama.cpp]]. This modular architecture is a result of Stanford's "Intelligence per Watt" research, focusing on [[concepts/compact-ai-model|efficient local AI]].

The demonstration showcases the straightforward [[concepts/installation|installation]] process via a single curl command on an Ubuntu server with an [[concepts/nvidia-rtx-a6000|NVIDIA RTX A6000]] GPU. Once installed, users can interact with OpenJarvis through a [[concepts/chat-application|chat interface]], defaulting to models like Qwen. The platform also offers a `jarvis doctor` command for system status and compatibility checks. A significant feature is the concept of "presets," which are pre-configured bundles of agents, tools, and settings tailored for specific [[concepts/scenarios|use cases]], such as a "code-assistant," "morning digest," or "[[concepts/deep-research-function|deep research]]" agent. These presets streamline setup and enable [[concepts/ai-specialization|specialized AI]] functionalities with minimal configuration.

A notable aspect demonstrated is OpenJarvis's comprehensive telemetry, which tracks metrics like total calls, tokens processed, average latency, and, critically, [[concepts/energy-consumption|energy consumption]] (in joules and watts). The presenter emphasizes that running locally results in a total cost of $0.00, highlighting the economic benefit alongside privacy. The ability to track energy metrics is presented as a unique and powerful feature stemming from the "Intelligence per Watt" research, providing insights into the efficiency of local AI operations. In conclusion, OpenJarvis positions itself as a robust, [[concepts/open-source-framework|open-source framework]] for personal AI, offering [[concepts/local-control|local control]], modularity, [[concepts/specialized-sub-agents|specialized agents]], and detailed performance insights, with a strong focus on [[concepts/model-efficiency|resource efficiency]].

### Video Description & Links
#### Description
This video locally installs and tests OpenJarvis with Ollama which is an open-source framework for building [[concepts/local-agents|personal AI agents]] that run on your own hardware. 

#openjarvis 

▶ https://ollama.com/blog/openjarvis

All rights reserved © Fahd Mirza

#### URLs
- https://ollama.com/blog/openjarvis

## Related Concepts
- [[concepts/open-source|local-first AI]]
- [[concepts/on-device-privacy|on-device privacy]]
- [[concepts/personal-ai-framework|personal AI framework]]
- [[concepts/open-source|open-source software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_software)
- [[concepts/vision-language-model|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[concepts/energy-efficiency|energy efficiency]]
- [[concepts/stanford-hazy-research|Stanford Hazy Research]]
- [[concepts/open-source|Scaling Intelligence Labs]]
- [[concepts/ai-agent|AI agent]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)
- [[concepts/vision-language-model|OpenJarvis]]
- [[concepts/skill-document|modular architecture]]
- [[concepts/self-improvement|self-improvement]] — [Wikipedia](https://en.wikipedia.org/wiki/Personal_development)
- [[concepts/real-time-observation|telemetry]] — [Wikipedia](https://en.wikipedia.org/wiki/Telemetry)
- [[concepts/cost-optimization|cost optimization]]
- [[concepts/single-click-editing|presets]]

## Related Entities
- [[entities/ollama|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[entities/hazy-research|Hazy Research]]
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/stanford-university|Stanford University]] — [Wikipedia](https://en.wikipedia.org/wiki/Stanford_University)
- [[entities/qwen|Qwen]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen)
- [[entities/gpt-oss|GPT-OSS]] — [Wikipedia](https://en.wikipedia.org/wiki/Products_and_applications_of_OpenAI)
- [[entities/gemma|Gemma]]
- [[entities/vllm|vLLM]] — [Wikipedia](https://en.wikipedia.org/wiki/VLLM)
- [[entities/llamacpp|llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)