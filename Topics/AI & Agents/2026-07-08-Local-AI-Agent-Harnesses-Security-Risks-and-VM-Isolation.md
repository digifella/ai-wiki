---
wiki-ingested: true
title: "Local AI Agent Harnesses: Security Risks and VM Isolation Challenges"
date: 2026-07-08
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-07-08 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Local AI Agent Harnesses: Security Risks and VM Isolation Challenges
**Clip title:** Building A Free [[concepts/perplexity-ai|Perplexity]] Computer That Runs Locally
**Author / channel:** [[entities/timothy-karanbact|Tim Carambat]]
**URL:** https://www.youtube.com/watch?v=PxoMkoNJOe4

### Summary
The video introduces the concept of "[[concepts/agent-harnesses|agent harnesses]]," which are generic [[concepts/ai-tools|AI tools]] designed to perform actions based on user requests, citing examples like [[concepts/automated-information-pipelines|OpenClaw]] and Pi.dev. A significant problem with the current generation of these harnesses is their tendency to be overloaded with thousands of "skills," performing adequately only with powerful, cloud-based models that possess extremely large [[concepts/context-windows|context windows]] (e.g., 64K or 256K tokens). This approach becomes inefficient and often breaks down when attempting to run on local models with smaller context windows (e.g., 16K or 32K tokens). Beyond efficiency, a critical flaw highlighted is the inherent [[concepts/security-exposure|security risk]]: for an agent to be maximally useful, it often requires extensive access to the user's computer, potentially leading to dangerous [[concepts/scenarios|scenarios]] like accidental data deletion due to AI hallucinations, a problem exacerbated by methods like `dangerously-skip-permissions`.

The industry's initial response to these [[concepts/security-concersns|security concerns]] has been to advocate for containing agents within [[concepts/docker|Docker]] or similar [[concepts/containerization|containerization]] systems. However, the video argues that traditional [[concepts/containerization-technology|containers]] are not truly safe as they share the host computer's kernel, potentially allowing a malicious agent to escape and compromise the entire system. The technically sound [[concepts/solution|solution]] for true [[concepts/disconnection|isolation]] is the use of [[concepts/virtual-machines|Virtual Machines]] (VMs), which provide a separate virtual kernel. While secure, VMs are generally considered too complex and non-trivial for the average user to set up and manage, creating a usability gap between sophisticated AI tools and the broader user base.

To bridge this gap, [[entities/timothy-carambat|Timothy Carambat]] introduces "Open Computer," a project within [[entities/anything-llm|AnythingLLM]] that aims to provide a safe, user-friendly, and token-efficient environment for [[concepts/agentic-ai|AI agents]]. Open Computer encapsulates agents within lightweight Linux VMs (Debian 13.5, visually themed like Windows 10 for familiarity) managed by QEMU. Key features include a desktop-like [[concepts/gui-interface|graphical user interface]], built-in standard tools like a web browser and an App Store (powered by Flatpak), and a unique approach to agent interaction that avoids token-wasteful screenshot-based navigation. Instead, it utilizes efficient HTML parsing for browser interactions and the Linux [[concepts/accessibility|accessibility]] tree for native applications, significantly reducing [[concepts/token-consumption|token consumption]]. The system also supports "human-in-the-loop" co-working, where the agent can ping the user for assistance when stuck on tasks like login walls or captchas.

The project emphasizes running local models on realistic hardware profiles (e.g., 32K context, <13B parameters dense), with [[concepts/inference|inference]] handled on the host machine to minimize VM load. Demonstrations included generating a GIF of stock prices, researching and synthesizing an executive review document (highlighting efficient browsing and document creation), and manipulating a native BMI calculator app (showcasing direct app interaction without screenshots). Ultimately, "Open Computer" envisions a future where every [[concepts/ai-agent|AI agent]] has its own secure, self-contained virtual computer, operating efficiently and intuitively. This approach aims to democratize [[concepts/frontier-ai-capability|advanced AI capabilities]], making them accessible and safe for everyday users without demanding deep technical [[concepts/expertise|expertise]], thereby fostering a more collaborative relationship between humans and AI.

### Video Description & Links
#### Description
Open Computer is an [[concepts/open-source|open-source]] mini-project that I have been tinkering with to give private computer to agents that are designed with [[concepts/local-model|local model]] context windows in mind.

The idea is simple: A computer with an [[concepts/agentic-harness|agent harness]] inside of it that is tooled for local models, but also has a user-friendly UI so a regular person can set up and intervene with the agent easily.

This basically becomes a free & local Perplexity Computer that anyone can run locally or as a swarm on a single server - which is honestly really cool. The inference is totally outside of the VM, which means you can use really anything to power the actual LLM inside the computer.

This is possible by simply using the following:
- QEMU (for micro VMs)
- Debian 13.5
- [[concepts/bash-tool|Pi agent]] harness w/custom tools
- And a simple UI on top of XFCE4

There are some similar projects like this, but the most promising one was bytesbot - which was abandoned as maybe it was too early for it's time. 

If this is something that looks of interest there is a lot of work to do, but starring the repo helps us know. Its currently inside of AnythingLLM since we plan to tightly integrate this idea, but it will very likely evolve to its own repo if it gets enough interest.

*Links* :
OSS Repo: https://github.com/Mintplex-Labs/anything-llm/blob/master/open-computer/README.md

*Chapters* :
0:00 Let's Talk About Agent Harnesses
2:21 The Issue with OpenClaw, Hermes, or any harness
3:25 Containers != [[concepts/vps|Virtual Machine]]
8:28 [[concepts/computer-use|Computer Use]] is a waste of (tokens)
10:12 What is Open Computer?
11:02 What is in Open Computer?
15:20 Open Computer Is A Free Perplexity Computer
16:23 How I am going to run these demos today
16:29 Demo 1: Build a GIF from a dataset
21:04 Demo 2: Browser research & Automation
25:03 Demo 3: [[concepts/native-app|Native App]] Automation via Accessibility Trees
28:35 That's Open Computer

#### URLs
- https://github.com/Mintplex-Labs/anything-llm/blob/master/open-computer/README.md

## Related Concepts
- [[concepts/local-ai-agent-harnesses|Local AI Agent Harnesses]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_AI_Agent_Harnesses)
- [[concepts/vm-isolation|VM Isolation]] — [Wikipedia](https://en.wikipedia.org/wiki/VM_Isolation)
- [[concepts/security|Security Risks]] — [Wikipedia](https://en.wikipedia.org/wiki/Security_Risks)
- [[concepts/agent-skills|AI Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Skills)
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window)
- [[concepts/cloud-based-models|Cloud-Based Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Cloud-Based_Models)
- [[concepts/pidev|Pi.dev]] — [Wikipedia](https://en.wikipedia.org/wiki/Pi.dev)
- [[concepts/perplexity-computer|Perplexity Computer]] — [Wikipedia](https://en.wikipedia.org/wiki/Perplexity_Computer)
- [[concepts/local-execution|Local Execution]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Execution)
- [[concepts/docker-containers|Docker Containerization]] — [Wikipedia](https://en.wikipedia.org/wiki/Docker_Containerization)
- Kernel Sharing — [Wikipedia](https://en.wikipedia.org/wiki/Kernel_Sharing)
- [[concepts/token-usage-optimization|Token Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Token_Efficiency)
- HTML Parsing — [Wikipedia](https://en.wikipedia.org/wiki/HTML_Parsing)
- Accessibility Tree — [Wikipedia](https://en.wikipedia.org/wiki/Accessibility_Tree)
- [[concepts/workflow-transformation|Human-in-the-Loop]] — [Wikipedia](https://en.wikipedia.org/wiki/Human-in-the-Loop)
- QEMU — [Wikipedia](https://en.wikipedia.org/wiki/QEMU)
- Flatpak — [Wikipedia](https://en.wikipedia.org/wiki/Flatpak)
- [[concepts/ai-hallucinations|AI Hallucinations]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Hallucinations)

## Related Entities
- [[entities/tim-carambat|Tim Carambat]] — [Wikipedia](https://en.wikipedia.org/wiki/Tim_Carambat)
- [[entities/pidev|Pi.dev]] — [Wikipedia](https://en.wikipedia.org/wiki/Pi.dev)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/openclaw|OpenClaw]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenClaw)
- Perplexity Computer — [Wikipedia](https://en.wikipedia.org/wiki/Perplexity_Computer)
- Open Computer — [Wikipedia](https://en.wikipedia.org/wiki/Open_Computer)
- [[entities/anythingllm|AnythingLLM]] — [Wikipedia](https://en.wikipedia.org/wiki/AnythingLLM)
- Debian 13.5 — [Wikipedia](https://en.wikipedia.org/wiki/Debian_13.5)
- [[entities/windows-10|Windows 10]] — [Wikipedia](https://en.wikipedia.org/wiki/Windows_10)
- [[entities/qemu|QEMU]] — [Wikipedia](https://en.wikipedia.org/wiki/QEMU)
- Flatpak — [Wikipedia](https://en.wikipedia.org/wiki/Flatpak)