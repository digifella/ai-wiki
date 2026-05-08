---
type: concept
domain: tools-platforms
group: developer-tooling-clis
tags:
  - "concept"
  - "arkit"
  - "lidar-scanning"
  - "iphone-pro"
  - "3d-gaussian-splatting"
  - "3d-modeling"
aliases:
  - "ARKit"
summary: A workflow for using iPhone Pro LiDAR scanning to create 3D Gaussian Splatting models.
updated: 2026-05-01
---
# Arkit

Arkit is a workflow for converting LiDAR point cloud data captured by [[entities/iphone-pro|iPhone Pro]] devices into [[concepts/3d-gaussian-splatting|3D Gaussian Splatting]] (3DGS) models. The process leverages the LiDAR scanner built into compatible iPhone Pro models to capture spatial depth information of physical environments or objects. This raw point cloud data is then processed through a series of computational steps to produce a 3DGS representation, a modern 3D format that enables efficient rendering and visualization of complex scenes.

## Data Acquisition

The workflow begins with [[concepts/lidar-scanning|LiDAR scanning]] using compatible iPhone Pro models, which include devices equipped with LiDAR depth sensors. These sensors emit infrared light pulses and measure their reflections to build precise spatial maps of surrounding environments. The captured data forms a point cloud—a collection of three-dimensional coordinates representing the scanned surface geometry.

## Processing and Output

The point cloud data is then processed through algorithmic conversion steps designed to translate the discrete point measurements into a 3D Gaussian Splatting representation. This involves fitting Gaussian functions to the point cloud data, which allows for efficient [[entities/storage|storage]] and real-time rendering of the 3D scene. The resulting 3DGS models can be viewed, manipulated, and integrated into various 3D [[concepts/software|applications]] and visualization platforms.
