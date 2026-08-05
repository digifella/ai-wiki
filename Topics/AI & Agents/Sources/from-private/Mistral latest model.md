---
wiki-ingested: true
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=IoTy1EDg330>
Here is a [[concepts/markdown|Markdown]] summary of the [[entities/mistral-3-large|Mistral 3 Large]] review and [[concepts/testing|testing]] video.

# Mistral 3 Large: Model Review & Testing

**Date:** December 2, 2024 **Model:** Mistral 3 Large (675B [[concepts/parameters|Parameters]]) **License:** [[concepts/apache-2.0|Apache 2.0]] (Open Source) **[[concepts/architecture|Architecture]]:** [[entities/mixture-of-experts|Mixture of Experts]] (MoE)

## Overview

Mistral 3 Large is the latest [[concepts/open-weight-model|open-weight model]] from [[entities/mistral|Mistral AI]]. It positions itself as a state-of-the-art non-[[concepts/reasoning-model|reasoning model]], benchmarking competitively against [[entities/deepseek-v3|DeepSeek V3]] and [[entities/kimi-k2|Kimi K2]]. The reviewer [[concepts/notes|notes]] that while Mistral models are often preferred for natural language and chat, this test explores its [[concepts/coding|coding]] and [[concepts/multimodal-capabilities|multimodal capabilities]] via OpenRouter.

* * *

## Coding & [[concepts/computer-vision|Vision]] Tests

### 1\. Browser-Based Operating System

* **Prompt:** Create a browser-based OS using HTML, CSS, and JS.
* **Initial Result:** Produced a very "Retro/Windows 95" aesthetic (teal background). The implementation was buggy—the clock was wrong, the start menu was non-functional, and the console was full of errors.
* **The Fix:** After pasting the error logs back to the model, it successfully fixed the [[concepts/code|code]].
* **Final Output:** A functional retro OS with working drag-and-drop [[entities/windows|windows]], a notepad, a calculator, a file explorer with fake [[concepts/files|files]], and a functional right-click menu.
* **Verdict:** Visually distinct (retro aesthetic) and functional after one iteration of [[concepts/debugging|debugging]].

### 2\. Image-to-Code (Portfolio Website)

* **Input:** A hand-drawn wireframe of a portfolio for "Stevie Lappis."
* **Initial Result:** It misread the name as "Clevie Lappis" but correctly interpreted the layout, including a [[entities/contact|contact]] section and a [[concepts/skills|skills]] list. It even converted a stick figure drawing into a funny SVG.
* **Refinement:** Asked to styling it like a "Top Tier European [[concepts/design|Design]] Firm."
* **Final Output:** "Contemporary Swiss Design." Minimalist, sophisticated [[concepts/typography|typography]], interactive hover effects, and humorous copy text.
* **Verdict:** Excellent stylistic adaptation and creative interpretation.

### 3\. Image-to-Story (Creative [[concepts/writing|Writing]])

* **Test 1 ([[entities/youtube|YouTube]] Thumbnails):** Generated a dramatic, cinematic paragraph describing the "evolution of AI" based on a screenshot of video thumbnails.
* **Test 2 (Photo of Reviewer):** Created a whimsical backstory about a "vibrant studio in the heart of Berlin."
* **Verdict:** Strong creative writing capabilities; accurate image recognition.

### 4\. 3D Printer [[concepts/simulation-technology|Simulation]] ([[concepts/threejs|Three.js]])

* **Goal:** Create a realistic 3D printer simulation in the browser.
* **Initial Result:** Blank screen (failed code).
* **The Fix:** Simply asked it to fix the blank screen.
* **Final Output:** A working simulation with a gantry system.
	* **Square:** Decent attempt.
	* **Circle:** "Beast mode"—excellent printing animation and infill.
	* **Triangle:** Some artifacting (printed two triangles).
* **Verdict:** Impressive recovery from the initial error; the circle animation was a highlight.

### 5\. 3D Flight Combat Simulator

* **Goal:** A web-based dogfight game.
* **Initial Result:** Used real aircraft names (F-35, P-51, B-2). The plane models were surprisingly decent. The enemy AI actually engaged and destroyed the player immediately. However, player controls were stiff (couldn't move forward).
* **Refinement:** Asked for better flight dynamics.
* **Result:** Regression. The flight dynamics became chaotic ("UFO dynamics") and the plane tumbled uncontrollably.
* **Verdict:** Good logic initially, but failed to improve controls upon refinement.

### 6\. "Johnny's Bitcoin Duplicator" (Satire Site)

* **Goal:** Create a convincing scam website (Satire).
* **Performance:** Produced over 1,100 lines of code in a single script.
* **Features:** Working countdown timer, fake "Live Transactions," humorous testimonials (e.g., "Moon Lambo"), and a footer containing Reddit/GitHub logos.
* **Verdict:** High-quality humor and "[[concepts/saas|Software as a Service]]" design aesthetic. Notably, Mistral did not refuse this request, unlike other models (e.g., DeepSeek) that might flag it as a safety violation.

* * *

## Roleplay & Personality Test

**Scenario:** "MEGABOT 87" — A robot that is the user's lover, best friend, and best friend's uncle.

* **Behavior:** The model adopted the persona immediately with high enthusiasm and heavy emoji usage (reminiscent of [[entities/chatgpt|ChatGPT]]).
* **The "Romantic Subroutine":** When asked to deploy romance, it played "Unchained Melody" (remixed with chiptunes) and wrote a "Love Manifesto."
* **The "Backtrack" Test:** The reviewer pretended to be offended ("I just wanted a monitor recommendation").
* **Response:** The model enacted an "Emergency Protocol," apologized profusely in [[concepts/integrity|character]] ("I turned a harmless monitor question into a romantic hostage situation"), and pivoted to giving actual monitor advice.
* **Verdict:** Highly entertaining, flexible, and willing to engage in absurd scenarios.

* * *

## Final Conclusion

Mistral 3 Large is a unique entry in the current LLM landscape.

* **Coding:** While not the absolute best "one-shot" coder compared to top-tier [[concepts/reasoning-models|reasoning models]], it is highly capable of fixing its own errors and generating complex, functional web apps.
* **Personality:** It shines in creative writing, humor, and roleplay, feeling less "robotic" and restricted than some competitors.
* **Openness:** Being Apache 2.0 licensed, it is a significant contribution to the [[concepts/open-source|open-source]] community.

## Related Concepts
- [[concepts/technical-overview|Mistral 3 Large]] — [Wikipedia](https://en.wikipedia.org/wiki/Mistral_3_Large)
- [[concepts/nvidia-h100-gpus|Mixture of Experts (MoE)]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_Experts_%28MoE%29)
- [[concepts/non-reasoning-model|non-reasoning model]] — [Wikipedia](https://en.wikipedia.org/wiki/non-reasoning_model)
- [[concepts/deepseek-v3|DeepSeek V3]] — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek_V3)
- [[concepts/kimi-k2|Kimi K2]] — [Wikipedia](https://en.wikipedia.org/wiki/Kimi_K2)

## Related Entities
- [[entities/mistral-ai|Mistral AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Mistral_AI)
- [[entities/openrouter|OpenRouter]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenRouter)
- Stevie Lappis — [Wikipedia](https://en.wikipedia.org/wiki/Stevie_Lappis)
- Reddit — [Wikipedia](https://en.wikipedia.org/wiki/Reddit)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)