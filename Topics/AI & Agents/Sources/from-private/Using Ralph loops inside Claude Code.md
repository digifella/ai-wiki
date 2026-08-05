---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=9Gv7eZemHrE>
AICodeKing (annoying generated voice)

Here is a detailed breakdown of the **[[concepts/ralph-wiggum-plugin|Ralph Wiggum Plugin]]** for [[concepts/claude-code|Claude Code]], as presented in the video.

# The Ralph Wiggum Plugin for Claude Code

### **Overview**

The Ralph Wiggum plugin is a new tool designed to combat "AI Laziness" in [[concepts/agentic-coding-tools|agentic coding tools]] like Claude Code. Named after the persistent _Simpsons_ [[concepts/integrity|character]], the plugin changes Claude Code from a tool that tries once and gives up, into a [[concepts/loop|loop]] that persistently iterates until a specific goal is objectively met.

* * *

### **The Problem: AI Laziness**

Users of agentic tools often encounter a specific barrier where the AI:

* **Quits Early:** It writes a few [[concepts/files|files]] but ignores complex details like database schemas or auth.
* **Hallucinates Success:** It claims to be done to save [[concepts/tokens|tokens]] or because it believes it has finished.
* **Requires Hand-holding:** The user spends 20+ minutes [[concepts/prompting|prompting]] the AI to fix errors it should have caught (e.g., "You forgot the tests," "The build failed").

### **The [[concepts/solution|Solution]]: "Ralph is a Bash Loop"**

The plugin forces a **persistent [[concepts/iteration|iteration]]** [[concepts/philosophy|philosophy]]. Instead of hoping the AI behaves, the plugin uses code to force the AI to stay in the [[concepts/session|session]] until the job is actually done.

### **How It Works: The Stop Hook**

The plugin utilizes a Claude Code feature called **[[concepts/hooks|Hooks]]** (user-defined [[concepts/terminal-command-execution|shell commands]] executed at specific lifecycle points). Specifically, it uses a **Stop Hook**:

1. **Intercept:** When Claude tries to end the session/exit.
2. **Verify:** The hook scans the final output for a user-defined "Completion Promise" (e.g., the word `"COMPLETE"`).
3. **Block:** If the safe word is missing, the exit is blocked.
4. **Loop:** The system feeds the original prompt back into Claude.
5. **Self-Correction:** Claude reads the previous error (e.g., failed tests), realizes the task isn't done, and attempts to fix the code.

This creates a **Self-Referential [[concepts/feedback|Feedback]] Loop** where the AI debugs its own work without human intervention.

* * *

### **Usage & Commands**

To use the plugin, you must [[concepts/structure|structure]] your prompt to define "Done."
**The Command Structure:**
```
/ralph-wiggum:ralph-loop "YOUR PROMPT HERE" --completion-promise "COMPLETE" --max-iterations 20


```
**Key Flags:**

* `--completion-promise "STRING"`: The specific string the AI must output to be allowed to exit.
* `--max-iterations N`: A safety net to prevent infinite [[concepts/loops|loops]] (and infinite costs) if the task is impossible.

**Example Scenario:**

> **Prompt:** "Build a Movie Tracker with NextJS. Write a test suite. Run the tests. If tests fail, fix the code. Do not stop until all tests pass." **Outcome:** If Claude writes a test expecting a blue button but codes a red one, the test fails. Claude tries to exit. Ralph blocks it. Claude sees the failure, modifies the component, re-runs the test, succeeds, outputs "COMPLETE", and exits.

* * *

### **Strategic Requirements**

### **1\. The Model: [[concepts/claude-opus-45|Claude Opus 4.5]]**

The video strongly recommends using **Claude Opus 4.5** with this plugin.

* **Why:** Lower-tier models (Haiku/Flash) lack the [[concepts/reasoning|reasoning]] capabilities to unstuck themselves. They [[entities/will|will]] likely enter an infinite loop of making the same mistake repeatedly. Opus 4.5 has the reasoning to analyze _why_ it failed and try a new approach.
* **The Cost:** Opus 4.5 is expensive (~$25 per million output tokens). However, the trade-off is waking up to a fully completed, bug-free codebase.

### **2\. [[concepts/prompt-engineering|Prompt Engineering]] Changes**

You must change how you prompt the AI:

* **Avoid Subjectivity:** Do not ask to "make it good" or "make it pretty." The computer cannot verify "pretty," so it will just exit immediately.
* **Use Binary Success Criteria:** Base your completion promise on things the computer can verify automatically.
	* _Good:_ "Do not stop until `npm test` passes."
	* _Good:_ "Do not stop until the linter returns no errors."
	* _Good:_ "Do not stop until test coverage is >80%."

* * *

### **[[concepts/use-cases|Use Cases]]**

The Ralph Wiggum plugin is best suited for "Brute Force" coding tasks that require intelligence and [[concepts/persistence|persistence]], such as:

* **Refactoring Legacy Code:** "Write unit tests for this old project until coverage is 80%."
* **Greenfield Projects:** "Build a full stack app with these specific requirements."
* **Complex [[concepts/debugging|Debugging]]:** Tasks where you want to shift the burden of management from yourself to the script.

## Related Concepts
- [[concepts/ai-laziness|AI Laziness]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Laziness)
- [[concepts/agentic-ai|Agentic Coding]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Coding)
- [[concepts/persistent-iteration|Persistent Iteration]] — [Wikipedia](https://en.wikipedia.org/wiki/Persistent_Iteration)

## Related Entities
- [[entities/ralph-wiggum|Ralph Wiggum]] — [Wikipedia](https://en.wikipedia.org/wiki/Ralph_Wiggum)