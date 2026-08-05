---
wiki-ingested: true
title: "Langextract Sam Witteveen"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Langextract [[entities/sam-witteveen|Sam Witteveen]]

---
---
<https://www.youtube.com/watch?v=t-53fouKqWI>
The video introduces **LangExtract**, a new [[concepts/open-source|open-source]] [[entities/python|Python]] library from [[entities/google|Google]], designed for **[[concepts/document-processing|information extraction]]** from [[concepts/unstructured-text|unstructured text]] using [[concepts/gemini-models|Gemini models]]. The [[entities/speaker|speaker]] contrasts this with traditional [[concepts/natural-language-processing|Natural Language Processing (NLP)]] [[concepts/methods|methods]] and the challenges of using large generative [[concepts/large-language-models|Large Language Models (LLMs)]] for such specific, non-generative tasks.
**Context and Problem Statement:**

* (0:23) Standard [[concepts/nlp|NLP]] tasks like [[concepts/text-classification|text classification]], [[concepts/sentiment-analysis|sentiment analysis]], [[concepts/named-entity-recognition|Named Entity Recognition]] (NER), and disambiguation are _not_ generative uses of LLMs.
* (0:54) Historically, these tasks were often handled by **[[entities/bert|BERT]]** [[concepts/models|models]], which are [[concepts/encoder-only-transformers|encoder-only transformers]]. BERT models were excellent for [[concepts/fine-tuning|fine-tuning]] on specific downstream tasks and had a relatively small [[concepts/context-window|context window]] (e.g., 512 [[concepts/tokens|tokens]]).
* (1:27) The original Transformer [[concepts/architecture|architecture]] is split into an encoder (BERT-like, for understanding/encoding) and a decoder (GPT-like, for generation). While decoder-only LLMs like GPT have seen rapid advancements, (3:50) the speaker argues they are often "too big, slow, private, and expensive" for many practical, discriminative NLP jobs like classification, retrieval, and [[concepts/entity-extraction|entity extraction]].
* (4:20) A significant [[concepts/cost|cost]] comparison is provided: filtering 15 trillion tokens cost $60,000 using a fine-tuned BERT-based model, whereas doing the same with a low-cost decoder-only model like [[concepts/gemini|Gemini]] Flash would exceed $1 million, despite the lower per-token cost. This [[concepts/highlights|highlights]] the practical efficiency advantage of encoder-only models for certain workloads.

**LangExtract's [[concepts/solution|Solution]] and Key Features:**

* (5:01) LangExtract is presented as a lightweight, open-source [[concepts/python|Python]] library designed to empower developers to programmatically and reliably extract precise, structured information.
* (5:12) Its core features include: **Precise source grounding:** Every extracted entity is mapped back to its exact [[concepts/integrity|character]] offsets in the original text, allowing for traceability and visual [[concepts/verification|verification]]. **Reliable structured outputs:** Users define their desired output using LangExtract's data representation and provide "few-shot" examples, leveraging Controlled Generation in supported models like Gemini to ensure consistently structured results. This means defining a schema for the output. **Optimized long-context [[concepts/information-extraction|information extraction]]:** Handles [[concepts/knowledge-bases|information retrieval]] from very large documents (e.g., 100,000 words) by using a chunking strategy, [[concepts/parallel-processing|parallel processing]], and multiple extraction passes over smaller, focused contexts. **Interactive visualization:** Provides an easy way to generate self-contained HTML visualizations of extracted entities in context, useful for reviewing annotations. **Flexible support for LLM backends:** Works with preferred cloud-based LLMs (like [[entities/gemini-ai|Google's Gemini]] family) or open-source on-device models (e.g., [[entities/llama|Llama]], [[entities/gemma|Gemma]], Chinese models). **Flexible across domains:** Information extraction tasks for any domain can be defined with just a few well-chosen "few-shot" examples, eliminating the need for extensive fine-tuning of an LLM.

**How it Works ([[concepts/code|Code]] Demonstration):**

* (7:51) The process starts with installing the `langextract` library. If using Gemini, an API key is required.
* The user defines a **concise prompt** specifying what information to extract (e.g., "Extract characters, emotions, and [[concepts/relationships|relationships]]").
* (8:00) **High-quality "few-shot" examples** are provided. These examples include sample text and the expected structured extractions (e.g., character name "ROMEO" with `emotional_state: "wonder"`).
* (8:10) The `lx.extract` function is then called, passing in the input text to be processed, the prompt description, the defined examples, and the chosen Gemini model (e.g., `gemini-2.5-pro` or `gemini-2.5-flash`).
* (8:27) The results can be saved to a JSONL file and interactively visualized as an HTML file, highlighting extracted entities directly in the text.

**Practical Examples and [[concepts/scenarios|Use Cases]]:**

* **Shakespeare Example (7:51):** Demonstrates basic entity and [[concepts/relationship-extraction|relationship extraction]] from famous lines from Romeo and Juliet.
* **Medical Reports (8:40):** Shows how LangExtract can process clinical text to extract structured information like "condition," "dosage," "frequency," and "medication," and their relationships (e.g., `medication_group`).
* **RadExtract Demo (9:11):** An interactive [[entities/hugging-face|Hugging Face]] demo showcasing LangExtract for structuring radiology reports. It transforms unstructured report text into structured findings, with grounded highlights.
* **TechCrunch Article Analysis (9:33):** The speaker demonstrates extracting people's names, [[concepts/ai-models|AI models]], products, and company names from a TechCrunch article. (14:44) Using `gemini-2.5-flash` for efficiency, the extraction processed 11,412 characters, found 74 entities (4 unique types) in about 25 seconds. (15:05) The raw output is a complex structured object, but it can be easily parsed. The speaker shows filtering to print only person names (with associated companies) and company names (with character intervals). (16:28) Demonstrates using Python sets to get unique company names mentioned (e.g., [[entities/google-deepmind|Google DeepMind]], Google, TechCrunch, AI2, [[entities/openai|OpenAI]], Perplexity, [[concepts/xai|xAI]], [[entities/anthropic|Anthropic]], [[entities/meta|Meta]] Superintelligence [[entities/labs|Labs]]). (17:09) Shows extraction of AI models and products, noting that `o1` and `Strawberry` were classified as AI models, while `ChatGPT` and `Codex` were products. Some [[concepts/ambiguity|ambiguity]] is observed (e.g., `ChatGPT` classified as both product and AI model), which the speaker suggests could be improved by refining the prompt.

**Conclusion:**

* (18:43) LangExtract allows users to define custom extraction tasks and output schemas, making it flexible for various domains like medicine, finance, and engineering.
* (19:40) Overall, LangExtract is presented as a valuable and practical library for information extraction, offering an efficient way to extract [[concepts/structured-data|structured data]] from unstructured text without the overhead of [[concepts/training|training]] bespoke models or relying solely on expensive, large generative LLMs. It enables [[concepts/rapid-prototyping|quick prototyping]] and can be readily deployed in production environments.