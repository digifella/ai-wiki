---
title: "Gemma 4 Chat Template Fix: Preserving Reasoning for Enhanced Agentic Performance"
date: 2026-06-10
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Gemma 4 Chat Template Fix: Preserving Reasoning for Enhanced Agentic Performance
Generated: 2026-06-10 · API: Gemini 2.5 Flash · Modes: Summary

---

## Gemma 4 Chat Template Fix: Preserving Reasoning for Enhanced Agentic Performance
**Clip title:** Gemma 4 Was Broken for Agents - Google Just Fixed It
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=FWKkfIftR68

### Summary
This video addresses a critical bug fix in Google's Gemma 4 large language model, specifically the 12B QAT (Quantization-Aware Training) version, which significantly enhances its multi-turn conversational and agentic performance. The speaker highlights that while Gemma 4 was already considered a good model, a subtle but impactful issue within its official chat template was hindering its advanced capabilities, often without users realizing it. This week, Google released a fix that rectifies this underlying problem.

The core of the problem lay in how input was processed before reaching the Gemma 4 model. Messages, conversation history, and tool definitions are wrapped into the model's native format via a Jinja chat template. The original Gemma 4 template contained four bugs, the most crucial of which caused the model's "reasoning" to be discarded at the end of every turn. This meant that in multi-step conversations or agentic tasks, the model would essentially start from scratch with each new input, losing coherence and failing to retain its chain of thought. This often led to misbehavior or collapsed arguments in tool calls, making the model appear less capable than it actually was, when the fault was solely with the input formatting template.

Google's solution was to introduce and enable a `preserve_thinking` flag within the chat template. By setting this flag to `true`, the model's internal reasoning process is no longer discarded after each turn, allowing it to maintain context and build upon its previous thoughts throughout extended interactions. The video demonstrates this fix by running the Gemma 4 12B QAT model locally using `llama.cpp` and Hermes Agent. The live demonstration shows the system prompt now clearly indicating the "think" token is enabled, and during complex tasks, the console displays "reasoning-budget: activated" with vast token consumption, confirming the model is actively preserving and utilizing its thought chain.

The practical impact of this fix is profound, unlocking Gemma 4's full potential for complex, multi-turn, and agentic applications. The demonstration successfully illustrates the model's improved ability to read, understand, and make consistent changes across multiple files, a task that relies heavily on coherent reasoning. The model achieved an impressive generation speed of approximately 98 tokens per second for a 91,000-token response, further emphasizing the efficiency of running these enhanced models locally. This groundbreaking change transforms Gemma 4 into a much more robust and intelligent tool for advanced AI development, underscoring the value of local models for detailed and cost-effective reasoning.

### Video Description & Links
#### Description
Google fixed a real bug in Gemma 4's chat template that was silently breaking multi-turn agent performance.

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon code: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#gemma4 #gemma12b #gemma412b #gemma4qat 

PLEASE FOLLOW ME: 
▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.fahdmirza.com
- https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf
