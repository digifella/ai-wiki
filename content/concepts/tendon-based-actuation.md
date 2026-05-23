---
type: concept
domain: science-physics
tags:
  - "robotics"
  - "actuation"
  - "mechanics"
  - "tendon-driven"
  - "humanoid-robotics"
  - "remote-actuation"
  - "tendon-driven-actuation"
  - "compliant-mechanisms"
  - "dexterous-manipulation"
  - "cable-driven-systems"
aliases:
  - "cable-driven actuation"
  - "tendon-driven robotics"
  - "flexible transmission systems"
summary: Tendon-based actuation transmits torque via flexible cables or tendons from remote motors to joints, enabling lighter distal limbs, inherent compliance, and biomimetic motion in robotic systems.
updated: 2026-05-23
group: physics-fundamental-theory
---
# Tendon-Based Actuation

[[concepts/ambition|Drive]] mechanism transmitting torque via flexible elements (cables, tendons, strings) from remote actuators to joints. Enables distal [[concepts/weight-loss|weight reduction]], inherent [[concepts/compliance|compliance]], and biomimetic kinematics. Prevalent in Humanoid [[concepts/robotics|Robotics]], prosthetics, and dexterous manipulators.

## Key Properties
- **Remote Actuation:** Decouples motor mass from moving links, minimizing inertia and improving dynamic responsiveness.
- **Compliance:** Tendon elasticity provides passive damping, energy [[entities/storage|storage]], and collision safety.
- **Force Multiplication:** Pulley systems allow torque amplification or range-of-motion [[concepts/computational-scaling|scaling]].
- **Nonlinear Dynamics:** Stiffness varies with tendon tension, stretch, and [[concepts/friction|friction]], complicating [[concepts/power|control]] [[concepts/models|models]].

## Implementations & Examples
- **Robotic Hands:** Compact multi-DOF fingers driven by centralized tendon bundles; e.g., [[entities/wuji-hand|Wuji Hand]].
- **Full-Body Humanoids:** Musculoskeletal analogs for agile locomotion and natural motion profiles.
- **Prosthetics/Exoskeletons:** Lightweight assistive interfaces requiring low limb inertia.

## Recent Developments
- **[[entities/figure-helix|Figure Helix]]:** Analysis of Figure Helix robots [[concepts/highlights|highlights]] specific actuation advancements addressing mechanical bottlenecks in humanoid [[concepts/hardware|hardware]] [[lab-notes/2026-05-13-Advancements-in-Humanoid-Robotics-Figure-Helix-Wuji-Hand|Advancements in Humanoid Robotics: Figure Helix, Wuji Hand, and Actuation Systems]].
- **Wuji Hand:** [[concepts/integration|Integration]] of Wuji Hand demonstrates progress in dexterous manipulation actuation, emphasizing tendon routing efficiency and control precision.
- **Hardware Constraints:** Expert discussion identifies [[concepts/actuation-systems|actuation systems]] as critical limitations in current humanoid [[concepts/deployment|deployment]], distinct from AI challenges [[lab-notes/2026-05-13-Advancements-in-Humanoid-Robotics-Figure-Helix-Wuji-Hand|Advancements in Humanoid Robotics: Figure Helix, Wuji Hand, and Actuation Systems]].

## Related Concepts
- Remote Actuation
- Compliant Mechanisms
- Robot Actuation
- Biomimetics
- Figure 01
