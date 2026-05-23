---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "robotics"
  - "sim2real"
  - "ai-training"
  - "nvidia"
  - "task-learning"
aliases:
  - "DreamDojo"
  - "DreamDojo AI"
summary: An AI system developed by NVIDIA that addresses the simulation-to-reality gap in robotic task learning.
updated: 2026-05-23
group: applied-ai-workflows
---
# Dreamdojo AI

[[concepts/physical-environment-modeling|DreamDojo AI]] is a robotic [[concepts/learning|learning]] system developed by [[entities/nvidia|NVIDIA]] that addresses the [[concepts/persistent-limitations-in-accurately-translating-simulation-training-to-real|simulation-to-reality gap]] in robot task learning. The [[concepts/sim2real|sim2real]] problem occurs when [[concepts/models|models]] trained in [[concepts/simulation|simulation]] fail to perform effectively in physical environments due to differences in [[concepts/physics-simulation|physics simulation]], sensor [[concepts/accuracy|accuracy]], and environmental conditions. DreamDojo AI aims to enable robots to learn complex manipulation tasks more reliably when transferred from [[concepts/simulation-based-training|simulated training]] to real-world [[concepts/deployment|deployment]].

## Approach and Mechanism

The system uses a combination of simulation-based [[concepts/training|training]] and techniques designed to reduce the domain gap between virtual and physical environments. Rather than relying solely on [[concepts/physics|physics]] simulators, DreamDojo incorporates methods to [[entities/make|make]] learned [[concepts/policies|policies]] more robust to the inevitable differences encountered in reality, allowing robots to generalize from their simulated training experience to actual robotic [[concepts/hardware|hardware]].

## Applications

The framework targets complex robotic manipulation and task learning [[concepts/scenarios|scenarios]] where traditional sim2real approaches have struggled. By improving the transfer of learned behaviors from simulation to physical robots, DreamDojo AI expands the [[concepts/range|range]] of tasks that can be practically automated, particularly in areas requiring dexterous manipulation or adaptive behavior.
## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-DreamDojo-AI-Bridging-Robotics-Sim2Real-Gap-for-Complex-Tasks|DreamDojo AI Bridging Robotics Sim2Real Gap for Complex Tasks]] · [▶ source](https://www.youtube.com/watch?v=mFSFvKquXwI)