---
wiki-ingested: true
title: "Compressing Video"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: video-content-systems
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

---
---
<https://www.youtube.com/watch?v=IB8WzB5Kr3g>
This video provides a comprehensive guide on how to compress video [[concepts/files|files]] to a smaller, more manageable size without compromising the original image quality, using the free and [[concepts/open-source|open-source]] [[concepts/software|software]], Handbrake.
**Introduction to Handbrake:**

* Handbrake is introduced as a versatile tool for [[concepts/transcoding|transcoding]], converting, and resizing video files.
* It is compatible with [[entities/windows|Windows]], [[entities/mac|Mac]], and [[entities/linux|Linux]] operating [[concepts/systems|systems]].
* Originally designed for ripping DVDs, it now supports a variety of [[concepts/video-codecs|video codecs]].

**Getting Started:**

* The first step involves downloading and installing Handbrake (a direct download link is provided in the video description).
* The application icon features a pineapple and a cocktail glass.
* Upon opening, users can choose to upload a single video file or an entire folder for batch processing. The demonstration uses a 12-second, 4K .mov file with an original size of 1.27 GB.

**Key Settings and Configuration:** After importing the video, Handbrake displays various clip property details like resolution, framerate, and audio tracks. The [[entities/speaker|speaker]] then guides through the essential tabs for compression:

1. **Preset Tab:**
	This dropdown allows selection of output formats. "Production Standard" is chosen as it's typically best for professional [[concepts/video-editing|video editing]] workflows, creating mastering-grade video with high bit-rate audio. (Note: Handbrake states these presets create larger files than most compressed sources and are not for general use, but the video demonstrates successful compression).
	
2. **[[concepts/summary|Summary]] Tab:**
	The output "Format" is set to MP4. "Web Optimized" and "Align A/V Start" checkboxes are selected, which are beneficial for social media video formats.
	
3. **Dimensions & Filters Tabs:**
	These tabs allow for cropping, resizing, and applying filters. For the [[concepts/purpose|purpose]] of this compression, they are skipped.
	
4. **Video Tab (Crucial for Compression):**
	**Video Encoder:** H.264 (x264) is selected as the most compatible video codec. Other options like AV1, H.265, and MPEG-2/4 are available. **Framerate (FPS):** Set to "Same as source" with "Constant Framerate" checked. **Quality:** This is controlled by the "Constant Quality (RF)" slider. Dragging the slider to the **left** (higher RF number, e.g., 49) results in lower quality and smaller file size. Dragging to the **right** (lower RF number, e.g., 0) results in higher quality and larger file size. The speaker found a "sweet spot" at 22 for retaining quality while significantly reducing size, recommending users stick between 18 and 25. **Encoder Preset:** This slider controls the processing power Handbrake uses. "Fast" is recommended to prevent extremely long [[concepts/encoding|encoding]] times ("snail's pace").
	
5. **Audio Tab:**
	It's important to check this tab to ensure the audio bitrate is set to 320 bits, as it can sometimes automatically default to a lower setting.
	
6. **Subtitles & Chapters Tabs:**
	These are skipped for this demonstration.
	

**Saving and Exporting:**

* Before encoding, users can save their configured settings as a "Preset" for future reference.
* A save location for the output file must be selected.
* Finally, click "Start Encode" to begin the compression process.

**Results:**

* The original 1.27 GB video was successfully compressed to a significantly smaller 38.3 MB file.
* A side-by-side comparison of the "Before" and "After" videos reveals "no quality lost whatsoever," with both appearing visually identical and "brand new."