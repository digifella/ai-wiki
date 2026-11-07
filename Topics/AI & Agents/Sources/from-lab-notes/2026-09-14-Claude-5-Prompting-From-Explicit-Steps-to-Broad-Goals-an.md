---
wiki-ingested: true
title: "Claude 5 Prompting: From Explicit Steps to Broad Goals and Context"
date: 2026-09-14
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: anthropic-claude
type: "source-summary"
aliases:
  - "lab-notes/2026-09-14-Claude-5-Prompting-From-Explicit-Steps-to-Broad-Goals-an"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Claude 5 Prompting: From Explicit Steps to Broad Goals and Context
**Clip title:** Claude 5 Changed Prompting Forever, Fix Yours Now
**Author / channel:** Simon Scrapes
**URL:** https://www.youtube.com/watch?v=dfi3BsEPxic

### Summary
The video "Forget Everything You Know About Prompting" highlights a significant shift in best practices for interacting with advanced AI models like Anthropic's [[entities/fable-5|Fable 5]] and [[entities/opus-5|Opus 5]], and implicitly, [[entities/openai|OpenAI]]'s [[concepts/gpt-6-astra|GPT-6 Astra]]. The core message is that traditional prompting techniques, which emphasized explicit step-by-step instructions and constant verification, now often degrade performance rather than improve it. These newer, more sophisticated models are trained for end-to-end task completion and possess an inherent "thinking" capability, making overly prescriptive prompts redundant and even counterproductive. The presenter demonstrates how an existing "legacy" prompt, designed for older models, violates Anthropic's new guidelines and then systematically refactors it based on the updated recommendations.

Firstly, the video outlines several crucial changes to how prompts should be structured. Instead of breaking down tasks into numerous steps, users should provide the AI with the **complete job or broad goal**, allowing the model to determine the optimal execution path. Secondly, it is now vital to explain **"why," not just "what,"** by providing the context, the user for whom the task is being done, and what the output enables. This allows the AI to understand the intent behind the request, leading to better decision-making on minor nuances. Additionally, users must explicitly state **"what done looks like"** by defining the desired outcome and length, as these models tend to expand the scope or over-verify if boundaries are not clearly set. For larger, more complex tasks where the end state isn't fully known, the recommendation is even to have the AI "interview you" to build the detailed brief itself.

Beyond structural changes, the video emphasizes the importance of removing elements that were once considered best practices but are now detrimental. Hard rules, capitalized keywords like "IMPORTANT" or "NEVER," and explicit instructions to "Think carefully" or "Double-check every number" should be replaced with simple, positive instructions. These older commands now over-trigger the models, leading to wasted tokens (increased cost) and potentially triggering refusal categories if the AI perceives an attempt to extract its internal [[concepts/reasoning|reasoning]]. Similarly, specific anti-formatting instructions (e.g., "Don't use bullets") are no longer necessary, as [[concepts/muse-spark-12|Fable 5.1]] naturally produces clearer prose; such commands can lead to "mannered prose" that is harder to read.

In conclusion, the overarching takeaway is to treat modern AI models as intelligent agents capable of understanding context and intent. The focus has shifted from micromanaging the AI's process to clearly communicating the ultimate goal and the "why" behind it, allowing the model the autonomy to achieve the desired outcome efficiently. This approach not only improves the quality and relevance of the AI's output but also reduces computational costs by avoiding redundant instructions and over-triggering. The video suggests reviewing and rewriting all existing skills and prompts, emphasizing plain language, a clear definition of "done," and a global brand voice definition to maximize the performance of these advanced AI systems.

### Video Description & Links
#### Description
👀 Be the brand AI recommends: https://dub.sh/rankspot-yt

Everything you thought you knew about prompting Claude is wrong. Anthropic's latest models, Opus 5 and Fable 5, now perform worse with the old rules of being overly specific and listing steps. In this video, I break down the 7 new rules for effective prompting, based directly on Anthropic's own guidance. We'll fix a broken prompt live so you can apply these learnings to all your prompts and skills, and see how these rules stack up against OpenAI's GPT-Astra model.

00:00 - Why Your Old Prompts Are Now Broken
00:35 - What Your Prompts Are Missing (Rules 1-3)
08:32 - What to Remove From Your Prompts (Rules 4-7)
17:06 - Claude vs. GPT-Astra Prompting Rules

#claudecode #claudeprompting #promptengineering

#### URLs
- https://dub.sh/rankspot-yt

## Related Concepts
- [[concepts/wrapper-effect|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/mathematical-problem-solving|Chain of Thought]]
- [[concepts/zero-shot-prompting|Zero-Shot Prompting]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)
- [[concepts/llm-comprehension|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_window)
- [[concepts/reasoning|Reasoning]] Extraction Prevention

## Related Entities
- [[entities/claude-5|Claude 5]]
- [[entities/simon-scrapes|Simon Scrapes]]
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- Anthropic — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- [[entities/fable-5|Fable 5]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Mythos)
- [[entities/opus-5|Opus 5]]
- [[entities/gpt-6-astra|GPT-6 Astra]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-6)
- Fable 5.1 — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Mythos)
- Skool — [Wikipedia](https://en.wikipedia.org/wiki/School)
- [[entities/claude|Claude]]