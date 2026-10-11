---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "vision-only-processing"
  - "browser-automation"
  - "computer-use-agent"
  - "multimodal-ai"
  - "no-dom"
  - "visual-grounding"
  - "fara-15-27b"
  - "microsoft"
aliases:
  - "Vision-Only Processing"
  - "Visual Browser Automation"
  - "Non-DOM Agent"
summary: "Vision-Only Processing enables AI agents to execute complex tasks via visual input without relying on DOM or accessibility trees, exemplified by Microsoft's Fara 1.5-27B model."
updated: 2026-07-31
group: data-pipelines-sync-storage
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-31" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Vision-Only Processing

**Vision-Only Processing** refers to the capability of an [[concepts/ai-agent|AI agent]] to perform [[concepts/complex-tasks|complex tasks]], such as [[concepts/computer-use-agent]] or [[concepts/browser-automation]], using exclusively visual input (screenshots/UI frames) without relying on DOM parsing, [[concepts/accessibility|accessibility]] trees, or HTML structure.

## Key Characteristics
- **Visual Grounding:** Relies on pixel-level understanding to locate elements and interpret layout.
- **No DOM Dependency:** Operates independently of underlying [[concepts/codebase-architecture|code structure]], making it robust against dynamic or obfuscated web pages.
- **Multimodal Integration:** Often paired with [[concepts/demystifying-llms|Large Language Models]] (LLMs) to interpret visual context and plan actions.

## Recent Developments

### Microsoft Fara 1.5-27B
Significant advancements in vision-only [[concepts/web-navigation|browser automation]] have been demonstrated by [[entities/microsoft|Microsoft]]'s **[[entities/fara-15-27b|Fara 1.5-27B]]**, a multimodal [[concepts/computer-use|Computer Use]] Agent (CUA).

- **Architecture:** A 27-billion parameter model designed for [[concepts/local-installation|local installation]] and real-time browser interaction.
- **Performance:** Demonstrates improved accuracy in Vision-Only Processing tasks compared to earlier iterations (e.g., Fara 7).
- **Capabilities:**
  - Real-time browser automation without DOM access.
  - [[concepts/local-control|Local deployment]] for [[concepts/privacy|privacy]] and latency control.
  - Enhanced [[concepts/multimodal-understanding|multimodal understanding]] for complex UI navigation.

For detailed technical benchmarks and [[concepts/installation|installation]] guides, see: [[lab-notes/2026-07-30-Microsoft-Fara-1.5-27B-Local-Install-and-Vision-Only-Bro|Microsoft Fara 1.5-27B: Local Install and Vision-Only Browser Automation Performance]]

## Related Concepts
- [[concepts/multimodal-ai]]
- [[concepts/computer-use-agent]]
- Screen Parsing
- [[concepts/accessibility|Accessibility]] Tree

## References
- [[entities/fahd-mirza|Fahd Mirza]]. "[[entities/microsoft|Microsoft]] Fara1.5 27B: Local Install + Real [[concepts/browser-automation|Browser Automation]] Demo." [[entities/youtube]] (2026-07-30). [Microsoft Fara 1.5-27B: Local Install and Vision-Only Browser Automation Performance](https://www.youtube.com/watch?v=hGZjBW-yXeQ)
