---
wiki-ingested: true
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## [[entities/deepseek-engram|DeepSeek Engram]]: Solving LLM Inefficiency Through Context-Aware Knowledge Retrieval  
**Clip title:** DeepSeek Just Fixed One Of The Biggest Problems With AI  
**Author / channel:** Two Minute Papers  
**URL:** [https://www.youtube.com/watch?v=DmtoVnTkQnM](https://www.youtube.com/watch?v=DmtoVnTkQnM)  
  
### Summary  
This video introduces DeepSeek's innovative approach to Artificial Intelligence, highlighting a fundamental inefficiency in current large language models (LLMs) like ChatGPT and [[concepts/gemini|Gemini]]. The narrator uses an analogy of a Michelin star chef asked to make a simple peanut butter sandwich but forced to plant peanuts, harvest them, make butter, and bake bread from scratch every time. This illustrates how modern AI systems perform complex, high-computational [[concepts/reasoning|reasoning]] for even simple factual [[concepts/recall|recall]], rebuilding knowledge from the ground up on each query, leading to significant wasted compute.  
  
DeepSeek proposes a [[concepts/solution|solution]] called "Engram," which acts like a "pantry" for the AI chef. Instead of constantly regenerating information, Engram stores pre-computed "ingredients" (like word and n-gram [[concepts/vector-representations|embeddings]]). This allows the AI to "look things up" instantly when required, rather than recalculating them. A crucial component is the "context-aware gating mechanism," which ensures that retrieved information is relevant to the current query, preventing the use of "rotten" or contradictory facts by effectively "throwing away" irrelevant data. This significantly boosts efficiency and reduces computational overhead.  
  
The efficacy of DeepSeek's Engram technique is demonstrated through various benchmarks. A graph illustrating "validation loss" shows that Engram (represented by black dots) consistently achieves lower loss than traditional "OverEncoding" (teal dots) and "Pure MoE" (red triangle) methods, indicating a "significantly smarter" AI. The new approach also demonstrates superior performance across a wide [[concepts/range|range]] of tasks, including language modeling, knowledge-intensive reasoning, reading comprehension, and [[concepts/code-generation|code generation]]. This indicates that by "splitting its brain" – dedicating the Engram module to factual [[entities/storage|storage]] and retrieval – the core reasoning components can focus on more [[concepts/complex-tasks|complex tasks]], leading to overall improved [[concepts/accuracy|accuracy]] and efficiency across the board.  
  
The key takeaway is that such advancements lead to more efficient and smarter AI systems that could potentially be owned and run locally, rather than relying on expensive, proprietary cloud subscriptions. While acknowledging that even this technique isn't perfect (e.g., poor placement of the Engram module can reduce accuracy), the research underscores the potential for discovering simple, foundational [[concepts/ideas|ideas]] in AI that can dramatically improve performance and [[concepts/accessibility|accessibility]]. This paves the way for future AI systems that are not only more powerful but also more practical and widely deployable.

## Related Concepts
- [[concepts/context-aware-knowledge-retrieval|Context-Aware Knowledge Retrieval]] — [Wikipedia](https://en.wikipedia.org/wiki/Context-Aware_Knowledge_Retrieval)
- [[concepts/large-language-models|Large Language Models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLMs%29)
- [[concepts/uncanny-valley|Artificial Intelligence]] — [Wikipedia](https://en.wikipedia.org/wiki/Artificial_Intelligence)
- [[concepts/scalable-lookup|Efficient Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Efficient_Inference)
- [[concepts/engram|Engram]] — [Wikipedia](https://en.wikipedia.org/wiki/Engram)
- OverEncoding — [Wikipedia](https://en.wikipedia.org/wiki/OverEncoding)
- Pure MoE — [Wikipedia](https://en.wikipedia.org/wiki/Pure_MoE)

## Related Entities
- [[entities/two-minute-papers|Two Minute Papers]] — [Wikipedia](https://en.wikipedia.org/wiki/Two_Minute_Papers)
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- [[entities/gemini|Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini)