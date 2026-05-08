---
type: concept
domain: history-anthropology
group: everyday-objects-material-culture
tags:
  - "dvd-extraction"
  - "video-conversion"
  - "software-tools"
  - "vlc"
  - "handbrake"
  - "makemkv"
aliases:
  - "DVD extraction"
  - "DVD copying"
  - "DVD conversion"
summary: Methods and software tools for ripping DVDs, including VLC, Handbrake, and MakeMKV.
updated: 2026-05-01
---
# DVD Ripping

DVD ripping is the process of extracting video content from a Digital Versatile Disc (DVD) and converting it into a digital file format suitable for computer [[entities/storage|storage]] or playback. This practice became widespread as users sought to preserve their media collections in digital form and create backups of purchased content. The technical process typically involves circumventing the disc's copy protection mechanisms and then [[concepts/encoding|encoding]] the video data into a standard file format such as MP4, MKV, or AVI.

## Common Software Tools

Several software solutions have become standard for DVD ripping. [[entities/vlc|VLC Media Player]], a widely-used [[concepts/open-source|open-source]] player, can perform basic DVD extraction when paired with the [[entities/libdvdcss|libdvdcss library]], which handles copy protection decryption. Handbrake is a popular free [[concepts/transcoding|transcoding]] tool that converts video files to various formats and works effectively for already-extracted DVD content. [[entities/makemkv|MakeMKV]] specializes in extracting DVDs to lossless MKV container files and can handle more complex copy protection schemes. Users typically try these tools in sequence based on the specific DVD's protection level and desired output quality.

## Technical Considerations

The ripping process generally involves two steps: first extracting the raw video data from the disc (which may require decryption), and second, encoding or transcoding that data into a desired file format and quality level. Some tools combine these steps while others require separate applications. The choice of software often depends on the DVD's copy protection implementation, the desired output format, and the user's technical comfort level. File size and quality tradeoffs must be considered, as compressed video files occupy significantly less storage space than uncompressed DVD data.

## Source Notes
- 2026-04-14: Compressing Video