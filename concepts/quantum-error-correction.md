---
type: concept
domain: science-physics-research
tags:
  - "quantum-computing"
  - "error-correction"
  - "fault-tolerance"
  - "surface-codes"
  - "topological-codes"
  - "decoherence"
  - "qubits"
  - "threshold-theorem"
aliases:
  - "QEC"
  - "Quantum Fault Tolerance"
  - "Quantum Noise Mitigation"
  - "Logical Qubit Encoding"
summary: Quantum Error Correction is a set of techniques that preserve quantum information from decoherence and noise by encoding logical qubits into entangled physical states to enable fault-tolerant computation.
updated: 2026-07-12
group: physics-fundamental-theory
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Quantum Error Correction

**Quantum [[concepts/bug-fixing|Error Correction]] (QEC)** is a set of techniques for preserving quantum information from errors due to decoherence and other quantum noise. It is essential for building fault-tolerant [[entities/quantum-computing|Quantum Computers]] capable of running [[concepts/algorithms|algorithms]] like Shor's [[concepts/algorithm|Algorithm]] or Grover's Algorithm at scale.

## Core Principles

Unlike [[concepts/classical-bits|classical bits]], quantum states cannot be copied due to the No-[[concepts/cloning|Cloning]] Theorem. QEC circumvents this by [[concepts/encoding|encoding]] logical [[concepts/qubits|qubits]] into entangled states of multiple physical qubits.

- **Syndrome Measurement**: Detects errors without collapsing the logical quantum state.
- **[[concepts/robustness|Fault Tolerance]]**: Ensures that errors during the correction process do not propagate uncontrollably.
- **Threshold Theorem**: If physical error rates are below a certain threshold, arbitrary-length computations are possible.

## Major Approaches

### Surface Codes
The most widely researched approach for superconducting and trapped-ion architectures.
- High threshold for error rates (~1%).
- Requires significant overhead (thousands of physical qubits per logical qubit).
- Relies on Stabilizer Codes.

### Topological Quantum Error Correction
Uses the topological properties of matter to protect quantum information.
- **Majorana [[concepts/concept-of-nothingness|Zero]] Modes**: Non-Abelian anyons that store information non-locally, making them inherently resistant to local noise.
- **Advantage**: Potentially lower overhead and intrinsic stability compared to surface codes.
- **Challenge**: Experimental realization of stable Majorana modes has been historically difficult and controversial.

## Recent Developments & Industry Status

### Microsoft's Topological Approach
[[entities/microsoft|Microsoft]] has pursued a hardware-first strategy relying on Topological Qubits based on Majorana [[concepts/zero|zero]] modes.

- **[[entities/majorana-2|Majorana 2]] Chip (2026)**: Microsoft unveiled the Majorana 2 chip, claiming significant progress toward scalable [[concepts/quantum-computing|topological quantum computing]] by 2029.
- **Skepticism & [[concepts/verification|Verification]]**: The claims regarding the stability and scalability of these topological qubits remain unproven and subject to community skepticism. See [[lab-notes/2026-07-09-Microsofts-Majorana-2-Quantum-Chip-Unproven-Topological|Microsoft's Majorana 2 Quantum Chip: Unproven Topological Qubit Claims and Skepticism]] for detailed analysis.
- **Implication**: If validated, this approach could drastically reduce the physical qubit overhead required for QEC compared to Surface Code implementations.

## References

- [Microsoft's Majorana 2 Quantum Chip: Unproven Topological Qubit Claims and Skepticism](https://www.youtube.com/watch?v=FgYGu7s7kiQ)
