---
type: concept
domain: science-physics-research
tags:
  - "lithium-ion"
  - "battery-chemistry"
  - "electrochemistry"
  - "energy-storage"
  - "degradation-mechanisms"
  - "cathode-anode"
  - "electrolyte"
aliases:
  - "Li-ion battery chemistry"
  - "lithium-ion cell chemistry"
  - "rechargeable battery electrochemistry"
summary: Lithium-ion batteries store energy through reversible lithium-ion migration between cathode and anode through an electrolyte, with performance limited by degradation mechanisms including SEI growth, lithium plating, and
updated: 2026-07-11
group: materials-chemistry-mechanisms
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Lithium-ion battery chemistry

Rechargeable electrochemical cells storing energy via lithium-ion migration between cathode and anode through a liquid/gel/polymer electrolyte. Dominant technology for portable-electronics, EVs, and grid-[[entities/storage|storage]] due to high energy-[[concepts/density|density]], power density, and low self-discharge.

## Core Components
- **Cathode:** Lithium [[concepts/metal|metal]] oxide/phosphate determining voltage profile, capacity, and stability. Common variants: NMC, LFP, LCO, NCA.
- **Anode:** Typically graphite or silicon-composite hosts lithium ions during charge; determines capacity and plating susceptibility.
- **Separator:** Porous polymer membrane preventing internal short circuits while permitting ion transport.
- **BMS:** [[concepts/electric-vehicle-ev-battery-management|Battery-management-system]] monitors cell voltage, temperature, and SoC/SoH; executes cell balancing, safety cutoffs, and thermal alerts.

## Degradation Mechanisms
- **SEI Growth:** [[concepts/solid-electrolyte-interphase]] thickening on anode consumes active lithium inventory and increases internal resistance.
- **Lithium Plating:** Metallic lithium deposition on anode during fast charging or low-temperature operation, reducing capacity and posing dendrite risks.
- **Cathode Structural Fatigue:** Crystal lattice distortion, [[concepts/phase|phase]] transitions, and transition metal dissolution over cycling.
- **Electrolyte Decomposition:** Oxidation/reduction reactions generating gas, impedance rise, and loss of electrolyte volume.
- **[[concepts/heat-stress|Thermal Stress]]:** Elevated temperatures accelerate parasitic side reactions; mitigation requires active thermal-management-systems.

## Longevity & Degradation Data
- **EV vs. [[concepts/consumer-grade-hardware|Consumer Electronics]]:**
- *   EV battery degradation rates are markedly lower than smartphone batteries due to robust [[concepts/thermal-regulation|thermal regulation]], [[concepts/accuracy|precision]] cell balancing, and conservative [[concepts/state-of-charge]] operating [[entities/windows|windows]] [[lab-notes/2026-05-11-EV-Battery-Longevity-Actual-Degradation-Data-for-Buyers|EV Battery Longevity: Actual Degradation Data for Buyers]].
- *   Real-[[entities/earth|world]] telemetry refutes rapid-[[concepts/battery-degradation-rate|capacity-loss]] assumptions; degradation curves demonstrate [[concepts/storing|retention]] sufficient for full vehicle lifecycle.
- **Chemistry Impact:**
- *   LFP chemistry typically exhibits superior cycle-life and calendar stability compared to high-nickel NMC variants, though with reduced energy density.
- *   Degradation kinetics are sensitive to C-rate, depth of discharge, ambient temperature, and voltage limits.

## Key Metrics
- **State of [[concepts/health|Health]] (SoH):** Ratio of current maximum capacity to nominal design capacity.
- **Cycle Life:** Number of charge/discharge cycles until capacity falls to a defined threshold (typically 80% SoH).
- **C-Rate:** Charge or discharge current normalized to battery capacity.
- **Impedance Growth:** Increase in internal resistance correlated with aging and power capability loss.
