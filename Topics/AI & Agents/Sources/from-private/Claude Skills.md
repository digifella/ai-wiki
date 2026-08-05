---
wiki-ingested: true
domain: philosophy-religion
group: philosophy-ethics-logic
type: "source-summary"
---
### [[concepts/skills|Skills]] Library

[](https://github.com/obra/superpowers#skills-library)

**Testing**

- **test-driven-development** - RED-GREEN-REFACTOR cycle (includes testing anti-patterns reference)

**[[concepts/debugging|Debugging]]**

- **systematic-debugging** - 4-phase root cause process (includes root-cause-tracing, defense-in-depth, condition-based-waiting techniques)
- **verification-before-completion** - Ensure it's actually fixed

**Collaboration**

- **brainstorming** - Socratic [[concepts/design|design]] refinement
- **writing-plans** - Detailed implementation plans
- **executing-plans** - Batch execution with checkpoints
- **dispatching-[[concepts/parallel-agents|parallel-agents]]** - Concurrent subagent [[concepts/workflow|workflows]]
- **requesting-code-review** - Pre-review checklist
- **receiving-code-review** - Responding to feedback
- **using-git-worktrees** - Parallel development branches
- **finishing-a-development-branch** - Merge/PR decision workflow
- **subagent-driven-development** - [[concepts/rapid-prototyping|Fast iteration]] with two-stage review (spec [[concepts/compliance|compliance]], then [[concepts/code|code]] quality)

**[[entities/meta-ai|Meta]]**

- **writing-skills** - Create new skills following [[concepts/best-practices|best practices]] (includes testing [[concepts/methodology|methodology]])
- **using-superpowers** - Introduction to the skills system

## [[concepts/philosophy|Philosophy]]

[](https://github.com/obra/superpowers#philosophy)

- **Test-Driven Development** - Write tests first, always
- **Systematic over ad-hoc** - Process over guessing
- **Complexity reduction** - Simplicity as primary goal
- **Evidence over claims** - Verify before declaring success

I want the cortex system to ingest org charts (pdf, word, PPTX) and strategic plans and industry reports
and intellgiently examine its graph network to deduce who are ket stakeholders for interest and follow up or tracking. I
realise we [[entities/will|will]] need cortex to be given a variety of signals to kick start this process - signals from the profile of the
subscribing company. So for me (Longboardfella [[concepts/consulting|Consulting]]) my profile would need to have some fields specifying my key
industries of interest (in my case Healthcare and Teriary Education), key organisations for platinum watch (=priority
watch) and key stakeholders to watch. We have some of those already in the tables for the organisations and stakeholders -
they need to be linked to the strategic interests of the subscribing organisation and then sent to cortex daily so that the
 ingests via email into Cortex can be parsed, intelligentaly decomposed to marketing signals ready for the weekly run of
industry and organisaton marketing signals (when combined with broader internet searching for signal enrichment). I need
you to consider all this and produce a spec I can give Cortex to get building its side. It has already built certain
aspects. Please check its repo here: \\[[entities/wsl|wsl]].localhost\[[entities/ubuntu|Ubuntu]]\home\longboardfella\cortex_suite


v3.4.81 — [[entities/intel|Intel]] [[concepts/notes|Notes]] System (13 commits pushed)

  ┌──────┬─────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Task │                                                What                                                 │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 1    │ Schema: intel_references, intel_urls, org_strategic_profile tables + column migrations              │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 2    │ ingest_intel_note API handler — receives Cortex-processed notes, creates intel + stubs + references │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 3    │ download_intel_md — [[concepts/markdown|markdown]] export with YAML front matter                                          │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 4    │ Suppression model — digest_namespace column for per-report-type suppression                         │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 5    │ Profile sync — org_strategic_profile included in Cortex sync payloads                               │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 6    │ market_radar_sector_report_cron.php — weekly industry→org→person tree walk                          │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 7    │ Intel board UI — markdown rendering, confidence badges, download button                             │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 8    │ list_intel_references API + profile_confidence in board queries                                     │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 9    │ Strategic profile admin UI + get/save [[concepts/api-actions|API actions]]                                                   │
  ├──────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 10   │ Version bump, deploy zip, push                                                                      │
  └──────┴─────────────────────────────────────────────────────────────────────────────────────────────────────┘

  Deploy: site.zip is built and ready to upload to public_html/. The sector report cron needs adding to cPanel: 0 8 * * 1
  (Monday 8am).

## Related Concepts
- [[concepts/testing|Testing]] — [Wikipedia](https://en.wikipedia.org/wiki/Testing)
- [[concepts/code-review-benchmark|Code Review]] — [Wikipedia](https://en.wikipedia.org/wiki/Code_Review)
- [[concepts/test-driven-development|Test-Driven Development]] — [Wikipedia](https://en.wikipedia.org/wiki/Test-Driven_Development)
- Systematic [[concepts/debugging|Debugging]] — [Wikipedia](https://en.wikipedia.org/wiki/Systematic_Debugging)
- [[concepts/verification|Verification]] Before Completion — [Wikipedia](https://en.wikipedia.org/wiki/Verification_Before_Completion)
- [[concepts/brainstorming|Brainstorming]] — [Wikipedia](https://en.wikipedia.org/wiki/Brainstorming)
- [[concepts/writing|Writing]] Plans — [Wikipedia](https://en.wikipedia.org/wiki/Writing_Plans)
- Executing Plans — [Wikipedia](https://en.wikipedia.org/wiki/Executing_Plans)
- Dispatching [[concepts/parallel-agents|Parallel Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/Dispatching_Parallel_Agents)
- Requesting [[concepts/code|Code]] Review — [Wikipedia](https://en.wikipedia.org/wiki/Requesting_Code_Review)
- Receiving Code Review — [Wikipedia](https://en.wikipedia.org/wiki/Receiving_Code_Review)
- Using Git Worktrees — [Wikipedia](https://en.wikipedia.org/wiki/Using_Git_Worktrees)

## Related Entities
- Code Review — [Wikipedia](https://en.wikipedia.org/wiki/Code_Review)
- Testing — [Wikipedia](https://en.wikipedia.org/wiki/Testing)
- Healthcare — [Wikipedia](https://en.wikipedia.org/wiki/Healthcare)
- Higher Education — [Wikipedia](https://en.wikipedia.org/wiki/Higher_Education)