---
wiki-ingested: true
title: Budget GPU Local Coding Agent Performance Optimization Report
date: 2026-05-31
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-05-31 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Budget GPU Local Coding Agent Performance Optimization Report
**Clip title:** Build Powerful Local [[concepts/coding|Coding]] Agent on Budget GPU with [[concepts/inference-engine|Llama.cpp]] and Pi
**Author / channel:** Codacus
**URL:** https://www.youtube.com/watch?v=0AqpaFm11oI

### Summary
This video explores the feasibility and methodology of running a powerful mid-tier coding agent locally on a budget GPU, aiming for a responsive [[concepts/experience|experience]] comparable to [[concepts/cloud-based-solutions|cloud-based solutions]]. The main topic is to demonstrate how to achieve [[entities/high-performance|high performance]] (specifically 1142 tokens/second for prompt processing and 40 tokens/second for decoding) for a [[concepts/local-gpt|local Large Language Model]] (LLM) agent using optimized [[concepts/hardware|hardware]], model, engine, agent layer, and network configurations. The core challenge addressed is the demanding nature of [[concepts/agentic-ai|AI agents]], which require processing large volumes of context, [[concepts/instructions|instructions]], and files multiple times, often bottlenecked by slower offloading mechanisms on consumer-grade hardware.

The video outlines five key areas for optimization. First, for **Hardware Selection**, a used [[concepts/nvidia-rtx|NVIDIA RTX]] 3060 (12GB GDDR6 VRAM) priced around $280 is recommended for its adequate VRAM, coupled with DDR4 RAM and a 4-core CPU. The crucial insight here is understanding the offload trade-off: fully loading a model into VRAM is fastest, but for budget setups, offloading to CPU and system RAM is necessary. Performance in this scenario is bottlenecked by PCI bandwidth, RAM speed (DDR4 is estimated around 54 GB/s), and CPU cores. Second, for **Model Selection**, [[concepts/mixture-of-experts|Mixture of Experts]] (MoE) architectures are preferred over dense models due to their superior efficiency per parameter, achieving comparable performance to much larger dense models by selectively activating only relevant "experts." The video emphasizes that even [[concepts/frontier-models|frontier models]] like GPT-5 and [[concepts/claude-ai|Claude]] utilize MoE, validating its efficiency.

Third, **Engine Optimization** focuses on tuning `llama.cpp` for agent workloads. The video highlights the distinction between token generation (decode speed) and prompt processing (prefill speed), emphasizing that prefill speed is critical for agents. Key optimizations include `cache-reuse` to accelerate subsequent agent turns by only reprocessing changed chunks of the prompt, and careful tuning of `threads` (CPU cores for the LLM) and `u-batch` (tokens pulled from memory per batch) using `llama-bench`. It's advised to leave one CPU core for system tasks and, for bandwidth-bound setups, increasing `u-batch` can significantly boost prefill speed at the cost of VRAM. Further gains can be achieved through KV compression ([[concepts/ai-efficiency|TurboQuant]]), which frees VRAM by losslessly compressing keys and values, allowing more [[concepts/model-layers|model layers]] to reside on the GPU.

Fourth, the **Agent Layer** utilizes the `pi-coding-agent`, chosen for its lightweight, customizable nature and native `llama.cpp` support, eliminating the need for additional middleware. This setup allows the agent to directly interact with the `llama-server`. Fifth, the **[[concepts/internet-layer|Network Layer]]** addresses the need for flexible model management and [[concepts/remote-access|remote access]]. By configuring `llama-server` with `models.ini` presets, users can define multiple models with their optimal settings and seamlessly swap between them via the `pi-coding-agent` without restarting the server. For "anywhere" access, Tailscale is recommended to create a secure, mesh VPN, allowing the [[concepts/local-ai|local AI]] rig to be accessed from any device with Tailscale installed (e.g., a laptop at a coffee shop), providing a cloud-like coding experience.

In conclusion, the video successfully demonstrates a comprehensive recipe for building a powerful, local mid-[[concepts/frontier-ai|frontier AI]] agent on budget hardware. The key takeaway is that for [[concepts/agentic-patterns|agentic workflows]], prioritizing and optimizing *prompt processing (prefill) speed* is more critical than raw token generation (decode) speed. By combining an affordable GPU (like a used RTX 3060) with an efficient MoE model, expertly tuned `llama.cpp` [[concepts/parameters|parameters]], a native coding agent, and remote access via Tailscale, users can achieve a high-performance, subscription-free [[concepts/ai-assisted-coding|AI coding]] environment that runs entirely on their own machine, offering significant autonomy and cost savings.

### Video Description & Links
#### Description
Everyone benchmarks Local AI using [[concepts/token-generation-speed|token generation speed]].
I did too.
Then I built a real coding agent and realized something:
The agent wasn't slow because of decode speed.
It was slow because of prefill.

In this video I build a complete local [[concepts/autonomous-ai-coding-agent|AI coding agent]] stack using an RTX 3060 12GB, REAP MoE models, llama.cpp, Pi Coding Agent, and Tailscale — then tune prompt processing all the way up to 1,142 tokens/sec.

Along the way we'll cover:

• Why prefill matters more than decode for agent workloads
• REAP models and MoE efficiency on 12GB VRAM
• [[concepts/data-compression|KV cache compression]] with TurboQuant
• Pi Coding [[concepts/agent-configuration|Agent setup]] and model hot-swapping
• Running your [[concepts/local-ai-agent|local AI agent]] from anywhere with Tailscale

No [[concepts/api-keys|API keys]].
No subscriptions.
No [[concepts/rate-limits|rate limits]].
Just Local AI.

━━━━━━━━━━━━━━━━━━━━

📚 Chapters

00:00 Cold Open
00:58 Hardware
03:30 Best [[concepts/mobile-ai|Local AI Models]] (REAP + MoE)
07:35 llama.cpp Optimization (Prefill Tuning)
11:48 Pi Coding Agent Setup
13:55 Tailscale & Remote Access
16:19 Final Build & Takeaways

━━━━━━━━━━━━━━━━━━━━

🔧 Models Used

Qwen3.6-28B-REAP20-A3B-GGUF
https://huggingface.co/barozp/Qwen3.6-28B-REAP20-A3B-GGUF

GLM-4.7-Flash-REAP-23B-A3B-GGUF
https://huggingface.co/unsloth/GLM-4.7-Flash-REAP-23B-A3B-GGUF

━━━━━━━━━━━━━━━━━━━━

⚡ TurboQuant Fork Used

https://github.com/TheTom/llama-cpp-turboquant

━━━━━━━━━━━━━━━━━━━━

🛠️ Stack

• RTX 3060 12GB
• llama.cpp
• TurboQuant
• Pi Coding Agent
• Tailscale
• Qwen3.6 REAP
• [[concepts/advanced-coding|GLM-4.7]] Flash REAP

━━━━━━━━━━━━━━━━━━━━

#localai  #llamacpp  #aiagents  #qwen  #glm  #codingagent  #rtx3060  #selfhostedai   #homelab  #opensourceai  #moe

#### Tags
`localai`, `codacus`, `homelab`, `local ai`, `ai agent`, `coding agent`, `local coding agent`, `llama.cpp`, `prompt processing`, `prefill`, `local llm`, `self hosted ai`, `rtx 3060`, `budget gpu ai`, `28b model`, `qwen`, `glm`, `reap`, `moe model`, `pi coding agent`, `tailscale`

#### URLs
- https://huggingface.co/barozp/Qwen3.6-28B-REAP20-A3B-GGUF
- https://huggingface.co/unsloth/GLM-4.7-Flash-REAP-23B-A3B-GGUF
- https://github.com/TheTom/llama-cpp-turboquant

## Related Concepts
- [[concepts/budget-gpu|Budget GPU]] — [Wikipedia](https://en.wikipedia.org/wiki/Budget_GPU)
- [[concepts/local-coding-agent|Local Coding Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Coding_Agent)
- [[concepts/workflow-transformation|Performance Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Performance_Optimization)
- [[concepts/workflow-transformation|Llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- [[concepts/pi|Pi]] — [Wikipedia](https://en.wikipedia.org/wiki/Pi)
- [[concepts/prompt-processing|Prompt Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Processing)
- [[concepts/large-language-model-llm|Large Language Model (LLM)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Model_%28LLM%29)
- [[concepts/local-coding-agent|Pi Coding Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Pi_Coding_Agent)
- Prefill Speed — [Wikipedia](https://en.wikipedia.org/wiki/Prefill_Speed)
- Decode Speed — [Wikipedia](https://en.wikipedia.org/wiki/Decode_Speed)
- [[concepts/mixture-of-experts|Mixture of Experts]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_Experts)
- [[concepts/mixture-of-experts-moe-conceptsarchitecturearchitecture|MoE Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/MoE_Architecture)
- KV Compression — [Wikipedia](https://en.wikipedia.org/wiki/KV_Compression)
- [[concepts/model-compression|TurboQuant]] — [Wikipedia](https://en.wikipedia.org/wiki/TurboQuant)
- PCI Bandwidth — [Wikipedia](https://en.wikipedia.org/wiki/PCI_Bandwidth)
- VRAM Offloading — [Wikipedia](https://en.wikipedia.org/wiki/VRAM_Offloading)
- u-batch Tuning — [Wikipedia](https://en.wikipedia.org/wiki/u-batch_Tuning)
- Cache Reuse — [Wikipedia](https://en.wikipedia.org/wiki/Cache_Reuse)

## Related Entities
- [[entities/codacus|Codacus]] — [Wikipedia](https://en.wikipedia.org/wiki/Codacus)
- [[entities/nvidia|NVIDIA]] — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA)
- RTX 3060 — [Wikipedia](https://en.wikipedia.org/wiki/RTX_3060)
- [[entities/llamacpp|Llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- Pi — [Wikipedia](https://en.wikipedia.org/wiki/Pi)
- pi-coding-agent — [Wikipedia](https://en.wikipedia.org/wiki/pi-coding-agent)
- llama-server — [Wikipedia](https://en.wikipedia.org/wiki/llama-server)
- [[entities/gpt-5|GPT-5]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-5)
- [[entities/claude|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)
- Tailscale — [Wikipedia](https://en.wikipedia.org/wiki/Tailscale)
- DDR4 — [Wikipedia](https://en.wikipedia.org/wiki/DDR4)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)