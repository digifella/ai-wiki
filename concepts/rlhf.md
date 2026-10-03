---
type: concept
domain: ai-agents
tags:
  - "AI"
  - "RLHF"
  - "RLCD"
  - "Alignment"
  - "Training"
  - "LLM"
  - "llm-alignment"
  - "reward-modeling"
  - "ppo"
  - "human-feedback"
aliases:
  - "Reinforcement Learning from Human Feedback"
summary: RLHF is a training technique aligning large language models with human preferences through supervised fine-tuning, reward modeling, and reinforcement learning optimization.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-16T20:32:15+00:00" }
group: ai-futures-self-improvement
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# RLHF

**[[concepts/reinforcement-learning-from-human-feedback|Reinforcement Learning from Human Feedback]]** is a training technique used to align [[concepts/large-language-models|large language models]] with human preferences and values. It typically involves three stages: supervised fine-tuning, reward modeling, and reinforcement learning optimization.

## Core Concepts
- **Reward Model**: A separate model trained to predict human preferences over model outputs.
- **PPO (Proximal Policy Optimization)**: The reinforcement learning algorithm commonly used to update the policy model based on reward signals.
- **Alignment**: The process of ensuring model behavior matches human intent, safety guidelines, and ethical standards.

## Evolution: RLCD
Recent developments suggest a shift from purely [[concepts/human-preferred-text|human-preferred text]] generation to **[[concepts/calibrated-decisions|Calibrated Decisions]]**. This approach, highlighted in recent analyses, moves beyond simple preference matching to ensure decisions are robustly calibrated against ground truth or logical consistency, rather than just human opinion.

- **Key Insight**: Human feedback can be noisy or biased; [[concepts/calibrated-decision-making|calibrated decision-making]] aims for more reliable alignment.
- **Proposed by**: [[entities/diogo-almeida|Diogo Almeida]], co-inventor of the technique behind [[entities/chatgpt|ChatGPT]].
- **Analysis**: See [[lab-notes/2026-09-17-Jev-RLCDs-Shift-from-Human-Preferred-Text-to-Calibrated|Jev: RLCD's Shift from Human-Preferred Text to Calibrated Decisions]] for a detailed breakdown of this shift.

## References
- [Jev: RLCD's Shift from Human-Preferred Text to Calibrated Decisions](https://www.youtube.com/watch?v=X8Outd-khS0)
