---
type: concept
domain: ai-agents
group: applied-ai-workflows
tags:
  - "concept"
  - "arkit"
  - "lidar-scanning"
  - "iphone-pro"
  - "3d-gaussian-splatting"
  - "3d-modeling"
summary: A workflow for using iPhone Pro LiDAR scanning to create 3D Gaussian Splatting models.
updated: 2026-07-13
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Arkit

Arkit is a workflow for converting LiDAR depth data captured by iPhone Pro devices into 3D Gaussian Splatting (3DGS) models. iPhone Pro models contain integrated LiDAR scanners that measure distance to surfaces across physical environments, generating raw three-dimensional point cloud data. This workflow processes that captured data into 3DGS representations, a neural rendering technique that encodes scene geometry and appearance using anisotropic Gaussians rather than traditional polygon meshes or volumetric grids.

## Technical Process

The workflow leverages the LiDAR scanner's depth measurements to acquire spatial information of an environment, which is then transformed into the 3DGS format through algorithmic processing. The resulting models can be rendered efficiently on standard hardware and allow for novel viewpoint synthesis from the captured scene data.

## Applications and Use Cases

3DGS models created through this workflow are useful for applications requiring real-time 3D scene representation, including virtual scene reconstruction, spatial mapping, and immersive visualization. The accessibility of LiDAR capture on consumer iPhone Pro devices makes this workflow practical for capturing and converting real-world scenes into neural 3D models without specialized scanning equipment.
