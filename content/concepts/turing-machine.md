---
type: concept
domain: maths-cryptography
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
updated: 2026-05-01
---
# Turing Machine

A Turing machine is an abstract mathematical model of computation introduced by Alan Turing in 1936. It consists of an infinite tape divided into cells, a read-write head that moves along the tape, and a finite state machine that controls the head's behavior. Despite its simplicity, the Turing machine is capable of simulating any known algorithm and serves as the theoretical foundation for understanding what problems are computationally solvable.

## Operation and Components

The machine operates by reading symbols from the tape, [[concepts/consulting|consulting]] its current state, and then [[concepts/writing|writing]] a new symbol, changing state, and moving the head left or right according to predefined transition rules. The infinite tape provides unlimited [[concepts/memory|memory]], while the deterministic state machine ensures reproducible, step-by-step computation. A Turing machine halts when it reaches a designated accepting or rejecting state, or it may run indefinitely.

## Computational Significance

[[concepts/turing-machines|Turing machines]] formalize the intuitive [[entities/notion|notion]] of an algorithm and establish a theoretical boundary for computability. The Church-Turing thesis—a widely accepted principle—states that any function computable by any reasonable computational device is computable by a Turing machine. This equivalence allows researchers to classify problems by their computational difficulty and to prove that certain problems, like the halting problem, are undecidable. Modern computers, while vastly more practical, are not fundamentally more powerful than Turing machines in terms of what they can [[concepts/compute|compute]].

## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-P-vs-NP-Problem-Computational-Complexity-Implications-and-Historical-C|P vs NP Problem Computational Complexity Implications and Historical C]] · [▶ source](https://www.youtube.com/watch?v=pQsdygaYcE4)