---
type: concept
domain: ai-agents
summary: A security mechanism that prevents unauthorized cross-origin mutations by ensuring requests originate from the same origin as the application.
updated: 2026-05-23
group: safety-guardrails-governance
---
# Same-origin guard

A [[concepts/secure|security]] mechanism used to prevent unauthorized cross-origin mutations by ensuring that requests originate from the same origin as the application.

## Implementation
- Utilizes the `requireSameOriginForMutatingRequest()` function.
- Applied to all Admin API endpoints to restrict mutation-based requests.

## Related Context
- Identified as a critical [[concepts/security|security]] constraint in 2026 04 14 New [[concepts/claude-ai|Claude]] Plan during the [[concepts/adoption|implementation]] of new administrative features.

2026 04 14 New [[concepts/claude|Claude]] Plan
## Source Notes

- 2026-04-14: How to get TACK SHARP photos with any camera!