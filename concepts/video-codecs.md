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
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Video Codecs

Video codecs are algorithms that compress and decompress digital video data, enabling practical storage and transmission of large video files. A codec analyzes consecutive frames to identify and remove redundant information—both visible repetition across frames and imperceptible details beyond human perception—then reconstructs the video during playback. This compression is essential for applications ranging from streaming services to archiving, where uncompressed video would require prohibitively large amounts of storage and bandwidth.

## Compression Methods

Codecs employ two primary compression strategies. Lossless compression preserves all original data, allowing perfect reconstruction but achieving only modest size reduction; this approach suits applications where quality cannot be compromised. Lossy compression removes data deemed unimportant to human viewers, achieving substantially higher compression ratios by discarding fine details, color information, or temporal variations imperceptible to the eye. Most video applications use lossy compression to balance file size with acceptable visual quality.

## Common Standards

Widely-used video codecs include H.264 (MPEG-4 AVC), which dominated for over a decade; H.265 (HEVC), offering improved compression efficiency; VP9 and AV1, developed as open-source alternatives; and MPEG-2, still used in broadcast television and DVDs. Each codec makes different trade-offs between compression efficiency, computational complexity, and compatibility across devices and platforms. Selection depends on intended use, available bandwidth, hardware capabilities, and licensing considerations.

## Source Notes

- 2026-04-14: Compressing Video
