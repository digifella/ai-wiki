---
wiki-ingested: true
title: "Jev-Style AI Models: Local GPU Execution for Fast Decision-Making"
date: 2026-09-23
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: philosophy-ethics-religion
group: philosophy-ethics-metaphysics
type: "source-summary"
aliases:
  - "lab-notes/2026-09-23-Jev-Style-AI-Models-Local-GPU-Execution-for-Fast-Decisio"
---
<!-- domain-nav -->
> domain-badge slug=philosophy-ethics-religion name=Philosophy, Ethics & Religion

## Jev-Style AI Models: Local GPU Execution for Fast Decision-Making
**Clip title:** Run a Jev-Style Model on Your Own GPU
**Author / channel:** Cloud Codes
**URL:** https://www.youtube.com/watch?v=4mCyUXqkTpI

### Summary
This video explores the concept of running "Jev-style" [[concepts/weathernext-3|AI models]] locally on your own hardware for fast, [[concepts/algorithmic-decision-making|automated decision-making]], contrasting it with hosted cloud AI solutions. The main topic centers on the benefits of local execution, primarily data [[concepts/privacy|privacy]] and cost-efficiency, for tasks that require quick, definitive choices rather than elaborate text generation. It introduces Jev, a "[[concepts/system-one-intelligence|System One]]" model by TypeSafe, which exemplifies this approach by simply selecting from a fixed list of answers with a calibrated probability, such as escalating a customer support ticket.

A key point of the video is the underlying mechanism of these decision-making models. Unlike traditional language models that generate text word by word, Jev-style models operate by reading "logits" – raw scores that a language model assigns to every possible next word. Instead of constructing a sentence, the model directly evaluates the logits for a pre-defined set of answers, choosing the option with the highest score. This "skip the writing" trick drastically reduces processing time to milliseconds and cost (cents per million decisions compared to dollars for text generation), while ensuring the output is always a valid, pre-specified type. Furthermore, this method allows for asking multiple questions about the same input concurrently by reusing a "key-value cache," significantly boosting throughput.

The video then presents several [[concepts/self-hosted-alternative|open-source alternatives]] for local deployment, each with distinct advantages and hardware requirements. **Kev**, a model built by Jared Palmer on [[entities/qwen|Qwen]] 3.5, offers a true drop-in replacement for TypeSafe's hosted Jev, performing with comparable accuracy (around 80-87%) and fitting on consumer-grade gaming GPUs. **SemIf**, developed by Theo Lee, demonstrates that even an untuned [[concepts/open-model|open model]] can be used for decision-making by directly reading its logits, providing good speed and reasonable accuracy without dedicated training runs. For environments without GPUs, **Von** utilizes an encoder-based model (ModernBERT) to run efficiently on CPUs or even phone-class chips, sacrificing some accuracy for broad accessibility and ultra-low latency.

In conclusion, the "sweet spot" for these [[concepts/local-ai|local AI]] decision engines lies in high-volume, low-drama applications where data [[concepts/privacy|privacy]] is paramount and decisions are "closed" (from a fixed set of options) and "cheap-to-check." Examples include sorting support tickets, tagging feedback, flagging spam, or scoring leads. By keeping sensitive data on-premise and eliminating per-token cloud API costs, organizations can achieve rapid automation with greater control. While local models may offer slightly lower out-of-the-box accuracy compared to their highly-tuned hosted counterparts, their ability to be fine-tuned, coupled with significant cost and privacy benefits, makes them a compelling alternative. The video emphasizes that these models are fast bases to be pointed at specific problems, not "oracles," and urges users to always calibrate and test performance against their own workloads.

### Video Description & Links
#### Description
Every time your application asks a cloud AI to classify a support ticket, moderate content, or route an internal document, you are shipping your users' private data to someone else's servers. But what if your own computer could make those exact same split-second decisions locally—in milliseconds, for zero API cost, and without a single byte ever leaving the building?

In this practical engineering deep dive, Cloud Codes investigates how to take the breakthrough behind TypeSafe’s Jev—a "System One" model that completely ditches text generation to make fast, typed decisions—and run open-source equivalents directly on your own hardware. 

We explain the core mathematical trick: direct logit scoring. Instead of forcing an LLM to slowly generate sentences token by token, these models evaluate your fixed menu of choices in a single forward pass, reading the raw probability scores straight off the network. By sharing the key-value cache across multiple questions, local throughput jumps from 2 decisions/sec to over 20 decisions/sec on a single consumer GPU.

We evaluate the three strongest open-source alternatives:
1. Kev (Jared Palmer) — A true drop-in replacement built on Qwen 3.5 (0.8B, 4B, 9B). Simply point TypeSafe's official Python SDK at `localhost:8080`.
2. SemIf (Theo Lee) — Running direct logit scoring on an unmodified open model you already trust on a home RTX 3090 with zero fine-tuning (5.2× faster than JSON).
3. Von (wfzyx) — A 395M encoder (ModernBERT) that requires zero GPU, running sub-15ms decisions on pure CPU.
Plus, we look at OpenJev for multimodal screenshot decisions and audit the real accuracy trade-offs (81–85% local vs 88% Jev).

Build, solve, deploy.

🔗 Resources Mentioned:
• Kev (Jared Palmer's Jev-Compatible Drop-In):
https://github.com/jaredpalmer/kev
• SemIf (Direct Logit Scoring on Open Models):
https://github.com/TheoLeeCJ/SemIf
• Von (Sub-15ms [[concepts/decision-model|Decision Model]] for CPU):
https://github.com/wfzyx/von
• OpenJev Multimodal NLI (AlexWortega):
https://huggingface.co/AlexWortega/openjev
• Laya Multilingual Decision Engine:
https://github.com/NandhaKishorM/laya
• Archer Hume’s Architectural Breakdown ("Jev Unmasked"):
https://archerhume.com/posts/jevs-architecture-unmasked
• Related Channel Deep Dive: "The AI That Refuses to Write (And Why It’s 200× Faster)":
https://www.youtube.com/watch?v=jev-teardown

⏱️ Chapters:
0:00 - The 0.5-Second Local Decision
0:42 - What Jev Is: System One Without Text
2:17 - The Problem: Why Cloud Decisions Leak Your Data
2:50 - The Logit Trick: How to Score Without Writing
3:28 - 20 Decisions per Second: Shared Context Magic
4:38 - The Trap: Fake Self-Reported Probabilities
5:07 - Model 1: Kev (Jared Palmer's Drop-in Clone)
5:43 - The 1-Line Setup: Pointing the SDK to Localhost
6:06 - Accuracy & Brier Scores: 4B vs 9B vs 0.8B
6:56 - Model 2: SemIf (Zero Fine-Tuning on a Home 3090)
7:58 - Model 3: Von (Sub-15ms Decisions on Pure CPU)
9:09 - Model 4: OpenJev (Deciding Over Screenshots)
9:47 - Model 5: Laya (The Fine-Tuning Reality)
10:29 - Where to Actually Use It: High Volume, Low Drama
11:26 - Accuracy vs Hardware: The Real Cost Ledger
12:30 - Final Verdict: Kev 4B vs SemIf & The Privacy Trade

#localllm #typesafe #jev #opensource #machinelearning #aiengineering #softwareengineering #privacy #selfhosted #cloudcodes #hardware

User Queries:
how to run typesafe jev locally
open source alternative to typesafe jev
kev jared palmer github
semif semantic ifs theo lee
von modernbert decision model github
how does logit scoring work llm
run ai intent classification locally
private ai ticket routing on premise
typesafe jev vs local llm
sub 15ms ai classification cpu
openjev multimodal nli [[entities/hugging-face|hugging face]]
non autoregressive ai models local
zero cloud ai automation
how to classify text without generating tokens
cloud codes jev

#### Tags
`run jev locally`, `typesafe jev alternative`, `local jev model`, `kev jared palmer`, `semif theo lee`, `von ai model`, `local ai decision model`, `run llm on own gpu`, `private ai routing`, `sub 15ms ai`, `modernbert decision engine`, `zero cloud ai`, `self hosted ai assistant`, `cloud codes`, `sf`, `silicon valley`, `jev ai model`, `jev ai trading`, `jev ai use cases`, `jev ai setup`, `jev ai engineer`, `jev ai demo`, `jev ai explained`, `jev ai use`, `jev ai coding`, `jev ai fireship`, `jev ai local`

#### URLs
- https://github.com/jaredpalmer/kev
- https://github.com/TheoLeeCJ/SemIf
- https://github.com/wfzyx/von
- https://huggingface.co/AlexWortega/openjev
- https://github.com/NandhaKishorM/laya
- https://archerhume.com/posts/jevs-architecture-unmasked
- https://www.youtube.com/watch?v=jev-teardown

## Related Concepts
- [[concepts/local-gpu-execution|local GPU execution]]
- [[concepts/fast-decision-making|fast decision-making]]
- [[concepts/smart-tv|data privacy]] — [Wikipedia](https://en.wikipedia.org/wiki/Information_privacy)
- [[concepts/cost-efficiency|cost-efficiency]]
- [[concepts/system-one-architecture|System One architecture]]
- [[concepts/algorithmic-decision-making|automated decision-making]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_decision-making)
- [[concepts/cost-efficiency|Jev-style models]]
- CPU [[concepts/ai-inference|inference]]

## Related Entities
- [[entities/cloud-codes|Cloud Codes]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/jev|Jev]]
- TypeSafe — [Wikipedia](https://en.wikipedia.org/wiki/Type_safety)
- Jared Palmer — [Wikipedia](https://en.wikipedia.org/wiki/Jared_Palmer)
- Von — [Wikipedia](https://en.wikipedia.org/wiki/Von)