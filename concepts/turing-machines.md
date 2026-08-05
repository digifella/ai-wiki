---
type: concept
domain: maths-logic-crypto
group: mathematical-reasoning-proof
tags:
  - "theoretical-computer-science"
  - "computability"
  - "formal-models"
  - "mathematical-logic"
  - "algorithms"
aliases:
  - "Turing Machine"
  - "Universal Computing Machine"
summary: A theoretical computational model introduced by Alan Turing that defines an abstract machine capable of simulating any algorithmic process.
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Turing Machines

A Turing machine is an abstract computational model that formalizes the notion of mechanical computation. Introduced by Alan Turing in 1936, it consists of a hypothetical device with an infinite tape divided into cells, a read-write head that moves along the tape, and a finite set of internal states. The machine operates by reading symbols from the tape, transitioning between states according to predetermined rules, and writing symbols back to the tape. Despite this minimalist design, the model is powerful enough to simulate the behavior of any real-world computer or algorithm.

## Computational Power and the Church-Turing Thesis

The significance of Turing machines lies in their ability to characterize computability itself. The Church-Turing thesis, named after Turing and Alonzo Church, proposes that any function computable by an algorithm can be computed by a Turing machine. This thesis has become a central principle in theoretical computer science, providing a formal definition of what it means for a problem to be "computable" or "decidable."

## Variants and Decidability

Several variations of the basic Turing machine model exist, including non-deterministic Turing machines and multi-tape machines, but these retain equivalent computational power. The model has proven instrumental in establishing fundamental results about computational limits, such as the undecidability of the halting problem—the question of whether an arbitrary program will eventually terminate or run indefinitely. This impossibility result demonstrates that some problems cannot be solved by any algorithmic procedure, establishing rigorous boundaries on what computation can achieve.
