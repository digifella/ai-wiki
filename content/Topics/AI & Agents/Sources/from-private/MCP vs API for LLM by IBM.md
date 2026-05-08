---
wiki-ingested: true
domain: ai-agents
group: model-efficiency-compression
---
<https://www.youtube.com/watch?v=7j1t3UZA1TY>

This video explains the concepts of Application Programming Interfaces (APIs) and the newer Model Context Protocol (MCP), highlighting their similarities, differences, and how they relate in the context of Large Language [[concepts/models|Models]] (LLMs) and AI [[concepts/agents|agents]].
**1\. The Need for External Interaction:** Large Language Models (LLMs) need to interact with [[concepts/external-data|external data]] sources, services, and tools to be truly useful. Traditionally, this has been done using **Application Programming Interfaces (APIs)**.
**2\. Model Context Protocol (MCP):**

* **[[concepts/slms|Definition]]:** MCP is a recently introduced (late 2024, as per the video) open standard protocol that standardizes how applications provide _context_ to LLMs.
* **Metaphor:** It's compared to a USB-C port for AI applications, standardizing connections between AI applications, LLMs, and external data sources.
* **[[concepts/architecture|Architecture]]:** **MCP Host:** Runs MCP clients (AI applications). **MCP Protocol:** Clients open a JSON-RPC 2.0 session using this protocol to connect. **[[concepts/mcp-servers|MCP Servers]]:** External entities that expose capabilities (like peripherals plugged into a USB-C port). This forms a client-server relationship.
* **Capabilities (Primitives) for AI Agents:** MCP primarily addresses two needs for AI agents: **Context:** Provides a standard way for an AI [[entities/agent|agent]] to retrieve external contextual data (e.g., documents, [[concepts/knowledge-base|knowledge base]] entries, database records). **Tools:** Enables the use of [[concepts/external-tools|external tools]] by AI agents (e.g., web search, calling an external service, performing calculations).
* **[[concepts/mcp-server|MCP Server]] Primitives:** MCP servers advertise capabilities through "primitives": **Tools:** Discrete actions or functions an AI can call (e.g., a "get weather" tool from a weather service, a "create event" tool from a calendar service). The server advertises the tool's name, description, input/output schema, and capabilities. The MCP server executes the underlying function. **Resources:** Read-only data items or documents the server can provide, which the client can retrieve on demand (e.g., text [[concepts/files|files]], database schemas, file contents). **[[concepts/prompt-templates|Prompt Templates]]:** Predefined templates providing suggested prompts for the AI agent.

**3\. [[concepts/application-programming-interface-api|Application Programming Interface (API)]]:**

* **Definition:** An API defines a set of rules or protocols describing how one system (client) can request information or services from another system (server).
* **[[concepts/purpose|Purpose]]:** Developers use APIs to integrate capabilities from external systems instead of building everything from scratch (e.g., an e-commerce site using a payment API).
* **[[concepts/abstraction|Abstraction]]:** An API acts as an abstraction layer, meaning the requesting application (client) doesn't need to know the internal details of how the service (server) operates. It just needs to know how to format requests and understand [[concepts/responses|responses]].
* **RESTful API:** A common API [[concepts/style|style]] that communicates over HTTP, using standard HTTP methods like GET (retrieve), POST (create), PUT (update), and DELETE (remove) for interactions. Many commercial LLMs are offered via REST APIs.

**4\. Similarities between MCP and APIs:**

* **Client/Server Model:** Both operate on a client-server architecture.
* **Abstraction:** Both provide a layer of abstraction, hiding low-level [[concepts/implementation-details|implementation details]] from the client.
* **Simplified [[concepts/integration|Integration]]:** Both simplify integration, allowing different systems to "wire together" without reinventing core functionalities.

**5\. Differences between MCP and APIs:**

* **Purpose-Built vs. General Purpose:** **MCP:** Purpose-built for LLM applications (AI agents). It explicitly bakes in assumptions and standardizes patterns (like providing context and invoking tools) that align with how AI agents operate. **APIs:** General purpose. They were not created specifically with AI or LLMs in mind.
* **Dynamic Self-Discovery:** **MCP:** Supports _dynamic self-discovery_. An MCP client can query an MCP server at runtime to discover all available functions and data. AI agents can then adapt to and utilize new features automatically without [[concepts/code|code]] redeployment. **APIs:** Traditionally, REST APIs do not offer equivalent runtime discovery mechanisms. If an API changes or new endpoints are added, the client typically needs to be manually updated by a developer.
* **Standardization of Interface:** **MCP:** Every MCP server, regardless of the underlying service or data it connects to, speaks the _same protocol_ and follows the _same patterns_. This means "build once, integrate many." **APIs:** Each API is generally _unique_. The specific endpoints, parameter formats, and authentication schemes vary between different services, often requiring unique "adapters" for each one.

**6\. The Relationship: MCP as a Wrapper for APIs:** MCP and APIs are not adversaries but rather complementary layers in an AI stack. Many **MCP servers actually utilize traditional APIs** to perform their work. An MCP server can act as a **wrapper** around an existing API, translating between the standardized MCP format and the underlying service's native API requests. This allows existing services (via their APIs) to be better and more uniformly integrated into AI agents.

## Related Concepts
- [[concepts/model-context-protocol|Model Context Protocol (MCP)]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol_%28MCP%29)
- [[concepts/application-programming-interfaces-apis|Application Programming Interfaces (APIs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Application_Programming_Interfaces_%28APIs%29)
- [[concepts/large-language-models|Large Language Models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLMs%29)
- [[concepts/llms|LLMs]] — [Wikipedia](https://en.wikipedia.org/wiki/LLMs)
- APIs — [Wikipedia](https://en.wikipedia.org/wiki/APIs)
- [[concepts/mcp|MCP]] — [Wikipedia](https://en.wikipedia.org/wiki/MCP)
- Context Protocol — [Wikipedia](https://en.wikipedia.org/wiki/Context_Protocol)
- Client-Server [[concepts/architecture|Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Client-Server_Architecture)
- JSON-RPC 2.0 — [Wikipedia](https://en.wikipedia.org/wiki/JSON-RPC_2.0)
- RESTful API — [Wikipedia](https://en.wikipedia.org/wiki/RESTful_API)
- [[concepts/abstraction|Abstraction]] Layer — [Wikipedia](https://en.wikipedia.org/wiki/Abstraction_Layer)
- [[concepts/integration|Integration]] Simplification — [Wikipedia](https://en.wikipedia.org/wiki/Integration_Simplification)
- Dynamic Self-Discovery — [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_Self-Discovery)
- Primitives (Tools, Resources, [[concepts/prompt-templates|Prompt Templates]]) — [Wikipedia](https://en.wikipedia.org/wiki/Primitives_%28Tools%2C_Resources%2C_Prompt_Templates%29)
- REST — [Wikipedia](https://en.wikipedia.org/wiki/REST)

## Related Entities
- [[entities/ibm|IBM]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM)
- [[entities/usb-c-port|USB-C port]] — [Wikipedia](https://en.wikipedia.org/wiki/USB-C_port)
- LLMs — [Wikipedia](https://en.wikipedia.org/wiki/LLMs)
- APIs — [Wikipedia](https://en.wikipedia.org/wiki/APIs)
- [[entities/mcp|MCP]] — [Wikipedia](https://en.wikipedia.org/wiki/MCP)