---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "ai-automation"
  - "ai-agents"
  - "open-source-models"
  - "local-llm"
  - "openai"
  - "n8n"
  - "ollama"
aliases:
  - "AI Automation"
  - "GPT-OSS Automation"
summary: OpenAI's gpt-oss open-source model can be run locally using n8n and Ollama for AI automation.
updated: 2026-05-23
group: ai-foundations-concepts
---
# Ai Automation Agents

[[concepts/ai-automation-workflows|Ai Automation]] Agents are systems designed to automate workflows and tasks by combining [[concepts/large-language-model-llm|large language models]] with [[concepts/automation|automation]] platforms. These [[concepts/agents|agents]] can interpret [[concepts/instructions|instructions]], [[entities/make|make]] decisions, and execute actions across different [[concepts/software|applications]] and services without constant human intervention.

## Local Deployment Options

[[entities/openai|OpenAI]]'s [[concepts/gpt-4|gpt-oss]] represents a significant shift in [[concepts/accessibility|accessibility]], being the first [[concepts/open-source|open-source]] model released by OpenAI since [[entities/gpt-2|GPT-2]]. This model can be run entirely on local [[concepts/hardware|hardware]], eliminating cloud dependency and associated costs while maintaining comparable performance to proprietary alternatives.

Two primary tools enable [[concepts/local-deployment|local deployment]] of AI automation agents. [[entities/ollama|Ollama]] provides the runtime environment for executing [[concepts/large-language-models|large language models]] locally, while [[entities/n8n|n8n]] serves as a visual [[concepts/ai-driven-workflow-automation|workflow automation]] platform that can integrate these models into automated processes. Together, they allow users to build and run AI-powered automation without relying on external APIs or [[concepts/cloud-computing|cloud services]].

This approach offers practical advantages for organizations requiring data [[concepts/privacy|privacy]], [[concepts/ai-conceptscost-optimizationcost-optimization|cost control]], or offline [[concepts/capabilities|capabilities]]. However, [[concepts/local-execution|local execution]] requires sufficient [[concepts/computational-resources|computational resources]] and involves managing model updates and infrastructure maintenance independently.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Tools-Redefine-Design-and-Creative-Workflows-Google-Stitch|AI Tools Redefine Design and Creative Workflows Google Stitch]] · [▶ source](https://www.youtube.com/watch?v=CDClFY-R0dI)
- 2026-04-08: [[lab-notes/2026-04-08-Anthropic-Dispatch-Remote-Desktop-AI-Integration-Claude-and-OpenClaw|Anthropic Dispatch Remote Desktop AI Integration Claude and OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=1_VlT1vhN04)