---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
---
<https://www.youtube.com/watch?v=iUzrE3-FHgA>
Here is a [[concepts/summary|summary]] of the video comparing [[entities/openai|OpenAI]]’s new **[[entities/gpt-52|GPT-5.2]]** [[concepts/models|models]] against [[entities/anthropic|Anthropic]]’s **[[entities/claude-opus-45|Claude Opus 4.5]]** using a massive, complex "One-Shot Build" benchmark.

### The Experiment: The "Impossible" PRD

Instead of standard benchmarks, the host (Matt) created a massive **[[concepts/prd|Product Requirements Document]] (PRD)** for a movie/TV companion app called _"[[entities/showbiz|Showbiz]]."_

* **The Input:** A huge folder of documentation including [[concepts/technical-specs|technical specs]], [[concepts/design|design]] tokens, personality guidelines, and complex feature logic (like "[[concepts/alchemy|Alchemy]]" concept blending).
* **The Goal:** Ask the models to read the docs and build the entire application in **one shot**.
* **The Models Tested:**
	1. **GPT-5.1 [[concepts/codex|Codex]] Max Extra High** (Previous State of the Art).
	2. **GPT-5.2 Medium** (The new "recommended" efficiency model).
	3. **GPT-5.2 Extra High** (The new reasoning-heavy flagship).
	4. **Claude Opus 4.5** (Anthropic's powerhouse).

* * *

### Phase 1: The Initial Build (One Shot)

The models were given 2 hours (simulated) to build.

* **GPT-5.1 (Previous SOTA):** Failed significantly. The search functionality 404’d, the UI was basic, and it missed the vast majority of requested features.
* **GPT-5.2 Medium:** A major step up. It built a functional UI with working search and basic details. It missed visual elements like "Key Art" but nailed the logic for features like "The Scoop."
* **GPT-5.2 Extra High:** Produced a very elegant, polished UI. It included interactive search and grouped recommendations upfront. However, it initially missed specific data points like show trailers and cast images.
* **Claude Opus 4.5:** The most **feature-complete** on the first try. It included seasons, episode lists, inline playable trailers, and complex [[concepts/metadata|metadata]]. However, the **UI was messy** and visually cluttered compared to GPT-5.2.

**Initial Verdict:** Opus won on logic/completeness; GPT-5.2 xHigh won on UI/UX and polish.

* * *

### Phase 2: The "Delta" Fix (The Game Changer)

Matt performed a quick "[[concepts/gap-analysis|Gap Analysis]]"—he simply asked the models to compare what they built against the original PRD and fix what they missed. **This resulted in near-production quality apps.**

### **GPT-5.2 Extra High (Final Result)**

* **Visuals:** Extremely polished, professional UI.
* **Data Visualization:** Created complex charts for actors (e.g., Ryan Reynolds' career analytics, box office ROI, genre breakdowns).
* **Logic:** The "Alchemy" feature (blending two movies to find a third based on concepts) worked perfectly.
* **Completeness:** It recovered almost all missing features, creating a 95% complete application.

### **Claude Opus 4.5 (Final Result)**

* **Visuals:** Fixed the CSS breaking issues, resulting in a dense but usable interface.
* **Features:** Retained its lead on specific media features like inline video players.
* **Personality:** The "Ask" (Chat) feature felt more distinct and aligned with the "witty friend" persona requested in the PRD.

* * *

### [[concepts/highlights|Key Takeaways]] & The "Communication Gap"

1. **The "Gap Analysis" Strategy:** The models cannot do a massive build perfectly in one shot yet. However, if you ask them to critique their own work against the requirements and apply fixes, they can achieve **90-95% completion** extremely fast.
2. **Productivity Leap:** What previously took Matt nearly a year to build manually was recreated by these models in roughly **2 hours**.
3. **The Communication Difference (Vital Insight):**
	* **Anthropic (Claude/Opus):** Matt prefers working with Claude because it _communicates_. It repeats back what it heard, explains its plan, and confirms its understanding before [[concepts/coding|coding]]. This creates a "pair programmer" feeling.
	* **OpenAI (GPT):** GPT is a "silent executor." You give it a prompt, and it immediately starts coding without explaining its interpretation. While the [[concepts/code|code]] is excellent, it requires the user to have absolute trust in the model, which can be unsettling when errors occur.

**Final Conclusion:** Both GPT-5.2 and Opus 4.5 are massive leaps forward. While neither is perfect instantly, the ability to build sophisticated, complex applications with just a "Build" pass and a "Fix" pass has fundamentally changed [[concepts/app-creation|software development]].

## Related Concepts
- [[concepts/one-shot-build|One-Shot Build]] — [Wikipedia](https://en.wikipedia.org/wiki/One-Shot_Build)
- [[concepts/gpt-52|GPT-5.2]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-5.2)
- [[concepts/claude-opus-45|Claude Opus 4.5]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Opus_4.5)
- [[concepts/product-requirements-document|Product Requirements Document (PRD)]] — [Wikipedia](https://en.wikipedia.org/wiki/Product_Requirements_Document_%28PRD%29)
- [[concepts/visual-quality-assessment|AI benchmarking]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_benchmarking)
- [[concepts/complex-systems-thinking|Complex Systems Thinking]] — [Wikipedia](https://en.wikipedia.org/wiki/Complex_Systems_Thinking)

## Related Entities
- [[entities/matt-maher|Matt Maher]] — [Wikipedia](https://en.wikipedia.org/wiki/Matt_Maher)