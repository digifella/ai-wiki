---
wiki-ingested: true
title: AI Agent Graph-Based Error Correction via Experience Memory Graph (EMG)
date: 2026-07-22
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

Generated: 2026-07-22 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## AI Agent Graph-Based Error Correction via Experience Memory Graph (EMG)
**Clip title:** From [[concepts/loops|LOOPS]] to GRAPHS: [[concepts/ai-agents|AI Agents]] Learn Graph-Based Error Corrections
**[[entities/tasia-custode|Author]] / channel:** Discover AI
**URL:** https://www.youtube.com/watch?v=yC9cd3gKaIc

### Summary
This video introduces a novel [[concepts/ai-research|AI research]] paper titled "[[concepts/experience|Experience]] [[concepts/memory|Memory]] Graph: One-Shot [[concepts/bug-fixing|Error Correction]] for Agents," published by the University of Electronic [[concepts/science|Science]] and Technology of [[entities/china|China]]. The core problem addressed is the inefficiency and unreliability of current [[concepts/ai-agents|AI agents]], particularly smaller [[concepts/demystifying-llms|Large Language Models]] (LLMs), in correcting errors during complex, [[concepts/long-horizon-tasks|long-horizon tasks]]. Standard approaches involve feeding error logs back into the LLM and [[concepts/prompting|prompting]] it to "reflect" and retry, which is both computationally expensive due to iterative processing and prone to LLM "hallucinations" or getting stuck in error [[concepts/loops|loops]], especially for models with fewer parameters.

The central idea of [[concepts/experience-memory-graph|Experience Memory Graph]] (EMG) is to shift [[concepts/bug-fixing|error correction]] from this imprecise, text-based LLM guesswork to a deterministic, mathematical graph matching process. During an *offline training [[concepts/phase|phase]]*, EMG learns by comparing two types of trajectories for a given task: a failed agent exploration (represented as Graph G) and a successful expert trajectory (Graph G'). Both are converted into Directed Action Decision Graphs, where [[concepts/nodes|nodes]] represent actions and edges represent environmental observations. A specialized [[concepts/algorithm|algorithm]], the Fused Gromov-Wasserstein (FGW), is then employed to rigorously [[concepts/feynmans-three-step-scientific-method|compare]] these two graphs. This comparison identifies common workflow elements (the "Common Subgraph") and mathematically computes the exact structural edits (deletions, insertions, relabeling) required to transform the failed trajectory into a successful one. These calculated "Graph Edit Paths" are stored in a [[concepts/vector-store|vector database]] as reusable correction memory.

During *online [[concepts/inference|inference]]* (test time), when the agent encounters a new, potentially unknown task, EMG does not perform any complex graph calculations. Instead, it takes the agent's current prompt, embeds it into a vector, and performs a simple cosine [[concepts/vector-search|similarity search]] against its pre-computed [[concepts/vector-database|vector database]]. This retrieves natural language insights and "Edit Paths" from similar tasks encountered during training. These pre-translated [[concepts/instructions|instructions]] are then fed into the LLM as a guiding prompt (e.g., "Avoid making error X, instead do Y"), aiming for "One-Shot Execution." This approach significantly reduces test-time computational costs and improves efficiency, making it highly effective even for smaller models.

However, the presenter highlights a critical limitation: while EMG excels in efficiency by offloading complex [[concepts/mathematics|math]] to an offline training [[concepts/phase|phase]], its reliance on a vector database lookup for [[concepts/inference|inference]] means it primarily retrieves *known* solutions. For genuinely *unseen tasks* not represented in the [[concepts/custom-dataset|training data]], EMG does not construct novel correct graphs or dynamically reconstruct solutions mathematically; instead, it provides the most similar pre-computed advice. This points to a fundamental philosophical difference: while EMG provides highly efficient error correction based on prior experience, it inherently limits the agent's capacity for truly unique or novel [[concepts/problem-solving|problem-solving]], essentially functioning as a sophisticated database [[concepts/document-retrieval|retrieval]] system rather than a continuously evolving, creative intelligence at runtime.

### Video Description & Links
#### Description
From LOOPS to GRAPHS.

Test-time RAG, prompt injection, [[concepts/skill|skill]].[[concepts/markdown-files|md files]], Fused Gromov-Wasserstein (FGW) algorithm, training-time graph-theoretical [[concepts/mathematics|mathematics]]. Negative knowledge patterns,  highly specific IF-THEN conditional rules.

Language Models as Agents are too brittle if left to figure everything out on the fly.
MemoHarness introduces Dynamic System Configuration.
EMG introduces [[concepts/algorithmic-error|Algorithmic Error]] Routing.

Start with MemoHarness RAG-based control layer to dynamically configure the agent's memory and tools, and then you would use EMG's graph-matching inside the agent's procedural memory to ensure it executes the precise sequence of actions without needing costly reflection loops.

all rights w/ authors:
Experience Memory Graph: One-Shot Error Correction for Agents
Wenjun [[entities/dr-elle-yuan-wang|Wang]]∗
University of Electronic Science and
Technology of China
Chengdu, China
202522080926@std.uestc.edu.cn
Yuchen Fang∗
University of Electronic Science and
Technology of China
Chengdu, China
fangyuchen@std.uestc.edu.cn
Fengrui Liu
University of Electronic Science and
Technology of China
Chengdu, China
202522080925@std.uestc.edu.cn
Zibo Liang
University of Electronic Science and
Technology of China
Chengdu, China
zbliang@std.uestc.edu.cn
Kai Zheng†
University of Electronic Science and
Technology of China
Chengdu, China
zhengkai@uestc.edu.cn
arXiv:2607.13884

#airesearch 
#aiexplained 
#aitechnology 
#nextbots 
#nextgen 
#futuretech

#### Tags
`artificial intelligence`, `Ai explained`, `Science explained`, `educational video`, `how to learn AI`, `Latest AI development`, `Scientific explanations`, `Science for everybody`, `Simple videos on AI`, `Learn AI today`, `How does AI work?`

## Related Concepts
- [[concepts/experience-memory-graph|Experience Memory Graph]] — [Wikipedia](https://en.wikipedia.org/wiki/Experience_Memory_Graph)
- [[concepts/graph-based-error-correction|Graph-Based Error Correction]] — [Wikipedia](https://en.wikipedia.org/wiki/Graph-Based_Error_Correction)
- [[concepts/one-shot-error-correction|One-Shot Error Correction]] — [Wikipedia](https://en.wikipedia.org/wiki/One-Shot_Error_Correction)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/long-horizon-tasks|Long-Horizon Tasks]] — [Wikipedia](https://en.wikipedia.org/wiki/Long-Horizon_Tasks)
- Directed Action Decision Graphs — [Wikipedia](https://en.wikipedia.org/wiki/Directed_Action_Decision_Graphs)
- Fused Gromov-Wasserstein — [Wikipedia](https://en.wikipedia.org/wiki/Fused_Gromov-Wasserstein)
- Graph Edit Paths — [Wikipedia](https://en.wikipedia.org/wiki/Graph_Edit_Paths)
- [[concepts/vector-database|Vector Database]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_Database)
- [[concepts/vector-space-model|Cosine Similarity]] — [Wikipedia](https://en.wikipedia.org/wiki/Cosine_Similarity)
- Test-time RAG — [Wikipedia](https://en.wikipedia.org/wiki/Test-time_RAG)
- [[concepts/vulnerability-exposure|Prompt Injection]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Injection)
- Offline Training Phase — [Wikipedia](https://en.wikipedia.org/wiki/Offline_Training_Phase)
- Online Inference — [Wikipedia](https://en.wikipedia.org/wiki/Online_Inference)
- Common Subgraph — [Wikipedia](https://en.wikipedia.org/wiki/Common_Subgraph)

## Related Entities
- [[entities/discover-ai|Discover AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Discover_AI)
- University of Electronic Science and Technology of China — [Wikipedia](https://en.wikipedia.org/wiki/University_of_Electronic_Science_and_Technology_of_China)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- MemoHarness — [Wikipedia](https://en.wikipedia.org/wiki/MemoHarness)