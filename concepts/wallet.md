---
type: concept
domain: maths-logic-crypto
tags:
  - "EHR"
  - "EMR"
  - "health-informatics"
  - "digital-health"
  - "allied-health"
  - "data-integration"
  - "clinical-workflow"
  - "interoperability"
aliases:
  - "Electronic Health Record"
  - "Electronic Medical Record"
  - "EMR"
  - "eHR"
summary: Digital record of a patient's health information. EMRs refer to data within a single organization, while EHRs support information sharing across different healthcare entities. Critical for clinical decision-making, interoperability, and coordinated care.
updated: 2026-07-12
group: cryptography-codes-ciphers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# EHR (Electronic Health Record)

Systematic digital record of a patient’s [[concepts/health|health]] data across the [[concepts/health-care|healthcare]] continuum. Distinct from EMR (Electronic Medical Record), which is typically siloed within a single practice, EHRs are designed for interoperability and exchange across diverse health systems.

## Core Benefits
- **[[concepts/information-access|Information Access]]**: Immediate access to complete patient history, reducing diagnostic errors.
- **[[concepts/coordination|Coordination]]**: Enables seamless care transitions between providers, specialties, and facilities.
- **Efficiency**: Streamlines administrative tasks, prescription management, and billing processes.

## Allied Health Impact
- Enhanced coordination among [[concepts/multidisciplinary-teams|multidisciplinary teams]] improves [[concepts/medical-outcomes|patient outcomes]].
- Reduces duplication of tests and procedures through shared data visibility.
- Standardized data entry supports better tracking of long-term conditions.
- *Reference*: [[lab-notes/2026-05-26-The-Biggest-Benefit-of-EMRs-EHRs-for-Allied-Health|The Biggest Benefit of EMRs EHRs for Allied Health]] details specific workflow improvements for non-physician practitioners.

## Technical & Security Considerations
- **Standards**: Relies on HL7, FHIR, and SNOMED CT for [[concepts/data-structure|data structure]] and [[concepts/terminology|terminology]].
- **[[concepts/privacy|Privacy]]**: Must comply with regulations like [[concepts/hipaa|HIPAA]] (US) or [[entities/my-health-record|My Health Record]] standards (AU).
- **Integration**: Often linked with [[concepts/distributed-ledger|blockchain]] solutions for [[concepts/secure|secure]], immutable audit trails and patient-controlled access keys.
