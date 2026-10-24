---
wiki-ingested: true
title: "OpenJarvis: Stanford's Local-First Personal AI Framework with Ollama"
date: 2026-06-27
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
type: "source-summary"
domain: ai-agents
group: open-systems-local-models
aliases:
  - "lab-notes/2026-06-27-OpenJarvis-Stanfords-Local-First-Personal-AI-Framework-w"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## OpenJarvis: Stanford's Local-First Personal AI Framework with Ollama
**Clip title:** OpenJarvis + [[concepts/task-specific-modeling|Ollama]]: [[concepts/ai-desktop-agent|Local AI Agent]] That Tracks Every Watt
**[[entities/tasia-custode|Author]] / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=0fdbQvwOrgQ

### Summary
This video introduces OpenJarvis, a new local-first, open-source personal AI framework developed by [[entities/stanford|Stanford University]]'s Hazy Research and [[concepts/computational-scaling|Scaling]] Intelligence Labs. The core [[concepts/philosophy|philosophy]] behind OpenJarvis is to enable users to run powerful [[concepts/ai-models|AI models]] directly on their personal devices, prioritizing privacy and control over reliance on [[concepts/cloud-based-services|cloud services]]. The presenter highlights its [[concepts/hidden-engineering|seamless integration]] with [[concepts/local-model|local model]] serving frameworks like Ollama, allowing users to leverage models they have already pulled.

The architecture of OpenJarvis is structured around five key primitives: User Interfaces (supporting CLI, browser, and over 26 [[concepts/communication|messaging]] channels), Agents (for reasoning and [[concepts/multi-step-tasks|multi-step tasks]]), Intelligence (handling on-device [[concepts/statistical-language-modeling|Language Model]] selection and cataloging from models like Qwen, [[concepts/gpt-4|GPT-OSS]], and Gemma), [[concepts/engine|Engine]] (the [[concepts/ai-inference|inference]] layer with backends such as Ollama, vLLM, and [[concepts/inference-engine|Llama.cpp]], compatible with various hardware including Apple [[concepts/silicon|Silicon]], [[concepts/unsloth-optimization|NVIDIA]], AMD, and NPUs), and [[concepts/learning|Learning]] (which records interaction traces for self-improvement). The video demonstrates setting up OpenJarvis on an [[concepts/ubuntu|Ubuntu]] server equipped with an [[concepts/nvidia-rtx-a6000|NVIDIA RTX A6000]] GPU and a large local model.

The presenter showcases OpenJarvis's functionality through practical examples, starting with a simple one-liner [[concepts/installation|installation]]. Users can initiate a chat [[concepts/session|session]], utilize a `jarvis doctor` command to check the system's [[concepts/health|health]] and configuration, and leverage "presets." These presets are pre-configured agent and tool bundles designed for specific [[concepts/scenarios|use cases]], such as a "code-assistant" that can generate [[concepts/python|Python]] scripts for tasks like monitoring CPU usage, complete with explanations and [[concepts/instructions|instructions]].

A significant takeaway from OpenJarvis is its emphasis on [[concepts/opacity|transparency]] and resource management. The video demonstrates its telemetry feature, which tracks metrics like total calls, [[concepts/tokens|tokens]] processed, latency, and explicitly highlights the $0 cost for locally run models. Furthermore, OpenJarvis includes a [[concepts/benchmark-testing|benchmarking]] tool that evaluates models based on latency, throughput, and crucially, *[[concepts/energy-consumption|energy consumption]]*. This focus on "Intelligence per Watt" research provides detailed insights into energy joules per token and average power draw, making OpenJarvis a unique and powerful tool for developers seeking efficient, private, and locally controlled AI solutions.

### Video Description & Links
#### Description
This video locally installs and tests OpenJarvis with Ollama which is an [[concepts/open-source-framework|open-source framework]] for building [[concepts/local-agents|personal AI agents]] that run on your own hardware. 

#openjarvis 

▶ https://ollama.com/blog/openjarvis

All rights reserved © Fahd Mirza

#### URLs
- https://ollama.com/blog/openjarvis

## Related Concepts
- [[concepts/on-device-privacy|local-first AI]]
- [[concepts/personal-ai-framework|personal AI framework]]
- [[concepts/vision-language-model|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[concepts/privacy|privacy]] — [Wikipedia](https://en.wikipedia.org/wiki/Privacy)
- [[concepts/open-source|open-source]] — [Wikipedia](https://en.wikipedia.org/wiki/Open_source)
- [[concepts/stanford-hazy-research|Hazy Research]]
- [[concepts/open-source|Scaling Intelligence Labs]]
- [[concepts/ai-agent|AI agent]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)
- [[concepts/remote-inference|model serving]]
- [[concepts/on-device-inference|on-device inference]]
- [[concepts/energy-efficiency|energy efficiency]]
- [[concepts/real-time-observation|telemetry]] — [Wikipedia](https://en.wikipedia.org/wiki/Telemetry)
- [[concepts/world-knowledge|benchmarking]] — [Wikipedia](https://en.wikipedia.org/wiki/Benchmarking)
- [[concepts/multi-step-reasoning|multi-step reasoning]]
- [[concepts/self-improvement|self-improvement]] — [Wikipedia](https://en.wikipedia.org/wiki/Personal_development)
- [[concepts/water-scarcity|resource management]] — [Wikipedia](https://en.wikipedia.org/wiki/Resource_management)
- [[concepts/terminal-user-interface-tui|CLI interface]]
- [[concepts/single-click-editing|presets]]

## Related Entities
- [[entities/stanford-university|Stanford University]] — [Wikipedia](https://en.wikipedia.org/wiki/Stanford_University)
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/ollama|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[entities/hazy-research|Hazy Research]]
- [[entities/qwen|Qwen]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen)
- [[entities/gpt-oss|GPT-OSS]] — [Wikipedia](https://en.wikipedia.org/wiki/Products_and_applications_of_OpenAI)
- [[entities/gemma|Gemma]]
- [[entities/vllm|vLLM]] — [Wikipedia](https://en.wikipedia.org/wiki/VLLM)
- [[entities/llamacpp|Llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)