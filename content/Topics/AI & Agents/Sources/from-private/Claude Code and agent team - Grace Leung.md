---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
---
<https://www.youtube.com/watch?v=0J2_YGuNrDo>
Here is a comprehensive [[concepts/summary|summary]] of the video [[concepts/tutorial|tutorial]] on building an [[concepts/ai-work-team|AI Work Team]] using [[entities/claude-4|Claude]] [[concepts/code|Code]], formatted in [[concepts/markdown|Markdown]].

# Building an Autonomous AI Work Team with Claude Code

**Video Summary:** This tutorial demonstrates how to move beyond basic chatbots and use **Claude Code** to build an [[concepts/orchestrated-system|orchestrated system]] of AI [[concepts/agents|agents]]. Instead of copying and pasting between chats, these agents share a workspace, context, and files, allowing them to collaborate on [[concepts/complex-tasks|complex tasks]].

* * *

## 🧠 Core Concept: The AI Team Structure

Unlike standard Claude chats, **Claude Code** allows you to create a [[concepts/local-workspace|local workspace]] where multiple agents operate under a "Team Lead."

* **The Workspace:** A local folder on your computer containing all project files.
* **The Agents:** Specialized sub-personalities defined by Markdown files.
* **The Team Lead:** The main [[entities/claude-chat|Claude interface]] that routes tasks to the correct sub-agent.
* **Shared Context:** All agents have access to the same files, templates, and data within the folder.

* * *

## 🛠️ Prerequisites & [[concepts/setup|Setup]]

### 1\. Accessing Claude Code

While available via Web, IDE [[concepts/plugins|extensions]], and Desktop App, the **Local Terminal** is recommended for the most complete feature set.

* **Recommended Setup:** Install Claude Code via terminal, then use the **[[entities/claude-cowork|Claude Desktop]] App** to interface with the local folder.

### 2\. Initializing the Project

1. Create a local folder (e.g., `marketing-team`).
2. Add a `Business_Context.docx` (context about your brand/company).
3. **The System Prompt (**`**CLAUDE.md**`**):** Ask Claude to read your business context and generate a `CLAUDE.md` file. This file acts as the "brain" of the project, defining the folder structure and rules.

* * *

## 🏗️ Step-by-Step: Building the Agents

The tutorial builds four distinct agents, each adding a layer of complexity.

### Agent 1: The Content Strategist (Basic Agent)

* **Function:** Research topics and create strategy documents.
* **How it works:**
	* Use the command `/agents` in the terminal to create a new agent.
	* Define the role via natural language prompts.
	* Claude creates a [[concepts/slms|definition]] file (e.g., `content-strategist.md`).
	* **Key Feature:** Ask the agent to generate its own reusable templates (briefs, campaign plans) and save them to the `templates/` folder.

### Agent 2: The Presentation Specialist (Adding Official [[concepts/skills|Skills]])

* **Function:** Turn text/data into PowerPoint slides (`.pptx`).
* **New Concept: Skills.** Reusable [[concepts/user-guides|instruction manuals]] that give Claude new capabilities.
* **Setup:**
	* Use `/plugin` command to install official [[entities/anthropic|Anthropic]] skills (specifically `document-skills` or `pptx creation`).
	* **Workflow:** Tag the agent (`@agent-presentation-specialist`) and ask it to convert a specific data file into a slide deck using specific brand colors.

### Agent 3: The Data Analyst (Adding MCP Tools)

* **Function:** Connect to external live data ([[entities/google|Google]] Analytics 4, Notion, etc.).
* **New Concept: MCP ([[concepts/model-context-protocol|Model Context Protocol]]).** Allows Claude to connect to external systems.
* **Setup:**
	* Use terminal command `claude mcp add-from-claude-desktop` to import configured tools.
	* **Workflow:** The agent queries live GA4 data and generates an HTML dashboard with interactive charts, stored locally.

### Agent 4: The Social Media Specialist (Adding Custom Skills)

* **Function:** Create social posts with on-brand visuals.
* **New Concept: Custom Skills.** Creating your own specific "tools" for Claude.
* **Setup:**
	* Feed Claude examples of your brand style (hex codes, fonts, layout).
	* Ask Claude to create a `branded-social-visual` [[concepts/skill|skill]] based on the official Canvas [[concepts/design|design]] skill.
	* **Workflow:** The agent generates post copy and uses the custom skill to generate images that strictly follow brand guidelines, then uploads them to a Notion calendar via MCP.

* * *

## 🤖 The Final Step: Orchestration

To make the agents work together without manual intervention for every step, you must update the routing rules.

1. **Update** `**CLAUDE.md**`**:** Ask Claude to review all created [[concepts/sub-agents|sub-agents]] (`.md` files in the agent folder).
2. **Define Routing:** Have Claude update `CLAUDE.md` with specific rules on _when_ to call which agent (e.g., "If the user asks for slides, call the Presentation Specialist").
3. **Multi-[[concepts/agent-workflow|Agent Workflow]]:** Define sequences (e.g., Research -> Blog [[concepts/writing|Writing]] -> Presentation Creation).

### The Result: "Mega-[[concepts/prompting|Prompting]]"

You can now give a single complex command:

> _"Help do content research for 'Small Business Pricing', then create a blog post, and finally create a presentation deck based on the findings."_

**The Chain Reaction:**

1. **Main Claude** analyzes the request.
2. Delegates to **Content Strategist** (Web search + Research doc).
3. Delegates to **SEO Writer** (Writes blog based on research).
4. Delegates to **Presentation Specialist** (Creates slides based on the blog/research).
5. **Main Claude** presents the final summary.

* * *

## 💡 [[concepts/highlights|Key Takeaways]] & Tips

* **Non-Overlapping Roles:** When designing agents, give them specific, distinct responsibilities to avoid conflict.
* **Don't Copy/Paste:** Let the agents read and write directly to the local file system.
* **Custom Skills are Powerful:** You can code specific brand guidelines into a "skill" so the AI never "hallucinates" the wrong colors or fonts.
* **Data [[concepts/privacy|Privacy]]:** Consumers are wary of AI. Using local LLMs and transparent [[concepts/workflow|workflows]] (as highlighted in the HubSpot report mentioned) helps build trust.

## Related Concepts
- [[concepts/team-lead|Team Lead]] — [Wikipedia](https://en.wikipedia.org/wiki/Team_Lead)
- [[concepts/repository-level-context-files|Context]] — [Wikipedia](https://en.wikipedia.org/wiki/Context)
- [[concepts/files|Files]] — [Wikipedia](https://en.wikipedia.org/wiki/Files)
- [[concepts/website-browsing|Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent)
- [[concepts/customer-service-agent|Chatbot]] — [Wikipedia](https://en.wikipedia.org/wiki/Chatbot)
- AI Team Structure — [Wikipedia](https://en.wikipedia.org/wiki/AI_Team_Structure)
- [[concepts/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- Workspace — [Wikipedia](https://en.wikipedia.org/wiki/Workspace)
- [[concepts/autonomous-ai-agents|Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/Agents)

## Related Entities
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[entities/ai-work-team|AI Work Team]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Work_Team)
- [[entities/agent|Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent)
- Content Strategist — [Wikipedia](https://en.wikipedia.org/wiki/Content_Strategist)
- Presentation Specialist — [Wikipedia](https://en.wikipedia.org/wiki/Presentation_Specialist)
- Data Analyst — [Wikipedia](https://en.wikipedia.org/wiki/Data_Analyst)
- Social Media Specialist — [Wikipedia](https://en.wikipedia.org/wiki/Social_Media_Specialist)
- Business Context — [Wikipedia](https://en.wikipedia.org/wiki/Business_Context)