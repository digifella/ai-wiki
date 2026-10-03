---
wiki-ingested: true
title: "Jev AI: Structured Outputs for Software Integration and Efficiency"
date: 2026-09-18
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: apis-integrations-mcp
type: "source-summary"
aliases:
  - "lab-notes/2026-09-18-Jev-AI-Structured-Outputs-for-Software-Integration-and-E"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Jev AI: Structured Outputs for Software Integration and Efficiency
**Clip title:** Is Jev What AI Has Been Missing? I Tested It.
**Author / channel:** Turing Post TV
**URL:** https://www.youtube.com/watch?v=xBamYoIVzSs

### Summary
The video introduces Jev, a new AI model from [[entities/typesafe-ai|TypeSafe AI]], emphasizing its unique approach to [[concepts/artificial-intelligence|artificial intelligence]] by focusing on structured, [[concepts/calibrated-decision-making|calibrated decision-making]] rather than free-form text generation. The speaker, who gained early access to Jev, provides a walkthrough of its console, highlighting its potential to revolutionize how software interacts with AI. The core premise is that for AI to be truly useful and integrable into software systems, its outputs need to be reliable, quantifiable, and consumable directly by code.

The demonstration begins by showcasing Jev's "Playground" environment, which allows users to define a "State" (contextual information for the model) and formulate "Questions" for evaluation. Jev offers three primitive question types: "Noul" for binary (yes/no) probabilities, "Choice" for selecting from predefined options, and "Score" for grading against a rubric. Through an example of classifying a hotdog as a sandwich, the speaker illustrates how providing explicit criteria (definitions for "sandwich") significantly increases the model's confidence and accuracy. A more complex scenario involving helpdesk ticket triage further demonstrates Jev's ability to answer multiple, diverse questions simultaneously, providing structured JSON outputs that detail priority levels, relevant teams, deadline mentions, and appropriate tools to call, each with a corresponding confidence score.

A key takeaway is Jev's superior performance in terms of speed and cost compared to larger, more generalized language models like [[concepts/gpt-6-astra|GPT-6 Astra]] (Codex). In a side-by-side comparison, Jev solved a problem 18 times faster and used dramatically fewer tokens while maintaining 100% accuracy, making it significantly cheaper. This efficiency is attributed to Jev's "[[concepts/calibrated-decisions|Reinforcement Learning for Calibrated Decisions]]" ([[concepts/rlcd|RLCD]]) training method, which focuses on generating reliable probabilities that accurately reflect the likelihood of a decision being correct. This enables software to confidently act on Jev's outputs or intelligently escalate tasks when uncertainty is high.

The video concludes by emphasizing that Jev represents a strategic shift in AI development. Its creator, [[entities/diogo-almeida|Diogo Almeida]] (co-author of the influential InstructGPT paper), posits that useful AI should deliver precise, actionable decisions for software, rather than conversational text intended for humans. By foregoing free-form text generation, Jev is optimized for speed, cost-effectiveness, and calibrated decision-making, which is crucial for building robust, automated systems. This "[[concepts/system-one-intelligence|System One]]" approach to AI aims to enable complex, multi-step automation tasks, such as browser automation or support ticket routing, by providing a foundation of reliable, quantifiable intelligence that empowers software to perform tasks efficiently and accurately.

### Video Description & Links
#### Description
Jev doesn’t write essays or code. Why everyone is talking about it?!
I got early access to TypeSafe’s new System One Model, explored the playground, and tested it alongside Codex.

Behind Jev is Diogo Almeida, an InstructGPT coauthor whose work helped make ChatGPT possible. Now he’s betting on AI built for software to use. 

Is it a breakthrough or just a classifier? We explain RLCD, look at Vercel and OpenCode examples, and discuss what Jev might mean for the future.

The question: can better small decisions help AI finish bigger jobs?
Watch the demo, then decide: useful classifier, bigger shift, or both?

[[concepts/attention-mechanism|Attention]] Span is here to show you AI isn’t magic. This time, we look at what happens when a model gives up conversation and focuses on decisions.

Links
Introducing Jev and System One Models: https://typesafe.ai/blog/introducing-system-one-models-and-jev
TypeSafe console: https://console.typesafe.ai/home
System One documentation: https://docs.typesafe.ai/concepts/system-one
RLCD and calibrated decisions: https://docs.typesafe.ai/introduction/machine-learning-primer
TypeSafe agent skill: https://docs.typesafe.ai/agent-skill
InstructGPT paper: https://arxiv.org/abs/2203.02155
Neural-network calibration research: https://arxiv.org/abs/1706.04599
Earlier zero-shot text classification research: https://arxiv.org/abs/1909.00161

#AttentionSpan #Jev #TypeSafeAI #Codex #AIAgents #SystemOneModels #RLCD #TuringPost

#### Tags
`AttentionSpan`, `Jev`, `TypeSafeAI`, `Codex`, `AIAgents`, `SystemOneModels`, `RLCD`, `TuringPost`

#### URLs
- https://typesafe.ai/blog/introducing-system-one-models-and-jev
- https://console.typesafe.ai/home
- https://docs.typesafe.ai/concepts/system-one
- https://docs.typesafe.ai/introduction/machine-learning-primer
- https://docs.typesafe.ai/agent-skill
- https://arxiv.org/abs/2203.02155
- https://arxiv.org/abs/1706.04599
- https://arxiv.org/abs/1909.00161

## Related Concepts
- [[concepts/structured-outputs|structured outputs]]
- [[concepts/calibrated-decision-making|calibrated decision-making]]
- [[concepts/weathernext-3|software integration]] — [Wikipedia](https://en.wikipedia.org/wiki/System_integration)
- [[concepts/weathernext-3|AI models]] — [Wikipedia](https://en.wikipedia.org/wiki/Artificial_intelligence)
- [[concepts/system-one-model|TypeSafe AI]]
- [[concepts/rlcd|RLCD]] — [Wikipedia](https://en.wikipedia.org/wiki/Jev_%28AI_model%29)
- [[concepts/calibrated-decisions|Reinforcement Learning for Calibrated Decisions]] — [Wikipedia](https://en.wikipedia.org/wiki/Jev_%28AI_model%29)
- [[concepts/cost-efficiency|cost efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Cost_efficiency)
- [[concepts/zero-shot-prompting|prompt engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)
- [[concepts/mode-drop|deterministic AI]]

## Related Entities
- [[entities/jev-ai|Jev AI]]
- [[entities/typesafe-ai|TypeSafe AI]]
- [[entities/turing-post-tv|Turing Post TV]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/diogo-almeida|Diogo Almeida]] — [Wikipedia](https://en.wikipedia.org/wiki/Diogo_Almeida)
- [[entities/gpt-6-astra|GPT-6 Astra]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-6)
- Codex — [Wikipedia](https://en.wikipedia.org/wiki/Codex)
- InstructGPT — [Wikipedia](https://en.wikipedia.org/wiki/GPT-3)
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- Vercel — [Wikipedia](https://en.wikipedia.org/wiki/Vercel)
- OpenCode — [Wikipedia](https://en.wikipedia.org/wiki/OpenCode)