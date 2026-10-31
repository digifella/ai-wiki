---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: baf2922b3daa3f2b8948
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "I Trained Qwen 4B with Distillation to Catch Qwen 27B"
date: 2026-10-30
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-30-hOitZIkMT2Y-I-Trained-Qwen-4B-with-Distillation-to-Catch-Qwen-27B"
---
## I Trained Qwen 4B with Distillation to Catch Qwen 27B
**Clip title:** I Trained Qwen 4B with Distillation to Catch Qwen 27B
**Author / channel:** Prompt Engineering
**URL:** https://www.youtube.com/watch?v=hOitZIkMT2Y

### Summary
**Main Topic:**
The video explores how small AI models (specifically a 4B parameter model) can be trained using knowledge distillation from a larger model (a 27B parameter model) to perform effectively on data analysis tasks, comparing different distillation methods like answering, probability distribution matching, and on-policy distillation.

**Key Points Discussed:**
* **Reinforcement Learning Limitations:** The speaker notes that reinforcement learning (RL) on a 4B model hit a ceiling at around 58.4% performance, stopping because tasks where the model always failed provided no learning signal.
* **Distillation Methods:** The speaker tested three distillation approaches:
  1. *Teacher's Answers:* Training the student on successful transcripts from the teacher. This method reduced token usage by 30% and improved training efficiency without losing accuracy.
  2. *Teacher's Probabilities:* Matching the probability distribution of the teacher over top tokens. This achieved similar performance to RL and teacher answers but required careful handling of tokenization and memory.
  3. *On-Policy Distillation:* Having the student generate attempts in a sandbox and grading every token using the teacher model. This method achieved the highest performance (58.9%) and allowed feedback even on failed attempts.
* **Hardware Setup:** The experiments were run locally using two NVIDIA DGX Spark units connected via a high-speed cable, with the 27B teacher running on one unit and the 4B student on the other.
* **Practical Takeaways:** The speaker highlights that teacher answers are the simplest and most cost-effective method for distillation, while on-policy distillation is best used when reinforcement learning stalls due to repeated failures on difficult tasks.

**Conclusions and Takeaways:**
The video concludes that small open models can significantly benefit from distillation techniques, closing the gap with much larger models. While on-policy distillation yields the strongest results, teacher answers offer an efficient, lightweight alternative that saves tokens and compute time without sacrificing accuracy.

### Video Description & Links
#### Description
Can a 27 billion parameter model teach a 4 billion model to be as good as itself? Last time, RL got Qwen 4B from 52% to 58.4% and then hit a wall. This time I used Qwen 27B as a teacher and tried all three kinds of distillation on two DGX Sparks: training on the teacher's answers, training on its probabilities, and on-policy distillation where the 27B grades every token the 4B writes.

Links
- Previous video (RL, the sandbox, the 58% wall): https://youtu.be/Pl_2TelxjdY
- Code: https://github.com/PromtEngineer/smoldataenvs-grpo-spark
- SmolDataEnvs (the tasks): https://huggingface.co/datasets/FineEnvs/SmolDataEnvs
- Thinking Machines, On-Policy Distillation: https://thinkingmachines.ai/blog/on-policy-distillation/
- Qwen3 Technical Report (strong-to-weak distillation): https://arxiv.org/abs/2505.09388
- Hinton, Vinyals, Dean (2015), Distilling the Knowledge in a Neural Network: https://arxiv.org/abs/1503.02531
- On-policy distillation papers: MiniLLM https://arxiv.org/abs/2306.08543 · GKD https://arxiv.org/abs/2306.13649

Chapters
0:00 Can Qwen 27B teach Qwen 4B?
0:25 What RL did last time, and the wall
1:47 The short answer
2:23 The setup: SmolDataEnvs and a strict checker
4:03 Why RL stopped helping
4:48 How distillation works
5:24 Why the teacher's probabilities matter
6:17 Three ways to distill
8:10 Two DGX Sparks: teacher and student
8:53 Method 1: train on the teacher's answers
11:00 Method 2: train on the teacher's probabilities
12:14 Why the probabilities added nothing
13:32 The limit of learning from transcripts
13:55 Method 3: on-policy distillation
14:38 A real run, graded token by token
15:43 Did it break the 58% wall?
17:13 All six methods on one chart
18:12 What the 4B model already knows
19:41 The 4-tries test
20:47 Caveats
21:04 Two gotchas: tokenizers and vLLM memory
22:06 What should you use?

#distillation #qwen #llm #reinforcementlearning #localai #dgxspark

#### Tags
`qwen 27b teach qwen 4b`, `distillation vs rl`, `knowledge distillation`, `on-policy distillation`, `llm distillation`, `model distillation tutorial`, `logit distillation`, `distill a big model into a small model`, `qwen 3.5`, `qwen 4b`, `qwen 27b`, `reinforcement learning llm`, `grpo`, `train small language model`, `local llm training`, `dgx spark`, `nvidia dgx spark`, `fine-tuning llm`, `vllm`, `thinking machines on-policy distillation`, `small models vs large models`

#### URLs
- https://youtu.be/Pl_2TelxjdY
- https://github.com/PromtEngineer/smoldataenvs-grpo-spark
- https://huggingface.co/datasets/FineEnvs/SmolDataEnvs
- https://thinkingmachines.ai/blog/on-policy-distillation/
- https://arxiv.org/abs/2505.09388
- https://arxiv.org/abs/1503.02531
- https://arxiv.org/abs/2306.08543
- https://arxiv.org/abs/2306.13649
