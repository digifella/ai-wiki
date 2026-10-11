---
wiki-ingested: true
title: "Tools that developers use. Prompt Engineer channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Tools that developers use. [[entities/prompt-engineer|Prompt Engineer]] channel

---
---
<https://www.youtube.com/watch?v=c0-DV23Bf64>
This video provides a summary and comparison of two recent developer surveys focused on AI tool and [[concepts/tech-stack|tech stack]] [[concepts/adoption|adoption]]:

1. **The Pragmatic Engineer 2025 Survey: What's in your tech stack?**
2. **Artificial Analysis AI Adoption Survey – H1 2025**

Both surveys offer interesting, and sometimes contradictory, insights into current [[concepts/developer-trends|developer trends]].

* * *

**I. Survey Demographics & Scope:**

* **Pragmatic Engineer Survey:** Received ~3,000 responses from tech professionals (2,997 after cleaning). **Roles:** Predominantly Senior/Software Engineers (~1,300), followed by Staff+ Engineers and Engineering Managers/Tech Leads. A smaller percentage were C-level, Directors, or ML/AI/Data [[concepts/science|Science]] roles. **Experience:** Mostly experienced developers with 5+ years of professional experience, with the largest group (24.2%) having 6-10 years. **Primary Focus:** Primarily Backend Development (60.7%), with Frontend/Mobile Development at 16.2%. **Company Size:** Responses distributed across Tiny (1-50 people), Small (51-200), Mid-sized (201-1,000), Large (1,000-10,000), and Huge (10K+ people) companies.
* **Artificial Analysis Survey:** Collected responses from 1,000+ developers, product managers, and executives. **Roles:** Majorly Engineering & Technical roles (450+ respondents). **Company Size:** More inclined towards Large enterprises and Individuals.

* * *

**II. [[concepts/ai-tool-adoption|AI Tool Adoption]] & Popularity:**

* **Overall AI Tool Usage (Pragmatic Engineer):** A significant **85.3%** of respondents mentioned using at least one AI tool. Only 4.3% reported not using [[concepts/ai-tools|AI tools]] (due to reasons like not finding them useful, company policies, or ethical concerns).
* **Most Mentioned AI Tools (Pragmatic Engineer):** **[[entities/github-copilot-agent|GitHub Copilot]]** (surprisingly high, given last year [[entities/chatgpt|ChatGPT]] was more mentioned) **ChatGPT** **Cursor** **Claude** **Gemini** _Note:_ Gemini's usage was lower than expected, appearing somewhat static compared to its [[concepts/model-releases|model releases]].
* **Demand for [[concepts/ai-coding|AI Coding]] Tools (Artificial Analysis):** **GitHub Copilot (53%)** **Cursor (49%)** **[[concepts/claude-code|Claude Code]] (29%)** **Gemini Code Assist (25%)** This shows a very similar trend for the top coding tools across both surveys.
* **Year-over-Year Trends (Pragmatic Engineer, 2024 vs. 2025):** **GitHub Copilot:** Mentions increased (but overall usage is lower than last year's mentions, which the speaker notes is confusing). **ChatGPT:** Significant decrease in mentions. **Cursor & Claude:** Showed an upward trend in mentions. **Gemini & Perplexity:** Appear relatively static or slightly downward. **Zed & [[entities/windsurf|Windsurf]]:** Show an upward trend from a very low base.

* * *

**III. AI Tool Usage by Company Size (Pragmatic Engineer):**

* **GitHub Copilot:** More widely used in medium to huge companies.
* **ChatGPT, Cursor, Claude:** More popular in tiny, small, and medium-sized companies.
* **Gemini:** Usage appears consistently low across all company sizes, leading to the speculation that company size is irrelevant for its adoption. _Hypotheses for Gemini's flat adoption:_ Bundled with [[concepts/google-workspace|Google Workspace]], so users might access it without actively seeking it. Usage could be higher among Android developers (as Android Studio often has specific Google integrations).
* **Vendor Lock-in:** The speaker suggests vendor lock-in might play a critical role in larger enterprises favouring specific tools, while smaller companies are more nimble and experiment with alternatives.

* * *

**IV. General Tech Stack & Tools:**

* **Programming Languages (Pragmatic Engineer):** **Most Used:** [[concepts/typescript|TypeScript]], Python, JavaScript, Java. **Most Loved:** Python (expected, due to AI/ML popularity), TypeScript, Ruby on Rails + Ruby, JavaScript, Java.
* **Most-Loved Tools (excluding AI coding tools, from Pragmatic Engineer):** VS Code JetBrains IDEs (IntelliJ, PyCharm & others) Cursor Linear Neovim & Vim GitHub Copilot ChatGPT Claude Zed Expo Docker Emacs
* **Most-Disliked Tools (Pragmatic Engineer):** JIRA [[entities/microsoft|Microsoft]] Teams Confluence Jenkins Azure AWS Bitbucket Xcode GitHub Actions Windows **Reasons for Dislike:** Slow, Complex/Complicated, Buggy, Bloated, Painful, Annoying, Cumbersome, Expensive, Confusing, Lacks Features.
* **Version Control:** Overall: GitHub (49.6%), GitLab (17.1%), Bitbucket (10.4%). Among those mentioning a Git vendor: GitHub (62.6%), GitLab (22.8%), Bitbucket (14.5%).
* **CI/CD:** GitHub Actions and Jenkins are the top two.
* **Cloud Providers:** AWS (54.7%) leads, followed by Azure (19.6%) and GCP (17.5%).

* * *

**V. Language Model & [[concepts/inference|Inference]] Provider Insights (Artificial Analysis):**

* **Demand for LLM Families:** **OpenAI (GPT/o) (84%)** **[[entities/google-gemini|Google Gemini]] (80%)** **[[entities/anthropic|Anthropic]] Claude (67%)** [[entities/deepseek|DeepSeek]] (53%) [[entities/llama|Meta Llama]] (42%) The average number of LLM families used/considered increased from ~2.8 in 2024 to ~4.7 in 2025, indicating increased diversification.
* **Model Market Share Change (over the past year):** **Google Gemini:** Huge surge from 31% to 80% (+49%). **OpenAI:** Maintained its lead (+1%). **DeepSeek:** Surged (+53%). **Anthropic Claude:** Gained share (+21%). **xAI Grok:** Substantial increase (+31%). **Meta Llama & [[entities/mistral-ai|Mistral]]:** Experienced a fall in demand.
* **Demand for Inference Providers:** First-party APIs from model labs and hyperscalers lead. **OpenAI (80%)** **Google (68%)** **Anthropic (50%)** Groq (42%) - surprisingly high, given its recent emergence. **Azure & Amazon:** Their share fell in inference services, while Groq and Cerebras gained share.

* * *

**VI. Key Takeaways from Artificial Analysis Report:**

1. **AI in Production:** 45% are using AI in production, while an additional 50% are prototyping or exploring uses with AI.
2. **Engineering & R&D:** Is the clear frontrunner use case (66% considering AI for this purpose).
3. **Model Share Shift:** Google, xAI, DeepSeek gain share, while Meta and Mistral lose share.
4. **Diversification of AI Use:** Companies are increasingly diversifying their AI use, with the average number of LLMs used/considered increasing from ~2.8 in 2024 to ~4.7 in 2025.
5. **Build vs. Buy:** 32% favor building, 27% buying, and 25% a hybrid approach for AI solutions.
6. **Openness to Chinese Models:** 55% would be willing to use LLMs from China-based [[entities/ai-labs|AI labs]], if hosted outside of China.

* * *

**Conclusion:** The surveys highlight a dynamic landscape in AI tool and model adoption among developers. GitHub Copilot remains a dominant force for coding assistance, while the broader LLM market sees significant shifts, with Google Gemini experiencing remarkable growth. Companies are diversifying their AI model usage, and there's a growing openness to models from regions like China. The findings also underscore common frustrations with traditional project management and [[concepts/collaboration-tools|collaboration tools]].
