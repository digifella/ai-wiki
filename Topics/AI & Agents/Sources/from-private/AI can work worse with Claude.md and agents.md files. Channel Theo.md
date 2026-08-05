---
wiki-ingested: true
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=GcNu6wrLTJc>

This is a comprehensive summary of the video regarding the effectiveness of **[[concepts/agentsmd|AGENTS.md]]** and **[[entities/claude-4|CLAUDE]].md** context files, formatted in [[concepts/markdown|Markdown]].

* * *

# 📜 Study Summary: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful?

A recent empirical study (February [[concepts/date-2026-04-13|2026]]) titled **"Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for [[concepts/coding|Coding]] Agents?"** by researchers at ETH Zurich challenged the common industry practice of using context files to guide [[concepts/ai-coding|AI coding]] agents.

### 📊 Key Research Findings

The study tested models like **Claude 3.5 Sonnet**, **[[concepts/gpt-5|GPT-5]].2**, and **[[entities/qwen|Qwen]] 2.5** across two benchmarks ([[concepts/SWE-bench|SWE-bench]] Lite and [[concepts/agentbench|AGENTBENCH]]). The results contradicted popular developer advice:

* **Success Rates:** LLM-generated context files (like those created via `/init`) actually **decreased** success rates by **0.5–2%**.
* **[[concepts/inference|Inference]] Costs:** Providing these files increased token usage and operational costs by **over 20%**.
* **Human-Written Files:** Manually authored files showed only a **marginal 4% improvement** in success rates, but still resulted in a **19% cost increase**.
* **The Redundancy Problem:** Agents are already proficient at exploring codebases. Adding a context file often provides redundant information that distracts the model rather than helping it.

* * *

# 🏗️ The LLM Context [[concepts/hierarchy|Hierarchy]]

To understand why these files often fail, we must look at how instructions are layered when an [[entities/agent|agent]] processes a request. The "hierarchy of precedence" is generally as follows:

1. **Provider Instructions:** Hardcoded safety and behavioral [[concepts/ai-safety|guardrails]] set by [[entities/openai|OpenAI]] or [[entities/anthropic|Anthropic]] (e.g., "Don't help make nukes").
2. **System Prompt:** The "Identity" layer (e.g., "You are a world-class coding assistant").
3. **Developer Prompt (**`**AGENTS.md**` **/** `**CLAUDE.md**`**):** This is where repository-specific rules live.
4. **User Message:** Your specific prompt or task.

**The Priority Conflict:** Instructions higher in the hierarchy often override those below them. However, adding too much "noise" at the Developer Prompt level can lead to the **"Pink Elephant Problem"**: telling a model _not_ to do something (like "don't use legacy patterns") makes the model focus on that pattern more, leading to errors.

* * *

# 🔬 Live Experiment: With vs. Without Context

In a real-world test on a video review project ("Lawn"), the speaker compared two identical tasks using **[[concepts/claude-code|Claude Code]]**:

|     |     |     |
| --- | --- | --- |
| Metric | Without `CLAUDE.md` | With `CLAUDE.md` (LLM-Generated) |
| **Execution Time** | **1 minute 11 seconds** | 1 minute 29 seconds |
| **Tokens Used** | Lower | ~20% Higher |
| **Result** | Succesful and concise. | Succesful, but slower and verbose. |

**Conclusion:** The agent performed better when allowed to explore the codebase natively rather than being "steered" by an auto-generated context file.

* * *

# 🛠️ [[concepts/best-practices|Best Practices]] for `AGENTS.md`

If you choose to use these files, follow these "Minimalist" rules:

* **Don't Auto-Generate:** Never use `/init` to let an LLM write your context file. It [[entities/will|will]] fill it with obvious information the model can find itself (like tech stacks or file structures).
* **Focus on "The Invisible":** Only include information that **is not** in the code (e.g., "We are intentionally using X instead of Y because of a [[concepts/hardware|hardware]] bug").
* **The "Band-Aid" Approach:** Use the file only to fix consistent mistakes. If the agent keeps forgetting to run type-checks, add that specific instruction.
* **The Three-Step Hack:** If an agent fails at Step 2 of a process, tell it to "Perform Step 3." It will often unblock itself on Step 2 in the process of trying to reach the further goal.

* * *

# 🚀 Sponsor Spotlight: [Daytona](https://www.daytona.io/)

The video was supported by **Daytona**, a platform designed to provide [[concepts/secure|secure]], isolated execution environments for AI agents.

* **Secure Sandboxing:** Run [[concepts/ai-generated-code|AI-generated code]] safely without risking your [[concepts/local-infrastructure|local infrastructure]].
* **Multi-OS Support:** Sandboxes available for Linux, [[entities/windows|Windows]], and macOS.
* **[[entities/high-performance|High Performance]]:** Create a sandbox from code to execution in **sub-90ms**.
* **Cost Effective:** Approximately $0.05/hour for compute and $0.016/hour for [[concepts/memory|memory]].

* * *

### 💡 Final Takeaway

> "Are you really an [[entities/ai-engineer|AI engineer]] if you haven't put a ton of time into your AGENTS.md?"
> **Actually, yes.** The best AI engineers focus on building better unit tests, type-checks, and clean code [[concepts/architecture|architecture]] rather than massive "rule files" that eventually go out of date and mislead the agent.

## Related Concepts
- [[concepts/swe-bench-lite|Context Files]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Files)
- [[concepts/ai-coding-agents|AI Coding Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Coding_Agents)
- [[concepts/success-rates|Success Rates]] — [Wikipedia](https://en.wikipedia.org/wiki/Success_Rates)
- [[concepts/llm|LLM]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM)
- [[concepts/large-language-model-llm|LLM (Large Language Model)]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_%28Large_Language_Model%29)

## Related Entities
- [[entities/eth-zurich|ETH Zurich]] — [Wikipedia](https://en.wikipedia.org/wiki/ETH_Zurich)
- [[entities/claude-35-sonnet|Claude 3.5 Sonnet]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_3.5_Sonnet)
- [[entities/gpt-52|GPT-5.2]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-5.2)
- [[entities/qwen-25|Qwen 2.5]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_2.5)