---
type: concept
domain: creative-pursuits
tags:
  - "reflection-removal"
  - "lightroom"
  - "photoshop"
  - "generative-fill"
  - "workflow"
  - "photography-workflow"
  - "glass-reflections"
aliases:
  - "Removing Reflections from Glass"
  - "Glass Reflection Removal"
summary: Reflection removal eliminates unwanted glass reflections in photography using Lightroom's native tools or Photoshop's Generative Fill as a workaround for complex backgrounds.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-27T20:37:41+00:00" }
group: lightroom-color-workflows
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Reflection Removal

**Reflection Removal** refers to the process of eliminating unwanted reflections from glass surfaces in photography to reveal the subject behind the glass. This is a common challenge in Portrait Photography, Architecture Photography, and Product Photography.

## Tools and Workflows

### Adobe Lightroom / Camera Raw
Lightroom and [[concepts/adobe-camera-raw|Adobe Camera Raw]] (ACR) include built-in tools for distraction removal, including specific algorithms for reflection removal. However, these tools have significant limitations:
*   **Complexity Limits:** Struggles with complex backgrounds or high-[[concepts/contrast|contrast]] reflections.
*   **Artifacts:** May introduce unnatural smoothing or texture loss in the removed areas.
*   **Partial Removal:** Often fails to completely erase strong specular highlights.

### Photoshop Generative Fill Workaround
When Lightroom's native tools are insufficient, a common workaround involves using [[entities/adobe-photoshop|Photoshop]]'s Generative Fill feature. This method leverages AI to reconstruct the background behind the reflection more naturally than traditional clone/heal tools.

*   **Integration Note:** For detailed limitations and specific workflow steps, see [[lab-notes/2026-08-28-Lightroom-Reflection-Removal-Limitations-and-Photoshop-G|Lightroom Reflection Removal Limitations and Photoshop Generative Fill Workaround]].
*   **Key Insight:** Generative Fill can hallucinate plausible background details where Lightroom's algorithmic removal leaves gaps or artifacts.

## References
*   [[entities/glyn-dewis|Glyn Dewis]]. "Reflection Removal NOT WORKING in Lightroom? Try this." [Lightroom Reflection Removal Limitations and Photoshop Generative Fill Workaround](https://www.youtube.com/watch?v=Qv_E9IyzCpU). 2026-08-28.
