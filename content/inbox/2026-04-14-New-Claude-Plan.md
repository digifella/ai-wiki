---
wiki-ingested: true
title: "New Claude Plan"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
# New [[concepts/claude|Claude]] Plan

---
---
Context
[[entities/paul|Paul]] needs a way to create and edit travel blogs visually — similar to [[entities/adobe-express|Adobe Express]] — with sequential blocks of text and photos. The existing site/journeys/ system stores blogs as static HTML in content/{slug}.html, but there's no editor. The homepage nav's second row (quick-nav) is being obscured by the ticker bar. Two [[entities/japan-trip|Japan trip]] [[concepts/pdfs|PDFs]] need to be parsed and fused into one blog post.
Conflict Check with [[entities/security-ai|Security AI]]'s Work
The other AI (per CHANGELOG.md / implementation\_notes.md) has:

* [[concepts/same-origin-guard|Same-origin guard]] (requireSameOriginForMutatingRequest()) on all admin APIs — our new journeys\_api.php must also call this
* Safe error [[concepts/responses|responses]] (generic error + request\_id, details to server log) — we'll follow same pattern
* Deploy script now uses git ls-[[concepts/files|files]] — new files must be committed before ./deploy.sh includes them
* [[concepts/session|Session]] hardening on auth.php — already in place, no extra work needed
* Chatbot/gallery refactors — no conflict, we don't touch those files

No conflicts. We create new files and only edit site/index.html (CSS) and site/journeys/view.php (CSS). We follow all security patterns.

* * *

Part A: Fix Nav/Ticker Overlap
File: site/index.html (line ~57)
Problem: Ticker bar is position: fixed; top: 62px — set for old single-row nav. The quick-nav second row makes nav ~85px tall, so ticker is hidden behind it.
Fix: Change .ticker-bar { top: 62px } → top: 85px.

* * *

Part B: Block-Based Travel Blog Editor
[[concepts/design|Design]] Decisions

* No video support for now — text and image blocks only (simplifies editor significantly)
* Image [[entities/storage|storage]]: server-only — like gallery, images uploaded directly to server, journeys/images/ excluded from zip. Blog images referenced via paths.
* Gallery photo picker — instead of uploading new photos, users browse/search the existing gallery and select photos to insert. The blog HTML references gallery images via /gallery/data/medium/{filename}. No file duplication.
* Also support direct upload — for photos not in the gallery (e.g. imported from PDFs), support drag-and-drop upload to journeys/images/{slug}/
* HTML ↔ visual toggle — switch between block editor and raw HTML textarea

Image Referencing Strategy
Two sources for images:

1. Gallery photos — referenced as /gallery/data/medium/{filename}. Picker uses existing gallery/api.php?action=photos with search/filter.
2. Direct uploads — saved to site/journeys/images/{slug}/, referenced as images/{slug}/{filename}. For photos not in gallery (e.g. PDF-extracted images).

Block Data Model (JS in-[[concepts/memory|memory]])
{ type: 'text',              // 'text' | 'image' content: '
...
', // HTML string (text blocks) src: '/gallery/data/medium/file.jpg', // or 'images/slug/file.jpg' caption: 'Photo caption', // image blocks float: 'none', // 'none' | 'left' | 'right' width: 60 // percentage 25-100 }

HTML Output Format
Text with **bold** and links.

## Heading

!/gallery/data/medium/20240701_abc123.jpg
Caption text

HTML → Blocks Parsing (editing existing content)
Client-side JS using DOMParser:

* → image block (extract src, caption, float, width from [[concepts/style|style]])
* Everything else (p, h2, h3, blockquote, ul, ol) → text block (consecutive non-figure elements grouped)
* Skip
	(auto-generated)
	

Files to Create/Edit ┌─────────────────────────────┬──────────────────────────────────┐ │            File            │          Description            │ ├─────────────────────────────┼──────────────────────────────────┤ │ site/admin/journeys.php    │ Admin UI with block editor      │ ├─────────────────────────────┼──────────────────────────────────┤ │ site/admin/journeys\_api.php │ CRUD + image upload API          │ ├─────────────────────────────┼──────────────────────────────────┤ │ site/journeys/view.php      │ Add CSS for figure/float/caption │ ├─────────────────────────────┼──────────────────────────────────┤ │ site/admin/\*.php (6 files)  │ Add "Journeys" nav link          │ ├─────────────────────────────┼──────────────────────────────────┤ │ site/index.html            │ Ticker position fix              │ └─────────────────────────────┴──────────────────────────────────┘ Admin UI: site/admin/journeys.php
Follows existing patterns: require auth.php, tabs, toast notifications, dark theme.
Tabs:

1. Create / Edit — Blog [[concepts/metadata|metadata]] (title, date, excerpt, slug, visible) + block editor
2. Manage — Table of all blogs with Edit/Delete/Toggle visibility

Block Editor UI:

* Vertical stack of content blocks
* Between each block and at top/bottom: "+ Text" and "+ Image" buttons
* Text blocks: contenteditable div with floating toolbar:
	* Bold, Italic, H2, H3, Link (prompt for URL + display text), Blockquote
	* Uses document.execCommand() — simple, no library needed
* Image blocks:
	* "Choose from Gallery" button → opens gallery picker modal
	* "Upload Image" button → direct file upload (for non-gallery images)
	* Caption input below image
	* Float toggle: None / Left / Right (three buttons)
	* Width slider: 25% to 100%
	* Delete (X) button
* Block reordering: Up/Down arrow buttons on each block
* Toolbar row: Save | HTML View toggle | Preview (opens view.php in new tab)

Gallery Picker Modal:

* Fetches from /gallery/api.php?action=photos&limit=24&search=...
* Grid of thumbnails (/gallery/data/thumbs/{filename})
* Search box for filtering by tags/description
* Click thumbnail → inserts image block with /gallery/data/medium/{filename}
* Load more / pagination

API: site/admin/journeys\_api.php
Top of file: require\_once **DIR** . '/auth.php'; requireSameOriginForMutatingRequest(); header('Content-Type: application/json'); if (!isAdminAuthenticated()) { http\_response\_code(401); exit; }
Actions: list          — Return all blogs.json entries get          — Return single blog metadata + HTML content (for editor) create        — Validate, create blogs.json entry + empty content file + images dir update        — Update metadata + overwrite content HTML delete        — Remove entry + content file + images dir upload\_image  — Multipart image upload to images/{slug}/, return path
Image upload handler:

* Accept JPG/PNG/WebP, max 20MB
* Resize to max 1200px width (reuse generateResized() pattern from gallery)
* Filename: {timestamp}\_{random6hex}.{ext}
* Save to site/journeys/images/{slug}/
* Return { success: true, path: 'images/{slug}/filename.jpg' }

Updates to site/journeys/view.php
Add CSS for editor-produced HTML: .blog-image { margin: 1.2em 0; border-radius: 8px; overflow: hidden; } .blog-image\[style\*="float:left"\] { margin: 0.5em 1.5em 0.5em 0; } .blog-image\[style\*="float:right"\] { margin: 0.5em 0 0.5em 1.5em; } .blog-image img { width: 100%; height: auto; display: block; border-radius: 8px; } .blog-image figcaption { font-size: 0.85em; color: var(--color-text-muted); padding: 8px 4px; font-style: italic; }
[[concepts/deployment|Deployment]] note
Add journeys/images/\* to the exclude list in deploy.sh (alongside gallery/data/\*). Blog images are server-managed, not deployed via zip.

* * *

Part C: Japan Blog Import
Source: Two PDFs fused into one blog: "Our Japan Adventure — September 2014"

* Japan Blogs\_A\_Small.pdf (7MB) — Blog #1: Tokyo, Nikko
* Japan Blogs\_B\_Small.pdf (11MB) — Blog #4: Kanazawa, Kyoto

Script: parse\_japan\_blogs.py (one-time utility, not deployed)

* Uses pymupdf (fitz) to extract text blocks + embedded images from both PDFs
* Interleaves text and images based on page position
* Saves images to site/journeys/images/japan-2014/
* Generates combined site/journeys/content/japan-2014.html with
	tags
	
* Images referenced as images/japan-2014/{filename}

Blog entry in blogs.json: "japan-2014": { "title": "Our Japan Adventure — Tokyo, Nikko, Kanazawa & Kyoto", "date": "September 2014", "excerpt": "A journey through Japan's cultural heartland...", "slug": "japan-2014", "visible": true, "sort\_order": 2, "created": "2014-09-01" }
After initial import, Paul can refine using the new blog editor.

* * *

Execution Order

1. Fix nav/ticker overlap in site/index.html
2. Create site/admin/journeys\_api.php — API backend
3. Create site/admin/journeys.php — editor UI (largest piece)
4. Update site/journeys/view.php — figure/float CSS
5. Add "Journeys" nav link to all admin page headers
6. Update deploy.sh — exclude journeys/images/\*
7. Parse Japan PDFs → HTML + images via [[concepts/python|Python]] script
8. Add Japan entry to blogs.json
9. PHP syntax checks + local test with ./dev.sh
10. Git commit + push

* * *

[[concepts/verification|Verification]]

1. Nav/ticker: Ticker appears cleanly below both nav rows, no overlap
2. Admin: /admin/journeys.php loads, auth works, shows Create/Manage tabs
3. Create blog: Fill metadata, add text blocks with formatting, save → HTML file created
4. Gallery picker: Click "Choose from Gallery", search photos, select one → inserted as image block
5. Direct upload: Upload a photo → saved to images dir, appears in editor
6. Image controls: Float left/right wraps text; width slider resizes
7. Text formatting: Bold, italic, headings, links, blockquotes all work
8. HTML toggle: Switch to HTML → shows clean HTML; edit and switch back → blocks update
9. Block reorder: Up/down arrows move blocks
10. Edit existing: Open Savannahlander → text blocks load from existing HTML
11. View blog: /journeys/view.php?journey=slug renders figures, captions, floats correctly
12. Japan blog: Parsed content renders with interleaved text and images
13. Security: API uses requireSameOriginForMutatingRequest(), validates auth, safe error responses
14. php -l passes on all new/modified PHP files ╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

Claude has written up a plan and is ready to execute. Would you like to proceed?
❯ 1. Yes, clear context and auto-accept edits (shift+tab) 2. Yes, auto-accept edits 3. Yes, manually approve edits 4. Type here to tell Claude what to change