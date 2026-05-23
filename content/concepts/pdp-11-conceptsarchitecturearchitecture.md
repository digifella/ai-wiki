---
type: concept
domain: tools-platforms
tags:
  - "pdp-11"
  - "computer-architecture"
  - "historical-computing"
  - "instruction-set"
  - "memory-management"
aliases:
  - "PDP-11 Architecture"
  - "PDP-11 Design"
summary: The PDP-11 is a 16-bit minicomputer architecture from Digital Equipment Corporation featuring a modular design and influential instruction set.
updated: 2026-05-23
group: developer-tooling-clis
---
# PDP-11 Concepts Architecture

The PDP-11 is a 16-bit minicomputer [[concepts/architecture|architecture]] developed by Digital Equipment Corporation (DEC) in the early 1970s. It represents a significant milestone in [[concepts/history-of-computing|computing history]], establishing [[concepts/design|design]] principles that influenced processor architecture for decades. The PDP-11 family became one of the most successful minicomputers of its era, with variants ranging from compact embedded systems to powerful multi-user machines.

## Design and Structure

The PDP-11 architecture emphasizes modularity and orthogonality, features that made it accessible to programmers and systems designers. Its instruction set is relatively compact and regular, with eight general-[[concepts/motivation|purpose]] registers that can be used interchangeably in most operations. The architecture supports [[concepts/memory|memory]] addressing modes that provide flexibility for different programming tasks, and its modular bus design allowed manufacturers to build systems of varying [[concepts/capabilities|capabilities]] using the same core components.

## Technical Characteristics

The original PDP-11 operates with 16-bit word length and uses an 18-bit address bus, enabling direct access to 64 kilobytes of memory. Later variants extended addressing capabilities to support larger memory spaces. The instruction set includes logical, arithmetic, and [[concepts/power|control]] operations, with [[concepts/instructions|instructions]] typically occupying one or two words. The architecture's simplicity relative to its capabilities made it popular for both [[concepts/business-applications|business applications]] and systems programming.

## Legacy

The PDP-11 influenced subsequent processor designs and remains studied in computer architecture education. Its success demonstrated the viability of the minicomputer market segment before microcomputers became dominant. The UNIX operating system gained prominence partly through its close association with PDP-11 systems, creating a lasting [[concepts/connection|connection]] between the architecture and [[concepts/coding|software development]] practices.
