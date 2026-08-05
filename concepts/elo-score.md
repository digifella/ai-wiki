---
type: concept
domain: ai-agents
tags:
  - "elo-rating"
  - "skill-assessment"
  - "competitive-games"
  - "llm-benchmarking"
  - "pairwise-comparison"
aliases:
  - "Elo Rating"
  - "Skill Rating System"
  - "Competitive Ranking Metric"
  - "Relative Skill Score"
summary: A rating system used to calculate relative skill levels in zero-sum games and competitive environments by adjusting ratings based on the discrepancy between predicted and actual outcomes.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Elo score

A [[concepts/star-ratings|rating system]] used to calculate the relative [[concepts/skill|skill]] levels of participants in zero-sum games or competitive ranking environments.

## Mechanics
- **Probability-based:** Ratings are adjusted based on the discrepancy between the predicted outcome and the actual result of a match.
- **Zero-sum:** In its fundamental application, points gained by one participant are lost by another.
- **Applications:** Extensively used in Chess, eSports, and [[concepts/machine-learning]] leaderboards.

## Applications in AI Evaluation
- Utilized in LLM [[concepts/benchmark-testing|Benchmarking]] (e.g., [[entities/lm-arena|LMSYS Chatbot Arena]]) to rank models via pairwise human preference comparisons.
- **Recent Developments:**
    - Evaluation of [[entities/openai|OpenAI]] [[entities/gpt-image-20|GPT Image 2.0]] serves as a benchmark for assessing next-gen [[concepts/generative-ai]] and [[concepts/ai-image-generation]] capabilities (Ref: 2026 04 22 [[concepts/whisper-transcription|OpenAI]] [[entities/gpt-image-2|GPT Image 2]].0 Evaluating Next Gen [[concepts/image-translation|AI Image Generation]] Capabilities).
## Source Notes
- 2026-04-22: OpenAI GPT Image 2 · [▶ source](https://www.youtube.com/watch?v=uvdRGC4cFhY)
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Autonomous-Social-Video-Content-Generation-and-Optimization|AI Powered Autonomous Social Video Content Generation and Optimization]] · [▶ source](https://www.youtube.com/watch?v=vjJwgXsMfjM)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-15: [[lab-notes/2026-04-15-Anthropic-Claude-Mythos-Cybersecurity-Capabilities-Benchmark-Gaming-an|Anthropic Claude Mythos Cybersecurity Capabilities Benchmark Gaming an]] · [▶ source](https://www.youtube.com/watch?v=Ersv1ogj7Jo)
