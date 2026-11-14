---
selected-topic: "Tools & Platforms"
wiki-ready: true
review-status: "approved"
lab-review-id: d4072a7ac78b99734153
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "tools-platforms"
title: "I Turned My Spare Phones Into a Wireless GPU for AI Agents (It Actually Works)"
date: 2026-11-07
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-07-reOeczuEzOA-I-Turned-My-Spare-Phones-Into-a-Wireless-GPU-for-AI-Agen"
credibility_tier: 1
credibility_label: "Commentary"
---
## I Turned My Spare Phones Into a Wireless GPU for AI Agents (It Actually Works)
**Clip title:** I Turned My Spare Phones Into a Wireless GPU for AI Agents (It Actually Works)
**Author / channel:** orailnoor
**URL:** https://www.youtube.com/watch?v=reOeczuEzOA
**Credibility:** Commentary (tier 1 of 5). YouTube video from orailnoor: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video discusses how to run large AI models—like the 26-billion-parameter Gemma 4 model—locally on mobile devices, even when they exceed a single device's memory capacity. The speaker demonstrates this by using an app called PrivateLM, which allows users to run AI models on their phones without sending data to a server. To overcome the memory limitations of individual devices, the speaker introduces the "Phone Cluster" feature, which connects multiple devices over Wi-Fi to distribute the workload of running large AI models.

The video explains how the Phone Cluster feature works by dividing an AI model's layers across multiple devices, allowing them to work together as a single system. The speaker demonstrates connecting an iPhone, iPad, Samsung S24, and Pixel, and shows how the app distributes the model based on each device's available memory and processing power. While the speed of processing tokens per second isn't extremely fast, running a 26-billion-parameter model across four phones is a notable achievement.

In conclusion, the video showcases the potential of running large AI models locally across multiple mobile devices using the PrivateLM app and its Phone Cluster feature. While there are limitations regarding speed and Wi-Fi communication, this approach enables users to run models on devices that couldn't handle them independently. The speaker encourages viewers to explore the app and project links available in the video description.

### Video Description & Links
#### Description
I turned my spare phones into a wireless GPU and ran Gemma 4, a 26-billion-parameter AI model, across an iPhone, iPad, Galaxy S24 and Pixel at the same time. Fully local: no cloud, no API costs, no internet needed. Then I connected it to my laptop and used it to power AI agents in VS Code with Continue.

My MacBook Air (8 GB RAM) can't even load this model, and no single phone has enough memory for it either. But split across four devices over Wi-Fi, it works.

App: https://github.com/orailnoor/cross-platform-llm-client/releases/tag/1.0.7-cluster
GitHub: https://github.com/orailnoor/cross-platform-llm-client

Chapters
0:00 A 26B AI model running on phones
0:39 PrivateLM: local AI on your phone
1:21 Why one phone isn't enough
2:01  Setting up the phone cluster (QR pairing)
3:12 How the model is split across devices
4:10 Phones as a wireless GPU for my laptop (AnythingLLM + Continue)

How it works

The built-in Server option turns the cluster into an OpenAI-compatible API on your local network, so tools on your computer like AnythingLLM, VS Code with Continue, and other OpenAI-compatible apps can use the model running on your phones.

What you need
• An Android phone as the master (it loads the model and runs the chat)
• Any mix of Android phones, iPhones or iPads as workers
• All devices on the same Wi-Fi network

Honest limits
It's not GPU-fast: expect around 4–5 tokens per second for a 26B model. More devices give you more memory but add more Wi-Fi hops per word. The point isn't speed. It's running a model none of your devices could run alone.

What's the oldest phone you'd add to the cluster? Tell me in the comments.

#LocalAI #LLM #AIAgents

#### Tags
`wireless gpu`, `phone cluster`, `run llm on phone`, `local ai`, `local llm`, `gemma 4`, `26b model`, `distributed inference`, `llama.cpp`, `gguf`, `ai agents`, `continue vscode`, `anythingllm`, `offline ai`, `private ai`, `privatelm`, `run ai locally`, `old phones ai`, `ai on iphone`, `ai on android`, `open source ai app`, `orailnoor`, `AI agents`, `Phone agent`, `Local LLM on phone`, `Phone as GPU`, `Things to do with spare phones`, `Extract phone's GPU`, `How to run Local model on phone`, `Tech jarves`, `AI`, `GGUF`, `LOCAL LM`

#### URLs
- https://github.com/orailnoor/cross-platform-llm-client/releases/tag/1.0.7-cluster
- https://github.com/orailnoor/cross-platform-llm-client
