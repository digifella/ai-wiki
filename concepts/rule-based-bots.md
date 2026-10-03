---
type: concept
domain: ai-agents
tags:
  - "rule-based-bots"
  - "automation"
  - "rpa"
  - "image-decision-models"
  - "visual-understanding"
aliases:
  - "Rule-based Bots"
summary: "Rule-based bots are automation agents that execute predefined logic paths based on explicit conditions, with recent advancements enabling direct decision-making from visual inputs via Image Decision Models."
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-02T23:47:31+00:00" }
group: applied-ai-workflows
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Rule-based Bots

**Rule-based Bots** are automation agents that execute predefined [[concepts/open-source-philosophy|logic]] paths based on explicit conditions. While effective for deterministic tasks, they traditionally struggle with [[concepts/ambiguity|ambiguity]] and [[concepts/unstructured-data|unstructured data]] inputs.

## Evolution: From Steps to Decisions

Traditional [[concepts/robotic-process-automation]] (RPA) excels at automating repetitive, linear "steps" (e.g., data entry, button clicks) but lacks [[concepts/native-capabilities|native capabilities]] for complex [[concepts/decision-making|decision-making]]. Recent advancements in Image Decision Models bridge this gap by enabling bots to interpret visual context directly.

### Key Advancements
- **Direct Unstructured Data Decisions**: New models allow RPA systems to make decisions based on visual inputs (forms, scans, screenshots) without requiring [[concepts/structured-data-extraction|structured data extraction]] first.
- **Visual Context Interpretation**: Bots can now analyze Screenshots and Scans to determine workflow paths, moving beyond simple coordinate-based clicking.
- **Reduced Fragility**: By relying on [[concepts/visual-understanding|visual understanding]] rather than rigid DOM selectors or OCR pipelines, automation becomes more resilient to UI changes.

## Integration with Jev Image Decision Models

The integration of [[concepts/document-processing|Jev Image Decision Models]] represents a shift toward "direct" decision-making capabilities. This approach allows bots to process visual data as a primary input for logic gates, rather than treating it as a secondary [[concepts/verification|verification]] step.

- **Core Concept**: Automating the "decision" [[entities/nodejs|node]] in flowcharts, not just the "action" [[concepts/nodes|nodes]].
- **Application**: Handling Forms and Scans where traditional OCR fails or is too slow.
- **Reference**: [[lab-notes/2026-10-03-Jev-Image-Decision-Models-for-RPA-Direct-Unstructured-Da|Jev Image Decision Models for RPA: Direct Unstructured Data Decisions]]

## References

- Witteveen, S. *Image Decision Models for RPA: Forms, Scans and Screenshots*. [https://www.youtube.com/watch?v=L8YxigQoLaM](https://www.youtube.com/watch?v=L8YxigQoLaM)
