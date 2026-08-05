---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "computing"
  - "data-exchange"
  - "healthcare"
  - "standardization"
  - "EDI"
  - "automation"
  - "interoperability"
  - "secure-transmission"
  - "business-documents"
aliases:
  - "EDI"
  - "computer-to-computer exchange"
  - "electronic business documents"
summary: EDI is the standardized, automated computer-to-computer exchange of business documents between partners, with principles extending to health information exchange in clinical settings.
updated: 2026-07-11
group: data-pipelines-sync-storage
title: Electronic Data Interchange
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

**Electronic Data Interchange** (EDI) is the computer-to-computer exchange of business documents in a standard electronic format between business partners. It eliminates manual entry and reduces errors in transactions such as purchase orders, invoices, and shipping notices.

### Core Characteristics
- **Standardization**: Relies on structured formats (e.g., ANSI X12, EDIFACT) to ensure interoperability across disparate systems.
- **Automation**: Enables straight-through processing without human intervention.
- **[[concepts/security|Security]]**: Often employs AS2 or SFTP for [[concepts/secure|secure]] transmission, maintaining [[concepts/data-integrity|data integrity]] and confidentiality.

### Relation to Health Information Exchange (HIE)
While traditional EDI focuses on commercial transactions, the principles extend to **[[concepts/health-information-exchange|Health Information Exchange]]** (HIE), where clinical data is transferred between [[concepts/health-sector|healthcare organizations]]. The evolution of HIE mirrors EDI's trajectory toward standardized, secure, and interoperable data flows, though it [[concepts/faces|faces]] unique challenges regarding patient [[concepts/privacy|privacy]] and clinical semantics.

- Recent analyses highlight the fragmented status of HIE across different countries, emphasizing the need for robust national infrastructure to support clinical data transfer [[lab-notes/2026-05-26-Payne---Status-of-health-information-exchange|Payne - Status of health information exchange]].
- Key challenges in [[concepts/health|health]] data exchange include varying national [[concepts/policies|policies]], lack of uniform technical standards compared to commercial EDI, and issues with data granularity and interoperability between [[concepts/vintage-computing|legacy systems]] and modern EHR platforms.

### Standards and Protocols
- **Formats**: ANSI X12 (North [[entities/america|America]]), EDIFACT (International/Europe), TRADACOMS (Retail/UK).
- **Transport**: AS2, AS4, SFTP, HTTPS.
- **Translation**: Requires Interface [[concepts/engine|Engine]] or VANs (Value-Added Networks) to translate between internal systems and standard EDI formats.
