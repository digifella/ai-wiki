---
wiki-ingested: true
title: Li - A Framework for Big Data Governance to Advance RHINs A Case Study of China
author: Received March 11, QUAN LI, LAN LAN, NIANYIN ZENG, LEI YOU, JIN YIN, XIAOBO ZHOU, QUN MENG, Electrical Engineering
published_date: 2019
source_url: "https://doi.org/10.1109/ACCESS.2019.2910838"
category: digital-health
credibility: Peer-Reviewed
date: 2026-05-26
source_type: document
wiki-ready: true
migrated_from: library
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

---
preface_schema: '1.0'
title: 'SPECIAL SECTION ON DATA-ENABLED INTELLIGENCE FOR DIGITAL HEALTH'
source_type: 'Academic'
publisher: 'Springer'
publishing_date: 'March 11, 2019'
authors: ['Received March 11', 'QUAN LI', 'LAN LAN', 'NIANYIN ZENG', 'LEI YOU', 'JIN YIN', 'XIAOBO ZHOU', 'QUN MENG', 'Electrical Engineering']
available_at: 'https://doi.org/10.1109/ACCESS.2019.2910838'
[[concepts/keywords|keywords]]: ['data', '[[concepts/health|healthcare]]', 'china', '[[concepts/governance|governance]]', 'rhins', 'health', 'informatization', 'framework']
abstract: 'The [[concepts/emergent-behavior|emergence]] of [[concepts/big-data|big data]] presents a serious challenge to the fast growth of regional health information networks (RHINs) globally. In China, many constructors of RHINs have spontaneously and independently created governance measures, which may be valuable as a point of reference for other countries. This paper aimed to propose a big data governance framework for healthcare data based on the governance activities associated with the processing of RHINs in China. Typical methodology for RHIN case studies in China, including rich personal experience in nationwide [[concepts/consulting|consulting]], literature review, expert consultation, and interpretative structural modeling methods, was adopted. Based on the analysis of ten typical RHIN case studies, healthcare big data governance practices in China were summarized. A framework with 3 domains and 12 elements was proposed, which include a drive domain (big data strategy planning, laws and regulations, open transaction, and industry support), capability domain (healthcare big data organi- zation, collection, storage, process and analysis, and usage), and support domain (healthcare big data resource planning, [[concepts/open-standards|standards]] system, and [[concepts/privacy|privacy]] and [[concepts/security|security]] protection). We obtained 12 guidelines for healthcare big data governance. A big data governance framework with 3 domains and 12 elements was presented based on Chinese practice, which might serve as valuable references for the cross-dimensional development of RHINs, provide overall guidance for the sust

k with 3 domains and 12 elements was presented based on Chinese practice, which might serve as valuable references for the cross-dimensional development of RHINs, provide overall guidance for the [[concepts/sustainable-development|sustainable development]] of regional health informatization, and contribute to realizing the business value of healthcare big data. INDEX TERMS Big data governance, framework, regional health information networks (RHINs). I. BACKGROUND Over the past 20 years, information technology (IT) has permeated a wide variety of industries. The use of IT [[concepts/software|applications]] in the medical ﬁeld is considered rather con- servative, but its informatization has undergone signiﬁcant changes under the digital wave rush. In China, IT devel- opment in healthcare has undergone three phases: institu- tional informatization of individual healthcare institutions, industrial informatization of cross-institution healthcare information exchange (HIE), and social informatization of cross-industry creative development. In the ﬁrst phase, hospitals managed their informatization processes by themselves, and the state centrally established The associate editor coordinating the review of this manuscript and approving it for publication was Linbo Qing. and deployed business systems for public healthcare institutions using a top-down approach. Such systems served the needs of the institutions but accumulated massive amounts of internal business data that could not be shared. The second phase began in 2009, when a new medical reform required medical institutions to share data regionally, leading to a large-scale activation of Regional Health Information Networks (RHINs) throughout the country. For the ﬁrst time, medical and public healthcare data that had been scattered among the various institutions became centralized in the form of electronic health records (EHRs). This phase was mainly characterized by an internal [[concepts/consolidation|consolidation]] of the healthcare industry. The third phase began in 2015, when the explosion

ralized in the form of electronic health records (EHRs). This phase was mainly characterized by an internal consolidation of the healthcare industry. The third phase began in 2015, when the explosion of social networks created massive amounts of personal healthcare-related raw data (emotional and behavioral) and various sets of personalized daily healthcare data (mostly 50330 2169-3536 2019 IEEE. Translations and content mining are permitted for academic research only. Personal use is also permitted, but republication/redistribution requires IEEE permission. See http://www.ieee.org/publications_standards/publications/rights/index.html for more information. > **[Image 1]**: The image shows the IEEE Access logo on a white background. The main subject is the logo with "IEEE" in dark blue and "Access" in light blue, accompanied by text below stating "Multidisciplinary", "Rapid Review", and "Open Access Journal" in black with blue dots separating them. The color scheme features blue and black against the white backdrop. This logo represents a multidisciplinary, rapid review, open access journal. ---'
---
## Page 1

ack with blue dots separating them. The color scheme features blue and black against the white backdrop. This logo represents a multidisciplinary, rapid review, open access journal. ---'
---
## Page 1

SPECIAL SECTION ON DATA-ENABLED INTELLIGENCE FOR DIGITAL HEALTH
Received March 11, 2019, accepted April 9, 2019, date of publication April 12, 2019, date of current version April 25, 2019.
Digital Object Identifier 10.1109/ACCESS.2019.2910838
A Framework for Big Data Governance to
Advance RHINs: A Case Study of China
QUAN LI
1, LAN LAN2, NIANYIN ZENG
3, LEI YOU4, JIN YIN2, XIAOBO ZHOU2,4,
AND QUN MENG1,5
1School of [[concepts/population-health|Public Health]], Sun Yat-sen University, Guangzhou 510275, China
2West China Biomedical Big Data Center, West China Hospital, Sichuan University, Chengdu 610041, China
3Department of Instrumental and Electrical Engineering, Xiamen University, Xiamen 361005, China
4School of Biomedical Informatics, The University of Texas Health Science Center at Houston, Houston, TX 77030, USA
5Comprehensive Supervision Bureau, National Health Commission of the People’s Republic of China, Beijing 100044, China
Corresponding authors: Xiaobo Zhou (zhouxb2015@163.com) and Qun Meng (mengqun@nhfpc.gov.cn)
This work was supported in part by the Sichuan Science and Technology Program under Grant 2019YFS0147.
ABSTRACT The emergence of big data presents a serious challenge to the fast growth of regional health
information networks (RHINs) globally. In China, many constructors of RHINs have spontaneously and
independently created governance measures, which may be valuable as a point of reference for other
countries. This paper aimed to propose a big data governance framework for healthcare data based on the
governance activities associated with the processing of RHINs in China. Typical methodology for RHIN
case studies in China, including rich personal experience in nationwide consulting, literature review, expert
consultation, and interpretative structural modeling methods, was adop

ethodology for RHIN
case studies in China, including rich personal experience in nationwide consulting, literature review, expert
consultation, and interpretative structural modeling methods, was adopted. Based on the analysis of ten
typical RHIN case studies, healthcare big data governance practices in China were summarized. A framework
with 3 domains and 12 elements was proposed, which include a drive domain (big data strategy planning,
laws and regulations, open transaction, and industry support), capability domain (healthcare big data organi-
zation, collection, storage, process and analysis, and usage), and support domain (healthcare big data resource
planning, standards system, and privacy and security protection). We obtained 12 guidelines for healthcare
big data governance. A big data governance framework with 3 domains and 12 elements was presented
based on Chinese practice, which might serve as valuable references for the cross-dimensional development
of RHINs, provide overall guidance for the sustainable development of regional health informatization, and
contribute to realizing the business value of healthcare big data.
INDEX TERMS Big data governance, framework, regional health information networks (RHINs).
I. BACKGROUND
Over the past 20 years, information technology (IT) has
permeated a wide variety of industries. The use of IT
applications in the medical ﬁeld is considered rather con-
servative, but its informatization has undergone signiﬁcant
changes under the digital wave rush. In China, IT devel-
opment in healthcare has undergone three phases: institu-
tional informatization of individual healthcare institutions,
industrial informatization of cross-institution healthcare
information exchange (HIE), and social informatization of
cross-industry creative development.
In the ﬁrst phase, hospitals managed their informatization
processes by themselves, and the state centrally established
The associate editor coordinating the review of this manuscr

tive development.
In the ﬁrst phase, hospitals managed their informatization
processes by themselves, and the state centrally established
The associate editor coordinating the review of this manuscript and
approving it for publication was Linbo Qing.
and
deployed
business
systems
for
public
healthcare
institutions using a top-down approach. Such systems served
the needs of the institutions but accumulated massive
amounts of internal business data that could not be shared.
The second phase began in 2009, when a new medical reform
required medical institutions to share data regionally, leading
to a large-scale activation of Regional Health Information
Networks (RHINs) throughout the country. For the ﬁrst time,
medical and public healthcare data that had been scattered
among the various institutions became centralized in the form
of electronic health records (EHRs). This phase was mainly
characterized by an internal consolidation of the healthcare
industry. The third phase began in 2015, when the explosion
of social networks created massive amounts of personal
healthcare-related raw data (emotional and behavioral) and
various sets of personalized daily healthcare data (mostly
50330
2169-3536
2019 IEEE. Translations and content mining are permitted for academic research only.
Personal use is also permitted, but republication/redistribution requires IEEE permission.
See http://www.ieee.org/publications_standards/publications/rights/index.html for more information.

> **[Image 1]**: The image shows the IEEE Access logo on a white background. The main subject is the logo with "IEEE" in dark blue and "Access" in light blue, accompanied by text below stating "Multidisciplinary", "Rapid Review", and "Open Access Journal" in black with blue dots separating them. The color scheme features blue and black against the white backdrop. This logo represents a multidisciplinary, rapid review, open access journal.

---

## Page 2

black with blue dots separating them. The color scheme features blue and black against the white backdrop. This logo represents a multidisciplinary, rapid review, open access journal.

---

## Page 2

machine-generated real-time individual physiological data),
which were documented and linked to EHRs, resulting in the
emergence of healthcare big data [1]–[6].
Big data has been drawing increasing [[concepts/attention-mechanisms|attention]] globally,
and researchers have high expectations regarding its strong
potential to improve the quality of healthcare services and
lower healthcare expenditures. Big data has ensured the future
of RHINs because these systems can provide a different
perspective for obtaining greater medical value from medi-
cal data. Unfortunately, the existing capability of traditional
data can no longer satisfy the current needs. The effective
utilization of big data and the maximization of the value of
these data have become a global problem in the processing of
RHINs. This study focuses on the practical activities related
to big data utilization in China’s RHINs, a process denoted
big data governance, and proposes a big data governance
framework to help solve this problem globally.
II. METHODS
First, using our rich experience of consulting, planning, guid-
ance and construction of RHINs, we selected 10 typical cases
that covered three levels of national, provincial and municipal
levels as the research samples from masses of RHINs cases in
China. The selection criteria were no less than 5 years since
construction, ownership over at least one big data governance
activity, and willingness to participate in case analysis to gain
practical activities about healthcare big data.
Second, through consulting the domestic and international
key literature on RHINs, data governance, big data gover-
nance and healthcare big data, combined with the practices
of the above 10 case studies, we further reﬁned 17 initial
elements that are associated with the success of healthcare
big data gov

gover-
nance and healthcare big data, combined with the practices
of the above 10 case studies, we further reﬁned 17 initial
elements that are associated with the success of healthcare
big data governance.
Third, we used the expert consultation method for
17 elements. 1) We selected 12 experts in China, cover-
ing universities, enterprises, associations, government depart-
ments, hospitals, etc. The professional ﬁelds of the 12 experts
focus on regional healthcare informatization or big data, indi-
cating a high level of expertise for those selected. The formula
for determining the expert authority coefﬁcient is:
Cr = Ca + Cb + Cc
3
where Cr represents the degree of expert authority, Ca repre-
sents the cultural title coefﬁcient, Cb represents the judging
coefﬁcient, and Cc indicates the familiarity degree coefﬁ-
cient; Cb is derived from the experts’ theoretical analysis,
practical experience, peer understanding, and personal intu-
ition. All experts’ authority coefﬁcients were higher than
0.8, with high authority for experts. 2) All experts agreed
on the selection of 17 initial elements, without additions
and deletions. The importance of the 17 initial elements is
calculated as:
P =
P12
r=1(Cr ∗Pr a)
P12
r=1 Cr
where Cr is the expert authority coefﬁcient, Pr a is the r-th
expert to score the importance of the a-th initial element, and
a range from 1 to 17,
X12
r=1 Cr
representing the sum of the expert authority coefﬁcients.
We calculated the weighted score of each initial element.
3) We determined the ordering of the 17 elements accord-
ing to the ﬁnal score and only retained the main elements
(top 70%).
Fourth, we applied the interpretive structural model [7].
As a qualitative analysis method, it can effectively clarify
the level of the problem and the overall [[concepts/structure|structure]], and can
transform the complex relationship into an intuitive structural
relationship model. The main elements (12) were recorded
as S1-S12, and the reason for the succe

blem and the overall structure, and can
transform the complex relationship into an intuitive structural
relationship model. The main elements (12) were recorded
as S1-S12, and the reason for the success of healthcare big
data governance was S0. Through in-depth analysis and joint
discussion with the expert group and the elements of S0-S12
compared in pairs, we established the adjacency matrix A.
The reachable matrix M was calculated according to the
Boolean matrix algorithm. The interpretative structure model
was obtained through multiple hierarchical decomposition.
Finally, our healthcare big data governance framework was
derived after further reference to IBM’s data governance
model (IBM’s data governance model had 11 elements that
divided into 4 domains, and we referred to its domain division
and the presentation).
III. RESULTS
We gained the human data capability chain, which proved
the necessity and value of healthcare big data governance
(Figure 1). We summarized big data governance activities
for 10 typical RHIN samples in China (Table 1), which were
valuable based on the interpretive structural model (Figure 2).
FIGURE 1. The human data capability chain.
A healthcare big data governance framework (Figure 3)
was obtained by interpreting the structural model. The frame-
work consists of 3 domains and 12 elements. If we imagine
the ability of big data governance as the ability of people to
run, then the ‘‘Drive domain’’ determines whether it can run,
the ‘‘Support domain’’ determines how fast it can run, and
50331

> **[Image 1]**: The photograph shows the IEEE Access logo. The main subject is the text-based logo with "IEEE" in bold dark blue letters and "Access" in a lighter blue script font. The setting is a plain white background, and the colors used are various shades of blue, including a darker blue for "IEEE" and a lighter blue for "Access". A small registered trademark symbol appears after "Access".

plain white background, and the colors used are various shades of blue, including a darker blue for "IEEE" and a lighter blue for "Access". A small registered trademark symbol appears after "Access".

> **[Image 2]**: [Image: vision model returned empty description]

---

## Page 3

FIGURE 2. Interpretive structural model.
FIGURE 3. A healthcare big data governance framework.
the ‘‘Capability domain’’ determines how far it can run. To
better implement and apply the framework, we engaged in
further discussion and analysis to match the 12 governance
guidelines.
A. HEALTHCARE BIG DATA GOVERNANCE GUIDELINES
Guideline 1: Upgrade the lead department of the original
RHINs, or establish a new full-time big data governance
department to oversee the entire governance and fully absorb
the healthcare big data stakeholders, thus achieving the objec-
tives of governance through the department, the aim of which
is to adjust and optimize rather than overthrow or completely
rebuild the RHINs.
Guideline 2: Expand the scope of data collection around
the healthcare business goal, such that increasing the data
supply capacity does not signiﬁcantly increase the difﬁculty
of data use.
Guideline 3: Based on the [[concepts/open-source-hardware|open hardware]] resource cloud
service established by the IT [[concepts/architecture|architecture]], adjust the tradi-
tional storage mode to a distributed cloud storage mode under
the premise of ensuring autonomy and control.
Guideline 4: Continue to carry out quality management of
healthcare big data, and implement big data asset manage-
ment and control from the two dimensions of system and
informatization. Prioritize the construction of a general big
data analysis model and universal algorithm.
Guideline 5: Differentiate application objects, and empha-
size effective use and data interpretation.
TABLE 1. Big data governance activities based on typical cases of RHINs
in china.
50332

lgorithm.
Guideline 5: Differentiate application objects, and empha-
size effective use and data interpretation.
TABLE 1. Big data governance activities based on typical cases of RHINs
in china.
50332

> **[Image 1]**: The photograph shows the IEEE Access logo. The main subject is the text-based logo featuring "IEEE" in bold dark blue letters and "Access" in a lighter blue script font. The setting is a plain white background, and the colors used are various shades of blue with a registered trademark symbol at the end.

> **[Image 2]**: This image is a flowchart illustrating the factors contributing to successful healthcare big data governance, with interconnected rectangular boxes labeled with terms like "Healthcare big data organization" and "Big data strategy planning" linked by arrows. The main subject is the governance framework, set against a light gray background with white boxes containing black text. It visually maps [[concepts/relationships|relationships]] between components such as data storage, usage, [[concepts/privacy-protection|privacy protection]], and industry support within healthcare big data systems.

> **[Image 3]**: [Image: vision model returned empty description]

---

## Page 4

cases of RHINs in china.
cases of RHINs in china.
Guideline 6: Integrate national big data planning, and
implement big data resource planning into the healthcare
industry as the ﬁrst link in overall governance activities.
Guideline 7: Applicability evaluation and optimiza-
tion supplement based on the original data standard,
following the construction process of standard formation,
standard [[concepts/adoption|implementation]], and standard maintenance, and
continuously promote [[concepts/compliance|compliance]] testing of healthcare big
data standards.
Guideline 8: Promote healthcare big data privacy secu-
rity protection and governance from the four dimensions of
privacy and security laws and regulations, technical means,
management mechanism and security awareness. Clarify the
50333

data privacy secu-
rity protection and governance from the four dimensions of
privacy and security laws and regulations, technical means,
management mechanism and security awareness. Clarify the
50333

> **[Image 1]**: The photograph shows the IEEE Access logo. The main subject is the text "IEEE Access" with a registered trademark symbol. The setting is a plain background with no additional elements. The colors used are blue for "IEEE" and a lighter blue for "Access".

---

## Page 5

main body of responsibility for the ownership, management
and use rights, protection principle and segmentation rights
for healthcare big data, combining superior law, special law
and industry self-discipline. Actively optimize and upgrade
traditional data privacy protection technology, covering the
entire life cycle of healthcare big data and matching legal reg-
ulations and management mechanism requirements. Improve
the management mechanism around the [[concepts/licensing|licensing]] mech-
anism, reporting mechanism and traceability mechanism.
Enhance the concept of [[concepts/cognition|cognition]]: owners’ participation and
awareness of rights, simultaneous with managers’ super-
vision and cautious attitude and users’ responsibility and
self-discipline awareness.
Guideline 9: Implement national big data strategic plan-
ning and design, and clarify the overall development goal
positioning, main content, business development focus and
priorities. Provide safeguards to ensure that strategic planning
can be implemented along with guidance to serve as the basis
for all industries, including medical health.
Guideline 10: Introduce [[concepts/motivation|incentive]] [[concepts/policies|policies]] and improve the
big data trading system.
Guideline 11: Promote the development of big data indus-
try through key projects.
Guideline 12: Clarify the legislative strategy, and improve
the legal and regulatory system with regard to three aspects:
personal privacy protection, open access to government data,
and market-based transactions and industrial development.
IV. DISCUSSION
To ac

he legal and regulatory system with regard to three aspects:
personal privacy protection, open access to government data,
and market-based transactions and industrial development.
IV. DISCUSSION
To achieve satisfactory application performance, different
managers of RHINs (at the national, provincial and city lev-
els) have taken some positive actions, and these spontaneous,
isolated, unsystematic actions, which are shown in Table 1,
can be generalized to the behavior of big data governance.
The China Action Program for Promoting Big Data Devel-
opment upgraded big data development to a national-level
strategy, which in particular illustrates the priority of the
medical industry. The state health authority released a series
of specialized policies to promote healthcare big data applica-
tions. To ensure the [[concepts/logical-consistency|consistency]] of the technical architecture
of various provinces and cities, China even released techni-
cal guidance for RHINs in 2009: ‘‘Construction scheme of
RHINs based on EHR’’. To obtain greater access to high-
quality data, a national special committee was established to
initialize and regularly update medical informatization stan-
dards and criteria systems through compulsory standard con-
formity testing and necessary localization for the promotion
of their execution. In the absence of a national privacy law,
some provinces and cities launched Management Regulations
for EHR based on the National Regulations for Population
Healthcare Information Management, and full-featured tech-
nical measures were created for medical privacy protection.
For example, the RHINs of Guangzhou (owning EHR for
more than 10 million local residents) stored personal basic
information and medical treatment information separately,
and only the owner of the EHR, namely the patient, could
decide which content, what type of issue and which role could
be authorized to access the EHR online with real-time short-
message reminders or password control. To ensure that the
EHR data

nt, could
decide which content, what type of issue and which role could
be authorized to access the EHR online with real-time short-
message reminders or password control. To ensure that the
EHR data are accurate and timely, it is mandatory that resi-
dents’ health cards are top-down used to identify individuals
at a national level, which is different from European and
American countries, and different identity cards are issued
in different industries in China. For example, the Ministry of
Human Resources and Social Resources and Social Security
issued a social security card, and the Ministry of Public
Security issued an identity card, but the cards of various
industries are not compatible and universal. Many managers
took speciﬁc measures to improve the [[concepts/data-conceptsintegrityintegrity|data quality]] of RHINs.
For example, Wuhan established strict data quality assess-
ment indexes, and their results further inﬂuenced the man-
agement performance of the data’s source institution. Some
local governments incorporated [[concepts/social-well-being|social health]] data services
into government public [[concepts/health-care|health services]] and paid for them,
which promoted the widespread institution of mobile medical
equipment at the residents’ homes and the real-time input of
an individual’s daily physiological data into the EHR, which
is a popular activity of family practitioners [8]–[12].
A. GOVERNANCE FOR DRIVE DOMAIN
1) STRATEGY PLANNING GOVERNANCE
Big data capability is becoming one of the core issues con-
tributing to competition among countries. Its governance
requires national dominance and advancement to make big
data beneﬁt all industries. As early as 2012, the US gov-
ernment released the ‘‘Big Data Research and Development
Plan’’ and correspondingly introduced a number of policies.
The [[entities/eu|European Union]], the [[entities/uk|United Kingdom]], Australia, Japan,
South Korea, etc. have also developed national big data strate-
gies. The big data strategy planning of developed countries
is similar in terms of strategic objectives, clear action plans

alia, Japan,
South Korea, etc. have also developed national big data strate-
gies. The big data strategy planning of developed countries
is similar in terms of strategic objectives, clear action plans
and key support projects, clear management institutions and
implementing agencies, but there are differences in the direc-
tion of strategic promotion and the direction of technological
capabilities. Relying on the national big data strategic plan,
the introduction of an industry-speciﬁc big data strategic plan
will be more reasonable and effective. In establishing their
national big data strategy plans, an increasing number of
countries veriﬁed the belief that the medical industry should
have ﬁrst priority due to the high value of its application.
For example, the [[entities/united-states|United States]] introduced strategic plan-
ning for [[concepts/health-information-technology|health information technology]] covering ﬁve years
(2015-2020). Developing countries can also refer to the above
path [13]–[15].
2) OPEN TRANSACTION GOVERNANCE
The opening of data was originally derived from the Amer-
ican folk [[concepts/exercise|movement]], and follow-up activities in the United
States and the United Kingdom has initiated an international
trend to reform the government. Since 2009, the United
States, Britain, Australia, France, Canada and other countries
50334

> **[Image 1]**: The photograph shows the IEEE Access logo. The main subject is the text-based logo with "IEEE" in bold dark blue letters and "Access" in a lighter blue script font. The setting is a plain white background, and the colors used are various shades of blue with a registered trademark symbol at the end.

---

## Page 6

tters and "Access" in a lighter blue script font. The setting is a plain white background, and the colors used are various shades of blue with a registered trademark symbol at the end.

---

## Page 6

have established an open sharing policy for government data.
Big data open transaction is an important prerequisite for
the development of the national big data industry. Building
an open trading mechanism for big data can promote the
exchange and [[concepts/integration|integration]] of big data among different indus-
tries. Approximately 80% of China’s information resources
are in the hands of government departments. State domination
is the fundamental driving force for public (government) big
data development [16]. The government is more concerned
about its own big data opening, and companies are more
focused on big data transactions.
3) INDUSTRY SUPPORT GOVERNANCE
The big data industry system needs to cover the upstream,
midstream and downstream of the industry [17], consist-
ing of infrastructure, core technologies, services and indus-
try applications, talent development, government [[concepts/regulation|regulation]]
and guidance, industry associations, enterprises and other
elements [18]. In the early stages of big data development,
European and American countries usually carried out the con-
struction of several key projects in key industries and grad-
ually formed key technologies, management and business
models, etc., with a view of promoting the rapid development
of big data. When countries are planning big data, most of the
healthcare sectors are at the forefront of industry choices, and
the potential for big data to be applied and prioritized in the
health sector is high.
4) GOVERNANCE OF LAWS AND REGULATIONS
It is safe to say that robust laws do not so much lead to the
satisfactory development of big data; rather, they lead to the
absence of unsatisfactory results. Big data has legal attributes
and should be promoted and regulated by legislation. Big data
legislation should balance three aspects: achi

; rather, they lead to the
absence of unsatisfactory results. Big data has legal attributes
and should be promoted and regulated by legislation. Big data
legislation should balance three aspects: achieving full and
effective personal information protection; promoting the open
sharing of government data; and promoting the development
of the big data industry around commercial data transactions.
In speciﬁc legislation, a conservative government-led strat-
egy or an active market-led strategy can be adopted based on
national conditions and balance the interests of the big data
industry with national security. For example, the EU adopts
a conservative strategy for personal information protection
and emphasizes personal rights, such that ‘‘private life is
not disturbed.’’ It adopts a comprehensive national legislative
model and emphasizes privacy protection in cross-border data
circulation. By [[concepts/contrast|contrast]], the United States is relatively more
market-oriented, emphasizing the economic value of personal
data, adopting a decentralized legislative model, and empha-
sizing the combination of industry self-discipline. China has
been a ‘‘net exporting country’’ for a period of time now and
will remain so in the future. Whether based on the private
law perspective of national conditions or on national security
considerations for cross-border data circulation, it is more
suitable to adopt a conservative strategy before developing
into a big data industry power.
B. GOVERNANCE FOR CAPABILITY DOMAIN
The healthcare big data life cycle includes healthcare big data
organization, collection, storage, process and analysis, and
usage.
1) HEALTHCARE BIG DATA ORGANIZATION
The focus is on [[concepts/organizational-structure|organizational structure]] and IT architecture
governance. The design and construction of the information
organization structure is one of the most important com-
ponents of traditional data governance. Globally, medical
and [[concepts/health-sector|health institutions]] are becoming more and more data
driven [19]. IT ar

nformation
organization structure is one of the most important com-
ponents of traditional data governance. Globally, medical
and health institutions are becoming more and more data
driven [19]. IT architecture governance is optimal for fully
protecting and utilizing existing investments, and it does not
have a major impact or on the original healthcare business.
2) HEALTHCARE BIG DATA COLLECTION
In China, data collection mainly focuses on EHR in RHIN
construction, and more uncollected data are still buried in the
original unit of data generation. The value of the full amount
of healthcare big data in the region cannot be tapped. The
construction goals of RHINs in different countries are not the
same, and the requirements for data collection and sharing are
very different. The uniﬁed access data speciﬁcation should
be designed in advance to ensure the standardization and
ease of use of the collected big data. This point is more
applicable to developed countries, especially those countries
where medical insurance purchases such equipment services.
But developing countries should also pay attention to this
point if they want to form a latecomer advantage.
3) HEALTHCARE BIG DATA STORAGE
A centralized data storage model has been popular in RHINs,
but as the volume of data increases, it is becoming infeasible
to purchase storage space for storage needs. Such a model
should be transformed into a distributed cloud storage model
(pay for open hardware cloud resource services). Of course,
the above cloud storage service should be built by a domestic
enterprise or a government-funded private cloud for gov-
ernment service, which can ensure that cloud storage for
healthcare big data is not interfered upon by other countries
from beginning to end. Cloud storage for healthcare big data
should provide more stringent security protection and backup
measures.
4) HEALTHCARE BIG DATA PROCESS AND ANALYSIS
This governance involves big data quality management, big
data asset manageme

ig data
should provide more stringent security protection and backup
measures.
4) HEALTHCARE BIG DATA PROCESS AND ANALYSIS
This governance involves big data quality management, big
data [[concepts/asset-management|asset management]], big data analysis and algorithms.
A review of an early EHR system in the United States found
that there were one or more input-related errors in 60% of
patients’ data [20]. Based on near-total samples, big data
technologies have increased the [[concepts/robustness|fault tolerance]] of the original
data, but there is currently a very low tolerance for deviation
and error correction in RHINs in consideration of health
and life. Big data analysis technology can aggregate and
analyze multiple sets or different types of data. It focuses
50335

> **[Image 1]**: The photograph shows the IEEE Access logo. The main subject is the text "IEEE Access" with a registered trademark symbol. The setting is a plain background with no additional elements. The colors used are blue for "IEEE" and a lighter blue for "Access".

---

## Page 7

xt "IEEE Access" with a registered trademark symbol. The setting is a plain background with no additional elements. The colors used are blue for "IEEE" and a lighter blue for "Access".

---

## Page 7

more attention on the fusion and correlation analysis between
different data. It is an analytical method that attends to global
features. For RHINs, priority should be given to building
general-purpose, high-speed and ﬂexible big data analyses
and mining models and developing pervasive algorithms.
Specialized personality models and algorithms are developed
by individual hospitals and public health agencies.
5) HEALTHCARE BIG DATA USAGE
At present, healthcare big data usage at home and abroad are
mainly concentrated in ﬁve directions: accurate medical care
in a clinical setting, self-health management in a market envi-
ronment, research applications in an academic environment,
lean management applications in healthcare, and emerging
smart healthcare applications [21]–[23]. It is necessary to
introduce data visualization technology to improve data inter-
pretation and display capabilities, and the effective applica-
tion of data, especially scene-driven applications, should be
highly valued.
C. GOVERNANCE FOR SUPPORT DOMAIN
The internal governance of the healthcare industry includes
healthcare big data resource planning, standard system, and
privacy security protection.
1) HEALTHCARE BIG DATA RESOURCE PLANNING
At present, both developed and developing countries, regard-
less of the type of medical system and the level of economic
development, regional medical and health information con-
struction projects tend to be uniﬁed in their planning [24].
The medical industry data resource planning and governance
needs are signiﬁcantly higher than those of most other indus-
tries [25].
2) HEALTHCARE BIG DATA STANDARD SYSTEM
An important challenge for big data is to integrate data
from different sources, and standard applications have been
proven to promote interoperabi

-
tries [25].
2) HEALTHCARE BIG DATA STANDARD SYSTEM
An important challenge for big data is to integrate data
from different sources, and standard applications have been
proven to promote interoperability between systems [26].
China’s medical and health informatization standards were
established late and reference the HL7, IHE, DICOM,
SNOMED and LOINC standards. The resulting medical and
health information standards are accelerating, while also
self-optimizing and upgrading, the RHIN process in China.
The experience of constructing China’s medical and health
informatization standards from scratch has had a high refer-
ence value for other developing countries without such stan-
dards. Globally, the construction of a big data standard system
is still in its infancy, and a set of recognized, complete and
universal big data standard systems has not yet been formed.
Moreover, the small number of studies related to healthcare
big data standards has mostly been based on demand analysis.
3) HEALTHCARE BIG DATA PRIVACY SECURITY PROTECTION
The degree of data recognition and the risk of being
re-identiﬁed are different in various countries [27], [28].
Different countries have different perceptions of personal
privacy boundaries, control and awareness. For example,
Indians are four times more likely to share personal data
online to obtain better personalized services than are the
Swiss [29]. Chinese privacy awareness and privacy laws and
the construction of the regulatory system lag behind many
European and American countries [30]. With the initiation of
the big data era, other personal data, including income level,
education and work experience, location information, eating
habits, and ﬁtness records, are automatically linked [31].
Privacy security issues exist throughout the lifecycle of big
data [32]. The statistics are incomplete – so far there are
approximately 90 countries and regions in the world that
have introduced data privacy laws – but privacy laws have

the lifecycle of big
data [32]. The statistics are incomplete – so far there are
approximately 90 countries and regions in the world that
have introduced data privacy laws – but privacy laws have
made very few [[concepts/adjustments|adjustments]] and improvements in time for
the new challenges of big data. In addition, the introduc-
tion of new law tends to take a long time. Prior to this,
as a transitional initiative in which measures are coordinated
after the implementation of laws and regulations, industry
self-regulatory organizations can be established to guide and
regulate market-oriented behavior, which is more mature in
the United States.
This study also has limitations. This study requires further
veriﬁcation and optimization of the empirical research, refer-
encing different countries combined with national conditions.
V. CONCLUSION
The [[concepts/presence|appearance]] of big data governance is inevitable in the
process of RHINs based on the human data capability chain.
Our review of the process underlying the development of
RHINs in China revealed many cases of successful and failed
big data governance activities. Based on this practice and
personal experience, we used a combination of qualitative
methods, such as a literature review, expert consultation and
interpretive structural modeling. Then, we designed a satis-
factory big data governance framework, which is also useful
for industries outside of healthcare. A big data governance
framework with 3 domains and 12 elements was presented
based on Chinese practice, which might serve as a valu-
able reference and provide late-comers an opportunity for
the cross-dimensional development of RHINs. Discussions
surrounding the 12 governance guidelines that accompany
the framework show that understanding and adhering to the
applicability and limitations of each element can help other
countries throughout the world learn more effectively. The
framework and governance guidelines are expected to pro-
vide overall guidance for the sustainable development

of each element can help other
countries throughout the world learn more effectively. The
framework and governance guidelines are expected to pro-
vide overall guidance for the sustainable development of
RHINs and may contribute to realization of the business value
of healthcare big data. Of course, the journey to the achieve-
ment of governance is deﬁnitely expected to include some
unforeseen challenges, and critical adjustment and localiza-
tion will aid the implementation of this framework.
ACKNOWLEDGMENTS
(Quan Li and Lan Lan contributed equally to this work.) The
authors would like to thank the Center for Health Statistics
Information of Shanghai, the Wuhan and Guangzhou Health
50336

> **[Image 1]**: The photograph shows the IEEE Access logo. The main subject is the text "IEEE Access" with a registered trademark symbol. The setting is a plain background with no additional elements. The colors used are blue for "IEEE" and a lighter blue for "Access".

---

## Page 8

Commission, the National Health Information Sharing Tech-
nology & Applications Engineering Technology Research
Center, and Wonders Information Co., Ltd. for providing
support of the RHIN case analyses.
REFERENCES
[1] W. Yip and W. Hsiao, ‘‘Harnessing the privatisation of China’s fragmented
health-care delivery,’’ Lancet, vol. 384, no. 9945, pp. 805–818, Aug. 2014.
[2] Opinions of the Communist Party of China Central Committee and the
State Council on Deepening the Health Care System Reform, Government
People’s Republic China, Beijing, China, 2009.
[3] Q. Meng et al., ‘‘Trends in access to health services and ﬁnancial protec-
tion in China between 2003 and 2011: A cross-sectional study,’’ Lancet,
vol. 379, no. 9818, pp. 805–814, Mar. 2012.
[4] J. R. Vest and J. S. Jasperson, ‘‘How are health professionals using health
information exchange systems? Measuring usage for evaluation and system
improvement,’’ J. Med. Syst., vol. 36, no. 5, pp. 3195–3204, Oct. 2012.
[

‘‘How are health professionals using health
information exchange systems? Measuring usage for evaluation and system
improvement,’’ J. Med. Syst., vol. 36, no. 5, pp. 3195–3204, Oct. 2012.
[5] Q.
Meng,
Construction
and
Development
of
RHINs.
Beijing,
China: People’s Med. Publishing House, 2014. [Online]. Available:
http://www.pmphmall.com/gdsdetail/605253-279881
[6] Q. Meng, Case Design and Research of Health Informativeness. Beijing,
China: People’s Medical Publishing House, 2014. [Online]. Available:
http://www.pmphmall.com/gdsdetail/71592-72591
[7] J. N. Warﬁeld, ‘‘Participative methodology for public system planning,’’
Comput. Elect. Eng., vol. 1, no. 2, pp. 187–210, Oct. 1973.
[8] Outline of Planning on National Healthcare Services System (2015–2020),
State Council People’s Republic China, Beijing, China, 2015.
[9] Outline of Strategic Planning on the Development of [[concepts/chinese-medicine|Traditional Chinese
Medicine]] (2016–2030), State Council People’s Republic China, Beijing,
China, 2016.
[10] Guidance on Promoting the Construction of Multi-Level Treatment System,
State Council People’s Republic China, Beijing, China, 2015.
[11] Guidance on Promoting and Standardizing the Development of Health
Care Big Data Applications, State Council People’s Republic China, Bei-
jing, China, 2016.
[12] J. Roski, G. W. Bo-Linn, and T. A. Andrews, ‘‘Creating value in health care
through big data: Opportunities and policy implications,’’ Health Affairs,
vol. 33, no. 7, pp. 1115–1122, Jul. 2014.
[13] R. Weiss and L.-J. Zgorski, Obama Administration Unveils ‘Big Data’
Initiative: Announces $200 Million in New R&D Investments, document,
Ofﬁce of Science and Technology Policy Executive Ofﬁce of the President,
Washington, DC, USA, USA, 2012.
[14] French Government Support for Big Data: A Five-part Support Plan, IFA,
Paris, France, 2013.
[15] The Australian Public Service Big Data Strategy, AGIMO, Canberra,
Australia, 2013.
[16] G.-H. Kim, S. Trimi, an

overnment Support for Big Data: A Five-part Support Plan, IFA,
Paris, France, 2013.
[15] The Australian Public Service Big Data Strategy, AGIMO, Canberra,
Australia, 2013.
[16] G.-H. Kim, S. Trimi, and J.-H. Chung, ‘‘Big-data applications in the
government sector,’’ Commun. ACM, vol. 53, no. 3, pp. 78–85, Mar. 2014.
[17] J. Lee, H.-A. Kao, and S. Yang, ‘‘Service [[concepts/innovation|innovation]] and smart analytics for
industry 4.0 and big data environment,’’ Procedia CIRP, vol. 16, pp. 3–8,
Dec. 2014.
[18] S. Yoo and K. Choi, ‘‘Research on development stage of service model
in big data industry,’’ in Computer Science and its Applications. Berlin,
Germany: Springer, 2015, pp. 545–554.
[19] O. Birov, ‘‘Organization of a data governance section within a traditional
health information management department,’’ Ph.D. dissertation, College
St. Scholastica, Duluth, MN, USA, 2013.
[20] C. R. Weir, J. F. Hurdle, M. A. Felgar, J. M. Hoffman, B. Roth, and
J. R. Nebeker, ‘‘Direct text entry in electronic progress notes. An evaluation
of input errors,’’ Methods Inf. Med., vol. 42, no. 1, pp. 61–67, Feb. 2003.
[21] R. Zheng, H. Zeng, S. Zhang, T. Chen, and W. Chen, ‘‘National estimates
of cancer prevalence in China, 2011,’’ Cancer Lett., vol. 370, no. 1,
pp. 33–38, Jan. 2016.
[22] N. V. Chawla and D. A. Davis, ‘‘Bringing big data to personalized health-
care: A patient-centered framework,’’ J. Gen. Internal Med., vol. 28, no. 3,
pp. S660–S665, Sep. 2013.
[23] L. H. Curtis, J. Brown, and R. Platt, ‘‘Four health data networks illustrate
the potential for a shared national multipurpose big-data network,’’ Health
Affairs, vol. 33, no. 7, pp. 1178–1186, Jul. 2014.
[24] Y. Wang, ‘‘Interest games and cooperation mechanisms in the construction
of regional health informatization,’’ Ph.D. dissertation, Shanxi Med. Univ.
China, Taiyuan, China, 2017.
[25] Y. Liu, ‘‘Research on regional information resource planning in the hea

nstruction
of regional health informatization,’’ Ph.D. dissertation, Shanxi Med. Univ.
China, Taiyuan, China, 2017.
[25] Y. Liu, ‘‘Research on regional information resource planning in the health
ﬁeld,’’ M.S. thesis, Central China Normal Univ. China, Wuhan, China,
2012.
[26] W. E. Hammond, C. Bailey, P. Boucher, M. Spohr, and P. Whitaker,
‘‘Connecting information to improve health,’’ Health Affairs, vol. 29, no. 2,
pp. 284–288, Feb. 2010.
[27] K. El Emam, E. Jonker, L. Arbuckle, and B. Malin, ‘‘A systematic review
of re-identiﬁcation attacks on health data,’’ PLoS ONE, vol. 6, no. 12,
Jan. 2011, Art. no. e28071.
[28] K. El Emam, E. Jonker, L. Arbuckle, and B. Malin, ‘‘Correction:
A systematic review of re-identiﬁcation attacks on health data,’’ PLoS
ONE, vol. 10, no. 4, Apr. 2015, Art. no. e0126772.
[29] A.
Heitmueller,
S.
Henderson,
W.
Warburton,
A.
Elmagarmid,
A. S. Pentland, and A. Darzi, ‘‘Developing [[entities/public-policy|public policy]] to advance
the use of big data in health care,’’ Health Affairs, vol. 33, no. 9,
pp. 1523–1530, Sep. 2014.
[30] W. Zhong, Personal Data Privacy Regulation in the Big Data Era. Beijing,
China: Social Sciences Academic Press, 2014.
[31] T. B. Murdoch and A. S. Detsky, ‘‘The inevitable application of big data to
health care,’’ JAMA, vol. 309, no. 13, pp. 1351–1352, Apr. 2013.
[32] M. E. Porter, ‘‘What is value in health care?’’ New England J. Med.,
vol. 363, no. 26, pp. 2477–2481, Dec. 2010.
QUAN LI received the bachelor’s degree in infor-
mation management and information system from
Southwest Minzu University, in 2008, and the
master’s degree in information science from the
Huazhong University of Science and Technology,
in 2010. He is currently pursuing the Ph.D. degree
in [[concepts/epidemiology|epidemiology]] and health statistics with Sun
Yat-sen University.
He is currently the CEO of the Chinese com-
pany focusing on value realization of healthcare
big data. He has participated in consultation, pla

ology and health statistics with Sun
Yat-sen University.
He is currently the CEO of the Chinese com-
pany focusing on value realization of healthcare
big data. He has participated in consultation, planning, and construction of
regional health information networks for many cities in China, resulting in
a deep understanding of the commercial application of healthcare big data.
His research interests include healthcare big data governance and regional
health information networks.
LAN LAN received the bachelor’s degree in busi-
ness management, the master’s degree in public
health, and the Ph.D. degree in epidemiology and
health statistics from Sichuan University, in 2008,
2015, and 2018, respectively.
She is currently a Postdoctoral Fellow with
the West China Biomedical Big Data Center,
West China Hospital, Sichuan University. Her
current research interests include healthcare big
data, medical informatics, and medical artiﬁcial
intelligence.
NIANYIN ZENG received the B.Eng. degree
in electrical engineering and [[concepts/automation|automation]] and
the Ph.D. degree in electrical engineering from
Fuzhou University, in 2008 and 2013, respec-
tively.
From 2012 to 2013, he was an RA with the
Department of Electrical and Electronic Engineer-
ing, The University of Hong Kong. From 2017 to
2018, he was a Visiting Professor with the Korea
Advanced Institute of Science and Technology.
He is currently an Associate Professor with the Department of Instrumental
and Electrical Engineering, Xiamen University. He has authored or coau-
thored several technical papers, including six ESI Highly Cited Papers,
according to the most recent Clarivate Analytics ESI report. His current
research interests include [[concepts/intelligent-data-analysis|intelligent data analysis]], computational intelli-
gence, and time-series modeling and applications.
Dr. Zeng was an ISEF Fellow, funded by the Korea Foundation for
Advance Studies, from 2017 to 2018. He currently serves as an Associate
Editor for Neurocomputing, an Editorial Board Member for Computers

Zeng was an ISEF Fellow, funded by the Korea Foundation for
Advance Studies, from 2017 to 2018. He currently serves as an Associate
Editor for Neurocomputing, an Editorial Board Member for Computers in
Biology and Medicine and Biomedical Engineering Online, and a Guest
Editor for Frontiers in [[concepts/neuroscience|Neuroscience]]. He has also served as a Technical
Program Committee Member for ICBEB 2014 and as an Invited Session
Chair for ICCSE 2017. He is a very Active Reviewer for many international
journals and conferences.
50337

> **[Image 1]**: The photograph shows the IEEE Access logo. The main subject is the text "IEEE Access" with a registered trademark symbol. The logo uses shades of blue, with "IEEE" in a darker blue and "Access" in a lighter blue. There is no additional setting or background, as the image focuses solely on the logo.

> **[Image 2]**: This [[concepts/black-and-white|black and white]] photograph features a man with short dark hair wearing a light-colored collared shirt. The background is plain white, creating a simple and neutral setting. The main subject is the man, and the image uses only shades of gray.

> **[Image 3]**: A person with long hair and glasses is the main subject, wearing a dark t-shirt with a light design. The setting appears to be an indoor public space, possibly a café or food court, with a counter and background elements like shelves and people. The photograph is in black and white, featuring only shades of gray without any color.

> **[Image 4]**: [Image: vision model returned empty description]

---

## Page 9

ments like shelves and people. The photograph is in black and white, featuring only shades of gray without any color.

> **[Image 4]**: [Image: vision model returned empty description]

---

## Page 9

LEI YOU received the Ph.D. degree in computer
applied technology from the Harbin Institute of
Technology, China, in 2018. He is currently a
Postdoctoral Research Fellow with the School of
Biomedical Informatics, The University of Texas
Health Science Center at Houston, TX, USA. His
research interests include image processing, pat-
tern recognition, deep [[concepts/learning|learning]], and bioinformat-
ics.
JIN YIN received the bachelor’s and master’s
degrees in [[concepts/software-engineering|software engineering]] from the Uni-
versity of Electronic Science and Technology of
China, in 2009 and 2014, respectively.
He is currently an Engineer with the West China
Biomedical Big Data Center, West China Hospital,
Sichuan University. His current research interests
include healthcare big data, medical informatics,
and medical artiﬁcial intelligence.
XIAOBO ZHOU received the Ph.D. degree in
applied [[concepts/mathematics|mathematics]] from [[entities/peking-university|Peking University]],
China. He is currently a Professor and the Direc-
tor of the Center for Systems Medicine, School
of Biomedical Bioinformatics, The University of
Texas Health Science Center at Houston. His
research interests include data sciences, imaging
informatics, and [[concepts/clinical-informatics|clinical informatics]].
QUN MENG received the M.D. degree in health
statistics from Sichuan University, in 1998.
From 2001 to 2002, he was a Visiting Scholar
with the School of Public Health, Harvard Univer-
sity. He is currently a Professor with the School
of Public Health, Sun Yat-sen University. He has
presided over a number of major national science
and technology projects and the ‘‘863’’ program,
where the ‘‘China Urban and Rural Residents
Health Records Standard System and Regional
Health Information Platform Research and Application’’ project received the
Chinese Medical Technology Third Place Prize, in 2013.
In 2010, he j

sidents
Health Records Standard System and Regional
Health Information Platform Research and Application’’ project received the
Chinese Medical Technology Third Place Prize, in 2013.
In 2010, he joined the Statistical Information Center, National Health
Commission of the People’s Republic of China, as the Director, where he
signiﬁcantly promoted the development of health information in China.
He is also with the Comprehensive Supervision Bureau, National Health
Commission of the People’s Republic of China.
50338

> **[Image 1]**: A man wearing glasses, a jacket over a checkered shirt, speaks into a microphone. The setting appears to be an indoor event, likely a conference or presentation. The photograph is black and white, showing various shades of gray.

> **[Image 2]**: The photograph shows the IEEE Access logo. The main subject is the text-based logo with "IEEE" in bold dark blue letters and "Access" in a lighter blue script font. The setting is a plain white background, and the colors used are various shades of blue, including a darker blue for "IEEE" and a lighter blue for "Access". A small registered trademark symbol appears after "Access".

> **[Image 3]**: This black - and - white photograph features a man as the main subject. He is wearing a dark t - shirt with a small logo on the chest and standing against a plain, light - colored wall. The setting is minimal, with no additional objects or decorations. The image uses only shades of gray, with the man's dark clothing contrasting against the lighter background.

> **[Image 4]**: This black and white photograph features a man wearing a light - colored button - up shirt. He stands against a plain gray background, creating a simple and professional setting. The image uses monochromatic tones, focusing attention on the subject without any distracting elements. The man's attire and the neutral backdrop give the photo a clean, formal appearance.

al setting. The image uses monochromatic tones, focusing attention on the subject without any distracting elements. The man's attire and the neutral backdrop give the photo a clean, formal appearance.

> **[Image 5]**: The photograph features a man as the main subject, dressed in a suit and tie. He is positioned against a plain gray background, typical of a professional portrait setting. The image is rendered in black and white, with no other colors visible.

## Related Concepts
- [[concepts/big-data-governance|Big Data Governance]] — [Wikipedia](https://en.wikipedia.org/wiki/Big_Data_Governance)
- [[concepts/rhins|RHINs]] — [Wikipedia](https://en.wikipedia.org/wiki/RHINs)
- [[concepts/data-enabled-intelligence|Data-Enabled Intelligence]] — [Wikipedia](https://en.wikipedia.org/wiki/Data-Enabled_Intelligence)
- [[concepts/healthcare-informatization|Healthcare Informatization]] — [Wikipedia](https://en.wikipedia.org/wiki/Healthcare_Informatization)
- Regional Health Information Networks — [Wikipedia](https://en.wikipedia.org/wiki/Regional_Health_Information_Networks)
- Health Information Exchange — [Wikipedia](https://en.wikipedia.org/wiki/Health_Information_Exchange)
- [[concepts/electronic-health-records|Electronic Health Records]] — [Wikipedia](https://en.wikipedia.org/wiki/Electronic_Health_Records)
- Interpretative Structural Modeling — [Wikipedia](https://en.wikipedia.org/wiki/Interpretative_Structural_Modeling)
- Data Strategy Planning — [Wikipedia](https://en.wikipedia.org/wiki/Data_Strategy_Planning)
- [[concepts/ai-security|Data Privacy and Security]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_Privacy_and_Security)
- Healthcare Data Standards — [Wikipedia](https://en.wikipedia.org/wiki/Healthcare_Data_Standards)
- Data Collection and Storage — [Wikipedia](https://en.wikipedia.org/wiki/Data_Collection_and_Storage)
- Data Processing and Analysis — [Wikipedia](https://en.wikipedia.org/wiki/Data_Processing_and_Analysis)
- [[concepts/digital-health|Digital Health]] — [Wikipedia](https://en.wikipedia.org/wiki/Digital_Health)
- Cross-Institution Data Sharing — [Wikipedia](https://en.wikipedia.org/wiki/Cross-Institution_Data_Sharing)

## Related Entities
- QUN LI — [Wikipedia](https://en.wikipedia.org/wiki/QUN_LI)
- [[entities/china|China]] — [Wikipedia](https://en.wikipedia.org/wiki/China)
- [[entities/lei-you|LEI YOU]] — [Wikipedia](https://en.wikipedia.org/wiki/LEI_YOU)
- [[entities/jin-yin|JIN YIN]] — [Wikipedia](https://en.wikipedia.org/wiki/JIN_YIN)
- [[entities/xiaobo-zhou|XIAOBO ZHOU]] — [Wikipedia](https://en.wikipedia.org/wiki/XIAOBO_ZHOU)
- [[entities/qun-meng|QUN MENG]] — [Wikipedia](https://en.wikipedia.org/wiki/QUN_MENG)
- Quan Li — [Wikipedia](https://en.wikipedia.org/wiki/Quan_Li)
- Springer — [Wikipedia](https://en.wikipedia.org/wiki/Springer)
- IEEE Access — [Wikipedia](https://en.wikipedia.org/wiki/IEEE_Access)
- Linbo Qing — [Wikipedia](https://en.wikipedia.org/wiki/Linbo_Qing)
- Lan Lan — [Wikipedia](https://en.wikipedia.org/wiki/Lan_Lan)
- Nianyin Zeng — [Wikipedia](https://en.wikipedia.org/wiki/Nianyin_Zeng)