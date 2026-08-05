---
wiki-ingested: true
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

https://www.youtube.com/watch?v=IaqzrByS8yA

This video provides a comprehensive guide to installing and [[concepts/testing|testing]] the Qwen3-Coder-Flash model locally, with a special focus on its [[entities/prompt-engineering|agentic coding]] and tool use capabilities. The presenter, Fahd Mirza, walks through the entire process, from setting up the environment to demonstrating the model's advanced functionalities.

### **Qwen3-Coder-Flash Model Overview**

The video begins with an introduction to the Qwen3-Coder-Flash model. Mirza mentions that he has previously covered the model's [[concepts/architecture|architecture]] and benchmarks in detail in other videos, so he provides a brief overview. He highlights that, in his opinion, the [[entities/alibaba-qwen|Qwen3-Coder]] model is one of the best [[concepts/open-source|open-source]], [[concepts/open-weight-models|open-weight models]] available, particularly in the sub-30 billion parameter size [[concepts/range|range]]. He also emphasizes the model's improved tool use functionality, which is the primary focus of this video.

### **[[concepts/local-installation|Local Installation]] and Setup**

To install the model locally, Mirza uses [[entities/vllm|vLLM]], a fast, low-latency [[concepts/inference|inference]] engine. He provides a step-by-step guide on how to get vLLM installed and running. For the [[concepts/gui-interface|graphical user interface]] (GUI), he opts for Open WebUI but [[concepts/notes|notes]] that users can choose any interface they prefer. The installation is performed on an [[entities/ubuntu|Ubuntu]] system with an [[concepts/nvidia-h100|NVIDIA H100]] GPU with 80GB of [[concepts/vram|VRAM]]. The video shows the process of downloading the model, which consists of 16 shards, each 4GB in size. The model loading takes just under 90 seconds and consumes around 57GB of VRAM.

### **Testing and Demonstration**

The video includes two main testing phases:

1. **Coding Problem:** Mirza first tests the model's coding capabilities by asking it to create a self-contained HTML page featuring an animation of a [[concepts/neural-network|neural network]]. The model successfully generates the [[concepts/code|code]], which, when opened in a browser, displays an animation of a "Living Neural Mind."
2. **Agentic Coding and Tool Use:** The second and more in-depth test focuses on the model's agentic coding abilities. Mirza explains that agentic coding allows the AI model to act as an intelligent [[entities/agent|agent]] that can autonomously use tool functions to solve problems. To enable this, the model needs to be served with the `enable-auto-tool-choice` and `tool-call-parser hermes` flags in vLLM.

He demonstrates this with a practical example where he asks the model to compare the weather comfort between New York and London for an upcoming trip. The model is given access to two functions: `get_weather` and `calculate_comfort_index`. The model intelligently understands the user's request, identifies the need to use these functions, and creates the appropriate function calls with the correct [[concepts/parameters|parameters]] (city names). The code then executes these function calls and returns the results to the user.

### **Sponsors and Additional Information**

The video also features a sponsorship from Eigengent AI, a multi-agent workforce platform, and Massed Compute, a [[concepts/cloud-computing|cloud computing]] service that offers affordable GPU and VM rentals. Mirza provides a discount code for Massed Compute in the video description.
In conclusion, the video serves as a valuable resource for anyone interested in exploring the capabilities of the Qwen3-Coder-Flash model, particularly its advanced agentic coding features. It provides a clear and practical demonstration of how to install, set up, and test the model locally, making it accessible to a wide range of users.

## Related Concepts
- [[concepts/agentic-ai|agentic coding]] — [Wikipedia](https://en.wikipedia.org/wiki/agentic_coding)
- [[concepts/tool-use-capabilities|tool use capabilities]] — [Wikipedia](https://en.wikipedia.org/wiki/tool_use_capabilities)
- [[concepts/qwen-model|Qwen model]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_model)
- [[concepts/reasoning-models|open-source models]] — [Wikipedia](https://en.wikipedia.org/wiki/open-source_models)
- [[concepts/technical-specs|benchmarking]] — [Wikipedia](https://en.wikipedia.org/wiki/benchmarking)
- [[concepts/storage-requirements|parameter size]] — [Wikipedia](https://en.wikipedia.org/wiki/parameter_size)
- [[concepts/machine-learning|machine learning]] — [Wikipedia](https://en.wikipedia.org/wiki/machine_learning)
- Qwen3-Coder-Flash — [Wikipedia](https://en.wikipedia.org/wiki/Qwen3-Coder-Flash)
- [[concepts/vllm|vLLM]] — [Wikipedia](https://en.wikipedia.org/wiki/vLLM)
- [[concepts/open-webui|Open WebUI]] — [Wikipedia](https://en.wikipedia.org/wiki/Open_WebUI)
- [[concepts/nvidia-h100|NVIDIA H100]] GPU — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA_H100_GPU)
- Ubunuto — [Wikipedia](https://en.wikipedia.org/wiki/Ubunuto)
- [[entities/hermes|Hermes]] flags — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_flags)
- auto-tool-choice — [Wikipedia](https://en.wikipedia.org/wiki/auto-tool-choice)

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- Eigengent AI — [Wikipedia](https://en.wikipedia.org/wiki/Eigengent_AI)
- [[entities/massed-compute|Massed Compute]] — [Wikipedia](https://en.wikipedia.org/wiki/Massed_Compute)
- Qwen model — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_model)
- LLM — [Wikipedia](https://en.wikipedia.org/wiki/LLM)