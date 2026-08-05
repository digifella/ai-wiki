---
title: "LLM Fluid Intelligence: ARC AGI 2 Challenge and Synthetic Puzzle Generation"
date: 2026-06-06
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# LLM Fluid Intelligence: ARC AGI 2 Challenge and Synthetic Puzzle Generation
Generated: 2026-06-06 · API: Gemini 2.5 Flash · Modes: Summary

---

## LLM Fluid Intelligence: ARC AGI 2 Challenge and Synthetic Puzzle Generation
**Clip title:** Big Techday 26: Do LLMs have fluid intelligence? - D. Chakravorty, Dr. B. Altaner & Dr. D. Manik
**Author / channel:** TNG Technology Consulting GmbH
**URL:** https://www.youtube.com/watch?v=OSU-hoknGRs

### Summary
This video delves into the question of whether Large Language Models (LLMs) possess fluid intelligence, drawing insights from TNG Technology Consulting's participation in the ARC AGI 2 (Abstraction and Reasoning Corpus for Artificial General Intelligence) competition. The ARC AGI 2 challenge requires models to infer complex transformation rules from a few 2D pixel grid input-output examples and apply them to new grids. The speakers highlight that while humans find these puzzles relatively easy due to innate perceptive priors and real-world experience (like playing in a sandbox), LLMs struggle because they lack these prior experiences and their weights are typically frozen during inference, hindering their ability to adapt to novel situations – a hallmark of fluid intelligence. Initial benchmarks for ARC AGI 2 showed frontier models performing barely above random chance, indicating a significant unsolved problem.

The team's journey began with the ambitious goal of solving ARC AGI 2. Recognizing a severe shortage of training data, they developed a novel approach: using an LLM (GPT 4.1) to generate 8,000 synthetic puzzles, posing the problem as program synthesis rather than direct grid generation. This pipeline involved "ideation" by a creative, non-reasoning model, "specification generation" by a reasoning model (O4-Mini), and "implementation" by O4-Mini with access to a code interpreter. A crucial discovery was the power of "interleaved thinking," where reasoning models could "think" and reflect between executing tool calls (like Python code), significantly boosting their problem-solving capabilities and scaling test-time compute. This allowed them to shift from traditional text-only reinforcement learning to "Agentic RL," where the model outputs and refines executable code.

Further experimentation addressed the critical role of visual priors. Counterintuitively, language models had shown better performance than vision models on ARC AGI 1. The team demonstrated that language models are efficient visual learners, capable of acquiring high-level visual priors through supervised fine-tuning on their synthetic data. This allowed smaller, open-weight models to match the visual description capabilities of much larger, proprietary models with significantly less computational cost. They also uncovered and fixed critical bugs in existing inference engine implementations of chat templates, which dramatically improved the performance of models like GPT OSS 120B, enabling them to achieve previously unseen accuracy by leveraging extensive interleaved thinking and code execution.

The project concluded that tool use combined with interleaved thinking provides a monumental boost to LLM performance in reasoning tasks, effectively grounding the models and allowing them to dynamically adapt their computational effort. Key takeaways for working with modern LLMs include avoiding overly engineered agentic harnesses, prioritizing simplicity and verifiable feedback loops, and recognizing the immense potential of open-weight models to catch up with frontier models over time. The team's work, which at the time of publication achieved state-of-the-art results for ARC AGI 2, underscored that even outside large frontier labs, there's ample room for innovation by pushing models beyond their innate capabilities through clever engineering and understanding their evolving strengths.

### Video Description & Links
#### Description
Do LLMs have fluid intelligence? Lessons from competing in ARC AGI 2

In 2025, the performance of LLMs in verifiable domains like math, coding tasks, and reasoning increased rapidly.
Tools like Claude code or Codex became a standard tool in the repertoire of software developers as a result. What was the mechanism behind this rise in capability?

To answer this question, Dibya Chakravorty, Bernhard Altaner, and Debsankha Manik invite you to take part in their journey of competing in ARC-AGI-2, one of the hardest benchmarks targeting abstract reasoning capabilities at a time before agentic harnesses were commonplace.

When they started their work, frontier LLMs had near-noise level performance in that benchmark. Nine months later, in January 2026, they had devised an agentic harness whose performance surpassed the human baseline. They argue that dynamically using as much compute as necessary for the complexity level of the task at hand, makes LLMs perform significantly better at reasoning tasks.
More precisely, in 2025, LLMs finally allowed for efficient "test-time compute scaling" during inference by leveraging two trends: reasoning within the chain of thought, and using tool calls (in their case, a python interpreter). By combining these two principles, i.e., interleaving the reasoning process with tool calls, we realized that even smaller models could significantly improve their capabilities and exhibit features of fluid intelligence, at least in verifiable domains. While this paradigm is now generally accepted in the field, their journey provides a behind-the-scenes view of a rapidly developing field from the perspective of a small AI Lab - and some practical lessons.

About the speakers:
Dibya Chakravorty: Dibya Chakravorty is a Python generalist working across AI applications, backend systems, cloud architecture, and software quality. His current work focuses on helping organizations automate well-structured processes with AI. He is active in AI research and education, with research interests in reinforcement learning, continual learning, and ARC AGI - investigating the gap between today's systems and AGI. In Munich, he co-organizes the local AGI and Python meetup groups. 

Dr. Debsankha Manik: Dr. Debsankha Manik is a theoretical physicist by training who completed his PhD on nonlinear dynamics of complex networks. He has worked on optimization problems related to transportation of people and goods in both academia and industry. His research focuses on AI systems that protect user privacy and enable effective human-in-the-loop workflows. 

Dr. Bernhard Altaner: Dr. Bernhard Altaner studied physics and mathematics in Konstanz and Cambridge and earned his PhD in Göttingen on the foundations of stochastic thermodynamics. His research focuses on information processing in complex systems, ranging from the molecular to the cosmological scale. He currently works part-time on developing smart energy management systems and explores how studying AI might reveal insights into information processing in the brain and its connection to consciousness. 

#tngbtd

#### Tags
`tng`, `tng big techday`, `big techday`, `big techday 26`, `tng big techday 26`, `llms`, `llm`, `large language model`, `large language models`, `intelligence`, `fluid intelligence`, `ARC-AGI-2`
