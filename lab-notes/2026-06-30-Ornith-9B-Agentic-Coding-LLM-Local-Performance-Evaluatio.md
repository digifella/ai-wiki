---
title: "Ornith 9B Agentic Coding LLM: Local Performance Evaluation on Consumer Hardware"
date: 2026-06-30
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Ornith 9B Agentic Coding LLM: Local Performance Evaluation on Consumer Hardware
Generated: 2026-06-30 · API: Gemini 2.5 Flash · Modes: Summary

---

## Ornith 9B Agentic Coding LLM: Local Performance Evaluation on Consumer Hardware
**Clip title:** New Agentic Coding Model Ornith 9B — Is It Worth Running Locally?
**Author / channel:** Bart Slodyczka
**URL:** https://www.youtube.com/watch?v=nFiLFCrsg1w

### Summary
The video provides a detailed overview and practical demonstration of Ornith-1.0, a new family of open-source Large Language Models (LLMs) specifically specialized for "agentic coding." Released by Deep Reinforce, these models are available in various sizes: 9B (dense), 31B (dense), 35B (MoE - Mixture of Experts), and 397B (MoE), with three of the four being open-weight for local deployment. The video's primary focus is on testing the performance of the smallest, 9B dense model, on a consumer-grade 16GB Mac Mini to evaluate its real-world capabilities for coding tasks.

The presenter highlights that Ornith-1.0 is built upon pre-trained Gemma 4 and Qwen 3.5 models and claims state-of-the-art performance among open-source models of comparable size on coding benchmarks. While acknowledging these benchmark results, the video expresses skepticism, emphasizing that the most effective evaluation comes from testing on one's own use case and hardware. The benchmarks mentioned in the accompanying paper primarily assess the model's ability to operate within existing codebases (e.g., executing tool calls, finding/fixing bugs) rather than building projects from scratch, which is the specific focus of the video's practical tests. For the local setup, the 9B model consumes approximately 12GB of RAM on the Mac Mini, utilizing LM Studio for local execution and Pi Agent as the coding harness.

During practical testing, the 9B model demonstrated significant limitations in building a project from scratch. When tasked with creating a simple tower defense game in a single HTML file, the 9B model produced code riddled with functional and logical errors (e.g., undeclared functions, incorrect variable names, syntax issues). It entered a recursive debugging loop with Pi Agent, requiring extensive human intervention and indicating a severe lack of precision for generative coding. In contrast, the presenter quickly demonstrated that the larger 35B model, when given the exact same prompt (though running on more powerful hardware, a Mac Studio, for performance), successfully generated a fully functional and playable tower defense game in a single attempt, exhibiting superior code quality and speed (around 100 tokens/second compared to the 9B's ~16 tokens/second).

The conclusion and main takeaway are clear: while the smaller 9B Ornith model might be suitable for basic conversational tasks and potentially some debugging within a tightly controlled environment, its precision and capacity for complex, from-scratch agentic coding are severely limited. Users should either temper their expectations and reduce the scope of work for such small models or opt for significantly larger models like the 35B variant, which offer the necessary accuracy and functional capabilities to generate robust, working code effectively and efficiently. The video underscores the importance of adequate model size and computational power for achieving satisfactory results in agentic coding tasks.

### Video Description & Links
#### Description
In this video I test out the new open source agentic coding model Ornith 1.0 9b on my 16gb M4 Mac Mini. We load it up in Lm Studio and understand the full memory requirement for weights + context, we plug it into pi agent harness to run it through a coding task, we then compare results to that of the bigger Ornith 35b model, and finally we understand if the 9b is worth running locally for coding tasks.

📬👀 Subscribe to my blog for more tests, tips, and walkthroughs: https://blog.workingmodels.ai/

👉 Connect with me: https://x.com/bartslodyczka
👉 Get in touch: bart@supportlaunchpad.com

#### URLs
- https://blog.workingmodels.ai/
- https://x.com/bartslodyczka
