---
wiki-ingested: true
title: "OpenShell: Secure Runtime for AI Agents with Out-of-Process Enforcement"
date: 2026-05-22
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms
group: platforms-runtimes-environments
---
# OpenShell: Secure Runtime for AI Agents with Out-of-Process Enforcement
Generated: 2026-05-22 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## OpenShell: Secure Runtime for AI Agents with Out-of-Process Enforcement
**[[concepts/clip-title|Clip title]]:** OpenShell Agents
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=0zHNyGFSelA

### Summary
This video delves into NVIDIA's [[concepts/enterprise-ai|NemoClaw]], an agent toolkit for building specialized [[concepts/ai-agents|AI agents]], but quickly establishes that the real [[concepts/innovation|innovation]] lies not in NemoClaw itself, but in **OpenShell**, its underlying runtime. NemoClaw is presented as a blueprint, an extensible [[concepts/architecture|architecture]] composed of three main components: a Harness (the agent's logic for planning and [[concepts/tool-calling|tool calling]], such as [[concepts/automated-information-pipelines|OpenClaw]], [[concepts/autonomous-workflow-automation|Hermes Agent]], or LangChain Deep Agents), a Model (the [[concepts/large-language-model|Large Language Model]], typically NVIDIA's [[entities/ai-assistant|Nemotron]]), and a Runtime (OpenShell), which provides crucial [[concepts/security|security]] and policy controls. The core message is that while the harness and model can be swapped out, OpenShell remains the constant, providing the essential secure environment for agent execution, especially in production settings.

The video [[concepts/highlights|highlights]] the inherent security vulnerabilities of traditional AI agents, which often operate with unrestricted access to system resources like file systems, APIs, networks, and credentials. While acceptable for local experimentation, this unrestricted access is highly dangerous for production deployments due to risks such as prompt injection, data exfiltration, and unauthorized actions. OpenShell addresses these concerns through a fundamentally different approach: **out-of-process enforcement**. Instead of relying on the LLM's [[concepts/system-prompt|system prompt]] to enforce rules (which can be easily circumvented by prompt injection, as LLMs are predictive, not enforcing mechanisms), OpenShell employs a "supervisor" process. This supervisor starts *before* the agent, fetches predefined security [[concepts/policies|policies]] from a gateway, prepares a sandboxed environment, and then launches the agent as a restricted child process within this secure boundary.

OpenShell provides robust security controls across four critical [[concepts/cybersecurity-threats|attack vectors]]. Firstly, for **network access**, it operates on a "default deny" principle, meaning no external connections are allowed unless explicitly whitelisted in the policy. Secondly, **file system access** is strictly isolated; host directories are never mounted, and the agent can only read/write within its designated workspace and temporary storage, preventing access to sensitive files like SSH keys or [[concepts/environment-variables|environment variables]]. Thirdly, **[[concepts/inference|inference]] calls** to LLMs are routed through a managed endpoint (`inference.local`) within the sandbox, with OpenShell handling the actual routing and injecting provider credentials, which are never exposed directly to the agent. Finally, **credentials** are managed via runtime key injection, where [[concepts/api-keys|API keys]] are ephemerally supplied by the gateway to the supervisor for specific outbound calls, never being stored persistently within the sandbox itself.

The key takeaway is a paradigm shift from solely [[concepts/human-cognition|thinking]] in terms of AI frameworks to considering "blueprints, sandboxes, and primitives" for secure [[concepts/agent-deployment|agent deployment]]. OpenShell's policies are treated as code, residing in a version-controlled repository, allowing for diffing, code reviews, and auditability – offering a provable level of security. This modular and secure stack ensures that even if an agent's logic or model is compromised (e.g., via prompt injection), the underlying runtime security policies enforced by OpenShell remain intact, blocking any unauthorized actions and safeguarding the host system. This makes OpenShell the critical component for safely [[concepts/computational-scaling|scaling]] [[concepts/ai-agentic-applications|AI agent applications]] in enterprise environments.

### Video Description & Links
#### Description
In this video, we look at OpenShell, the layer that runs the protection in NemoClaw Blueprints, but we actually do it with a LangChain DeepAgents harness to show how you can use a number of different agent options.

🔗 Links:
OpenShell Docs: https://nvda.ws/3Pvfn6w
NVIDIA Guide to OpenShell: https://nvda.ws/3RpuvTo
LangChain Eample: https://github.com/langchain-ai/openshell-deepagent

Twitter: https://x.com/Sam_Witteveen 

🕵️ Interested in building [[concepts/llm-based-agents|LLM Agents]]? Fill out the form below
Building LLM Agents Form: https://drp.li/dIMes

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
00:39 Quick Recap: NemoClaw
01:47 3 Flavors of NemoClaw
02:47 LangChain Deep Agent Framework
03:07 Deep Agent Architecture
04:26 Deep Agents+NemoClaw+OpenShell
04:52 Deep Agent Project
05:51 OpenShell: The Core Idea - Out-of-Process Enforcement
07:52 4 Things Supervisor Controls
10:14 End-to-end Walkthrough

#NVIDIAAI #langchain

#### Tags
`Claude responded: NVIDIA OpenShell`, `OpenShell`, `NemoClaw`, `NVIDIA NemoClaw`, `OpenClaw`, `LangChain`, `LangChain Deep Agents`, `Deep Agents`, `AI agents`, `agentic AI`, `autonomous agents`, `secu…
NVIDIA OpenShell`, `secure AI agents`, `AI agent sandbox`, `AI runtime`, `sandboxed AI`, `[[concepts/ai-agent-autonomy|AI agent security]]`, `Nemotron`, `[[entities/dgx-spark|DGX Spark]]`, `NVIDIA AI`, `[[concepts/open-source|open source]] AI`, `[[concepts/local-llm|local LLM]]`, `Ollama`, `Hermes`, `[[entities/nous-research|Nous Research]]`, `[[concepts/langgraph-framework|LangGraph]]`, `AI [[concepts/tutorial|tutorial]]`, `build AI agent`, `[[concepts/self-improving-ai|self improving AI]]`, `[[concepts/ai-safety|AI safety]]`, `kernel sandbox`, `[[concepts/agentic-harness|agent harness]]`, `multi agent`

#### URLs
- https://nvda.ws/3Pvfn6w
- https://nvda.ws/3RpuvTo
- https://github.com/langchain-ai/openshell-deepagent
- https://x.com/Sam_Witteveen
- https://drp.li/dIMes
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/secure-runtime|Secure Runtime]] — [Wikipedia](https://en.wikipedia.org/wiki/Secure_Runtime)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/out-of-process-enforcement|Out-of-Process Enforcement]] — [Wikipedia](https://en.wikipedia.org/wiki/Out-of-Process_Enforcement)
- [[concepts/agent-toolkit|Agent Toolkit]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Toolkit)
- [[concepts/extensible-architecture|Extensible Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Extensible_Architecture)
- AI Agent Sandboxing — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agent_Sandboxing)
- Default Deny Network Policy — [Wikipedia](https://en.wikipedia.org/wiki/Default_Deny_Network_Policy)
- File System Isolation — [Wikipedia](https://en.wikipedia.org/wiki/File_System_Isolation)
- Credential Injection — [Wikipedia](https://en.wikipedia.org/wiki/Credential_Injection)
- Prompt Injection Mitigation — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Injection_Mitigation)
- Policy-as-Code — [Wikipedia](https://en.wikipedia.org/wiki/Policy-as-Code)
- Supervisor Process — [Wikipedia](https://en.wikipedia.org/wiki/Supervisor_Process)
- Managed Inference Endpoints — [Wikipedia](https://en.wikipedia.org/wiki/Managed_Inference_Endpoints)
- [[concepts/enterprise-ai-security|Enterprise AI Security]] — [Wikipedia](https://en.wikipedia.org/wiki/Enterprise_AI_Security)
- Runtime Key Injection — [Wikipedia](https://en.wikipedia.org/wiki/Runtime_Key_Injection)
- System Resource Restriction — [Wikipedia](https://en.wikipedia.org/wiki/System_Resource_Restriction)
- Host Directory Protection — [Wikipedia](https://en.wikipedia.org/wiki/Host_Directory_Protection)
- Agent Execution Boundary — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Execution_Boundary)

## Related Entities
- [[entities/sam-witteveen|Sam Witteveen]] — [Wikipedia](https://en.wikipedia.org/wiki/Sam_Witteveen)
- [[entities/nvidia|NVIDIA]] — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA)
- OpenShell — [Wikipedia](https://en.wikipedia.org/wiki/OpenShell)
- [[entities/nemoclaw|NemoClaw]] — [Wikipedia](https://en.wikipedia.org/wiki/NemoClaw)
- [[entities/nemotron|Nemotron]] — [Wikipedia](https://en.wikipedia.org/wiki/Nemotron)
- [[entities/openclaw|OpenClaw]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenClaw)
- [[entities/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[entities/langchain|LangChain]] — [Wikipedia](https://en.wikipedia.org/wiki/LangChain)
- DeepAgents — [Wikipedia](https://en.wikipedia.org/wiki/DeepAgents)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)