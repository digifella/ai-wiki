---
type: concept
domain: science-physics-research
tags:
  - "quantum-computing"
  - "qubit-coherence"
  - "decoherence-time"
  - "relaxation-time"
  - "dephasing-time"
  - "fault-tolerance"
  - "topological-protection"
aliases:
  - "Qubit Coherence Time"
  - "T1 and T2 Times"
  - "Quantum State Lifetime"
  - "Decoherence Duration"
summary: Mean qubit lifetime is the average duration a qubit maintains its quantum state before decoherence, serving as a critical metric for determining fault-tolerance thresholds and error-correction capabilities in quantum com
updated: 2026-07-11
group: physics-fundamental-theory
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# mean qubit lifetime

**Mean qubit lifetime** (often referred to as coherence time or $T_1$/$T_2$ times) is the average duration a qubit maintains its quantum state before decoherence caused by environmental noise or internal defects. It is a critical metric for determining the [[concepts/robustness|fault-tolerance]] threshold of a quantum computer and the number of [[concepts/bug-fixing|error-correction]] cycles possible before information loss.

## Key Metrics
- **Relaxation time ($T_1$)**: Time scale for energy decay (spontaneous emission from $|1\rangle$ to $|0\rangle$).
- **Dephasing time ($T_2$)**: Time scale for loss of [[concepts/phase|phase]] coherence between superposition states.
- **Relation**: $T_2 \le 2T_1$, with equality only in ideal conditions without pure dephasing noise.

## Relevance to Topological Quantum Computing
In [[concepts/quantum-computing|topological quantum computing]], [[concepts/qubits|qubits]] are protected by topological properties, [[entities/theoretically-media|theoretically]] offering significantly longer lifetimes compared to conventional superconducting or trapped-ion qubits. The robustness against local perturbations is a primary advantage claimed by platforms utilizing Majorana [[concepts/concept-of-nothingness|zero]] modes.

## Recent Developments and Critical Analysis
- **[[entities/microsoft|Microsoft]] [[entities/majorana-2|Majorana 2]] Chip**: In mid-2026, Microsoft announced the "Majorana 2" quantum chip, claiming breakthroughs in topological [[concepts/secure|protection]].
  - Independent critical reviews highlight skepticism regarding these claims, suggesting that observed stability may not yet demonstrate true topological protection required for fault-tolerant computing [[lab-notes/2026-06-12-Microsoft-Majorana-2-Quantum-Chip-Critical-Review-of-Top|Microsoft Majorana 2 Quantum Chip: Critical Review of Topological Claims]].
  - Analysis suggests that while coherence times may appear improved, they might not meet the stringent criteria for topological error correction without further [[concepts/verification|verification]] of non-Abelian statistics.

## Challenges
- **Material Defects**: Impurities in nanowires or superconducting interfaces can create parasitic states that reduce effective lifetime.
- **Measurement Backaction**: The act of measuring topological qubits often introduces noise that competes with the protective benefits.
- **Scalability vs. Coherence**: Increasing qubit count typically introduces crosstalk, potentially reducing individual qubit lifetimes.

## References
- [Microsoft Majorana 2 Quantum Chip: Critical Review of Topological Claims](https://www.youtube.com/watch?v=XAYh7HRjzs0) — [[entities/sabine-hossenfelder|Sabine Hossenfelder]], [[entities/youtube|YouTube]] (2026).
