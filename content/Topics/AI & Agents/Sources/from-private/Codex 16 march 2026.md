---
wiki-ingested: true
domain: ai-agents
group: openai-chatgpt
---
Implemented the Cortex-side network graph job.

  Key changes:

  - Added stakeholder_graph_view input validation in handoff_contract.py.
  - Wired graph snapshot generation in stakeholder_signal_store.py. It now builds scoped subgraphs, scores nodes/edges,
    emits warm-intro and shared-alumni paths, writes JSON under the external DB root graph_views/, and includes filter
    [[concepts/metadata|metadata]].
  - Added the queue handler in stakeholder_graph_view.py and registered it in init.py.
  - Updated the local worker supported types in worker/config.env so the running worker can claim
    stakeholder_graph_view.
  - Added coverage in test_handoff_contract_validation.py and test_stakeholder_signal_store.py, including an end-to-end
    graph-view payload test.

  [[concepts/verification|Verification]] passed:

  - pytest -q tests/unit/test_handoff_contract_validation.py tests/unit/test_stakeholder_signal_store.py
  - [[entities/python|python]] -m compileall cortex_engine/handoff_contract.py cortex_engine/stakeholder_signal_store.py worker/handlers/
    stakeholder_graph_view.py worker/handlers/__init__.py

## Related Concepts
- [[concepts/network-graph|network graph]] — [Wikipedia](https://en.wikipedia.org/wiki/network_graph)
- [[concepts/stakeholder-graph-view|stakeholder graph]] — [Wikipedia](https://en.wikipedia.org/wiki/stakeholder_graph)
- [[concepts/graph-snapshot|graph snapshot]] — [Wikipedia](https://en.wikipedia.org/wiki/graph_snapshot)
- [[concepts/input-validation|input validation]] — [Wikipedia](https://en.wikipedia.org/wiki/input_validation)
- [[concepts/scoped-subgraphs|scoped subgraphs]] — [Wikipedia](https://en.wikipedia.org/wiki/scoped_subgraphs)
- [[concepts/coverage-testing|coverage testing]] — [Wikipedia](https://en.wikipedia.org/wiki/coverage_testing)
- [[concepts/job-implementation|job implementation]] — [Wikipedia](https://en.wikipedia.org/wiki/job_implementation)