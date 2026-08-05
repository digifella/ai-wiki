---
wiki-ingested: true
title: "Claude AI /goal Command: Autonomous Workflow Automation & Evaluation"
date: 2026-05-29
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: anthropic-claude
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-05-29 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Claude AI /goal Command: Autonomous Workflow Automation & Evaluation
**Clip title:** [[concepts/claudemd|Claude]] Can Now Work for Hours Without Stopping (/goal [[concepts/scenarios|use cases]])
**Author / channel:** Rick Mulready
**URL:** https://www.youtube.com/watch?v=avzQDFnm68Q

### Summary
This video introduces [[entities/anthropic-institute|Anthropic]]'s new `/goal` command within [[concepts/ai-assisted-coding|Claude Code]], a feature designed to significantly enhance the [[concepts/automation|automation]] capabilities of [[concepts/anthropic-ai|Claude AI]]. Traditionally, [[concepts/large-language-model-llm|large language models]] like Claude require constant user intervention (e.g., typing "continue" or "yes, I accept") for multi-step or extensive tasks, leading to inefficient "babysitting" of the AI. The `/goal` command aims to resolve this by allowing users to define an explicit "done" state, enabling Claude to work autonomously for extended periods, potentially for hours, without human oversight.

The core [[concepts/innovation|innovation]] of the `/goal` command lies in its two-[[concepts/architecturetechnique|model architecture]]: a "Worker" model ([[concepts/opus|Opus]] or Sonnet) that performs the actual tasks like reading [[concepts/files|files]], creating spreadsheets, or generating content, and a smaller, faster "Evaluator" model (Haiku). After each "turn" or step performed by the Worker, the Evaluator checks whether the predefined "goal" has been met. If not, the Worker continues; if yes, the process stops. While this dual-model approach incurs costs, the Evaluator model is designed to be very cheap, making its frequent checks negligible in comparison to the Worker's task execution. Access to this feature requires a Claude Pro or Max subscription and is integrated into Claude Code, available via [[entities/vs-code|VS Code]] or a [[concepts/desktop-application|desktop application]].

A critical takeaway from the video is the importance of crafting clear and measurable "goal conditions" to prevent excessive costs and ensure successful task completion. Vague [[concepts/instructions|instructions]] like "make everything organized" will cause the Evaluator to continuously prompt the Worker without a clear stopping point, potentially leading to hundreds of dollars in wasted [[concepts/tokens|tokens]]. To avoid this, a good goal condition must include three ingredients: a **measurable end state** (concrete and verifiable, e.g., "10/10 files processed"), a **stated check** (how Claude proves completion, e.g., "list every created file and confirm it matches the source"), and **constraints** (what must *not* change, e.g., "do not modify files outside the output folder"). Additionally, users are advised to always set a "safety cap" (e.g., "stop after 20-30 turns") and monitor progress using the `/goal` status command.

The video demonstrates two practical business use cases: automated content repurposing and automated company research. For content, Claude successfully transformed six newsletters into 24 distinct pieces of social media content (LinkedIn posts, Instagram scripts, summaries) in minutes. For research, it generated ten one-page company briefs (including company overview, size, tech, pain points, and suggested outreach angles) from a simple list, also in minutes, by conducting web research. These examples highlight the immense potential for efficiency gains. The presenter strongly recommends starting with small tasks to build [[concepts/trust|trust]] and familiarity with the system before [[concepts/computational-scaling|scaling]] up, emphasizing that understanding the [[concepts/security|security]] implications of auto-approve mode is paramount for a truly hands-off [[concepts/experience|experience]].

### Video Description & Links
#### Description
Get the Claude Code "/goal" Prompts/Conditions from today's video here: https://divine-tree-2358.kit.com/1b098d2900
Full AI team + unlimited support: https://www.skool.com/ai-playbook/about

If you've used Claude for any real work, you know the drill. You hand it a project. It does the first piece, maybe the second piece, and then it stops. Hands control back to you. And you're sitting there typing "continue" over and over for the next hour.

Well, Anthropic just released a new feature inside Claude Code that completely fixes this. It's called /goal, and it lets Claude work for hours without you touching anything.

But here's the thing. If you set it up wrong, it can burn through serious money.

So in today's video, I'm going to:
- Break down exactly what /goal is
- Why it's fundamentally different from anything you've been doing with Claude before
- How to set it up so it doesn't blow up your [[concepts/wallet|wallet]]
- Walk you through two real use cases that apply directly to your business

By the end, you'll know how to hand Claude a project, walk away from your computer, and come back to it done.

My Tools 💻
- Hyperagent (platform for building and deploying [[concepts/action-oriented-ai|autonomous AI agents]]) Get $1K in free credits: https://hyperagent.com/refer/LE9M7G56 

- [[concepts/tone|Voice]] to Text: https://wisprflow.ai/r?WISPR10125

- AI Workflows & [[concepts/automations|Automations]]: Relay.app https://rickmulready.com/relay
(these are affiliate links so I'm compensated with free credits if you sign up through my links. Thanks, in advance.)

TIMESTAMPS:
0:00–1:06: The Painful Truth About Claude’s “Continue” Problem
1:06–3:07: Meet /goal: Claude’s Self‑Driving Mode
3:07–5:06: How /goal Actually Works (Without Draining Your Wallet)
5:06–8:21: The #1 Mistake That Burns $200 Claude Sessions
8:21–10:59: Use Case 1: Turning 6 Newsletters Into 24 Posts on Autopilot
10:59–13:55: Use Case 2: Research 10 Dream Clients While You Grab Coffee
13:55–15:26: 3 Safety Rules Before You Ever Walk Away From /goal

#### Tags
`Claude`, `Claude agents`, `Claude Goal`

#### URLs
- https://divine-tree-2358.kit.com/1b098d2900
- https://www.skool.com/ai-playbook/about
- https://hyperagent.com/refer/LE9M7G56
- https://wisprflow.ai/r?WISPR10125
- https://rickmulready.com/relay

## Related Concepts
- [[concepts/autonomous-workflow-automation|Autonomous Workflow Automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_Workflow_Automation)
- [[concepts/goal-based-command|Goal-Based Command]] — [Wikipedia](https://en.wikipedia.org/wiki/Goal-Based_Command)
- [[concepts/continuous-task-execution|Continuous Task Execution]] — [Wikipedia](https://en.wikipedia.org/wiki/Continuous_Task_Execution)
- [[concepts/efficient-task-processing|Efficient Task Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Efficient_Task_Processing)
- Two-Model Architecture — [Wikipedia](https://en.wikipedia.org/wiki/Two-Model_Architecture)
- Worker Model — [Wikipedia](https://en.wikipedia.org/wiki/Worker_Model)
- Evaluator Model — [Wikipedia](https://en.wikipedia.org/wiki/Evaluator_Model)
- Measurable End State — [Wikipedia](https://en.wikipedia.org/wiki/Measurable_End_State)
- Goal Conditions — [Wikipedia](https://en.wikipedia.org/wiki/Goal_Conditions)
- Safety Cap — [Wikipedia](https://en.wikipedia.org/wiki/Safety_Cap)
- Token [[concepts/cost-optimization|Cost Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Token_Cost_Optimization)
- Hands-Off AI Operation — [Wikipedia](https://en.wikipedia.org/wiki/Hands-Off_AI_Operation)
- [[concepts/content-creation|Content Repurposing]] — [Wikipedia](https://en.wikipedia.org/wiki/Content_Repurposing)
- Automated Company Research — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Company_Research)
- [[concepts/claude-code|Claude Code Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code_Integration)

## Related Entities
- [[entities/rick-mulready|Rick Mulready]] — [Wikipedia](https://en.wikipedia.org/wiki/Rick_Mulready)
- [[entities/claude-ai|Claude AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_AI)
- [[entities/anthropic|Anthropic]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[entities/opus|Opus]] — [Wikipedia](https://en.wikipedia.org/wiki/Opus)
- Sonnet — [Wikipedia](https://en.wikipedia.org/wiki/Sonnet)
- Haiku — [Wikipedia](https://en.wikipedia.org/wiki/Haiku)
- [[entities/claude-pro|Claude Pro]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Pro)
- Claude Max — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Max)
- [[entities/vs-code|VS Code]] — [Wikipedia](https://en.wikipedia.org/wiki/VS_Code)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- AI Playbook — [Wikipedia](https://en.wikipedia.org/wiki/AI_Playbook)