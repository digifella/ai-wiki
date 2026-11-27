---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: d951e68e0a19fd9ea369
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Tencent DFly2: 4.2× Faster AI Inference"
date: 2026-11-28
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-28-qAD0Pi9grSc-Tencent-DFly2-4.2-Faster-AI-Inference"
---
## Tencent DFly2: 4.2× Faster AI Inference
**Clip title:** Tencent DFly2: 4.2× Faster AI Inference
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=qAD0Pi9grSc
**Credibility:** Commentary (tier 1 of 5). YouTube video from Fahd Mirza: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video discusses DFly2, Tencent's new release designed to speed up long-context speculative decoding by sharing the target's sparsity.

According to the video, DFly2 addresses the issue of AI being slow at writing. A large model normally writes one token at a time, requiring a pass through the model for each token. DFly2 introduces a drafter that guesses well and costs little. To guess well, it needs to know what came before. Many drafters keep a second memory of the conversation, which takes GPU space. DFly2 asks why write notes the big model has already taken. It works with natively sparse models, which pick certain earlier positions instead of reading them all in their sparse attention layers. DFly2 reads the big model's notes and goes to the parts it has already picked.

The video shows that DFly2 is 3.41 times faster compared to 2.63 for DSpark on short-text, code and coding agent tests. DFly2 yields more total output than DSpark on busy servers, showing larger gains on longer workloads.

The video concludes that DFly2's approach of reusing the big model's notes could be significant for AI agents dealing with longer code and conversations. Tencent's recent work on various AI models, including DFly2 and Deep Search Agent, shows a focus on model development and optimization.

### Video Description & Links
#### Description
A plain-English look at Tencent's DFly2: how it reads the big model's own memory, how it differs from other drafters, and what the speed numbers really mean.

#dfly2 #dspark2 #dflash2 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

▶ https://arxiv.org/pdf/2611.34776

All rights reserved © Fahd Mirza

#### URLs
- https://arxiv.org/pdf/2611.34776
