---
type: concept
domain: science-physics
tags:
  - "sim2real-gap"
  - "robotics-simulation"
  - "ai-training"
  - "domain-adaptation"
  - "robot-learning"
  - "nvidia-research"
aliases:
  - "Sim2Real Gap in Robotics"
  - "DreamDojo AI Framework"
  - "Bridging Simulation to Reality"
summary: NVIDIA research discussed in Two Minute Papers addressing the sim-to-real gap to improve robot task performance.
updated: 2026-05-23
group: engineering-systems-robotics-autonomous-vehicles
---
# DreamDojo AI: Bridging Sim2Real Gap

[[concepts/dreamdojo-ai|DreamDojo AI]] represents [[entities/nvidia|NVIDIA]]'s approach to addressing the sim-to-real gap in [[concepts/robotics|robotics]], a fundamental challenge in the field where simulations often fail to accurately transfer to physical robot performance. The gap exists because simulated environments cannot perfectly capture all [[concepts/material-properties|physical properties]], [[concepts/friction|friction]] coefficients, material properties, and dynamic interactions present in the real world. DreamDojo aims to reduce this discrepancy by improving how robots trained in [[concepts/simulation|simulation]] can effectively perform tasks in physical environments.

## Technical Approach

The system enables robots to learn complex manipulation and locomotion tasks by [[concepts/training|training]] on simulated data while developing [[concepts/robustness|robustness]] to real-world variations. By using simulation as a training ground, robots can safely explore large action spaces and learn from diverse [[concepts/scenarios|scenarios]] without the [[concepts/cost|cost]] and [[concepts/safety-concerns|safety concerns]] of extensive real-world experimentation. The approach focuses on creating learned [[concepts/models|models]] that generalize better when deployed on actual robotic [[concepts/hardware|hardware]].

## Research Significance

This work addresses a persistent problem in robotics research and development: the inefficiency of purely [[concepts/simulation-based-training|simulation-based training]] when applied to physical systems. By reducing the performance gap between simulated and real-world execution, DreamDojo contributes to making robot [[concepts/learning|learning]] more practical and cost-effective for industrial and research [[concepts/software|applications]]. The research was highlighted through [[entities/two-minute-papers|Two Minute Papers]], a platform that summarizes recent academic research in computer [[concepts/science|science]] and related fields.
