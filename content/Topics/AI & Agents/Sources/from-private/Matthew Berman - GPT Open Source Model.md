---
wiki-ingested: true
domain: ai-agents
group: openai-chatgpt
---
<https://www.youtube.com/watch?v=412JK1VshNU>
This video details OpenAI's release of new open-source/open-weight [[concepts/models|models]], named **GPT-OSS**, highlighting their capabilities, [[concepts/architecture|architecture]], and safety considerations.
**1\. General Announcement & Significance:**

* OpenAI has fulfilled its promise to release state-of-the-art **[[concepts/open-weight|open-weight]]** language models, making their [[concepts/parameters|parameters]] available to the public.
* The models are named GPT-OSS and are released under the flexible **[[concepts/apache-2.0-license|Apache 2.0 license]]**, offering benefits like lower [[concepts/cost|cost]], [[concepts/customization|customizability]], and local deployment potential.
* The presenter speculates that the "Horizon Alpha" model previously seen on [[entities/openrouter|OpenRouter]] might be an early version of GPT-OSS, though not officially confirmed by OpenAI.

**2\. Model [[concepts/technical-specs|Specifications]] & Performance:**

* **Sizes:** Two versions are released: GPT-OSS-120b (120 billion parameters) and [[concepts/gpt-oss-20b|GPT-OSS-20b]] (20 billion parameters).
* **[[concepts/hardware|Hardware]] Efficiency:** GPT-OSS-120b achieves near-parity with OpenAI's O4-mini on core [[concepts/reasoning|reasoning]] benchmarks and can run efficiently on a single 80 GB GPU. GPT-OSS-20b delivers results similar to OpenAI's O3-mini and can run on edge devices with just 16 GB of [[concepts/memory|memory]], making it ideal for on-device [[concepts/use-cases|use cases]] and rapid iteration without costly infrastructure.
* **Capabilities:** Both models perform strongly on reasoning tasks, demonstrating robust **tool use** capabilities, **few-shot [[concepts/tool-calling|function calling]]**, and **Chain-of-Thought (CoT) reasoning**. They also perform well on **HealthBench**, indicating proficiency in diagnosing health-related issues.
* **Compatibility:** The models are compatible with the [[concepts/responses|Responses]] API and are designed to be used within agentic frameworks (e.g., Crew AI).
* **Adjustable Reasoning:** A unique feature of these [[concepts/open-weight-models|open-weight models]] is the ability to adjust the "[[concepts/reasoning-effort|reasoning effort]]" (low, medium, high) during the CoT portion, allowing users to balance [[concepts/inference|inference]] [[concepts/speed|speed]] with reasoning depth.

**3\. Pre-[[concepts/training|training]] & Model Architecture:**

* **Training:** GPT-OSS models were trained using OpenAI's most advanced pre-training and post-training techniques, with a focus on reasoning, efficiency, and real-world usability. These are OpenAI's first open-weight language models since GPT-2.
* **Architecture:** Each model is a **Transformer** leveraging a **[[entities/mixture-of-experts|Mixture-of-Experts]] (MoE)** architecture to reduce the number of active parameters needed to process input. GPT-OSS-120b activates 5.1 billion parameters per token (out of 117B [[concepts/total-parameters|total parameters]]). GPT-OSS-20b activates 3.6 billion parameters per token (out of 21B total parameters).
* **Technical Details:** The models use alternating dense and locally banded sparse [[concepts/attention|attention]] patterns (similar to GPT-3), grouped multi-query attention (group size of 8), and Rotary Positional Embedding (RoPE) for positional [[concepts/encoding|encoding]].
* **Context Length:** They natively support context lengths of up to 128K tokens, which can potentially be extended with further tuning.
* **Dataset & Tokenizer:** Models were trained on a mostly English, text-only dataset with a focus on STEM, [[concepts/coding|coding]], and general knowledge. The data was tokenized using a superset of the tokenizer used for OpenAI O4-mini and GPT-4o (o200k\_harmony), which is also being open-sourced.

**4\. Post-training:**

* The models underwent a post-[[concepts/training-process|training process]] similar to O4-mini, involving a [[concepts/supervised-fine-tuning|supervised fine-tuning]] stage and a high-compute reinforcement [[concepts/learning|learning]] (RL) stage.
* The objective was to align the models with the OpenAIModelSpec and teach them to apply CoT reasoning and tool use before producing their [[concepts/solution|answer]].

**5\. Evaluations (Benchmarks):** The video presents several benchmark results, comparing GPT-OSS models against OpenAI's proprietary O3 and O4-mini models (with and without tools):

* **Codeforces (Competition [[concepts/code|Code]]):** GPT-OSS-120b (2622) is highly comparable to O3 (2706). GPT-OSS-20b (2516) also performs exceptionally well.
* **Humanity's Last Exam (Expert-level questions):** GPT-OSS-120b (19% [[concepts/accuracy|accuracy]] with tools) outperforms O4-mini (17.7%) and O3-mini (13.4%) with tools.
* **HealthBench (Realistic & Challenging [[concepts/health|Health]] Conversations):** Both GPT-OSS models show very comparable results to O3 and O4-mini, especially the 120b version. (Note: These models are not intended to replace medical professionals).
* **AIME (Competition Math):** Both GPT-OSS models achieved very high accuracy (in the mid-90s percent), competitive with and sometimes even surpassing O3 and O4-mini.
* **GPQA Diamond (PhD-level [[concepts/science|Science]] Questions - without tools):** GPT-OSS-120b (80.1%) performs well, close to O3 (83.3%) and O4-mini (81.4%).
* **MMLU (Questions across academic disciplines):** GPT-OSS-120b (90%) is competitive with O3 (93.4%) and O4-mini (93%).
* **Tau-Bench Retail (Function Calling):** GPT-OSS-120b (67.8%) is comparable to O3 (70.4%) and O4-mini (65.6%).

**6\. Safety & Worst-Case Fine-tuning:**

* OpenAI prioritizes safety, having filtered out harmful data (Chemical, Biological, Radiological, Nuclear - CBRN) during pre-training.
* They used "deliberative alignment" and "instruction [[concepts/hierarchy|hierarchy]]" during post-training to ensure the models refuse unsafe prompts.
* OpenAI directly assessed risks by attempting to maliciously fine-tune the models on specialized biology and [[concepts/cybersecurity|cybersecurity]] data. They found that even with robust, field-leading fine-tuning, the **maliciously fine-tuned GPT-OSS models were unable to reach high capability levels** for harmful purposes, according to their Preparedness Framework.
* **Chain-of-Thought (CoT) Safety:** OpenAI did not put direct supervision on the CoT for GPT-OSS models. This decision is based on research suggesting that monitoring a model's CoT can help detect misbehavior. They encourage developers and researchers to use this to implement their own CoT monitoring systems, but advise against directly showing raw CoTs to users due to potential for hallucinatory or harmful content.
* **Red Teaming Challenge:** To further improve open model safety, OpenAI is hosting a Red Teaming Challenge with a **$500,000 prize fund** to encourage researchers and enthusiasts to identify novel safety issues.

**7\. Where to Try Them:**

* The video is sponsored by **Together.ai**, which allows users to try these new [[concepts/openai-models|OpenAI models]], along with other leading [[concepts/reasoning-models|open-source models]], on their GPU cloud platform.

## Related Concepts
- [[concepts/open-source-model|Open-source model]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_model)
- [[concepts/local-deployment|GPT-OSS]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-OSS)
- [[concepts/open-source|Apache 2.0 license]] — [Wikipedia](https://en.wikipedia.org/wiki/Apache_2.0_license)
- [[concepts/local-deployment|Local deployment]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_deployment)
- [[concepts/parameter-availability|Parameter availability]] — [Wikipedia](https://en.wikipedia.org/wiki/Parameter_availability)
- [[concepts/transformer-layers|Transformer]] — [Wikipedia](https://en.wikipedia.org/wiki/Transformer)
- [[concepts/nvidia-h100-gpus|Mixture-of-Experts (MoE)]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture-of-Experts_%28MoE%29)
- Rotary Positional Embedding (RoPE) — [Wikipedia](https://en.wikipedia.org/wiki/Rotary_Positional_Embedding_%28RoPE%29)
- Alternating dense and locally banded sparse [[concepts/attention|attention]] patterns — [Wikipedia](https://en.wikipedia.org/wiki/Alternating_dense_and_locally_banded_sparse_attention_patterns)
- Grouped multi-query attention — [Wikipedia](https://en.wikipedia.org/wiki/Grouped_multi-query_attention)
- High-compute reinforcement [[concepts/learning|learning]] — [Wikipedia](https://en.wikipedia.org/wiki/High-compute_reinforcement_learning)
- Tool use capabilities — [Wikipedia](https://en.wikipedia.org/wiki/Tool_use_capabilities)

## Related Entities
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- Matthew Berman (presenter) — [Wikipedia](https://en.wikipedia.org/wiki/Matthew_Berman_%28presenter%29)
- [[entities/horizon-alpha|Horizon Alpha]] — [Wikipedia](https://en.wikipedia.org/wiki/Horizon_Alpha)
- [[entities/gpt-oss|GPT-OSS]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-OSS)
- [[entities/matthew-berman|Matthew Berman]] — [Wikipedia](https://en.wikipedia.org/wiki/Matthew_Berman)