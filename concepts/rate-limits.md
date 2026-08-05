---
type: concept
domain: ai-agents
tags:
  - "rate-limiting"
  - "api-governance"
  - "usage-constraints"
  - "ai-safety"
  - "cost-management"
aliases:
  - "usage limits"
  - "request throttling"
  - "API quotas"
summary: A guide for using Claude Code effectively, covering installation and features.
updated: 2026-07-12
group: safety-guardrails-governance
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Rate Limits

Rate limits are restrictions imposed on how frequently requests can be made to [[concepts/claude-ai|Claude]] through the API. They control the number of requests per minute and [[concepts/tokens|tokens]] processed per minute, varying by subscription tier and account status. Understanding and working within these limits is essential for building reliable applications and avoiding service interruptions.

## Request and Token Limits

Rate limits typically apply to both the number of individual requests and the total number of tokens processed. Free tier accounts and trial users face stricter limits than paid subscribers. Token limits are generally more constraining than request limits, as a single request can consume thousands of tokens depending on input and output length.

## Managing Rate Limit Errors

When a rate limit is exceeded, the API returns an HTTP 429 status code. Applications should implement exponential backoff retry [[concepts/open-source-philosophy|logic]] to handle these errors gracefully. Rather than immediately retrying failed requests, clients should wait and space out subsequent attempts, with delays increasing exponentially until the request succeeds.

## Best Practices

Batching requests, [[concepts/caching|caching]] responses when appropriate, and distributing [[entities/api-calls|API calls]] over time can help stay within rate limits. Monitoring token usage and request frequency allows developers to anticipate limits and adjust application behavior accordingly. For production applications with high traffic, upgrading to higher tier accounts provides increased rate allowances.
## Source Notes
- 2026-04-08: Anthropic
- 2026-04-10: [[lab-notes/2026-04-10-Anthropics-Claude-AI-Subscription-Changes-OpenClaw-Ban-Usage-Limits-an|Anthropics Claude AI Subscription Changes OpenClaw Ban Usage Limits an]] · [▶ source](https://www.youtube.com/watch?v=a4hdPWSUzsE)
