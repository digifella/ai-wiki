---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
---
<https://www.youtube.com/watch?v=fOxC44g8vig>
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video content.

* * *

# Introducing [[concepts/agent-skills|Agent Skills]] for [[entities/claude-4|Claude]]

**[[entities/speaker|Speaker]]:** Otto **Topic:** A deep dive into the new "Agent Skills" feature, how it functions technically, and how it fits into the broader Claude ecosystem.

## What are Agent Skills?

[[concepts/agents|Agents]] are intelligent, but often lack the specific domain expertise required for real-world work. **Skills** solve this by acting as organized folders that package specific expertise.

* **[[concepts/slms|Definition]]:** Skills are packages of expertise that Claude can automatically invoke when relevant to a task.
* **Portability:** Skills are portable across [[concepts/claude-code|Claude Code]], the API, and Claude.ai.
* **[[concepts/purpose|Purpose]]:** They separate "how to do a specific task" (expertise) from general intelligence.

## How Skills Work (Technical Flow)

Skills utilize a mechanism called **Progressive Disclosure** to handle [[concepts/complex-tasks|complex tasks]] without bloating the [[concepts/context-window|context window]].

1. **Startup:** Only the _name_ and _description_ of installed skills are loaded into the system prompt.
	* _Cost:_ Approximately 30–50 [[concepts/tokens|tokens]] per skill.
2. **Invocation:** When a user prompt matches a skill's description, Claude dynamically loads the full `skill.md` file into the context.
3. **Execution:** If the skill references other [[concepts/files|files]] or scripts, those are progressively loaded and run only as needed.

## The Ecosystem: Skills vs. Other Features

The video distinguishes Skills from other Claude configuration features:

### 1\. Skills vs. `claude.md`

* `**claude.md**`**:** Defines **Project Context**. It lives in the repository and tells Claude about the [[concepts/tech-stack|tech stack]] (e.g., "We use Next.js and Tailwind"), [[concepts/coding|coding]] conventions, and repo [[concepts/structure|structure]].
* **Skills:** Define **Portable Expertise**. They work across _any_ project.
	* _Example:_ A `claude.md` file says "Use Tailwind," while a **[[concepts/design|Design]] Skill** teaches Claude the specific [[concepts/typography|typography]] standards and animation patterns to apply when [[concepts/writing|writing]] that Tailwind code.

### 2\. Skills vs. [[concepts/mcp-servers|MCP Servers]] ([[concepts/model-context-protocol|Model Context Protocol]])

* **MCP Servers:** Provide **Universal [[concepts/integration|Integration]]**. They connect Claude to [[concepts/external-data|external data]] sources ([[entities/github|GitHub]], Linear, Postgres). They fetch the data.
* **Skills:** Provide **[[concepts/methodology|Methodology]]**. They teach Claude _what to do_ with that data.
	* _Example:_ An [[concepts/mcp-server|MCP server]] gives access to a database. A **Database Query Skill** teaches Claude the team's specific query optimization patterns.

### 3\. Skills vs. [[concepts/sub-agents|Sub-Agents]]

* **Sub-Agents:** [[concepts/specialized-ai-assistants|specialized AI assistants]] with **Fixed Roles** (e.g., "Front-end [[entities/developer|Developer]]," "QA Tester"). They have their own [[concepts/context-windows|context windows]] and permissions.
* **Skills:** The **Tools/Knowledge** those agents use.
	* _Example:_ Both a "Developer" sub-agent and a "Reviewer" sub-agent can load the same "[[concepts/accessibility|Accessibility]] Standards" skill to do their respective jobs.

## The Complete Stack

These features are designed to layer together:

1. `**claude.md**`**:** Sets the project foundation.
2. **MCP Servers:** Connect to necessary data.
3. **Sub-Agents:** Provide role [[concepts/specialization|specialization]].
4. **Skills:** Inject the specific expertise required to execute the task intelligently.

## [[concepts/use-cases|Use Cases]]

* **Onboarding:** Helping new hires adhere to team coding standards automatically.
* **[[concepts/secure|Security]]:** Ensuring every Pull Request follows specific security [[concepts/best-practices|best practices]].
* **Standardization:** Sharing data analysis methodologies across different teams.

## Related Concepts
- [[concepts/skill|Skill]] — [Wikipedia](https://en.wikipedia.org/wiki/Skill)
- [[concepts/domain-specific-knowledge|Domain Knowledge]] — [Wikipedia](https://en.wikipedia.org/wiki/Domain_Knowledge)
- [[concepts/agentic-ai|Agency]] — [Wikipedia](https://en.wikipedia.org/wiki/Agency)
- [[concepts/progressive-disclosure|Progressive Disclosure]] — [Wikipedia](https://en.wikipedia.org/wiki/Progressive_Disclosure)

## Related Entities
- [[entities/otto|Otto]] — [Wikipedia](https://en.wikipedia.org/wiki/Otto)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- Claude.ai — [Wikipedia](https://en.wikipedia.org/wiki/Claude.ai)