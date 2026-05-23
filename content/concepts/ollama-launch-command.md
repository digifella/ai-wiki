---
type: concept
domain: ai-agents
summary: Ollama provides commands to run models interactively and manage the backend server, now featuring Anthropic API compatibility to enable local execution of Claude Code.
updated: 2026-05-23
group: open-systems-local-models
---
# ollama launch command

The primary command to launch a model and enter an interactive [[concepts/session|session]] is `[[entities/ollama|ollama]] run <model_name>`. To launch the backend server/daemon, use `ollama serve`.

## Key Updates & Capabilities
- **[[concepts/anthropic-api-compatibility|Anthropic API Compatibility]]**: [[entities/ollama]] now supports the [[entities/anthropic-institute|Anthropic]] API specification, allowing local [[concepts/models|models]] to interface with tools designed for [[entities/claude]].
- **Local [[concepts/claude-code|Claude Code]] Execution**: Enables [[concepts/running|running]] [[entities/claude-code]] locally by routing Anthropic-formatted requests to a local [[entities/ollama]] instance.
- **Model [[concepts/adoption|Implementation]]**: Demonstrates successful compatibility using [[entities/glm-47-flash|GLM-4.7-Flash]] (a 30B parameter [[entities/mixture-of-experts|Mixture-of-Experts]] model with 3B active [[concepts/parameters|parameters]]).

## Related Concepts
- [[entities/claude-code]]
- [[entities/anthropic|Anthropic]] API
- [[entities/glm-47-flash|GLM-4.7-Flash]]
- LLM API Compatibility

## Sources
- [[concepts/date-2026-04-13|2026]] 04 14 [[concepts/task-specific-modeling|Ollama]] [[concepts/claude-ai|Claude]] [[entities/glm|GLM]] Channel [[entities/sam-witteveen|Sam Witteveen]]
## Source Notes

- 2026-04-23: <https://www.youtube.com/watch?v=NA5U06WuO34> Here is a [[concepts/markdown|Markdown]] summary and guide based on the video content. # [[concepts/free-api-access|Running Claude Code Locally]] with Ollama and [[entities/glm-47-flash|GLM-4.7-Flash]] This guide covers how to use the new Anthropic API compatibility in Ollama to run **[[concepts/ai-assisted-coding|Claude Code]]** locally usi ([[concepts/free-api-access|Running Claude Code Locally]] with Ollama and GLM-4.7-Flash)