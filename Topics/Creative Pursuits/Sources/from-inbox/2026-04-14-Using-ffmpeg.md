---
wiki-ingested: true
title: "Using ffmpeg"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: photography-cameras
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Using [[entities/ffmpeg|ffmpeg]]

---
---
<https://www.youtube.com/watch?v=6uB65PdasQI>
Here is a detailed summary of the video, organized by topic and including the specific [[concepts/cli|command-line]] codes provided for using FFmpeg.

# The Ultimate Guide to FFmpeg: The "Do Everything" Library

The video introduces **FFmpeg**, a powerful, [[concepts/open-source|open-source]] [[concepts/command-line-tool|command-line tool]] that powers the majority of [[concepts/media-processing|media processing]] on the internet (including [[entities/youtube|YouTube]], [[concepts/netflix|Netflix]], and [[concepts/obs|OBS]]). While often viewed as a complex library for low-level engineers, it is accessible to anyone and eliminates the need for sketchy online file converters or expensive [[concepts/software|software]].

## What is FFmpeg?

* **Name:** Stands for **F**ast **F**orward **MPEG**.
* **History:** Created by legendary programmer **[[entities/fabrice-bellard|Fabrice Bellard]]** (who also created [[entities/qemu|QEMU]]).
* **Purpose:** A complete, cross-platform [[concepts/solution|solution]] to record, convert, and stream audio and video. It is described as the "Swiss Army Knife" of media manipulation.
* **The Barrier:** It uses a Command Line Interface (CLI), which can be intimidating due to the sheer number of flags and switches available.

* * *

## Practical FFmpeg [[concepts/commands|Commands]]

_Note: All commands assume you have FFmpeg installed and are running them in your terminal._

### 1\. Creating GIFs from Video

Instead of using ad-riddled websites to convert videos to GIFs, you can create high-quality, optimized GIFs locally.
**The Command:**
```
ffmpeg -i input.mp4 -vf "fps=10,scale=320:-1:flags=lanczos" -c:v gif output.gif


```
**Breakdown:**

* `-i input.mp4`: Specifies the input file.
* `-vf`: Video Filter graph.
* `fps=10`: Sets the frame rate to 10 frames per second (keeps file size low).
* `scale=320:-1`: Sets width to 320px. The `-1` tells FFmpeg to automatically calculate height to maintain the aspect ratio.
* `flags=lanczos`: Uses the Lanczos resizing algorithm, which is high-quality for downscaling.
* `-c:v gif`: Sets the video codec to GIF.

### 2\. Resizing & Compressing Images

FFmpeg handles images as well as video. You can resize large images to creating thumbnails instantly.
**The Command:**
```
ffmpeg -i input.png -vf scale=800:-1 output.jpg


```

* **Result:** Converts a massive PNG (e.g., 3MB) to a small JPG (e.g., 50KB) while resizing it to 800px width.

### 3\. Extracting Audio (Audio Ripping)

Useful for getting the MP3 track from a music video or interview.
**The Command:**
```
ffmpeg -i video.mp4 -vn -acodec mp3 output.mp3


```

* `-vn`: **Video No** (disables video recording).
* `-acodec mp3`: Sets audio codec to MP3.

### 4\. [[concepts/video-compression|Video Compression]]

Reduce massive video file sizes without noticeable loss in quality using the H.264 codec and Constant Rate Factor (CRF).
**The Command:**
```
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -preset fast output.mp4


```
**Breakdown:**

* `-vcodec libx264`: Uses the widespread, efficient H.264 compression standard.
* `-crf 23`: **Constant Rate Factor**. This balances quality and file size.
	* **Scale:** 0–51.
	* **0:** Lossless (huge file).
	* **51:** Worst quality.
	* **23:** The standard default for a good balance.
* `-preset fast`: Determines [[concepts/encoding|encoding]] [[concepts/speed|speed]] vs. compression ratio.

### 5\. Watermarking Video

You can "burn" text directly onto a video file.
**The Command:**
```
ffmpeg -i input.mp4 -vf "drawtext=text='My Watermark':fontcolor=white:fontsize=24:x=10:y=10" output.mp4


```

* `drawtext`: The filter used to add text.
* `x=10:y=10`: Coordinates for the text (top left corner).

* * *

## Screen Recording & Device Capture

FFmpeg can act as a screen recorder or capture feed from webcams and microphones.
**Step 1: List Available Devices**

* **macOS:** `ffmpeg -f avfoundation -list_devices true -i ""`
* **[[entities/windows|Windows]]:** `ffmpeg -f dshow -list_devices true -i dummy`
* **Linux:** Varies (uses V4L2, ALSA, or PulseAudio).

**Step 2: Record (Example for macOS)**
```
ffmpeg -f avfoundation -framerate 30 -i "1:0" output.mp4


```

* `-i "1:0"`: Input index. "1" might be the screen ID, "0" might be the microphone ID (based on the list from Step 1).
* **To capture the mouse [[entities/cursor|cursor]]:** Add flag `-capture_cursor 1`.

* * *

## Tools to Make FFmpeg Easier

### HandBrake (The GUI Option)

If you strictly refuse to use the command line, **HandBrake** is the recommended open-source GUI tool.

* It provides a visual interface for many of the compression tasks FFmpeg handles.
* It comes with pre-made presets (e.g., "Fast 1080p30") so you don't have to memorize settings.

### Atuin (The [[concepts/automation|Automation]] Option)

To solve the problem of remembering complex FFmpeg flags, the video recommends **Atuin**.

* Atuin is a shell history manager that replaces `Ctrl+R`.
* It allows for **Scripting**: You can create [[concepts/templates|templates]] for commands.
* **Example Usage:** You can write a script named `makegif` in Atuin. When you run `atuin scripts run makegif`, it [[entities/will|will]] interactively ask you for the "Input File Name" and "Output File Name," then run the complex FFmpeg command for you automatically.

## Summary

[[entities/ffmpeg|FFmpeg]] allows you to manipulate media with professional precision completely for free. While the syntax is dense, mastering just 4-5 basic [[concepts/commands|commands]] (for GIFs, compression, resizing, and stripping audio) can replace a dozen separate ad-heavy [[concepts/software|software]] tools.