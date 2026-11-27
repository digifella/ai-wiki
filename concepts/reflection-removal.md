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
  - "remove-tool"
  - "trace-erase"
aliases:
  - "Removing Reflections from Glass"
  - "Glass Reflection Removal"
  - "Photoshop Remove Tool"
summary: Reflection removal eliminates unwanted glass reflections in photography using Lightroom's native tools, Photoshop's Generative Fill, or the intelligent Remove Tool for complex object and shadow elimination.
updated: 2026-10-10
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-10T20:01:30+00:00" }
group: lightroom-color-workflows
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Reflection Removal

**Reflection Removal** refers to the process of eliminating unwanted reflections from glass surfaces in photography to reveal the subject behind the glass. This is a common challenge in [[concepts/portrait-photography|Portrait Photography]], Architecture Photography, and Product Photography.

## Tools and Workflows

### Adobe Lightroom / Camera Raw
[[concepts/lightroom|Lightroom]] and [[concepts/adobe-camera-raw|Adobe Camera Raw]] (ACR) include built-in tools for distraction removal, including specific [[concepts/algorithms|algorithms]] for reflection removal. However, these tools have significant limitations:
*   **Complexity Limits:** Struggles with complex backgrounds or high-[[concepts/contrast|contrast]] reflections.
*   **Artifacts:** May introduce unnatural smoothing or [[concepts/texture-slider|texture]] loss in the removed areas.
*   **Partial Removal:** Often fails to completely eliminate reflections in high-contrast scenarios.

### Adobe Photoshop: Intelligent Remove Tool
For complex backgrounds where Lightroom fails, advanced [[concepts/photoshop|Photoshop]] workflows are required. The introduction of the enhanced **Remove Tool** in [[concepts/beta-version|Photoshop Beta]] offers significant improvements over traditional cloning or healing brushes.

*   **[[concepts/related-elements|Related Elements]] Removal:** The tool intelligently identifies and removes associated shadows, reflections, and other contextual elements alongside the primary object, functioning similarly to the previously showcased "[[concepts/remove-tool|Project Trace Erase]]."
*   **Workflow Integration:** This capability allows for cleaner [[concepts/digital-compositing|compositing]] and reflection cleanup without [[concepts/manual-masking|manual masking]] of secondary artifacts.
*   **Reference:** See [[lab-notes/2026-10-10-Photoshop-Remove-Tool-Intelligent-Object-Shadow-and-Refl|Photoshop Remove Tool: Intelligent Object, Shadow and Reflection Removal]] for detailed technical breakdown.

### Alternative Workflows
*   **Generative Fill:** For [[concepts/non-destructive-editing|non-destructive editing]], [[concepts/generative-fill|Generative Fill]] can reconstruct complex backgrounds obscured by reflections, though it requires careful [[concepts/prompting|prompting]] to maintain subject [[concepts/honesty|integrity]].

## References
*   [Photoshop Remove Tool: Intelligent Object, Shadow and Reflection Removal](https://www.youtube.com/watch?v=NO7s87W-hNw) by [[entities/colin-smith-channel|photoshopCAFE]]
