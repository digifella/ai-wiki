---
title: "Local AI Agent Harnesses: Security Risks and VM Isolation Challenges"
date: 2026-07-08
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Local AI Agent Harnesses: Security Risks and VM Isolation Challenges
Generated: 2026-07-08 · API: Gemini 2.5 Flash · Modes: Summary

---

## Local AI Agent Harnesses: Security Risks and VM Isolation Challenges
**Clip title:** Building A Free Perplexity Computer That Runs Locally
**Author / channel:** Tim Carambat
**URL:** https://www.youtube.com/watch?v=PxoMkoNJOe4

### Summary
The video introduces the concept of "agent harnesses," which are generic AI tools designed to perform actions based on user requests, citing examples like OpenClaw and Pi.dev. A significant problem with the current generation of these harnesses is their tendency to be overloaded with thousands of "skills," performing adequately only with powerful, cloud-based models that possess extremely large context windows (e.g., 64K or 256K tokens). This approach becomes inefficient and often breaks down when attempting to run on local models with smaller context windows (e.g., 16K or 32K tokens). Beyond efficiency, a critical flaw highlighted is the inherent security risk: for an agent to be maximally useful, it often requires extensive access to the user's computer, potentially leading to dangerous scenarios like accidental data deletion due to AI hallucinations, a problem exacerbated by methods like `dangerously-skip-permissions`.

The industry's initial response to these security concerns has been to advocate for containing agents within Docker or similar containerization systems. However, the video argues that traditional containers are not truly safe as they share the host computer's kernel, potentially allowing a malicious agent to escape and compromise the entire system. The technically sound solution for true isolation is the use of Virtual Machines (VMs), which provide a separate virtual kernel. While secure, VMs are generally considered too complex and non-trivial for the average user to set up and manage, creating a usability gap between sophisticated AI tools and the broader user base.

To bridge this gap, Timothy Carambat introduces "Open Computer," a project within AnythingLLM that aims to provide a safe, user-friendly, and token-efficient environment for AI agents. Open Computer encapsulates agents within lightweight Linux VMs (Debian 13.5, visually themed like Windows 10 for familiarity) managed by QEMU. Key features include a desktop-like graphical user interface, built-in standard tools like a web browser and an App Store (powered by Flatpak), and a unique approach to agent interaction that avoids token-wasteful screenshot-based navigation. Instead, it utilizes efficient HTML parsing for browser interactions and the Linux accessibility tree for native applications, significantly reducing token consumption. The system also supports "human-in-the-loop" co-working, where the agent can ping the user for assistance when stuck on tasks like login walls or captchas.

The project emphasizes running local models on realistic hardware profiles (e.g., 32K context, <13B parameters dense), with inference handled on the host machine to minimize VM load. Demonstrations included generating a GIF of stock prices, researching and synthesizing an executive review document (highlighting efficient browsing and document creation), and manipulating a native BMI calculator app (showcasing direct app interaction without screenshots). Ultimately, "Open Computer" envisions a future where every AI agent has its own secure, self-contained virtual computer, operating efficiently and intuitively. This approach aims to democratize advanced AI capabilities, making them accessible and safe for everyday users without demanding deep technical expertise, thereby fostering a more collaborative relationship between humans and AI.

### Video Description & Links
#### Description
Open Computer is an open-source mini-project that I have been tinkering with to give private computer to agents that are designed with local model context windows in mind.

The idea is simple: A computer with an agent harness inside of it that is tooled for local models, but also has a user-friendly UI so a regular person can set up and intervene with the agent easily.

This basically becomes a free & local Perplexity Computer that anyone can run locally or as a swarm on a single server - which is honestly really cool. The inference is totally outside of the VM, which means you can use really anything to power the actual LLM inside the computer.

This is possible by simply using the following:
- QEMU (for micro VMs)
- Debian 13.5
- Pi agent harness w/custom tools
- And a simple UI on top of XFCE4

There are some similar projects like this, but the most promising one was bytesbot - which was abandoned as maybe it was too early for it's time. 

If this is something that looks of interest there is a lot of work to do, but starring the repo helps us know. Its currently inside of AnythingLLM since we plan to tightly integrate this idea, but it will very likely evolve to its own repo if it gets enough interest.

*Links* :
OSS Repo: https://github.com/Mintplex-Labs/anything-llm/blob/master/open-computer/README.md

*Chapters* :
0:00 Let's Talk About Agent Harnesses
2:21 The Issue with OpenClaw, Hermes, or any harness
3:25 Containers != Virtual Machine
8:28 Computer Use is a waste of (tokens)
10:12 What is Open Computer?
11:02 What is in Open Computer?
15:20 Open Computer Is A Free Perplexity Computer
16:23 How I am going to run these demos today
16:29 Demo 1: Build a GIF from a dataset
21:04 Demo 2: Browser research & Automation
25:03 Demo 3: Native App Automation via Accessibility Trees
28:35 That's Open Computer

#### URLs
- https://github.com/Mintplex-Labs/anything-llm/blob/master/open-computer/README.md
