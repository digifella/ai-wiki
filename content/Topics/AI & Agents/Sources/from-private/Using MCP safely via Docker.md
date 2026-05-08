---
wiki-ingested: true
domain: security-infrastructure
group: deployment-docker-services
---
<https://www.youtube.com/watch?v=ZOutBmRai2M>
Here is a detailed [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video transcript regarding the evolution of the Model Context Protocol (MCP) and [[concepts/docker|Docker]]'s new solutions.

# Dynamic [[concepts/mcps|MCPs]] & [[concepts/code|Code]] Mode with Docker: A Detailed Summary

## 🚨 The Problem: [[concepts/mcp-scalability|MCP Scalability]] & Context Bloat

The Model Context Protocol (MCP) has evolved from a simple [[concepts/setup|setup]] (2-3 local servers) to a massive ecosystem with hundreds of servers and thousands of tools. This success has created significant efficiency problems:

* **[[concepts/context-window|Context Window]] Overload:** Loading thousands of tool definitions into an LLM's context window consumes excessive [[concepts/tokens|tokens]].
* **Inefficiency:** [[concepts/agents|Agents]] become slow and expensive because they are aware of too many tools they [[entities/will|will]] never use in a specific [[concepts/session|session]].
* **Raw Data Dumping:** Standard tool calls often return massive amounts of raw JSON (e.g., a [[entities/github|GitHub]] repo search returning stars, dates, and full [[concepts/metadata|metadata]] when only a description is needed), further bloating the context.

* * *

## 🛠 [[concepts/solution|Solution]] 1: Dynamic MCPs (Docker MCP [[concepts/gateway|Gateway]])

Docker has implemented a solution to stop "hardcoding" an [[entities/agent|agent]]'s environment. Instead of loading all tools at startup, agents discover and load them as needed.

### Key Components

1. **Docker MCP Catalog:** A verified list of trusted [[concepts/mcp-servers|MCP servers]] (e.g., GitHub, Notion, PostgreSQL) built into Docker Desktop.
2. **MCP Gateway:** An intermediary layer. The agent connects to _one_ server (the Gateway), which manages connections to all others.

### The Dynamic [[concepts/workflow|Workflow]]

Instead of pre-loading tools, the agent uses a set of "primordial tools" provided by the gateway:

* `mcp-find`: Searches the catalog for relevant servers by name or description.
* `mcp-add`: Dynamically adds a server to the current session.
* `mcp-remove`: Removes a server when no longer needed.

**Example:** An agent needing to check code repositories uses `mcp-find` to locate the GitHub MCP, uses `mcp-add` to install it, and only _then_ do the GitHub tool definitions enter the context window.

* * *

## 💻 Solution 2: Code Mode (The "Meta-Tool")

Even with Dynamic MCPs, standard tool calls are inefficient because they pass intermediate data back and forth to the LLM. **Code Mode** changes this by allowing the agent to write and execute scripts to orchestrate tools.

### What is Code Mode?

It is a JavaScript-enabled "meta-tool" that runs inside a sandbox. It allows the agent to write a script that calls _other_ MCP tools programmatically within a single turn.

### The Three Key Benefits

1. **[[concepts/secure|Secure]] by [[concepts/design|Design]]:** The script runs inside a Docker container sandbox. It cannot damage the host system.
2. **Token & Tool Efficiency:**
	* **Traditional:** Agent calls Tool A -> gets result -> sends to LLM -> Agent calls Tool B -> gets result -> sends to LLM. (High token [[concepts/cost|cost]]).
	* **Code Mode:** Agent writes a script that calls Tool A and Tool B, processes the data, and returns _only_ the final answer. The intermediate raw data never hits the LLM's context window.
3. **State [[concepts/persistence|Persistence]]:**
	* Data can be saved to volumes or [[concepts/files|files]] within the container.
	* _Example:_ Downloading a 5GB dataset. Instead of streaming 5GB of text to the LLM (which would crash it), the script saves the file to a volume and returns "Download Successful." Subsequent tools read the file directly from the volume.

* * *

## 🧪 Real-World Examples

### Example A: Advanced GitHub Search (Data Aggregation)

* **Without Code Mode:** The agent performs 6 separate searches for different keywords. It receives 6 massive JSON payloads containing every detail (stars, urls, dates) for every repo found.
* **With Code Mode:**
	1. The agent writes a single JavaScript script.
	2. The script runs the 6 searches, de-duplicates the results, filters out unnecessary metadata, and writes the clean list to a text file.
	3. **Result:** The agent only receives a message saying "29 repos saved to file," saving thousands of tokens.

### Example B: GitHub to Notion [[concepts/automation|Automation]] (Cross-Server Workflow)

* **The Goal:** Search GitHub for "[[concepts/ai-coding|AI coding]] tools" and save them into a Notion database.
* **The Process:**
	1. Agent uses `mcp-find` to locate the Notion MCP and connects to it.
	2. Agent writes a Code Mode script that:
		* Calls the GitHub tool to search repositories.
		* [[concepts/loops|Loops]] through the results.
		* Calls the Notion tool to insert each repo as a new page in a database.
	3. **Result:** A fully populated Notion database created automatically, without the LLM having to copy-paste or process the raw text of every entry.

* * *

## 🚀 How to Implementation

To use these features, users need **Docker Desktop**.

1. **Update:** Ensure Docker Desktop is updated to the latest version.
2. **Enable Beta Features:** Go to Settings -> Beta Features.
3. **Check Box:** Enable **"Docker MCP Toolkit."**
4. **Connect:** Configure your MCP client (like [[entities/claude-cowork|Claude Desktop]] or [[concepts/claude-code|Claude Code]]) to connect to the Docker MCP Gateway.

## Related Concepts
- [[concepts/model-context-protocol|Model Context Protocol (MCP)]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol_%28MCP%29)
- [[concepts/context-window-overload|context window overload]] — [Wikipedia](https://en.wikipedia.org/wiki/context_window_overload)
- [[concepts/tool-definitions|tool definitions]] — [Wikipedia](https://en.wikipedia.org/wiki/tool_definitions)
- [[concepts/large-language-models|large language models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/large_language_models_%28LLMs%29)