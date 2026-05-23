---
type: entity
tags:
  - "dvd-ripping"
  - "video-library"
  - "drm-circumvention"
  - "media-tools"
aliases:
  - "libdvdcss library"
summary: A library used with software such as VLC, Handbrake, and MakeMKV for ripping DVDs.
updated: 2026-05-23
---
# Libdvdcss

[[concepts/libdvdcss|Libdvdcss]] is a [[concepts/software|software]] library that provides decryption [[concepts/capabilities|capabilities]] for CSS-protected DVDs. It enables media players and video conversion tools to read and process DVD content by handling the Content Scramble System (CSS) encryption that manufacturers apply to commercial DVDs.

## Usage

The library is commonly integrated into popular media applications including [[entities/vlc|VLC media player]], Handbrake, and [[entities/makemkv|MakeMKV]]. Users typically install libdvdcss alongside these tools to enable DVD playback and ripping functionality. VLC can open [[concepts/dvd-iso|DVD ISO]] [[concepts/files|files]] created from protected discs, though the files must be opened via drag-and-drop rather than through the standard menu options.

## DVD Ripping Workflow

For users seeking to create digital copies of DVDs, a common approach involves trying VLC first as the primary tool, then turning to Handbrake if initial results are unsatisfactory. For more challenging discs, users may create a DVD ISO backup and then process it through Handbrake for the final conversion. All three applications—VLC, Handbrake, and MakeMKV—can function with libdvdcss installed to handle protected content.
