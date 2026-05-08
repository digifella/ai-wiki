---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
---
All done. v3.5.18 — site.zip ready for upload.

  Portal Intelligence Layer — Complete

  All 10 tasks implemented and merged:

  ┌──────┬───────────────────────────────────────────────────────────────────────────────┬────────┐
  │ Task │                                     What                                      │ Status │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 1    │ llm_router.py — Ollama-first/Claude-fallback model [[concepts/abstraction|abstraction]]                │ Done   │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 2    │ 15 prompt templates (classify, extract, cross-doc)                            │ Done   │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 3    │ DB migrations — [[concepts/document-processing|document_analysis]] + project_intelligence tables + helpers     │ Done   │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 4    │ Job type registration (portal_classify, portal_cross_analyse)                 │ Done   │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 5    │ portal_classify handler — auto-classify + single-doc extraction               │ Done   │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 6    │ portal_cross_analyse handler — stakeholder, decisions, [[concepts/health|health]] synthesis       │ Done   │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 7    │ 8 new portal [[concepts/api-actions|API actions]] (triggers, imports, promotion, dashboard)            │ Done   │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 8    │ Nightly batch cron (portal_intelligence_cron.php)                             │ Done   │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 9    │ Lead intelligence dashboard in Lab (portal-intelligence.php)                  │ Done   │
  ├──────┼───────────────────────────────────────────────────────────────────────────────┼────────┤
  │ 10   │ Client portal [[concepts/plugins|extensions]] (health card, published insights, expanded taxonomy) │ Done   │
  └──────┴───────────────────────────────────────────────────────────────────────────────┴────────┘

  Next steps after deploy:
  - Add portal_intelligence_cron.php to cPanel cron: 0 2 * * * /usr/local/bin/php public_html/portal_intelligence_cron.php
  - Define PORTAL_INTEL_CRON_KEY in config.php
  - Restart the [[entities/python|Python]] worker to pick up the new handlers
  - Add the Lab nav link to portal-intelligence.php in _lab_nav.php

## Related Concepts
- [[concepts/model-abstraction|Model Abstraction]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Abstraction)
- [[concepts/ollama-first-model|Ollama-first Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama-first_Model)
- [[concepts/prompt-templates|Prompt Templates]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Templates)
- [[concepts/cross-doc-classification|Cross-Doc Classification]] — [Wikipedia](https://en.wikipedia.org/wiki/Cross-Doc_Classification)

## Related Entities
- [[entities/claude-portal|Claude Portal]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Portal)
- [[entities/claude-4|Claude]] ( Channel / Project ) — [Wikipedia](https://en.wikipedia.org/wiki/Claude_%28_Channel_/_Project_%29)
- [[entities/claude|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)