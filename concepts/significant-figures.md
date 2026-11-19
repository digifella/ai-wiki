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
updated: 2026-10-05
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Significant Figures

Significant figures are the digits in a number that carry meaningful information about its precision and measurement accuracy. They comprise all digits known with certainty plus one additional digit that has been estimated or rounded. This distinction is essential because it communicates how reliably a value has been determined, whether through direct measurement or calculation. By reporting only significant figures, we avoid implying greater precision than actually exists in our data.

## Rules for Identification

Several standardized conventions govern which digits count as significant. Non-zero digits are always significant. Zeros appearing between non-zero digits are also significant, as they are part of the measured value. Leading zeros, which precede all non-zero digits, are never significant because they merely indicate the position of the decimal point. Trailing zeros in a number containing a decimal point are significant, indicating the precision of the measurement. However, trailing zeros in a whole number without a decimal point are generally considered ambiguous and may not be significant unless specified by context or scientific notation.

## Arithmetic Operations

The rules for significant figures differ depending on the mathematical operation performed. When adding or subtracting measurements, the result must be rounded to the same number of decimal places as the measurement with the fewest decimal places. This ensures that the uncertainty in the least precise measurement is preserved in the final result. Conversely, when multiplying or dividing measurements, the result should contain the same number of significant figures as the measurement with the fewest significant figures. This reflects the fact that the relative uncertainty of the result is dominated by the least precise input.

## Scientific Notation

Scientific notation is often used to clarify the number of significant figures in a value, particularly for trailing zeros. In this format, a number is expressed as a coefficient between 1 and 10 multiplied by a power of ten. The coefficient explicitly shows all significant digits, removing ambiguity about whether trailing zeros are placeholders or measured values. For example, writing $1.00 \times 10^3$ clearly indicates three significant figures, whereas $1000$ might be interpreted as having one, two, three, or four significant figures depending on the context.

## Source Notes
- 2026-04-07: Photoshop Beta
- 2026-04-08: Anthropic
- 2026-04-10: [[lab-notes/2026-04-10-Anthropics-Claude-AI-Subscription-Changes-OpenClaw-Ban-Usage-Limits-an|Anthropics Claude AI Subscription Changes OpenClaw Ban Usage Limits an]] · [▶ source](https://www.youtube.com/watch?v=a4hdPWSUzsE)
- 2026-04-11: [[lab-notes/2026-04-11-The-Bloody-Origins-of-Number-Zero-in-Ancient-India|The Bloody Origins of Number Zero in Ancient India]] · [▶ source](https://www.youtube.com/watch?v=RSIsGomGZcc)
- 2026-04-17: [[lab-notes/2026-04-17-Bridging-the-AI-Agent-Speed-Gap-Rebuilding-Human-Centric-Web-Infrastru|Bridging the AI Agent Speed Gap Rebuilding Human Centric Web Infrastru]] · [▶ source](https://www.youtube.com/watch?v=XlfumXPPrLY)
