---
wiki-ingested: true
title: "SKILLOPT: Self-Evolving AI Agent Skills via Systematic Optimization"
date: 2026-05-27
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-05-27 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## SKILLOPT: Self-Evolving AI Agent Skills via Systematic Optimization
**Clip title:** AI Just Found a New Way to Learn
**Author / channel:** [[entities/dr-know-it-all|Dr. Know-it-all]] Knows it all
**URL:** https://www.youtube.com/watch?v=KrWrZot2KiQ

### Summary
The video provides a detailed overview of a new Microsoft research paper titled "SKILLOPT: Executive Strategy for Self-Evolving [[concepts/agent-harnesses|Agent Skills]]." The main topic revolves around a novel approach to training [[concepts/ai-agents|AI agents]], moving beyond traditional [[concepts/prompt-based-modeling|prompt engineering]] to systematically optimize text-based "skills" in a manner analogous to how [[concepts/deep-neural-networks|deep neural networks]] are trained. The presenter emphasizes that this is a significant development, potentially ushering in a completely different paradigm for building AI systems by improving procedural [[concepts/cognition|cognition]] without retraining entire [[concepts/large-language-model-llm|large language models]].

Currently, agent skills are often hand-crafted or loosely evolved through manual self-revision, lacking a robust optimization process. Traditional "prompts" used to guide AI behavior are described as fragile, stateless, and difficult to improve systematically, leading to slow and inefficient development cycles. Furthermore, existing "harnesses" ([[concepts/software|Software]] 1.0 code wrapped around LLMs) are brittle and model-specific, hindering transferability. SkillOpt addresses these limitations by treating the agent's external state (the text of its skills) as a trainable entity, drawing direct parallels from deep [[concepts/learning|learning]] concepts like gradient descent, learning rates, and validation checks.

SkillOpt employs a dual-model system: one model executes the skill and produces verifiable output, while a separate optimizer model analyzes failures and proposes add, delete, or replace edits to the skill text. Edits are only accepted if they strictly improve a held-out validation score, preventing overfitting and incoherent "prompt drift." Crucially, rejected edits are not discarded but become "negative knowledge," guiding future optimization efforts in a form of [[concepts/reinforcement-learning|reinforcement learning]]. This methodology fosters continuous, bounded improvements to smaller, modular skills, moving away from large, monolithic prompts towards more manageable and reusable components.

The results presented in the paper are remarkably positive, showing substantial improvements across various benchmarks (e.g., spreadsheet, Office QA, math tasks) without altering the underlying LLM [[concepts/weights|weights]]. This demonstrates that optimized skills possess high transferability across different models, harnesses, and benchmarks, indicating that the skill's quality is more impactful than the specific [[concepts/harness|harness]] it operates within. The video concludes by highlighting that this is not merely a [[concepts/theory|theoretical framework]] but an engineering document with immediate implications. Variants of SkillOpt could be implemented today in existing [[concepts/agentic-systems|agent systems]], potentially transforming [[concepts/action-oriented-ai|agentic AI]] into adaptable "operating systems" composed of thousands of trainable, reusable [[concepts/cognitive-abilities-cognitive-conceptsskillsskills-such-as-conceptsmemorymemory|cognitive skills]].

### Video Description & Links
#### Description
Get 5% off your Jowua order: https://www.jowua-life.com/special_deals_by_drknow

*Get your FREE 90 Days to AI PDF,* and book me at dr-john-gibbs-[[concepts/consulting|consulting]].[[entities/vercel|vercel]].app. Want help navigating AI, [[concepts/robotics|robotics]], and the future of tech? I offer keynotes, hands-on workshops, strategy sprints, and advisory services. 

*You can purchase My Intelli-Cut AI-based [[concepts/video-editing|video editing]] software here: https://dreamweaver6171.gumroad.com/l/mcnzgp

Source industrial arms, AMRs, and [[concepts/cooperative-robots|cobots]]. Find the right [[concepts/integration|integration]] partners for your factory floor.
https://industrial-leads.com/go/john-robotics-6bf4

Connect with vetted carriers for LTL, FTL, and intermodal shipping. Save 15-30% on your logistics spend.
https://industrial-leads.com/go/john-freight-6bf4

Access the world's largest network of industrial [[concepts/3d-printing|3D printing]] service bureaus and [[concepts/hardware|hardware]] vendors.
https://industrial-leads.com/go/john-3d-printing-6bf4

Join this channel to get access to perks:
https://www.youtube.com/channel/UCyqpZ8HY9FY5jH-RoVcwlnw/join

John Gibbs x Industrial-Leads — brand deals + high-intent buyer leads: https://industrial-leads.com/c/jgibbs

**To become part of our Patreon team, help support the channel, and get awesome perks, check out our Patreon site here: https://www.patreon.com/DrKnowItAllKnows. Thanks for your support!

**Want up to $1,000 off a new Tesla, or a free month of Starlink?**
Tesla: https://www.tesla.com/referral/john11286. 
Starlink: https://www.starlink.com/residential?referral=RC-2831852-84142-63
Thank you!

Get The [[entities/elon-musk|Elon Musk]] Mission (I've got two chapters in it) here: 
Paperback: https://amzn.to/3TQXV9g
Kindle: https://amzn.to/3U7f7Hr!

**Want some awesome Dr. Know-it-all merch, including the YEAR OF EMBODIED AI Shirt? Check out our awesome Merch store: https://drknowitall.itemorder.com/sale
For a limited time, use the code "Knows2021" to get 20% off your entire order!

**Check out Artimatic: https://www.artimatic.io

**You can help support this channel with one click! We have an [[entities/amazon|Amazon]] Affiliate link in several countries. If you click the link for your country, anything you buy from Amazon in the next several hours gives us a small commission, and costs you nothing. Thank you!
* USA: https://amzn.to/39n5mPH
* [[entities/germany|Germany]]: https://amzn.to/2XbdxJi
* [[entities/uk|United Kingdom]]: https://amzn.to/3hGlzTR
* France: https://amzn.to/2KRAwXh
* Spain: https://amzn.to/3hJYYFV

**What do we use to shoot our videos?
-Sony alpha a7 III: https://amzn.to/3czV2XJ
  --and lens: https://amzn.to/3aujOqE
-Feelworld portable field monitor: https://amzn.to/38yf2ah
-Neewer compact desk tripod: https://amzn.to/3l8yrUk
-Glidegear teleprompter: https://amzn.to/3rJeFkP
-Neewer dimmable LED lights: https://amzn.to/3qAg3oF
-Rode Wireless Go II Lavalier microphones: https://amzn.to/3eC9jUZ
-Rode NT USB+ Studio Microphone: https://amzn.to/3U65Q3w
-Focusrite Scarlette 2i2 [[concepts/audio-modality|audio]] interface: https://amzn.to/3l8vqDu
-Studio soundproofing tiles: https://amzn.to/3rFUtQU
-Sony MDR-7506 Professional Headphones: https://amzn.to/2OoDdBd
-Apple M1 Max Studio: https://amzn.to/3GfxPYY
--Apple M4 [[entities/macbook-pro|MacBook Pro]]: https://amzn.to/4mo3WIP
-Docking Station for MacBook: https://amzn.to/3yIhc1S
-Philips Brilliance 4K Docking Monitor: https://amzn.to/3xwSKAb
-Sabrent 8TB SSD [[concepts/ambition|drive]]: https://amzn.to/3rhSxQM
-DJI Mavic Mini Drone: https://amzn.to/2OnHCEw
-GoPro Hero 9 Black action camera: https://amzn.to/3vgVMrH
-GoPro Max 360 camera: https://amzn.to/3nORGYk
-Tesla phone mount: https://amzn.to/3U92fl9
-Suction car mount for camera: https://amzn.to/3tcUfRK
-Extender Rod for car mount camera: https://amzn.to/3wHQXsw

**Here are a few products we've found really fun and/or useful:
-NeoCharge Dryer/EV charger splitter: https://amzn.to/39UcKWx
-Lift pucks for your Tesla: https://amzn.to/3vJF3iB
-Emergency tire fill and repair kit: https://amzn.to/3vMkL8d
-CO2 Monitor: https://amzn.to/3PsQRh2
-Camping mattress for your Tesla model S/3/X/Y: https://amzn.to/3m7ffef

**Music by Zenlee. Check out his amazing music on instagram —@zenlee_music 
or [[entities/youtube|Youtube]] — https://www.youtube.com/channel/UCM4r7zhQrvc0o8MrNe8fxmg

Tesla Stock: TSLA

**EVANNEX
Check out the Evannex web site: https://evannex.com/
If you use my discount code, KnowsEVs,  you get $10 off any order over $100!

**For business inquiries, please email me here: DrKnowItAllKnows@gmail.com
Twitter: https://twitter.com/DrKnowItAll16
Also on Twitter: @Tesla_UnPR: https://twitter.com/tesla_un
Instagram: @drknowitallknows

**Want some outdoorsy videos? Check out Whole Nuts and Donuts: https://www.youtube.com/channel/UCRbAL4HwfQTx7Xt5iZBqgDQ

Links for this video:
https://arxiv.org/pdf/2605.23904
https://x.com/garrytan/status/2059144022778896392?s=46

#### Tags
`dr know it all`, `dr know-it-all`, `deep neural networks`, `Artificial intelligence`, `self driving`, `tesla`, `elon musk`, `ai`, `tesla news`, `tsla`, `tesla stock`, `elon`, `tweet`, `elon tweet`, `cybertruck`, `model y`, `Tesla vision`, `twitter`, `full self driving`, `fsd`, `teslaq`, `Tesla`, `teslabot`, `spacex`, `fsd beta`

#### URLs
- https://www.jowua-life.com/special_deals_by_drknow
- https://dreamweaver6171.gumroad.com/l/mcnzgp
- https://industrial-leads.com/go/john-robotics-6bf4
- https://industrial-leads.com/go/john-freight-6bf4
- https://industrial-leads.com/go/john-3d-printing-6bf4
- https://www.youtube.com/channel/UCyqpZ8HY9FY5jH-RoVcwlnw/join
- https://industrial-leads.com/c/jgibbs
- https://www.patreon.com/DrKnowItAllKnows
- https://www.tesla.com/referral/john11286
- https://www.starlink.com/residential?referral=RC-2831852-84142-63
- https://amzn.to/3TQXV9g
- https://amzn.to/3U7f7Hr!
- https://drknowitall.itemorder.com/sale
- https://www.artimatic.io
- https://amzn.to/39n5mPH
- https://amzn.to/2XbdxJi
- https://amzn.to/3hGlzTR
- https://amzn.to/2KRAwXh
- https://amzn.to/3hJYYFV
- https://amzn.to/3czV2XJ
- https://amzn.to/3aujOqE
- https://amzn.to/38yf2ah
- https://amzn.to/3l8yrUk
- https://amzn.to/3rJeFkP
- https://amzn.to/3qAg3oF
- https://amzn.to/3eC9jUZ
- https://amzn.to/3U65Q3w
- https://amzn.to/3l8vqDu
- https://amzn.to/3rFUtQU
- https://amzn.to/2OoDdBd
- https://amzn.to/3GfxPYY
- https://amzn.to/4mo3WIP
- https://amzn.to/3yIhc1S
- https://amzn.to/3xwSKAb
- https://amzn.to/3rhSxQM
- https://amzn.to/2OnHCEw
- https://amzn.to/3vgVMrH
- https://amzn.to/3nORGYk
- https://amzn.to/3U92fl9
- https://amzn.to/3tcUfRK
- https://amzn.to/3wHQXsw
- https://amzn.to/39UcKWx
- https://amzn.to/3vJF3iB
- https://amzn.to/3vMkL8d
- https://amzn.to/3PsQRh2
- https://amzn.to/3m7ffef
- https://www.youtube.com/channel/UCM4r7zhQrvc0o8MrNe8fxmg
- https://evannex.com/
- https://twitter.com/DrKnowItAll16
- https://twitter.com/tesla_un
- https://www.youtube.com/channel/UCRbAL4HwfQTx7Xt5iZBqgDQ
- https://arxiv.org/pdf/2605.23904
- https://x.com/garrytan/status/2059144022778896392?s=46

## Related Concepts
- [[concepts/self-evolving-ai-agent-skills-optimization|Self-Evolving AI Agent Skills Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-Evolving_AI_Agent_Skills_Optimization)
- [[concepts/systematic-optimization|Systematic Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Systematic_Optimization)
- [[concepts/executive-strategy-for-skill-evolution|Executive Strategy for Skill Evolution]] — [Wikipedia](https://en.wikipedia.org/wiki/Executive_Strategy_for_Skill_Evolution)
- [[concepts/self-evolving-ai-agent-skills-optimization|Self-Evolving AI Agent Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-Evolving_AI_Agent_Skills)
- Executive Strategy — [Wikipedia](https://en.wikipedia.org/wiki/Executive_Strategy)
- Procedural Cognition — [Wikipedia](https://en.wikipedia.org/wiki/Procedural_Cognition)
- Text-Based Skill Training — [Wikipedia](https://en.wikipedia.org/wiki/Text-Based_Skill_Training)
- Dual-Model System — [Wikipedia](https://en.wikipedia.org/wiki/Dual-Model_System)
- Gradient Descent Analogy — [Wikipedia](https://en.wikipedia.org/wiki/Gradient_Descent_Analogy)
- Negative Knowledge — [Wikipedia](https://en.wikipedia.org/wiki/Negative_Knowledge)
- [[concepts/machine-learning|Reinforcement Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_Learning)
- Modular Skills — [Wikipedia](https://en.wikipedia.org/wiki/Modular_Skills)
- Prompt Drift [[concepts/preventive-care|Prevention]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Drift_Prevention)
- Model-Agnostic Transferability — [Wikipedia](https://en.wikipedia.org/wiki/Model-Agnostic_Transferability)
- Software 1.0 Harnesses — [Wikipedia](https://en.wikipedia.org/wiki/Software_1.0_Harnesses)
- Validation Score Optimization — [Wikipedia](https://en.wikipedia.org/wiki/Validation_Score_Optimization)
- Stateless Prompts — [Wikipedia](https://en.wikipedia.org/wiki/Stateless_Prompts)
- Agentic AI Operating Systems — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_AI_Operating_Systems)

## Related Entities
- Dr. Know-it-all Knows it all — [Wikipedia](https://en.wikipedia.org/wiki/Dr._Know-it-all_Knows_it_all)
- [[entities/skillopt|SKILLOPT]] — [Wikipedia](https://en.wikipedia.org/wiki/SKILLOPT)
- [[entities/microsoft|Microsoft]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/llms|LLMs]] — [Wikipedia](https://en.wikipedia.org/wiki/LLMs)
- Deep Neural Networks — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Neural_Networks)
- Jowua — [Wikipedia](https://en.wikipedia.org/wiki/Jowua)
- John Gibbs Consulting — [Wikipedia](https://en.wikipedia.org/wiki/John_Gibbs_Consulting)
- Intelli-Cut — [Wikipedia](https://en.wikipedia.org/wiki/Intelli-Cut)
- Industrial Leads — [Wikipedia](https://en.wikipedia.org/wiki/Industrial_Leads)
- Office QA — [Wikipedia](https://en.wikipedia.org/wiki/Office_QA)
- Spreadsheet Benchmarks — [Wikipedia](https://en.wikipedia.org/wiki/Spreadsheet_Benchmarks)