---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 7f4a9329d3d576f71625
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "ZGX Fury - Local AI for a Whole Team"
date: 2026-10-31
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-31-lEFFa0Z5BIE-ZGX-Fury---Local-AI-for-a-Whole-Team"
---
## ZGX Fury - Local AI for a Whole Team
**Clip title:** ZGX Fury - Local AI for a Whole Team
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=lEFFa0Z5BIE

### Summary
Here's a summary of the video content:

### Main Topic
The video explores the **HP ZGX Fury AI Station**, an enterprise-grade AI workstation powered by NVIDIA's GB300 superchip. The speaker examines its hardware capabilities, software tooling (HP Z Runtime), performance metrics under heavy workloads, and how it positions itself as an on-premise "data center under your desk" for team collaboration.

### Key Points Discussed
* **Hardware Specs:** The ZGX Fury houses the NVIDIA GB300 Superchip (combining the Blackwell Ultra GPU and a 72-core Grace CPU) with 748 GB of total unified RAM (including 252 GB of HBM3e high-bandwidth memory delivering 7.1 TB/s). It features dual 400 Gb/s network ports, liquid cooling, and 5U rack-mount compatibility.
* **HP Z Runtime (zrt):** A custom CLI tool that simplifies model setup, serving (using vLLM), benchmarking, and chat evaluation, integrating directly with Hugging Face to automate weight and config downloads.
* **Performance Testing:** In benchmarks with models like Qwen3.8 Flash, the machine handled 64 concurrent streams yielding over 3,000+ tokens/sec, and 16 concurrent RAG/agent users with over 1,300+ tokens/sec without high fan usage.
* **Team-Centric AI:** Unlike smaller desktop units built for individual use, the ZGX Fury is designed to serve entire teams, allowing multiple users to run inference, fine-tuning, and agents concurrently on the same machine.
* **Enterprise Security & Control:** By running on-premise, organizations retain complete control over data privacy, model selection, and guardrails, avoiding the restrictions and policy shifts of cloud-based AI providers.

### Conclusions and Takeaways
The video concludes that the HP ZGX Fury is a significant step up from personal AI boxes, offering data-center-level power, memory, and performance in a workstation format. By combining NVIDIA's powerful reference architecture with HP's custom software layer (Z Runtime) and enterprise certifications (such as Red Hat Enterprise Linux), the ZGX Fury provides teams with a scalable, secure, and cost-effective on-premise AI solution without recurring token costs.

### Video Description & Links
#### Description
In this video, I look at the ZGX Fury which is the big brother of the ZGX Nano (DGX Spark). While many people know the GB10s, most people haven't seen the power of what a machine like HP's ZGX Fury can do. With 748 GB of memory and NVIDIA's GB300 chipset, this is a mini data center your whole team can use

HP ZGX Fury : https://www.hp.com/us-en/workstations/ai-stations/zgx-fury-ai-station.html
QuickSpecs: https://h20195.www2.hp.com/v2/GetPDF.aspx/c09307810?jumpid=va_ctk9ni875y
Datasheet: https://h20195.www2.hp.com/v2/GetPDF.aspx/c09307810?jumpid=va_ctk9ni875y

HP ZGX Fury Sizzle Video: https://www.youtube.com/watch?v=9hwxLrkR1p0

🕵️ Interested in building LLM Agents? Fill out the form below

⏱️Time Stamps:
00:00 Intro: HP ZGX Fury
01:05 What is the HP ZGX Fury?
01:17 GB300, 20 petaflops and 748GB of memory
02:09 How the Fury's memory works
03:16 What makes HP's DGX Station different
03:38 HP ZGX Runtime (ZRT)
05:24 HP Z Toolkit
05:35 Red Hat Enterprise Certified
06:57 Benchmarks
08:25 Who is this for?
09:11 Running agentic systems locally
10:29 On-prem AI
11:26 Data-center hardware next to your desk
12:39 Final thoughts

#### Tags
`HP ZGX Fury`, `ZGX Fury`, `HP ZGX Fury AI Station`, `HP ZGX Fury G1N`, `DGX Station`, `NVIDIA DGX Station`, `GB300`, `Blackwell Ultra`, `GB300 desktop`, `DGX Spark`, `HP ZGX Nano`, `local AI`, `on-prem AI`, `local LLM`, `AI workstation`, `HP Z Runtime`, `ZRT`, `HP Z Toolkit`, `Red Hat Enterprise Linux`, `RHEL AI`, `Nemotron 3 Super`, `Infinity AI`, `Qwen 3.8`, `vLLM`, `LLM inference`, `concurrent users`, `AI for teams`, `run LLMs locally`, `AI agents`, `private AI`, `HP sponsored`

#### URLs
- https://www.hp.com/us-en/workstations/ai-stations/zgx-fury-ai-station.html
- https://h20195.www2.hp.com/v2/GetPDF.aspx/c09307810?jumpid=va_ctk9ni875y
- https://www.youtube.com/watch?v=9hwxLrkR1p0
