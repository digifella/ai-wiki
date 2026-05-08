---
wiki-ingested: true
title: "N8n docker and map"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: security-infrastructure
group: deployment-docker-services
---
# N8n [[concepts/docker|docker]] and map

---
---
<https://www.youtube.com/watch?v=1QR-fz-JCA4>

Zero2launch channel for ai [[concepts/workflow-automation|workflow automation]]
This video provides a detailed guide on how to install and set up n8n (a workflow automation platform) locally using Docker, and then enhance its [[concepts/capabilities|capabilities]] by integrating AI [[concepts/agents|agents]] with the [[concepts/model-context-protocol|Model Context Protocol]] (MCP) for seamless interaction with [[concepts/external-tools|external tools]] and APIs.
Here's a breakdown of the process:
**1\. Introduction to n8n, Docker, and Model Context Protocol (MCP)**

* **n8n:** A powerful, AI-native workflow automation platform for technical teams.
* **Docker:** A [[concepts/containerization|containerization]] platform that allows you to run applications in isolated, self-contained environments called containers. This simplifies installation, avoids dependency conflicts, and ensures portability.
* **Model Context Protocol (MCP):** An open protocol that enables seamless [[concepts/integration|integration]] between [[concepts/large-language-model|Large Language Model]] (LLM) applications and [[concepts/external-data|external data]] sources/tools. It standardizes tool execution, making automation faster and smarter without messy HTTP requests or endless API documentation.

**2\. Installing Docker Desktop (0:35)**

* **[[concepts/purpose|Purpose]]:** To create a lightweight, portable, and [[concepts/secure|secure]] environment for n8n.
* **Steps:** Go to the official Docker website (`docker.com`). Download Docker Desktop for your operating system ([[entities/windows|Windows]] or [[entities/mac|Mac]]). Run the installer and follow the on-screen [[concepts/instructions|instructions]]. Open Docker Desktop and ensure it's [[concepts/running|running]] before proceeding.

**3\. Installing n8n on Docker (2:00)**

* **Purpose:** To get n8n running locally and completely free.
* **Steps:** In Docker Desktop, use the search bar to find and select the official `n8n/n8n` image. Click "Download" (or "Pull") to get the latest image. Once downloaded, go to the "Images" tab, find the `n8n/n8n` image, and click "Run". **Configure the container:** **Container name:** Set a meaningful name, e.g., `n8n-container`. **Ports:** Set the "Host port" to `5678` (or any other preferred port) to access n8n via your browser. The "Container port" should remain `5678/tcp`. **Volumes:** To ensure workflows and user settings are saved, configure a volume. **Host path:** Choose a local folder where you want to store n8n's data (e.g., `/Users/yourusername/n8n-data`). **Container path:** Set this to `/home/node/.n8n`. **Environment variables:** To enable community [[concepts/nodes|nodes]] (which include [[concepts/mcp-servers|MCP servers]]) as tools inside n8n, add the following environment variable: **Variable:** `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE` **Value:** `true` Click "Run" to start the container. Wait for initialization (a few seconds). **Verify installation (3:37):** Open your web browser and navigate to `http://localhost:5678`. You should see the n8n sign-up screen. **Initial n8n [[concepts/setup|Setup]] (3:45):** Create a new owner account by filling in your [[entities/email|email]], name, and password. Follow the remaining prompts to complete the setup.

**4\. Setting up n8n Workflow with AI Agents and MCP (4:00)**

* **Install MCP Community Node (4:10):**
	In n8n, go to the **Settings** section (three dots in the bottom left) -> **Community nodes**. Click "Install a community node". In the "npm Package Name" field, type `n8n-nodes-mcp`. Check "I understand the risks..." and click "Install". Wait for the installation to complete.
	
* **Create a New Workflow (4:40):**
	Return to the "Workflows" section. Click "Start from scratch" or "Create Workflow". Rename your workflow, e.g., "[[concepts/mcp-server|MCP Server]] [[entities/agent|Agent]]".
	
* **Add Workflow Nodes:**
	**Chat Trigger Node (4:50):** Click "Add first step..." and search for "Chat Trigger". This node [[entities/will|will]] initiate the workflow when a user sends a chat message. **[[concepts/ai-agent|AI Agent]] Node (4:56):** Click the "+" icon next to the "Chat Trigger" node and search for "AI Agent". This is the core node that will utilize the chat model, [[concepts/memory|memory]], and tools.
	
* **Configure AI Agent Node:**
	**Chat Model (5:10):** Click the "+" icon under "Chat Model" in the AI Agent node. Search for "[[entities/openai|OpenAI]] Chat Model" and select it. **Create OpenAI Credential:** Click "Select Credential" -> "Create new credential". You'll need an **OpenAI API Key**. Obtain this from `platform.openai.com/api-keys`. Paste your API Key into the "API Key" field and click "Save". Back in the OpenAI Chat Model node, ensure the correct model is selected (e.g., `gpt-4o-mini`). **Memory (5:37):** Click the "+" icon under "Memory" in the AI Agent node. Search for "Simple Memory" and select it. This node allows the AI agent to retain conversational context. **Tools (5:48):** **Identify Available MCP Servers (5:58):** Click the "+" icon next to the AI Agent node and search for "MCP Client". In the "MCP Client" node, select "List Tools" as the operation. **Create MCP Client (STDIO) Credential (6:08):** Click "Select Credential" -> "Create new credential". **Connect using:** "Command Line (STDIO)". **Command:** `npx` **Arguments:** To explore available MCP servers, visit `github.com/modelcontextprotocol/servers`. For this example, we'll use "Brave Search". Copy its argument: `@modelcontextprotocol/server-brave-search`. **Environments:** You'll need a **Brave API Key**. Go to `api-dashboard.search.brave.com/` to sign up and get your API key. Add an environment variable: **Variable:** `BRAVE_API_KEY` **Value:** Paste your Brave API Key here. Click "Save". Test this "MCP Client" node (click "Test step") to verify it lists the Brave search tools (e.g., `brave_web_search`, `brave_local_search`). **Add MCP Tool for Execution (7:30):** Delete the "MCP Client" node you just used for [[concepts/testing|testing]]. Click the "+" icon under "Tool" in the AI Agent node. Search for "MCP Client" and select it. **Credential:** Select the `MCP Client (STDIO) account` credential you created earlier. **Tool Description:** Set to `Set Automatically`. **Operation:** `Execute Tool`. **Tool Name:** Use an expression to dynamically select the tool: `{{ $json.tool }}`. This allows the AI agent to decide which tool to use. **Tool [[concepts/parameters|Parameters]]:** Click "Fixed" and then "Expression" and enable "Defined automatically by the model" (this allows the AI to determine the parameters for the selected tool). **System Message for AI Agent (8:23):** Select the "AI Agent" node. Under "Options", click "Add Option" and choose "System Message". Enter a helpful system message to guide the AI, for example:
	`You are a highly efficient AI automation assistant, capable of dynamically integrating and executing tools to retrieve real-time information. - Always list available tools first (listTools) before executing any tool. - For web searches, use Brave Search MCP to retrieve the most accurate and up-to-date results. - Ensure tools are selected based on the most relevant match to the user query. - Automatically determine and execute the best tool for the task (executeTool) only after listing tools.`
	

**5\. Testing the Workflow (8:45)**

* Ensure all nodes are properly connected (Chat Trigger -> AI Agent -> OpenAI Chat Model, Simple Memory, MCP Client for listing, and MCP Client for executing).
* Activate the workflow (toggle "Inactive" to "Active").
* Open the chat box at the bottom of the n8n interface.
* Type a message, for example: "Can you find me the top 10 cafes in New York?"
* **Observe the execution (8:54):** The "Chat Trigger" receives the message. The "AI Agent" processes it, utilizing the "Simple Memory" and "OpenAI Chat Model" to understand the request and decide to use a web search tool. The "AI Agent" then interacts with the "MCP Client" (list tools first, then execute tool). The "MCP Client" calls the Brave Search API to perform the search. The results are returned to the "AI Agent". The "AI Agent" uses the "OpenAI Chat Model" again to process and format the search results into a human-readable response. The final response is displayed in the chat box, providing a list of cafes with links that you can click to open in your browser.

By following these steps, you can successfully set up n8n with Docker and leverage the power of AI agents supercharged by the Model Context Protocol to automate [[concepts/complex-tasks|complex tasks]] involving external tools and data sources.
