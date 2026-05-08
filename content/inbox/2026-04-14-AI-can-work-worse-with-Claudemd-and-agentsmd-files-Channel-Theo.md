---
wiki-ingested: true
title: "AI can work worse with Claude.md and agents.md files. Channel Theo"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
# AI can work worse with [[entities/claude|Claude]].md and [[concepts/agentsmd|agents.md]] [[concepts/files|files]]. Channel [[entities/theo|Theo]]

---
---
<https://www.youtube.com/watch?v=GcNu6wrLTJc>

This is a comprehensive [[concepts/summary|summary]] of the video regarding the effectiveness of **[[concepts/agents|AGENTS]].md** and **CLAUDE.md** context files, formatted in [[concepts/markdown|Markdown]].

* * *

# 📜 Study Summary: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful?

A recent empirical study (February 2026) titled **"Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for [[concepts/coding|Coding]] Agents?"** by researchers at [[entities/eth-zurich|ETH Zurich]] challenged the common industry practice of using context files to guide [[concepts/ai-coding-agents|AI coding agents]].

### 📊 Key Research Findings

The study tested [[concepts/models|models]] like **Claude 3.5 Sonnet**, **[[concepts/gpt-52|GPT-5.2]]**, and **[[entities/qwen|Qwen]] 2.5** across two benchmarks ([[concepts/swe-bench-lite|SWE-bench Lite]] and [[concepts/agentbench|AGENTBENCH]]). The results contradicted popular [[entities/developer|developer]] advice:

* **[[concepts/success-rates|Success Rates]]:** LLM-generated context files (like those created via `/init`) actually **decreased** success rates by **0.5–2%**.
* **[[concepts/inference|Inference]] Costs:** Providing these files increased token usage and operational costs by **over 20%**.
* **Human-Written Files:** Manually authored files showed only a **marginal 4% improvement** in success rates, but still resulted in a **19% [[concepts/cost|cost]] increase**.
* **The Redundancy Problem:** Agents are already proficient at exploring codebases. Adding a context file often provides redundant information that distracts the model rather than helping it.

* * *

# 🏗️ The LLM Context [[concepts/hierarchy|Hierarchy]]

To understand why these files often fail, we must look at how [[concepts/instructions|instructions]] are layered when an [[entities/agent|agent]] processes a request. The "hierarchy of precedence" is generally as follows:

1. **Provider Instructions:** Hardcoded safety and behavioral [[concepts/ai-safety|guardrails]] set by [[entities/openai|OpenAI]] or [[entities/anthropic|Anthropic]] (e.g., "Don't help make nukes").
2. **[[concepts/system-prompt|System Prompt]]:** The "Identity" layer (e.g., "You are a world-class [[entities/codex|coding assistant]]").
3. **Developer Prompt (**`**AGENTS.md**` **/** `**CLAUDE.md**`**):** This is where repository-specific rules live.
4. **User Message:** Your specific prompt or task.

**The Priority Conflict:** Instructions higher in the hierarchy often override those below them. However, adding too much "noise" at the Developer Prompt level can lead to the **"Pink Elephant Problem"**: telling a model _not_ to do something (like "don't use legacy patterns") makes the model focus on that pattern more, leading to errors.

* * *

# 🔬 Live Experiment: With vs. Without Context

In a real-world test on a video review project ("Lawn"), the [[entities/speaker|speaker]] compared two identical tasks using **[[concepts/claude-code|Claude Code]]**:

|     |     |     |
| --- | --- | --- |
| Metric | Without `CLAUDE.md` | With `CLAUDE.md` (LLM-Generated) |
| **Execution Time** | **1 minute 11 seconds** | 1 minute 29 seconds |
| **[[concepts/tokens|Tokens]] Used** | Lower | ~20% Higher |
| **Result** | Succesful and concise. | Succesful, but slower and verbose. |

**Conclusion:** The agent performed better when allowed to explore the codebase natively rather than being "steered" by an auto-generated context file.

* * *

# 🛠️ [[concepts/best-practices|Best Practices]] for `AGENTS.md`

If you choose to use these files, follow these "Minimalist" rules:

* **Don't Auto-Generate:** Never use `/init` to let an LLM write your context file. It [[entities/will|will]] fill it with obvious information the model can find itself (like tech stacks or file structures).
* **Focus on "The Invisible":** Only include information that **is not** in the [[concepts/code|code]] (e.g., "We are intentionally using X instead of Y because of a [[concepts/hardware|hardware]] bug").
* **The "Band-Aid" Approach:** Use the file only to fix consistent mistakes. If the agent keeps forgetting to run type-checks, add that specific instruction.
* **The Three-Step Hack:** If an agent fails at Step 2 of a process, tell it to "Perform Step 3." It will often unblock itself on Step 2 in the process of trying to reach the further goal.

* * *

# 🚀 Sponsor Spotlight: [Daytona](https://www.daytona.io/)

The video was supported by **Daytona**, a platform designed to provide [[concepts/secure|secure]], isolated execution environments for AI agents.

* **Secure Sandboxing:** Run [[concepts/ai-generated-code|AI-generated code]] safely without risking your [[concepts/local-infrastructure|local infrastructure]].
* **Multi-OS Support:** Sandboxes available for Linux, [[entities/windows|Windows]], and macOS.
* **[[entities/high-performance|High Performance]]:** Create a sandbox from code to execution in **sub-90ms**.
* **Cost Effective:** Approximately $0.05/hour for [[concepts/compute|compute]] and $0.016/hour for [[concepts/memory|memory]].

* * *

### 💡 Final Takeaway

> "Are you really an [[entities/ai-engineer|AI engineer]] if you haven't put a ton of time into your AGENTS.md?"
> **Actually, yes.** The best AI engineers focus on building better unit tests, type-checks, and clean code [[concepts/architecture|architecture]] rather than massive "rule files" that eventually go out of date and mislead the agent.