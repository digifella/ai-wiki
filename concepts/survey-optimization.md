---
type: concept
domain: ai-agents
tags:
  - "astronomy"
  - "observational-campaigns"
  - "adaptive-observing"
  - "data-pipeline-efficiency"
  - "transient-detection"
  - "resource-optimization"
aliases:
  - "Astronomical Survey Optimization"
  - "Observational Campaign Strategy"
  - "Survey Design Optimization"
  - "Transient Detection Optimization"
summary: Survey optimization is the strategic design of observational campaigns to maximize information gain and data quality while minimizing resource expenditure, particularly in astronomical contexts.
updated: 2026-07-12
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Survey Optimization

[[concepts/survey|Survey]] optimization refers to the strategic design and execution of observational campaigns to maximize information gain, detection efficiency, and [[concepts/data-integrity|data quality]] while minimizing resource expenditure (time, budget, computational load). In astronomical contexts, this involves balancing cadence, depth, breadth, and real-time processing capabilities to detect transient or faint objects.

## Core Principles

- **Cadence vs. Depth Trade-off**: Optimizing the frequency of observations versus the integration time per [[concepts/exposure|exposure]] to capture specific phenomena (e.g., fast transients vs. deep-field structures).
- **Adaptive Observing**: Real-time adjustment of survey parameters based on incoming data to prioritize targets of high scientific value.
- **[[concepts/data-pipeline|Data Pipeline]] Efficiency**: Ensuring that the volume of raw data can be processed, filtered, and stored without bottlenecks that degrade scientific return.

## Recent Developments & Case Studies

- **Vera C. Rubin Observatory (LSST)**: The Large Synoptic Survey Telescope is designed to scan the entire visible sky every three nights, generating ~20TB of data nightly. Optimization challenges include machine learning-based artifact rejection and efficient minor planet orbit determination from sparse early data.
	- See: [[lab-notes/2026-05-31-Vera-Rubin-Observatory-Initial-Data-Reveals-11000-New-Mi|Vera Rubin Observatory: Initial Data Reveals 11,000 New Minor Planets]] for details on the April 2026 data submission revealing 11,000 new minor planets, highlighting the [[concepts/success|success]] of automated detection pipelines in handling unprecedented dataset scale.

## Related Concepts

- Astronomical [[concepts/photometry|Photometry]]
- Transient [[concepts/astronomy|Astronomy]]
- [[concepts/machine-learning|Machine Learning]] in [[concepts/astronomy|Astronomy]]
- [[concepts/data-management|Data Management]] Systems
