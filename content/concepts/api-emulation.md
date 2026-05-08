---
type: concept
domain: tools-platforms
tags:
  - "api-emulation"
  - "ollama"
  - "anthropic-api"
  - "llm-orchestration"
  - "local-llm"
updated: 2026-04-23
group: apis-integrations-mcp
---
# API Emulation

The process of mimicking the request/response [[concepts/structure|structure]], endpoints, and interface behavior of a specific API (e.g., [[entities/anthropic|Anthropic]] API) to allow [[concepts/software|software]] designed for one provider to function with alternative or local models.

## Core Applications & Implementation

- **[[concepts/local-llm]] Interoperability**: Enables specialized agentic tools built for cloud ecosystems to be redirected to [[concepts/local-inference|local inference]] engines.
- **[[entities/ollama]] [[entities/anthropic-institute|Anthropic]] Compatibility**:
    - Implements an [[concepts/anthropic-api-compatibility|Anthropic API compatibility]] layer within [[entities/ollama]].
    - Allows the execution of [[entities/claude-code]] using locally hosted models.
    - Enables [[entities/high-performance|high-performance]] models like [[entities/glm-47-flash|GLM-4.7-Flash]] (30B MoE) to serve as drop-in replacements for [[entities/claude-4|Claude]].
- **Infrastructure [[concepts/abstraction|Abstraction]]**: Facilitates the use of specialized software [[concepts/agentic-ai|agents]] without requiring modifications to the tool's underlying API calling logic.

## Related Concepts
- [[entities/anthropic|Anthropic]] API
- [[entities/claude-code]]
- [[entities/glm-47-flash|GLM-4.7-Flash]]
- [[entities/ollama]]
- [[concepts/llm-orchestration|LLM Orchestration]]

---
**Backlink**: 2026 04 14 [[entities/ollama|Ollama]] [[concepts/claude-ai|Claude]] GLM Channel [[entities/sam-witteveen|Sam Witteveen]]

## Source Notes
- 2026-04-18: [[lab-notes/2026-04-18-Adobe-Camera-Raw-183-Depth-Masking-Lens-Correction-Film-Presets-Overvi|Adobe Camera Raw 183 Depth Masking Lens Correction Film Presets Overvi]] · [▶ source](https://www.youtube.com/watch?v=2WDnMKtmCeY)