---
type: concept
domain: ai-agents
tags:
  - "AI"
  - "Interpretability"
  - "Mechanistic-Interpretability"
  - "Safety"
  - "Research"
  - "ai-safety"
  - "neural-networks"
  - "circuit-analysis"
  - "sparse-autoencoders"
  - "alignment"
aliases:
  - "MI"
  - "mechanistic interpretability"
summary: Mechanistic interpretability is an AI safety subfield that reverse-engineers neural networks to map internal circuits and features for transparency and alignment.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-30T00:30:34+00:00" }
group: safety-guardrails-governance
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Mechanistic Interpretability

**[[concepts/ai-interpretability|Mechanistic interpretability]]** is a subfield of [[concepts/model-safety|AI Safety]] focused on reverse-engineering the internal algorithms of artificial [[concepts/neural-networks|neural networks]] to understand exactly how they compute their outputs. Unlike statistical interpretability, which relies on external probes or correlations, mechanistic interpretability seeks to map the specific circuits, features, and pathways within a model's weights and activations.

## Core Objectives
- **Transparency:** Unpacking "black box" models to reveal their internal logic.
- **Safety:** Identifying and mitigating risks such as Alignment Problem, Deceptive Alignment, and Scheming.
- **Science:** Understanding the fundamental principles of how intelligence emerges from neural architectures.

## Key Concepts
- **Circuits:** Sparse, interpretable subgraphs of neurons that perform specific computations.
- **Features:** Specific, meaningful patterns in the input or activation space.
- **Superposition:** The phenomenon where models represent more features than they have dimensions, leading to interference.
- **Sparse Autoencoders (SAEs):** Tools used to disentangle superposed features into interpretable components.

## Recent Developments & Resources

### Google DeepMind Podcast: AI Interpretability
A significant discussion on the field was featured in a podcast hosted by Professor [[entities/hannah-fry]] with guest [[entities/neel-nanda|Neel Nanda]], Mechanistic Interpretability Team Lead at [[entities/google-deepmind|Google DeepMind]].

- **Topic:** Unpacking [[concepts/black-box-models|black box models]] for safety and science.
- **Key Insight:** Understanding the "inner thoughts" of AI is critical for ensuring models remain aligned with human values as they scale.
- **Source Note:** [[lab-notes/2026-08-30-AI-Interpretability-Unpacking-Black-Box-Models-for-Safet|AI Interpretability: Unpacking Black Box Models for Safety and Science]]
- **Reference:** [AI Interpretability: Unpacking Black Box Models for Safety and Science](https://www.youtube.com/watch?v=1DtMiRKg-cs)

## Related Fields
- [[concepts/artificial-general-intelligence|Artificial General Intelligence]]
- Neural Network Visualization
- Red Teaming
- Interpretability Research
