---
type: concept
domain: maths-cryptography
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
updated: 2026-05-01
---
# Significant Figures

Significant figures are the digits in a number that convey meaningful information about its precision and [[concepts/accuracy|accuracy]]. They include all non-zero digits, zeros between non-zero digits, and trailing zeros in decimal numbers. For example, the number 0.00456 has three significant figures (4, 5, and 6), while 1,050 may have three or four depending on whether the trailing zero is considered significant. The concept is fundamental to expressing measurement uncertainty and communicating the [[concepts/software-reliability|reliability]] of numerical data.

## Measurement and Precision

In scientific measurement, significant figures directly reflect the precision of the instrument or method used to obtain a value. A measurement reported as 5.2 cm implies the measuring device could distinguish to the nearest tenth of a centimeter, whereas 5.20 cm suggests precision to the nearest hundredth. Reporting more significant figures than warranted by the measurement process overstates accuracy, while too few may lose important information about the measurement's quality.

## Calculations and Rounding

When performing arithmetic operations, the rules for significant figures help maintain appropriate precision in results. Multiplication and division should yield results with significant figures matching the input with the fewest significant figures. Addition and subtraction are governed by decimal place position rather than digit count. Proper rounding of final results according to significant figure rules ensures that reported answers reflect the actual precision of the underlying measurements rather than spurious accuracy.

## Source Notes
- 2026-04-07: Photoshop Beta
- 2026-04-08: Anthropic
- 2026-04-10: [[lab-notes/2026-04-10-Anthropics-Claude-AI-Subscription-Changes-OpenClaw-Ban-Usage-Limits-an|Anthropics Claude AI Subscription Changes OpenClaw Ban Usage Limits an]] · [▶ source](https://www.youtube.com/watch?v=a4hdPWSUzsE)
- 2026-04-11: [[lab-notes/2026-04-11-The-Bloody-Origins-of-Number-Zero-in-Ancient-India|The Bloody Origins of Number Zero in Ancient India]] · [▶ source](https://www.youtube.com/watch?v=RSIsGomGZcc)
- 2026-04-17: [[lab-notes/2026-04-17-Bridging-the-AI-Agent-Speed-Gap-Rebuilding-Human-Centric-Web-Infrastru|Bridging the AI Agent Speed Gap Rebuilding Human Centric Web Infrastru]] · [▶ source](https://www.youtube.com/watch?v=XlfumXPPrLY)