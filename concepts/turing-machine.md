---
type: concept
domain: maths-logic-crypto
group: mathematical-reasoning-proof
tags:
  - "automata-theory"
  - "computational-model"
  - "theoretical-computer-science"
  - "turing-completeness"
  - "algorithmic-computation"
aliases:
  - "Turing machine model"
  - "universal computing device"
summary: A theoretical computational model consisting of an infinite tape and a state machine that defines what is algorithmically computable.
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Turing Machine

A Turing machine is an abstract mathematical model of computation introduced by Alan Turing in 1936. It consists of an infinite tape divided into cells, a read-write head that moves along the tape, and a finite state machine that controls the head's behavior. Despite its simplicity, the Turing machine is capable of simulating any known algorithm and serves as the theoretical foundation for understanding what problems are computationally solvable.

## Components and Operation

The machine operates by reading symbols from cells on the tape, writing new symbols, and moving the head left or right according to rules defined by its state machine. At each step, the machine reads the current cell, consults its internal state and a transition function, then performs three actions: write a symbol to the current cell, move the head, and transition to a new state. This process continues until the machine reaches a designated halting state, at which point computation stops.

## Computational Significance

The Turing machine's importance lies in its role as a formal model of computation. Church's thesis asserts that any function computable by an algorithm can be computed by a Turing machine, establishing it as a standard measure of computational capability. This led to the definition of Turing-computable functions and the identification of undecidable problems—those for which no Turing machine can provide a solution. The halting problem is the classic example: no algorithm can determine whether an arbitrary Turing machine will halt on a given input.

## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-P-vs-NP-Problem-Computational-Complexity-Implications-and-Historical-C|P vs NP Problem Computational Complexity Implications and Historical C]] · [▶ source](https://www.youtube.com/watch?v=pQsdygaYcE4)
