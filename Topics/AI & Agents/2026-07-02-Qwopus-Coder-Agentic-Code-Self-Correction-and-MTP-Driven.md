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
aliases:
  - "lab-notes/2026-07-02-Qwopus-Coder-Agentic-Code-Self-Correction-and-MTP-Driven"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

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

#qwopus 

▶ LinkedIn:    / fahdmirza  
▶ [[entities/youtube|YouTube]]:    / @fahdmirza  

▶ https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF

## Related Concepts
- [[concepts/agentic-code-self-correction|Agentic Code Self-Correction]]
- [[concepts/mixture-of-experts|Mixture of Experts]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_experts)
- [[concepts/token-generation-speed|Multi-Token Prediction]]
- [[concepts/token-usage-optimization|Token Efficiency]]
- [[concepts/parameter-activation|Parameter Activation]]
- [[concepts/smart-coding-agent|Coding Agent]]
- [[concepts/pre-trained-model|Base Model]]
- [[concepts/thinking-off-mode|Thinking-Off Mode]]
- [[concepts/bug-fixing|Bug Fixing]]
- [[concepts/token-per-second|Token Per Second]]
- [[concepts/speculative-decoding|Speculative Decoding]] — [Wikipedia](https://en.wikipedia.org/wiki/Speculative_decoding)
- [[concepts/local-inference|Local Inference]]
- [[concepts/gguf-format|GGUF Format]]

## Related Entities
- [[entities/qwopus-coder|Qwopus Coder]]
- [[entities/qwopus-36-35b-a3b-coder|Qwopus 3.6-35B-A3B-Coder]]
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/qwen-36-35b-a3b|Qwen 3.6-35B A3B]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[entities/llamacpp|llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- Fast API — [Wikipedia](https://en.wikipedia.org/wiki/FastAPI)