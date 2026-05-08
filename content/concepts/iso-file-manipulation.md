---
type: concept
domain: tools-platforms
group: developer-tooling-clis
tags:
  - "dvd-ripping"
  - "video-conversion"
  - "iso-files"
  - "vlc"
  - "handbrake"
  - "makemkv"
  - "libdvdcss"
aliases:
  - "DVD ripping workflow"
  - "ISO file conversion"
summary: A workflow for ripping DVDs using VLC, Handbrake, or MakeMKV, potentially requiring the libdvdcss library.
updated: 2026-05-01
---
# Iso File Manipulation

Iso file manipulation refers to the process of creating, converting, and working with ISO disc [[concepts/images|images]], particularly in the context of [[concepts/dvd-ripping|DVD ripping]] and format conversion. The workflow typically involves extracting video content from physical DVDs into digital formats that can be stored and played on computers and other devices.

## DVD Ripping Tools

The primary approach to DVD ripping uses [[entities/vlc|VLC media player]] as the first option, though it requires the [[entities/libdvdcss|libdvdcss library]] to be installed to decrypt protected content. If VLC proves insufficient for a particular disc, Handbrake offers more robust conversion capabilities and also benefits from having libdvdcss installed. For more challenging cases, [[entities/makemkv|MakeMKV]] can be used to first create a backup ISO image of the DVD, which can then be processed through Handbrake for final conversion.

## Working with ISO Files

VLC can open and play ISO disc image files directly, but this requires dragging and dropping the file into the application rather than using the standard File menu option. This distinction is important for users attempting to preview or verify ISO files before committing to further processing or conversion steps.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-JSON-Prompting-for-Gemini-Achieving-Total-Image-Control-and-Metadata|JSON Prompting for Gemini Achieving Total Image Control and Metadata]] · [▶ source](https://www.youtube.com/watch?v=gcXPW6eBB0w)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-10: [[lab-notes/2026-04-10-Video-1|Video 1]] · [▶ source](https://www.youtube.com/watch?v=gbnmDRcKM0Q)