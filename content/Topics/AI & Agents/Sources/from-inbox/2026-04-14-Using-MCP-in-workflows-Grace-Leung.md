---
wiki-ingested: true
title: "Using MCP in workflows - Grace Leung"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: tools-platforms
group: apis-integrations-mcp
---
# Using MCP in [[concepts/workflow|workflows]] - [[entities/grace-leung|Grace Leung]]

---
---
<https://www.youtube.com/watch?v=xBcSLxpIlr0>
This video provides a detailed explanation of the [[concepts/model-context-protocol|Model Context Protocol (MCP)]] and its significance in building powerful AI [[concepts/agents|agents]] and workflows that can interact with [[concepts/external-tools|external tools]] and data.
Here's a breakdown of the key concepts and practical applications:
**1\. The Difference Between Chatbots and AI Agents:**

* **Simple AI Chatbots:** Primarily handle back-and-forth conversations, limited to their internal knowledge or simple integrations.
* **Powerful AI Agents/Workflows:** Distinguished by their ability to **access and use external tools** (calendars, databases, email, [[concepts/business-applications|business applications]]) to perform tasks on the fly.

**2\. What is Model Context Protocol (MCP)?**

* **[[concepts/slms|Definition]]:** MCP is an **[[concepts/open-source|open-source]] protocol** that standardizes how applications provide context to [[concepts/large-language-models|Large Language Models]] (LLMs).
* **The Problem Before MCP (Traditional API Calls):** Before MCP, connecting AI to business tools (e.g., [[entities/salesforce|Salesforce]], Google Analytics, Airtable) was like teaching the AI a new, different language for _each_ tool. Each connection was a custom, one-off "translation project," making it unscalable as [[concepts/ai-models|AI models]] change or new tools are added. This led to managing many separate, costly conversations/integrations.
* **The [[concepts/solution|Solution]] (MCP as a Universal Translator):** MCP acts as a **universal translator** for AI. Instead of AI learning many languages, it only needs to learn one: the language of MCP. When service providers adopt MCP, they all "speak the same standard language," saving significant custom [[concepts/integration|integration]] efforts.
* **Key Benefit: Model Agnostic:** AI applications become model agnostic, meaning you can swap different AI models ([[entities/chatgpt|ChatGPT]], [[concepts/gemini|Gemini]], Claude, etc.) at any time without rebuilding the underlying integrations from scratch.

**3\. MCP [[concepts/architecture|Architecture]]: Servers and Clients**

* **MCP Servers:** These are the business tools or systems that provide capabilities (data access, functions). They expose their functionalities via the MCP protocol.
* **MCP Clients:** These are the AI applications (LLMs like Claude, ChatGPT) that use these tools by communicating via MCP.
* The MCP acts as the intermediary, translating requests and responses between the AI client and the tool server.

**4\. Types of MCP Servers (and How to Choose):**

* **Recommendation Flow:** Always start with the lowest risk option and move down the list if necessary, _always reviewing permissions_. **Native Integration:** **Description:** Built-in connectors offered directly by AI apps. **Risk/Setup:** Minimal risk, zero setup. **Example (ChatGPT):** Connects to Gmail, [[entities/google-drive|Google Drive]], HubSpot, etc. Currently limited to "[[entities/chatgpt-deep-research|Deep Research]]" mode (read-only, for analysis). **Example (Claude):** Offers more robust native integrations for reading, [[concepts/writing|writing]], and performing actions. **Official MCP Servers:** **Description:** MCP servers officially developed and maintained by the service providers (e.g., Notion, HubSpot, Perplexity, [[entities/shopify|Shopify]]). **Risk/Setup:** High reliability, can be installed remotely or locally. **Use Case:** When native integration isn't sufficient or available. **Community-Built MCP Servers:** **Description:** MCP servers developed and maintained by individuals or the broader community. **Risk/Setup:** Higher risk (untested, potential [[concepts/secure|security]] vulnerabilities like [[concepts/data-leakage|data leakage]], prompt injection). Use with caution and thorough understanding of risks. **Use Case:** For specialized tools that don't have official MCP support. **Custom MCP Servers:** **Description:** Building your own [[concepts/mcp-server|MCP server]] for specific needs. **Risk/Setup:** Full control and flexibility, but requires significant development and testing effort. **Method:** Can use [[concepts/no-code|no-code]] platforms (like n8n) or programming SDKs (Python, JavaScript, etc.). **Use Case:** Unique business requirements, proprietary internal systems, or highly specialized integrations not covered by other options.

**5\. MCP Clients:**

* These are the AI applications that leverage MCP. Most popular AI platforms now support MCP to some extent.
* **Examples:** ChatGPT, Gemini, Claude, Windswept, Cursor. Claude is highlighted for its robust MCP support.

**6\. Practical Demos:**

* **Native Integration Demo (ChatGPT + Gmail):** Demonstrates connecting ChatGPT to Gmail via built-in connectors. Shows ChatGPT retrieving and analyzing AI-related newsletters from the user's inbox to summarize emerging trends. [[concepts/highlights|Highlights]] that ChatGPT's current native [[concepts/gmail-integration|Gmail integration]] is limited to "Deep Research" (read-only) and uses up "credits."
* **Official MCP Server Demo ([[entities/claude-cowork|Claude Desktop]] + Notion):** Shows how to set up an official Notion MCP server by creating an internal integration in Notion, granting necessary permissions, and obtaining an API key. Demonstrates adding this Notion MCP server to Claude Desktop's configuration file. Claude then uses the Notion tool to access brand kit information (brand voice, color palette, customer personas) stored in Notion and generates a social media content brief adhering to those guidelines. Claude requests user permission before executing actions via the tool.
* **Custom MCP Server Demo (Claude Web App + n8n + Google Analytics):** Illustrates building a custom MCP server using n8n (a no-code [[concepts/automation|automation]] platform). An n8n workflow is created with an "MCP Server Trigger" and a "Google Analytics Tool" node (configured to pull specific metrics like total users, sessions, countries). The generated remote URL for this n8n MCP server is then added as a custom integration in the Claude Web App. Claude is prompted to generate a website demographics dashboard, specifying to use the Google Analytics tool and desired brand colors. Claude retrieves data from Google Analytics via the n8n MCP server and generates a visual dashboard with key metrics, charts, and recommendations. **Bonus Tip:** Limit custom MCP servers to no more than 5 different types of tools to avoid confusing the AI agent and maintain effectiveness.

**Conclusion:** MCP is a critical infrastructure for the future of AI, transforming simple chatbots into scalable, powerful AI agents that can deeply integrate with an organization's existing tools and data. This allows for highly relevant insights, [[concepts/automation-tools|automated workflows]], and enhanced [[concepts/decision-making|decision-making]] within business processes.
