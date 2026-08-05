---
title: "Qwopus Coder: Agentic Code Self-Correction and MTP-Driven Efficiency"
date: 2026-07-02
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Qwopus Coder: Agentic Code Self-Correction and MTP-Driven Efficiency
Generated: 2026-07-02 · API: Gemini 2.5 Flash · Modes: Summary

---

## Qwopus Coder: Agentic Code Self-Correction and MTP-Driven Efficiency
**Clip title:** Qwopus 35B + MTP: The Coder That Fixes Its Own Bugs at 160 tok/s
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=fjMIAZAHYZ0

### Summary
The video introduces Qwopus 3.6-35B-A3B-Coder, a "thinking-off" and token-efficient coding agent model built on the Qwen 3.6-35B A3B base. Developed by Jackrong, this model features a Mixture of Experts (MoE) architecture, allowing it to activate only 3 billion parameters per token despite its total 35 billion parameters. The core claim is its ability to perform agentic coding tasks—such as reading, editing, running, and fixing code—with significantly fewer tokens per step, thus improving efficiency. The presenter aims to demonstrate this live using the Hermes Agent.

A key technical highlight of the Qwopus Coder is its implementation of Multi-Token Prediction (MTP). Unlike traditional models that predict one token at a time in a sequential forward pass, MTP integrates additional prediction heads directly into the main model's weights. These heads draft several upcoming tokens (e.g., three tokens) simultaneously from the same hidden states computed by the main model. The system then verifies these drafted tokens in the same pass. This architectural choice eliminates the need for a separate draft model, resulting in approximately 20% more tokens generated per second without any extra download or additional computational overhead, thereby enhancing inference speed and efficiency.

For the live demonstration, the presenter sets up an Ubuntu environment with an NVIDIA RTX A6000 GPU. The Qwopus Coder model, a 21.7 GB GGUF file, is downloaded and served locally using `llama.cpp` with specific speculative decoding (MTP) settings, including a `spec-draft-n-max 3` flag to predict three tokens ahead. The Hermes Agent is then configured to interact with this local Qwopus model. The demonstration involves a call center application with known bugs in both its Python Fast API backend and HTML frontend. These bugs include an incorrect API port in the frontend (`9000` instead of `8000`), a wrong HTTP method for call logging (`GET` instead of `POST`), and a typo in a customer ID query.

The Hermes Agent is tasked with identifying and fixing these bugs autonomously. The agent successfully reads the codebase, discerns the issues, corrects them, starts the backend, and verifies the functionality through various API calls and frontend interactions. The corrected application successfully loads, allows customer lookup, and logs new calls. Post-fix, the `llama.cpp` server logs confirm the MTP's efficiency with a "draft acceptance" rate of nearly 98.77%. This indicates that almost all drafted tokens were valid, leading to an impressive generation speed of approximately 160 tokens per second on a single A6000 GPU. The conclusion emphasizes that Qwopus Coder's token-efficient, agentic capabilities, combined with MTP, offer a powerful and performant solution for local coding workflows, minimizing token waste and latency.

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
▶ YouTube:    / @fahdmirza  
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.fahdmirza.com
- https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF
