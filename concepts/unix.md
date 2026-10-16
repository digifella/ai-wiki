---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "unix"
  - "operating-system"
  - "bell-labs"
  - "bsd"
  - "pdp-11"
aliases:
  - "Unix family"
  - "AT&T Unix"
summary: "Unix is a family of multitasking, multiuser operating systems derived from the original AT&T Unix developed at Bell Labs in the 1970s."
updated: 2026-10-06
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-05T21:40:25+00:00" }
group: platforms-runtimes-environments
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Unix

**Unix** is a family of [[concepts/multitasking|multitasking]], multiuser computer operating systems derived from the original AT&T Unix, developed starting in the 1970s at Bell [[entities/labs|Labs]] by Ken [[entities/moriah-thompson|Thompson]], Dennis Ritchie, and others. It is characterized by its hierarchical file system, portability, and modular design.

## History and Evolution
- Originated at Bell Labs in 1969.
- Key milestones include the development of the [[concepts/c-language|C programming]] language, which enabled Unix's portability.
- Led to the creation of various derivatives, including [[entities/linux]], [[entities/macos]], and FreeBSD.

## PDP-11 and BSD Legacy
The [[concepts/pdp-11]] architecture played a pivotal role in Unix's early [[concepts/adoption|adoption]] and development.
- The [[PDP-11/73]] is a specific model from the mid-1970s that has seen modern revival efforts.
- [[concepts/211bsd]] is a version of BSD Unix that ran on [[concepts/pdp-11-architecture|PDP-11]] hardware.
- Recent projects have focused on overcoming hardware and software challenges to host public websites on these vintage systems.
- See [[lab-notes/2026-10-05-PDP-1173-Modernization-Overcoming-HardwareSoftware-Chall|PDP-11/73 Modernization: Overcoming Hardware/Software Challenges to Host Public Website]] for detailed technical logs of this modernization effort.
- Key challenges include [[concepts/memory-management|memory management]], I/O controller compatibility, and network stack integration on legacy hardware.
- [[concepts/success|Success]] in these efforts demonstrates the enduring flexibility of the Unix kernel and BSD networking stack.

## Core Concepts
- **Kernel**: The core component that manages [[concepts/computational-resources|system resources]].
- **[[concepts/cli|Shell]]**: The [[concepts/command-line-interface|command-line]] interpreter (e.g., Bourne shell, Bash, Zsh).
- **File System**: Hierarchical structure starting from the root `/`.
- **POSIX**: Standard defining the interface between operating systems and applications.

## References
- [PDP-11/73 Modernization: Overcoming Hardware/Software Challenges to Host Public Website](https://www.youtube.com/watch?v=EzfHqE9-rbY)
