---
type: concept
domain: ai-agents
tags:
  - "rlhf"
  - "ai-alignment"
  - "reward-modeling"
  - "llm-training"
  - "rlcd"
aliases:
  - "RLHF"
  - "Reinforcement Learning from Human Feedback"
summary: RLHF aligns large language models with human preferences through supervised fine-tuning, reward modeling, and reinforcement learning, with recent shifts toward calibrated decision-making frameworks like RLCD.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-16T20:32:44+00:00" }
group: training-fine-tuning-evaluation
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Reinforcement Learning from Human Feedback

**Reinforcement Learning from Human Feedback** ([[concepts/rlhf]]) is a technique used to align large language models with human preferences. It involves training a model to generate responses that humans rate as high-quality, often using a reward model derived from human annotations.

## Core Mechanism
- **Supervised Fine-Tuning (SFT):** Initial training on high-quality human-written data.
- **Reward Modeling:** Training a separate model to predict human preferences based on pairs of responses.
- **Reinforcement Learning:** Optimizing the policy model using the reward model via algorithms like PPO (Proximal Policy Optimization).

## Evolution: From RLHF to RLCD
Recent developments indicate a shift away from purely [[concepts/human-preferred-text|human-preferred text]] generation toward more [[concepts/calibrated-decision-making|calibrated decision-making]] processes. This evolution addresses limitations in traditional RLHF, such as reward hacking and lack of factual grounding.

- **[[concepts/rlcd|RLCD]] (Reinforcement Learning from [[concepts/calibrated-decisions|Calibrated Decisions]]):** A proposed framework focusing on calibrated outcomes rather than just human preference scores.
- **Key Insight:** [[entities/diogo-almeida|Diogo Almeida]], co-inventor of the technique behind [[entities/chatgpt|ChatGPT]], highlights a fundamental shift in AI training paradigms.
- **Objective:** Moving beyond "human-preferred text" to ensure models make decisions that are robustly calibrated to truth and utility.
- **Implication:** This shift challenges the core idea that human preference alone is sufficient for optimal model alignment.

## Related Concepts
- Reward Modeling
- Proximal Policy Optimization
- AI Alignment
- [[concepts/large-language-models]]

## References
- [Jev: RLCD's Shift from Human-Preferred Text to Calibrated Decisions](https://www.youtube.com/watch?v=X8Outd-khS0)
- [[lab-notes/2026-09-17-Jev-RLCDs-Shift-from-Human-Preferred-Text-to-Calibrated|Jev: RLCD's Shift from Human-Preferred Text to Calibrated Decisions]]
