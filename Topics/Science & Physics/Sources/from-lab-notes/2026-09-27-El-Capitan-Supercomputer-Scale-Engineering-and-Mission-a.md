---
wiki-ingested: true
title: "El Capitan Supercomputer: Scale, Engineering, and Mission at LLNL"
date: 2026-09-27
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: science-physics-research
group: engineering-systems-robotics-autonomous-vehicles
type: "source-summary"
aliases:
  - "lab-notes/2026-09-27-El-Capitan-Supercomputer-Scale-Engineering-and-Mission-a"
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

## El Capitan Supercomputer: Scale, Engineering, and Mission at LLNL
**Clip title:** What Do They Run on America's Fastest SuperComputer?
**Author / channel:** Scott Manley
**URL:** https://www.youtube.com/watch?v=HlsyZAWnOu8

### Summary
This video provides an in-depth tour of El Capitan, one of the world's most powerful supercomputers, located at [[concepts/lawrence-livermore-national-laboratory|Lawrence Livermore National Laboratory]] ([[entities/llnl|LLNL]]). Hosted by [[entities/scott-manley|Scott Manley]], the tour highlights the extraordinary scale, intricate engineering, and scientific mission behind such a colossal machine. Originally projected to be the #1 fastest supercomputer globally, El Capitan, despite being overtaken by a Chinese system, remains the fastest in the United States, poised to achieve an astounding 1.7 ExaFLOPS – a million million floating-point operations per second. This remarkable computational power is a testament to LLNL's long-standing legacy in supercomputing, dating back to the UNIVAC-1 in the 1950s.

The "super" in supercomputer is attributed to several key factors. El Capitan is built from over 11,400 compute nodes, each containing multiple AMD Instinct MI300A Accelerated Processing Units (APUs). These APUs ingeniously integrate CPUs, GPUs, and high-bandwidth [[concepts/memory|memory]] onto a single chip, optimizing data movement and processing. Connecting these tens of thousands of powerful components is a sophisticated Slingshot Interconnect network, employing a Dragonfly topology that ensures any node can communicate with any other rapidly. This massive scale requires an equally impressive [[concepts/infrastructure|infrastructure]], including a dedicated 30-megawatt power supply and an evaporative cooling system capable of circulating 10,000 gallons of water per minute, all housed within a meticulously designed facility optimized for extreme power density. Complementing the core hardware are innovative components like "Rabbit" storage modules, which provide local flash storage and in-situ data processing capabilities.

The software stack running on El Capitan is equally crucial to harnessing its immense power. It utilizes TOSS (Tri-Lab Operating System Stack), a custom Linux distribution optimized for high-performance [[concepts/computation|computing]], along with the Flux framework for dynamic resource management and job scheduling across its vast array of nodes. This intricate interplay of hardware and software enables El Capitan to tackle complex, multi-physics simulations, primarily for the National Nuclear Security Administration (NNSA) mission. Its core purpose is to ensure the safety, security, and reliability of the U.S. nuclear weapons stockpile through advanced modeling, eliminating the need for physical testing. Additionally, LLNL operates Tuolumne, an unclassified sibling to El Capitan with a similar architecture, used for open science research spanning materials science, astrophysics, climate modeling, and earthquake simulations.

Ultimately, El Capitan represents a pinnacle of scientific and engineering achievement. The sheer scale of its components, coupled with tight integration, optimized software, and a robust [[concepts/infrastructure|infrastructure]], allows it to perform calculations of unprecedented complexity. Tackling multi-physics problems, like simulating turbulent fluid mixing, shockwaves, or inertial confinement fusion, demands not only raw computational power but also sophisticated algorithms for adaptive meshing, dynamic load balancing, and efficient communication across its many processing units. The project underscores that supercomputing is a collaborative, interdisciplinary endeavor, requiring seamless partnerships between hardware developers, software engineers, physicists, and experimentalists to push the boundaries of what is computationally possible and predict reality with increasing accuracy.

### Video Description & Links
#### Description
In July I paid a visit to Lawrence Livermore National Labs which hosts the fastest supercomputer in the US, a couple of months earlier it was the fastest supercomputer in the world, but Moore's law means computer supremacy is fleeting.
El Capitan is an exaflop scale system, meaning is can run  10^18 calculations per second (a billion, billion), and this is measured by benchmarks that require tight cooperation between it's thousands of cores. There are datacenters with many more processors, but those may not perform at the same level because of the interconnectedness required for this kind of task.
So, I wanted to look at the whole installation from bottom to top to make it clear that a supercomputer is more than having huge numbers of processors in a datacenter.

My son Orion helped extensively with shooting this video!

## Related Concepts
- [[concepts/el-capitan-supercomputer|El Capitan Supercomputer]]
- [[concepts/lawrence-livermore-national-laboratory|Lawrence Livermore National Laboratory]] — [Wikipedia](https://en.wikipedia.org/wiki/Lawrence_Livermore_National_Laboratory)
- [[concepts/supercomputer-architecture|supercomputer architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Supercomputer_architecture)
- [[concepts/exascale-computing|exascale computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Exascale_computing)
- [[concepts/scientific-simulation|scientific simulation]]
- evaporative cooling — [Wikipedia](https://en.wikipedia.org/wiki/Evaporative_cooler)
- TOSS (Tri-Lab Operating System Stack)
- inertial confinement fusion — [Wikipedia](https://en.wikipedia.org/wiki/Inertial_confinement_fusion)

## Related Entities
- [[entities/scott-manley|Scott Manley]] — [Wikipedia](https://en.wikipedia.org/wiki/Scott_Manley)
- [[entities/llnl|LLNL]] — [Wikipedia](https://en.wikipedia.org/wiki/Lawrence_Livermore_National_Laboratory)
- Lawrence Livermore National Laboratory — [Wikipedia](https://en.wikipedia.org/wiki/Lawrence_Livermore_National_Laboratory)
- AMD — [Wikipedia](https://en.wikipedia.org/wiki/AMD)
- National Nuclear Security Administration — [Wikipedia](https://en.wikipedia.org/wiki/National_Nuclear_Security_Administration)