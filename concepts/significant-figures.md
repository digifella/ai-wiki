---
type: concept
domain: maths-logic-crypto
group: number-theory-prime-numbers
tags:
  - "measurement-precision"
  - "decimal-representation"
  - "rounding"
  - "numerical-accuracy"
  - "notation"
aliases:
  - "sig figs"
  - "significant digits"
summary: Significant figures represent the digits in a number that carry meaningful information about its precision and measurement accuracy.
updated: 2026-07-18
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Significant Figures

Significant figures are the digits in a number that carry meaningful information about its precision and measurement accuracy. They comprise all digits known with certainty plus one additional digit that has been estimated or rounded. This distinction is essential because it communicates how reliably a value has been determined, whether through direct measurement or calculation. By reporting only significant figures, we avoid implying greater precision than actually exists in our data.

## Rules for Identification

Several standardized conventions govern which digits count as significant. All non-zero digits are always significant. Zeros between non-zero digits are significant, zeros at the beginning of a number are not significant, and zeros at the end are significant only if the number contains a decimal point. For example, 0.00305 has three significant figures (3, 0, and 5), while 3050 has three or four depending on whether the final zero is meant to be significant—a distinction often clarified through scientific notation.

## Application in Calculations

When performing calculations, the result should not contain more significant figures than the least precise input value. In addition and subtraction, the answer is limited by the number of decimal places in the least precise measurement. In multiplication and division, the answer is limited by the number of significant figures in the value with the fewest significant figures. This practice prevents false precision from being introduced through mathematical operations and maintains honest representation of measurement uncertainty throughout scientific work.

## Source Notes
- 2026-04-07: Photoshop Beta
- 2026-04-08: Anthropic
- 2026-04-10: [[lab-notes/2026-04-10-Anthropics-Claude-AI-Subscription-Changes-OpenClaw-Ban-Usage-Limits-an|Anthropics Claude AI Subscription Changes OpenClaw Ban Usage Limits an]] · [▶ source](https://www.youtube.com/watch?v=a4hdPWSUzsE)
- 2026-04-11: [[lab-notes/2026-04-11-The-Bloody-Origins-of-Number-Zero-in-Ancient-India|The Bloody Origins of Number Zero in Ancient India]] · [▶ source](https://www.youtube.com/watch?v=RSIsGomGZcc)
- 2026-04-17: [[lab-notes/2026-04-17-Bridging-the-AI-Agent-Speed-Gap-Rebuilding-Human-Centric-Web-Infrastru|Bridging the AI Agent Speed Gap Rebuilding Human Centric Web Infrastru]] · [▶ source](https://www.youtube.com/watch?v=XlfumXPPrLY)
