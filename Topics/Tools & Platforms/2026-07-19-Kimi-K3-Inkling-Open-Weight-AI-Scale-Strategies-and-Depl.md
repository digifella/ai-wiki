---
wiki-ingested: true
title: "Kimi K3 & Inkling: Open-Weight AI Scale, Strategies, and Deployment"
date: 2026-07-19
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: deployment-docker-services
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-07-19 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Kimi K3 & Inkling: Open-Weight AI Scale, Strategies, and Deployment
**Clip title:** Open Source AI Is Getting Too Big to Run
**Author / channel:** Turing Post TV
**URL:** https://www.youtube.com/watch?v=qW5UDpHZBPw

### Summary
The video examines the recent releases of two prominent "open-weight" [[concepts/ai-models|AI models]]: [[concepts/kimi-k3|Kimi K3]] from China's Moonshot AI and Inkling from the US-based [[concepts/human-cognition|Thinking]] Machines Lab. These launches highlight a significant shift in the open-source [[concepts/ai-landscape|AI landscape]], moving beyond the traditional perception of open models as simply smaller and cheaper alternatives. The presenter, Ksenia, emphasizes the distinct strategies adopted by these two models: Kimi K3 prioritizes pushing the frontier of AI capability, while Inkling focuses on [[concepts/customization|customization]] and [[concepts/resilience|adaptability]].

Kimi K3, developed by Moonshot AI, stands out for its impressive scale and performance. With 2.8 trillion parameters, it has achieved the number one ranking in the Frontend Code Arena, surpassing models like Fable 5 and [[concepts/gpt-56-sol|GPT-5.6 Sol]] in coding benchmarks. This capability is largely attributed to its "[[concepts/mixture-of-experts|Mixture of Experts]]" architecture, which leverages 16 out of 896 [[concepts/specialized-expert|specialized expert]] modules per token to reduce computation while maintaining a vast [[concepts/parameter-count|parameter count]]. However, Kimi K3's immense size means it requires substantial hardware (e.g., 64 accelerators for [[concepts/bonsai|efficient deployment]], 1.4 terabytes of memory even when compressed), making [[concepts/local-control|local deployment]] impractical for most users who would access it via API or cloud providers.

In [[concepts/contrast|contrast]], Inkling, from Thinking Machines Lab (co-founded by ex-OpenAI CTO Mira Murati), offers a different [[concepts/philosophy|philosophy]]. With 975 billion parameters (41 billion active), Inkling is deliberately *not* positioned as the "best" performing model overall. Instead, it's designed as a broad, general-purpose multimodal [[concepts/pre-trained-model|foundation model]] (supporting text, image, audio) that excels in adaptability. Thinking Machines provides Inkling's [[concepts/parameters|weights]] under an [[concepts/apache-2-0|Apache 2.0 license]] and offers a platform called Tinker that enables customers to fine-tune the model using [[concepts/lora-adapter|low-rank adaptation]] (LoRA). This approach allows for cost-effective customization for specific tasks and domains, a valuable alternative to retraining an entire large model from scratch.

The dual [[concepts/deployment|release]] of Kimi K3 and Inkling collectively signals that the open-source AI paradigm is evolving. It's no longer solely about offering smaller, cheaper alternatives; open models can now also be enormous, highly capable, and even expensive to operate. The concept of "[[concepts/open-source-weights|open weights]]" provides users with greater choice and control over how models are hosted, optimized, and adapted, fostering competition among cloud providers and allowing diverse organizations to deploy AI under their own rules and [[concepts/privacy|privacy]] requirements. This cross-pollination is also evident, as Inkling reportedly utilized synthetic data from an earlier Kimi version for its fine-tuning, demonstrating an interconnected development ecosystem that can drive [[concepts/innovation|innovation]] across companies and countries, even if the primary barrier to access remains significant infrastructure.

### Video Description & Links
#### Description
Two major open-[[concepts/model-releases|model releases]] arrived this week from very different directions. Both geographically and conceptually.

Kimi K3 is a 2.8-trillion-parameter Chinese model that jumped from #18 to #1 in the Frontend Code Arena, ahead of [[concepts/claude-fable-5|Claude Fable 5]]. WHAT?! 

Inkling is the first major model from Mira Murati’s Thinking Machines Lab, and the company states directly that it is not the strongest model available. WHAT?!

Both strategies make sense once we examine what the companies are building. 
In this episode, we explain K3’s 896-expert architecture, why Moonshot recommends at least 64 accelerators, how LoRA customization works, what community [[concepts/parameter-reduction|quantization]] changed for Inkling, and which organizations gain meaningful control from open weights.

[[concepts/context-window|Attention Span]] is here to explain the technical and business choices shaping AI.

👉 Subscribe for high-signal AI mechanics 
👉 Into videos? Check our IG https://www.instagram.com/turingpost_tv and TikTok https://www.tiktok.com/@turingpost_tv 
👉 More analysis: TuringPost.com 
👉 Interviews: @realturingpost

Links:
About LoRA https://www.turingpost.com/p/lora 
Moonshot AI: The Chinese Unicorn Revolutionizing Long-Context AI https://www.turingpost.com/p/moonshotai 
Thinking Machines Lab, “Inkling: Our open-weights model” https://thinkingmachines.ai/news/introducing-inkling/ 
Thinking Machines Lab, [[concepts/google-workspace-access|Inkling Model]] Card https://thinkingmachines.ai/model-card/inkling/ 
Thinking Machines Lab, Tinker https://thinkingmachines.ai/tinker/ 
Moonshot AI, “Kimi K3: Open [[concepts/frontier-intelligence|Frontier Intelligence]]” https://www.kimi.com/blog/kimi-k3 
Arena, Kimi K3 Frontend Code Arena result https://x.com/arena/status/2077824029126504525  
Semianalysis about Kimi K3 https://x.com/SemiAnalysis_/status/2077966560447074689 
Arena, Code Arena methodology https://arena.ai/blog/code-arena/ 
[[entities/artificial-analysis|Artificial Analysis]], Kimi K3 https://artificialanalysis.ai/models/kimi-k3 
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

## Related Concepts
- [[concepts/open-weight-models|open-weight models]] — [Wikipedia](https://en.wikipedia.org/wiki/open-weight_models)
- [[concepts/ai-scale|AI scale]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_scale)
- [[concepts/openclaw|model deployment]] — [Wikipedia](https://en.wikipedia.org/wiki/model_deployment)
- [[concepts/open-source-ai-strategies|open-source AI strategies]] — [Wikipedia](https://en.wikipedia.org/wiki/open-source_AI_strategies)
- Mixture of Experts (MoE) — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_Experts_%28MoE%29)
- [[concepts/scaling|model scaling]] — [Wikipedia](https://en.wikipedia.org/wiki/model_scaling)
- [[concepts/ai-deployment-strategies|AI deployment strategies]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_deployment_strategies)
- [[concepts/low-rank-adaptation|low-rank adaptation (LoRA)]] — [Wikipedia](https://en.wikipedia.org/wiki/low-rank_adaptation_%28LoRA%29)
- [[concepts/fine-tuning|fine-tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/fine-tuning)
- [[concepts/synthetic-puzzle-generation|synthetic data]] — [Wikipedia](https://en.wikipedia.org/wiki/synthetic_data)
- [[concepts/model-quantization|model quantization]] — [Wikipedia](https://en.wikipedia.org/wiki/model_quantization)
- multimodal [[concepts/foundation-model|foundation models]] — [Wikipedia](https://en.wikipedia.org/wiki/multimodal_foundation_models)
- [[concepts/vps|cloud infrastructure]] — [Wikipedia](https://en.wikipedia.org/wiki/cloud_infrastructure)
- [[concepts/open-source|Apache 2.0 license]] — [Wikipedia](https://en.wikipedia.org/wiki/Apache_2.0_license)
- [[concepts/sufficient-parameters|parameter efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/parameter_efficiency)
- [[concepts/coding-benchmarks|coding benchmarks]] — [Wikipedia](https://en.wikipedia.org/wiki/coding_benchmarks)
- [[concepts/ai-workflow|customization]] — [Wikipedia](https://en.wikipedia.org/wiki/customization)
- [[concepts/ai-ecosystem|AI ecosystem]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_ecosystem)
- privacy requirements — [Wikipedia](https://en.wikipedia.org/wiki/privacy_requirements)

## Related Entities
- [[entities/kimi-k3|Kimi K3]] — [Wikipedia](https://en.wikipedia.org/wiki/Kimi_K3)
- [[entities/inkling|Inkling]] — [Wikipedia](https://en.wikipedia.org/wiki/Inkling)
- [[entities/moonshot-ai|Moonshot AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Moonshot_AI)
- [[entities/thinking-machines-lab|Thinking Machines Lab]] — [Wikipedia](https://en.wikipedia.org/wiki/Thinking_Machines_Lab)
- [[entities/turing-post-tv|Turing Post TV]] — [Wikipedia](https://en.wikipedia.org/wiki/Turing_Post_TV)
- [[entities/ksenia|Ksenia]] — [Wikipedia](https://en.wikipedia.org/wiki/Ksenia)
- Mira Murati — [Wikipedia](https://en.wikipedia.org/wiki/Mira_Murati)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/fable-5|Fable 5]] — [Wikipedia](https://en.wikipedia.org/wiki/Fable_5)
- GPT-5.6 Sol — [Wikipedia](https://en.wikipedia.org/wiki/GPT-5.6_Sol)
- [[entities/claude|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)