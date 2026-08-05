---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "etl"
  - "data-pipeline"
  - "data-integration"
  - "data-engineering"
  - "extract-transform-load"
  - "llm-data-curation"
  - "ai-infrastructure"
aliases:
  - "Extract Transform Load"
  - "ETL Process"
  - "Data ETL"
  - "Data Engineering"
summary: Data engineering encompasses the design and construction of systems for collecting, storing, and analyzing data at scale. Traditionally defined by ETL pipelines for structured analytics, the discipline now extends to unstructured data curation for AI/LLM training, emphasizing quality over synthetic generation.
updated: 2026-07-14
group: automation-scheduling-sync
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Data Engineering

Data engineering is the discipline of designing and building systems for collecting, storing, and analyzing [[concepts/big-data|data at scale]]. While traditionally associated with [[concepts/etl|ETL]] workflows for structured analytics, modern data engineering increasingly addresses the curation of [[concepts/unstructured-data|unstructured data]] for [[concepts/llm|Large Language Model]] training and inference.

## Core Workflow: ETL

[[concepts/etl|ETL]] (Extract, Transform, Load) is the foundational data integration process used to move data from source systems into target systems, typically data warehouses or analytics platforms. The three-stage pipeline addresses the practical challenge of making heterogeneous data sources usable for analysis and reporting. ETL tools automate these workflows, handling data [[concepts/exercise|movement]] at scale and on recurring schedules.

### Extract
The extraction [[concepts/phase|phase]] retrieves data from one or more source systems. Sources may include relational databases, [[concepts/open-standard-protocols|APIs]], files, logs, or [[concepts/business-applications|enterprise applications]]. Extraction can be full (capturing all data) or incremental (capturing only changes since the last run). This phase prioritizes data availability without modifying the original sources.

### Transform
Transformation is the intermediate processing stage where raw data is cleaned, validated, normalized, and restructured to meet business requirements. Common operations include filtering noise, handling missing values, and schema alignment.

### Load
The loading phase writes the transformed data into the target destination, such as a data warehouse, data lake, or operational database, making it available for downstream consumption.

## Modern Extensions: AI Data Curation

Beyond traditional [[concepts/json-structuring|structured data]] pipelines, data engineering now encompasses the rigorous curation of datasets for AI [[concepts/training-process|model training]]. Recent industry shifts highlight a move away from synthetic data generation toward [[concepts/excellence|high-quality]], curated [[concepts/real-world-data|real-world data]].

*   **Hill-Climbing Optimization**: Microsoft's approach to [[concepts/frontier-llm|frontier LLM]] development, detailed in their report "Building a Hill-Climbing Machine," utilizes iterative data selection strategies to optimize [[concepts/vllm|model performance]] [[lab-notes/2026-07-14-Microsofts-Frontier-LLM-Data-Engineering-Hill-Climbing-D|Microsoft's Frontier LLM Data Engineering: Hill-Climbing, Data Curation, No Synthetics]].
*   **[[concepts/data-integrity|Data Quality]] over Quantity**: The MAI-Thinking-1 [[concepts/knowledge-acquisition|model development]] emphasizes that precise [[concepts/data-curation|data curation]] yields better [[concepts/reasoning-capabilities|reasoning capabilities]] than scaling synthetic data volumes.
*   **No Synthetics Strategy**: A deliberate engineering choice to avoid synthetic data in critical training phases, relying instead on high-fidelity human-generated or verified sources to prevent model collapse or [[concepts/data-hallucination|hallucination]] amplification.

## References

*   [Microsoft's Frontier LLM Data Engineering: Hill-Climbing, Data Curation, No Synthetics](https://www.youtube.com/watch?v=aD93kfArOik)
