---
title: "Kimi K3 & Inkling: Open-Weight AI Scale, Strategies, and Deployment"
date: 2026-07-19
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Kimi K3 & Inkling: Open-Weight AI Scale, Strategies, and Deployment
Generated: 2026-07-19 · API: Gemini 2.5 Flash · Modes: Summary

---

## Kimi K3 & Inkling: Open-Weight AI Scale, Strategies, and Deployment
**Clip title:** Open Source AI Is Getting Too Big to Run
**Author / channel:** Turing Post TV
**URL:** https://www.youtube.com/watch?v=qW5UDpHZBPw

### Summary
The video examines the recent releases of two prominent "open-weight" AI models: Kimi K3 from China's Moonshot AI and Inkling from the US-based Thinking Machines Lab. These launches highlight a significant shift in the open-source AI landscape, moving beyond the traditional perception of open models as simply smaller and cheaper alternatives. The presenter, Ksenia, emphasizes the distinct strategies adopted by these two models: Kimi K3 prioritizes pushing the frontier of AI capability, while Inkling focuses on customization and adaptability.

Kimi K3, developed by Moonshot AI, stands out for its impressive scale and performance. With 2.8 trillion parameters, it has achieved the number one ranking in the Frontend Code Arena, surpassing models like Fable 5 and GPT-5.6 Sol in coding benchmarks. This capability is largely attributed to its "Mixture of Experts" architecture, which leverages 16 out of 896 specialized expert modules per token to reduce computation while maintaining a vast parameter count. However, Kimi K3's immense size means it requires substantial hardware (e.g., 64 accelerators for efficient deployment, 1.4 terabytes of memory even when compressed), making local deployment impractical for most users who would access it via API or cloud providers.

In contrast, Inkling, from Thinking Machines Lab (co-founded by ex-OpenAI CTO Mira Murati), offers a different philosophy. With 975 billion parameters (41 billion active), Inkling is deliberately *not* positioned as the "best" performing model overall. Instead, it's designed as a broad, general-purpose multimodal foundation model (supporting text, image, audio) that excels in adaptability. Thinking Machines provides Inkling's weights under an Apache 2.0 license and offers a platform called Tinker that enables customers to fine-tune the model using low-rank adaptation (LoRA). This approach allows for cost-effective customization for specific tasks and domains, a valuable alternative to retraining an entire large model from scratch.

The dual release of Kimi K3 and Inkling collectively signals that the open-source AI paradigm is evolving. It's no longer solely about offering smaller, cheaper alternatives; open models can now also be enormous, highly capable, and even expensive to operate. The concept of "open weights" provides users with greater choice and control over how models are hosted, optimized, and adapted, fostering competition among cloud providers and allowing diverse organizations to deploy AI under their own rules and privacy requirements. This cross-pollination is also evident, as Inkling reportedly utilized synthetic data from an earlier Kimi version for its fine-tuning, demonstrating an interconnected development ecosystem that can drive innovation across companies and countries, even if the primary barrier to access remains significant infrastructure.

### Video Description & Links
#### Description
Two major open-model releases arrived this week from very different directions. Both geographically and conceptually.

Kimi K3 is a 2.8-trillion-parameter Chinese model that jumped from #18 to #1 in the Frontend Code Arena, ahead of Claude Fable 5. WHAT?! 

Inkling is the first major model from Mira Murati’s Thinking Machines Lab, and the company states directly that it is not the strongest model available. WHAT?!

Both strategies make sense once we examine what the companies are building. 
In this episode, we explain K3’s 896-expert architecture, why Moonshot recommends at least 64 accelerators, how LoRA customization works, what community quantization changed for Inkling, and which organizations gain meaningful control from open weights.

Attention Span is here to explain the technical and business choices shaping AI.

👉 Subscribe for high-signal AI mechanics 
👉 Into videos? Check our IG https://www.instagram.com/turingpost_tv and TikTok https://www.tiktok.com/@turingpost_tv 
👉 More analysis: TuringPost.com 
👉 Interviews: @realturingpost

Links:
About LoRA https://www.turingpost.com/p/lora 
Moonshot AI: The Chinese Unicorn Revolutionizing Long-Context AI https://www.turingpost.com/p/moonshotai 
Thinking Machines Lab, “Inkling: Our open-weights model” https://thinkingmachines.ai/news/introducing-inkling/ 
Thinking Machines Lab, Inkling Model Card https://thinkingmachines.ai/model-card/inkling/ 
Thinking Machines Lab, Tinker https://thinkingmachines.ai/tinker/ 
Moonshot AI, “Kimi K3: Open Frontier Intelligence” https://www.kimi.com/blog/kimi-k3 
Arena, Kimi K3 Frontend Code Arena result https://x.com/arena/status/2077824029126504525  
Semianalysis about Kimi K3 https://x.com/SemiAnalysis_/status/2077966560447074689 
Arena, Code Arena methodology https://arena.ai/blog/code-arena/ 
Artificial Analysis, Kimi K3 https://artificialanalysis.ai/models/kimi-k3 
Artificial Analysis, Inkling https://artificialanalysis.ai/articles/thinking-machines-has-released-inkling-the-new-leading-u-s-open-weights-model 
Unsloth, community Inkling quantizations https://unsloth.ai/docs/models/inkling

#AI #ArtificialIntelligence #OpenSourceAI #LLM #MachineLearning #GenerativeAI #KimiK3 #MiraMurati #AIModels #TechNews

#### Tags
`AI`, `ArtificialIntelligence`, `OpenSourceAI`, `LLM`, `MachineLearning`, `GenerativeAI`, `KimiK3`, `MiraMurati`, `AIModels`, `TechNews`

#### URLs
- https://www.instagram.com/turingpost_tv
- https://www.tiktok.com/@turingpost_tv
- https://www.turingpost.com/p/lora
- https://www.turingpost.com/p/moonshotai
- https://thinkingmachines.ai/news/introducing-inkling/
- https://thinkingmachines.ai/model-card/inkling/
- https://thinkingmachines.ai/tinker/
- https://www.kimi.com/blog/kimi-k3
- https://x.com/arena/status/2077824029126504525
- https://x.com/SemiAnalysis_/status/2077966560447074689
- https://arena.ai/blog/code-arena/
- https://artificialanalysis.ai/models/kimi-k3
- https://artificialanalysis.ai/articles/thinking-machines-has-released-inkling-the-new-leading-u-s-open-weights-model
- https://unsloth.ai/docs/models/inkling
