---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: d0ac661308a7b732411d
suggested-topic: "Undecided"
domain: "ai-agents"
title: "JEPA is hard.."
date: 2026-11-14
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-14-cmBD5u7F5zQ-JEPA-is-hard"
---
## JEPA is hard..
**Clip title:** JEPA is hard..
**Author / channel:** Caleb Writes Code
**URL:** https://www.youtube.com/watch?v=cmBD5u7F5zQ
**Credibility:** Commentary (tier 1 of 5). YouTube video from Caleb Writes Code: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video explores the evolution and application of Joint-Embedding Predictive Architectures (JEPAs), an AI learning framework originally introduced by Yann LeCun. Unlike traditional generative models that predict raw pixels, JEPA models are trained to predict internal representations or features of masked areas in images and videos, helping neural networks capture the underlying structure of the data more efficiently. The video discusses how JEPAs transition from image-based models (I-JEPA) to video-based models (V-JEPA) and eventually incorporate hierarchical planning (H-JEPA) to support tasks like video understanding, action classification, and robotic manipulation.

Key points include:
- **Core Concept of JEPA:** Instead of comparing raw pixels, JEPA uses a Joint-Embedding Predictive Architecture where a student model predicts masked latent representations by learning from a teacher model, utilizing techniques like Exponential Moving Average (EMA) to prevent representation collapse.
- **I-JEPA vs. Data2vec:** While data2vec used a similar approach, I-JEPA achieved higher performance on ImageNet-1K linear evaluation using significantly fewer pre-training GPU hours by applying multi-block masking strategies.
- **Extension to Video (V-JEPA):** V-JEPA applies the same predictive latent representation framework to video data using "tube masking," treating video frames as a spatio-temporal sequence.
- **Hierarchical Planning (H-JEPA):** H-JEPA adds multiple levels of timeframes and abstraction to long-horizon planning, allowing models to think across different timescales for robot navigation and manipulation.
- **Inference Costs and Optimization:** The video highlights how running AI agents can become costly due to repeated token processing, promoting solutions like open-weight models, caching mechanisms, and compatible inference APIs.

The speaker concludes that while JEPA represents a significant step toward autonomous machine intelligence by mimicking how humans and animals perceive and interact with the physical world, it remains an evolving field of research. Even if JEPA ultimately is not the final solution, Yann LeCun's commitment to open research provides valuable insights and frameworks that are essential for the future development of physical AI.

### Video Description & Links
#### Description
Try Verda Inference today: frontier open models like Kimi K3.1 Pro and Deepseek V4.1 through one OpenAI-compatible API. Switch in three lines: base URL, API key, model ID. 

JEPA uses latent space representation as a target to predict and gets optimized with the teacher's embedding slowly following the student following the Exponential Moving Average (EMA) schedule.
Tracking the progression of first why JEPA is needed and how it evolved over time where I-JEPA helped show how JEPA can train on self-supervised image data, to V-JEPA and later V-JEPA 2 and more downstream use cases and H-JEPA for hierarchical planning is all pointing towards Yann LeCun's original plan of making autonomous machine intelligence happen.

#jepa #ai #deeplearning

Chapters
00:00 Intro
00:40 Training
02:19 Prediction
02:53 I-JEPA
03:46 EMA
05:32 Assumptions
08:09 V-JEPA
09:55 V-JEPA 2
11:30 H-JEPA
11:49 Lineage
12:16 Yann LeCun
13:48 Conclusion

#### Tags
`JEPA`, `Yann LeCun`, `Yann LeCun JEPA`, `Joint-embedding predictive architecture`, `JEPA explained`, `joint embedding predictive architecture`, `how does JEPA work`, `I-JEPA`, `V-JEPA`, `V-JEPA 2`, `H-JEPA`, `is JEPA the future`, `world model`, `Yann JEPA`, `JEPA model`, `JEPA training`, `what is JEPA`
