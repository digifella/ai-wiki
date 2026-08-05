---
wiki-ingested: true
title: "MCP vs API for LLM by IBM"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

---
---
<https://www.youtube.com/watch?v=7j1t3UZA1TY>

This video explains the concepts of [[concepts/application-programming-interfaces-apis|Application Programming Interfaces (APIs)]] and the newer [[concepts/model-context-protocol|Model Context Protocol]] (MCP), highlighting their similarities, differences, and how they relate in the context of [[concepts/large-language-models|Large Language Models]] (LLMs) and AI [[concepts/agents|agents]].
**1\. The Need for External Interaction:** Large Language Models (LLMs) need to interact with [[concepts/external-data|external data]] sources, services, and tools to be truly useful. Traditionally, this has been done using **Application Programming Interfaces (APIs)**.
**2\. Model Context Protocol (MCP):**

* **[[concepts/slms|Definition]]:** MCP is a recently introduced (late 2024, as per the video) open standard protocol that standardizes how applications provide _context_ to LLMs.
* **Metaphor:** It's compared to a [[entities/usb-c-port|USB-C port]] for AI applications, standardizing connections between AI applications, LLMs, and external data sources.
* **[[concepts/architecture|Architecture]]:** **MCP Host:** Runs MCP clients (AI applications). **MCP Protocol:** Clients open a JSON-RPC 2.0 [[concepts/session|session]] using this protocol to connect. **[[concepts/mcp-servers|MCP Servers]]:** External entities that expose [[concepts/capabilities|capabilities]] (like peripherals plugged into a USB-C port). This forms a client-server relationship.
* **Capabilities (Primitives) for AI Agents:** MCP primarily addresses two needs for AI agents: **Context:** Provides a standard way for an [[concepts/ai-agent|AI agent]] to retrieve external contextual data (e.g., documents, [[concepts/knowledge-base|knowledge base]] entries, database records). **Tools:** Enables the use of [[concepts/external-tools|external tools]] by AI agents (e.g., web search, calling an external service, performing calculations).
* **[[concepts/mcp-server|MCP Server]] Primitives:** MCP servers advertise capabilities through "primitives": **Tools:** Discrete actions or functions an AI can call (e.g., a "get weather" tool from a weather service, a "create event" tool from a calendar service). The server advertises the tool's name, description, input/output schema, and capabilities. The MCP server executes the underlying function. **Resources:** Read-only data items or documents the server can provide, which the client can retrieve on demand (e.g., text [[concepts/files|files]], database schemas, file contents). **[[concepts/prompt-templates|Prompt Templates]]:** Predefined templates providing suggested prompts for the AI agent.

**3\. [[concepts/application-programming-interface-api|Application Programming Interface (API)]]:**

* **Definition:** An API defines a set of rules or protocols describing how one system (client) can request information or services from another system (server).
* **[[concepts/purpose|Purpose]]:** Developers use APIs to integrate capabilities from external [[concepts/systems|systems]] instead of building everything from scratch (e.g., an e-commerce site using a payment API).
* **[[concepts/abstraction|Abstraction]]:** An API acts as an abstraction layer, meaning the requesting application (client) doesn't need to know the internal details of how the service (server) operates. It just needs to know how to format requests and understand [[concepts/responses|responses]].
* **RESTful API:** A common API [[concepts/style|style]] that communicates over HTTP, using standard HTTP [[concepts/methods|methods]] like GET (retrieve), POST (create), PUT (update), and DELETE (remove) for interactions. Many commercial LLMs are offered via REST APIs.

**4\. Similarities between MCP and APIs:**

* **Client/Server Model:** Both operate on a client-server architecture.
* **Abstraction:** Both provide a layer of abstraction, hiding low-level [[concepts/implementation-details|implementation details]] from the client.
* **Simplified [[concepts/integration|Integration]]:** Both simplify integration, allowing different systems to "wire together" without reinventing core functionalities.

**5\. Differences between MCP and APIs:**

* **Purpose-Built vs. General Purpose:** **MCP:** Purpose-built for LLM applications (AI agents). It explicitly bakes in assumptions and standardizes patterns (like providing context and invoking tools) that align with how AI agents operate. **APIs:** General purpose. They were not created specifically with AI or LLMs in mind.
* **Dynamic Self-Discovery:** **MCP:** Supports _dynamic self-discovery_. An MCP client can query an MCP server at runtime to discover all available functions and data. AI agents can then adapt to and utilize new features automatically without [[concepts/code|code]] redeployment. **APIs:** Traditionally, REST APIs do not offer equivalent runtime discovery mechanisms. If an API changes or new endpoints are added, the client typically needs to be manually updated by a [[entities/developer|developer]].
* **Standardization of Interface:** **MCP:** Every MCP server, regardless of the underlying service or data it connects to, speaks the _same protocol_ and follows the _same patterns_. This means "build once, integrate many." **APIs:** Each API is generally _unique_. The specific endpoints, parameter formats, and [[concepts/authentication|authentication]] schemes vary between different services, often requiring unique "adapters" for each one.

**6\. The Relationship: MCP as a Wrapper for APIs:** MCP and APIs are not adversaries but rather complementary layers in an AI stack. Many **MCP servers actually utilize traditional APIs** to perform their work. An MCP server can act as a **wrapper** around an existing API, translating between the standardized MCP format and the underlying service's native API requests. This allows existing services (via their APIs) to be better and more uniformly integrated into AI agents.
