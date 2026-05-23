---
type: concept
domain: creative-pursuits
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
updated: 2026-05-23
group: video-content-systems
---
# Video Codecs

Video codecs are algorithms that compress and decompress digital video data, making it practical to store and transmit large video [[concepts/files|files]]. A codec works by analyzing video frames and removing redundant or imperceptible information, then reconstructing the video during playback. This compression is essential for [[concepts/software|applications]] ranging from [[concepts/streaming-services|streaming services]] to file archiving, where uncompressed video would require prohibitive [[entities/storage|storage]] space and bandwidth.

## Compression Approaches

Codecs fall into two main categories based on their compression methodology. Lossy codecs discard some video information that the human eye is unlikely to notice, achieving high compression ratios [[concepts/assistive-technology|at]] the [[concepts/cost|cost]] of minor quality loss. Common lossy codecs include H.264 (MPEG-4 Part 10), widely used in streaming and broadcasting, and H.265 (HEVC), which offers better compression efficiency. Lossless codecs preserve all original video data and are used when quality cannot be compromised, such as in archival or professional editing work; FFV1 is a notable [[concepts/open-source|open-source]] lossless codec.

## Practical Tools

Several software tools facilitate working with video codecs. Handbrake is an open-source [[concepts/transcoding|transcoding]] application available on [[entities/windows|Windows]], [[entities/mac|Mac]], and [[entities/linux|Linux]] that allows users to convert video files between different codecs and formats. Originally developed for [[concepts/dvd-ripping|DVD ripping]], it now supports a wide [[concepts/range|range]] of modern codecs and provides options for adjusting compression settings to balance file size and visual quality. Such tools [[entities/make|make]] codec conversion accessible to users without specialized technical knowledge.
## Source Notes

- 2026-04-14: Compressing Video