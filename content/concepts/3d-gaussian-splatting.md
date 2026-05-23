---
type: concept
domain: creative-pursuits
summary: A method for high-fidelity, real-time radiance field rendering and 3D reconstruction.
updated: 2026-05-23
group: interactive-visualisation
---
# 3D Gaussian Splatting

2026 04 14 [[concepts/lidar-scanning|Lidar scanning]] via [[entities/iphone|iphone]]

A method for high-fidelity, real-time radiance field rendering and 3D reconstruction.

## Data Acquisition & Workflows
* **Mobile [[concepts/lidar|LiDAR]] [[concepts/integration|Integration]]**: Utilizing [[entities/iphone-pro|iPhone Pro]] [[concepts/hardware|hardware]] to generate datasets for 3DGS [[concepts/training|training]].
    * **[[concepts/workflow|Workflow]]**: Converting [[concepts/arkit|ARKit]] spatial data into formats compatible with 3DGS training [[concepts/software|software]].
    * **[[concepts/testing|Testing]] Environment**: Using challenging lighting conditions (e.g., November in Finland) to validate ARKit data compatibility.
    * **LiDAR ([[concepts/light|Light]] Detection and Ranging)**: Employs laser beams to measure distance and generate 3D Point Cloud data.
* **Reference**: [Olli Huttunen's iPhone LiDAR to 3DGS Guide](https://www.youtube.com/watch?v=XmQpu1QvK1Q)
## Source Notes

- 2026-04-14: How to get TACK SHARP photos with any camera!