---
wiki-ingested: true
title: "SkillOpt: Microsoft's Text-Based Evolution of AI Agent Skills"
date: 2026-06-24
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-24 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## SkillOpt: Microsoft's Text-Based Evolution of AI Agent Skills
**Clip title:** SkillOpt: Microsoft's New Way to 'Train' [[concepts/ai-agents|AI Agents]]: Run Locally
**[[entities/tasia-custode|Author]] / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=yj17Fvyr09s

### Summary
The video introduces SkillOpt, a novel executive strategy from [[concepts/2026-04-30-microsoft|Microsoft Research]] designed for self-evolving [[concepts/agent-harnesses|agent skills]]. The core idea behind SkillOpt is to train a "skill document" – a human-readable [[concepts/markdown|Markdown]] file containing [[concepts/instructions|instructions]] and principles – rather than directly [[concepts/fine-tuning|fine-tuning]] the [[concepts/parameters|weights]] of a [[concepts/neural-network|neural network]] model. This approach draws a clever analogy to deep [[concepts/learning|learning]], incorporating concepts like epochs, mini-batches, learning rates, and validation gates, but uniquely applies them to the evolution of a text-based skill document. The underlying [[concepts/statistical-language-modeling|language model]] itself remains unchanged; what evolves are the instructions it is given to perform tasks.

The SkillOpt [[concepts/training-process|training process]] operates through a six-step [[concepts/loop|loop]]:
1.  **Rollout:** The target language model executes a batch of tasks using the current skill document as context.
2.  **Reflect:** A secondary "optimizer" model analyzes the performance of the tasks, identifies areas for improvement, and drafts potential "edit patches" for the skill document. This is analogous to the backward pass in deep learning.
3.  **Aggregate:** Similar proposed edits are merged to remove redundancies.
4.  **Select:** The aggregated patches are ranked and clipped based on a "learning rate" equivalent, which defines the maximum number of edits allowed per step.
5.  **Update:** The selected edits are applied to generate a new candidate skill document.
6.  **Gate:** This crucial step evaluates the candidate skill against a held-out validation set. If the new skill outperforms the current one, it is accepted and becomes the new skill; otherwise, it is rejected. At each epoch boundary, a "slow update" (momentum) helps prevent the skill from forgetting previously learned valuable instructions, and a "[[entities/meta|meta]] skill" ([[concepts/memory|memory]]) on the optimizer's side learns which types of edits are most effective.

The video demonstrates SkillOpt by installing it on an Ubuntu system equipped with an [[concepts/nvidia-rtx|NVIDIA RTX]] A6000 GPU and locally serving a [[concepts/qwen-llm|Qwen]] 3.5-4B language model using [[concepts/vllm|vLLM]]. ALFWorld, a text-based simulated home environment where an [[concepts/ai-agent|AI agent]] completes household tasks like cleaning and placing objects, serves as the test bench. The SkillOpt training loop is then launched, allowing the local [[concepts/qwen-model|Qwen model]] to improve its ability to solve these tasks by refining its Markdown skill document. The resulting skill document showcases structured task types (e.g., "Pick & Place," "Clean & Place"), general principles (like decomposing tasks, systematic exploration, and avoiding [[concepts/loops|loops]]), and strategies for hard search-loop recovery and common mistakes.

In conclusion, SkillOpt offers an innovative framework for creating [[concepts/automated-diagnostic-analysis|self-evolving AI]] agents by focusing on the continuous refinement of explicit, human-readable skill documents instead of altering complex [[concepts/base-model-weights|neural network weights]]. This strategy allows agents to learn and adapt to various tasks with measurable outcomes – from managing [[entities/excel|Excel]] files to navigating household chores – by iteratively improving their internal checklists and operational guidelines. The system demonstrates a practical approach to meta-learning, where the agent not only performs tasks but also learns how to learn more effectively over time.

### Video Description & Links
#### Description
This video locally installs Microsoft Skillopt and tests it out.

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon code: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#skillopt 

PLEASE FOLLOW ME: 
▶ LinkedIn:  https://www.linkedin.com/in/fahdmirza/
▶ YouTube: https://www.youtube.com/@fahdmirza
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://github.com/microsoft/SkillOpt

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.linkedin.com/in/fahdmirza/
- https://www.youtube.com/@fahdmirza
- https://www.fahdmirza.com
- https://github.com/microsoft/SkillOpt

## Related Concepts
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/self-evolving-skills|Self-Evolving Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-Evolving_Skills)
- [[concepts/skill-document|Skill Document]] — [Wikipedia](https://en.wikipedia.org/wiki/Skill_Document)
- [[concepts/markdown-instructions|Markdown Instructions]] — [Wikipedia](https://en.wikipedia.org/wiki/Markdown_Instructions)
- [[concepts/neural-network-fine-tuning|Neural Network Fine-Tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/Neural_Network_Fine-Tuning)
- [[concepts/vanishing-gradient-problem|Deep Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Learning)
- [[concepts/epochs|Epochs]] — [Wikipedia](https://en.wikipedia.org/wiki/Epochs)
- [[concepts/self-evolving-ai-agent-skills-optimization|Microsoft Research]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Research)
- [[concepts/local-execution|Local Execution]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Execution)
- [[concepts/text-based-training|Text-Based Training]] — [Wikipedia](https://en.wikipedia.org/wiki/Text-Based_Training)
- [[concepts/self-evolving-ai-agent-skills-optimization|Executive Strategy]] — [Wikipedia](https://en.wikipedia.org/wiki/Executive_Strategy)
- [[concepts/human-readable-instructions|Human-Readable Instructions]] — [Wikipedia](https://en.wikipedia.org/wiki/Human-Readable_Instructions)
- [[concepts/agent-evolution|Agent Evolution]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Evolution)
- [[concepts/self-evolving-ai-agent-skills-optimization|SkillOpt]] — [Wikipedia](https://en.wikipedia.org/wiki/SkillOpt)
- Self-Evolving AI Agents — [Wikipedia](https://en.wikipedia.org/wiki/Self-Evolving_AI_Agents)
- Text-Based Skill Evolution — [Wikipedia](https://en.wikipedia.org/wiki/Text-Based_Skill_Evolution)
- Deep Learning Analogies — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Learning_Analogies)
- [[concepts/meta-learning|Meta-Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Meta-Learning)
- Validation Gates — [Wikipedia](https://en.wikipedia.org/wiki/Validation_Gates)
- Optimizer Model — [Wikipedia](https://en.wikipedia.org/wiki/Optimizer_Model)
- [[concepts/task-decomposition|Task Decomposition]] — [Wikipedia](https://en.wikipedia.org/wiki/Task_Decomposition)
- Search-Loop Recovery — [Wikipedia](https://en.wikipedia.org/wiki/Search-Loop_Recovery)

## Related Entities
- [[entities/microsoft-research|Microsoft Research]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Research)
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- Qwen 3.5-4B — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.5-4B)
- [[entities/vllm|vLLM]] — [Wikipedia](https://en.wikipedia.org/wiki/vLLM)
- ALFWorld — [Wikipedia](https://en.wikipedia.org/wiki/ALFWorld)
- NVIDIA RTX A6000 — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA_RTX_A6000)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- [[entities/microsoft|Microsoft]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)
- Ko-fi — [Wikipedia](https://en.wikipedia.org/wiki/Ko-fi)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)