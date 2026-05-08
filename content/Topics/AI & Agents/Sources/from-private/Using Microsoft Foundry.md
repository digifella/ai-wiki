---
wiki-ingested: true
domain: ai-agents
group: agent-systems-skills
---
<https://www.youtube.com/watch?v=C6rxEGJay70>
Here is a [[concepts/summary|summary]] of the [[entities/microsoft|Microsoft]] Mechanics video on the newly expanded **[[concepts/microsoft-foundry|Microsoft Foundry]]**.

# Microsoft Foundry: A Unified AI App and [[entities/agent|Agent]] Factory

**Microsoft Foundry** is a new platform designed to help developers build AI apps and [[concepts/agents|agents]] faster and with more control. It serves as a unified interface that integrates directly with [[concepts/code|code]], offering rich tooling, observability, and [[concepts/governance|governance]].

## Key Features & Capabilities

### 1\. Discovery and Onboarding

* **Unified Portal:** Accessible at `ai.azure.com`, the platform guides users through creating agents, designing [[concepts/workflow|workflows]], or browsing [[concepts/models|models]].
* **Model Catalog:** Features a massive catalog of models from providers like [[entities/azure|Azure]] [[entities/openai|OpenAI]], [[entities/mistral|Mistral AI]], [[entities/meta-ai|Meta]], DeepSeek, and for the first time, **Anthropic**.
* **Model Router:** A new tool that automatically routes prompts to the most efficient models in real-time to balance quality and [[concepts/cost|cost]].
* **[[concepts/solution|Solution]] [[concepts/templates|Templates]]:** Provides pre-built, customizable code samples with GitHub-hosted quick-start guides to accelerate development.

### 2\. The Build Experience

* **Agent Framework:** Supports creating single agents or complex **multi-agent workflows** (e.g., sequential, group chat, or human-in-the-[[concepts/loop|loop]] topologies).
* **Visualizer & Editor:** A drag-and-drop interface allows developers to define logic (if/else conditions, [[concepts/loops|loops]]) and connect various agents visually.
* **[[concepts/external-knowledge-integration|Knowledge Integration]]:** Connects agents to multiple data sources via **Foundry IQ**, including SharePoint Online, Microsoft Fabric (OneLake), and Azure [[concepts/ai-search|AI Search]].
* **Tools & MCP:** Supports standard tools and **Model Context Protocol (MCP)** servers to connect agents to external APIs and databases.
* **Fine-tuning:** Offers options for supervised [[concepts/learning|learning]], Direct Preference Optimization (DPO), and reinforcement techniques.

### 3\. [[entities/developer|Developer]] Integration (Code-First)

* **[[entities/vs-code|VS Code]] Sync:** Everything built in the web portal can be managed via code. Developers can use the Microsoft Foundry SDK and VS Code extension to edit workflows, logic, and prompts locally, which then syncs back to the platform.
* **[[concepts/multimodal-support|Multimodal Support]]:** Agents support various input types, including voice capabilities for mobile applications.

### 4\. Evaluation and Optimization

* **Synthetic Data:** Users can generate synthetic [[concepts/training-data|datasets]] to stress-test and fine-tune agents.
* **Tracing & Metrics:** The platform provides detailed traces of agent runs to diagnose latency bottlenecks and evaluate performance.
* **Scoring:** Automated evaluations provide scores for AI quality, safety, coherence, and groundedness.

### 5\. Operations and Governance (The "Operate" Tab)

* **Control Plane:** A dashboard providing a cross-fleet view of all agents, including alerts, estimated costs, token usage, and [[concepts/success-rates|success rates]].
* **Guardrails:** Allows IT to apply safety controls (e.g., blocking jailbreaks, content filters) to specific models or agents.
* **[[concepts/compliance|Compliance]] & Quotas:** Admins can set [[concepts/policies|policies]] across subscriptions and manage token limits to control costs.
* **Publishing:** Once ready, agents can be published directly to **Microsoft Teams** and **[[entities/copilot|Microsoft 365 Copilot]]** for business users to access via the Agent Store.

## Related Concepts
- [[concepts/unified-platform|Unified Platform]] — [Wikipedia](https://en.wikipedia.org/wiki/Unified_Platform)
- [[concepts/ai-app-factory|AI App Factory]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_App_Factory)
- [[concepts/source-granularity|Tooling]] — [Wikipedia](https://en.wikipedia.org/wiki/Tooling)
- Discovery — [Wikipedia](https://en.wikipedia.org/wiki/Discovery)
- Onboarding — [Wikipedia](https://en.wikipedia.org/wiki/Onboarding)
- [[entities/agent|Agent]] Framework — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Framework)
- Visualizer — [Wikipedia](https://en.wikipedia.org/wiki/Visualizer)
- [[concepts/knowledge-integration|Knowledge Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Integration)
- [[entities/foundry|Foundry]] IQ — [Wikipedia](https://en.wikipedia.org/wiki/Foundry_IQ)
- [[concepts/model-context-protocol|Model Context Protocol]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol)
- [[concepts/fine-tuning|Fine-tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/Fine-tuning)
- Synthetic Data — [Wikipedia](https://en.wikipedia.org/wiki/Synthetic_Data)
- Tracing — [Wikipedia](https://en.wikipedia.org/wiki/Tracing)
- Scoring — [Wikipedia](https://en.wikipedia.org/wiki/Scoring)
- Control Plane — [Wikipedia](https://en.wikipedia.org/wiki/Control_Plane)
- [[concepts/ai-safety|Guardrails]] — [Wikipedia](https://en.wikipedia.org/wiki/Guardrails)

## Related Entities
- [[entities/microsoft-foundry|Microsoft Foundry]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Foundry)
- [[entities/microsoft-mechanics|Microsoft Mechanics]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Mechanics)
- [[entities/anthropic|Anthropic]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- Azure OpenAI — [Wikipedia](https://en.wikipedia.org/wiki/Azure_OpenAI)
- [[entities/mistral-ai|Mistral AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Mistral_AI)
- [[entities/meta|Meta]] — [Wikipedia](https://en.wikipedia.org/wiki/Meta)
- [[entities/deepseek|DeepSeek]] — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek)