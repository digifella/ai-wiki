---
wiki-ingested: true
title: "AI Coding Agent Harnesses: Bare Core (Pi) vs. Batteries Included (Claude Code)"
date: 2026-07-19
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: anthropic-claude
type: "source-summary"
aliases:
  - "lab-notes/2026-07-19-AI-Coding-Agent-Harnesses-Bare-Core-Pi-vs.-Batteries-Inc"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## AI Coding Agent Harnesses: Bare Core (Pi) vs. Batteries Included (Claude Code)
**Clip title:** Pi is the [[concepts/ai-assisted-coding|Claude Code]] Killer Nobody Saw Coming...
**Author / channel:** [[entities/philschmid|The AI Automators]]
**URL:** https://www.youtube.com/watch?v=QpceyQQwC_E

### Summary
The video delves into the often-overlooked but critical role of the "[[concepts/smart-coding-agent|coding agent]]" or "harness" that wraps around an AI model, arguing that it significantly impacts the model's performance and utility. Analogizing the AI model to an [[concepts/engine|engine]] and the harness to the rest of the car, the presenter explains that the harness dictates how much of the model's raw power is actually utilized. It's responsible for crucial functions like assembling context, handling tools, running turn-by-turn loops, maintaining history, setting permissions, and recovering from errors. The video highlights that understanding and choosing the right [[concepts/harness-design|harness design]] is paramount, as it can dramatically alter an AI's real-world capabilities.

Two primary, contrasting philosophies for building these harnesses are presented. The first is the "batteries included" approach, exemplified by agents like Claude Code and [[concepts/whisper-transcription|OpenAI]]'s Codex. These come fully equipped with a wide array of features, extensive [[concepts/coding-instructions|system prompts]], bundled tools, and opinionated workflows, making them easy for general users to pick up. However, this convenience often leads to bloat, a lack of [[concepts/opacity|transparency]] ("black box" operation), and a reliance on expensive, [[concepts/frontier-intelligence|frontier models]] to perform optimally. Users have [[concepts/limited-insight|limited insight]] into or control over the internal [[concepts/causes|mechanisms]], which can be a significant drawback for more advanced or specific [[concepts/use-cases|use cases]].

The second [[concepts/philosophy|philosophy]] is the "strip it down" or "bare core" approach, with the Pi coding agent as a prime example. Pi offers a minimal set of seven fundamental tools (read, grep, find, ls, bash, edit, write), focusing on core functionality and maximum transparency. Sessions are stored as readable JSON logs, allowing full traceability and the ability to branch at any point. Critically, Pi allows users to plug in any OpenAI-compatible endpoint, meaning it can easily run with local models, which are often incompatible with the bloated system prompts of "batteries included" agents. Empirical data from benchmarks like terminal-bench 2.1 and research on SWE-agent show that the harness's design choices carry real capability; a well-designed minimal harness can perform as well as, or even better than, more complex bundled agents, and simply adding "more" features or a poorly designed tool can actually degrade performance.

Ultimately, the video concludes that there is no single "best" coding agent for all [[concepts/scenarios|scenarios]]. For most users, especially those less technically inclined, the "batteries included" agents like Claude Code or Codex offer convenience and continuous [[concepts/software-updates|updates]] without the need to "reinvent the wheel." However, for [[concepts/power-users|power users]], dev teams, or enterprise environments requiring precise control, deterministic custom workflows, [[concepts/local-model|local model]] integration, and a willingness to own and manage [[concepts/security|security]] (e.g., via sandboxing), a configurable, bare-bones harness like Pi is more suitable. The key takeaway is to choose a harness based on your specific workflow and needs, acknowledging that the "interface *is* capability" and that focusing on tuning and customizing this layer can significantly enhance the overall effectiveness of your [[concepts/ai-system|AI system]].

### Video Description & Links
#### Description
🔗 Pi
Pi: https://pi.dev/
Package [[concepts/catalog|catalog]]: https://pi.dev/packages?type=extension
Why Mario Zechner built Pi: https://mariozechner.at/posts/2025-11-30-pi-coding-agent/
Earendil acquires Pi (MIT core): https://earendil.com/posts/announcing-pi-and-lefos/

🔗 Research & Benchmarks
SWE-agent (the harness-ablation paper): https://arxiv.org/abs/2405.15793
mini-SWE-agent (minimal harness): https://github.com/SWE-agent/mini-swe-agent
Terminal-Bench 2.1 leaderboard: https://www.tbench.ai/leaderboard/terminal-bench/2.1
[[concepts/swe-bench-verified|SWE-bench]] leaderboard: https://www.swebench.com/index.html

🔗More
Building pi in a World of Slop (Mario Zechner): https://www.youtube.com/watch?v=RjfbvDXpFls

Most people treat the AI model as the whole product. But take the exact same model, wrap a different coding agent around it, and the result can change dramatically. Think of the model as an engine and the harness as everything else in the car - the tools it can reach for, what it's allowed to see, how it runs the loop turn after turn, and how it recovers when something breaks. That's what actually decides how far the raw power gets you.

In this video we break down the two competing philosophies for how a harness gets built. On one side, the batteries-included agents - the likes of Claude Code and Codex - ship with huge bundles of tools, long system prompts and an opinionated way of doing almost everything. 

They're brilliant to pick up, but that convenience has a cost: they get bloated, they're a black box when something goes wrong, and they're generally happiest on expensive frontier models. On the other side is Pi, built by Mario Zechner - a deliberately stripped-down agent: a tiny, inspectable core of a few tools, an [[concepts/agentsmd|AGENTS.md file]] and plain-JSON sessions you can branch, that you point at any OpenAI-compatible endpoint, including a local model on your own machine.

What Pi leaves out is really the point. No MCP, no [[concepts/sub-agents|sub-agents]], no permission prompts, no plan mode - you add those back deliberately, from a catalog of thousands of community packages or by getting Pi to write its own [[concepts/typescript-development|TypeScript]] extensions. And no security either, which is the catch: the moment you run it, sandboxing is on you ([[concepts/docker|Docker]]), because nothing out of the box stops it running destructive [[concepts/commands|commands]].

So which harness should you actually use? For most people - especially anyone less technical - Claude Code and Codex are still the best pick, shipping updates continuously with real safeguards already in place. Pi starts to make sense for power users, dev teams, enterprise setups and anyone running local models, who need the control and are willing to own the sandboxing. There's no universal best coding agent for every model - the only real [[concepts/solution|answer]] is to test the model-and-harness pair on your own work.

00:00 The model isn't the whole product
00:16 Two philosophies
01:11 Same model, different harness
01:39 What is a coding harness?
02:09 What the research shows
03:07 Batteries-included up close
03:46 Pi up close
04:40 What Pi leaves out
05:35 Installing & sandboxing
06:31 The package catalog
07:41 [[concepts/writing|Writing]] your own extensions
08:11 Which harness should you use?
09:25 No universal best

#### URLs
- https://pi.dev/
- https://pi.dev/packages?type=extension
- https://mariozechner.at/posts/2025-11-30-pi-coding-agent/
- https://earendil.com/posts/announcing-pi-and-lefos/
- https://arxiv.org/abs/2405.15793
- https://github.com/SWE-agent/mini-swe-agent
- https://www.tbench.ai/leaderboard/terminal-bench/2.1
- https://www.swebench.com/index.html
- https://www.youtube.com/watch?v=RjfbvDXpFls

## Related Concepts
- [[concepts/specialized-coding-tool|AI coding agent]] — [Wikipedia](https://en.wikipedia.org/wiki/AI-assisted_software_development)
- [[concepts/harness|harness]]
- [[concepts/harness|bare core]]
- [[concepts/harness|batteries included]]
- [[concepts/vllm|model performance]]
- [[concepts/tool-orchestration|tool orchestration]]
- [[concepts/session|session]] traceability
- [[concepts/local-llm-integration|local model integration]]
- [[concepts/system-card|system prompt]] bloat
- [[concepts/native-machine-editing|deterministic workflows]]
- [[concepts/vm-isolation|sandboxing]]
- JSON log [[entities/storage|storage]]

## Related Entities
- [[entities/pi|Pi]] — [Wikipedia](https://en.wikipedia.org/wiki/Pi)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_%28AI%29)
- [[entities/the-ai-automators|The AI Automators]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/openai-codex|OpenAI Codex]]
- Earendil — [Wikipedia](https://en.wikipedia.org/wiki/E%C3%A4rendil_and_Elwing)