---
wiki-ingested: true
title: "Ontologies: Essential Guardrails for Trustworthy Agentic Systems and Neurosymbolic AI"
date: 2026-07-30
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-07-30 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Ontologies: Essential Guardrails for Trustworthy Agentic Systems and Neurosymbolic AI
**Clip title:** Why [[concepts/agentic-frameworks|Agentic Systems]] Need Ontologies — Frank Coyle, UC Berkeley
**[[entities/tasia-custode|Author]] / channel:** AI Engineer
**URL:** https://www.youtube.com/watch?v=Sir59K8ZDPU

### Summary
This video, presented by Dr. [[entities/frank-p-coyle|Frank P. Coyle]] at the [[entities/ai-engineer|AI Engineer]] [[entities/earth|World]]'s [[entities/meta-fair-lab|Fair]], delves into the critical need for ontologies within [[concepts/agentic-frameworks|agentic systems]], particularly [[concepts/demystifying-llms|large language models]] (LLMs). The core argument is that while agents offer powerful, probabilistic [[concepts/reasoning|reasoning]], they require logical "[[concepts/ai-safety|guardrails]]" provided by ontologies to ensure trustworthiness, [[concepts/coherence|coherence]], and adherence to defined domains. Dr. Coyle highlights the evolving landscape of computer [[concepts/science|science]], where AI is rapidly transforming job prospects and the need to effectively leverage this "new universe" of intelligent agents.

Dr. Coyle outlines two distinct lineages converging in modern AI: the neural [[concepts/evolutionary-lineage|lineage]] (agents) and the symbolic [[concepts/evolutionary-lineage|lineage]] (ontologies). The agentic side, rooted in early AI pioneers like McCarthy and Minsky, focuses on "Perceive, Decide, Act" [[concepts/loops|loops]], powered by probabilistic [[concepts/ai-models|neural networks]] that *propose* what is likely. Ontologies, on the other hand, originate from the [[concepts/philosophy|philosophy]] of being (Aristotle, Quine) and provide a formal specification of shared conceptualizations, establishing what is *permitted* through symbols and [[concepts/inference|inference]]. Neither lineage alone is sufficient; agents are powerful but uncertain, operating over domains they only partly understand, while traditional symbolic [[concepts/ai-models|AI systems]], though trustworthy, often suffered from scalability issues.

The convergence of these two lineages forms "neurosymbolic AI," where the probabilistic agent operates inside formalized [[concepts/ai-safety|guardrails]]. This synthesis allows for "probabilistic [[concepts/reasoning|reasoning]] inside" and "logical constraints outside." Dr. Coyle emphasizes that the "hallucinations" often associated with LLMs are, in a way, a feature akin to human imagination, but they necessitate structured constraints to prevent errors and ensure [[concepts/software-reliability|reliability]]. He illustrates how ontologies, essentially data as graphs where [[concepts/nodes|entities]] are [[concepts/nodes-and-relationships|nodes and relationships]] are edges, offer a flexible and extensible way to model complex domains, overcoming the rigidity of traditional relational databases.

Building an ontology can be approached top-down (expert-defined entities and rules) or bottom-up (extracted from existing data). Critically, Dr. Coyle advises leveraging existing taxonomies like Schema.org or DBpedia to avoid reinvention. To keep agents "honest," technologies like RDFS (Resource Description Framework Schema) and OWL (Web Ontology Language) are employed. RDFS enables inference (e.g., if Bob teaches, and "teaches" has a Teacher domain, then Bob is a Teacher), while OWL enforces logical constraints such as functional properties (a person can only have one father) or disjoint properties (a customer cannot also be a support representative). These logical constructs act as a validation layer, checking the LLM's emitted candidate triples against the ontology to flag, reject, or repair violations, ensuring the agent operates within defined and sensible boundaries.

### Video Description & Links
#### Description
A second refund on the same order. A payout sent to the support desk instead of the buyer. An order status of "probably shipped." These are the kinds of mistakes a probabilistic agent makes and a paragraph of [[concepts/instructions|instructions]] cannot reliably stop. Frank Coyle argues that most agent failures, from brittle tools to fragile handoffs, are symptoms of one missing layer: a formal ontology sitting outside the model as logical guardrails. LLMs [[concepts/purpose|reason]] probabilistically over domains they only half understand, and no amount of [[concepts/prompt-based-modeling|prompt engineering]] closes that gap.

His fix is neurosymbolic: probabilistic reasoning inside, [[concepts/open-source-philosophy|logic]] outside. An ontology is just typed entities, relationships, and constraints, expressed with old and boring standards like RDFS and OWL, that let you say a payment status must be one of three values, that a customer and a support rep are different things, that an order can only be refunded once. Wrap a [[concepts/claude-ai|Claude]] [[concepts/acting|tool use]] [[concepts/loop|loop]] with a validator: when the model proposes a tool call, check its types with Pydantic and its results against the ontology, and only then let it act. The catches that are painful to write in English become a few lines of logic.

[[entities/speaker|Speaker]] info:
- https://x.com/coyle_frankp
- https://www.linkedin.com/in/frank-coyle/
- https://www.frank-coyle.ai/

Timestamps:
0:00 - Intro and an [[concepts/phil-moriarty|educator]]'s philosophy
2:21 - Two lineages: agents and ontologies
4:04 - Neurosymbolic AI: guardrails around a probabilistic model
5:23 - What an ontology actually is
6:14 - Building one, and the [[concepts/expert-systems|expert systems]] era
7:55 - Reusing existing taxonomies
9:12 - RDFS and OWL: inference and constraints
12:12 - Agents, loops, and how they break
14:22 - A Claude tool use loop with an ontology validator
17:47 - Pydantic at the door, ontology at the ledger
18:52 - The errors an ontology catches that English cannot

#### Tags
`ai`, `ai engineer`, `ai engineering`, `software development`, `tech`, `startups`, `software architecture`, `machine learning`

#### URLs
- https://x.com/coyle_frankp
- https://www.linkedin.com/in/frank-coyle/
- https://www.frank-coyle.ai/

## Related Concepts
- [[concepts/uncertainty-expression|ontologies]] — [Wikipedia](https://en.wikipedia.org/wiki/ontologies)
- [[concepts/agentic-systems|agentic systems]] — [Wikipedia](https://en.wikipedia.org/wiki/agentic_systems)
- [[concepts/uncertainty-expression|neurosymbolic AI]] — [Wikipedia](https://en.wikipedia.org/wiki/neurosymbolic_AI)
- [[concepts/large-language-models|large language models]] — [Wikipedia](https://en.wikipedia.org/wiki/large_language_models)
- [[concepts/logical-guardrails|logical guardrails]] — [Wikipedia](https://en.wikipedia.org/wiki/logical_guardrails)
- [[concepts/uncertainty-expression|trustworthy AI]] — [Wikipedia](https://en.wikipedia.org/wiki/trustworthy_AI)
- [[concepts/uncertainty-expression|probabilistic reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/probabilistic_reasoning)
- [[concepts/coherence|coherence]] — [Wikipedia](https://en.wikipedia.org/wiki/coherence)
- [[concepts/knowledge-gap|hallucinations]] — [Wikipedia](https://en.wikipedia.org/wiki/hallucinations)
- neural lineage — [Wikipedia](https://en.wikipedia.org/wiki/neural_lineage)
- symbolic lineage — [Wikipedia](https://en.wikipedia.org/wiki/symbolic_lineage)
- [[concepts/operational-loop|perceive decide act]] — [Wikipedia](https://en.wikipedia.org/wiki/perceive_decide_act)
- schema.org — [Wikipedia](https://en.wikipedia.org/wiki/schema.org)
- dbpedia — [Wikipedia](https://en.wikipedia.org/wiki/dbpedia)
- rdfs — [Wikipedia](https://en.wikipedia.org/wiki/rdfs)
- owl — [Wikipedia](https://en.wikipedia.org/wiki/owl)

## Related Entities
- [[entities/frank-p-coyle|Frank P. Coyle]] — [Wikipedia](https://en.wikipedia.org/wiki/Frank_P._Coyle)
- [[entities/uc-berkeley|UC Berkeley]] — [Wikipedia](https://en.wikipedia.org/wiki/UC_Berkeley)
- AI Engineer World's Fair — [Wikipedia](https://en.wikipedia.org/wiki/AI_Engineer_World%27s_Fair)
- [[entities/ai-engineer|AI Engineer]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Engineer)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- McCarthy — [Wikipedia](https://en.wikipedia.org/wiki/McCarthy)
- Minsky — [Wikipedia](https://en.wikipedia.org/wiki/Minsky)
- Aristotle — [Wikipedia](https://en.wikipedia.org/wiki/Aristotle)
- Quine — [Wikipedia](https://en.wikipedia.org/wiki/Quine)
- Web Ontology Language — [Wikipedia](https://en.wikipedia.org/wiki/Web_Ontology_Language)
- Resource Description Framework Schema — [Wikipedia](https://en.wikipedia.org/wiki/Resource_Description_Framework_Schema)
- Schema.org — [Wikipedia](https://en.wikipedia.org/wiki/Schema.org)