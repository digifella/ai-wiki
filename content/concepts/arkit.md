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
aliases:
  - "ARKit"
summary: A workflow for using iPhone Pro LiDAR scanning to create 3D Gaussian Splatting models.
updated: 2026-05-23
group: applied-ai-workflows
---
# Arkit

Arkit is a [[concepts/workflow|workflow]] for converting [[concepts/lidar|LiDAR]] point cloud data captured by [[entities/iphone-pro|iPhone Pro]] devices into [[concepts/3d-gaussian-splatting|3D Gaussian Splatting]] (3DGS) [[concepts/models|models]]. The process uses the LiDAR scanner built into compatible iPhone models to capture spatial depth information of physical environments or objects. This raw point cloud data is then processed through computational steps to produce a 3DGS representation, a modern 3D format that enables efficient rendering and visualization of complex scenes.

## Data Acquisition

The workflow begins with [[concepts/lidar-scanning|LiDAR scanning]] on an iPhone Pro device. The built-in LiDAR sensor measures distances to surfaces in the environment, generating a dense point cloud that records spatial coordinates and depth information. The captured data can represent objects, interior spaces, or outdoor scenes depending on the scanning conditions and duration.

## Processing and Conversion

Once captured, the point cloud data undergoes processing to convert it into a 3D Gaussian Splatting model. This involves fitting Gaussian primitives to the point cloud data, which allows the scene to be represented compactly and rendered efficiently. The resulting 3DGS model can be viewed and manipulated without requiring the full resolution of the original point cloud, making it practical for [[entities/storage|storage]], sharing, and real-time visualization [[concepts/software|applications]].
