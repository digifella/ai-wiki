---
type: concept
domain: science-physics-research
tags:
  - "physics"
  - "mechanics"
  - "collisions"
  - "elasticity"
  - "energy-dissipation"
  - "kinematics"
aliases:
  - "COR"
  - "Restitution Coefficient"
  - "Elasticity Coefficient"
  - "Collision Elasticity"
summary: The coefficient of restitution is a dimensionless measure of collision elasticity defined as the ratio of relative speeds after and before impact.
updated: 2026-07-11
group: physics-fundamental-theory
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Coefficient of Restitution

The **Coefficient of Restitution** ($e$) is a dimensionless measure of the elasticity of a collision between two bodies. It is defined as the ratio of the relative [[concepts/speed|speed]] after collision to the relative speed before collision along the line of impact.

$$ e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}} $$

Where:
- $v_{1i}, v_{2i}$ are initial velocities.
- $v_{1f}, v_{2f}$ are final velocities.

## Key Properties
- **Range**: $0 \le e \le 1$ for passive collisions.
  - $e = 1$: Perfectly [[concepts/elastic-collision|elastic collision]] (kinetic energy conserved).
  - $e = 0$: Perfectly inelastic collision (maximum kinetic energy loss; objects stick together).
  - $0 < e < 1$: Inelastic collision (partial energy loss to heat, sound, deformation).
- **Energy Loss**: The fraction of kinetic energy lost is proportional to $(1 - e^2)$.

## Complex Collision Dynamics
While $e$ is often treated as a constant material property, real-[[entities/earth|world]] interactions involve complex dependencies on impact velocity, temperature, and object geometry.

- **Composite Systems**: Combining two highly elastic objects does not guarantee an optimal rebound or simple additive elasticity. Interactions between layers can lead to [[concepts/energy-dissipation|energy dissipation]] [[concepts/causes|mechanisms]] that reduce the effective coefficient of restitution for the system.
- **The [[concepts/concept-of-nothingness|Zero]] Bounce Paradox**: Specific configurations of similarly elastic objects can result in negligible bounce despite high individual material elasticity, due to [[concepts/phase|phase]] cancellation or [[concepts/material-damping|internal damping]] effects during impact [[lab-notes/2026-06-26-The-Paradox-of-Zero-Bounce-from-Similarly-Elastic-Object|The Paradox of Zero Bounce from Similarly Elastic Objects]].

## References
- [The Paradox of Zero Bounce from Similarly Elastic Objects](https://www.youtube.com/watch?v=EP1mYq8hLIY)
