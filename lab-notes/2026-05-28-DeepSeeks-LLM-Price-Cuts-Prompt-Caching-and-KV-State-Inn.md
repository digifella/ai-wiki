---
wiki-ingested: true
title: "DeepSeek's LLM Price Cuts: Prompt Caching and KV State Innovations"
date: 2026-05-28
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: reasoning-context-prompting
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-05-28 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: [[concepts/summary|Summary]]

---

## DeepSeek's LLM Price Cuts: Prompt Caching and KV State Innovations
**[[concepts/clip-title|Clip title]]:** DeepSeek’s Price Cut Wasn’t Magic
**Author / channel:** [[concepts/prompt-based-modeling|Prompt Engineering]]
**URL:** https://www.youtube.com/watch?v=HDMqDV7mmGo

### Summary
This video delves into the increasingly relevant topic of **prompt [[concepts/caching|caching]]** in the context of [[concepts/large-language-model-llm|large language models]] (LLMs), particularly as major [[entities/ai-labs|AI labs]] raise their prices. It [[concepts/highlights|highlights]] how DeepSeek has bucked this trend by drastically cutting prices for its V4 Pro model, achieving a 75% reduction on non-cached input. The core question addressed is how one provider can cut prices so significantly while others increase them, and how developers can achieve similar cost savings. The answer lies in understanding LLM request mechanics and employing intelligent caching strategies.

An LLM request operates in two distinct phases: prefill and decode. The prefill [[concepts/phase|phase]], where the entire prompt is processed in parallel, is "compute-bound" due to [[concepts/attention-mechanisms|attention]] costs [[concepts/computational-scaling|scaling]] quadratically with input size (O(N^2)), accounting for approximately 90% of the "time to first token." The decode phase, emitting one token at a time, is "bandwidth-bound" as it repeatedly rereads full [[concepts/model-weights|model weights]]. The key insight for optimization is that if the prefill work can be skipped by reusing calculations from an earlier, identical prompt, both cost and latency can be significantly reduced. This is achieved through the KV cache, which stores the reusable Key (K) and [[concepts/value|Value]] (V) vectors generated for each token, as these vectors depend only on the token, its position, and the model's weights, not subsequent [[concepts/tokens|tokens]]. Studies show prompt caching can yield 41-80% cost savings.

DeepSeek's remarkable price reduction stems from an [[concepts/architectural-innovation|architectural innovation]]: caching the KV state to *disk* rather than expensive [[concepts/high-bandwidth-memory-hbm|high-bandwidth memory (HBM)]]. This seemingly counter-intuitive approach works because DeepSeek's Multi-head Latent Attention (MLA) technology cuts the KV cache size by 93% compared to standard [[concepts/multi-head-attention|multi-head attention]]. With such a small cache, streaming the necessary data off cheap, pooled disk arrays across [[concepts/nodes|nodes]] becomes faster than recomputing the prefill from scratch on a GPU. This allows DeepSeek to price cache hits at an exceptionally low rate, as they are not subsidizing the cost but rather reflecting their efficient [[concepts/architecture|architecture]].

For developers looking to leverage caching, the video outlines a "[[concepts/ai-assisted-coding|Claude Code]] discipline" based on a 4-layer cache [[concepts/hierarchy|hierarchy]] (static system prompt/tools, project context, [[concepts/session|session]] context, and conversation). Changes in lower, more volatile layers (like conversation) keep higher, more stable layers cached. However, changes to higher layers (like the [[concepts/system-prompt|system prompt]] or [[concepts/tool-definitions|tool definitions]]) invalidate the entire cache. Therefore, the practical takeaway is to [[concepts/design|design]] prompts to minimize cache "busters." This means picking your model at the start, connecting servers at the beginning of a session, avoiding dynamic timestamps in static [[concepts/system-prompts|system prompts]], using compaction at natural breaks between tasks (not mid-task), and managing model upgrades carefully. The unifying principle is to use messages for dynamic information rather than modifying the system prompt, thus preserving the cache. Claude Code itself employs cache-friendly design patterns, such as implementing "plan mode" as two distinct tools and using the parent's exact prefix for compaction prompts to ensure cache hits. Adhering to these practices, like preferring `/rewind` over `/compact` to abandon paths, is crucial for maximizing cache utilization and controlling costs.

### Video Description & Links
#### Description
Thanks to Descope for sponsoring this video, checkout [[entities/agent|Agent]] Identify Hub: https://descope.plug.dev/BWwF1nd

I break down why AI model prices are rising at most labs while DeepSeek cut V4 Pro [[concepts/pricing|pricing]] by 75%, and why prompt caching is the key. I explain the two phases of an LLM request (compute-bound prefill vs memory-bound decode), what the KV cache stores, and why reusing cached prefixes can cut cost and latency, citing the “Don’t Break the Cache” paper’s reported savings. I then cover how DeepSeek’s multi-head latent attention (MLA) shrinks KV cache enough to store it on a distributed disk array instead of expensive HBM, enabling cheap cache-hit pricing. Finally, I share Anthropic/Claude Code’s cache-preserving request [[concepts/structure|structure]] and the main cache-busters (model/tool changes, dynamic system prompts, naive compaction, upgrades), plus cache-friendly patterns like plan mode tools, cache-safe compaction, and using /rewind.

00:00 AI Price Wars
01:11 Prompt Caching Explained
02:29 What KV Cache Stores
03:53 DeepSeek Disk Caching
05:55 Sponsor Agent Identity
07:48 Claude Code Cache Layers
08:42 Five Cache Busters
11:22 Messages Not Prompts
12:17 Cache Friendly Features

My [[concepts/tone|voice]] to text App: whryte.com
Website: https://engineerprompt.ai/
RAG Beyond Basics Course:
https://prompt-s-site.thinkific.com/courses/rag
Signup for Newsletter, localgpt:
https://tally.so/r/3y9bb0

Let's Connect: 
🦾 Discord: https://discord.com/invite/t4eYQRUcXB
☕ Buy me a Coffee: https://ko-fi.com/promptengineering
|🔴 Patreon: https://www.patreon.com/PromptEngineering
💼[[concepts/consulting|Consulting]]: https://calendly.com/engineerprompt/consulting-call
📧 Business [[entities/contact|Contact]]: engineerprompt@[[entities/gmail|gmail]].com
Become Member: http://tinyurl.com/y5h28s6h

💻 Pre-configured localGPT VM: https://bit.ly/localGPT (use Code: PromptEngineering for 50% off).  

Signup for Newsletter, localgpt:
https://tally.so/r/3y9bb0

#### Tags
`prompt engineering`, `Prompt Engineer`, `LLMs`, `AI`, `artificial Intelligence`, `Llama`, `GPT-4`, `fine-tuning LLMs`

#### URLs
- https://descope.plug.dev/BWwF1nd
- https://engineerprompt.ai/
- https://prompt-s-site.thinkific.com/courses/rag
- https://tally.so/r/3y9bb0
- https://discord.com/invite/t4eYQRUcXB
- https://ko-fi.com/promptengineering
- https://www.patreon.com/PromptEngineering
- https://calendly.com/engineerprompt/consulting-call
- http://tinyurl.com/y5h28s6h
- https://bit.ly/localGPT

## Related Concepts
- [[concepts/prompt-caching|Prompt Caching]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Caching)
- [[concepts/large-language-models|Large Language Models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLMs%29)
- [[concepts/kv-state-innovations|KV State Innovations]] — [Wikipedia](https://en.wikipedia.org/wiki/KV_State_Innovations)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- LLM Request Mechanics — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Request_Mechanics)
- Prefill Phase — [Wikipedia](https://en.wikipedia.org/wiki/Prefill_Phase)
- Decode Phase — [Wikipedia](https://en.wikipedia.org/wiki/Decode_Phase)
- Compute-bound Processing — [Wikipedia](https://en.wikipedia.org/wiki/Compute-bound_Processing)
- Bandwidth-bound Processing — [Wikipedia](https://en.wikipedia.org/wiki/Bandwidth-bound_Processing)
- Key-Value Cache — [Wikipedia](https://en.wikipedia.org/wiki/Key-Value_Cache)
- Multi-head Latent Attention — [Wikipedia](https://en.wikipedia.org/wiki/Multi-head_Latent_Attention)
- Disk-based KV Caching — [Wikipedia](https://en.wikipedia.org/wiki/Disk-based_KV_Caching)
- Cache Hierarchy — [Wikipedia](https://en.wikipedia.org/wiki/Cache_Hierarchy)
- Cache Invalidation — [Wikipedia](https://en.wikipedia.org/wiki/Cache_Invalidation)
- [[concepts/system-prompt-optimization|System Prompt Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/System_Prompt_Optimization)

## Related Entities
- [[entities/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [[entities/deepseek|DeepSeek]] — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek)
- V4 Pro — [Wikipedia](https://en.wikipedia.org/wiki/V4_Pro)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- Descope — [Wikipedia](https://en.wikipedia.org/wiki/Descope)
- Agent Identify Hub — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Identify_Hub)
- GPU — [Wikipedia](https://en.wikipedia.org/wiki/GPU)
- HBM — [Wikipedia](https://en.wikipedia.org/wiki/HBM)
- MLA — [Wikipedia](https://en.wikipedia.org/wiki/MLA)