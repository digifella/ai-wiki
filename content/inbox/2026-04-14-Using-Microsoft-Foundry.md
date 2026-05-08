---
wiki-ingested: true
title: "Using Microsoft Foundry"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: business-strategy
group: products-operations-business-economics
---
# Using [[concepts/microsoft-foundry|Microsoft Foundry]]

---
---
<https://www.youtube.com/watch?v=C6rxEGJay70>
Here is a summary of the [[entities/microsoft-mechanics|Microsoft Mechanics]] video on the newly expanded **Microsoft Foundry**.

# Microsoft Foundry: A Unified AI App and [[concepts/agent-factory|Agent Factory]]

**Microsoft Foundry** is a new platform designed to help developers build AI apps and agents faster and with more control. It serves as a [[concepts/unified-interface|unified interface]] that integrates directly with code, offering [[concepts/rich-tooling|rich tooling]], observability, and [[concepts/governance|governance]].

## Key Features & [[concepts/capabilities|Capabilities]]

### 1\. Discovery and Onboarding

* **Unified Portal:** Accessible at `ai.azure.com`, the platform guides users through creating agents, designing workflows, or browsing models.
* **[[concepts/model-catalog|Model Catalog]]:** Features a massive catalog of models from providers like [[entities/azure-openai|Azure OpenAI]], [[entities/mistral-ai|Mistral AI]], Meta, [[entities/deepseek|DeepSeek]], and for the first time, **[[entities/anthropic|Anthropic]]**.
* **Model Router:** A new tool that automatically routes prompts to the most efficient models in real-time to balance quality and cost.
* **[[concepts/solution|Solution]] [[concepts/templates|Templates]]:** Provides pre-built, customizable code samples with GitHub-hosted quick-start guides to accelerate development.

### 2\. The Build Experience

* **Agent Framework:** Supports creating single agents or complex **multi-agent workflows** (e.g., sequential, group chat, or human-in-the-loop topologies).
* **Visualizer & Editor:** A drag-and-drop interface allows developers to define logic (if/else conditions, loops) and connect various agents visually.
* **[[concepts/knowledge-integration|Knowledge Integration]]:** Connects agents to multiple data sources via **Foundry IQ**, including SharePoint Online, Microsoft Fabric (OneLake), and Azure [[concepts/ai-search|AI Search]].
* **Tools & MCP:** Supports standard tools and **[[concepts/model-context-protocol|Model Context Protocol]] (MCP)** servers to connect agents to external APIs and databases.
* **[[concepts/fine-tuning|Fine-tuning]]:** Offers options for supervised [[concepts/learning|learning]], Direct Preference Optimization (DPO), and reinforcement techniques.

### 3\. [[entities/developer|Developer]] Integration (Code-First)

* **VS Code Sync:** Everything built in the web portal can be managed via code. Developers can use the Microsoft Foundry SDK and VS Code extension to edit workflows, logic, and prompts locally, which then syncs back to the platform.
* **[[concepts/multimodal-support|Multimodal Support]]:** Agents support various input types, including voice capabilities for mobile applications.

### 4\. Evaluation and Optimization

* **Synthetic Data:** Users can generate synthetic datasets to stress-test and fine-tune agents.
* **Tracing & Metrics:** The platform provides detailed traces of agent runs to diagnose latency bottlenecks and evaluate performance.
* **Scoring:** Automated evaluations provide scores for AI quality, safety, coherence, and groundedness.

### 5\. Operations and Governance (The "Operate" Tab)

* **Control Plane:** A dashboard providing a cross-fleet view of all agents, including alerts, estimated costs, token usage, and [[concepts/success-rates|success rates]].
* **[[concepts/ai-safety|Guardrails]]:** Allows IT to apply safety controls (e.g., blocking jailbreaks, content filters) to specific models or agents.
* **[[concepts/compliance|Compliance]] & Quotas:** Admins can set [[concepts/policies|policies]] across subscriptions and manage token limits to control costs.
* **Publishing:** Once ready, agents can be published directly to **Microsoft Teams** and **[[entities/microsoft-365-copilot|Microsoft 365 Copilot]]** for business users to access via the Agent Store.
