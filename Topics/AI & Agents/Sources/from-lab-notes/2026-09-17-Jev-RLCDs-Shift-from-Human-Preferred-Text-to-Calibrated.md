---
wiki-ingested: true
title: "Jev: RLCD's Shift from Human-Preferred Text to Calibrated Decisions"
date: 2026-09-17
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-futures-self-improvement
type: "source-summary"
aliases:
  - "lab-notes/2026-09-17-Jev-RLCDs-Shift-from-Human-Preferred-Text-to-Calibrated"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Jev: RLCD's Shift from Human-Preferred Text to Calibrated Decisions
**Clip title:** Jev: The Model That Killed Chat GPT's Core Idea? RLCD Explained
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=X8Outd-khS0

### Summary
This video discusses a fundamental shift in AI model training proposed by [[entities/diogo-almeida|Diogo Almeida]], a co-inventor of the technique behind [[entities/chatgpt|ChatGPT]]. While ChatGPT and most [[concepts/large-language-models|large language models]] (LLMs) rely on [[concepts/reinforcement-learning-from-human-feedback|Reinforcement Learning from Human Feedback]] ([[concepts/rlhf|RLHF]]), Almeida argues this approach is a "dead end" for developing truly reliable and [[concepts/autonomous-ai-systems|autonomous AI systems]]. He contends that RLHF, which trains models to produce human-preferred, conversational text, inherently introduces flaws such as "mode dropping," overconfidence, and unreliability, because its primary objective is human approval rather than factual correctness.

Almeida, through his company TypeSafe, has developed an alternative called Reinforcement Learning for [[concepts/calibrated-decisions|Calibrated Decisions]] ([[concepts/rlcd|RLCD]]), manifested in their new model, Jev. Unlike RLHF, RLCD's training signal focuses on outcome correctness, with the objective of achieving an accurate confidence score. This approach aims to produce typed decisions accompanied by a probability, making the AI's certainty explicit. The core difference is that while LLMs are designed to generate words for people, Jev is built to produce reliable, trustworthy decisions for software to act upon.

The claimed benefits of RLCD and the Jev model are significant: it is presented as radically faster and cheaper, as it doesn't generate conversational text token by token. TypeSafe's internal benchmarks suggest a 0% structural output error rate, far superior to the low single-digit error rates reported for models like GPT and [[entities/claude|Claude]]. Furthermore, Jev reportedly offers better accuracy per dollar compared to existing LLMs. This calibrated confidence allows software to automatically act on decisions with high certainty (e.g., above 90% confidence) and escalate to a human only when confidence is low, effectively creating a machine-native intelligence rather than a human-mimicking chatbot.

In conclusion, the video posits that the debate isn't about whether Jev is fast, but whether optimizing for calibrated confidence is a superior foundation for AI that acts autonomously, making RLHF's human-centric flaws a bug rather than a feature. However, it's important to note that these are TypeSafe's own reported findings, not yet independently verified, and the Jev model is currently on a waitlist, awaiting public release and broader scrutiny.

### Video Description & Links
#### Description
This video introduces new model Jev, based on RLCD — Reinforcement Learning for Calibrated Decisions.

#jev #rlcd 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

▶ https://typesafe.ai/

All rights reserved © Fahd Mirza

#### URLs
- https://typesafe.ai/

## Related Concepts
- [[concepts/rlcd|RLCD]] — [Wikipedia](https://en.wikipedia.org/wiki/Jev_%28AI_model%29)
- [[concepts/rlhf|RLHF]] — [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback)
- [[concepts/reinforcement-learning-from-human-feedback|Reinforcement Learning from Human Feedback]] — [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback)
- [[concepts/calibrated-decisions|Calibrated Decisions]]
- [[concepts/human-preferred-text|Human-Preferred Text]]
- [[concepts/autonomous-ai-systems|Autonomous AI Systems]]
- Reinforcement Learning for Calibrated Decisions — [Wikipedia](https://en.wikipedia.org/wiki/Jev_%28AI_model%29)
- Overconfidence — [Wikipedia](https://en.wikipedia.org/wiki/Overconfidence_effect)

## Related Entities
- [[entities/jev|Jev]]
- [[entities/diogo-almeida|Diogo Almeida]] — [Wikipedia](https://en.wikipedia.org/wiki/Diogo_Almeida)
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- TypeSafe — [Wikipedia](https://en.wikipedia.org/wiki/Type_safety)
- [[entities/claude|Claude]]
- YouTube — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)
- Substack — [Wikipedia](https://en.wikipedia.org/wiki/Substack)