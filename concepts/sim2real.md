---
type: concept
domain: science-physics-research
tags:
  - "sim-to-real"
  - "domain-transfer"
  - "robotics"
  - "policy-transfer"
  - "ai-training"
  - "neural-networks"
aliases:
  - "simulation to reality"
  - "sim2real transfer"
summary: Transfer of learned policies or models from simulation environments to real-world robotic systems.
updated: 2026-07-12
group: engineering-systems-robotics-autonomous-vehicles
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Sim2real

Sim2real refers to the transfer of learned [[concepts/policies|policies]], models, or behaviors from [[concepts/environment-simulation|simulated environments]] to real-[[entities/earth|world]] [[concepts/robotics|robotic systems]]. The core [[concepts/motivation|motivation]] is practical: training agents in [[concepts/simulation|simulation]] is faster, [[concepts/space-jetpacks|safer]], and significantly less expensive than training directly on [[concepts/hardware|physical hardware]]. However, policies developed in simulation frequently fail when deployed on real robots due to systematic differences between simulated [[concepts/physics|physics]], sensor characteristics, and environmental conditions.

## The Reality Gap

The primary challenge in sim2real transfer is bridging the "reality gap"—the discrepancy between simulation and [[concepts/physical-reality|physical reality]]. Simulated environments use approximate physics engines, idealized sensor models, and controlled conditions that rarely capture the complexity of real-world interactions. Factors such as [[concepts/friction|friction]] properties, material dynamics, [[concepts/digital-image-noise|sensor noise]], and environmental variability can cause learned behaviors to perform poorly or fail entirely when deployed on actual hardware.

## Approaches to Sim2real Transfer

Several techniques have been developed to improve sim2real performance. Domain randomization involves training policies across many randomized simulation parameters so that models become robust to real-world variation. System identification uses [[concepts/real-world-data|real-world data]] to calibrate simulation parameters more accurately. Other approaches include domain adaptation methods that learn to map between simulated and real observations, and training with added noise in simulation to approximate real-world conditions. Many practical applications use combinations of these methods alongside [[concepts/fine-tuning|fine-tuning]] on limited real-world data.

Sim2real remains an active area of research in robotics, with applications ranging from robotic manipulation and locomotion to [[concepts/autonomous-driving-technology|autonomous vehicles]]. [[concepts/success|Success]] varies considerably depending on task complexity, the fidelity of available simulators, and the degree of physical interaction required.
## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-DreamDojo-AI-Bridging-Robotics-Sim2Real-Gap-for-Complex-Tasks|DreamDojo AI Bridging Robotics Sim2Real Gap for Complex Tasks]] · [▶ source](https://www.youtube.com/watch?v=mFSFvKquXwI)
