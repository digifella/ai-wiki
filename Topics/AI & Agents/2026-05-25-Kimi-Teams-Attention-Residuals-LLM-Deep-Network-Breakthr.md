---
wiki-ingested: true
title: "Kimi Team's Attention Residuals: LLM Deep Network Breakthrough for Pre-Norm Dilution"
date: 2026-05-25
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: model-efficiency-compression
type: "source-summary"
aliases:
  - "lab-notes/2026-05-25-Kimi-Teams-Attention-Residuals-LLM-Deep-Network-Breakthr"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Kimi Team's Attention Residuals: LLM Deep Network Breakthrough for Pre-Norm Dilution
**Clip title:** An Insanely Elegant [[concepts/model-architecture|LLM Architecture]] Breakthrough Just Dropped
**Author / channel:** bycloud
**URL:** https://www.youtube.com/watch?v=iw1VF8HOCrk

### Summary
The video introduces "[[concepts/attention-mechanisms|Attention]] Residuals" (AttnRes), a new architectural breakthrough for [[concepts/large-language-model-llm|Large Language Models]] (LLMs) proposed by [[entities/kimi|Kimi]] Team ([[entities/moonshot-ai|Moonshot AI]]), designed to address a critical limitation in [[concepts/deep-transformer-networks|deep transformer networks]]: the "Pre-Norm Dilution Problem." This problem arises because, in standard residual connections, earlier layer outputs are uniformly aggregated as the network deepens, causing initial information to be progressively diluted and effectively lost, much like repeatedly summarizing lecture [[concepts/notes|notes]] where older details fade away. Consequently, later layers are forced to produce disproportionately larger outputs to influence the final representation, leading to uncontrolled magnitude growth and [[concepts/reduced-precision|reduced precision]].

To overcome this, [[concepts/attention-mechanisms|Attention]] Residuals rethinks how information is passed across layers. Instead of a fixed additive accumulation, each layer can selectively retrieve and combine representations from *all* preceding layers using learned, input-dependent attention [[concepts/weights|weights]]. This approach essentially applies the [[concepts/self-attention|attention mechanism]], traditionally used across [[concepts/tokens|tokens]] in a sequence, vertically across the network's depth. By doing so, information from earlier stages remains accessible and can be utilized with varying relevance, preventing dilution and forcing layers to compete based on importance rather than raw magnitude.

Recognizing that a full Attention Residual [[concepts/adoption|implementation]] would suffer from quadratic [[concepts/computational-scaling|scaling]] (O(L^2) where L is the number of layers), the [[entities/kimi-team|Kimi Team]] proposed an efficient variant called "Block Attention Residuals." This method groups layers into blocks, where internal layers use standard residual connections, but attention across blocks only operates on summarized block-level representations. This significantly reduces computational and [[concepts/memory|memory]] complexity from O(L^2) to O(N^2), where N is the number of blocks, making the approach practically scalable.

Empirical results demonstrate that both full and block Attention Residuals consistently outperform baseline models in terms of lower validation loss for the same computational budget. Notably, the more efficient block version closely tracks the performance of the full version, offering significant cost savings (e.g., a 25% training discount with only a 4% training overhead). The architectural benefits include improved information [[concepts/preservation|preservation]], layers competing by relevance rather than magnitude, and increased expressivity along the depth dimension. This leads to substantial gains in multi-step [[concepts/reasoning|reasoning]] tasks and general language understanding, reinforcing the intuitive elegance and practical efficacy of Attention Residuals as a pivotal development in [[concepts/model-architecture|LLM architecture]].

### Video Description & Links
#### Description
Try Mammouth now for only €10/mo! https://mammouth.ai

Kimi AI's Attention Residual paper is actually such a clean idea. I would say it is even more promising than DeepSeek's mHC.

Learn AI intuitively, best intro into LLMs!
https://intuitiveai.academy/
We just wrote a new piece on RL & RLHF!

Attention Residuals
[Paper] https://arxiv.org/abs/2603.15031

mHC
[Paper] https://arxiv.org/abs/2512.24880

This video is supported by the kind Patrons & YouTube Members: 
🙏Spam Maj, Alex, Chris LeDoux, DX Research Group, Poof N' Inu, Deagan, Robert Zawiasa, Ryszard Warzocha, Tobe2d, Louis Muk, Akkusativ, Kevin Tai, Mark Buckler, NO U, Tony Jimenez, Ângelo Fonseca, jiye, Anushka, Asad Dhamani, Binnie Yiu, Calvin Yan, Clayton Ford, Diego Silva, Etrotta, Gonzalo Fidalgo, Handenon, Hector, Jake [[concepts/gentabs|Disco]] very, [[entities/michael|Michael]] Brenner, Nilly K, OlegWock, Daddy Wen, Shuhong Chen, Sid_Cipher, Stefan Lorenz, Sup, tantan assawade, Thipok Tham, Thomas Di Martino, Thomas Lin, Richárd Nagyfi, Paperboy, mika, Leo, Berhane-Meskel, Kadhai Pesalam, mayssam, Bill Mangrum, nyaa, Toru Mon, Lame Plane, Matej Macak, Len Mo, saylikhapekar, ZyanSheep, THEVIERAOS, Ricardo Raphael Corona-Moreno

[Business Inquiries] bycloud@smoothmedia.co
[Other Inquiries] bycloudai@[[entities/gmail|gmail]].com
[Video Editor]  @Booga04  
Manim Animations created with Manimate https://www.manimate.ai/

#### Tags
`bycloud`, `bycloudai`, `attention residuals`, `attention residual`, `LLM`, `kimi ai`, `kimi ai research`, `moonshot ai research`, `kimi attention residuals`, `attention residuals explained`

#### URLs
- https://mammouth.ai
- https://intuitiveai.academy/
- https://arxiv.org/abs/2603.15031
- https://arxiv.org/abs/2512.24880
- https://www.manimate.ai/

## Related Concepts
- [[concepts/attention-residuals|Attention Residuals]]
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/pre-norm-dilution-problem|Pre-Norm Dilution Problem]]
- [[concepts/large-language-models|Residual Connections]]
- [[concepts/deep-transformer-networks|Deep Transformer Networks]]
- [[concepts/pre-norm-dilution-problem|Pre-Norm Dilution]]
- [[concepts/attention-residuals|Block Attention Residuals]]
- Layer-wise Information [[concepts/flow|Flow]]
- [[concepts/elastic-sub-network-extraction-moe|Model Scaling]]
- [[concepts/multi-step-reasoning|Multi-step Reasoning]]
- [[concepts/computational-complexity|Computational Complexity]] — [Wikipedia](https://en.wikipedia.org/wiki/Computational_complexity)

## Related Entities
- [[entities/kimi-team|Kimi Team]]
- [[entities/moonshot-ai|Moonshot AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Moonshot_AI)
- [[entities/bycloud|bycloud]]
- [[entities/deepseek|DeepSeek]] — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- Patreon — [Wikipedia](https://en.wikipedia.org/wiki/Patreon)
- arXiv — [Wikipedia](https://en.wikipedia.org/wiki/ArXiv)