---
wiki-ingested: true
title: "Text Diffusion: Google DeepMind's Faster Parallel Text Generation via Denoising"
date: 2026-06-09
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: google-ai-ecosystem
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-09 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Text Diffusion: Google DeepMind's Faster Parallel Text Generation via Denoising
**Clip title:** [[concepts/text|Text]] Diffusion — Brendon Dillon, [[concepts/2026-04-29-google-deepmind|Google DeepMind]]
**Author / channel:** AI Engineer
**URL:** https://www.youtube.com/watch?v=r305-aQTaU0

### Summary
The video provides a detailed overview of [[concepts/text|Text]] Diffusion, a novel approach to [[concepts/text-generation|text generation]] developed by [[concepts/2026-04-29-google-deepmind|Google DeepMind]]. [[entities/speaker|Speaker]] Brendan O'Donoghue explains that this research area adapts the principles of [[concepts/image-and-video-diffusion-models|image and video diffusion models]] to discrete text [[concepts/tokens|tokens]]. The core idea involves taking a clean sequence of text, gradually adding noise (corrupting it by replacing or adding random [[concepts/tokens|tokens]]), and training a [[concepts/neural-network|neural network]] to iteratively denoise and reconstruct the original text. [[concepts/assistive-technology|At]] [[concepts/inference|inference]], the process starts with pure noise and refines it over multiple steps to generate a coherent output.

A key distinction between Text Diffusion and traditional Autoregressive (AR) [[concepts/large-language-model-llm|Large Language Models]] (LLMs) lies in their generation process. AR models generate text one token [[concepts/assistive-technology|at]] a time with causal [[concepts/attention-mechanisms|attention]] (looking only at past tokens), which can be slow. In [[concepts/contrast|contrast]], Diffusion LLMs generate blocks of N tokens jointly over several denoising steps. This parallel generation offers significantly faster inference due to more efficient utilization of [[concepts/hardware|hardware]] like GPUs and [[entities/tpus|TPUs]], which are often memory-bound. While Text Diffusion boasts lower latency per individual user, it currently [[concepts/faces|faces]] a disadvantage in lower overall throughput for large batches compared to AR models, making it more expensive for widespread cloud-based serving.

Beyond [[concepts/speed|speed]], Text Diffusion models offer several other unique capabilities. They enable *bidirectional attention*, allowing the model to consider future tokens during generation, which facilitates *self-correcting [[concepts/reasoning|reasoning]]*. A demo illustrated this by having the model initially guess a [[concepts/mathematics|math]] problem's answer incorrectly, then iterate through [[concepts/reasoning-steps|reasoning steps]], and finally self-correct its initial answer to the correct one. Traditional AR models, by comparison, often make errors and either correct them as a separate step or incorporate the error into subsequent reasoning. Diffusion models also support *adaptive computation*, where the model can autonomously decide to spend more denoising steps (and thus more [[concepts/compute|compute]]) on harder problems and less on easier ones, improving efficiency and quality. Lastly, they can perform *fast in-place editing*, similar to image inpainting, allowing users to modify existing text or insert new content that is contextually consistent.

The culmination of these advantages, particularly low latency, opens doors for entirely new [[concepts/software|applications]]. O'Donoghue showcased compelling demos including a fully generative Wikipedia and Reddit [[concepts/experience|experience]] where all content (text, comments, [[concepts/images|images]]) and even HTML are created on the fly by the model, appearing seamless to the user. Another demo presented a completely generated operating system, responding to user clicks in real-time. A final example highlighted voice-[[concepts/coding|coding]] a functional to-do list application in seconds. Ultimately, while addressing throughput for large-scale [[concepts/deployment|deployment]] remains a challenge, Text Diffusion's current strengths in low-latency, dynamic, and self-correcting generation suggest its potential to unlock novel [[concepts/interactive-experiences|interactive experiences]] and on-device applications, complementing existing AR models.

### Video Description & Links
#### Description
[[entities/chatgpt-4o|GPT-4o]] answered 40. Gemini 2.5 Flash answered 42 and stuck to it even after working through the reasoning incorrectly. The [[concepts/gemini-diffusion-model|Gemini Diffusion model]], considerably smaller than both, answered 60 on the first [[concepts/inference|forward pass]], then 49, then corrected itself to 39 once it finished reasoning. Bidirectional attention means it can see future tokens and go back to fix mistakes. Autoregressive models cannot do that.

Brendon Dillon covers why text diffusion is fast (24 denoising steps to generate 256 tokens means roughly 10x fewer [[concepts/memory|memory]] transfers than autoregressive generation), what the tradeoff is (lower throughput at large batch sizes makes it expensive to serve at scale today), and what gets unlocked when latency drops to 2,000 tokens per second. The demos include a fake Wikipedia generated on the fly, a Reddit clone with AI generated comments and images, an operating system where every click generates the next screen, and a todo app built in 15 seconds by [[concepts/tone|voice]].

Timestamps:
0:00 Introduction to Text Diffusion
1:02 How Text Diffusion Works (Training and Inference)
2:06 Gemini Diffusion Research Preview
3:04 Difference Between Autoregressive and Diffusion Models
4:02 Pros and Cons of Text Diffusion
6:13 Hardware Efficiency: Why Text Diffusion is Faster
8:47 Bidirectional Reasoning and Self-Correction
12:00 Dynamic and Adaptive Computation
14:26 In-place Text Editing
16:09 Low Latency Applications and Demos
20:05 Q&A [[concepts/session|Session]]

#### Tags
`ai`, `ai engineer`, `ai engineering`, `software development`, `tech`, `startups`, `software architecture`, `machine learning`

## Related Concepts
- [[concepts/text-diffusion|Text Diffusion]] — [Wikipedia](https://en.wikipedia.org/wiki/Text_Diffusion)
- [[concepts/text-diffusion|Parallel Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Parallel_Generation)
- [[concepts/discrete-token-models|Discrete Token Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Discrete_Token_Models)
- [[concepts/image-and-video-diffusion-models|Image and Video Diffusion Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_and_Video_Diffusion_Models)
- Denoising Process — [Wikipedia](https://en.wikipedia.org/wiki/Denoising_Process)
- Autoregressive LLMs — [Wikipedia](https://en.wikipedia.org/wiki/Autoregressive_LLMs)
- Bidirectional Attention — [Wikipedia](https://en.wikipedia.org/wiki/Bidirectional_Attention)
- Self-Correcting Reasoning — [Wikipedia](https://en.wikipedia.org/wiki/Self-Correcting_Reasoning)
- Adaptive Computation — [Wikipedia](https://en.wikipedia.org/wiki/Adaptive_Computation)
- In-Place Text Editing — [Wikipedia](https://en.wikipedia.org/wiki/In-Place_Text_Editing)
- Low-Latency Inference — [Wikipedia](https://en.wikipedia.org/wiki/Low-Latency_Inference)
- Hardware Utilization Efficiency — [Wikipedia](https://en.wikipedia.org/wiki/Hardware_Utilization_Efficiency)
- Batch Throughput — [Wikipedia](https://en.wikipedia.org/wiki/Batch_Throughput)
- [[concepts/generative-ui|Generative UI]] — [Wikipedia](https://en.wikipedia.org/wiki/Generative_UI)
- Image and Video Diffusion Adaptation — [Wikipedia](https://en.wikipedia.org/wiki/Image_and_Video_Diffusion_Adaptation)

## Related Entities
- [[entities/google-deepmind|Google DeepMind]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_DeepMind)
- [[entities/brendon-dillon|Brendon Dillon]] — [Wikipedia](https://en.wikipedia.org/wiki/Brendon_Dillon)
- [[entities/ai-engineer|AI Engineer]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Engineer)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- GPT-4o — [Wikipedia](https://en.wikipedia.org/wiki/GPT-4o)
- Gemini Diffusion Model — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_Diffusion_Model)
- Wikipedia — [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia)
- Reddit — [Wikipedia](https://en.wikipedia.org/wiki/Reddit)