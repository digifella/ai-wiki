---
wiki-ingested: true
title: "Gemma 4 Chat Template Fix: Preserving Reasoning for Enhanced Agentic Performance"
date: 2026-06-10
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-10 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Gemma 4 Chat Template Fix: Preserving Reasoning for Enhanced Agentic Performance
**Clip title:** [[concepts/23b-parameter-models|Gemma 4]] Was Broken for Agents - [[concepts/google-search|Google]] Just Fixed It
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=FWKkfIftR68

### Summary
This video addresses a critical bug fix in [[concepts/google-search|Google]]'s [[concepts/23b-parameter-models|Gemma 4]] [[concepts/large-language-model|large language model]], specifically the 12B QAT (Quantization-Aware Training) version, which significantly enhances its multi-turn conversational and [[concepts/agentic-performance|agentic performance]]. The [[entities/speaker|speaker]] highlights that while Gemma 4 was already considered a good model, a subtle but impactful issue within its official chat template was hindering its advanced capabilities, often without users realizing it. This week, Google released a fix that rectifies this underlying problem.

The core of the problem lay in how input was processed before reaching the Gemma 4 model. Messages, [[concepts/conversation-history|conversation history]], and [[concepts/tool-definitions|tool definitions]] are wrapped into the model's native format via a Jinja chat template. The original Gemma 4 template contained four bugs, the most crucial of which caused the model's "[[concepts/reasoning|reasoning]]" to be discarded [[concepts/assistive-technology|at]] the end of every turn. This meant that in multi-step conversations or [[concepts/agentic-tasks|agentic tasks]], the model would essentially start from scratch with each new input, losing coherence and failing to retain its chain of thought. This often led to misbehavior or collapsed arguments in tool calls, making the model appear less capable than it actually was, when the fault was solely with the input formatting template.

Google's [[concepts/solution|solution]] was to introduce and enable a `preserve_thinking` flag within the chat template. By setting this flag to `true`, the model's internal [[concepts/reasoning-steps|reasoning process]] is no longer discarded after each turn, allowing it to maintain context and build upon its previous thoughts throughout extended interactions. The video demonstrates this fix by running the [[concepts/gemma-4-12b|Gemma 4 12B]] QAT model locally using `llama.cpp` and [[concepts/agentic-ai|Hermes Agent]]. The live demonstration shows the [[concepts/system-prompt|system prompt]] now clearly indicating the "think" token is enabled, and during [[concepts/complex-tasks|complex tasks]], the console displays "reasoning-budget: activated" with vast [[concepts/token-consumption|token consumption]], confirming the model is actively preserving and utilizing its thought chain.

The practical impact of this fix is profound, unlocking Gemma 4's full potential for complex, multi-turn, and [[concepts/agentic-applications|agentic applications]]. The demonstration successfully illustrates the model's improved ability to read, understand, and make consistent changes across multiple [[concepts/files|files]], a task that relies heavily on [[concepts/coherent-reasoning|coherent reasoning]]. The model achieved an impressive generation [[concepts/speed|speed]] of approximately 98 [[concepts/tokens|tokens]] per second for a 91,000-token response, further emphasizing the efficiency of running these enhanced models locally. This groundbreaking change transforms Gemma 4 into a much more robust and intelligent tool for advanced [[concepts/ai-development|AI development]], underscoring the [[concepts/value|value]] of local models for detailed and cost-effective reasoning.

### Video Description & Links
#### Description
Google fixed a real bug in Gemma 4's chat template that was silently breaking [[concepts/multi-turn-agent-performance|multi-turn agent performance]].

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon [[concepts/code|code]]: FahdMirza

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

## Related Concepts
- [[concepts/gemma-4|Gemma 4]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemma_4)
- [[concepts/agentic-performance|Agentic Performance]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Performance)
- [[concepts/conversational-ai|Conversational AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Conversational_AI)
- [[concepts/reasoning-preservation|Reasoning Preservation]] — [Wikipedia](https://en.wikipedia.org/wiki/Reasoning_Preservation)
- [[concepts/quantization-aware-training-qat|Quantization-Aware Training (QAT)]] — [Wikipedia](https://en.wikipedia.org/wiki/Quantization-Aware_Training_%28QAT%29)
- Chat Template Fix — [Wikipedia](https://en.wikipedia.org/wiki/Chat_Template_Fix)
- Multi-turn Conversations — [Wikipedia](https://en.wikipedia.org/wiki/Multi-turn_Conversations)
- [[concepts/step-by-step-reasoning|Chain of Thought]] — [Wikipedia](https://en.wikipedia.org/wiki/Chain_of_Thought)
- Jinja Chat Template — [Wikipedia](https://en.wikipedia.org/wiki/Jinja_Chat_Template)
- preserve_thinking Flag — [Wikipedia](https://en.wikipedia.org/wiki/preserve_thinking_Flag)
- Tool Calls — [Wikipedia](https://en.wikipedia.org/wiki/Tool_Calls)
- [[concepts/context-window|Context Retention]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Retention)
- [[concepts/on-device-processing|Local AI Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_AI_Inference)
- [[concepts/workflow-transformation|llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/llama.cpp)

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/gemma-4|Gemma 4]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemma_4)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/llamacpp|llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/llama.cpp)
- [[entities/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)