import test from "node:test"
import assert from "node:assert/strict"
import type { QuartzPluginData } from "../plugins/vfile"
import { getAllSegmentPrefixes } from "./path"
import { indexTags } from "./tagIndex"

test("tag index preserves nested-tag membership, duplicates, order and first slug match", () => {
  const files = [
    { slug: "a", frontmatter: { title: "A", tags: ["health/mental", "health", "shared"] } },
    { slug: "b", frontmatter: { title: "B", tags: ["shared", "health/mental/deep"] } },
    { slug: "tags/health", frontmatter: { title: "Health", tags: [] } },
    { slug: "tags/health", frontmatter: { title: "Duplicate", tags: [] } },
    { slug: "untagged" },
  ] as QuartzPluginData[]
  const index = indexTags(files)
  const tags = new Set(files.flatMap((file) => file.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes))
  assert.deepEqual([...index.pagesByTag.keys()], [...tags])
  for (const tag of tags) {
    const prior = files.filter((file) => (file.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes).includes(tag))
    assert.deepEqual(index.pagesByTag.get(tag), prior)
  }
  assert.equal(index.pagesBySlug.get("tags/health"), files[2])
  assert.equal(index.pagesByTag.has("missing"), false)
})
