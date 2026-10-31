---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: d6c8849cdf84781d8127
suggested-topic: "Undecided"
domain: "ai-agents"
title: "Yann LeCun’s JEPA Has Evolved. Here’s What It Can Do."
date: 2026-10-16
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-16-YPP_qApESg0-Yann-LeCuns-JEPA-Has-Evolved.-Heres-What-It-Can-Do"
---
## Yann LeCun’s JEPA Has Evolved. Here’s What It Can Do.
**Clip title:** Yann LeCun’s JEPA Has Evolved. Here’s What It Can Do.
**Author / channel:** Turing Post TV
**URL:** https://www.youtube.com/watch?v=YPP_qApESg0

### Summary
Here's a clear, well-structured summary of the video content:

**Main Topic**
The video explores Joint Embedding Predictive Architecture (JEPA), a framework for machine learning models that predict outcomes based on internal representations rather than recreating every pixel of an image. It highlights how JEPA models use hierarchical planning to navigate complex environments, comparing different planners and discussing how they allocate computational resources.

**Key Points Discussed**
- **JEPA Basics:** JEPA models use an encoder to convert camera images into embeddings (sets of numbers capturing information) and a predictor to estimate outcomes of possible actions.
- **Hierarchical Planning (H-JEPA):** H-JEPA divides planning into multiple levels, predicting different changes at different scales (e.g., lower levels predict short-term changes, higher levels look further ahead).
- **Resource Allocation:** DeepJEPA learns when to spend more computation on an individual prediction, allocating extra processing power around moments of contact or complex interactions.
- **Robotic Experience (RoboJEPA):** RoboJEPA explores scaling up model learning using robotic data, showing that predicting outcomes improves as the model and computational power grow.

**Conclusions / Takeaways**
- JEPA provides a fascinating way for AI to plan and make decisions by focusing on predictive representations rather than full pixel reconstruction.
- Hierarchical planning helps manage complexity by breaking long-term goals into smaller, manageable steps.
- Allocating computational resources effectively improves the success rate of planning and decision-making in robotic systems.

### Video Description & Links
#### Description
In this episode of Attention Span, we explore three recent JEPA papers and what they reveal about learning to predict, plan, and act:
H-JEPA learns different levels of abstraction, connecting longer-range plans to the movements needed to carry them out.

DeepJEPA learns when to spend extra computation refining a prediction, with more work concentrated around contact and interactions between objects.

RoboJEPA scales predictors from 22 million to 8 billion parameters, drawing on experience from twelve robot embodiments and testing planning on a physical robot.

Along the way, we explain embeddings, connect hierarchical planning to an idea from the 1970s, and return to our earlier episodes on JEPA and energy-based models.

The question running through all three papers: what does a machine need to predict well enough to choose what to do next?

Hosted by Ksenia Se. Attention Span explores how AI works, where its ideas come from, and what researchers are learning now.

More analysis: https://www.turingpost.com

LINKS MENTIONED
H-JEPA: End-to-End Learning of Hierarchical World Models for Visual Planning
https://h-jepa.com/
https://arxiv.org/abs/2610.06805
DeepJEPA
https://arxiv.org/abs/2610.00368
RoboJEPA
https://robojepa.github.io/
https://arxiv.org/abs/2610.10515
Our earlier episode: Beyond LLMs: JEPA and the Road to AGI
https://www.youtube.com/watch?v=z0fh0SY3VWc
Our episode about EBM https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=3s 
Yann LeCun: A Path Towards Autonomous Machine Intelligence
https://openreview.net/pdf?id=BZ5a1r-kVsf

#AttentionSpan #JEPA #WorldModels #AI #Robotics #YannLeCun #MachineLearning #TuringPost

#### Tags
`AttentionSpan`, `JEPA`, `WorldModels`, `AI`, `Robotics`, `YannLeCun`, `MachineLearning`, `TuringPost`

#### URLs
- https://www.turingpost.com
- https://h-jepa.com/
- https://arxiv.org/abs/2610.06805
- https://arxiv.org/abs/2610.00368
- https://robojepa.github.io/
- https://arxiv.org/abs/2610.10515
- https://www.youtube.com/watch?v=z0fh0SY3VWc
- https://www.youtube.com/watch?v=NYmXYF8A3Q4&t=3s
- https://openreview.net/pdf?id=BZ5a1r-kVsf
