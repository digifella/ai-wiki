---
wiki-ingested: true
title: "Building Safe AI Agents: Docker Sandboxes and Micro-VMs"
date: 2026-08-20
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: history-anthropology
group: architecture-cities-heritage
type: "source-summary"
aliases:
  - "lab-notes/2026-08-20-Building-Safe-AI-Agents-Docker-Sandboxes-and-Micro-VMs"
---
<!-- domain-nav -->
> domain-badge slug=history-anthropology name=History & Anthropology

## Building Safe AI Agents: Docker Sandboxes and Micro-VMs
**Clip title:** Docker Sandboxes - Building Safe Agents
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=erQnRkMrpls

### Summary
The video addresses a significant challenge in running AI agents: ensuring their safety and preventing unintended consequences. Developers often face a dilemma: either constantly monitor and approve every action an agent takes, leading to tedious "babysitting," or grant unrestricted permissions, risking system damage like wiping drives or exposing sensitive credentials. This issue is compounded when using various coding agents, open-source agents, or custom-built solutions, highlighting a critical need for a secure yet autonomous environment.

[[concepts/docker-sandboxes|Docker Sandboxes]] are presented as an elegant solution to this problem. They provide a controlled environment where users can dictate precisely what an [[concepts/ai-agent|AI agent]] can do. This includes setting explicit policies for network access (e.g., allowing specific hostnames while denying others), defining which AI models it can utilize (e.g., [[entities/claude|Claude]], GPT, or [[concepts/local-llms|local LLMs]]), granular control over file system access (read-only for certain directories, read-write for a designated workspace), and secure management of credentials. A key security feature is that API keys are never directly exposed to the agent; instead, they are injected via a proxy, mitigating the risk of sensitive data leaks through prompt injection or malicious agent behavior.

Technically, Docker Sandboxes achieve this robust isolation by running AI agents within isolated micro-VMs, rather than traditional containers. Unlike containers that share the host's operating system kernel, each micro-VM has its own dedicated Linux kernel, providing a hardware-enforced separation from the host system. This offers stronger isolation than software-based containerization, acting as a "sweet spot" between the heavy, slow nature of full virtual machines and the weaker isolation of standard containers. These micro-VMs boot and tear down quickly, allowing developers to install packages, run experiments, and create temporary files within the sandbox, which are then discarded without affecting the underlying host machine.

The utility of Docker Sandboxes extends to various use cases, from safely experimenting with new agents to deploying custom-built AI solutions. Through "Kits," developers can define entire sandbox environments, including pre-installed tools, environment variables, specific network and file access rules, and even startup commands. This enables rapid testing of agents with local models (e.g., via [[entities/lm-studio|LM Studio]]) without incurring cloud costs or worrying about accidental system changes. The core takeaway is that Docker Sandboxes provide a simple, elegant, and highly secure framework for operating AI agents, allowing for maximum autonomy within strictly defined and hardware-enforced boundaries, thereby solving many of the inherent security and control issues in AI development.

### Video Description & Links
#### Description
Docker Sandboxes is an easy way to secure you agents for coding and general use. That includes locking down the their network access and their read/write permissions. It makes it easy for you to no longer worry about coding agents wiping your drive or leaking your keys etc.  

Site: https://www.docker.com/products/docker-sandboxes/
📖  Docs: https://docs.docker.com/ai/sandboxes/

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
00:58 What is a Docker Sandbox
02:36 Docker Sandboxes Documentation
03:20 Hypervisor
04:44 Setup Docker Sandbox
05:52 What's running inside the sandbox
06:13 Writing inside the Sandbox folder
07:57 Setting up a Policy
09:12 Network Rules
10:10 Installing packages
12:52 Setting up Secret keys
14:45 Pre-made Templates

#### Tags
`docker sandboxes`, `docker sandbox`, `ai agent security`, `agent sandboxing`, `sandbox ai agents`, `claude code`, `codex`, `coding agents`, `microvm`, `sbx cli`, `docker kits`, `agent isolation`, `secure ai agents`, `prompt injection`, `api key security`, `openrouter`, `lm studio`, `deep agents`, `langchain`, `local llm agent`, `run agents safely`, `agent permissions`, `network policy`, `skip permissions`, `opencode`, `docker for ai`, `autonomous agents`, `ai dev tools`, `local ai agents`, `agent safety`, `agentic coding`

#### URLs
- https://www.docker.com/products/docker-sandboxes/
- https://docs.docker.com/ai/sandboxes/
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/web-tools|AI agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)
- [[concepts/docker-sandboxes|Docker sandboxes]]
- [[concepts/system-safety|system safety]] — [Wikipedia](https://en.wikipedia.org/wiki/System_safety)
- [[concepts/permission-management|permission management]]
- [[concepts/web-tools|Micro-VMs]]
- Network Access Control — [Wikipedia](https://en.wikipedia.org/wiki/Network_access_control)
- Linux Kernel — [Wikipedia](https://en.wikipedia.org/wiki/Linux_kernel)
- Hypervisor — [Wikipedia](https://en.wikipedia.org/wiki/Hypervisor)
- [[concepts/autonomous-execution|Autonomous Execution]]
- [[concepts/agentic-coding|LLM Agents]]
- [[concepts/local-llms|Local LLMs]]

## Related Entities
- [[entities/sam-witteveen|Sam Witteveen]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/claude|Claude]]
- [[entities/lm-studio|LM Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/LM_Studio)
- Twitter — [Wikipedia](https://en.wikipedia.org/wiki/X_%28social_network%29)
- GitHub — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)