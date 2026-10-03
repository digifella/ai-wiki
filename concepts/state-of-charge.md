---
type: concept
domain: health-wellbeing
tags:
  - "battery"
  - "ev"
  - "energy-storage"
  - "soc"
  - "degradation"
  - "engineering"
  - "battery-management"
  - "capacity-estimation"
  - "degradation-mitigation"
  - "lithium-ion"
  - "thermal-management"
  - "depth-of-discharge"
aliases:
  - "SoC"
  - "battery state of charge"
  - "remaining battery capacity"
summary: State of Charge measures the remaining energy in a battery as a percentage of nominal capacity and is the primary variable controlled by battery management systems to optimize safety, efficiency, and lifespan.
updated: 2026-07-12
group: health-practice-patient-knowledge
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

# State of Charge

**State of Charge (SoC)** quantifies the remaining energy in a Battery as a percentage of its nominal capacity. It functions as the energy equivalent of a fuel gauge and is the primary variable controlled by [[concepts/electric-vehicle-ev-battery-management|Battery Management System]] [[concepts/algorithms|algorithms]] to ensure safety, efficiency, and longevity.

## Technical Characteristics
- **Definition:** $SoC = \frac{C_{available}}{C_{nominal}} \times 100\%$.
- **Estimation:** Calculated via voltage-current curves, Coulomb counting, and impedance tracking; accuracy drifts as State of [[concepts/health|Health]] declines.
- **Operational Constraints:** Fast charging power is often curtailed at high SoC to mitigate lithium plating and [[concepts/heat-stress|thermal stress]]; low SoC limits may protect against copper dissolution.

## Impact on Degradation
- **[[concepts/stress|Stress]] Correlation:** Extended [[concepts/storing|retention]] at extreme SoC values (near 0% or 100%) accelerates capacity fade due to mechanical strain on electrode materials.
- **Cycle Management:** Manufacturers frequently restrict usable SoC [[entities/windows|windows]] (e.g., 10%–90%) to reduce Depth of Discharge per cycle, thereby extending total lifespan.
- **Real-[[entities/earth|World]] Data Integration:**
- Findings from [[lab-notes/2026-05-11-EV-Battery-Longevity-Actual-Degradation-Data-for-Buyers|EV Battery Longevity: Actual Degradation Data for Buyers]] provide context on SoC management outcomes in electric vehicles:
    - EV battery degradation profiles differ fundamentally from [[concepts/consumer-grade-hardware|consumer electronics]]; automotive [[concepts/lithium-ion-battery|Lithium-ion Battery]] packs exhibit slower capacity fade due to robust Thermal Management and conservative SoC operating envelopes.
    - Real-world evidence indicates minimal degradation over high-mileage usage when batteries are cycled within optimal SoC ranges, debunking misconceptions derived from smartphone battery lifespans.
    - Longevity is maximized when charging [[concepts/habits|habits]] avoid sustained high SoC states and extreme thermal conditions, aligning with [[entities/national-academies|engineering]] data on cycle [[concepts/preservation|preservation]].

## Related Concepts
- Depth of Discharge
- State of [[concepts/health|Health]]
- Cycle Life
- Coulombic Efficiency
- [[concepts/electric-vehicle-ev-battery-management|Battery Management System]]
