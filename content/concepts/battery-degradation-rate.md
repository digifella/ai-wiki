---
type: concept
domain: health-wellbeing
tags:
  - "battery-health"
  - "capacity-fade"
  - "lithium-ion"
  - "cycle-aging"
  - "calendar-aging"
  - "energy-storage"
  - "degradation-mechanisms"
aliases:
  - "capacity loss"
  - "battery aging"
  - "SOH degradation"
summary: Quantification of capacity loss or internal resistance increase in energy storage systems over time, cycles, or environmental stress, determined by calendar aging, cycle aging, and chemical mechanisms.
updated: 2026-05-23
group: health-practice-patient-knowledge
---
# Battery degradation rate

[[concepts/quantification|Quantification]] of capacity loss or internal resistance increase in energy [[entities/storage|storage]] systems over time, cycles, or environmental [[concepts/stress|stress]]. Primary determinant of Lifespan, State of [[concepts/health|health]] (SOH), and Total [[concepts/cost|cost]] of ownership.

## Mechanisms
- **Calendar aging:** Capacity fade during storage [[concepts/assistive-technology|at]] specific [[concepts/state-of-charge]] and temperatures.
- **Cycle aging:** Wear from charge/discharge cycles, exacerbated by high Depth of discharge and C-rate.
- **SEI growth:** [[concepts/solid-electrolyte-interphase|Solid electrolyte interphase]] thickening increases impedance [[concepts/lithium-ion-battery]].
- **Cathode [[concepts/structure|structure]] change:** [[concepts/phase|Phase]] transitions or dissolution in NMC and LCO chemistries.

## EV vs. Portable Electronics Profiles
Real-world telemetry reveals divergent degradation trajectories despite shared Lithium-ion chemistry:
- **Smartphone batteries** often suffer rapid capacity decline (20%+ in <3 years) due to thermal constraints, high charge currents, and aggressive usage profiles Engineering with Rosie.
- **EV batteries** exhibit slower, quasi-linear degradation; fleet data indicates >70% retention after 150,000 miles for many NMC and LFP chemistries under normal use.
- EV [[concepts/electric-vehicle-ev-battery-management|Battery Management System]] implementations enforce stricter SOC [[entities/windows|windows]] and active cooling, reducing stress factors absent in consumer handhelds.
- Comparative analysis of actual buyer data confirms EV longevity significantly exceeds consumer electronics expectations: [[lab-notes/2026-05-11-EV-Battery-Longevity-Actual-Degradation-Data-for-Buyers|EV Battery Longevity: Actual Degradation Data for Buyers]].

## Mitigation Strategies
- Avoid extreme SOC extremes (<10%, >90%) unless necessary for [[concepts/range|range]].
- Utilize active Thermal management to maintain optimal temperature bands during charging.
- Prefer LFP chemistry for cycle life in stationary or long-duration [[concepts/software|applications]].
- Reduce fast-charging frequency to limit lithium plating risks.
