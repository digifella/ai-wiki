---
type: concept
domain: ux-design
tags:
  - "ai-agents"
  - "human-computer-interaction"
  - "web-infrastructure"
  - "speed-optimization"
  - "ux-design"
aliases:
  - "AI-Human Speed Gap"
  - "Human-Centric Web Design"
summary: The concept explores bridging the speed disparity between AI agents and humans by rebuilding human-centric web infrastructure, utilizing structured interaction methods like Karpathy's Spec/Verifier/Environment model to mitigate interface friction.
updated: 2026-07-11
group: uiux-fundamentals
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ux-design name=UX & Design

# Human Affordance

Human [[concepts/affordances|Affordance]] addresses the mismatch between the operational [[concepts/speed|speed]] of [[concepts/agentic-ai|AI agents]] and the speed at which humans can meaningfully interact with them. While AI systems can process and execute tasks at rates orders of magnitude faster than [[concepts/human-cognition|human cognition]] and reaction time, this speed advantage often fails to translate into proportional improvements for human users. The concept suggests that the bottleneck lies not in AI capability but in the infrastructure and [[concepts/user-interface|interface design]] that mediates [[concepts/ai-prompt|human-AI interaction]].

## The Speed Disparity Problem

Current [[concepts/web-infrastructure|web infrastructure]] was designed primarily for human-paced interaction, creating [[concepts/friction|friction]] when [[concepts/ai-agents|AI agents]] attempt to operate at machine speeds. Traditional web interfaces—forms, navigation, visual [[concepts/systems|feedback loops]]—assume human [[concepts/decision-making|decision-making]] timelines measured in seconds to minutes. When [[concepts/ai-connectors|AI agents]] encounter these same interfaces, the inherent latency of DOM parsing and sequential interaction models negates their computational advantages.

## Structured Interaction Models

To bridge this gap, modern HCI practices are shifting from raw [[concepts/prompting|prompting]] to structured interaction frameworks that separate intent [[concepts/verification|verification]] from environment execution. A prominent example is [[entities/andrej-karpathy|Andrej Karpathy]]’s three-layer method for interacting with [[concepts/ai-models|AI models]], which optimizes the [[concepts/throughput|throughput]] and accuracy of agent outputs by decoupling the process into distinct stages:

- **Spec (Specification):** Explicitly defining the task constraints and desired output format before execution begins, reducing [[concepts/ambiguity|ambiguity]] in [[concepts/prompt-engineering|prompt engineering]].
- **Verifier:** An [[concepts/abstraction-layer|intermediate layer]] that critiques or validates the AI’s [[concepts/draft|draft]] output against the spec before finalization, [[concepts/acting|acting]] as a [[concepts/quality-control|quality control]] gate.
- **Environment:** The final execution stage where the verified action is applied to the target system, ensuring that only high-confidence operations modify state.

This structured approach mitigates the [[concepts/hallucination|hallucination]] risk and aligns AI capabilities with human oversight requirements. See detailed breakdown in [[lab-notes/2026-06-13-Karpathys-Three-Layer-AI-Interaction-Method-Spec-Verifie|Karpathy's Three-Layer AI Interaction Method: Spec, Verifier, Environment]].

## References

- [Karpathy's Three-Layer AI Interaction Method: Spec, Verifier, Environment](https://www.youtube.com/watch?v=7zZy1QTvokM) ([[entities/austin-marchese|Austin Marchese]])
