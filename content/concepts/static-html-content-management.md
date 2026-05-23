---
type: concept
domain: creative-pursuits
summary: A system for managing site content via pre-rendered HTML files that is being developed to include a block-based visual editor.
updated: 2026-05-23
group: video-content-systems
---
# Static HTML content management

Management of site content via static [[concepts/files|files]] within the `content/{slug}.html` directory (part of the `site/journeys/` system).

### Architecture & Implementation
- **[[entities/storage|Storage]]**: Content is stored as pre-rendered `.html` files; currently lacks a native interface for editing content blocks.
- **[[concepts/secure|Security]]**: All administrative mutations must implement the [[concepts/same-origin-guard|Same-Origin Guard]] via `requireSameOriginForMutatingRequest()`.
- **UI Issue**: The Ticker Bar is currently obscuring the second row of the homepage navigation (Quick-Nav).

### Development Roadmap
- **Visual Editor**: Development of a block-based editing interface (analogous to [[entities/adobe-express|Adobe Express]]) to support the sequential arrangement of [[concepts/text|text]] and photo blocks.
- **Content Ingestion**: Parsing and merging existing [[entities/japan-trip|Japan Trip]] [[concepts/pdfs|PDFs]] into a single unified blog post.

### References
- 2026 04 14 New [[concepts/claude-ai|Claude]] Plan
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-NotebookLM-Mind-Map-to-Interactive-HTML-Site-with-Gemini-AI|NotebookLM Mind Map to Interactive HTML Site with Gemini AI]] · [▶ source](https://www.youtube.com/watch?v=3tPzeQX0KVE)
- 2026-04-08: [[lab-notes/2026-04-08-NotebookLM-Infographic-to-Interactive-Web-Application-Workflow-using|NotebookLM Infographic to Interactive Web Application Workflow using]] · [▶ source](https://www.youtube.com/watch?v=DQijzXADyiE)