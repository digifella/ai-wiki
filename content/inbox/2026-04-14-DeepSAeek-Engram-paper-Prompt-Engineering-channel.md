---
wiki-ingested: true
title: "DeepSAeek Engram paper - Prompt Engineering channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: reasoning-context-prompting
---
# DeepSAeek [[entities/engram|Engram]] paper - [[concepts/prompt-engineering|Prompt Engineering]] channel

---
---
<https://www.youtube.com/watch?v=zt1jlTPCaps>
Here is a comprehensive [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video regarding [[entities/deepseek|DeepSeek]]'s "[[concepts/engram|Engram]]" paper.

* * *

# [[entities/deepseek-engram|DeepSeek Engram]]: [[concepts/conditional-memory|Conditional Memory]] via [[concepts/scalable-lookup|Scalable Lookup]]

**Paper Title:** _Conditional [[concepts/memory|Memory]] via Scalable Lookup: A New Axis of Sparsity for Large Language Models_

## 1\. The Core Problem: Wasteful Computation

The fundamental inefficiency in current [[concepts/transformer-architectures|Transformer architectures]] is that they do not distinguish between tasks requiring deep thought and tasks requiring simple [[concepts/recall|recall]].

* **The Issue:** When an LLM recalls a simple fact (e.g., "Paris is the capital of France"), it runs through the same dozens of [[concepts/transformer-layers|transformer layers]] as it does for a complex [[concepts/reasoning|reasoning]] task (e.g., "Why did the Roman Empire fall?").
* **The Reality:** LLMs are using deep computation to simulate a hash table.
* **Previous Research:** Research from 2021 (Geva et al.) showed that Feed-Forward Network (FFN) layers already function as Key-Value memories. DeepSeek builds upon this by asking: _Why simulate a hash table when we can just give the model one?_

## 2\. The [[concepts/solution|Solution]]: Engram

DeepSeek introduces a new [[concepts/architecture|architecture]] called **Engram** to complement the existing [[entities/mixture-of-experts|Mixture-of-Experts]] (MoE) architecture. It creates two axes of sparsity:

1. **Computation Axis (MoE):** For complex, compositional reasoning.
2. **Memory Axis (Engram):** For static pattern recall.

### Language Has Two Types of Dependencies:

* **Compositional Reasoning:** Dynamic, context-dependent, requires synthesis (e.g., "Why did the stock market crash?"). **$\\rightarrow$ Handled by MoE.**
* **Static Patterns:** Local, stereotyped, frequent (e.g., "Alexander the Great," "By the way"). **$\\rightarrow$ Handled by Engram (O(1) Lookup).**

## 3\. How Engram Works

The mechanism is a hybrid of neural processing and classic lookup tables:

1. **N-Gram Extraction:** The model extracts 2-grams and 3-grams from the input text (e.g., "Alexander the Great").
2. **Hashing:** These grams are hashed to find indices.
3. **Massive Embedding Table:** The indices point to a massive table (billions of [[concepts/parameters|parameters]]) to retrieve embeddings.
4. **Context-Aware Gating (Crucial):**
	* Since hash lookups can be wrong (collisions) or words can have multiple meanings (e.g., "[[entities/apple|Apple]]" the company vs. "apple" the fruit), a gate determines if the retrieved memory fits the current hidden state.
	* _If it fits:_ The gate opens, and the memory flows through.
	* _If it doesn't:_ The gate suppresses the memory.

## 4\. The U-Shaped [[concepts/scaling|Scaling]] Law

DeepSeek investigated how to split parameters between MoE and Engram. They found a U-shaped curve regarding validation loss:

* **100% MoE:** Suboptimal (wastes depth on static patterns).
* **Too much Engram:** Suboptimal (loses reasoning capability).
* **The Sweet Spot:** **75-80%** parameters to MoE, **20-25%** to Engram.

## 5\. Results & Performance

Comparing **Engram-27B** vs. **MoE-27B** (same parameters, FLOPs, and [[concepts/training-data|training data]]):

* **Knowledge Gains:** MMLU (+3.0), Chinese Knowledge (+4.0).
* **Reasoning Gains (Surprising):** BBH (+5.0), ARC-Challenge (+3.7), MATH (+2.4).

### Why did Reasoning improve more than Knowledge?

The paper suggests the model became **effectively deeper**.

* In standard [[concepts/models|models]], the first ~6 layers are wasted on "Static Reconstruction" (figuring out that "Diana, Princess of Wales" is a single entity).
* In Engram, this happens via O(1) lookup instantly.
* **Result:** All 30+ layers are now available for actual reasoning. CKA analysis shows Layer 5 of Engram produces representations equivalent to Layer 12 of the baseline MoE.

### Long Context Improvement

* **Multi-Query Need-In-A-Haystack:** 84.2 $\\rightarrow$ **97.0**
* Because Engram handles local dependencies, the [[concepts/self-attention|Attention mechanism]] is freed up to focus on long-[[concepts/range|range]], global dependencies.

## 6\. The [[concepts/hardware|Hardware]] Story (Economics)

This architecture is highly optimized for [[concepts/inference|inference]] costs:

* **Deterministic Lookup:** Unlike MoE routing (which is dynamic), Engram lookup is known from the input [[concepts/tokens|tokens]] alone.
* **Prefetching:** While the GPU computes Layer 1, the [[concepts/cpu|CPU]] can prefetch Engram embeddings for Layer 2.
* **Cheap Memory:** The massive embedding table can live in **Host [[concepts/ram|RAM]]** (cheap), not GPU [[concepts/vram|VRAM]] (expensive).
* **Throughput:** Less than 3% throughput penalty even with a 100B parameter table in system RAM.

## 7\. Limitations

* **Hash Collisions:** Mitigated by gating, but not eliminated.
* **Static Embeddings:** They do not adapt during inference (unlike dynamic attention).
* **Not RAG:** This is not retrieval-augmented generation; it does not connect to an external live database (internet/files). The lookup table is fixed after [[concepts/training|training]].
* **Limited Order:** Currently uses only 2-grams and 3-grams; longer patterns might be missed.

## Summary: The Bigger Picture

[[entities/engram|Engram]] represents a shift toward **[[concepts/disconnection|Separation]] of Concerns** in AI [[concepts/architecture|architecture]], mirroring human [[concepts/cognition|cognition]]:

* **System 1 ([[concepts/engram|Engram]]):** Fast, automatic pattern matching.
* **System 2 (MoE):** Slow, deliberate [[concepts/reasoning|reasoning]].

> **Core Insight:** "Using a calculator to store phone numbers works, but it is wasteful. Engram gives LLMs an address book."