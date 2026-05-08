---
wiki-ingested: true
domain: ai-agents
group: ai-futures-self-improvement
---
<https://www.youtube.com/watch?v=-AJoByRGkgU>
The speaker, [[entities/dave|Dave]] Plummer, a retired Microsoft [[concepts/software|software]] engineer, provides an opinionated look at the current state of AI [[concepts/large-language-models|Large Language Models]] (LLMs) as of mid-2025. He has subscribed to and heavily used the top four models: ChatGPT, Claude, [[entities/gemini-app|Gemini]], and Grok, across various real-world scenarios.
**Evolution of LLMs:** Initially, ChatGPT-4 dominated, making it seem like a two-horse race with OpenAI significantly ahead. However, by mid-2025, the field has caught up. Grok is at version 3, Gemini at 2.5 Pro, Claude is at 3.7 (or 4), and ChatGPT is at 4.1 (with "Omni" models). Each model has carved out its own niche due to different [[concepts/training|training]] data, optimization goals, and [[concepts/design|design]] philosophies. It's no longer about which model is "best" overall, but which is best for a specific task.
**Four Real-World Examples:**

1. **[[concepts/coding|Coding]] (C++ function for recursive directory traversal):**
	**Claude:** Absolutely crushed it. Provided elegant, working [[concepts/code|code]] using standard file systems, handled platform quirks, and included useful, contextual comments (e.g., "this handles symlinks to avoid infinite recursion"). It even generated a makefile with options. _Recommended for serious development._ **ChatGPT:** Performed well, providing readable and correct code on the first run. It handled follow-up questions for logging and error handling very well, exhibiting a conversational and encouraging tone. Good as a co-pilot for exploration or iteration, but less "mind-reading" than Claude. **Grok 3:** Surprisingly capable. It defaulted to [[entities/python|Python]] first, but generated concise and functional C++ code after being steered. Its responsiveness and natural, energetic [[concepts/explanations|explanations]] (like pair programming) were refreshing, though sometimes opinionated. Good for [[concepts/rapid-prototyping|fast iteration]]. **Gemini:** Also did well, leaning into Google-style idioms. It required more precise [[concepts/prompting|prompting]] to get the desired result and could feel "stiff" if the input wasn't detailed. The code passed static analysis and handled Unicode gracefully, indicating high-quality training data.
	
2. **Research & [[concepts/reasoning|Reasoning]] (explaining complex concepts like Supreme Court rulings or Shannon's Theorem):**
	**Claude:** Shines brightest here. It takes its time, providing structured, logical answers that build from premise to conclusion, including math, examples, and [[concepts/historical-context|historical context]]. It effectively re-contextualizes and clarifies when pushed back, ensuring deep understanding. _Recommended for careful reasoning and deep dives._ **ChatGPT:** Performs well, especially with the browsing plugin enabled. Its explanations are concise and readable for a layperson. However, it sometimes glosses over edge cases or technical details unless specifically prompted. Good for first-pass research or [[concepts/learning|learning]] new topics. **Grok 3:** A surprise hit in this category due to its real-time data [[concepts/integration|integration]]. It can quote current rulings, reference social media reactions, and pull in trending threads from experts, making it excellent for current events and public sentiment. The trade-off is that it sometimes mixes commentary with factual reporting. **Gemini:** Excels when working across long documents or [[concepts/structured-data|structured data]]. It can summarize large research reports or PDFs efficiently without losing the thread, thanks to its massive [[concepts/context-window|context window]]. It's ruthlessly efficient at turning structured input into usable output.
	
3. **Creative Writing/Storytelling (bedtime story about a dragon afraid of fire):**
	**ChatGPT:** Still the reigning champion for random [[concepts/storytelling|storytelling]]. It delivered a gentle, sweet, emotionally resonant story with internal conflict and a positive [[concepts/solution|resolution]]. The narrative was well-structured for reading aloud. _Recommended for emotionally resonant and simple stories._ **Claude:** Produced a story with more depth and literary flair, reading like something from a children's anthology. It was thoughtful, poetic, and slightly melancholic, exploring the dragon's fear of its own power. Nicely written, but perhaps better suited for slightly older children. **Grok:** Showed surprising flexibility, offering two different takes: one light and silly (a dragon sneezing fireworks) and another more metaphorical. While not as polished as ChatGPT's, its creativity was impressive, and it was happy to add illustrations or jokes. **Gemini:** Its story was competent but leaned towards being clinical. It got caught up in world-building details like how the dragon's "flame glands" worked, which might be too technical for a young child. However, it provides plenty of material to expand upon if used as a teaching tool.
	
4. **Breaking News & Current Events (what's happening now and public reaction):**
	**Grok 3:** Simply ran away with this category. Its real-time data integration allows it to instantly access and summarize current events, social media reactions, and expert opinions. It's the go-to for up-to-the-minute information. _Unmatched for real-time awareness._ **ChatGPT:** Can handle current events decently when its browsing plugin is enabled, but it's slower and sometimes hesitant to quote directly. **Claude:** Tends to sit this one out unless the information has been widely verified. **Gemini:** Plays it safe, providing factual but often not the first information.
	

**[[concepts/context-windows|Context Windows]] (Behind the Scenes):** The "context window" refers to the amount of text (measured in tokens, where 1 token is ~4 characters) an AI can process in a single interaction. A larger context window generally leads to better [[concepts/accuracy|accuracy]] and coherence for [[concepts/complex-tasks|complex tasks]].

* **ChatGPT 4.0/4.5:** 128,000 tokens (~96,000 words). Good for iterative [[concepts/debugging|debugging]] or short stories, but can hit limits with massive datasets.
* **[[entities/claude-4|Claude 4]]:** 200,000 tokens (~150,000 words). Ideal for complex tasks like legal analysis or multi-step math problems, delivering elegant code and reducing hallucinations by keeping more context in [[concepts/memory|memory]].
* **[[entities/gemini-2-5-pro|Gemini 2.5 Pro]] & Grok 3:** Claim a massive 1 million tokens (~750,000 words, equivalent to an entire novel like _War and Peace_). Gemini excels at parsing large documents and PDFs without losing the thread, while Grok leverages its huge window for real-time news summaries. However, there's chatter about Grok's _effective_ context limit potentially dropping under heavy load.

**Cost and Conclusion:** Larger context windows demand more compute, leading to higher latency and costs. Casual users might stick with ChatGPT or Claude (around $20/month) for everyday tasks like emails or quick Q&A, saving money without much sacrifice. For heavy users, premium subscriptions (around $20-30/month) are justified by the models' specialized capabilities.
In [[concepts/summary|summary]], there's no single "best" LLM in mid-2025. Each model is a highly specialized tool with unique strengths:

* **Claude:** Your engineer for serious coding and a careful researcher for deep, structured reasoning.
* **ChatGPT:** Your warm and polished co-pilot for general tasks, creative [[concepts/writing|writing]], and learning new concepts.
* **Grok 3:** Your unfiltered, lightning-fast source for breaking news and current events, and surprisingly flexible for creative prompts.
* **Gemini:** Your quiet genius for handling massive, structured data inputs, [[concepts/document-summarization|summarization]], and extracting nuances from long documents.

Choose the AI based on your specific needs and the type of task at hand.

## Related Concepts
- [[concepts/llms|LLMs]] — [Wikipedia](https://en.wikipedia.org/wiki/LLMs)
- [[concepts/training-data|training data]] — [Wikipedia](https://en.wikipedia.org/wiki/training_data)
- [[concepts/optimization-goals|optimization goals]] — [Wikipedia](https://en.wikipedia.org/wiki/optimization_goals)
- [[concepts/design-philosophies|design philosophies]] — [Wikipedia](https://en.wikipedia.org/wiki/design_philosophies)
- [[concepts/niche-models|niche models]] — [Wikipedia](https://en.wikipedia.org/wiki/niche_models)
- [[concepts/grok|Grok]] — [Wikipedia](https://en.wikipedia.org/wiki/Grok)
- [[concepts/gemini|Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini)
- [[concepts/remote-desktop|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)
- [[concepts/version-numbers|version numbers]] — [Wikipedia](https://en.wikipedia.org/wiki/version_numbers)
- [[concepts/multi-horse-race|multi-horse race]] — [Wikipedia](https://en.wikipedia.org/wiki/multi-horse_race)
- [[concepts/website-browsing|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)

## Related Entities
- [[entities/dave-plummer|Dave Plummer]] — [Wikipedia](https://en.wikipedia.org/wiki/Dave_Plummer)
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- [[entities/claude|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)
- [[entities/gemini|Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini)
- [[entities/grok|Grok]] — [Wikipedia](https://en.wikipedia.org/wiki/Grok)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/microsoft|Microsoft]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft)
- C++ — [Wikipedia](https://en.wikipedia.org/wiki/C%2B%2B)