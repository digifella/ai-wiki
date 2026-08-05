---
wiki-ingested: true
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=73h5Lb_N9r8>
The video provides an overview of Amazon's new [[concepts/ai-code-editor|AI code editor]], Kiro, analyzing its features, strategic intent, and positioning within the broader AI code editor market.
Here's a detailed summary:

1. **Kiro's Identity and Market Positioning:**
	Kiro is a fork of VS Code, similar to Cursor and Wind Surf, which are also VS Code forks. VS Code forks typically incur significant engineering overhead to stay updated with [[entities/microsoft|Microsoft]]'s releases. Amazon, with its resources, is well-equipped to handle this. The video categorizes AI code editors into: **Cloud-based:** [[entities/codex|Codex]] **Web-based:** v0, Lovable, Bolt **[[concepts/plugins|Extensions]]:** Cline, Roo **Native Apps:** Cursor, Wind Surf, Kiro **Terminals:** Aider, [[concepts/claude-code|Claude-code]], Codex CLI Kiro fits into the **native app** category.
	
2. **The "Why Kiro?" Question:**
	Kiro's release in late 2025 (or shortly after other tools emerged in 2024-2025) is seen as somewhat late to a crowded market, especially given its currently basic features compared to competitors like Cursor, Cline, Roo, Wind Surf, Aider, Claude-Code, and Codex.
	
3. **Kiro's Key Differentiating Features:**
	**Spec (Opinionated Prompt Interpretation):** Unlike other tools that might directly generate code from a prompt, Kiro first interprets the user's prompt ("I want to add a new feature") into structured components called "Spec." This "Spec" is then broken down into three [[concepts/markdown|markdown]] [[concepts/files|files]]: `requirement.md`, `design.md`, and `task.md`. Kiro works _with the user_ to refine and build out these documents before proceeding to actual [[concepts/code-generation|code generation]]. This approach is highlighted as "opinionated," which can introduce a [[concepts/learning|learning]] curve and potential "point of contention" for users. **Steering (Project Documentation Repository):** Steering acts as a repository for documents that describe the project's various aspects, such as product [[concepts/computer-vision|vision]], [[concepts/tech-stack|tech stack]], and code base structure. Kiro leverages these steering documents to gain a deeper understanding of the codebase and project context. The [[entities/speaker|speaker]] [[concepts/notes|notes]] that other AI code editors typically refer to similar functionalities as "rules" or "custom rules." **[[concepts/hooks|Hooks]] (Event-Driven [[concepts/workflow|Workflows]]):** Hooks are akin to webhooks in APIs. An event within the Kiro IDE (e.g., creating a new file) can trigger a predefined workflow. For example, a hook could automate updating a `README.md` file when a new file is created.
	
4. **Kiro's Strategic Vision: Vertically Integrated SDLC:**
	The combination of Spec, Steering, and Hooks suggests Kiro aims for a much larger scope in the [[concepts/app-creation|Software Development]] Life Cycle (SDLC). Instead of just being a "transactional" task-completion tool (like some other agents), Kiro wants to be involved from analysis and [[concepts/design|design]] through implementation, [[concepts/testing|testing]], and deployment, becoming more "vertically integrated" across the entire development process.
	
5. **Concerns: Proprietary Nature and Trust:**
	The speaker raises a critical point about Kiro being proprietary software. This lack of transparency means users have "minimal visibility" into how Kiro handles crucial underlying mechanisms like token usage, [[concepts/context-management|context management]], and product latency. If Kiro performs slowly, it's difficult for users to determine the root cause (e.g., bloated context, poorly engineered [[concepts/system-prompts|system prompts]], or slow LLM API connections). While not advocating for _all_ tools to be [[concepts/open-source|open-source]], the speaker emphasizes that Kiro needs to "establish trust by [[concepts/writing|writing]] some solid code." Without this, it [[entities/will|will]] face "[[concepts/friction|friction]] in product [[concepts/adoption|adoption]]," especially once Amazon announces its pricing.
	
6. **Broader Industry Implications:**
	Kiro's release, despite being seemingly late, indicates that the AI Code Editor industry remains "lucrative and competitive." The industry has two main markets: **Primary Market:** Companies like [[entities/google|Google]], [[entities/anthropic|Anthropic]], [[entities/openai|OpenAI]], and [[concepts/xai|xAI]] focus on innovating State-of-the-Art (SOTA) models. **Secondary Market:** Companies like Perplexity, Cline, [[entities/chatgpt|ChatGPT]], v0, and now Kiro, are gaining capital by "encapsulating" these SOTA models into specialized agents to solve domain-specific problems. This indicates there's still a "lot of runway" and a "big" market size, with various mediums for [[concepts/coding|coding]] agents (terminal, cloud, on-prem, extensions, hybrid). Kiro's success will depend on its ability to prove its opinionated approach to [[concepts/ai-integration|AI integration]] in coding and establish itself amidst fierce competition.

## Related Concepts
- [[concepts/cloud-based-ai|Cloud-based AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Cloud-based_AI)
- [[concepts/native-app|Native App]] — [Wikipedia](https://en.wikipedia.org/wiki/Native_App)
- [[concepts/vs-code-fork|Fork]] — [Wikipedia](https://en.wikipedia.org/wiki/Fork)
- [[concepts/fork-engineering-overhead|Engineering Overhead]] — [Wikipedia](https://en.wikipedia.org/wiki/Engineering_Overhead)
- [[concepts/codex|Codex]] — [Wikipedia](https://en.wikipedia.org/wiki/Codex)
- Spec (Opinionated Prompt Interpretation) — [Wikipedia](https://en.wikipedia.org/wiki/Spec_%28Opinionated_Prompt_Interpretation%29)
- Steering (Project Documentation Repository) — [Wikipedia](https://en.wikipedia.org/wiki/Steering_%28Project_Documentation_Repository%29)
- [[concepts/hooks|Hooks]] (Event-Driven [[concepts/workflow|Workflows]]) — [Wikipedia](https://en.wikipedia.org/wiki/Hooks_%28Event-Driven_Workflows%29)

## Related Entities
- [[entities/amazon|Amazon]] — [Wikipedia](https://en.wikipedia.org/wiki/Amazon)
- [[entities/kiro|Kiro]] — [Wikipedia](https://en.wikipedia.org/wiki/Kiro)
- [[entities/vs-code|VS Code]] — [Wikipedia](https://en.wikipedia.org/wiki/VS_Code)
- [[entities/cursor|Cursor]] — [Wikipedia](https://en.wikipedia.org/wiki/Cursor)
- [[entities/wind-surf|Wind Surf]] — [Wikipedia](https://en.wikipedia.org/wiki/Wind_Surf)
- [[entities/bolt|Bolt]] — [Wikipedia](https://en.wikipedia.org/wiki/Bolt)
- [[entities/cline|Cline]] — [Wikipedia](https://en.wikipedia.org/wiki/Cline)
- [[entities/roo|Roo]] — [Wikipedia](https://en.wikipedia.org/wiki/Roo)