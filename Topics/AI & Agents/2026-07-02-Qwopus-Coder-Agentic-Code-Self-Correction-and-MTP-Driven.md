---
wiki-ingested: true
title: "Qwopus Coder: Agentic Code Self-Correction and MTP-Driven Efficiency"
date: 2026-07-02
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

Generated: 2026-07-02 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Qwopus Coder: Agentic Code Self-Correction and MTP-Driven Efficiency
**Clip title:** Qwopus 35B + MTP: The Coder That Fixes Its Own Bugs at 160 tok/s
**[[entities/tasia-custode|Author]] / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=fjMIAZAHYZ0

### Summary
The video introduces [[entities/qwen-36-35b-a3b|Qwopus 3.6-35B-A3B-Coder]], a "thinking-off" and token-efficient [[entities/codepal|coding agent]] model built on the [[concepts/qwen-36-35b-a3b|Qwen 3.6-35B]] A3B base. Developed by Jackrong, this model features a [[entities/mixture-of-experts|Mixture of Experts]] (MoE) architecture, allowing it to activate only 3 billion parameters per token despite its total 35 billion parameters. The core claim is its ability to perform [[concepts/autonomous-ai-coding-agent|agentic coding]] tasks—such as reading, editing, running, and fixing code—with significantly fewer [[concepts/tokens|tokens]] per step, thus improving efficiency. The presenter aims to demonstrate this live using the [[concepts/agentic-ai|Hermes Agent]].

A key technical highlight of the [[entities/qwopus-coder|Qwopus Coder]] is its implementation of [[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]]. Unlike traditional models that predict one token at a time in a sequential [[concepts/inference|forward pass]], MTP integrates additional [[concepts/user-attention-prediction|prediction]] heads directly into the main model's [[concepts/parameters|weights]]. These heads [[concepts/draft|draft]] several upcoming tokens (e.g., three tokens) simultaneously from the same hidden states computed by the main model. The system then verifies these drafted tokens in the same pass. This architectural choice eliminates the need for a separate [[concepts/draft-model|draft model]], resulting in approximately 20% more tokens generated per second without any extra download or additional computational overhead, thereby enhancing [[concepts/llm-inference-speed|inference speed]] and efficiency.

For the live demonstration, the presenter sets up an Ubuntu environment with an [[concepts/nvidia-rtx|NVIDIA RTX]] A6000 GPU. The Qwopus Coder model, a 21.7 GB [[concepts/gguf|GGUF]] file, is downloaded and served locally using `llama.cpp` with specific [[concepts/llm-inference-acceleration|speculative decoding]] (MTP) settings, including a `spec-draft-n-max 3` flag to predict three tokens ahead. The Hermes Agent is then configured to interact with this local Qwopus model. The demonstration involves a call center application with known bugs in both its [[concepts/python|Python]] Fast API backend and HTML frontend. These bugs include an incorrect API port in the frontend (`9000` instead of `8000`), a wrong HTTP method for call logging (`GET` instead of `POST`), and a typo in a customer ID query.

The Hermes Agent is tasked with identifying and fixing these bugs autonomously. The agent successfully reads the [[concepts/code|codebase]], discerns the issues, corrects them, starts the backend, and verifies the functionality through various [[entities/api-calls|API calls]] and frontend interactions. The corrected application successfully loads, allows customer lookup, and logs new calls. Post-fix, the `llama.cpp` server logs confirm the MTP's efficiency with a "draft acceptance" rate of nearly 98.77%. This indicates that almost all drafted tokens were valid, leading to an impressive generation speed of approximately 160 [[concepts/text-generation-speed|tokens per second]] on a single A6000 GPU. The conclusion emphasizes that Qwopus Coder's token-efficient, agentic capabilities, combined with MTP, offer a powerful and performant [[concepts/solution|solution]] for [[concepts/developer-productivity|local coding workflows]], minimizing token waste and latency.

### Video Description & Links
#### Description
This video locally installs tests Qwopus-3.6-35B-A3B-Coder, a
 thinking-off, token-efficient coding agent model.

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon code: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#qwopus 

PLEASE FOLLOW ME: 
▶ LinkedIn:    / fahdmirza  
▶ [[entities/youtube|YouTube]]:    / @fahdmirza  
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.fahdmirza.com
- https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF

## Related Concepts
- [[concepts/agentic-code-self-correction|Agentic Code Self-Correction]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Code_Self-Correction)
- [[concepts/mixture-of-experts|Mixture of Experts]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_Experts)
- [[concepts/token-generation-speed|Multi-Token Prediction]] — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Token_Prediction)
- [[concepts/token-usage-optimization|Token Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Token_Efficiency)
- [[concepts/parameter-activation|Parameter Activation]] — [Wikipedia](https://en.wikipedia.org/wiki/Parameter_Activation)
- [[concepts/smart-coding-agent|Coding Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Coding_Agent)
- [[concepts/pre-trained-model|Base Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Base_Model)
- [[concepts/thinking-off-mode|Thinking-Off Mode]] — [Wikipedia](https://en.wikipedia.org/wiki/Thinking-Off_Mode)
- [[concepts/bug-fixing|Bug Fixing]] — [Wikipedia](https://en.wikipedia.org/wiki/Bug_Fixing)
- [[concepts/token-per-second|Token Per Second]] — [Wikipedia](https://en.wikipedia.org/wiki/Token_Per_Second)
- [[concepts/speculative-decoding|Speculative Decoding]] — [Wikipedia](https://en.wikipedia.org/wiki/Speculative_Decoding)
- Draft Acceptance Rate — [Wikipedia](https://en.wikipedia.org/wiki/Draft_Acceptance_Rate)
- [[concepts/local-inference|Local Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Inference)
- [[concepts/gguf-format|GGUF Format]] — [Wikipedia](https://en.wikipedia.org/wiki/GGUF_Format)
- Hidden States — [Wikipedia](https://en.wikipedia.org/wiki/Hidden_States)
- Sequential Forward Pass — [Wikipedia](https://en.wikipedia.org/wiki/Sequential_Forward_Pass)

## Related Entities
- [[entities/qwopus-coder|Qwopus Coder]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwopus_Coder)
- [[entities/qwopus-36-35b-a3b-coder|Qwopus 3.6-35B-A3B-Coder]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwopus_3.6-35B-A3B-Coder)
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- [[entities/qwen-36-35b-a3b|Qwen 3.6-35B A3B]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.6-35B_A3B)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- Jackrong — [Wikipedia](https://en.wikipedia.org/wiki/Jackrong)
- [[entities/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[entities/llamacpp|llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/llama.cpp)
- NVIDIA RTX A6000 — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA_RTX_A6000)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- Fast API — [Wikipedia](https://en.wikipedia.org/wiki/Fast_API)