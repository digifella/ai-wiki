---
type: concept
domain: ai-agents
tags:
  - "security"
  - "middleware"
  - "web-api"
  - "cross-origin-protection"
  - "api-security"
  - "mutation-prevention"
aliases:
  - "Same-origin guard"
summary: "A security mechanism that prevents unauthorized cross-origin mutations by ensuring requests originate from the same origin as the application."
updated: 2026-04-20
group: safety-guardrails-governance
---
# Same-origin guard

A [[concepts/secure|security]] mechanism used to prevent unauthorized cross-origin mutations by ensuring that requests originate from the same origin as the application.

## Implementation
- Utilizes the `requireSameOriginForMutatingRequest()` function.
- Applied to all Admin API endpoints to restrict mutation-based requests.

## Related Context
- Identified as a critical [[concepts/security|security]] constraint in 2026 04 14 New [[concepts/claude-ai|Claude]] Plan during the implementation of new administrative features.

2026 04 14 New Claude Plan

## Source Notes

- 2026-04-14: How to get TACK SHARP photos with any camera!