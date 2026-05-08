---
type: concept
domain: business-strategy
tags:
  - "azure"
  - "cloud"
  - "resource-management"
  - "azure-resource-group"
  - "resource-group-management"
  - "lifecycle-management"
  - "rbac-group"
  - "project-grouping"
aliases:
  - "resource group"
summary: "A resource group is a logical container in Azure for grouping related resources, enabling unified management, access control, and billing."
updated: 2026-04-15
group: products-operations-business-economics
---
# Resource group

Logical container in Azure for grouping related resources, enabling unified management, access control, and billing.

**Key characteristics**:
- Shared lifecycle and deletion behavior
- RBAC at group level
- Resources can span regions (typically co-located for efficiency)

**[[concepts/best-practices|Best practices]]**:
- Group by project/application (e.g., `rg-ecommerce-prod`)
- Avoid mixing unrelated resources
- Consistent naming conventions

**Related concepts**:
- [[concepts/azure-subscription|Azure subscription]]
- Resource
- Azure region

**Example use case**:
- Build an [[concepts/agentic-rag|agentic rag]] system in [[concepts/azure-ai|azure ai]] and [[concepts/rich-tooling|foundry]]

2026 04 14 Build an [[concepts/agentic-rag-systems|agentic rag]] system in [[concepts/azure-cognitive-services|azure ai]] and foundry

## Source Notes
- 2026-04-08: Anthropic
- 2026-04-10: [[lab-notes/2026-04-10-Anthropics-Claude-AI-Subscription-Changes-OpenClaw-Ban-Usage-Limits-an|Anthropics Claude AI Subscription Changes OpenClaw Ban Usage Limits an]] · [▶ source](https://www.youtube.com/watch?v=a4hdPWSUzsE)
- 2026-04-18: [[lab-notes/2026-04-18-Claude-Opus-47-Enhanced-Performance-Visual-Understanding-and-Pricing-A|Claude Opus 47 Enhanced Performance Visual Understanding and Pricing A]] · [▶ source](https://www.youtube.com/watch?v=8BKGfajOnlY)
- 2026-04-19: [[lab-notes/2026-04-19-Karpathy-Loop-Auto-Optimize-AI-Inhuman-Iteration-for-Agent-Improvement|Karpathy Loop Auto Optimize AI Inhuman Iteration for Agent Improvement]] · [▶ source](https://www.youtube.com/watch?v=xnG8h3UnNFI)
- 2026-04-22: [[lab-notes/2026-04-22-AnythingLLM-1.12-Channels-Mobile-Interaction-with-Private-Self-Hosted-LLMs|AnythingLLM 1.12 Channels: Mobile Interaction with Private Self-Hosted LLMs]] · [▶ source](https://youtu.be/Ei5nB5fyn7g)
- 2026-04-30: Quantum Computing · [▶ source](https://www.youtube.com/watch?v=IhS6ecYZFdQ)