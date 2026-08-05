---
type: concept
domain: ai-agents
tags:
  - "agentic-engineering"
  - "ai-agents"
  - "autonomous-workflows"
  - "software-engineering"
  - "system-reliability"
  - "tool-use"
  - "autonomous-systems"
  - "software-reliability"
  - "observability"
  - "persistent-computing"
aliases:
  - "Agentic System Design"
  - "Autonomous Workflow Engineering"
  - "Agent Infrastructure"
summary: Agentic Engineering is the discipline of designing and managing systems where agents autonomously or semi-autonomously execute tasks, reason, and interact with environments by bridging software engineering, prompt engine
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Agentic Engineering

**Agentic [[entities/national-academies|Engineering]]** is the discipline of designing, building, and managing systems where [[concepts/ai-agent]] autonomously or semi-autonomously execute tasks, [[concepts/purpose|reason]], and interact with environments or other agents. It bridges [[concepts/software-engineering|software engineering]], [[entities/prompt-engineering]], and systems administration to create robust [[concepts/autonomous-workflows|autonomous workflows]].

## Core Principles
- **Autonomy**: Agents make decisions based on objectives rather than explicit step-by-step [[concepts/instructions|instructions]].
- **[[concepts/acting|Tool Use]]**: Integration with [[concepts/third-party-apis|external APIs]], [[concepts/code-execution|code execution]] environments, and databases.
- **[[concepts/data-persistence|Persistence]]**: Agents must maintain state and context across [[concepts/long-running-sessions|long-running sessions]].
- **Observability**: Monitoring [[concepts/reasoning-steps|agent reasoning]] traces and actions for [[concepts/debugging|debugging]] and safety.

## Infrastructure & Tooling
The [[concepts/software-reliability|reliability]] of [[concepts/agentic-frameworks|agentic systems]] depends heavily on the underlying infrastructure stability and [[concepts/developer-workflow|developer workflow]] tools.

### Session Management & Remote Execution
- [[entities/tmux]] is critical for maintaining [[concepts/persistent-computing|persistent terminal sessions]], allowing long-running agent processes to survive disconnects.
- Offloading [[concepts/compute|compute]] to a [[concepts/vps]] ensures 24/7 availability for agents, decoupling execution from local hardware constraints.
- Key workflows include managing multi-pane layouts for simultaneous monitoring of agent logs and execution environments.
- See [[lab-notes/2026-06-03-Tmux-for-AI-Agent-Development-Persistent-Sessions-and-VP|Tmux for AI Agent Development: Persistent Sessions and VPS Offloading]] for specific configurations and video tutorials.

### Development Environment
- Use of [[concepts/containerization]] (Docker/Podman) to isolate agent dependencies.
- Integration with [[entities/git]] for [[concepts/app-updates|version control]] of agent prompts and codebases.
- Local [[concepts/llm-inference|LLM inference]] for rapid [[concepts/iteration|iteration]] before deploying to cloud [[concepts/open-standard-protocols|APIs]].

## Challenges
- **[[concepts/data-hallucination|Hallucination]] Management**: Ensuring agents do not fabricate tool outputs.
- **[[concepts/security|Security]]**: Preventing unauthorized actions or data exfiltration by agents.
- **Latency**: Optimizing token generation and tool call delays.

## Related Concepts
- [[concepts/ai-agent]]
- [[entities/react|ReAct]] [[concepts/prompting|Prompting]]
- [[concepts/function-calling]]
- [[concepts/multi-agent-systems]]
