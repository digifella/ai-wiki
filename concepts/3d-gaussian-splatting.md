---
type: concept
domain: creative-pursuits
tags:
  - "3d-reconstruction"
  - "radiance-fields"
  - "real-time-rendering"
  - "lidar-scanning"
  - "gaussian-splatting"
  - "point-clouds"
  - "lidar-processing"
aliases:
  - "3DGS"
  - "Gaussian Splatting"
  - "Real-Time Radiance Fields"
summary: A method for high-fidelity, real-time radiance field rendering and 3D reconstruction.
updated: 2026-07-11
group: interactive-visualisation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# 3D Gaussian Splatting

2026 04 14 [[concepts/lidar-scanning|Lidar scanning]] via [[entities/iphone|iphone]]

A method for high-fidelity, real-time radiance field [[concepts/visual-rendering|rendering]] and 3D reconstruction.

## Data Acquisition & Workflows
* **Mobile [[concepts/lidar|LiDAR]] Integration**: Utilizing [[entities/iphone-pro|iPhone Pro]] hardware to generate datasets for 3DGS training.
    * **Workflow**: Converting [[concepts/arkit|ARKit]] spatial data into formats compatible with 3DGS training software.
    * **Testing Environment**: Using challenging lighting conditions (e.g., November in Finland) to validate ARKit data compatibility.
    * **LiDAR ([[concepts/light|Light]] Detection and Ranging)**: Employs laser beams to measure distance and generate 3D [[concepts/3d-point-clouds|Point Cloud data]].
* **Reference**: [Olli Huttunen's iPhone LiDAR to 3DGS Guide](https://www.youtube.com/watch?v=XmQpu1QvK1Q)
## Source Notes

- 2026-04-14: How to get TACK SHARP photos with any camera!
