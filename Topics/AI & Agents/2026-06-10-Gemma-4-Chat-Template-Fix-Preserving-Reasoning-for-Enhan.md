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
aliases:
  - "lab-notes/2026-06-10-Gemma-4-Chat-Template-Fix-Preserving-Reasoning-for-Enhan"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

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

#gemma4 #gemma12b #gemma412b #gemma4qat 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

▶ https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf

## Related Concepts
- [[concepts/gemma-4|Gemma 4]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemma_%28language_model%29)
- [[concepts/agentic-performance|Agentic Performance]]
- [[concepts/conversational-ai|Conversational AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Chatbot)
- [[concepts/reasoning-preservation|Reasoning Preservation]]
- [[concepts/quantization-aware-training-qat|Quantization-Aware Training (QAT)]]
- [[concepts/step-by-step-reasoning|Chain of Thought]]
- [[concepts/context-window|Context Retention]]
- [[concepts/on-device-processing|Local AI Inference]]
- [[concepts/workflow-transformation|llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/gemma-4|Gemma 4]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemma_%28language_model%29)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/llamacpp|llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- [[entities/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)