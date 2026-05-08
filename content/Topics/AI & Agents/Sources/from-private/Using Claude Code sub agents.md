---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
---
<https://www.youtube.com/watch?v=LCYBVpSB0Wo>
This video details common pitfalls and [[concepts/best-practices|best practices]] for using [[concepts/sub-agents|sub-agents]] within [[concepts/claude-code|Claude Code]], focusing on [[concepts/context-engineering|context engineering]] and optimization.
**1\. The Problem with Early Sub-[[entities/agent|Agent]] Implementation:**

* **Initial Excitement, Negative Experience:** Claude Code introduced sub-agents to offload tasks, but many users (including the [[entities/speaker|speaker]]) found them slow, token-hungry, and ineffective.
* **Context Overload (Pre-Sub-Agents):** Before sub-agents, the main Claude Code agent handled all tasks. Tools like `Read` (for reading [[concepts/files|files]]) consume massive [[concepts/tokens|tokens]] by including entire file content in the [[concepts/conversation-history|conversation history]]. This quickly filled the [[concepts/context-window|context window]], forcing the `compact` command ([[concepts/document-summarization|summarization]]), which degrades performance and leads to lost context.
* **Misuse of Sub-Agents:** The speaker initially tried to delegate _implementation_ tasks (e.g., frontend-dev, backend-dev agents) directly to sub-agents. Each sub-agent would then perform its own web searches, file writes, etc. The problem arose when bugs or issues occurred: the parent agent lacked the detailed context of the sub-agent's actions, making [[concepts/debugging|debugging]] difficult. Crucially, each sub-agent [[concepts/session|session]] was _isolated_ and lacked awareness of what other sub-agents had done, leading to redundant work or inconsistencies.

**2\. The Intended [[concepts/purpose|Purpose]] & Best Practice for Sub-Agents:**

* **Context Engineering & Optimization:** The primary goal of sub-agents is to manage and optimize context.
* **Research & Summarization (Adam Wolff's Insight):** Adam Wolff, a key engineer on the Claude Code team, clarified that sub-agents are best suited for: Performing extensive work (like research, exploring codebases). Then providing _small amounts of summarized information_ back to the main conversation thread. They should _not_ be anthropomorphized into full implementation specialists.

**3\. The Speaker's Improved Sub-Agent Strategy:**

* **Service-Specific Expert Agents:** The speaker adopted a new approach: creating specialized "expert" sub-agents for specific services/domains (e.g., `shadcn-expert`, `vercel-ai-sdk-expert`, `stripe-expert`). Each expert agent is primed with deep knowledge of its domain (e.g., latest documentation, best practices) and equipped with relevant "[[concepts/model-context-protocol|Model Context Protocol]]" (MCP) tools for [[concepts/knowledge-bases|information retrieval]].
* **File System as Context (Inspired by [[concepts/manus|Manus]]):** Instead of storing verbose tool outputs directly in the chat history, the system saves them to local files (`.cloude/doc/` and `.cloude/tasks/`). The chat history then only references these file paths. This drastically reduces token consumption for the main agent, as it only sees references, not the full content. The full, detailed context is always available on disk for any agent to "read" when needed.
* **Hierarchical [[concepts/leadership|Task Delegation]] with Shared Files:** **Parent Agent:** Receives the main task. **Context File Creation:** The parent agent first creates a detailed context file (e.g., `.cloude/tasks/context_session_01.md`) containing the overall project goal, current status, and high-level tasks. **Sub-Agent Delegation (Research/Planning):** The parent agent delegates a _research or planning_ task to a specific expert sub-agent (e.g., `shadcn-ui-expert` for UI [[concepts/design|design]]). **Sub-Agent Reads Context:** Before starting, the sub-agent _reads the relevant context file_ to understand the overall project. **Sub-Agent Executes Research/Planning:** The sub-agent uses its specialized knowledge and MCP tools to perform research (e.g., listing Shadcn components, getting design themes). **Sub-Agent Outputs Plan/Report:** The sub-agent then _writes a detailed plan or research report_ into another designated [[concepts/markdown|markdown]] file (e.g., `.cloude/doc/ui-implementation.md`). Its final message to the parent agent is a _summary_ linking to this new file. **Parent Agent Reads Plan & Implements:** The parent agent reads the generated plan from the file, updates its main context, and then proceeds with the actual _implementation_ steps. This ensures the main agent always has full context and can make informed decisions. **Iterative Process:** This cycle repeats for different phases or aspects of the project, with context continuously maintained and shared via the file system.

**4\. Practical Demonstration in Claude Code:**

* **Setting up Custom Agents:** The speaker shows how to create new personal agents in Claude Code, injecting detailed [[concepts/instructions|instructions]] (goals, [[concepts/workflow|workflows]], output formats, and specific rules) directly into their [[concepts/system-prompts|system prompts]]. Example: `shadcn-ui-expert` is told to "NEVER do the actual implementation, just propose implementation plan." It's also given rules to _always_ read the main context file and _always_ update it with its findings. [[concepts/mcp-servers|MCP servers]] (like `shadcn-ui-mcp-server`) are configured globally in `.claude.json` to provide specialized tool access to the agents.
* **Building a [[entities/chatgpt|ChatGPT]] Replica:** The main Claude Code agent is tasked with building a ChatGPT replica (Shadcn frontend, Vercel AI SDK backend). It creates the initial `context_session_1.md` file. It calls `shadcn-ui-expert` to design the UI. The `shadcn-ui-expert` reads the context, uses its MCP tools to research components, and then writes a detailed `chatgpt_ui_implementation_plan.md`. The main agent reads this plan and updates its context. The main agent then proceeds to implement the UI, including fixing a hydration bug (demonstrating the benefit of the main agent having full context for execution). The main agent then calls `vercel-ai-sdk-implementation-planner` to plan the [[concepts/ai-integration|AI integration]], following the same research-and-plan-first approach. The result is a fully functional, [[concepts/high-fidelity-ui|high-fidelity UI]].

**5\. Additional Resources:**

* **"Money-Making AI Agents Masterclass" (HubSpot/Mindstream):** A free resource by Dmitry Shapiro, founder of MindStudio, covering the business aspects of building and launching AI agent products (problem identification, pricing [[concepts/models|models]], client acquisition, real-world case studies).
* **AI Builder Club & Claude Code Template:** The speaker also promotes his AI Builder Club community and a curated Claude Code template on [[entities/github|GitHub]], which contains [[concepts/custom-assistants|pre-configured agents]], [[concepts/hooks|hooks]], and [[concepts/commands|commands]] optimized for production environments.

This strategy effectively leverages sub-agents for specialized intelligence gathering and planning, offloading context from the main conversation, while ensuring the primary agent retains overall control and comprehensive project awareness for robust implementation.

## Related Concepts
- [[concepts/context-overload|Context Overload]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Overload)
- [[concepts/compact-command|Compact Command]] — [Wikipedia](https://en.wikipedia.org/wiki/Compact_Command)
- [[concepts/sub-agent-optimization|Sub-Agent Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Sub-Agent_Optimization)

## Related Entities
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- {'name': 'Claude Code'} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27Claude_Code%27%7D)
- {'name': 'Adam Wolff'} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27Adam_Wolff%27%7D)