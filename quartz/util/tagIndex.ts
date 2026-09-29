import type { QuartzPluginData } from "../plugins/vfile"
import { getAllSegmentPrefixes } from "./path"

// Build once per content array, instead of scanning every page for every tag.
export function indexTags(allFiles: QuartzPluginData[]) {
  const pagesByTag = new Map<string, QuartzPluginData[]>()
  const pagesBySlug = new Map<string, QuartzPluginData>()
  for (const file of allFiles) {
    if (file.slug && !pagesBySlug.has(file.slug)) pagesBySlug.set(file.slug, file)
    const tags = new Set((file.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes))
    for (const tag of tags) {
      const pages = pagesByTag.get(tag)
      if (pages) pages.push(file)
      else pagesByTag.set(tag, [file])
    }
  }
  return { pagesByTag, pagesBySlug }
}
