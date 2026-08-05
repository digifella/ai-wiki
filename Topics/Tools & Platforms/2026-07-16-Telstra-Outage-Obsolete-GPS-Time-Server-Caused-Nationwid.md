---
wiki-ingested: true
title: "Telstra Outage: Obsolete GPS Time Server Caused Nationwide Disruption"
date: 2026-07-16
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: devices-access-networks
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-07-16 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

## Telstra Outage: Obsolete GPS Time Server Caused Nationwide Disruption
**Clip title:** Telstra had a REALLY bad time last week
**[[entities/tasia-custode|Author]] / channel:** Level 2 Jeff
**URL:** https://www.youtube.com/watch?v=1T9xQy-dsQo

### Summary
The video centers on the recent [[entities/telstra|Telstra]] [[concepts/network-outage|network outage]] in Australia, which led to potential fines of up to $30 million, attributing the widespread disruption to an obsolete GPS time synchronization server. The host, who maintains a personal "[[concepts/clock-tower|Clock Tower]]" of various [[concepts/timing-equipment|timing equipment]], delves into the specifics of this incident, using his own vintage GPS [[concepts/time-server|time server]] to illustrate the core problem.

The root cause of the outage was a known issue called the GPS Week Number Rollover bug, affecting older GPS receivers with unpatched firmware. Every 1024 weeks (approximately 19.7 years), the GPS week counter resets to [[concepts/concept-of-nothingness|zero]]. Telstra's problematic server, a Symmetricom SyncServer S300 from 2006, was due for a natural rollover in 2026. However, a restart of the device prematurely triggered this bug, causing the server to misinterpret the current date and revert its internal clock to the year 2006.

This time discrepancy proved catastrophic for Telstra's services. Modern [[concepts/digital-infrastructure|digital infrastructure]], including mobile networks, payment terminals, and emergency call services (Triple [[concepts/concept-of-nothingness|Zero]]), relies critically on accurate time synchronization for validating [[concepts/security|security]] certificates, managing network operations, and maintaining data [[concepts/honesty|integrity]]. With their primary time sources reporting an outdated year, these dependent systems ceased to function correctly, leading to a nationwide outage that stranded hundreds of thousands of customers. The host speculates that Telstra's insufficient redundancy, possibly relying on only two such time servers, exacerbated the issue, as a single malfunctioning or restarted server could propagate incorrect time across the network without a third, independent reference to validate against.

The key takeaway emphasizes the non-negotiable [[concepts/value|importance]] of maintaining up-to-date and redundant timing infrastructure. The [[entities/speaker|speaker]] demonstrates that modern, reliable GPS time servers are available and relatively affordable, costing a few thousand dollars for a basic unit or an estimated $10,000 to $20,000 for a fully integrated and redundant system suitable for critical applications. The failure to invest this comparatively small amount in replacing or upgrading Telstra's obsolete equipment resulted in a massive financial penalty, significant operational disruption, and a severe blow to customer [[concepts/trust|trust]], highlighting that cutting corners on fundamental infrastructure components can have exponentially greater consequences.

### Video Description & Links
#### Description
Telstra (sorry for the mispronunciation, I always read it 'Telestra' lol) had a terrible time last week.

In fact, they were temporarily 20 years behind the times! Why did this happen, and how could they have avoided it? Let's take a quick look into timing history to find out.

  - Information Age Article: https://ia.acs.org.au/article/2026/telstra-outage-blamed-on-known-bug-in-obsolete-server.html
  - Guardian Article: https://www.theguardian.com/business/2026/jul/10/telstra-ceo-deeply-sorry-for-outage-and-admits-risk-of-time-keeping-failure-was-known-ntwnfb
  - Financial Review Article: https://www.afr.com/companies/telecommunications/trains-halted-as-telstra-mobile-outage-sweeps-nation-20260708-p60dik
  - Discussion of GPS 1024 week rollover bug on the Time Nuts mailing list: https://febo.com/pipermail/time-nuts_lists.febo.com/2026-July/110851.html

Support me on Patreon: https://www.patreon.com/geerlingguy
Sponsor me on GitHub: https://github.com/sponsors/geerlingguy
Merch: https://www.redshirtjeff.com
Main Channel: https://www.youtube.com/@JeffGeerling
2nd Channel: https://www.youtube.com/@GeerlingEngineering

#### Tags
`time`, `telstra`, `telestra`, `australia`, `telecom`, `timing`, `server`, `ntp`, `ptp`, `irig`, `black burst`, `gps`, `signal`, `truetime`, `symmetricom`, `2006`, `bug`, `networking`, `network`, `sysadmin`, `outage`, `down`, `cell`, `nservice`, `services`, `call`, `fines`, `fine`, `ceo`, `quorum`, `rollover`, `week`, `failure`, `fail`, `infrastructure`

#### URLs
- https://ia.acs.org.au/article/2026/telstra-outage-blamed-on-known-bug-in-obsolete-server.html
- https://www.theguardian.com/business/2026/jul/10/telstra-ceo-deeply-sorry-for-outage-and-admits-risk-of-time-keeping-failure-was-known-ntwnfb
- https://www.afr.com/companies/telecommunications/trains-halted-as-telstra-mobile-outage-sweeps-nation-20260708-p60dik
- https://febo.com/pipermail/time-nuts_lists.febo.com/2026-July/110851.html
- https://www.patreon.com/geerlingguy
- https://github.com/sponsors/geerlingguy
- https://www.redshirtjeff.com
- https://www.youtube.com/@JeffGeerling
- https://www.youtube.com/@GeerlingEngineering

## Related Concepts
- [[concepts/network-outage|Network Outage]] — [Wikipedia](https://en.wikipedia.org/wiki/Network_Outage)
- [[concepts/gps-time-synchronization|GPS Time Synchronization]] — [Wikipedia](https://en.wikipedia.org/wiki/GPS_Time_Synchronization)
- [[concepts/obsolete-technology|Obsolete Technology]] — [Wikipedia](https://en.wikipedia.org/wiki/Obsolete_Technology)
- [[concepts/testing|Root Cause Analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/Root_Cause_Analysis)
- [[concepts/telecommunications-infrastructure|Telecommunications Infrastructure]] — [Wikipedia](https://en.wikipedia.org/wiki/Telecommunications_Infrastructure)
- [[concepts/time-server|Time Server]] — [Wikipedia](https://en.wikipedia.org/wiki/Time_Server)
- [[concepts/system-disruption|System Disruption]] — [Wikipedia](https://en.wikipedia.org/wiki/System_Disruption)
- [[concepts/regulatory-fines|Regulatory Fines]] — [Wikipedia](https://en.wikipedia.org/wiki/Regulatory_Fines)
- [[concepts/clock-tower|Clock Tower]] — [Wikipedia](https://en.wikipedia.org/wiki/Clock_Tower)
- [[concepts/timing-equipment|Timing Equipment]] — [Wikipedia](https://en.wikipedia.org/wiki/Timing_Equipment)
- GPS Week Number Rollover — [Wikipedia](https://en.wikipedia.org/wiki/GPS_Week_Number_Rollover)
- [[concepts/gps-time-synchronization|Time Synchronization]] — [Wikipedia](https://en.wikipedia.org/wiki/Time_Synchronization)
- [[concepts/network-failover|Network Redundancy]] — [Wikipedia](https://en.wikipedia.org/wiki/Network_Redundancy)
- Firmware Vulnerabilities — [Wikipedia](https://en.wikipedia.org/wiki/Firmware_Vulnerabilities)
- Clock Drift — [Wikipedia](https://en.wikipedia.org/wiki/Clock_Drift)
- [[concepts/security|Security]] Certificate Validation — [Wikipedia](https://en.wikipedia.org/wiki/Security_Certificate_Validation)
- Legacy Technology — [Wikipedia](https://en.wikipedia.org/wiki/Legacy_Technology)
- Operational [[concepts/resilience|Resilience]] — [Wikipedia](https://en.wikipedia.org/wiki/Operational_Resilience)
- [[concepts/data-integrity|Data Integrity]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_Integrity)
- Emergency Services [[concepts/software-reliability|Reliability]] — [Wikipedia](https://en.wikipedia.org/wiki/Emergency_Services_Reliability)
- [[concepts/server-administration|Infrastructure Maintenance]] — [Wikipedia](https://en.wikipedia.org/wiki/Infrastructure_Maintenance)

## Related Entities
- [[entities/telstra|Telstra]] — [Wikipedia](https://en.wikipedia.org/wiki/Telstra)
- [[entities/level-2-jeff|Level 2 Jeff]] — [Wikipedia](https://en.wikipedia.org/wiki/Level_2_Jeff)
- Symmetricom SyncServer S300 — [Wikipedia](https://en.wikipedia.org/wiki/Symmetricom_SyncServer_S300)
- GPS — [Wikipedia](https://en.wikipedia.org/wiki/GPS)
- Triple Zero — [Wikipedia](https://en.wikipedia.org/wiki/Triple_Zero)
- Time Nuts — [Wikipedia](https://en.wikipedia.org/wiki/Time_Nuts)
- Information Age — [Wikipedia](https://en.wikipedia.org/wiki/Information_Age)
- The Guardian — [Wikipedia](https://en.wikipedia.org/wiki/The_Guardian)
- Financial Review — [Wikipedia](https://en.wikipedia.org/wiki/Financial_Review)
- Patreon — [Wikipedia](https://en.wikipedia.org/wiki/Patreon)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- Jeff Geerling — [Wikipedia](https://en.wikipedia.org/wiki/Jeff_Geerling)