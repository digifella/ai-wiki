---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
---
What you'll now see:
  - Every profile card shows either "N [[entities/intel|intel]]" (green) or "⚠ no intel" (amber) — automatically updated after every save,
  create, or CSV import
  - A "⚠ No Intel (N)" filter tab appears in the profile type bar, showing exactly how many profiles have no matched intel —
   click it to see just those profiles
  - No button needed — the count is live every time profiles load

  On linking: the match is still name-based (shared_intel.stakeholder_name = stakeholder_profiles.canonical_name,
  case-insensitive). If a profile's name doesn't exactly match the intel entry's name, it'll show "no intel" even if you
  have related entries. You can fix mismatches by editing either the profile's canonical name or the intel entry's
  stakeholder name.
 Testing Plan: Industry [[concepts/hierarchy|Hierarchy]] & Cross-Org Intel Sharing                                                       │
│                                                                                                                  │
│ Context                                                                                                          │
│                                                                                                                  │
│ Four phases of functionality were just implemented across market_radar_api.php, market-radar.php,                │
│ intel-board.php, market_radar_watch_cron.php, market_radar_intel_ingest.php, and                                 │
│ worker/handlers/market_radar.py. Industry profiles, hierarchy linking, cross-org sharing, and Cortex contract    │
│ alignment all need end-to-end validation. Deploy site.zip (v3.4.80) to production first.                         │
│                                                                                                                  │
│ ---                                                                                                              │
│ Pre-requisites                                                                                                   │
│                                                                                                                  │
│ - Upload site.zip (v3.4.80) to public_html/ via cPanel                                                           │
│ - Ensure local worker is running (worker/) for on-demand jobs                                                    │
│ - Have two org contexts available (e.g. Longboardfella + Escient) to test cross-org sharing                      │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 1: Schema Migration [[concepts/verification|Verification]]                                                                            │
│                                                                                                                  │
│ Goal: Confirm runtime migrations execute cleanly on first page load.                                             │
│                                                                                                                  │
│ 1. Open Market Radar (/lab/market-radar.php) — this triggers mrOpenDb()                                          │
│ 2. Via cPanel phpMyAdmin or a quick script, verify the following exist in market_radar.db:                       │
│   - stakeholder_profiles has columns: description, key_themes_json, regulatory_context, market_size              │
│   - Table industry_affiliations exists with columns: id, profile_id, industry_profile_id, role,                  │
│ affiliation_type, source                                                                                         │
│   - Table intel_shares exists with columns: id, intel_id, shared_with_org, shared_by, shared_at                  │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 2: Industry Profile CRUD                                                                                    │
│                                                                                                                  │
│ Goal: Create, edit, view, and delete an industry profile.                                                        │
│                                                                                                                  │
│ 1. Click + New Profile in the Profiles tab                                                                       │
│ 2. Click the Industry type toggle button — confirm:                                                              │
│   - Industry-specific fields appear (Description, Key Themes, Market Size, Regulatory Context)                   │
│   - Person/Org fields are hidden                                                                                 │
│ 3. Create an industry profile:                                                                                   │
│   - Name: Digital [[concepts/health|Health]]                                                                                         │
│   - Description: Healthcare technology and digital transformation in clinical settings                           │
│   - Key Themes: telehealth, electronic health records, AI diagnostics (comma-separated)                          │
│   - Market Size: $250B globally                                                                                  │
│   - Regulatory Context: TGA, FDA digital health guidelines, HIPAA                                                │
│ 4. Save — confirm it appears in the profile list with the amber Industry badge                                   │
│ 5. Filter profiles by clicking the Industries tab — confirm only industry profiles show                          │
│ 6. Click the profile card to edit — confirm all industry fields are pre-populated                                │
│ 7. Change the description, save, reload — confirm the edit persisted                                             │
│ 8. Check the profile card shows: description snippet, key theme chips, market size, regulatory context           │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 3: Industry Hierarchy Linking                                                                               │
│                                                                                                                  │
│ Goal: Link existing org and person profiles to the industry.                                                     │
│                                                                                                                  │
│ 1. On the Digital Health industry card, click Entities -> button                                                 │
│ 2. Confirm the Industry Children modal opens (empty at first)                                                    │
│ 3. Use the search box to find an existing org profile (e.g. "Silverchain")                                       │
│ 4. Click to link it — confirm it appears in the children list                                                    │
│ 5. Search and link a person profile (e.g. any existing person)                                                   │
│ 6. Close the modal, reload the page                                                                              │
│ 7. Confirm the industry card now shows child count badges (e.g. "1 org, 1 person")                               │
│ 8. Re-open the modal — confirm linked entities are listed                                                        │
│ 9. Test unlinking: if there's a remove/unlink action, use it; otherwise note this for future work                │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 4: Industry Profile in Cortex Sync                                                                          │
│                                                                                                                  │
│ Goal: Verify profile sync includes industry [[concepts/metadata|metadata]].                                                            │
│                                                                                                                  │
│ 1. Click Publish to Cortex (or create/edit any profile to trigger auto-sync)                                     │
│ 2. Go to Jobs tab, find the stakeholder_profile_sync job                                                         │
│ 3. Expand job details — confirm the input_data includes:                                                         │
│   - Industry profile with target_type: "industry"                                                                │
│   - Fields: description, key_themes, regulatory_context, market_size                                             │
│   - industry_affiliations array on child profiles                                                                │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 5: Intel Submission for Industry                                                                            │
│                                                                                                                  │
│ Goal: Submit intel targeted at an industry profile.                                                              │
│                                                                                                                  │
│ 1. Go to Intel Board, Submit tab                                                                                 │
│ 2. Enter stakeholder name matching the industry (e.g. "Digital Health")                                          │
│ 3. Set target type to Industry (if dropdown exists) or type industry                                             │
│ 4. Submit a URL or note                                                                                          │
│ 5. Confirm the intel item appears in the Feed with the factory icon type badge                                   │
│ 6. Go back to Market Radar Profiles tab — click the industry card's intel badge                                  │
│ 7. Confirm the intel overlay shows the submitted item                                                            │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 6: Intel Email Ingest for Industry                                                                          │
│                                                                                                                  │
│ Goal: Verify email-submitted intel with [industry] tag is parsed correctly.                                      │
│                                                                                                                  │
│ 1. Send an email to intel.longboardfella@[[entities/gmail|gmail]].com with subject:                                                 │
│ Intel: Digital Health [industry] — new TGA digital health framework                                              │
│ 2. Body: a brief note or URL about the topic                                                                     │
│ 3. Wait for the 5-minute cron to pick it up (or run manually)                                                    │
│ 4. Check Intel Board — the item should appear with target_type = industry                                        │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 7: Cross-Org Intel Sharing                                                                                  │
│                                                                                                                  │
│ Goal: Share intel from one org to another without duplication.                                                   │
│                                                                                                                  │
│ 1. On the Intel Board, find an owned intel item                                                                  │
│ 2. Click the Share button (purple, admin only)                                                                   │
│ 3. Enter the target org name (e.g. "Escient") in the prompt                                                      │
│ 4. Confirm success alert                                                                                         │
│ 5. Switch org context to "Escient" (admin filter dropdown)                                                       │
│ 6. Confirm the shared item appears with:                                                                         │
│   - Purple "Shared from [Longboardfella]" badge                                                                  │
│   - The item is read-only (no dismiss button)                                                                    │
│ 7. Switch back to Longboardfella — confirm the original item still shows as owned (no shared badge)              │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 8: Profile Intel View with Shared Items                                                                     │
│                                                                                                                  │
│ Goal: Verify profile intel overlay includes cross-org shared intel.                                              │
│                                                                                                                  │
│ 1. Find a profile that has both owned intel and shared intel                                                     │
│ 2. Click the intel count badge on the profile card                                                               │
│ 3. Confirm the overlay shows:                                                                                    │
│   - Owned items (no badge)                                                                                       │
│   - Shared items with purple "Shared from [Org]" chip                                                            │
│ 4. Confirm no duplicates                                                                                         │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 9: Industry Digest (On-Demand)                                                                              │
│                                                                                                                  │
│ Goal: Queue and receive an industry-scoped signal_digest.                                                        │
│                                                                                                                  │
│ 1. On the Digital Health industry card, click Industry Report button                                             │
│ 2. Confirm the confirmation dialog mentions Cortex                                                               │
│ 3. Confirm success — note the Job ID                                                                             │
│ 4. Go to Jobs tab — find the job:                                                                                │
│   - Type should be signal_digest (NOT market_radar)                                                              │
│   - Input data should contain scope_type: "industry"                                                             │
│   - Should have scope_profile_key, child_profile_keys, child_org_names                                           │
│   - Should have key_themes, regulatory_context, market_size                                                      │
│ 5. Wait for Cortex worker to process (or check back later)                                                       │
│ 6. Once completed, go to Reports tab — confirm industry report appears with correct type                         │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 10: Watch + Daily Cron for Industry                                                                         │
│                                                                                                                  │
│ Goal: Confirm watched industry profiles are picked up by the daily cron.                                         │
│                                                                                                                  │
│ 1. Edit the Digital Health industry profile, set watch status to Watch                                           │
│ 2. Run the watch cron manually:                                                                                  │
│ php /path/to/public_html/market_radar_watch_cron.php?key=WATCH_CRON_KEY                                          │
│ 2. Or check the cron log after 7am AEST                                                                          │
│ 3. Verify in the cron output / Jobs tab:                                                                         │
│   - A signal_digest job was queued (not market_radar)                                                            │
│   - Input contains scope_type: "industry", child keys, themes                                                    │
│   - created_by is watch_cron_industry                                                                            │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 11: Network Explorer — Industry Network View                                                                │
│                                                                                                                  │
│ Goal: Verify the new Industry Network view mode works.                                                           │
│                                                                                                                  │
│ 1. Go to the Network tab in Market Radar                                                                         │
│ 2. Select Industry Network from the view mode dropdown                                                           │
│ 3. Click Generate Graph                                                                                          │
│ 4. Confirm a [[concepts/stakeholder-graph-view|stakeholder_graph_view]] job is queued with view_mode: "industry_network"                             │
│ 5. Once Cortex processes it, confirm the graph renders with:                                                     │
│   - Industry [[concepts/nodes|nodes]]                                                                                               │
│   - Org/person nodes connected via belongs_to_industry edges                                                     │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 12: Help System Verification                                                                                │
│                                                                                                                  │
│ Goal: Confirm help content is accurate.                                                                          │
│                                                                                                                  │
│ 1. Click the ? help button in Market Radar                                                                       │
│ 2. Check each tab:                                                                                               │
│   - Overview — step 1 mentions industries and hierarchy                                                          │
│   - Profiles — Industry type is listed with description; Cross-Org Intel Sharing section exists                  │
│   - Submitting Intel — mentions industry target type and type icons                                              │
│   - Signals & Digests — Industry Digests section present; Network Graph lists Industry Network mode              │
│                                                                                                                  │
│ ---                                                                                                              │
│ Step 13: Edge Cases & Cleanup                                                                                    │
│                                                                                                                  │
│ 1. Delete an industry profile — confirm industry_affiliations for that profile are cleaned up (children should   │
│ no longer reference it)                                                                                          │
│ 2. Delete a child profile — confirm its industry_affiliations rows are removed                                   │
│ 3. Share then unshare — if unshare API exists, call it and confirm the item disappears from the receiving org's  │
│ feed                                                                                                             │
│ 4. Empty industry — create an industry with no children, queue a report — confirm it doesn't crash (should       │
│ produce a thin digest)                                                                                           │
│ 5. Duplicate share — try sharing the same intel to the same org twice — should be silently ignored (UNIQUE       │
│ constraint)                                                                                                      │
│                                                                                                                  │
│ ---                                                                                                              │
│ Pass Criteria                                                                                                    │
│                                                                                                                  │
│ All 13 steps complete without errors. Industry profiles appear correctly in all views, cross-org sharing works   │
│ bidirectionally, and industry digests route through signal_digest (not market_radar).

## Related Concepts
- [[concepts/intel-matching|intel matching]] — [Wikipedia](https://en.wikipedia.org/wiki/intel_matching)
- [[concepts/stakeholder-profiles|stakeholder profiles]] — [Wikipedia](https://en.wikipedia.org/wiki/stakeholder_profiles)
- [[concepts/canonical-names|canonical names]] — [Wikipedia](https://en.wikipedia.org/wiki/canonical_names)
- [[concepts/case-insensitive-comparison|case-insensitive comparison]] — [Wikipedia](https://en.wikipedia.org/wiki/case-insensitive_comparison)

## Related Entities
- [[entities/claude|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)
- [[entities/no-intel-n|No Intel (N)]] — [Wikipedia](https://en.wikipedia.org/wiki/No_Intel_%28N%29)