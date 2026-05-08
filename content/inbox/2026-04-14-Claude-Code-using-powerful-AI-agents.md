---
wiki-ingested: true
title: "Claude Code - using powerful AI agents"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: ai-foundations-concepts
---
# [[concepts/claude-code|Claude Code]] - using powerful [[concepts/agentic-ai|AI agents]]

---
---
<https://www.youtube.com/watch?v=p0pR_zq-85M>
The video explains how to transform [[concepts/ai-chatbots|AI chatbots]] like [[concepts/claude|Claude]] into powerful AI agents using the [[concepts/model-context-protocol|Model Context Protocol (MCP)]].
**What is MCP?** MCP is a technology that acts as a [[concepts/universal-plug|universal plug]], allowing [[concepts/ai-models|AI models]], including Claude, to connect to [[concepts/external-data|external data]] and tools. Without MCP, Claude can only access data uploaded directly into the chat. With MCP, Claude can directly access any external data source and system by connecting to an [[concepts/mcp-server|MCP server]]. This significantly enhances Claude's ability to retrieve information and perform tasks.
**Ways to Use MCP with Claude:** The video [[concepts/highlights|highlights]] four main ways to use MCP with Claude:

1. **Native Integrations:** These are official integrations offered directly on Claude, such as [[entities/google|Google]] [[concepts/motivation|Drive]], [[entities/google-calendar|Google Calendar]], [[entities/gmail|Gmail]], and [[entities/github|GitHub]]. Users can simply click "Connect apps" to establish these connections.
2. **Official [[concepts/mcp-servers|MCP Servers]]:** These are maintained by companies that provide ready-made MCP servers for their platforms. Examples include Perplexity MCP and [[entities/notion|Notion]] MCP. The [[entities/speaker|speaker]] recommends these as they are well-maintained.
3. **Community-Built MCP Servers:** These are developed and maintained by the community, demonstrating various applications of MCP across different domains. Users can consider these if official integrations are not available. [[entities/figma|Figma]] MCP is given as an example.
4. **Self-Built MCP Server:** Users can build their own MCP server using [[concepts/no-code|no-code]] platforms like [[entities/n8n|n8n]], allowing them to connect to various services like Google Analytics, [[entities/google-docs|Google Docs]], and Gmail. The speaker emphasizes this method for its flexibility.

**Framework to Turn Claude into an [[concepts/ai-agent|AI Agent]]:** The speaker proposes a three-step framework:

1. **Identify [[concepts/purpose|Purpose]]:** Clearly define the problem or need you want the AI agent to solve (e.g., research, [[entities/email|email]] management). The focus should be on the problem, not the tools.
2. **Connect Tools:** Determine the necessary tools to solve the identified problem and connect Claude with these tools using MCP or native integrations. For instance, connecting Perplexity MCP for web search.
3. **Create [[concepts/instructions|Instructions]]:** Using Claude's project feature, define the agent's role, responsibilities, available tools, and [[concepts/workflow|workflow]] details through project instructions. Each Claude project essentially becomes a specific AI agent.

**Five AI Agent [[concepts/ideas|Ideas]] (Examples):**

1. **Research Agent:**
	**Purpose:** Conduct comprehensive research, create visualizations, and publish findings to Google Docs. **Tools:** Perplexity MCP for web research, Google Docs MCP for publishing reports, Claude's artifact creation for visualizations. **Workflow:** Develop a 3-question research plan, conduct layered research, evaluate sources, create interactive visual summaries (charts, infographics), export a final report to Google Docs with plain text formatting (bullet points, clear headings, no [[concepts/markdown|markdown]] or HTML formatting), and include proper citations with URLs. **Demonstration:** Claude successfully researched key trends in minimalism, created interactive visual summaries, and generated a Google Doc report with detailed findings and citations. It also handled a more complex request to research the impact of AI on [[concepts/leadership|leadership]] in modern organizations, incorporating uploaded company information and proposing recommendations specific to the organization's needs.
	
2. **Business Intelligence Agent:**
	**Purpose:** Access data sources, create visualizations, interpret data, and generate actionable insights to support business [[concepts/decision-making|decision-making]]. **Tools:** Google Analytics MCP for accessing analytics data, Claude's artifact creation for data visualization and dashboards, Email MCP for sending reports. **Workflow:** Clarify specific metrics and time periods, access data through MCP tools, clean and prepare data, create comprehensive dashboards (e.g., in blue and purple color schemes with multiple visualization types), interpret trends, and automatically generate and send reports via email when requested. **Demonstration:** Claude analyzed [[concepts/session|session]] performance data from Google Analytics, generated a dashboard visualization with key insights and recommendations, and automatically sent the report via email. It also analyzed user [[concepts/distribution|distribution]] by country, providing trends and insights.
	
3. **Personal [[entities/claude-co-work|Workflow Assistant]]:**
	**Purpose:** Automate daily tasks, retrieve context from emails and [[concepts/files|files]], and streamline communication to boost productivity. **Tools:** Gmail MCP for reading and sending emails, Google Calendar MCP for managing schedules, Claude's artifact creation for visualizations and summaries. **Workflow:** Identify relevant information sources, access emails or calendar events, extract key information, create visual summaries/dashboards, draft communications, and send emails with proper rich formatting. **Demonstration:** Claude retrieved email conversations and calendar events related to a mentorship program, generating a project dashboard with meeting timelines, key milestones, and decisions. It could also check for unresponded leads in Gmail and summarize newsletter content.
	
4. **UX [[concepts/design|Design]] Agent:**
	**Purpose:** Streamline [[concepts/design-workflows|design workflows]] by connecting to Figma, analyzing designs, generating [[concepts/code|code]], and creating prototypes based on existing [[concepts/style|style]] guidelines. **Tools:** Figma MCP for accessing design files, [[concepts/google-drive|Google Drive]] for accessing [[concepts/user-feedback|user feedback]], Claude's artifact creation for prototypes and visualizations. **Workflow:** Access Figma designs and style guidelines, generate clean HTML/CSS/React code from Figma designs, create consistent mockups/prototypes, evaluate designs against user [[concepts/feedback|feedback]], and generate visual deliverables with [[concepts/explanations|explanations]] and recommendations. **Demonstration:** Claude analyzed a product detail page mockup on Figma along with user feedback from Google Drive. It provided prioritized UX improvement recommendations and even generated a rough mockup incorporating these suggestions, demonstrating its ability to follow brand style guidelines.
	
5. **Project Intelligence Agent (Knowledge Agent):**
	**Purpose:** Access, analyze, and enhance Notion workspaces or project data to transform scattered information into actionable insights and visualizations. **Tools:** Notion MCP for accessing project databases and pages, Perplexity MCP for web search, Claude's artifact creation for visualizations and analyses. **Workflow:** Access Notion project data, transform raw project data into appropriate visualizations based on [[concepts/storytelling|storytelling]] goals, use SWOT analysis [[concepts/templates|templates]], and update Notion pages with new insights when requested. **Demonstration:** Claude performed a SWOT analysis for [[entities/canva|Canva]], generating a new page in Notion following a predefined template and visualizing the SWOT analysis. It also analyzed an existing project planner in Notion, providing a visual dashboard of project status, completion rates, resource allocation, and identifying potential bottlenecks and dependencies.
	

The speaker emphasizes that Claude and MCP are a "game-changer" due to their [[concepts/accessibility|accessibility]] and ability to streamline workflows, even for individuals with limited technical backgrounds. They also [[concepts/stress|stress]] the importance of having "human in the loop" for high-stake actions, meaning an approval mechanism or human oversight before AI agents take actual actions.

Note there was a comment asking about how to integrate Perplexity with Claude - she followed instructions at: [GitHub.com/ppl-ai/modelcontextprotocol](https://GitHub.com/ppl-ai/modelcontextprotocol)
