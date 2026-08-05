---
type: concept
domain: science-physics-research
group: engineering-systems-robotics-autonomous-vehicles
tags:
  - "concept"
  - "lidar-scanning"
  - "iphone-lidar"
  - "3d-reconstruction"
  - "3dgs-models"
  - "depth-sensing"
aliases:
  - "iPhone LiDAR Scanning"
  - "Mobile LiDAR Capture"
summary: LiDAR scanning technique using iPhone Pro devices to capture depth data for creating 3D Gaussian Splatting models.
updated: 2026-07-16
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# LiDAR Scanning

LiDAR (Light Detection and Ranging) is a remote sensing technology that uses laser pulses to measure distances and create detailed spatial maps. Modern smartphones, including iPhone Pro models, integrate LiDAR sensors that emit infrared light and measure the time it takes for reflections to return. This time-of-flight measurement allows devices to calculate precise depth information for objects and environments within their field of view. The resulting depth data captures spatial geometry with millimeter-level accuracy across a scene.

## iPhone Pro Implementation

iPhone Pro devices equipped with LiDAR scanners can capture depth information in real-time as users move the device through an environment. The sensor generates a point cloud—a collection of three-dimensional coordinates representing surfaces and objects detected by the laser. This depth data can be collected from multiple camera positions and angles to build comprehensive spatial representations. Third-party applications leverage this capability to record scenes for various applications including augmented reality, architectural documentation, and 3D model creation.

## 3D Gaussian Splatting

The depth data captured by LiDAR scanners can be processed into 3D Gaussian Splatting models, a technique for representing scenes as a collection of Gaussian functions distributed in three-dimensional space. This approach provides an efficient method for storing and rendering detailed 3D reconstructions. By combining multiple LiDAR scans from different perspectives, software can build increasingly accurate spatial models suitable for visualization, analysis, or further computational processing.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
