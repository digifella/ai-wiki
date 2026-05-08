---
wiki-ingested: true
domain: creative-pursuits
group: lightroom-color-workflows
---
## Operational Pattern (Battle-Tested)

Here’s the pattern that scales cleanly:

1. Import photos → [[concepts/lightroom|Lightroom]] writes baseline XMP
2. AI pipeline updates XMP using ExifTool
3. Back in Lightroom:
	1. Filter → “Has [[concepts/keywords|Keywords]] = False” (or similar)
	2. Select
	3. **Read [[concepts/metadata|Metadata]] from File**
4. Use Smart Collections to validate results

You can do this on **10 or 10,000 images**.

* * *

## How You’ll Know It Worked

* Keywords appear instantly
* Keyword List count increments
* Smart Collections update
* No warning dialogs appear

If Lightroom shows a **metadata conflict warning**, stop and inspect the XMP—you’ve likely overwritten a block you shouldn’t have.

## Related Concepts
- [[concepts/xmp|XMP]] — [Wikipedia](https://en.wikipedia.org/wiki/XMP)
- [[concepts/smart-collections|Smart Collections]] — [Wikipedia](https://en.wikipedia.org/wiki/Smart_Collections)
- [[concepts/ai-pipeline|AI pipeline]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_pipeline)

## Related Entities
- [[entities/ai-pipeline|AI pipeline]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_pipeline)