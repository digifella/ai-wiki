---
type: concept
domain: health-wellbeing
tags:
  - "energy-storage"
  - "battery-technology"
  - "lithium-ion"
  - "electrochemistry"
  - "ev-infrastructure"
  - "portable-electronics"
  - "electric-vehicles"
  - "battery-degradation"
  - "solid-state"
aliases:
  - "Li-ion battery"
  - "Lithium-ion rechargeable battery"
  - "LIB"
summary: A rechargeable battery technology using lithium-ion intercalation between anode and cathode, offering high energy density of 150–250 Wh/kg with cycle life of 500–2000+ cycles depending on chemistry.
updated: 2026-05-23
group: health-practice-patient-knowledge
---
# Lithium-Ion Battery

## Overview
High-energy-density Rechargeable Battery utilizing Lithium ions moving between anode and cathode during charge/discharge cycles. Dominant technology for Portable Electronics, Electric Vehicles, and grid-scale Energy [[entities/storage|Storage]].

## Chemistry & Components
- **Mechanism:** Intercalation of Lithium ions; voltage derived from potential difference between electrodes.
- **Anode:** Typically Graphite or [[concepts/silicon]]; hosts ions during discharge.
- **Cathode:** Determines voltage/capacity; variants include NMC, LFP, [[concepts/neural-cellular-automata|NCA]], LCO.
- **Electrolyte:** Lithium salt [[concepts/solution|solution]] enabling ion transport; Solid-State Battery research aims to replace liquid electrolytes for safety/energy gains.
- **Separator:** Porous membrane preventing short circuits while allowing ion [[concepts/flow|flow]].

## Performance Characteristics
- **Energy Density:** 150–250 Wh/kg (commercial); significantly higher than Lead-Acid Battery or Nickel-Metal Hydride.
- **Self-Discharge:** Low (~1–2% per month); superior to NiMH and NiCd batteries.
- **[[concepts/memory|Memory]] Effect:** Negligible; allows partial cycling without [[concepts/battery-degradation-rate|capacity loss]].
- **Cycle Life:** 500–2000+ cycles depending on chemistry and depth of discharge (DoD); LFP variants exceed 3000 cycles.

## Degradation & Longevity
- **Factors:** Calendar Aging, cycle count, high temperature, high [[concepts/state-of-charge|State of Charge]] (SoC), fast charging rates.
- **Mechanisms:** [[concepts/solid-electrolyte-interphase|Solid Electrolyte Interphase]] (SEI) growth, lithium plating, cathode structural collapse, electrolyte decomposition.
- **Mitigation:** [[concepts/electric-vehicle-ev-battery-management|Battery Management System]] (BMS) regulates SoC [[entities/windows|windows]], thermal management, and charging curves.
- **Real-World EV Data:**
    - [[lab-notes/2026-05-11-EV-Battery-Longevity-Actual-Degradation-Data-for-Buyers|EV Battery Longevity: Actual Degradation Data for Buyers]]
    - **Longevity vs. Consumer Electronics:** Electric Vehicle batteries exhibit markedly slower degradation rates compared to Smartphone batteries, despite utilizing similar Lithium-Ion Battery chemistries, due to optimized thermal management, conservative SoC limits, and larger cell counts distributing [[concepts/stress|stress]].
    - **Retention Metrics:** Empirical analysis confirms high capacity retention over typical vehicle lifecycles; degradation often plateaus rather than following a linear decline, alleviating buyer concerns regarding rapid capacity loss.

## Safety & Hazards
- **Thermal Runaway:** Exothermic reaction chain triggered by mechanical damage, overcharge, or internal short; mitigation includes cell [[concepts/design|design]], fuses, and [[concepts/cooling-systems|cooling systems]].
- **Toxicity:** Electrolytes and metals require careful Recycling and disposal; cobalt content in some chemistries raises ethical sourcing concerns.

## Applications
- **Transportation:** Electric Vehicle, eBike, Drone propulsion.
- **Consumer:** Laptop, Tablet, [[concepts/power|Power]] Bank.
- **Industrial:** Grid stabilization, UPS systems, [[concepts/robotics|robotics]].
