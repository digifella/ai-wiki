---
wiki-ingested: true
title: "New Qwen agentic local llm"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
---
# New Qwen agentic [[concepts/local-llm|local llm]]

---
---
https://www.youtube.com/watch?v=IaqzrByS8yA

This video provides a comprehensive guide to installing and [[concepts/testing|testing]] the Qwen3-Coder-Flash model locally, with a special focus on its agentic [[concepts/coding|coding]] and [[concepts/tool-use-capabilities|tool use capabilities]]. The presenter, [[entities/fahd-mirza|Fahd Mirza]], walks through the entire process, from setting up the environment to demonstrating the model's advanced functionalities.

### **Qwen3-Coder-Flash Model Overview**

The video begins with an introduction to the Qwen3-Coder-Flash model. Mirza mentions that he has previously covered the model's [[concepts/architecture|architecture]] and benchmarks in detail in other videos, so he provides a brief overview. He [[concepts/highlights|highlights]] that, in his opinion, the [[entities/qwen3-coder|Qwen3-Coder]] model is one of the best [[concepts/open-source|open-source]], [[concepts/open-weight-language-models|open-weight models]] available, particularly in the sub-30 billion parameter size [[concepts/range|range]]. He also emphasizes the model's improved tool use functionality, which is the primary focus of this video.

### **[[concepts/local-installation|Local Installation]] and [[concepts/setup|Setup]]**

To install the model locally, Mirza uses vLLM, a fast, low-latency [[concepts/inference|inference]] engine. He provides a step-by-step guide on how to get vLLM installed and [[concepts/running|running]]. For the graphical [[concepts/user-interface|user interface]] (GUI), he opts for [[concepts/open-webui|Open WebUI]] but [[concepts/notes|notes]] that users can choose any interface they prefer. The installation is performed on an [[entities/ubuntu|Ubuntu]] system with an [[concepts/nvidia-h100|NVIDIA H100]] GPU with 80GB of VRAM. The video shows the process of downloading the model, which consists of 16 shards, each 4GB in size. The model loading takes just under 90 seconds and consumes around 57GB of VRAM.

### **Testing and Demonstration**

The video includes two main testing phases:

1. **Coding Problem:** Mirza first tests the model's coding capabilities by asking it to create a self-contained HTML page featuring an animation of a [[concepts/neural-network|neural network]]. The model successfully generates the code, which, when opened in a browser, displays an animation of a "Living Neural Mind."
2. **Agentic Coding and Tool Use:** The second and more in-depth test focuses on the model's agentic coding abilities. Mirza explains that agentic coding allows the AI model to act as an intelligent [[entities/agent|agent]] that can autonomously use tool functions to solve problems. To enable this, the model needs to be served with the `enable-auto-tool-choice` and `tool-call-parser hermes` [[concepts/flags|flags]] in vLLM.

He demonstrates this with a practical example where he asks the model to compare the weather comfort between New York and London for an upcoming trip. The model is given access to two functions: `get_weather` and `calculate_comfort_index`. The model intelligently understands the user's request, identifies the need to use these functions, and creates the appropriate function calls with the correct [[concepts/parameters|parameters]] (city names). The code then executes these function calls and returns the results to the user.

### **Sponsors and Additional Information**

The video also features a sponsorship from Eigengent AI, a multi-agent workforce platform, and [[entities/massed-compute|Massed Compute]], a [[concepts/cloud-computing|cloud computing]] service that offers affordable GPU and VM rentals. Mirza provides a discount code for Massed Compute in the video description.
In conclusion, the video serves as a valuable resource for anyone interested in exploring the capabilities of the Qwen3-Coder-Flash model, particularly its advanced agentic coding features. It provides a clear and practical demonstration of how to install, set up, and test the model locally, making it accessible to a wide range of users.
