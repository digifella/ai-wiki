---
type: concept
domain: maths-cryptography
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
updated: 2026-05-01
---
# Turing Machines

A [[concepts/turing-machine|Turing machine]] is an abstract computational model conceived by British mathematician Alan Turing in 1936. It consists of an infinitely long tape divided into cells, a read-write head that moves along the tape, and a finite set of internal states. The machine operates by reading symbols on the tape, [[concepts/writing|writing]] new symbols based on its current state, and moving the head left or right according to a predefined set of rules. Despite its simplicity, this theoretical device can simulate the logic of any real computer algorithm.

## Computational Universality

The significance of Turing machines lies in their universality. A universal Turing machine can be programmed to simulate any other Turing machine, making it capable of performing any computation that any other reasonable model of computation can perform. This led to the Church-Turing thesis, which posits that any effectively computable function can be computed by a Turing machine. This thesis remains a foundational principle in computer science, even though it cannot be formally proven.

## Practical Applications and Legacy

While Turing machines are not used directly as practical computing devices, they form the theoretical basis for understanding [[concepts/complexity-classes|computational complexity]], decidability, and what problems are solvable by algorithms. The concept enabled the formal study of which problems can or cannot be solved by computers, such as the halting problem. This framework remains essential for [[concepts/cryptography|cryptography]], computational [[concepts/theory|theory]], and the design of modern algorithms.
