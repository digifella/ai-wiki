---
wiki-ingested: true
title: "PhotoshopCAFE - improving masking"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: lightroom-color-workflows
---
# [[entities/photoshopcafe|PhotoshopCAFE]] - improving [[concepts/masking|masking]]

---
---
<https://www.youtube.com/watch?v=ggg6SYk4vWo>
The video, presented by [[entities/colin-smith|Colin Smith]], founder of PhotoshopCAFE, demonstrates an easy way to fix the edges of masks in [[concepts/lightroom|Lightroom]] and [[concepts/camera-raw|Camera Raw]]. \[0:00, 0:03\]
The goal is to reduce the silhouette in the foreground of a sunset image, while keeping the sky and ocean as they are. \[0:07, 0:10\]
**Steps to Fix Mask Edges:**

1. **Initial [[concepts/mask-creation|Mask Creation]]:** The [[entities/speaker|speaker]] starts by selecting the [[concepts/masking-tool|masking tool]] and choosing "[[concepts/select-subject|Select Subject]]." This uses AI to automatically select the main subject, which in this case is the gazebo in the foreground. \[0:12, 0:18, 0:20\]
2. **Adding to the Mask:** Since the initial "Select Subject" didn't include all the desired foreground elements, like the foliage, the speaker adds to the mask. \[0:21, 0:25\] Click "Add" and then select the "Objects" tool. \[0:28, 0:30\] Switch the "Objects" tool mode from selection to "Brush." \[0:35, 0:37\] Roughly paint over the foreground area to include it in the mask. Lightroom/Camera Raw's AI [[entities/will|will]] refine this rough brush stroke to create a more precise selection based on the painted area. \[0:40, 0:47, 0:50\] If any small areas are missed, the speaker recommends adding them with the brush. \[0:57, 1:00\]
3. **Applying Basic Adjustments:** With the foreground now masked, the speaker increases the [[concepts/exposure|exposure]] slightly and opens up the [[concepts/shadows|shadows]] to brighten the silhouette. \[1:13, 1:17\]
4. **Refining Edges with Auto Mask:** The main problem identified is the silhouette around the foliage, where the initial mask wasn't perfect. \[1:23, 1:27\] To fix this, choose "Subtract" from the mask options, then select "Brush." \[1:42, 1:44\] Crucially, set the "Feather" slider for the brush all the way up to 100 and enable "Auto Mask." \[1:49, 2:11\] "Auto Mask" works by sampling the color where the brush's inner circle (the pin) is located, and it protects those colors as you brush. This allows you to selectively refine edges without affecting the areas you want to keep. \[2:14, 2:21\] By carefully brushing along the edges of the foliage and the gazebo, the feathering and auto-masking work together to create a smooth, natural transition, fixing the problematic silhouette. \[2:23, 2:48\] For smaller areas, the [[concepts/brush-size|brush size]] can be reduced using the left bracket key. \[2:55\]

The speaker concludes by emphasizing that this method, while not overly technical, is simple, easy to use, and very effective for fixing mask edges. \[3:10, 3:15\]
A special announcement is made about a comprehensive course on masking in Lightroom and Camera Raw, with more information coming soon. \[3:20, 3:25, 3:30\]