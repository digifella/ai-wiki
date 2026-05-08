---
type: concept
domain: science-physics
group: engineering-systems-robotics-autonomous-vehicles
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
updated: 2026-05-01
---
# Sim2real

Sim2real refers to the transfer of learned [[concepts/policies|policies]], models, or behaviors from simulated environments to real-world [[concepts/robotics|robotic systems]]. This approach addresses a fundamental challenge in robotics: [[concepts/training|training]] [[concepts/agents|agents]] in [[concepts/simulation|simulation]] is faster, safer, and less expensive than training directly on [[concepts/hardware|physical hardware]], but policies learned in simulation often fail when deployed on real robots due to differences between the simulated and physical worlds.

## The Domain Transfer Problem

The gap between simulation and reality—known as the sim2real gap—arises from multiple sources of discrepancy. Simulated [[concepts/physics|physics]] engines have inherent inaccuracies in modeling [[concepts/friction|friction]], [[entities/contact|contact]] dynamics, and [[concepts/material-properties|material properties]]. [[concepts/visual-perception|Visual perception]] systems trained on synthetic [[concepts/images|images]] may struggle with real-world lighting, textures, and camera properties. Additionally, robots experience wear, calibration drift, and unmodeled environmental factors that simulations do not capture. Successful sim2real transfer requires techniques to bridge these discrepancies, such as domain randomization, where simulated [[concepts/parameters|parameters]] are varied during training to improve robustness, or domain adaptation methods that adjust models to real-world conditions.

## Applications and Approaches

Sim2real has become increasingly important for training robot manipulators, locomotion controllers, and perception systems. Various research approaches include using physics simulators like MuJoCo or Gazebo for initial policy training, then refining on real hardware, or employing synthetic data with domain randomization to pre-train models before real-world [[concepts/deployment|deployment]]. The technique has enabled progress in complex manipulation tasks and has become a standard component of modern robot [[concepts/learning|learning]] pipelines.

## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-DreamDojo-AI-Bridging-Robotics-Sim2Real-Gap-for-Complex-Tasks|DreamDojo AI Bridging Robotics Sim2Real Gap for Complex Tasks]] · [▶ source](https://www.youtube.com/watch?v=mFSFvKquXwI)