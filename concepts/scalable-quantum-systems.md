---
type: concept
domain: science-physics-research
tags:
  - "quantum-computing"
  - "scalability"
  - "error-correction"
  - "topological-qubits"
  - "decoherence"
  - "fault-tolerance"
  - "qubit-connectivity"
  - "control-electronics"
aliases:
  - "Scalable Quantum Architectures"
  - "Fault-Tolerant Quantum Systems"
  - "Post-NISQ Quantum Computing"
  - "Topological Quantum Computing"
summary: Scalable quantum systems are architectures designed to increase qubit counts while maintaining coherence and error correction thresholds to transition from NISQ devices to fault-tolerant universal quantum computers.
updated: 2026-07-12
group: physics-fundamental-theory
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Scalable Quantum Systems

**Scalable Quantum Systems** refer to [[entities/quantum-computing|quantum computing]] architectures capable of increasing qubit count while maintaining or improving coherence times, gate fidelities, and [[concepts/bug-fixing|error correction]] thresholds. Scalability is the primary bottleneck in transitioning from Noisy Intermediate-Scale Quantum (NISQ) devices to fault-tolerant universal quantum computers.

## Core Challenges
- **Decoherence:** Environmental noise causing loss of quantum information.
- **Error Correction:** Overhead required for [[concepts/quantum-error-correction]] codes (e.g., Surface Code) often demands thousands of physical [[concepts/qubits|qubits]] per logical qubit.
- **Connectivity:** Limited qubit-to-qubit interaction ranges in superconducting and trapped-ion systems.
- **Control Electronics:** [[concepts/computational-scaling|Scaling]] classical control infrastructure to manage millions of qubits.

## Architectural Approaches

### Topological Quantum Computing
Topological qubits utilize non-Abelian anyons (specifically Majorana [[concepts/concept-of-nothingness|Zero]] Modes) to encode information in global properties of the system, offering inherent [[concepts/secure|protection]] against local noise. This approach promises significantly lower overhead for error correction compared to standard superconducting circuits.

- **[[entities/microsoft|Microsoft]]'s Approach:** Microsoft has pursued a [[concepts/quantum-computing|topological quantum computing]] roadmap, focusing on semiconductor-superconductor hybrid nanowires.
- **Recent Developments (2026):**
	- Microsoft unveiled the **[[entities/majorana-2|Majorana 2]]** quantum chip, claiming advances toward scalable topological quantum computing by 2029.
	- Claims include halving the timeline for achieving [[concepts/robustness|fault tolerance]], though these remain subject to significant scientific scrutiny.
	- See detailed analysis: [[lab-notes/2026-07-09-Microsofts-Majorana-2-Quantum-Chip-Unproven-Topological|Microsoft's Majorana 2 Quantum Chip: Unproven Topological Qubit Claims and Skepticism]]

### Superconducting Circuits
- Dominant approach used by IBM and [[concepts/google-search|Google]].
- High gate speeds but short coherence times.
- Scalability limited by wiring complexity and crosstalk.

### Trapped Ions
- High fidelity and long coherence times.
- Scalability limited by trap size and laser control complexity.

## Key Metrics for Scalability
1. **Logical Qubit Yield:** Ratio of physical qubits to functional logical qubits.
2. **Gate Fidelity:** Must exceed threshold limits for specific error correction codes.
3. **Modularity:** Ability to link multiple quantum processing units (QPUs) via quantum interconnects.

## References
- [Microsoft's Majorana 2 Quantum Chip: Unproven Topological Qubit Claims and Skepticism](https://www.youtube.com/watch?v=FgYGu7s7kiQ)
