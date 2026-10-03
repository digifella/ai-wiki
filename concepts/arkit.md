---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "arkit"
  - "lidar-scanning"
  - "iphone-pro"
  - "3d-gaussian-splatting"
  - "3d-modeling"
summary: A workflow for using iPhone Pro LiDAR scanning to create 3D Gaussian Splatting models.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
group: applied-ai-workflows
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Arkit

Arkit is a technical workflow designed to convert raw [[concepts/lidar|LiDAR]] depth data captured by [[entities/iphone-pro|iPhone Pro]] devices into [[concepts/3d-gaussian-splatting|3D Gaussian Splatting]] (3DGS) models. iPhone Pro models feature integrated LiDAR scanners that measure distances to surfaces within physical environments, generating initial three-dimensional [[concepts/3d-point-clouds|point cloud data]]. This workflow serves as the bridge between raw sensor input and high-fidelity digital representations.

The process involves processing the captured point cloud data to create 3DGS representations, a neural [[concepts/fat-rendering|rendering]] technique that encodes both scene geometry and [[concepts/presence|appearance]]. By leveraging the depth information from the LiDAR scanner, the workflow enables the creation of detailed 3D models that can be rendered with high visual fidelity, preserving the spatial characteristics of the original physical environment.
