---
wiki-ingested: true
title: Dixit - Rapid development of visualization dashboards
author: Ram A. Dixit, 2 Stephen Hurst, 3 Katharine T. Adams, 2 Christian Boxley, Kristi Lysen-Hendershot, 4 Sonita S. Bennett, 2 Ethan Booker, Raj M. Ratwani, 3MedStar Simulation Training, Education Lab, 4MedStar Telehealth Innovation, 3007 Tilden Street NW
published_date: 2020-jul-03
source_url: "https://doi.org/10.1093/jamia/ocaa161"
category: digital-health
credibility: Peer-Reviewed
date: 2026-05-26
source_type: document
wiki-ready: true
migrated_from: library
domain: creative-pursuits
group: interactive-visualisation
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

---
preface_schema: '1.0'
title: 'initiatives at a multihospital [[concepts/health|healthcare]] system'
source_type: 'Academic'
publisher: 'Wiley'
publishing_date: '2000'
authors: ['Ram A. Dixit', '2 Stephen Hurst', '3 Katharine T. Adams', '2 Christian Boxley', 'Kristi Lysen-Hendershot', '4 Sonita S. Bennett', '2 Ethan Booker', 'Raj M. Ratwani', '3MedStar [[concepts/simulation|Simulation]] [[concepts/training|Training]]', 'Education Lab', '4MedStar Telehealth [[concepts/innovation|Innovation]]', '3007 Tilden Street NW']
available_at: 'https://doi.org/10.1093/jamia/ocaa161'
[[concepts/keywords|keywords]]: ['telehealth', 'visualization', 'needs', 'process', 'development', 'awareness', 'healthcare', 'patient']
abstract: 'The [[concepts/covid-19|COVID-19]] pandemic has led to the rapid expansion of telehealth services as healthcare organizations aim to mitigate community transmission while providing safe patient care. As [[concepts/adoption|technology adoption]] rapidly increases, operational telehealth teams must maintain awareness of critical information, such as patient vol- umes and wait times, patient and provider experience, and telehealth platform performance. Using a model of situation awareness as a conceptual foundation and a user-centered [[concepts/design|design]] approach we describe our process for rapidly developing and disseminating dashboard visualizations to support telehealth operations. We used a 5-step process to gain domain knowledge, identify user needs, identify data sources, design and develop visual- izations, and iteratively reﬁne these visualizations. Through this process we identiﬁed 3 distinct stakeholder groups and designed and developed visualization dashboards to meet their needs. [[concepts/feedback|Feedback]] from users dem- onstrated the dashboard’s support situation awareness and informed important operational decisions. Lessons learned are shared to provide other organizations with insights from our process.'
---
## Page 1

ted the dashboard’s support situation awareness and informed important operational decisions. Lessons learned are shared to provide other organizations with insights from our process.'
---
## Page 1

Rapid development of visualization dashboards to
enhance situation awareness of COVID-19 telehealth
initiatives at a multihospital healthcare system
Ram A. Dixit,1,2 Stephen Hurst,3 Katharine T. Adams,1,2 Christian Boxley,1,2
Kristi Lysen-Hendershot,4 Sonita S. Bennett,1,2 Ethan Booker,4,5 and
Raj M. Ratwani1,2,5
1MedStar Health National Center for Human Factors in Healthcare, Washington, DC, USA, 2MedStar [[concepts/health-research|Health Research]] Institute,
Hyattsville, MD, USA, 3MedStar Simulation Training and Education Lab, Washington, DC, USA, 4MedStar Telehealth Innovation
Center, Washington, DC, USA, 5Georgetown University School of Medicine, Washington, DC, USA
Corresponding Author: Raj Ratwani, PhD, Georgetown University School of Medicine, 3007 Tilden Street NW, Suite 6N,
Washington, DC 20008, USA; raj.m.ratwani@medstar.net
Received 7 May 2020; Revised 22 June 2020; Editorial Decision 27 June 2020; Accepted 30 June 2020
ABSTRACT
The COVID-19 pandemic has led to the rapid expansion of telehealth services as healthcare organizations aim
to mitigate community transmission while providing safe patient care. As technology adoption rapidly
increases, operational telehealth teams must maintain awareness of critical information, such as patient vol-
umes and wait times, patient and provider experience, and telehealth platform performance. Using a model of
situation awareness as a conceptual foundation and a user-centered design approach we describe our process
for rapidly developing and disseminating dashboard visualizations to support telehealth operations. We used a
5-step process to gain domain knowledge, identify user needs, identify data sources, design and develop visual-
izations, and iteratively reﬁne these visualizations. Through this process we identiﬁed 3 distinct stakeholder
g

n knowledge, identify user needs, identify data sources, design and develop visual-
izations, and iteratively reﬁne these visualizations. Through this process we identiﬁed 3 distinct stakeholder
groups and designed and developed visualization dashboards to meet their needs. Feedback from users dem-
onstrated the dashboard’s support situation awareness and informed important operational decisions. Lessons
learned are shared to provide other organizations with insights from our process.
INTRODUCTION
The COVID-19 pandemic has presented healthcare provider organi-
zations with unique healthcare delivery challenges. Organizations
have had to rapidly prepare for a surge of high acuity patients that
could strain capacity while dramatically reducing routine nonessen-
tial care to minimize community spread of illness and protect [[concepts/health-care|health-
care]] workers. These changes pose many problems including
managing the unique isolation requirements for infected patients,
maintaining [[concepts/communication|communication]] among distributed care teams, and
meeting the needs of the broader patient population. Telehealth has
emerged as a primary [[concepts/solution|solution]] to these challenges that has allowed
for clinicians to reach beyond the walls of the facilities within which
they work.1
MedStar Health, a 10-hospital system with over 280 outpatient
clinics responded to the pandemic by accelerating its telehealth pro-
gram in 3 ways. First, on-demand telehealth visits, referred to as
“eVisits,” allowing patients to connect with a clinician through
[[concepts/tone|voice]] and/or video, were made available at no cost to any person liv-
ing in Washington DC, Maryland, and Virginia. This was done to
provide a low-barrier method for patients to engage with a clinician
and reduce patient volumes at emergency departments and urgent
care centers. Second, physicians from nearly all specialties, such as
V
C The Author(s) 2020. Published by Oxford University Press on behalf of the American Medical Informatics Association.
All rights reserved. For perm

d, physicians from nearly all specialties, such as
V
C The Author(s) 2020. Published by Oxford University Press on behalf of the American Medical Informatics Association.
All rights reserved. For permissions, please [[entities/email|email]]: journals.permissions@oup.com
This article is published and distributed under the terms of the Oxford University Press, Standard Journals Publication Model (https://academic.oup.com/journals/pages/
open_access/funder_policies/chorus/standard_publication_model)
1456
Journal of the American Medical Informatics Association, 27(9), 2020, 1456–1461
doi: 10.1093/jamia/ocaa161
Advance Access Publication Date: 3 July 2020

---

## Page 2

primary care and cardiology, were enabled with telehealth to con-
duct ambulatory patient appointments, referred to as “Video Vis-
its,” with voice and/or video. This served to replace in-person
appointments, limiting [[concepts/exposure|exposure]] between patients and healthcare
workers. Finally, telehealth allowed clinicians to conduct voice and/
or video meetings, referred to as “eConsults,” with each other so
physical location did not limit the reach of specialized clinical exper-
tise. These [[concepts/capabilities|capabilities]] were developed over the course of a 3-week
period and released to clinicians and affiliated professional across
outpatient and inpatient settings in MedStar Health, during which
the number of telehealth engagements increased from an average of
100 a day to over 5000 per day.
With this rapid expansion and dramatic increase in telehealth
use, there was an immediate need for improved situation awareness
of all telehealth operations to effectively monitor and proactively
manage patient experience, healthcare provider experience, and
platform performance.2 To achieve this, a 7-person multidiscipli-
nary visualization project team was formed that included expertise
in human factors, telehealth, data visualization, data [[concepts/science|science]], and in-
formatics. The team was formed from experts that had different re-
search and operational roles acro

med that included expertise
in human factors, telehealth, data visualization, data science, and in-
formatics. The team was formed from experts that had different re-
search and operational roles across MedStar Health and had the
capabilities required for this effort. This case report describes our
methods for identifying operational end user needs and designing
and developing visualizations to meet those needs. Finally, we pro-
vide recommendations for rapid visualization development.
MATERIALS AND METHODS
Foundations of telehealth visualization development
A human factors-based theoretical model of situation awareness
(SA) guided conceptualization of visualization dashboards to meet
the needs of telehealth stakeholders. The SA model postulates 3 dif-
ferent levels: perception, comprehension, and projection.3,4 Level 1,
perception, is the most basic level and is the ability to perceive the
current state and monitor specific data elements in the environment.
Level 2, comprehension, is the ability to integrate and synthesize dif-
ferent data elements. Level 3, projection, is the ability to forecast or
predict future states. During the initial phases of the organization’s
adoption and [[concepts/computational-scaling|scaling]] of telehealth technology, our team supported
perception and comprehension needs through visualization of plat-
form
performance
and
utilization.
More
complex
modeling
approaches to achieve enhanced projection were delayed in order to
fulfill these immediate needs.
Visualization development was driven by a user-centered [[concepts/design-thinking|design
process]] that put the needs of end users at the forefront of design and
development.5–7 This design process involved developing prototype
visualizations, soliciting feedback from end users, and iteratively im-
proving the visualizations. Because of the urgent need for visualiza-
tions, a rapid process of development and [[concepts/user-feedback|user feedback]] from
domain experts and/or end users was developed.
Our multidisciplinary visualization team used a 5-step process to
creat

need for visualiza-
tions, a rapid process of development and user feedback from
domain experts and/or end users was developed.
Our multidisciplinary visualization team used a 5-step process to
create and iteratively refine visualization dashboards to support the
initial launch and ongoing development of the expansive telehealth
program. This study was approved by the institutional review
board.
Subject matter expert interviews to increase domain knowledge
With a visualization team new to telehealth there was an immediate
need to increase domain knowledge. We conducted interviews with
the 3 operational directors of the telehealth program and the 3 oper-
ational managers of the different areas of telehealth (on-demand vis-
its, ambulatory visits, and provider consults). The interviews with
the directors were focused on understanding the telehealth program,
current and near-term operations, and identification of key stake-
holders that required awareness of the telehealth program. The
interviews with the operational managers were focused on under-
standing the technology, specific vendors supporting it, clinical use,
and the data it produced. These interviews lasted for about 1 hour
and were the beginning of an ongoing channel of communication
about needs and visualization feedback. [[concepts/notes|Notes]] were taken during
the interviews and these notes were discussed by the visualization
team.
User needs analysis and feature identification
Once stakeholder groups were defined from the subject matter ex-
pert interviews, we conducted a “quick and dirty” needs analysis
with the operational directors and 1–2 members of each operational
team to identify information needs for operational [[concepts/decision-making|decision-making]]
and executive awareness. User needs were elicited through 30-min-
ute virtual meetings in which these stakeholders were asked about
the information they needed. These needs were then synthesized
through group discussion to create a short list of visualization
requirements for each s

ngs in which these stakeholders were asked about
the information they needed. These needs were then synthesized
through group discussion to create a short list of visualization
requirements for each stakeholder group (Table 1).
Processing telehealth data sources
The visualization requirements for each stakeholder group were
used to guide the acquisition and analysis of relevant data produced
by the telehealth platforms. Our telehealth system relied on 2 inde-
pendent platforms supported by different vendors, each with their
own unique data [[concepts/architecture|architecture]] and [[concepts/structure|structure]]. As neither vendor fully
supported industry-standard [[concepts/application-programming-interfaces-apis|application programming interfaces]]
nor a common data format, data were retrieved from their proprie-
tary data platforms using semi-automated scripts and ingested into
structured relational database tables. Data were validated through a
manual [[concepts/quality-assurance|quality assurance]] process. Varying time constraints from
each of our stakeholder groups, evolving data structures, and vari-
able [[concepts/software-reliability|reliability]] of these data feeds required redundant and flexible
extraction methods in order to maintain a resilient situation aware-
ness infrastructure. Further, each platform had unique ways of re-
cording constructs (visit time, visit duration, and dropped or
disconnected calls), requiring data interrogation to determine appro-
priate metrics for operational needs. We were not able to apply any
standard data format or [[concepts/coding|coding]] system to these data.
Visualization design, development, and [[concepts/testing|testing]]
Dashboards were developed using Tableau (Version 2020.1) was
connected to the relational database.8 With the variety of stake-
holder and end user needs, our visualization team divided into pairs
consisting of a lead [[concepts/developer|developer]], driving dashboard development, and
a support developer, handling data issues or providing additional
context around each telehealth platform or program. These pairs
would create prototype dashboards, starting with a basic layout of
data feeds in a [[concepts/coding-workspace|development environment]]

ssues or providing additional
context around each telehealth platform or program. These pairs
would create prototype dashboards, starting with a basic layout of
data feeds in a development environment then rapidly iterating with
end users to ensure the dashboards met their needs. They would also
share these iterations with the broader visualization team to solicit
feedback on the design and highlight any data discrepancies between
dashboards. After stakeholder and visualization team approval,
dashboards would be checked by 1 member of the visualization
team to ensure proper functionality and labeling before being
uploaded to a production environment.
1457

---

## Page 3

Dissemination and iterative refinement
Once in the production environment, these dashboards were dissemi-
nated to all relevant stakeholders as either a push (scheduled e-mail
or message alert) or pull (on-demand availability on a network
server). End users were engaged openly and continuously for feedback
in order to ensure that dashboard design, elements, and functionality
met their specific role-based needs. Each piece of feedback or feature
request was then prioritized based on estimated level of effort and im-
pact then fit into the visualization team’s development plan.
RESULTS
Through our 5-step visualization development process we identified
distinct stakeholder groups based on their information needs and
designed, developed, and implemented dashboards to meet those
needs. The visualization team began work on March 16th with each
of the 7 members dedicated full-time. The 5-step process was com-
pleted over 2 to 3 days for generation of each initial dashboard and
then optimized on an ongoing basis.
Our interviews resulted in the identification of 3 different
stakeholder groups and their respective SA awareness needs:
healthcare system executives, telehealth leaders, and telehealth
managers (Table 1). At the highest level of the organization,
healthcare executives included the chief medical

tive SA awareness needs:
healthcare system executives, telehealth leaders, and telehealth
managers (Table 1). At the highest level of the organization,
healthcare executives included the chief medical officer and others
with responsibility for overall organizational operations. From our
interviews with telehealth leaders, we identified that executive
stakeholders needed weekly awareness of high-level metrics and
trends to convey the overall activity of telehealth across the system
(Table 1). Figure 1 shows an example of the eVisit executive sum-
mary dashboard.
Telehealth leaders were identified as a second stakeholder
group including 7 people charged with leading day-to-day tele-
health operations for the healthcare system. These stakeholders
requested daily awareness of key operational performance indica-
tors with the ability to integrate information to determine if a spe-
cific operational area needed focused [[concepts/attention-mechanisms|attention]] and resources
(Table 1). These needs were met with an overview dashboard rep-
resenting volume and platform performance across all 3 telehealth
initiatives (Figure 2). These operational leaders also had access to
all dashboards being developed and could investigate more detailed
information through the operational manager dashboards as de-
scribed below.
Telehealth operational teams included managers and team mem-
bers involved in active development and maintenance of each tele-
health program. These stakeholders needed detailed information
about their respective areas with the ability to diagnose where issues
such as increased patient volumes, poor patient experiences, or
dropped calls were occurring (Table 1). A dashboard was created for
each program (see eVisit dashboard, Figure 3), and, wherever possi-
ble, features were developed to support projection needs for clinical
Table 1. Stakeholder needs and dashboard features
Stakeholder
Needs
Visualization Dashboard Features and Decisions Supported
Executives
(SA level 1—
perception)
•
Awarenes

ction needs for clinical
Table 1. Stakeholder needs and dashboard features
Stakeholder
Needs
Visualization Dashboard Features and Decisions Supported
Executives
(SA level 1—
perception)
•
Awareness of telehealth patient volume, pro-
vider usage, and patient experience across sys-
tem.
•
Simple representations to quickly highlight
trends and deviations.
•
Weekly reports to summarize current status in
context of overall initiative.
Features:
[[concepts/summary|Summary]] metrics, weekly tables, bar graphs and line charts of
volume, provider usage, and patient experience.
•
Simple and straightforward [[concepts/terminology|terminology]] to enhance
readability.
•
Show current week’s data in context of all data.
•
No interactivity or ﬁltering.
Enabled decisions about:
•
Effectiveness of telehealth solutions in terms of patient reach
•
Where to focus resources
Telehealth Opera-
tional Leaders
(SA level 2—
comprehension)
•
KPIs for each telehealth initiative, including
overall volume, wait times, visit duration, pro-
vider utilization, technical issues, and patient ex-
perience.
•
Daily refreshes to monitor prior-day telehealth
operations and [[concepts/feynmans-three-step-scientific-method|compare]] to previous days.
•
Report aggregate summary metrics across differ-
ent time periods.
Features:
Dense presentation of speciﬁc summary metrics and bar charts
representing overall volumes.
•
Speciﬁc terminology describing complex KPIs.
•
Incorporates end user date ﬁltering allowing [[concepts/power|control]] over calcu-
lation of summary numbers.
Enabled decisions about:
•
Provider stafﬁng levels
•
Speciﬁc operational areas that requires further attention
•
Areas for operational improvement
Telehealth Manage-
ment Teams (SA
levels 2 and 3—
comprehension and
projection)
•
Detailed understanding of patient volume, pro-
vider use, and platform performance for all tele-
health initiatives.
•
Ability to diagnose issues with near real-time
data and high level of control over data ﬁlters.
•
Speciﬁc representations to highlight patterns
sup

formance for all tele-
health initiatives.
•
Ability to diagnose issues with near real-time
data and high level of control over data ﬁlters.
•
Speciﬁc representations to highlight patterns
supporting projection and forecasting.
Features:
•
Visualizes a large number of relevant data ﬁelds to uncover
insights that answer operational questions
•
Filters across large time [[entities/windows|windows]] and manipulate performance
indicator [[concepts/parameters|parameters]]
•
Drills down to individual provider or call-level information.
Enabled decisions about:
•
[[concepts/technical-enhancements|Technical enhancements]] to improve performance
•
Where to focus clinician training efforts
•
Need for additional equipment
Abbreviations: KPI, key performance indicator; SA, situation awareness.
1458

---

## Page 4

staffing and platform technical issues. Finally, ad-hoc visualizations
were produced on request to support specific issues or questions.
The primary users of these dashboards are healthcare system op-
erational leaders and telehealth operational staff. These dashboards
were not distributed to frontline clinical staff. Table 2 provides an
approximate number of users and frequency of use and a summary
of user feedback. Dashboard feedback was generally positive with
several users expressing specific benefits, including efficiency of ac-
cess to data and ease with which they could understand critical
information compared to use of the raw data feeds or vendor-
provided platforms with limited visualization capabilities. The pri-
mary limitations were a lack of [[concepts/connection|connection]] to other data systems
and lack of detail for diagnosing specific technical issues. Our visu-
alization team also observed that developing these dashboards facili-
tated the centralization of data sources and standardization of
metrics
and
terminology
across
the
operation.
Operational
Highlight Trends
Overview of
Patient
Volume,
Experience,
and Provider
Staffing
Weekly
Comparisons
Figure 1. On-demand eVisit executive dashboard.
Summary
Metrics for
each
Telehealth

tion.
Operational
Highlight Trends
Overview of
Patient
Volume,
Experience,
and Provider
Staffing
Weekly
Comparisons
Figure 1. On-demand eVisit executive dashboard.
Summary
Metrics for
each
Telehealth
Initiative
Volume Comparisons by Day
Select or Filter by Date
Figure 2. Telehealth operational leaders’ dashboard.
1459

> **[Image 1]**: This photograph features a bar chart showing daily visit counts from Monday, July 13 to Thursday, July 16. The main subject is the chart with four vertical bars, three dark blue and one [[concepts/light|light]] blue, indicating a trend. The setting appears to be a digital dashboard with a white background and black text labels. The colors used are dark blue, light blue, white, and black.

> **[Image 2]**: This photograph shows a digital report section with two metrics: Mean Visit Duration (00:01:57) and Mean Wait time (00:01:54), both displayed in hours and minutes. The report is produced by MTIC Data & Analytics, updated on April 15, 2020, and labeled as version 1.02. The

> **[Image 3]**: The photograph shows a digital screen displaying statistical data about completed eConsults, including numbers like 32,171 and ratings with response counts. The main subject is the [[concepts/survey-results|survey results]] on eConsult performance. The setting is a webpage or application interface with text and numerical information. Colors are primarily white background with black text and some gray elements for headings.

> **[Image 4]**: The image shows a bar chart with four days from Monday, July 13 to Thursday, July 16, displaying consultation days with values 292, 276, 270, and 260. The bars are dark blue except the last one, which is light blue, set against a white background with black text. A summary section mentions a date [[concepts/range|range]], and the main subject is the chart illustrating daily consultation counts over the specified period. Colors include dark blue, light blue, white, and black.

xt. A summary section mentions a date range, and the main subject is the chart illustrating daily consultation counts over the specified period. Colors include dark blue, light blue, white, and black.

> **[Image 5]**: The photograph shows a digital screen displaying patient evaluation metrics for a service. The main subject includes a 4.7/5 rating with 36% positive [[concepts/responses|responses]], 260 successful visits at 77.8%, and other statistics. The setting is a clean, white-background interface with black text and blue accents for the rating star. Colors are predominantly white, black, and blue.

> **[Image 6]**: The image shows a digital survey summary with statistics for completed video visits. The main subject is the mean provider and platform ratings, including response numbers like 14,870 and 15,109. The setting is a webpage or app interface with black text on a white background. Colors are primarily black text, white background, and gray for section headers.

> **[Image 7]**: The photograph shows a bar chart titled "Visits (5 Days)" with data for Monday to Thursday, July 13-16. The main subject is the chart displaying daily visit counts, with dark blue bars for Monday to Wednesday and a light blue bar for Thursday. The setting appears to be a digital dashboard with text labels and numerical values. Colors include dark blue, light blue, black, and gray text on a white background.

> **[Image 8]**: The photograph shows a digital screen with survey results for a healthcare service, including sections for "Mean Provider Rating" (59 responses) and "Mean Platform Rating" (70 responses). It features a date "Sun Jul 12", a "Set Visit Duration (mins)" slider, and a "Scheduled Visit" section with "2,099 (Average)". The background is white with black text, and blue elements appear for ratings and interface components.

> **[Image 9]**: [Image: [[concepts/computer-vision|vision]] model returned empty description]

ction with "2,099 (Average)". The background is white with black text, and blue elements appear for ratings and interface components.

> **[Image 9]**: [Image: vision model returned empty description]

> **[Image 10]**: The image shows a digital interface section with text elements including "Filters", a date selection labeled "7/16/2020", and ratings like "4.9/5" and "4.8/5". The main subject is a [[concepts/user-interface|user interface]] for tracking completed eVisits, likely part of a service or healthcare platform. The setting is a screen with a white background, black text, and blue accents for interactive elements like "Select Date".

> **[Image 11]**: The image shows a bar chart titled "Demand (5 Days)" with four bars representing daily values: 155, 161, 145, and a blue bar labeled -130. It includes a summary section with a date range from 3/13/2020 to 3/18/2020. The main subject is the demand data visualization, set against a white background with dark blue bars and a blue negative [[concepts/value|value]] bar. Colors used are dark blue, blue, and white.

> **[Image 12]**: [Image: vision model returned empty description]

> **[Image 13]**: This image shows MedStar TeleHealth's eVisit On Demand service statistics, including 139 total requested eVisits, 130 successful visits, and time metrics like 00:15:15 and 00:06:40. The main subject is the telehealth service data presented on a digital screen with a white background. Colors feature the blue and yellow of the MedStar Health logo, black text, and white space.

> **[Image 14]**: This image shows a MedStar Health eVisit Executive Dashboard presenting data on patient-initiated video visits through July 11, 2020. It includes sections for eVisit volume, provider staffing, patient experience ratings, and DMV call origin, displayed through charts and a map. The dashboard uses a white background with blue trend lines, yellow map markers, and black text for metrics. This is a healthcare data report summarizing eVisit metrics and patient experience.

a map. The dashboard uses a white background with blue trend lines, yellow map markers, and black text for metrics. This is a healthcare data report summarizing eVisit metrics and patient experience.

> **[Image 15]**: This photograph shows a digital analytics dashboard for a video encounter named "MedStar eConsult". The main subject displays metrics like a 4.9/5 rating with 36% (928 responses), a duration of 00:15:49, and 334 unique visit attempts. The setting is a screen with a white background and black text, featuring time stamps and numerical data

---

## Page 5

telehealth leader and management users also provided feedback on
operational decisions and functions that were influenced by these
dashboards. These included the following:
•
Identifying when telehealth platform issues were occurring and
deciding where to dedicate resources to troubleshoot technical/
training issues.
•
Tracking Video Visit provider utilization across specialties to
identify where additional workﬂow and/or training optimization
is required.
•
Informing eVisit provider stafﬁng decisions by knowing current
and past patient volumes and wait times.
•
Identifying patient experience and patient follow-up needs by know-
ing which patients are not able to complete eVisits or Video Visits.
DISCUSSION
COVID-19 has required many healthcare organizations to rapidly
expand telehealth services, requiring operational teams to have
robust situation awareness of patient and provider experience as
well as telehealth platform performance. To meet these needs, we
formed a multidisciplinary visualization team with a situation
awareness model as our conceptual framework and a rapid user-
centered design approach. User feedback suggests the visualizations
improved situational awareness and may have provided valuable in-
formation to better inform operational decisions. We also faced sev-
eral
challenges,
including
interoperability,
poor
vendor
data
[[concepts/open-standards|standards]], and challenges accessing real-time d

provided valuable in-
formation to better inform operational decisions. We also faced sev-
eral
challenges,
including
interoperability,
poor
vendor
data
standards, and challenges accessing real-time data. Limitations to
our approach include: no formal interrater reliability when synthe-
Daily Volume
Compared to
Historical Volume
Patient Volume by Hour to
Support Forecasting
Figure 3. On-demand eVisit operational team dashboard.
Table 2. Dashboard users, frequency of use, and feedback
Stakeholder group
Approximate
number of users
Approximate
frequency of use
Feedback
[[concepts/health-system|Health System]]
Executives
5
Weekly
Beneﬁts: High level summary and gestalt of telehealth adoption and utilization
across system during pandemic.
Limitations: Telehealth data disconnected from other enterprise-level informa-
tion systems related to patient care, administration, and billing.
Telehealth Opera-
tional Leaders
9
Daily
Beneﬁts: Summary of telehealth platform KPIs for strategic planning and deci-
sion making; executive and cross-department reporting.
Limitations: “Blind spots” of telehealth data (ie, lack of detailed utilization/
diagnostic information, inability to connect to other information systems).
Telehealth Man-
agement Teams
30–40
Multiple times
per day
Beneﬁts: Ability to drill down into provider and call-level details; telehealth
[[concepts/leadership|leadership]], and cross-team reporting.
Limitations: Lack of real-time information, lack of detailed diagnostic and
utilization information, limitations in connecting to other enterprise-level
information systems.
Abbreviations: KPI, key performance indicator.
1460

> **[Image 1]**: This photo shows a digital interface with [[concepts/star-ratings|star ratings]] for a service. It includes a date field labeled "7/16/2020", time stamps like "06:40" and "06:01", and average ratings of 4.9/5 for providers and 4.8/5 for platforms. The main subject is the star rating section, set against a white background with gray headers and black text.

e "06:40" and "06:01", and average ratings of 4.9/5 for providers and 4.8/5 for platforms. The main subject is the star rating section, set against a white background with gray headers and black text.

> **[Image 2]**: The photograph shows a digital display titled "Successful Visit time Metrics" with time-related statistics. It includes metrics like mean wait time (00:15:15) and mean visit time, presented on a white background with a gray header. The text is black, and the numbers are clearly visible. The setting appears to be a data dashboard for tracking customer visit durations.

> **[Image 3]**: This photograph shows a digital display of demand metrics dated Thursday, July 16, 2020, with a data source labeled MTICDW. The main subject is a statistic indicating 13 unique patients left without being seen, represented as 9.4%. The setting is a webpage or application interface, and the colors include blue for the title, black for the numbers and text, and gray for the background.

> **[Image 4]**: This photograph shows a digital display from MedStar Health's eVisit system, presenting patient eVisit statistics with two key metrics. It includes "139 Total Requested eVisits" and "130 Successful eVisits" in bold numbers. The interface has a light gray background, a blue header with the MedStar Health logo, and black text for the numbers and labels.

> **[Image 5]**: The photograph displays a numerical table with rows and columns filled with numbers. The main subject is the grid of data, set against a plain white background with black text. It appears to be a simple spreadsheet or chart used for organizing numerical information. The colors are predominantly white and black, with no additional hues.

plain white background with black text. It appears to be a simple spreadsheet or chart used for organizing numerical information. The colors are predominantly white and black, with no additional hues.

> **[Image 6]**: The image shows a line graph with a blue line plotted against the "Hour of Visit" scale from 0 to 16 on the x - axis. The main subject is the trend of data over time, with the line rising gradually. The setting is a simple chart with a white background and gray axes, and text at the bottom states it was produced by MTIC Data & Analytics. The colors are primarily blue for the line, white for the background, and gray for the axis labels and grid lines.

> **[Image 7]**: The photograph shows a grid of numbers arranged in rows and columns. Some rows are highlighted with a blue background while others have a white background. The numbers are printed in black text, forming a structured table-like layout. The main subject is the numerical grid with selective blue shading.

> **[Image 8]**: This photograph shows a digital data visualization with a bar chart and line graph. The bar chart has dark blue bars for dates from Monday, July

> **[Image 9]**: The photograph shows a bar chart with dark blue bars labeled for Wednesday through Sunday above a line graph with blue and gray lines. The setting appears to be a digital data visualization, likely for tracking weekly metrics. Colors include dark blue for the bars, black text for the dates, and blue and gray for the line graph lines.

> **[Image 10]**: This image shows a bar chart titled "eVisits Completed (Last 3 days)" with data for Friday through Tuesday. The chart displays [[concepts/running|running]] totals by hour of each day using dark blue bars on a light gray background. Text labels and numerical values are in black, indicating completed eVisits. The vertical axis measures completed eVisits up to 150.

y hour of each day using dark blue bars on a light gray background. Text labels and numerical values are in black, indicating completed eVisits. The vertical axis measures completed eVisits up to 150.

> **[Image 11]**: The image shows a data chart titled "eVisit Hotspots by Hour (Last 3 days)" with three columns for July 14, 15, and 16. It displays numerical values under different hours, likely representing visit counts. The chart uses a simple design with light gray elements on a white background. The main subject is the eVisit hotspot data visualization for the specified dates.

> **[Image 12]**: This photograph shows a bar chart titled "Median Wait time (hh:mm:ss)" displaying wait times across different hours. The x-axis lists hours from 0 to 4, with dark blue bars for most values and a light blue bar at 130. The main subject is the wait time data

> **[Image 13]**: [Image: vision model returned empty description]

> **[Image 14]**: The photograph shows a bar chart titled "eVisit Volume (Last 2 weeks)" with dark blue bars representing weekly data. The chart displays values of 177, 92, 107, 135, and 135, with a dashed line indicating a daily average of 132.4. The background is white, and the text is in black. The main subject is the eVisit volume data visualization.

---

## Page 6

107, 135, and 135, with a dashed line indicating a daily average of 132.4. The background is white, and the text is in black. The main subject is the eVisit volume data visualization.

---

## Page 6

sizing interview content, no design for different devices (eg, mobile
phones, tablets, etc), and no consideration for users with disabil-
ities.
We have identified several lessons learned that may be valuable
to other visualization development teams:
•
Use a lightweight user-centered approach: A rigorous user-
centered design approach is not possible when the goal is to pro-
duce same day data visualizations.9 Use a lightweight approach
by quickly identifying stakeholder groups and identifying at least
1 actual or representative user for feedback.
•
Basic (accurate) visualization is better than no visualization: User
needs should be identiﬁed quickly and basic dashboards for im-
mediate use should be developed as a starting point for rapid
feedback cycles. Focus on meeting user needs as opposed to
spending time on complex or comprehensive representations of
data.
•
Clearly indicate development status and timeliness: Having users
view dashboards that are still in development is necessary, given
the pace of work; however, this information as well as the
“freshness” of data being represented should be clearly marked.
•
Develop prioritization criteria for visualization and feature de-
velopment: Work with a variety of stakeholders to develop clear
criteria based on operational strategy on how to prioritize dash-
board development effort.
•
Stabilize the data environment as much as possible: Reliably re-
ceiving data from telehealth vendors, particularly under rapid
growth, can be challenging. Time should be invested to under-
stand data source characteristics and ensure efﬁcient methods for
data ingestion and [[entities/storage|storage]]. Further, consider mapping telehealth
data standard identiﬁers or existing datasets to enrich dash-
boards, as many stakeholder needs may

and ensure efﬁcient methods for
data ingestion and storage. Further, consider mapping telehealth
data standard identiﬁers or existing datasets to enrich dash-
boards, as many stakeholder needs may require integrating tele-
health data with data from other clinical information systems.
•
Metric design, user literacy, and [[concepts/user-control|user control]] should be based on
audience: Be mindful of the audience and ensure that the metrics
being
presented
meet
audience
needs.10
Terminology
for
executive-level audiences should be jargon-free. Certain dash-
boards should be designed as awareness for the occasional user
and others as tools for superusers.
COVID-19 requires the rapid adoption and expansion of tele-
health to protect both patients and providers. With this unprece-
dented shift comes the need for effective visualization of telehealth
data to support operational needs. With a multidisciplinary visuali-
zation team, these needs can be met. Next steps include improve-
ments to the data warehouse and gathering more feedback from end
users for dashboard optimization.
FUNDING
This research received no specific grant from any funding agency in
the public, commercial, or not-for-profit sectors.
AUTHOR CONTRIBUTIONS
All authors contributed to conceptualization of the case report and
all authors reviewed and edited the case report. RAD and RMR led
the [[concepts/writing|writing]].
[[concepts/conflict|CONFLICT]] OF INTEREST STATEMENT
None declared.
REFERENCES
1.
Hollander JE, Carr BG. Virtually perfect? Telemedicine for COVID-19.
New Engl J Med 2020; 382 (18): 1679–81.
2.
Stadler JG, Donlon K, Siewert JD, Franken T, Lewis NE. Improving the ef-
ﬁciency and ease of healthcare analysis through use of data visualization
dashboards. [[concepts/big-data|Big Data]] 2016; 4 (2): 129–35.
3.
Endsley MR. Measurement of situation awareness in dynamic systems.
Hum Factors 1995; 37 (1): 65–84.
4.
Wright MC, Taekman JM, Endsley MR. Objective measures of situation
awareness in a simulated medical environment. Qual Saf Health Care
2004; 13 (suppl_1): i65–

.
Hum Factors 1995; 37 (1): 65–84.
4.
Wright MC, Taekman JM, Endsley MR. Objective measures of situation
awareness in a simulated medical environment. Qual Saf Health Care
2004; 13 (suppl_1): i65–71.
5.
International Standards Organization. ISO 9241: Ergonomics of Human
System Interaction; 2010. https://www.iso.org/standard/52075.html#:~:te
xt¼Abstract,of%20computer%2Dbased%20interactive%20systems
Accessed March 28, 2020.
6.
Saleem JJ, Plew WR, Speir RC, et al. Understanding barriers and facilita-
tors to the use of Clinical Information Systems for intensive care units and
anesthesia record keeping: a rapid ethnography. Int J Med Inform 2015;
84 (7): 500–11.
7.
Johnson CM, Johnson TR, Zhang J. A user-centered framework for rede-
signing health care interfaces. J Biomed Inform 2005; 38 (1): 75–87.
8.
Tableau Version 2020.1. https://www.tableau.com/support/releases/desk-
top/2020.1 Accessed March 2, 2020.
9.
Sharp H, Preece J, Rogers Y. Interaction Design-Beyond Human-Com-
puter Interaction. 5th ed. Chichester, West Sussex: John Wiley & Sons.
10. Chan W. Increasing the success of physician order entry through human
factors engineering. J Healthc Inf Manag 2002; 16 (1): 71–9.
1461

## Related Concepts
- [[concepts/telehealth|telehealth]] — [Wikipedia](https://en.wikipedia.org/wiki/telehealth)
- [[concepts/visualizing-dyslexia|visualization]] — [Wikipedia](https://en.wikipedia.org/wiki/visualization)
- [[concepts/software|development]] — [Wikipedia](https://en.wikipedia.org/wiki/development)
- [[concepts/presence|awareness]] — [Wikipedia](https://en.wikipedia.org/wiki/awareness)
- [[concepts/safe-ai-use|healthcare]] — [Wikipedia](https://en.wikipedia.org/wiki/healthcare)
- [[concepts/patient-needs|patient needs]] — [Wikipedia](https://en.wikipedia.org/wiki/patient_needs)
- visualization dashboards — [Wikipedia](https://en.wikipedia.org/wiki/visualization_dashboards)
- situation awareness — [Wikipedia](https://en.wikipedia.org/wiki/situation_awareness)
- [[concepts/inclusive-conceptsdesigndesign|user-centered design]] — [Wikipedia](https://en.wikipedia.org/wiki/user-centered_design)
- healthcare operations — [Wikipedia](https://en.wikipedia.org/wiki/healthcare_operations)
- patient volumes — [Wikipedia](https://en.wikipedia.org/wiki/patient_volumes)
- wait times — [Wikipedia](https://en.wikipedia.org/wiki/wait_times)
- platform performance — [Wikipedia](https://en.wikipedia.org/wiki/platform_performance)
- domain knowledge — [Wikipedia](https://en.wikipedia.org/wiki/domain_knowledge)
- [[concepts/job-implementation|stakeholder analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/stakeholder_analysis)
- [[concepts/iterative-refinement|iterative refinement]] — [Wikipedia](https://en.wikipedia.org/wiki/iterative_refinement)
- COVID-19 pandemic — [Wikipedia](https://en.wikipedia.org/wiki/COVID-19_pandemic)
- [[concepts/open-source-protocol|data sources]] — [Wikipedia](https://en.wikipedia.org/wiki/data_sources)
- [[concepts/equipment-choice|operational decisions]] — [Wikipedia](https://en.wikipedia.org/wiki/operational_decisions)
- community transmission — [Wikipedia](https://en.wikipedia.org/wiki/community_transmission)
- [[concepts/technology-for-all|technology adoption]] — [Wikipedia](https://en.wikipedia.org/wiki/technology_adoption)

## Related Entities
- MedStar Simulation Training — [Wikipedia](https://en.wikipedia.org/wiki/MedStar_Simulation_Training)
- [[entities/christian-boxley|Christian Boxley]] — [Wikipedia](https://en.wikipedia.org/wiki/Christian_Boxley)
- [[entities/katharine-t-adams|Katharine T. Adams]] — [Wikipedia](https://en.wikipedia.org/wiki/Katharine_T._Adams)
- [[entities/raj-m-ratwani|Raj M. Ratwani]] — [Wikipedia](https://en.wikipedia.org/wiki/Raj_M._Ratwani)
- [[entities/ram-a-dixit|Ram A. Dixit]] — [Wikipedia](https://en.wikipedia.org/wiki/Ram_A._Dixit)
- [[entities/stephen-hurst|Stephen Hurst]] — [Wikipedia](https://en.wikipedia.org/wiki/Stephen_Hurst)
- Kristi Lysen-Hendershot — [Wikipedia](https://en.wikipedia.org/wiki/Kristi_Lysen-Hendershot)
- [[entities/sonita-s-bennett|Sonita S. Bennett]] — [Wikipedia](https://en.wikipedia.org/wiki/Sonita_S._Bennett)
- [[entities/ethan-booker|Ethan Booker]] — [Wikipedia](https://en.wikipedia.org/wiki/Ethan_Booker)
- MedStar Health — [Wikipedia](https://en.wikipedia.org/wiki/MedStar_Health)
- MedStar Telehealth Innovation Center — [Wikipedia](https://en.wikipedia.org/wiki/MedStar_Telehealth_Innovation_Center)
- Georgetown University School of Medicine — [Wikipedia](https://en.wikipedia.org/wiki/Georgetown_University_School_of_Medicine)