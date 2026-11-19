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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Arkit

Arkit is a technical workflow designed to convert raw LiDAR depth data captured by iPhone Pro devices into 3D Gaussian Splatting (3DGS) models. iPhone Pro models feature integrated LiDAR scanners that measure distances to surfaces within physical environments, generating initial three-dimensional point cloud data. This workflow serves as the bridge between raw sensor input and high-fidelity digital representations, enabling the creation of detailed spatial maps from mobile hardware.

The process involves processing the captured point cloud data to align and refine the geometric structure. By leveraging the depth information provided by the LiDAR sensor, the system enhances the accuracy of the spatial mapping, which is critical for generating stable and visually coherent 3D Gaussian Splatting outputs. This approach allows for the rapid creation of detailed 3D assets using consumer-grade mobile devices rather than specialized professional scanning equipment.

## Technical Implementation

The workflow integrates the depth data with color information from the device's camera to construct the final 3DGS model. The LiDAR scanner provides precise distance measurements that help resolve ambiguities in textureless or reflective surfaces, which are common challenges in traditional photogrammetry. The resulting models retain high geometric fidelity while maintaining the efficiency and rendering speed characteristic of Gaussian Splatting techniques.
