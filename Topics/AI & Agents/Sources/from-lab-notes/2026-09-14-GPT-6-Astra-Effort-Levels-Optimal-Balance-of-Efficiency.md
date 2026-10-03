---
wiki-ingested: true
title: "GPT-6 Astra Effort Levels: Optimal Balance of Efficiency and Quality"
date: 2026-09-14
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: openai-chatgpt
type: "source-summary"
aliases:
  - "lab-notes/2026-09-14-GPT-6-Astra-Effort-Levels-Optimal-Balance-of-Efficiency"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## GPT-6 Astra Effort Levels: Optimal Balance of Efficiency and Quality
**Clip title:** I Tested Every [[concepts/vision-model|GPT-6 Astra]] Effort Level. Here’s What I’d Use
**Author / channel:** Mark Kashef
**URL:** https://www.youtube.com/watch?v=OQipTxv9Qv0

### Summary
This video critically examines the optimal "effort level" for [[concepts/gpt-6-astra|GPT-6 Astra]], a [[concepts/large-language-model|large language model]], to achieve the best value and performance. Prompted by an [[entities/openai|OpenAI]] lead's assertion that Astra on "Low" can outperform the previous [[entities/gpt-56|GPT-5.6]] Sol on "High," and user complaints about Astra's perceived "laziness" (stopping early, asking for permission frequently), the speaker conducts a [[concepts/controlled-experiment|controlled experiment]]. The primary goals were to determine if increased [[concepts/effort-levels|effort levels]] lead to better results and greater model autonomy.

For the experiment, the speaker tested all six Astra effort levels (Low, Medium, High, X-High, Max, Ultra) along with Sol on High as a control. Each model received the exact same comprehensive prompt: to research a worthwhile SaaS opportunity for small service businesses, including market research on Reddit and X, developing a business plan (including an Excalidraw file), creating a polished website prototype, and delivering a working prototype. The experiment meticulously controlled for variables such as context, access to tools, build size, and conditions. Crucially, the process tracked the time taken and the number of tokens consumed by each model, and outputs were evaluated based on the traceability of claims, payment justification, logical connections within the plan, workflow functionality, and thoroughness.

The results revealed a nuanced picture. Astra Medium consistently delivered the best balance of efficiency and quality, completing tasks in the shortest time (30 minutes) with a moderate token count (~10 million) and producing a clean, well-structured output. Astra High showed slightly more detailed research, including integration of X sources, but at a higher cost in both time and tokens (~41 minutes, ~14 million tokens). However, the higher tiers (X-High, Max, Ultra) generally consumed more time and significantly more tokens (up to ~22 million for Ultra) without a proportional increase in output quality or effective autonomy; in some cases, the quality or detail even diminished compared to Medium or High. Token consumption was also highly unpredictable across these higher effort levels.

In conclusion, the experiment strongly suggests that higher effort levels in GPT-6 Astra do not consistently translate to better or more autonomous results. Astra Medium proved to be the most efficient and effective tier for the given complex task. While Sol on High produced functionally comparable results with significantly fewer tokens (~6.7 million), its visual output for the website prototype was "unbelievably ugly" compared to Astra's. The video's key takeaway is that for most day-to-day tasks, users should start with Astra Medium. Increasing the effort level beyond "High" is rarely justified by a corresponding improvement in quality or efficiency, and users might achieve better outcomes by providing more specific prompts rather than simply demanding more "effort."

### Video Description & Links
#### Description
Work With Us: https://www.promptadvisers.com/

Does GPT-6 Astra's effort setting actually matter? I tested Low, Medium, High, Extra High, Max and Ultra on the same research and build assignment in Codex, with GPT-5.6 Sol on High as a comparison.

Each run had to research customer problems, find a SaaS opportunity, explain its proposed moat, create an editable Excalidraw plan and build a working prototype. I compare the actual outputs, completion times and processed tokens to see whether more [[concepts/reasoning|reasoning]] effort produced better results, and which setting I'd use for everyday projects.

You'll also see how to launch separate Codex tasks with different effort settings so you can run your own comparisons.

CHAPTERS
00:00 Does Astra's effort setting matter?
01:00 Astra Low vs Sol High and the laziness debate
02:00 The experiment setup
03:00 The research and build assignment
05:00 Launching Codex tasks at different effort levels
06:00 Astra Low results
07:00 Astra Medium results
08:00 Astra High results
09:00 Astra Extra High results
11:00 Astra Max results
13:00 Astra Ultra and subagents
14:00 GPT-5.6 Sol High comparison
15:00 Which effort level I'd use

SOURCES & TEST NOTES

These are seven exploratory first attempts on a shared machine, with different product ideas and live research. Token totals include cached input and aren't dollar costs. Ultra includes subagents. My Medium + Fast preference is separate from this comparison, which didn't isolate Fast versus Standard.

Timing correction: Medium finished fastest at 30:41; Sol was second at 32:49. Max took the longest at 46:10, followed by Extra High at 45:14. The Sol baseline is GPT-5.6 Sol High.

#GPT6Astra #Codex #AI

#### Tags
`GPT-6 Astra`, `GPT 6 Astra`, `Astra effort levels`, `GPT-6 Astra effort settings`, `best Astra effort level`, `Astra reasoning effort`, `Astra low vs medium`, `Astra medium vs high`, `Astra high vs ultra`, `GPT-6 Astra comparison`, `GPT-6 Astra review`, `OpenAI Codex`, `Codex effort settings`, `Codex tutorial`, `Astra vs Sol`, `GPT-5.6 Sol`, `AI coding`, `agentic coding`, `AI agents`, `SaaS prototype`, `Excalidraw`, `best effort level on astra`, `is astra better than sol`, `effort levels astra`

#### URLs
- https://www.promptadvisers.com/

## Related Concepts
- [[concepts/gpt-6-astra|GPT-6 Astra]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-6)
- [[concepts/effort-levels|effort levels]]
- [[concepts/wrapper-effect|prompt engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)
- [[concepts/model-performance|model performance]]
- [[concepts/value-optimization|value optimization]]
- [[concepts/controlled-experiment|controlled experiment]] — [Wikipedia](https://en.wikipedia.org/wiki/Scientific_control)
- [[concepts/llm-behavior|LLM behavior]]
- cost-benefit analysis — [Wikipedia](https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis)

## Related Entities
- [[entities/mark-kashef|Mark Kashef]]
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/gpt-56-sol|GPT-5.6 Sol]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-5.6)
- [[entities/gpt-6-astra|GPT-6 Astra]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-6)
- Codex — [Wikipedia](https://en.wikipedia.org/wiki/Codex)
- Excalidraw — [Wikipedia](https://en.wikipedia.org/wiki/Excalidraw)
- Reddit — [Wikipedia](https://en.wikipedia.org/wiki/Reddit)
- X — [Wikipedia](https://en.wikipedia.org/wiki/X)
- Gumroad — [Wikipedia](https://en.wikipedia.org/wiki/Gumroad)