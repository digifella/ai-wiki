---
type: concept
domain: tools-platforms
tags:
  - "azure"
  - "portal"
  - "ai"
  - "agentic-rag"
  - "azure-ai"
updated: 2026-04-14
group: platforms-runtimes-environments
---
# Azure Portal

Microsoft's web-based unified management interface for provisioning, configuring, and monitoring Azure resources.

## Key Features
- Centralized dashboard for all Azure services
- [[concepts/resource-group|Resource group]] management
- [[concepts/cost|Cost]] analysis and billing
- Role-based access control (RBAC)
- [[concepts/integration|Integration]] with Azure CLI/PowerShell

## Access
- URL: `portal.azure.com`
- Requires valid Azure account with active subscription

## Related Concepts
- [[concepts/azure-subscription|Azure Subscription]] (required for portal access)
- [[concepts/azure-ai|Azure AI]] Studio (for building [[concepts/ai-models|AI models]] via portal)
- [[entities/azure|Azure]] [[concepts/foundry|Foundry]] (referenced in [[concepts/agentic-rag|agentic RAG]] system [[concepts/setup|setup]])
- Azure [[concepts/ai-search|AI Search]] (used in RAG pipelines)

## AI Solution Setup
- Configure [[entities/azure-ai|Azure AI]] services (e.g., [[concepts/azure-cognitive-services|Azure AI]] Search, Azure [[entities/openai|OpenAI]]) via portal
- Prerequisites: Active [[concepts/azure-subscription|Azure Subscription]]
- For [[concepts/agentic-rag-systems|agentic RAG]] implementation guide: Build an agentic rag system in azure ai and [[concepts/rich-tooling|foundry]]
- Video [[concepts/tutorial|tutorial]] reference: [Azure Innovation Station](https://youtu.be/xXTuxKdzZrI)

## Agentic RAG Implementation
- Guide based on [Azure Innovation Station](https://youtu.be/xXTuxKdzZrI) [[concepts/tutorial|tutorial]]
- Process for creating an [[concepts/ai-agent|AI agent]] using Agentic RAG in Azure
- Uses Retrieval-Augmented Generation (RAG) for [[concepts/fact-based-queries|question answering]]

2026 04 14 Build an agentic rag system in azure ai and foundry
