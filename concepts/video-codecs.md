---
type: concept
domain: creative-pursuits
group: video-content-systems
tags:
  - "video-compression"
  - "lossy-codecs"
  - "lossless-codecs"
  - "h264"
  - "h265"
  - "ffv1"
  - "transcoding"
  - "handbrake"
aliases:
  - "video-compression-algorithms"
  - "video-encoding"
  - "video-decoding"
summary: Algorithms that compress and decompress digital video using lossy and lossless formats for efficient storage and transmission.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Video Codecs

Video codecs are algorithms that compress and decompress digital video data, enabling practical storage and transmission of large video files. A codec analyzes consecutive frames to identify and remove redundant information—both visible repetition across frames and imperceptible details beyond human perception—then reconstructs the video during playback. This compression is essential for applications ranging from streaming services to archiving, where uncompressed video would require prohibitively large amounts of storage and bandwidth.

## Compression Methods

Codecs employ two primary compression techniques: lossless and lossy. Lossless compression reduces file size without discarding any data, allowing for perfect reconstruction of the original video upon decompression. While ideal for professional archiving and editing workflows where quality integrity is paramount, it offers limited size reduction. Lossy compression achieves significantly smaller file sizes by permanently discarding data deemed less critical to human perception. This approach balances quality and efficiency, making it the standard for consumer applications such as streaming, broadcasting, and video conferencing.

## Standards and Formats

A codec is often paired with a container format, which holds the compressed video stream along with metadata, audio, and subtitles. Common video codec standards include H.264 (AVC), which remains widely supported across devices and platforms, and H.265 (HEVC), which offers improved compression efficiency at the cost of higher computational requirements. More recent developments like AV1 and VVC (H.266) aim to further optimize bitrate performance while reducing licensing fees, driving adoption in open-source and web-based video delivery systems.

## Source Notes

- 2026-04-14: Compressing Video
