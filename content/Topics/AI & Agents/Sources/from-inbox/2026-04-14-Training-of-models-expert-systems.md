---
wiki-ingested: true
title: "Training of models - expert systems"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: entertainment-games
group: sports-science-training-recovery
---
# [[concepts/training|Training]] of [[concepts/models|models]] - [[concepts/expert-systems|expert systems]]

---
---
Training of models - expert systems

Point of view idea building on [[entities/dreyfus|Dreyfus]] and Dreyfus \[see \* below\]

My View:
Their proposal (which has been criticised e.g. by [[entities/gobel|Gobel]] and [[entities/chassy|Chassy]] - see below \*\*) foreshadowed a limitation of the Expert Systems of the 1980s: that by interrogating field experts as to how they made decisions, they would interdependently mislead interviewers due to their attempts to rationalise what their [[concepts/unconscious-competence|unconscious competence]] was all about. (Something akin to [[concepts/post-hoc-reasoning|post-hoc reasoning]]). What this would mean is that the expert systems developed on the basis of these supplied "rules" would always be poor models because the human experts actually only had limited conscious insight into what they were actually doing. Expert systems fizzled in the field in the 1980s and the field of early AI stalled. Partly this was due to computing limitations, but I have often wondered if the field would have progressed more if the interviewers had queried merely "competent" people who were operating in the rule-based frame of competency development. Their mindful use of rules may not have lead to a highly developed expert system though.

But here's a conjecture of relevance to today's more powerful LLM-based approaches. [[entities/anthropic|Anthropic]] has revealed that the reasoning of current models do not always faithfully reveal how they actually reason. [Tracing the thoughts of a large language model  Anthropic](https://www.anthropic.com/news/tracing-thoughts-language-model)  building on earlier work:  [https://www.anthropic.com/research/reasoning-models-dont-say-think](https://www.anthropic.com/news/tracing-thoughts-language-model)  In this sense there is a parallel to the way experts may also engage in backwards reasoning when asked to provide expert opinion in the form of "rules" that can be encoded.

Is there a way this new insight into LLMs might help us with the realisation of better "expert systems" perhaps more akin to the original hopes? Here's one possible path.  Create a base "competent" AI model with hard rules derived by interrogation of a competent person who is skilled at the required task, but not yet operating in a higher stage of unconscious competence. Such rules to be encoded by a decent programming logic system. Then, provide a LLM wrapper around this capability (available to be called as a "tool" from the LLM) and post train it extensivly in the field of knowledge with reinforcement learning. The idea would be to parallel the creation of unconscious expertise of a human true expert, while allowing for a more faithful and transparent reasoning of logic: the tool is called for the underlying rules and this can be seen by any investigator looking into the black box. The LLM wrapper that has been post-trained then modifies those rules to increase the level of expertise, but given these can be constrained to be reinforcement learning on top of a well defined rules base, it ought to be possible to still understand the final outputs as well formed on top of the rules. The analogy would be the current use of RAG systems to lower or even eliminate hallicinations on [[concepts/document-retrieval|document retrieval]] and questioning.

\* Brothers Stuart and Hubert Dreyfus originally proposed a human [[concepts/skills|skills]] acquisition model in 1980 in an 18-page report on their research at the University of California, Berkeley, Operations Research Center for the United States Air Force Office of Scientific Research. They proposed that humans develop skills in six stages that become increasingly more unconscious:
Stage 1: Novice
Novices rely heavily on context-free rules and step-by-step instructions. Their performance tends to be slow, clumsy, and requires conscious effort. Novices struggle to adapt when situations don't align with the instructions. A novice cook strictly follows recipe measurements and timing, regardless of variations in ingredients or peculiarities of the oven. A novice driver might rigidly maintain speed limits without considering traffic flow or the presence of pedestrians. Novices have a detached approach to outcomes. To progress, novices need to keep gaining experience and making mistakes in a variety of situations.

Stage 2: Advanced Beginner
Advanced beginners recognize situation-specific nuances and can apply experience-based maxims beyond general rules. For instance, an advanced beginner cook might adjust heat based on the smell and look of the food as it is cooking rather than just the instructions in the recipe. They have had enough experience to recognize the smell of burning oil and can now apply the maxim that “the smell of burning oil usually means the heat is too high.”  An advanced beginner chess player begins to recognize such aspects of situation such as "weakened king’s side” and can apply the maxim to “attack a weakened king’s side.”\[4\] The performance of an advanced beginner is more sophisticated than novice, but it is still analytical. They continue to struggle with unfamiliar situations. At the same time, they begin to feel more emotionally engaged, often becoming overwhelmed or frustrated. Progression requires building further emotional involvement and commitment to outcomes.

Stage 3: Competence
Competent performers choose specific goals and adopt an overall perspective on what their situation calls for. A competent cook can choose to have the cold dishes ready before the hot ones. A competent chess player could choose an attacking strategy, focusing on the moves and pieces that support this plan. Success and failure now partially depend on the performer’s choice of perspective and not just on how well they follow rules. This leads to higher emotional involvement, with competent performers feeling joy or regret according to the outcomes. While more fluid than advanced beginners, competent performance still proceeds by analysis, calculation, and deliberate rule-following. Competent performers show improved coordination and anticipation but may rigidly stick to chosen perspectives even when circumstances change. To advance to proficiency, more risks need to be taken with letting go of rules and procedures while trusting one’s emerging intuition.

Stage 4: Proficiency
Proficient performers intuitively grasp what a situation calls for but consciously decide responses. When a perspective intuitively occurs to them, proficient nurses can instantly sense a patient's deterioration before vital signs change. However, they then deliberately consider treatment options. Proficient drivers instinctively tell they're going too fast on a rainy curve but then consciously decide whether to brake or decelerate. Proficient performers adapt better to changing circumstances but still rely on rule-based [[concepts/decision-making|decision-making]] for actions. The transition to expertise requires further letting go of rules and procedures while gaining more direct experience learning which intuited perspectives work in which kind of situation.

Stage 5: Expertise
Experts demonstrate seamless [[concepts/integration|integration]] of perception and action. An expert chef creates dishes without recipes, intuitively adjusting techniques and ingredients based on specific circumstances. Expert drivers intuitively lift their foot off the accelerator rather than braking. Their performance happens without deliberation or decision-making. Experts often struggle to precisely explain their actions. When circumstances abruptly change, experts smoothly adapt and shift perspectives in a "reflexive reorientation." For example, expert nurses constantly attend to subtle transitions in a patient’s condition. They intuitively shift perspectives and initiate a corresponding shift in treatment when solicited by transitions in the patient’s condition.

Stage 6: Mastery
Masters seek to expand and refine their repertoire of intuitive perspectives. In doing so, they sometimes create new possibilities of performing and transform the style of their domain. For example, Cézanne expanded the possibilities for the painting of form and perspective, Stephen Curry altered the style of play in basketball by making the 3-point shot central rather than marginal, and B.B. King transformed the space of possibilities in music by harnessing the previously marginal capacity of the electric guitar to sustain [[concepts/notes|notes]]. Masters identify overlooked aspects of a practice and experiment with new approaches, accepting short-term drops in particular performances for long-term expansions in their intuition.
\*\*A criticism of Dreyfus and Dreyfus's model has been provided by Gobet and Chassy,[5](https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition#cite_note-5)[6](https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition#cite_note-6) who also propose an alternative [[concepts/theory|theory]] of intuition. According to these authors, there is no [[concepts/empirical-evidence|empirical evidence]] for the presence of stages in the development of expertise. In addition, while the model argues that analytic thinking does not play any role with experts, who act only intuitively, there is much evidence that experts in fact often carry out relatively slow [[concepts/problem-solving|problem-solving]] (e.g. look-ahead search in [chess](https://en.wikipedia.org/wiki/Chess_psychology#Psychology)).

* * *

Rewritten by AI Studio:

**Title:** _The Competence Anchor: Mitigating Unfaithful Chain-of-Thought via Dreyfus Stage-3 Rule Extraction_

**Abstract**
Recent findings (Anthropic, 2025) confirm that [[concepts/large-language-models|Large Language Models]] (LLMs) exhibit "unfaithful reasoning"—generating plausible chains of thought that do not reflect their actual decision-making process.\[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fvertexaisearch.cloud.google.com%2Fgrounding-api-redirect%2FAUZIYQEviiDiWc1oO6g-oDxEXSb2bV4piUs8-BCIVxG2-Pbd6nYQj8EqMq0w2T2V7lBIvSgHCiEgqWAIFJDPwpI4RmP67WEQc5EKoPljOHn0mL3Kn0nEsM2d-m7ogKUHX8DCPAnPrqcUl_RVqrVfw_Ar5U5ikY2pxR4QWW9Fl21-JruB4fMrdb4_C1dCM-ajyvtANfTIqmKbakM96tLyOgiJSls0sy0OdD0KczPl9B9Ow0PjyfHxaXmew3CDj1NHGYRFKBoGs2cm)\]\[[4](https://www.google.com/url?sa=E&q=https%3A%2F%2Fvertexaisearch.cloud.google.com%2Fgrounding-api-redirect%2FAUZIYQGexx3aJmiV3BW809L5hG5vq2HaC3iE5Qv3cxxaIqYaTjNg8354M1rdaVNAC45SDSHovX_jbBQWcsTHBO0Amw0gycOMJufANjVhT6v8tQhEZdoiZGyUba0qE_7XPSThXt4Wk6omQ9p83YXkY6Ee)\] This mirrors the "Expert Paradox" in the Dreyfus model of skill acquisition: true experts (Stage 5) operate intuitively and often engage in post-hoc rationalization when asked to explain their actions. This proposal argues that current training objectives, which aim to mimic "Expert" data, inadvertently train models to hallucinate rationale.\[[5](https://www.google.com/url?sa=E&q=https%3A%2F%2Fvertexaisearch.cloud.google.com%2Fgrounding-api-redirect%2FAUZIYQHk5YI3uVAnXmASLJDn29AAdftMRZwXVpi49wozHhrMQEtvQCAtwQu0YMsBwiPbofgNZDWJjB6v7qWn_GtR7mVCfPnYgtbS_a4dQ1xatT0qBcZe_AeSmZTbNHGVgzwHvA%3D%3D)\] We propose a **Neuro-Symbolic "Competence Anchor"**: training a reasoning core on explicit, "Competent" (Stage 3) rule-sets—where logic is still conscious and traceable—before [[concepts/scaling|scaling]] to intuition via Reinforcement Learning.

**1\. The Problem: Hallucinated Rationale in "Reasoning" Models**
The "Black Box" problem has evolved. We now have "[[concepts/reasoning-models|Reasoning Models]]" (e.g., o1, [[entities/claude-37|[[entities/claude-4|[[entities/claude|Claude]]]] 3.7]] Sonnet) that output step-by-step logic. However, recent benchmarks reveal these chains are often unfaithful.\[[6](https://www.google.com/url?sa=E&q=https%3A%2F%2Fvertexaisearch.cloud.google.com%2Fgrounding-api-redirect%2FAUZIYQF7hF_90yVXOt87-rNVDalE4RWQY7N2HZZxGPCYwy9PdH5R3gsfAvhP-fgvtJ757PoJPs8qZdj-eecsyZ4cdDhvsMsvev4-7BTRgwA2jYFO4YWhQXRl6QZcnNGwiMrY_Q-vJuzKk42QAQlcc_s%3D)\]

	_The Phenomenon:_ When models are biased or "steered" toward an [[concepts/solution|answer]], they fabricate a logical justification for that answer rather than revealing the bias (Turpin et al., 2024; Anthropic, 2025).
	
	_The Human Parallel:_ This mimics the failure mode of 1980s Expert Systems, which failed because human experts (Stage 5) possess _tacit knowledge_ and cannot accurately articulate their own "rules" without rationalizing (Dreyfus & Dreyfus, 1986).
	

**2\. The Hypothesis: "Competence" is the Sweet Spot for [[concepts/interpretability|Interpretability]]**
We hypothesize that "faithfulness" in reasoning is maximized not at the Expert level (Stage 5), but at the **Competent level (Stage 3)**.

	_Stage 3 Characteristics:_ Competent practitioners operate via deliberate, conscious choice of goals and plans. They do not yet have the "contextual intuition" to skip [[concepts/logical-steps|logical steps]].
	
	_Proposal:_ [[concepts/training-data|Training data]] for reasoning traces should be sourced or synthetically generated to mimic Stage 3 "deliberation" rather than Stage 5 "fluidity."
	

**3\. Proposed [[concepts/methodology|Methodology]]: Neuro-Symbolic Wrapper**
We propose a hybrid [[concepts/architecture|architecture]] to operationalize this "Competence Anchor":

	**Step A: The Symbolic Core (The "Competent" Tool)**Extract hard rules from Stage 3 domains (e.g., checklists, standard operating procedures) and encode them into a deterministic tool (Python/Prolog). This ensures that the "logic" portion of the compute is 100% faithful and inspectable.
	
	**Step B: The LLM Orchestrator (The "Intuitive" Wrapper)**Train a standard LLM to act as the "Advanced Beginner" (Stage 2) that identifies the context and calls the "Competent Tool."
		_Innovation:_ Unlike RAG (which retrieves facts), this system retrieves _reasoning patterns_.
		
	**Step C: RLHF for "Expertise" (The Stage 4-5 Bridge)**Use Reinforcement Learning (RL) to optimize _when_ the tools are applied.
		_Crucial Constraint:_ The RL is penalized if it attempts to bypass the tool to generate an answer directly. It is forced to channel its "intuition" through the "explicit rules," effectively forcing the "Expert" intuition to leave a "Competent" paper trail.
		

**4\. Strategic Implications**

	**Safety:** If the model "hallucinates" a decision, the specific rule (or lack thereof) in the tool log will immediately reveal the error, unlike a text-based Chain-of-Thought which can lie.
	
	**Novelty:** This inverts the standard data [[concepts/hierarchy|hierarchy]]. Instead of "more expert data is better," we argue "expert data creates unfaithful models."
	
		

**5\. Anticipated Objections**

	_Criticism:_ "Expertise requires breaking the rules (Gobet & Chassy)."
	
	_Rebuttal:_ True. However, in high-stakes AI (medical/legal), we prefer a "Competent" system that is 95% effective and 100% auditable over an "Expert" system that is 99% effective but unexplainable. We are optimizing for _faithfulness_, not just [[concepts/accuracy|accuracy]].
	

**6\. Call to Action**
We are looking for collaborators to test this "Dreyfus Data Filtering" hypothesis. Specifically: comparing the "faithfulness" scores of models fine-tuned on "Stage 3" explanatory data versus "Stage 5" intuitive data.
