---
wiki-ingested: true
title: "Compare of Claude Opus 4.5 vs ChatGPT 5.2 Matt Maher"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
# Compare of [[entities/claude-opus|Claude Opus]] 4.5 vs [[entities/chatgpt|ChatGPT]] 5.2 [[entities/matt-maher|Matt Maher]]

---
---
<https://www.youtube.com/watch?v=iUzrE3-FHgA>
Here is a [[concepts/summary|summary]] of the video comparing [[entities/openai|OpenAI]]’s new **[[concepts/gpt-5|GPT-5]].2** [[concepts/models|models]] against [[entities/anthropic|Anthropic]]’s **[[entities/claude-opus-4|Claude Opus 4]].5** using a massive, complex "[[concepts/one-shot-build|One-Shot Build]]" benchmark.

### The Experiment: The "Impossible" [[concepts/prd|PRD]]

Instead of standard benchmarks, the host (Matt) created a massive **[[concepts/product-requirements-document|Product Requirements Document]] (PRD)** for a movie/TV companion app called _"[[entities/showbiz|Showbiz]]."_

* **The Input:** A huge folder of documentation including [[concepts/technical-specs|technical specs]], [[concepts/design|design]] [[concepts/tokens|tokens]], personality guidelines, and complex feature logic (like "[[concepts/alchemy|Alchemy]]" concept blending).
* **The Goal:** Ask the models to read the docs and build the entire application in **one shot**.
* **The Models Tested:**
	1. **[[entities/gpt-5|GPT-5]].1 [[entities/codex|Codex]] Max Extra High** (Previous State of the [[concepts/art|Art]]).
	2. **[[concepts/gpt-52|GPT-5.2]] Medium** (The new "recommended" efficiency model).
	3. **GPT-5.2 Extra High** (The new reasoning-heavy flagship).
	4. **Claude Opus 4.5** (Anthropic's powerhouse).

* * *

### Phase 1: The Initial Build (One Shot)

The models were given 2 hours (simulated) to build.

* **GPT-5.1 (Previous SOTA):** Failed significantly. The search functionality 404’d, the UI was basic, and it missed the vast majority of requested features.
* **GPT-5.2 Medium:** A major step up. It built a functional UI with working search and basic details. It missed visual elements like "Key Art" but nailed the logic for features like "The Scoop."
* **GPT-5.2 Extra High:** Produced a very elegant, [[concepts/polished-ui|polished UI]]. It included interactive search and grouped recommendations upfront. However, it initially missed specific data points like show trailers and cast images.
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

### Key Takeaways & The "Communication Gap"

1. **The "Gap Analysis" Strategy:** The models cannot do a massive build perfectly in one shot yet. However, if you ask them to critique their own work against the requirements and apply fixes, they can achieve **90-95% completion** extremely fast.
2. **Productivity Leap:** What previously took Matt nearly a year to build manually was recreated by these models in roughly **2 hours**.
3. **The Communication Difference (Vital Insight):**
	* **Anthropic (Claude/Opus):** Matt prefers working with Claude because it _communicates_. It repeats back what it heard, explains its plan, and confirms its understanding before [[concepts/coding|coding]]. This creates a "pair programmer" feeling.
	* **OpenAI (GPT):** GPT is a "silent executor." You give it a prompt, and it immediately starts coding without explaining its interpretation. While the [[concepts/code|code]] is excellent, it requires the user to have absolute trust in the model, which can be unsettling when errors occur.

**Final Conclusion:** Both GPT-5.2 and Opus 4.5 are massive leaps forward. While neither is perfect instantly, the ability to build sophisticated, complex applications with just a "Build" pass and a "Fix" pass has fundamentally changed [[concepts/software|software]] development.