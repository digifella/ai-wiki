---
type: concept
domain: history-anthropology
tags:
  - "battery-degradation"
  - "lithium-ion-chemistry"
  - "energy-storage"
  - "electric-vehicles"
  - "cycle-testing"
  - "thermal-management"
  - "electrode-stress"
aliases:
  - "cycle depth"
  - "battery cycle count"
  - "charge-discharge cycles"
summary: Charging cycle life measures the number of complete charge-discharge sequences a storage system can sustain before capacity falls below 80%, determined by discharge depth, state of charge, temperature, chemistry type, an
updated: 2026-07-11
group: media-society-daily-life
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=history-anthropology name=History & Anthropology

# Charging Cycle Life

**Charging Cycle Life** defines the number of complete charge-discharge sequences a [[entities/storage|storage]] system sustains before capacity degrades below a specified threshold (typically 80%). A cycle represents 100% throughput; partial cycles aggregate (e.g., two 50% discharges = one cycle). Distinct from Calendar Life, cycle life measures wear induced by active usage.

## Determinants
- Depth of Discharge (DoD): Shallow cycling extends lifespan; high DoD accelerates degradation.
- [[concepts/state-of-charge]] (SoC): Prolonged high/low SoC induces structural [[concepts/stress|stress]] on Electrode materials.
- Temperature: Heat accelerates [[concepts/solid-electrolyte-interphase|Solid Electrolyte Interphase]] growth; cold increases internal resistance.
- Chemistry: LFP exhibits superior cycle stability vs. NMC; Solid-State electrolytes aim to eliminate dendrite formation.
- C-Rate: High current charging/discharging increases thermal load and mechanical strain.

## Application Context: Electric Vehicles
- Insights from `[[lab-notes/2026-05-11-EV-Battery-Longevity-Actual-Degradation-Data-for-Buyers|EV Battery Longevity: Actual Degradation Data for Buyers]]`:
  - EV battery longevity often misperceived by analogy to smartphone batteries; EV packs demonstrate significantly reduced degradation rates due to scalable [[concepts/electric-vehicle-ev-battery-management|Battery Management System]] (BMS) capabilities, active thermal management, and lower energy [[concepts/density|density]] constraints compared to portable electronics.
  - While EVs utilize Lithium-Ion chemistry similar to consumer devices, the implementation differs drastically: EV cells operate within optimized voltage [[entities/windows|windows]] and benefit from cell balancing [[concepts/algorithms|algorithms]] that prevent individual cell over-stress, yielding cycle lives frequently exceeding 1,000–2,000 full cycles.
