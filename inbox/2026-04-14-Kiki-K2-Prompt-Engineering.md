---
wiki-ingested: true
title: "Kiki K2 - Prompt Engineering"
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
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Kiki K2 - [[concepts/prompt-engineering|Prompt Engineering]]

---
---
<https://www.youtube.com/watch?v=lDXc-zVqN1w>
The video provides a detailed overview of [[entities/moonshot-ai|Moonshot AI]]'s [[entities/kimi-k2|Kimi K2]] model and its research [[concepts/capabilities|capabilities]], then compares various [[concepts/ai-research|AI research]] [[concepts/agents|agents]], including [[concepts/gemini|Gemini]], [[entities/chatgpt|ChatGPT]] ([[entities/openai|OpenAI]] [[entities/o3|o3]]), [[entities/grok|Grok]] DeepSearch, and [[concepts/manus|Manus]], on a specific [[concepts/benchmark-testing|benchmarking]] task.
Here's a breakdown of the key points:

1. **[[concepts/kimi-k2|Kimi K2]] and Kimi-Researcher Overview:**
	**Kimi K2:** Moonshot AI's latest [[entities/mixture-of-experts|Mixture-of-Experts]] model with 32 billion [[concepts/activated-parameters|activated parameters]] and 1 trillion [[concepts/total-parameters|total parameters]]. It achieves state-of-the-[[concepts/art|art]] performance in knowledge, math, and [[concepts/coding|coding]], and is specifically optimized for [[concepts/agentic-tasks|agentic tasks]], meaning it "does not just answer, it acts." **Kimi-Researcher:** An [[entities/openclaw|autonomous agent]] excelling at [[concepts/multi-turn-search|multi-turn search]] and [[concepts/reasoning|reasoning]]. It performs an average of 23 [[concepts/reasoning-steps|reasoning steps]] and explores over 200 URLs per task. It achieved state-of-the-art results on Humanity's Last Exam (26.9% Pass@1) and Pass@4 (40.17%).
	
2. **Kimi-Researcher's [[concepts/architecture|Architecture]] and [[concepts/training|Training]]:**
	It's a single agentic and thinking model designed to solve complex problems through multi-step planning, reasoning, and tool use. It leverages three main tools: a **parallel, real-time internal search tool**, a **text-based browser tool** for interactive web tasks, and a **coding tool** for automated [[concepts/code-execution|code execution]]. All three can run in parallel. **End-to-End Agentic Reinforcement [[concepts/learning|Learning]] (RL):** Kimi-Researcher is trained holistically using RL. Given a query, it explores possible strategies, receives rewards for correct solutions, and learns from full trajectories. This approach helps it handle [[concepts/long-horizon-tasks|long-horizon tasks]] and adapt to changing tools and environments, unlike traditional workflow-based or imitation learning [[concepts/systems|systems]]. **[[concepts/context-management|Context Management]]:** Crucially, Kimi-Researcher employs a context-management mechanism that retains important information while discarding unnecessary documents, extending single rollout trajectories to over 50 iterations (compared to 10 for naive agents). This mechanism leads to 30% more iterations and higher performance.
	
3. **Emergent [[concepts/agentic-ai|Agentic Capabilities]]:**
	**Resolving Inconsistencies:** When presented with conflicting information from multiple sources, Kimi-Researcher resolves inconsistencies through iterative hypothesis refinement and self-correction. **Caution and Rigor:** Even for seemingly straightforward questions, it deliberately performs additional searches and cross-validates information before answering, showing a cautious behavior uncommon in LLM-based systems.
	
4. **Benchmarking Kimi K2 Hosting Providers:**
	The presenter tasked various [[concepts/ai-research-agents|AI research agents]] to benchmark public hosts of the [[concepts/open-source|open-source]] Kimi K2 model, requiring discovery of API endpoints, [[concepts/pricing|pricing]], [[concepts/tokens|tokens]] per second (TPS), [[concepts/context-window|context window]] length, and quantization details, ultimately needing a tabulate [[concepts/markdown|Markdown]] table and a unified coding benchmark suite.
	
5. **Comparison of AI Research Agents:**
	**[[entities/gemini|Gemini]]:** Provided a comprehensive table listing Moonshot AI, Groq, DeepInfra, Fireworks AI, Together AI, [[entities/openrouter|OpenRouter]], and [[entities/hugging-face|Hugging Face]]. It included pricing, access type, free tier info, TPS (with some unknowns), context window, and quantization (mostly unknown). It also generated hypothetical results tables for [[concepts/code-generation|code generation]], comprehension, and [[concepts/tool-calling|tool calling]], along with synthesis and strategic recommendations. **ChatGPT (OpenAI o3 with DeepSearch):** Also generated a similar table of providers including SiliconFlow and Replicate, providing detailed information on pricing, TPS (often with [[concepts/notes|notes]] like "very low" or "~200 TPS"), and quantization (e.g., FP8, Int8). It was noted that some TPS figures seemed off or providers might be hallucinated. **[[entities/grok-deepsearch|Grok DeepSearch]]:** Did not provide a table but listed information about providers like Moonshot AI, Novita AI, Groq, Together AI, Fireworks AI, DeepInfra, OpenRouter, and Hugging Face. It also failed to provide quantization details for most. **Perplexity:** Generated a table similar to ChatGPT, including pricing, TPS (with some unknowns), context window, and noted free tiers. **Manus:** Produced an HTML report with a comprehensive table including Groq, Together AI, Fireworks AI, Moonshot AI, Parasail, and Novita. It also generated the [[concepts/python|Python]] code for the benchmark suite. **Kimi-Researcher (Moonshot AI's own [[entities/agent|agent]]):** Produced an interactive website report with well-formatted sections. It identified Moonshot AI, Together AI, DeepInfra, OpenRouter, Groq, Fireworks AI, Hugging Face, Novita AI, and Parasail. It detailed access, pricing, and [[concepts/technical-specs|technical specs]], notably including Chinese web links in its search process, indicating a broader search scope. However, it often couldn't find specific TPS or quantization details.
	

**Key Takeaways from the Comparison:**

* **Comprehensiveness:** Gemini and ChatGPT offered the most comprehensive reports in terms of identified providers and data points.
* **Data Accuracy/Completeness:** While Gemini was good, ChatGPT sometimes provided potentially hallucinated or inaccurate TPS/quantization data. Kimi-Researcher also had gaps in this specific data.
* **Reporting Format:** Kimi-Researcher's interactive website report was visually impressive and well-structured, akin to Manus's executable reports.
* **Search Scope:** Kimi-Researcher's ability to utilize and cite Chinese web sources is a unique and valuable feature.
* **Agent Behavior:** Kimi-Researcher exhibited cautious and rigorous behavior by cross-validating information, a desirable trait for research agents.
* **Free Tiers/Access:** Gemini appeared to identify the most number of DeepSearch uses for free accounts, making it a potentially cost-effective option for extensive research.

The presenter concludes by recommending testing Kimi-Researcher, highlighting its pleasant conversational [[concepts/style|style]] and the potential for a subsequent video testing the identified Kimi K2 providers based on quantization levels.