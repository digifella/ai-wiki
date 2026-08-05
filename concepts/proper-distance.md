---
type: concept
domain: cosmology-space
tags:
  - "cosmology"
  - "proper-distance"
  - "metric-expansion"
  - "observable-universe"
  - "comoving-distance"
  - "cosmic-time"
  - "scale-factor"
  - "spacetime-geometry"
aliases:
  - "Physical Distance"
  - "Instantaneous Distance"
  - "Proper Radius"
summary: "Proper distance is the physical separation between two points measured at a specific instant of cosmic time, which increases over time due to the expansion of the universe."
updated: 2026-07-18
group: cosmology-astronomy-astrophysics
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=cosmology-space name=Cosmology & Space

# Proper Distance

**Proper distance** is the distance between two points in space measured at a specific instant of [[concepts/cosmic-time|cosmic time]]. In an expanding universe, this distance changes over time as the scale factor $a(t)$ evolves. It is distinct from **comoving distance**, which factors out the expansion of the universe, and **luminosity distance** or **angular diameter distance**, which are observational measures dependent on redshift.

## Key Characteristics

- **Instantaneous Measurement**: Proper distance requires a hypothetical ruler laid out at a fixed cosmic time $t$. It represents the physical separation between objects at that specific moment.
- **Time Dependence**: Because the universe expands, the proper distance between two comoving objects increases with time. $D_p(t) = a(t) \cdot \chi$, where $\chi$ is the comoving distance.
- **Horizon Limits**: The proper distance to the particle horizon defines the radius of the **[[concepts/observable-universe|Observable Universe]]**.

## Relation to Observable Universe Size

A common point of confusion arises regarding the [[concepts/universe-age|age of the universe]] versus the size of the observable universe.

- **Age vs. Diameter**: The universe is approximately 13.8 billion years old, yet the observable universe has a proper diameter of roughly 92–93 billion light-years.
- **Metric Expansion**: This discrepancy is resolved by understanding that space itself has expanded during the time [[concepts/light|light]] has been traveling to us. Light emitted from [[concepts/distant-galaxies|distant galaxies]] 13 billion years ago has traveled for 13 billion years, but the space it traversed has stretched, placing the source objects much farther away in proper distance today than the light-travel distance suggests.
- **Source Integration**:
	- See [[lab-notes/2026-07-17-Observable-Universe-Expansion-Age-vs.-Current-Size-Expla|Observable Universe Expansion: Age vs. Current Size Explained]] for a detailed breakdown of this paradox.
	- [[entities/dr-don-lincoln|Dr. Don Lincoln]] (Fermilab) explains that the "width" of the observable universe refers to the current proper distance to the edge of the observable region, not the distance light has traveled.

## Mathematical Context

The proper distance $D_p$ at time $t$ is related to the comoving distance $\chi$ by the scale factor $a(t)$:

$$ D_p(t) = a(t) \chi $$

For the current epoch ($t_0$), $a(t_0) = 1$, so the proper distance equals the comoving distance. However, for past [[concepts/epochs|epochs]], $a(t) < 1$, meaning proper distances were smaller.

## References

- [Observable Universe Expansion: Age vs. Current Size Explained](https://www.youtube.com/watch?v=vIJTwYOZrGU)
