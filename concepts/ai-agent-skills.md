---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "security"
  - "skill-injection"
  - "malware-scanning"
  - "least-privilege"
aliases:
  - "agent capabilities"
  - "agent functions"
  - "tool calls"
summary: AI agent skills are discrete capabilities that require security scanning and least-privilege enforcement to mitigate risks like skill injection and data exfiltration.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-08T20:38:09+00:00" }
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# AI agent skills

**AI [[concepts/agent-skills|agent skills]]** refer to the discrete capabilities, tools, or functions that an [[concepts/ai-agent]] can execute to perform specific tasks within a larger workflow. As agents become more autonomous, the [[concepts/security|security]] and [[concepts/honesty|integrity]] of these individual [[concepts/skills|skills]] become critical [[concepts/cybersecurity-threats|attack vectors]].

## Security Concerns
The modularity of [[concepts/agent-harnesses|agent skills]] introduces risks where malicious code can be embedded within skill definitions or external [[concepts/tool-calls|tool calls]]. Key concerns include:
- **Skill Injection:** Malicious payloads disguised as legitimate skill outputs.
- **Privilege Escalation:** Skills exploiting excessive permissions granted to the agent.
- **Data Exfiltration:** Skills leaking sensitive context during execution.

## Tooling and Scanning
To mitigate risks, specialized scanners are required to inspect the code and behavior of agent skills before deployment.

- **[[entities/nvidia|NVIDIA]] SkillSpector:** An [[concepts/open-source|open-source]] security scanner designed specifically to detect malware and vulnerabilities within [[concepts/ai-assistant|AI agent]] skills. It analyzes skill definitions for hidden threats and unsafe patterns.
  - See detailed analysis: [[lab-notes/2026-09-09-NVIDIA-SkillSpector-Scanning-AI-Agent-Skills-for-Malware|NVIDIA SkillSpector: Scanning AI Agent Skills for Malware and Vulnerabilities]]
  - Reference: [NVIDIA SkillSpector: Scanning AI Agent Skills for Malware and Vulnerabilities](https://www.youtube.com/watch?v=ytpOsXoMigQ)

## Best Practices
- **Least Privilege:** Ensure each skill operates with the minimum necessary permissions.
- **Static Analysis:** Use tools like [[concepts/unsloth-optimization|NVIDIA]] SkillSpector to scan skills for known [[concepts/vulnerability|vulnerability]] signatures.
- **Runtime Monitoring:** Implement sandboxing to isolate skill execution from the core agent environment.
