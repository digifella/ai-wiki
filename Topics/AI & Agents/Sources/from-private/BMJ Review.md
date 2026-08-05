---
wiki-ingested: true
domain: health-wellbeing
group: health-practice-patient-knowledge
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

Objective New AI technologies are being rapidly adopted by healthcare professionals, yet existing organisational [[concepts/governance|governance]] often lacks the processes necessary to oversee their safe and responsible use. Previous [[concepts/ai-governance|AI governance]] frameworks have largely focused on high-level AI [[concepts/ethics|ethics]] principles, leaving healthcare organisations struggling to translate these principles into practice, assess risk, and embed [[concepts/ai-oversight|AI oversight]] into existing processes. This study aimed to develop and validate a practice-oriented AI governance framework that supports the safe and responsible [[concepts/adoption|adoption]] of AI in healthcare organisations. Methods and analysis We developed an AI governance framework using a multimethod approach that drew on a [[concepts/scoping-review|scoping review]], [[concepts/document-processing|document analysis]], and [[concepts/semi-structured-interviews|semi-structured interviews]]. The framework unifies ethics and governance principles, delivers tiered oversight aligned with organisational digital maturity, and incorporates a structured review checklist for assessing [[concepts/ai-tools|AI tools]]. Validation was undertaken through stakeholder workshops and application of the framework to exemplar AI tools in real-world healthcare settings. Results The resulting framework demonstrated usability, relevance, and practical utility when applied to exemplar AI tools. Stakeholder validation showed that the review checklist was able to identify key risks, support structured assessment, and guide [[concepts/decision-making|decision-making]] across different AI [[concepts/use-cases|use cases]]. The framework enabled proportionate oversight, [[concepts/integration|integration]] with existing organisational processes, and consideration of AI risks across the lifecycle of development, implementation, and use. Conclusion This practice-oriented AI governance framework provides an actionable approach that links ethics principles to operational governance in healthcare organisations. By supporting tiered oversight, structured review, and ongoing monitoring, the framework addresses a gap in a field where AI governance guidance remains largely conceptual and offers a practical pathway for implementing safe and responsible AI in healthcare settings.

[[entities/paul|Paul]] comment:

Paper fills a necessary gap

Although many theoretical frameworks exist, most 
provide broad ethics and governance principles, leaving a gap between principle and practical 
application. [8] Few frameworks in the current literature have been tested or implemented in 
healthcare settings, and even fewer are aligned with the [[concepts/complex-workflows|complex workflows]] and decision-making 
processes of healthcare organisations. It also remains unclear how ethics and governance 
responsibilities should be operationalised across distinct stages of the AI lifecycle or embedded into 
existing processes for patient safety and digital [[concepts/health|health]]. [9] 

Additionally, limited [[concepts/attention|attention]] has been 
given to the varying levels of digital maturity needed to assess, implement, and monitor AI 
effectively across diverse healthcare contexts. [5]

The framework was developed and refined in four stages:
Stage 1: Understanding governance needs: An initial structure for the framework was developed 
and refined based on the results of the scoping review, which is reported separately. [14] The 
scoping review examined 77 frameworks for healthcare organisations implementing AI tools for 
clinical or operational purposes. From these, we derived four components that form a practical AI 
governance framework:
1. Set of guiding principles.
2. Organisational oversight mechanism (e.g. governance committee).
3. Method to review or assess AI tools (e.g. questions, checklist items, supporting materials).
4. Review timeline or consideration of the AI life cycle stages
A grounded [[concepts/theory|theory]] 
approach enabled the inductive development of concepts that were grounded in the experience and 
professional expertise of participants. This method was selected because it provides a systematic 
procedure for generating theory from empirical data where existing models may be limited or 
underdeveloped. [15] The analysis informed the framework by identifying practical governance 
needs, common challenges, and priority areas for safe and responsible AI in healthcare. Key themes 
extracted from the interviews included data governance, ethical and legal [[concepts/accountability|accountability]], workforce 
capability, risk stratification, clinical integration, and equity. 

(1) Home-based Eligibility Analysis & Recommendation Tool (HEART)
Summary: This in-house developed AI tool was developed to help identify hospital patients who 
may be suitable for home-based care. The tool supports an existing process by which clinicians 
identify patients who may be suitable based on certain criteria. It reviews patient records twice a 
day and suggests those most likely to meet eligibility criteria. This helps clinical teams make faster 
decisions, improves patient outcomes, and frees up hospital beds. However, staff remain in control, 
with the tool supporting not replacing clinical judgement.
(2) Aidoc CT Tool [17].
Summary: This commercially developed AI tool is used in radiology to help flag urgent findings on 
CT scans, such as brain bleeds, spine fractures, or blood clots, so radiologists can review them 
faster. The goal is to reduce delays, improve patient safety, and support quicker treatment decisions. 
Radiologists remain responsible for reviewing scans and all related decisions, with the AI tool 
serving as an additional review to help detect serious issues earlier.
(3) Clostridioides difficile (C. diff) Classification Tool.
Summary: This co-developed (university and hospital) AI tool helps infection prevention teams to 
classify C. diff infections. It uses hospital data to automatically apply national definitions, saving 
time and reducing the risk of manual errors. The tool supports surveillance and reporting, but final 
decisions rest with the clinical team

For each 
case study, project teams completed the checklist using a think-aloud protocol. [18] This allowed 
real-time feedback on the usability, relevance, and clarity of the checklist items. 

Three dominant mechanisms for organisational oversight emerged from our analysis. These 
included: (1) creating a dedicated AI governance committee; (2) expanding an existing governance 
committee to include AI oversight; and (3) integrating AI governance into existing non-AI specific 
governance processes. To account for the varying levels of digital maturity and resourcing across 
healthcare organisations, we developed a tiered approach for organisational oversight.

p11 - line 38. c. Digitally mature organisations  - should be Digitally immature organisations (since a. is already for digitally mature)

Q: AI tools is a narrow term as of [[concepts/date-2026-04-13|2026]]. Should the concept be expanded to encompass frameworks such as [[concepts/openclaw|openclaw]], [[concepts/nemoclaw|nemoclaw]] or complete framework environments like [[entities/claude-co-work|Claude Cowork]]? Or is this intended for specific AI projects that may or may not be built upon those tools and frameworks?

Has the team considered the use of AI in the application pathway? i.e. having the AI [[entities/agent|agent]] part of the human-in-the loop consideration of AI projects? The use of systems in this manner is rapidly accelerating and the current processes, if totally human-bound are likely to be overwhelmed by volume. The result may be [[concepts/shadow-ai|shadow AI]] where end user groups implement solutions outside of central control.

Risk committees?



At the study site, internal stakeholders supported establishing a high-level, multidisciplinary AI 
governance committee during the early stages of [[concepts/ai-integration|AI integration]]. This committee would provide 
centralised oversight for ethical, clinical, operational, legal, and technical considerations, with a 
phased plan to embed responsibilities within existing structures over time. A direct reporting line to 
the Executive Committee (the main body exercising managerial responsibility for the performance 
of all activities within the organisation) was favoured to ensure visibility, organisational alignment, 
and resourcing. Two alternative options, reporting to the Digital Health Steering Committee 
(accountable for overseeing and setting the overall strategic direction across all digital health 
programs of work) or directly to the Board (effectively bypassing the Executive Committee), were 
considered less effective due to perceived gaps in focus or proximity to organisation-wide 
operational decision-making. 

Our governance framework aims to address this gap by supporting AI 
governance literacy, creating structured approval pathways, and enabling robust monitoring. To 
support this, organisations are recommended to develop tailored internal policies and terms of 
reference that clearly define the governance committee’s scope, functions, and decision-making 
authority. The committee’s proposed functions, reporting lines, and membership serve as a practical 
foundation for governing clinical and operational AI tools within a care delivery setting (see 
Supplementary file 1, Appendix 1)

Several limitations warrant discussion. The framework was developed and tested within a 
single healthcare organisation and [[entities/will|will]] likely require modification in other contexts. Although the 
checklist was validated on three AI use cases, a larger sample across multiple settings would 
strengthen generalisability. Future research should evaluate the framework’s implementation over 
time, including its impact on decision-making quality, project outcomes, and staff engagement.

## Related Concepts
- [[concepts/ai-governance-framework|AI governance framework]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_governance_framework)
- [[concepts/organisational-governance|organisational governance]] — [Wikipedia](https://en.wikipedia.org/wiki/organisational_governance)
- [[concepts/high-level-ai-ethics-principles|high-level AI ethics principles]] — [Wikipedia](https://en.wikipedia.org/wiki/high-level_AI_ethics_principles)
- [[concepts/cybersecurity|risk assessment]] — [Wikipedia](https://en.wikipedia.org/wiki/risk_assessment)
- [[concepts/process-embedding|process embedding]] — [Wikipedia](https://en.wikipedia.org/wiki/process_embedding)
- digital maturity — [Wikipedia](https://en.wikipedia.org/wiki/digital_maturity)
- tiered oversight — [Wikipedia](https://en.wikipedia.org/wiki/tiered_oversight)
- structured review checklist — [Wikipedia](https://en.wikipedia.org/wiki/structured_review_checklist)
- life cycle stages — [Wikipedia](https://en.wikipedia.org/wiki/life_cycle_stages)
- patient safety — [Wikipedia](https://en.wikipedia.org/wiki/patient_safety)
- healthcare contexts — [Wikipedia](https://en.wikipedia.org/wiki/healthcare_contexts)

## Related Entities
- [[entities/bmj-review|BMJ Review]] — [Wikipedia](https://en.wikipedia.org/wiki/BMJ_Review)
- healthcare professionals — [Wikipedia](https://en.wikipedia.org/wiki/healthcare_professionals)
- governance committee — [Wikipedia](https://en.wikipedia.org/wiki/governance_committee)
- scoping review — [Wikipedia](https://en.wikipedia.org/wiki/scoping_review)
- document analysis — [Wikipedia](https://en.wikipedia.org/wiki/document_analysis)
- semi-structured interviews — [Wikipedia](https://en.wikipedia.org/wiki/semi-structured_interviews)
- stakeholder workshops — [Wikipedia](https://en.wikipedia.org/wiki/stakeholder_workshops)
- exemplar AI tools — [Wikipedia](https://en.wikipedia.org/wiki/exemplar_AI_tools)
- healthcare organisations — [Wikipedia](https://en.wikipedia.org/wiki/healthcare_organisations)