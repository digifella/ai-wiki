---
type: concept
domain: science-physics-research
tags:
  - "quantum-computing"
  - "quantum-supremacy"
  - "computational-complexity"
  - "nisq"
  - "error-correction"
aliases:
  - "quantum advantage"
summary: Quantum supremacy is the milestone where a quantum computer performs a calculation practically impossible for classical supercomputers, though current claims often rely on contrived problems with no practical utility.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-27T20:35:37+00:00" }
group: physics-fundamental-theory
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Quantum Supremacy

**Quantum supremacy** (also referred to as **quantum advantage**) is the milestone where a quantum computer performs a calculation that is practically impossible for any classical supercomputer to complete in a reasonable timeframe.

## Core Concepts
- **[[concepts/computational-complexity|Computational Complexity]]**: Relies on problems in complexity classes like BQP (Bounded-error Quantum Polynomial time) that are believed to be outside P or NP.
- **Hardware Requirements**: Requires high-fidelity qubit control, low error rates, and significant quantum [[concepts/error-correction|error correction]] overhead.
- **Practical Utility**: Distinction between "supremacy" (solving a specific, often useless problem) and "utility" (solving commercially relevant problems like Shor's algorithm for cryptography or quantum chemistry simulations).

## Critical Assessment & Challenges
Recent critical analyses highlight significant gaps between theoretical potential and engineering reality.

- **Overhype vs. Reality**: Critics argue that current claims of supremacy often rely on contrived problems with no practical application, masking the immense engineering hurdles remaining [[lab-notes/2026-08-27-Quantum-Computing-Overhype-and-Practical-Failures-A-Crit|Quantum Computing Overhype and Practical Failures: A Critical Assessment]].
- **Practical Failures**: Persistent optimism often obscures the "limi" (limitations) of current noisy intermediate-scale quantum (NISQ) devices, which suffer from decoherence and high error rates.
- **Classical [[concepts/countermeasures|Countermeasures]]**: Classical algorithms and hardware improvements frequently close the gap, rendering early "supremacy" claims obsolete or marginal.
- **Scalability Issues**: Achieving fault-tolerant quantum [[concepts/computation|computing]] requires millions of physical qubits to create a single logical qubit, a feat not yet demonstrated.

## Related Concepts
- [[concepts/quantum-computing]]
- NISQ Era
- Quantum [[concepts/error-correction|Error Correction]]
- Shor's Algorithm
- Grover's Algorithm

## References
- Hossenfelder, S. "[[concepts/quantum-computing|Quantum Computing]] Failures." [Quantum Computing Overhype and Practical Failures: A Critical Assessment](https://www.youtube.com/watch?v=DX_oIQ-tA6M).
