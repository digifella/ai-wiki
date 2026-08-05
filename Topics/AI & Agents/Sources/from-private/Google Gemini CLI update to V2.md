---
wiki-ingested: true
domain: ai-agents
group: google-ai-ecosystem
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=un1WZk3ziFc>
This video provides a comprehensive overview of recent updates to Google's [[concepts/open-source|open-source]] [[concepts/gemini-cli|Gemini CLI]], positioning it as a powerful [[concepts/terminal-agent|terminal agent]] for developers.
Here's a detailed summary of the key points:

1. **Gemini CLI Overview:**
	Released approximately one month ago by Google. It's an open-source terminal agent that runs directly within your terminal. Provides free access to the [[entities/gemini-2-5-pro|Gemini 2.5 Pro]] model with a massive [[concepts/1-million-token-context|1 million token context]] window. Offers generous [[concepts/usage-limits|usage limits]]: 60 requests per minute and 1000 requests per day for free.
	
2. **Key New Features & Updates:**
	**Plan-Driven Development:**
	Introduces new `/` [[concepts/commands|commands]] (both custom and predefined) for dedicated planning and implementation modes. **Planning Mode:** Gemini helps break down [[concepts/complex-tasks|complex tasks]] into a structured, step-by-step roadmap. **Implementation Mode:** Gemini follows through with the plan, guiding [[concepts/code-generation|code generation]] and execution. Demonstrates this by having Gemini create a plan for adding a new model selector component, including a "Todo Checklist" and detailed "Codebase Structure" analysis.
	**Custom Slash Commands:**
	Allows users to create reusable [[concepts/prompt-templates|prompt templates]] (e.g., in `.toml` [[concepts/files|files]]) to streamline Gemini CLI's workflow. Commands can include a prompt key, arguments, and [[concepts/terminal-command-execution|shell commands]]. Introduces **Namespacing**, where command names are determined by their file path relative to the `commands` directory (e.g., `/git:review` for `gemini/commands/git/review.toml`), enabling clean and scalable organization. Provides documentation and guides for building custom slash commands.
	**[[concepts/ide-integration|IDE Integration]] ([[entities/vs-code|VS Code]] & Others):**
	Gemini CLI now integrates directly into VS Code (and [[concepts/plugins|extensions]] like `rootcode`, `clion`, `kilocode`, `cursor`). Offers intelligent, context-aware suggestions based on the user's workspace and selected text. Features **native in-editor diffing** to review and apply changes seamlessly within the IDE, providing a comprehensive side-by-side review of modifications. Installation is simple: just run `/ide install` from the integrated terminal in VS Code to connect.
	**Gemini CLI [[entities/github|GitHub]] Actions (Currently in Beta):**
	Acts as a "no-cost, powerful [[concepts/ai-coding|AI coding]] teammate" for GitHub repositories. Functions as an [[entities/openclaw|autonomous agent]] for routine coding tasks and an on-demand collaborator. **Intelligent Issue Triage:** Automates the overhead of managing new issues by analyzing, labeling, and prioritizing incoming issues. **Accelerated Pull Request Reviews:** Provides instant, insightful feedback on code changes, and can review PRs for quality, [[concepts/style|style]], and correctness. **On-Demand Collaboration:** Users can delegate tasks (e.g., [[concepts/writing|writing]] tests, implementing changes, [[concepts/brainstorming|brainstorming]] solutions, fixing bugs) directly by mentioning `@gemini-cli` in any issue or pull request. Gemini CLI can handle these tasks on the user's behalf, providing plans and implementing changes directly in the repository. Setup involves obtaining a [[entities/gemini-api|Gemini API]] key, adding it as a GitHub Secret, and choosing a workflow (or manually copying pre-built [[concepts/workflow|workflows]]).
	
3. **Community & Continuous Development:**
	The video highlights the rapid pace of development, with the Google team and the open-source community constantly contributing. Numerous Pull Requests are merged weekly, adding new features and fixing bugs. Recent notable improvements include: Automatic loop detection for improved stability. Explicit proxy option for corporate environments. Improved authentication flow for non-interactive environments. Enhanced OAuth callback for [[concepts/docker|Docker]] support. Sped up startup time by running model availability checks in the background. Added numbers to selection lists for easier interaction. Improved light theme colors and cleaner UI. Displays diffs for declined code confirmations. Added Vim mode and editor support for Emacs. Added multi-directory workspace support. Significantly improved [[entities/windows|Windows]] stability and test coverage. Introduced `/mk` command for Gemini MD creation. Added support for custom themes and Homebrew installation for macOS users.
	
4. **Installation:**
	Requires Gemini CLI version 0.1.20 or higher. Run `npm i -g @google/gemini-cli` to install globally or use `npx @google/gemini-cli` for instant execution. Homebrew is also an option for macOS/Linux.
	

The video concludes by encouraging viewers to stay updated with Gemini CLI's advancements through their newsletter, Discord, and social media channels.

## Related Concepts
- [[concepts/plan-driven-development|Plan-Driven Development]] — [Wikipedia](https://en.wikipedia.org/wiki/Plan-Driven_Development)
- [[concepts/custom-commands|Custom Commands]] — [Wikipedia](https://en.wikipedia.org/wiki/Custom_Commands)
- [[concepts/planning-mode|Planning Mode]] — [Wikipedia](https://en.wikipedia.org/wiki/Planning_Mode)
- [[concepts/implementation-modes|Implementation Modes]] — [Wikipedia](https://en.wikipedia.org/wiki/Implementation_Modes)

## Related Entities
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/gemini-cli|Gemini CLI]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_CLI)