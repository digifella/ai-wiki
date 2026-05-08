---
wiki-ingested: true
title: "Text description of photos"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "photography"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: lightroom-color-workflows
---
# Text description of photos

---
---
## Operational Pattern (Battle-Tested)

Here’s the pattern that scales cleanly:

1. Import photos → [[concepts/lightroom|Lightroom]] writes baseline [[concepts/xmp|XMP]]
2. [[concepts/ai-pipeline|AI pipeline]] updates XMP using ExifTool
3. Back in Lightroom:
	1. Filter → “Has [[concepts/keywords|Keywords]] = False” (or similar)
	2. Select
	3. **Read [[concepts/metadata|Metadata]] from File**
4. Use [[concepts/smart-collections|Smart Collections]] to validate results

You can do this on **10 or 10,000 images**.

* * *

## How You’ll Know It Worked

* Keywords appear instantly
* Keyword List count increments
* Smart Collections update
* No warning dialogs appear

If Lightroom shows a **metadata conflict warning**, stop and inspect the XMP—you’ve likely overwritten a block you shouldn’t have.