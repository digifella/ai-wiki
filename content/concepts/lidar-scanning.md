---
type: concept
domain: science-physics
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
updated: 2026-05-01
---
# Lidar Scanning

LiDAR (Light Detection and Ranging) is a remote sensing technology that uses laser pulses to measure distances and create detailed spatial maps. Modern smartphones, including [[entities/iphone-pro|iPhone Pro]] models, integrate LiDAR sensors that emit infrared light and measure the time it takes for reflections to return, enabling devices to calculate depth information for objects and environments in their field of view.

## iPhone Pro Implementation

iPhone Pro devices equipped with LiDAR sensors capture depth data that complements their standard camera systems. This depth information can be processed to generate detailed 3D models of scanned environments and objects. The sensor operates at close to [[entities/medium|medium]] range, making it suitable for indoor spaces and nearby outdoor subjects rather than distant landscape mapping.

## 3D Gaussian Splatting

Depth data from LiDAR scanning can be used as input for 3D reconstruction techniques such as Gaussian Splatting, a method that represents 3D scenes as collections of Gaussian functions. This approach allows for efficient rendering and [[entities/storage|storage]] of complex spatial data captured through LiDAR, converting raw depth measurements into structured three-dimensional models that can be viewed and manipulated digitally.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!