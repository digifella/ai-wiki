---
wiki-ingested: true
domain: ai-agents
group: coding-agents-dev-workflows
---
<https://www.youtube.com/watch?v=fD8NLPU0WYU>
This video introduces the [[concepts/bmad-method|BMAD method]], a universal [[concepts/ai-agent-framework|AI agent framework]] for Agile AI-driven development. It [[concepts/highlights|highlights]] how AI has enabled many to create websites and apps, but often with a lack of proper [[concepts/app-creation|software development]] process, leading to non-production-ready software.
**The Evolution of [[concepts/ai-coding|AI Coding]]:** The video shows the progression from simple coding to sophisticated [[concepts/external-knowledge-integration|context engineering]], using tools like [[entities/cursor|Cursor]] and [[entities/claude-code|Claude Code]]. The BMAD method aims to streamline this process by integrating an entire software development team within your IDE.
**Background of the BMAD Method:** The BMAD method, created by BMAD Code, is a "Breakthrough Method for Agile AI-Driven Development." It's inspired by a previous framework shown in the AI [[entities/labs|Labs]] [[entities/youtube|YouTube]] channel that used command files and personas for Claude Code. The key difference is that the BMAD method follows a proper Agile software development workflow, [[concepts/task-decomposition|breaking down tasks]] into smaller chunks, testing them, and shipping incrementally. It also comes with solid user documentation, which was a lacking feature in previous frameworks.
**Key Features of the BMAD Method:**

* **Orchestrator Agent:** A dedicated agent that guides users through the entire process, coordinates [[concepts/complex-workflows|complex workflows]], transforms into specialized [[concepts/agents|agents]], and accesses a complete [[concepts/knowledge-base|knowledge base]].
* **Cross-IDE Compatibility:** Works across various IDEs, including Cursor, [[entities/windsurf|Windsurf]], and Claude Code, integrating seamlessly into existing setups.
* **Agentic Planning:** Uses dedicated agents (Analyst, PM, Architect) to create detailed Product Requirement Documents (PRDs) and [[concepts/architecture|Architecture]] documents, ensuring comprehensive [[concepts/technical-specs|specifications]].
* **Context-Engineered Development:** The Scrum Master agent refines plans into hyper-detailed development stories, ensuring full context and [[concepts/implementation-details|implementation details]].
* **Universal AI Agent Framework:** Applicable to any domain requiring specialized AI expertise, such as software development, entertainment, creative [[concepts/writing|writing]], and business strategy.

**Workflow Demonstration (using ChatGPT 4o):** The video demonstrates the BMAD method using ChatGPT 4o:

1. **Preparation:** The user uploads the `team-fullstack.txt` file (containing [[concepts/agent-instructions|agent instructions]]) to ChatGPT.
2. **[[concepts/brainstorming|Brainstorming]]:** Using the `*brainstorm` command, the Analyst agent guides the user through defining an iOS productivity app, its features, constraints, and goals.
3. **[[concepts/prd|PRD]] Creation:** The user switches to the Product Manager (`*pm`) agent and uses `*create-doc` to generate a comprehensive PRD step-by-step, including overview, goals, target users, key features, success metrics, non-goals, and exclusions.
4. **Architecture [[concepts/design|Design]]:** The user switches to the Architect (`*architect`) agent and uses `*create-doc architecture` to build out the app's architecture, including system overview, frontend, backend, data architecture, notifications, and background tasks.
5. **Story Creation:** The user switches to the Scrum Master (`*sm`) agent and uses `*create-epic` to break the PRD into epics (e.g., Core Task Management, Enhanced Filtering, Calendar Integration, iOS Integration/Notifications). Each epic is then further broken down into individual stories. The user manually approves stories by changing their status from "Draft" to "Approved."
6. **Development:** The user switches to the Developer (`*dev`) agent and selects a story (e.g., "Story 1.1: Basic Task Creation and Storage") to implement. The agent identifies tasks and subtasks within the story and generates the necessary code (e.g., CoreData model, TaskService, TaskEntryView).
7. **[[concepts/quality-assurance|Quality Assurance]]:** The user switches to the QA Architect (`*qa`) agent and uses `*review` to perform a comprehensive code review, refactoring repetitive code, and checking for implementation correctness. Once approved, the story's status is changed from "Ready for Review" to "Done."

**Installation:** The installation is straightforward. Users need to copy an `npx` command from the [[entities/github|GitHub]] repository (`bmaddcode/BMAD-METHOD`), paste it into their terminal (within their project directory), and follow the prompts to select installation options (e.g., core system, PRD/architecture sharding, desired IDEs like Cursor, Claude Code, Windsurf). This sets up the necessary rule files within the project.
The video concludes by showcasing how to activate an agent (e.g., `pm.mdc`) within Cursor after installation, demonstrating the seamless integration of the BMAD method.

## Related Concepts
- [[concepts/agile-ai-driven-development|Agile AI-driven development]] — [Wikipedia](https://en.wikipedia.org/wiki/Agile_AI-driven_development)
- [[concepts/breakthrough-method-for-agile-ai-driven-development|Breakthrough Method for Agile AI-Driven Development]] — [Wikipedia](https://en.wikipedia.org/wiki/Breakthrough_Method_for_Agile_AI-Driven_Development)
- [[concepts/context-engineering|context engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/context_engineering)
- [[concepts/software-development-team-integration|software development team integration]] — [Wikipedia](https://en.wikipedia.org/wiki/software_development_team_integration)
- [[concepts/ide-integration|IDE integration]] — [Wikipedia](https://en.wikipedia.org/wiki/IDE_integration)
- Orchestrator [[entities/agent|Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Orchestrator_Agent)
- Scrum Master agent — [Wikipedia](https://en.wikipedia.org/wiki/Scrum_Master_agent)
- [[entities/ai-labs|AI Labs]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Labs)
- [[concepts/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[entities/cursor|Cursor]] — [Wikipedia](https://en.wikipedia.org/wiki/Cursor)
- [[entities/windsurf|Windsurf]] — [Wikipedia](https://en.wikipedia.org/wiki/Windsurf)

## Related Entities
- [[entities/bmad-code|BMAD Code]] — [Wikipedia](https://en.wikipedia.org/wiki/BMAD_Code)
- [[entities/ai-labs|AI Labs]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Labs)
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- Curator — [Wikipedia](https://en.wikipedia.org/wiki/Curator)
- PM (Product Manager) — [Wikipedia](https://en.wikipedia.org/wiki/PM_%28Product_Manager%29)
- Architect — [Wikipedia](https://en.wikipedia.org/wiki/Architect)
- Scrum Master — [Wikipedia](https://en.wikipedia.org/wiki/Scrum_Master)
- Developer — [Wikipedia](https://en.wikipedia.org/wiki/Developer)
- QA Architect — [Wikipedia](https://en.wikipedia.org/wiki/QA_Architect)