---
wiki-ingested: true
title: "[2] Thilakarathne, NN, The Role of the Internet of Things in Health Care A Systematic and Comprehensive Study"
author: Navod Neranjan Thilakarathne, Mohan Krishna Kagita, Thippa Reddy Gadekallu
published_date: 2020-aug
category: newsletters-health
credibility: Commentary
date: 2026-05-26
source_type: document
wiki-ready: true
migrated_from: library
domain: health-wellbeing
group: health-practice-patient-knowledge
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

---
title: "The Role of the Internet of Things in Health Care: A Systematic and Comprehensive Study"
author: "Navod Neranjan Thilakarathne, Mohan Krishna Kagita, Dr. Thippa Reddy Gadekallu"
date: "August 2020"
---

# The Role of the Internet of Things in Health Care: A Systematic and Comprehensive Study

**Navod Neranjan Thilakarathne¹**, **Mohan Krishna Kagita²**, **Dr. Thippa Reddy Gadekallu³**

1. Lecturer, Department of ICT, Faculty of Technology, University Of Colombo, SRILANKA
2. Postgraduate Student, School of Computing and [[concepts/mathematics|Mathematics]], Charles Sturt University, [[concepts/melbourne-region|Melbourne]], AUSTRALIA
3. Associate Professor, School of Information Technology and Engineering, Vellore Institute of Technology, INDIA

*Corresponding Author: navod.neranjan@ict.cmb.ac.lk*

---

## Abstract

The Internet of Things (IoT) is becoming an emerging trend and has significant potential to replace other technologies, where researchers consider it as the future of the internet. It has given tremendous support and become the building blocks in the development of important cyber-physical systems and it is being served in a variety of application domains, including [[concepts/health|healthcare]]. A methodological evolution of the Internet of Things enabled it to extend to the physical world beyond the electronic world by connecting miscellaneous devices through the internet, thus making everything connected. In recent years it has gained higher [[concepts/attention-mechanisms|attention]] for its potential to alleviate the strain on the healthcare sector caused by the rising and aging population along with the increase in chronic diseases and global pandemics. This paper surveys various usages of IoT healthcare technologies and reviews the state of the art services and [[concepts/software|applications]], recent trends in IoT based healthcare solutions, and various challenges posed including [[concepts/security|security]] and privacy issues, which researchers, service providers and end users need to pay higher attention. Further, this paper discusses how innovative IoT enabled technologies li

s posed including security and privacy issues, which researchers, service providers and end users need to pay higher attention. Further, this paper discusses how innovative IoT enabled technologies like cloud computing, fog computing, blockchain, and big data can be used to leverage modern healthcare facilities and mitigate the burden on healthcare resources.

**[[concepts/keywords|Keywords]]:** Internet of Things, IoT, Medical Internet of Things, MIoT, eHealth, mHealth

---

## I. Introduction

The Internet of Things (IoT) is collective terms for any one of the many networks of sensors, computers, actuators and basically anything that is connected to the internet. These things can interact with the internet by employing various sensors, actuators and gateways for empowering [[concepts/communication|communication]] and is built with appropriate protocol stacks which help them interacting with each other and communicating with the end users, constituting core part of the internet [5][15][74]. IoT provides a variety of technologies that allow a wide range of appliances, devices to connect and communicate with each other through networking technologies. Without any doubt, IoT is becoming a megatrend that can impact the way we live and can be thought of as the interconnection of uniquely identifiable [[concepts/smart-objects|smart objects]] and devices that has the potential to change our lives [16]. The IoT served in many application domains such as logistics, retails, industrial [[concepts/power|control]], smart cities, traffic congestion, public surveillance, waste management, [[concepts/weather-forecasting|weather forecasting]], and healthcare [16][30]. The interested reader is encouraged to refer [15][43][44][63][64][65][66][67][81] for a better understanding of IoT.

ublic surveillance, waste management, weather forecasting, and healthcare [16][30]. The interested reader is encouraged to refer [15][43][44][63][64][65][66][67][81] for a better understanding of IoT.

Healthcare can be identified as one of the major application domains for the IoT and the main [[concepts/motivation|purpose]] of this study is to explore how the IoT can be the next healthcare enabler. In IoT-based healthcare, diverse distributed devices compile, interpret and communicate medical information in real-time, thereby allowing a vast amount of data to be obtained, processed, and analyzed in many different ways [5]. In a typical clinical setting, healthcare solutions use a set of interconnected devices to create an IoT network that is dedicated to healthcare evaluation, including patient monitoring and automatic detection of situations where medical interventions are necessary [7]. Healthcare dependence on IoT is increasing day by day to improve access to patient care, to enhance the quality of care, and, most importantly, to limit the cost of care [2][6][18]. With the increasing aging population and the related increase in chronic diseases putting tremendous pressure on modern healthcare systems [19][28][30], the demand for healthcare services from hospital beds to medical staff is becoming high [20]. In general heart failure patients and patients with hypertension, respiratory diseases, or diabetes require medical attention more often than regular patients [21]. Subsequently, a [[concepts/solution|solution]] is required to relieve this massive burden on the healthcare sector, whilst continuing to provide quality care to the patients at risk as noted above. With the adaptation of the Internet of Things, most of the problems associated with the increasing elderly population, increased rates of chronic diseases, and the shortage of health staff and medical facilities can be addressed. Modern medical care measuring devices such as blood pressure monitoring devices, blood glucose level monitoring devices,

ases, and the shortage of health staff and medical facilities can be addressed. Modern medical care measuring devices such as blood pressure monitoring devices, blood glucose level monitoring devices, weight and motion sensors, and various [[concepts/wearable-devices|wearable devices]] incorporate diverse communication skills. Basically they can create IoT networks that are implemented for home telemonitoring so that patients can be treated remotely or make the medical personnel aware of the patient condition regardless of the patients location [7].

> **[Figure 1]**: Recent IoT healthcare trends showing interconnected medical devices, cloud services, wireless networks, databases, and various healthcare applications including wearable services, emergency care, home monitoring, and blood glucose monitoring.

As depicted in Figure 1 recent IoT healthcare trends, healthcare networks powered by wireless technologies are expected to support real-time monitoring, emergency care, early diagnosis, an ailment of chronic diseases. Medical servers, databases, and cloud-enabled services play a vital role in storing medical data and creating health records and delivering on-demand services to authorized stakeholders. In addition, it offers many medical applications such as monitoring of chronic illnesses, fitness programs, rehabilitation, wearable monitoring devices, and elderly care. Different medical devices, sensing devices, diagnostic and imaging devices can, therefore, be viewed as smart devices or objects that constitute a core part of healthcare IoT. Healthcare services based on IoT as a whole are expected to reduce costs, amplify patient care, and enrich the [[concepts/user-experience-design|user experience]] [16,29].

evices or objects that constitute a core part of healthcare IoT. Healthcare services based on IoT as a whole are expected to reduce costs, amplify patient care, and enrich the user experience [16,29].

In recent years this field has attracted higher attention from the researches and service providers over the practical challenges showed up from the usage and adaptation of IoT technologies. As a result, now there are various applications, services, and prototypes in the field. Recent major research trends in healthcare include new services and applications, platforms, interoperability, and security issues, among many. However, the IoT is still an emerging technology that has many doubts among the researchers. On the other hand adaption of IoT with healthcare solutions are still at the early stages of development. As a result, a thorough understanding of current research and future directions are expected to be useful for many stakeholders who are keen on this domain. In this regard, this paper examines novel initiatives in IoT based healthcare research and various challenges that needed to be addressed in order to transform this IoT adaptation in healthcare into the next level. Therefore this paper provides a comprehensive insight into how IoT is used in the healthcare industry by:

- Providing an extensive survey about benefits of IoT-based healthcare solutions, services, and applications along with enabling technologies.
- Discussing recent trends and initiatives that could reshape IoT-based healthcare solutions.
- Providing extensive knowledge about challenges and issues that needed to be addressed in order to make the IoT based healthcare ecosystem more stable.

t could reshape IoT-based healthcare solutions.
- Providing extensive knowledge about challenges and issues that needed to be addressed in order to make the IoT based healthcare ecosystem more stable.

The remainder of this paper is organized as follows. Section 2 describes how the adaption of IoT is beneficial for healthcare. Section 3 discusses IoT healthcare services, applications and novel initiatives, and wearable technologies. Section 4 describes recent and forthcoming IoT healthcare trends and initiatives that can revive the healthcare domain. Section 5 discusses how IoT enabled innovative technologies can be further used to uplift the healthcare infrastructure. The next section describes challenges and open issues and Section 7 concludes the paper, summarizing the key findings.

---

## II. How IoT is Beneficial for Healthcare

The Internet of Things has emerged as a groundbreaking technology that gathers vital body [[concepts/parameters|parameters]] from patients and monitors their pathological data through miniature wearable devices and ingestible sensors. It has shown a greater potential for improving peoples health and supports a wide range of applications, from implantable medical devices to wireless body area networks and cloud-based analytics platforms [1]. Thus, IoT-based healthcare solutions can be used in many areas, including remote health monitoring, monitoring and treating chronic diseases, fitness programs, elderly treatment, and pandemic circumstances. The IoT has changed the lives of many patients, particularly the elderly, by allowing for constant tracking of their health conditions. This has a considerable impact on individuals living alone and their families where a context-dependent alert mechanism sends signals to family members or health personnel on any disturbance or changes in persons routine activities, so they can take any necessary precautionary measures [24]. Based on the interaction and usage, different stakeholders are interacting with related IoT tec

ce or changes in persons routine activities, so they can take any necessary precautionary measures [24]. Based on the interaction and usage, different stakeholders are interacting with related IoT technologies in several ways [25].

### IoT for Physicians

IoT helps healthcare professionals to be more proactive and more attentive during their work. The data obtained from different IoT devices will help doctors to determine what the patients best care process is and achieve the desired outcomes. By embedding wearables and remote home monitoring tools with IoT, doctors can more accurately control patient safety and track patient adherence to routine care schedules [25].

### IoT for Hospitals

IoT has made it possible for different devices to help keep track of the patients health condition on a regular basis and to monitor it continuously. However, hospitals can keep track of the real-time location of medical devices such as wheelchairs, defibrillators, oxygen pumps, nebulisers and other monitoring tools using IoT sensors attached to them. Additional IoT-enabled hygiene surveillance devices help prevent contamination of patients. IoT devices also help preserve hospital inventory, such as the management of pharmacy inventories and monitoring the environment [25].

### IoT for Patients

Devices that are worn the patient and ingestible sensors play a vital role in regularly monitoring the patients condition and disease diagnosis. Such devices like blood pressure monitoring, heart rate monitoring cuffs, and wearables like fitness trackers can be wirelessly connected or, else link with your smart mobile device for further analysis by authorized medical personnel.

The following section illustrates more briefly about the benefits that can be gained from the adaption of IoT enabled technologies in the health care field.

### 1. Continuous real time monitoring and reporting

ing section illustrates more briefly about the benefits that can be gained from the adaption of IoT enabled technologies in the health care field.

### 1. Continuous real time monitoring and reporting

In the case of a medical emergency, real-time monitoring of medical data can save lives, such as heart failure, stroke, diabetes, asthma attacks, etc. Different tools and sensors mounted on the human body collect and transfer health data using the mobile data [[concepts/connection|connection]] [62]. This collected data may be stored in the cloud or remote servers and shared with an approved person who may be your doctor, your insurance provider, a participating healthcare organization, or an external party. Additionally, it allows them to access the data collected irrespective of their location, time or device.

### 2. Analysis of the data

IoT interconnected devices can capture, analyze, and report the data in real time, reducing the need to store raw data. If cloud access is unavailable, it is difficult to store and manage a vast amount of real-time data that a device is captured and sent in a very short time. Also collecting data from multiple devices/sources and processing it manually is always a tedious task for healthcare providers.

### 3. Tracking and notification

In case of a medical emergency and life-threatening situations, medical IoT devices gather critical data and pass the data to doctors and hospitals for real-time monitoring, whilst dropping alerts to the involved parties.

### 4. Mobile emergency support

With the latest mobility tools in healthcare, the medics will test patients immediately and recognize the on-the-go ailments. In an emergency, patients can use a smart mobile device to communicate with the medical staff, who are several miles away.

### 5. Connectivity and affordability

and recognize the on-the-go ailments. In an emergency, patients can use a smart mobile device to communicate with the medical staff, who are several miles away.

### 5. Connectivity and affordability

IoT will automate patient care workflows with the assistance of healthcare [[concepts/automation|automation]] systems and other new technologies, and next-generation healthcare facilities. Healthcare IoT facilitates interoperability, machine-to-machine communication, knowledge sharing, and data [[concepts/exercise|movement]] that makes healthcare [[concepts/service-delivery|service delivery]] more effective.

### 6. Reduced cost

IoT allows real-time patient monitoring, dramatically reducing unnecessary doctor visits, hospital stays, and readmissions and thereby drastically reducing the cost of doing so.

### 7. Improved patient care

IoT powered devices and technologies allow doctors to make educated, evidence-based decisions based on the collected data.

### 8. Faster diagnosis

[[concepts/continuous-monitoring|Continuous monitoring]] of patients and data in real time help to detect symptoms at an early stage or even before symptoms develop.

### 9. Managing drugs and equipment

Drug and medical equipment procurement is a significant problem in the healthcare sector. These are handled and optimized effectively by connected devices and sensors, thus reducing unnecessary costs and man-hours.

---

## III. IoT Healthcare Applications and Services

IoT enabled healthcare systems are used in many areas, including elderly care, rehabilitation, [[concepts/chronic-disease-management|chronic disease management]] and can be further categorized as services and applications. This IoT services, and applications are used directly by patients or medical practitioners [3][4][8][14][26][37][73][74][75][78]. This section discusses about each of the services and applications.

### IoT Medical Services

applications are used directly by patients or medical practitioners [3][4][8][14][26][37][73][74][75][78]. This section discusses about each of the services and applications.

### IoT Medical Services

According to [16], the authors proposed and defined IoT healthcare services at a more generic level and suggested it could be a foundation of set of applications. Although it is considered generic in terms, each service, provides many solutions that can stimulate patient care. The following section describes about this IoT healthcare services.

#### 1. Ambient Assisted Living (AAL)

AAL encompasses IoT based technical systems to support the daily routine of elderly people and people with special needs. AAL's main goal is to maintain and foster those people autonomy and thus enhance their lifestyle and home environment safety. AAL includes services, products, and concepts aimed at improving the [[concepts/quality-of-life|quality of life]], well-being, and safety of the elderly and those with special needs [10][14][56]. Recently there is a development of [[concepts/ai-technologies|artificial intelligence]] applications focused on IoT that can meet the healthcare needs of the elderly and the disabled. AAL-powered solutions will give trust for elderly people by ensuring greater autonomy and providing them with human-servant-like assistance in the event of any problem [16]. With regard to the fields of needs for the elderly, all fields can be accomplished via IoT such as chronic disease tracking, on-demand provision of fresh food, warning systems, alert services and enabling people-to-people contact, for example with relatives and neighbors, are just a few mentionable applications of AAL powered by IoT related technologies [10].

#### 2. M-Health (Mobile Health)

enabling people-to-people contact, for example with relatives and neighbors, are just a few mentionable applications of AAL powered by IoT related technologies [10].

#### 2. M-Health (Mobile Health)

M-Health combines [[concepts/portable-computing|mobile computing]], medical equipments, and heterogeneous networking technologies [5][56]. It introduces the various wireless technology used in healthcare networking such as GPRS, 3G, 4G, WLAN, ZigBee, Bluetooth, 6LoWPAN. This mobile healthcare enables patients to access their health-related information when traveling on the road, spending time at the gymnasium, or relaxing at home through a smartphone or cloud-based web dashboard applications. This results in the most effective diagnosis because healthcare professionals have continuous access to the patient database [48]. In [30][38], authors have implemented a mobile-based [[concepts/architecture|architecture]] and mobile application for remote monitoring of a patients condition. It is noted that many patients start using mobile apps to handle specific health needs. These devices and mobile apps are now increasingly being used and integrated into telemedicine and telehealth [45][50]. The increased use of mobile technology and smart mobile apps in the healthcare sector has a huge impact on healthcare.

#### 3. Adverse Drug Reaction

Since the adverse drug reaction rate is high among individual patients and hospitals around the world, the IoT-based treatments and techniques help avoid drug abuse by using [[concepts/expert-systems|knowledge-based systems]], smart pill bottles, and cloud-based electronic health record (EHR) systems [14][49].

#### 4. Medical Internet of Things (MIoT)

s and techniques help avoid drug abuse by using knowledge-based systems, smart pill bottles, and cloud-based electronic health record (EHR) systems [14][49].

#### 4. Medical Internet of Things (MIoT)

MIoT has emerged as a new healthcare technology that consists of group of internet-connected devices capturing vital body parameters in patients and tracking their pathological details through tiny wearable devices or implantable sensors. MIoT has shown enormous potential for better guaranteeing the health of people and promotes a wide range of innovations used in the healthcare.

#### 5. Community Healthcare (CH)

[[concepts/community-health|Community health]] is a sub-section of [[concepts/public-health|public health]] that focuses on individuals and their role as determinants of the [[concepts/wellbeing|wellbeing]] of their own and of others. Community Healthcare needed to be developed in order to provide successful health-solutions in a local community. This could be a network of regional hospitals/community/ residential area. CH can be used to get common information from a group of people.

#### 6. Children Health Information (CHI)

The IoT program called CHI is intended to treat children with physical, behavioral, or [[concepts/mental-health|mental health]] disorders and members of their families [16].

#### 7. Semantic Medical Access (SMA)

To analyze massive amounts of aggregated data stored in the cloud, IoT healthcare applications use medical rule engines. When developing IoT-based healthcare applications, the broad potential of medical semantics has received increased attention [16].

#### 8. Embedded Gateway Configuration (EGC)

The Embedded [[concepts/gateway|Gateway]] Configuration service is known as the IoT-based architectural network service that links the patient nodes to the internet and medical equipment. For example, the IoT based medical sensor network employs a personal mobile gateway [16].

#### 9. Indirect Emergency Healthcare (IEH)

at links the patient nodes to the internet and medical equipment. For example, the IoT based medical sensor network employs a personal mobile gateway [16].

#### 9. Indirect Emergency Healthcare (IEH)

IEH can provide various solutions such as the availability of information, the [[concepts/preservation|preservation]] of information, after notification, post-accident intervention, and record keeping. For example, weather forecasting, hazard warnings, traffic [[concepts/scenarios|scenarios]], accident alerts are few of the mentionable solutions.

#### 10. Medical Implants

IoT-based healthcare technologies aim to implant medical devices into a human body to improve and restore human functions such as cardiac pacemakers to stimulate heart muscles, deep brain stimulation systems, and to raise patient safety and [[concepts/life-expectancy|life expectancy]].

### IoT Healthcare Applications

In addition to the services aforementioned, the market currently provides numerous smart healthcare products, wearables, and other apps. Such devices can be seen as advances in IoT that can contribute to specific healthcare applications [8][16][17][23][27][30]. The next segment deals with IoT-based healthcare applications. These applications can be categorized as an individual (single condition) and clustered (clustered condition) based on data retrieval and data collection. A single condition application refers to a specific disease, whereas clustered condition deals with a number of diseases or conditions as a whole [16].

#### Individual Applications

In this category, a patient-centered application is constructed to collect data from an individual patient at any time, such as ECG monitoring, voice monitoring, body temperature monitoring, blood pressure monitoring, glucose level sensing, and [[concepts/oxygen-saturation|oxygen saturation]] monitoring [14].

#### Clustered Applications

t any time, such as ECG monitoring, voice monitoring, body temperature monitoring, blood pressure monitoring, glucose level sensing, and oxygen saturation monitoring [14].

#### Clustered Applications

To provide successful health-solutions in a local community, community healthcare has to be created. This could be a regional/residential / community hospital network. Moreover, most mobile healthcare applications have specific applications for medical word scanning, such as diagnostic apps, medical education apps, medical calculators, clinical communications apps, and literature search apps. These applications collect data from a group of patients using these devices, then submit data for further analysis [14].

Following section illustrates more examples about this.

#### 1. Glucose Level Monitoring

Diabetes is a set of metabolic diseases that have a high level of blood glucose over an extended period of time. Recording blood glucose levels reveals individual patterns of blood glucose changes and helps plan meals, activities, and drug times.

#### 2. Electrocardiogram Monitoring (ECG)

Electrocardiogram monitoring reveals the electrical activity of the heart recorded by electrocardiography that includes measuring the simple heart rate and thus determining the essential rhythm, as well as diagnosing multifaceted arrhythmias, myocardial ischemia, and prolonged QT intervals.

#### 3. Body Temperature Monitoring

This helps doctors to determine the effectiveness of therapies depending on the temperature of the patient's body. A fever is a response to stimuli unique to a disease. The body adjusts its usual temperature to help the body's own defence mechanisms and doctors can better understand the patients homeostasis by monitoring the body temperature.

#### 4. Asthma Monitor

The body adjusts its usual temperature to help the body's own defence mechanisms and doctors can better understand the patients homeostasis by monitoring the body temperature.

#### 4. Asthma Monitor

Now there are wearable intelligent asthma monitors intended to identify the signs of an asthma attack prior to its onset, helping to handle it until the attack gets worse. ADAMM is an example of this type of Asthma Monitor.

#### 5. Blood Pressure (BP) Monitoring

For the moment, several IoT healthcare based devices, wearables capable of measuring blood pressure, are beginning to be offered on the market, offering the possibility of monitoring BP every time and everywhere [57][58]. These devices encompass with high-precision blood pressure monitoring, automatic wireless synchronization with your smartphone, compatible with heterogeneous smartphone operating systems, instantly sharing results with friends, family, or doctor, tracking physical activities and daily diet as part of your overall health.

#### 6. Oxygen Saturation Monitoring

Blood oxygen saturation (SpO2) is one of the vital parameters of survival that is potentially used in patients, and new-born health monitoring, etc. [60].

#### 7. Rehabilitation Systems

IoT-based recovery/rehabilitation services are becoming a more secure way of alleviating the problems associated with elderly population and disabled people, thereby improving and preserving the functional capacity and the quality of life of people with certain physical disabilities [61].

#### 8. Smartphone Healthcare Apps

population and disabled people, thereby improving and preserving the functional capacity and the quality of life of people with certain physical disabilities [61].

#### 8. Smartphone Healthcare Apps

The emergence of smartphones as a major IoT enabler has been highlighted in recent years by a spike in electronic gadgets with smartphone-controlled sensors. Various [[concepts/hardware|hardware]] and software technologies have been developed to render smartphones as flexible healthcare solutions. Smart mobile devices are becoming ubiquitous in healthcare settings, leading to rapid growth in medical application creation. There are now various smartphone applications available to assist health care professionals (HCPs) with many critical tasks such as knowledge and time management, maintenance and access to health records, communications and [[concepts/consulting|consulting]], collection of data and information, patient management and supervision, [[concepts/clinical-reasoning|clinical decision-making]], and medical education and [[concepts/training|training]] [76][77].

In addition to the applications discussed above now there are various IoT powered gadgets, wearables in the market for public use. These products are the novel initiatives that make the technology affordable for everyone, which ultimately aid to make the patient lives more comfortable [22]. This section discusses these new initiatives and wearable technologies.

### Novel Initiatives and Wearable Technologies

#### 1. Hearables

Hearables are hearing aids and can be used by people who have hearing loss. Most devices are bluetooth compliant, so you can sync your smartphone for improved connectivity for better hearing aid.

#### 2. Ingestible Sensors

Ingestible sensors are tiny pill-sized sensors that track the drug in our body and alert us if there are any anomalies in our body. Such sensors can be a huge benefit to a diabetic patient, as they can help to reduce symptoms and provide early warning for diseases.

#### 3. Moodables

lert us if there are any anomalies in our body. Such sensors can be a huge benefit to a diabetic patient, as they can help to reduce symptoms and provide early warning for diseases.

#### 3. Moodables

Moodables are tools that boost the mood during the day that can improve our mood. These are wearables placed on the head, which transmit low-intensity current to the brain, which increases our mood.

#### 4. Computer Vision Technology

With the help of artificial intelligence, [[concepts/computer-vision|computer vision]] technology has given rise to drone technology that aims to mimic [[concepts/visual-perception|visual perception]] and thus make decisions based on it. This system can also be used to navigate visually handicapped people, leading towards balancing their daily activities.

#### 5. Healthcare Charting

IoT devices like Audemix reduce the amount of manual work that a doctor has to do during patient charting. It is powered by voice [[concepts/commands|commands]] and collects data about the patient. It makes data about the patient readily available for review. Thereby it saves time for both patient and physician.

Naya, Orbita, TruInject, CrossChx, Neurotech, Breathometer, Keriton, MeruHealth, LifeFuels, Proteus, Sensely, Pear Therapeutics, Genoox, Helix, Karius, Babylon Health are just a few examples of healthcare manufacturers engaged in developing IoT solutions for related healthcare products.

---

## IV. IoT Healthcare Trends and Initiatives

elix, Karius, Babylon Health are just a few examples of healthcare manufacturers engaged in developing IoT solutions for related healthcare products.

---

## IV. IoT Healthcare Trends and Initiatives

The global healthcare [[concepts/market-size|market size]] powered by the Internet of Things was estimated at USD 147.1 billion in 2018 and is expected to witness a 19.9% CAGR over the forecast period. Growing adoption of wearable devices, investments to introduce digital technologies in the healthcare sector, and the advent of connected treatment are key factors driving growth in the industry. Based on research carried out by a network operator company in Aruba, it is estimated that by early 2020 nearly 87% of healthcare organizations around the world will implement IoT services. Researchers surveyed about 3,100 IT companies across 20 countries worldwide including healthcare and business decision-makers. This study concluded that healthcare institutions introduced IoT to improve patient monitoring, foster [[concepts/innovation|innovation]], and cut costs [79].

The latest technological advancements in IoT sensors promote rapid growth in high tech healthcare applications. Wireless Body Area Sensor Networks (WBASN) are emerging as exciting eHealth integrating technologies [9][36][50][51]. A WBASN for remote health monitoring consists of multiple sensor nodes worn by the patient which can measure and report the status of the patient allowing remote monitoring of health.

[9][36][50][51]. A WBASN for remote health monitoring consists of multiple sensor nodes worn by the patient which can measure and report the status of the patient allowing remote monitoring of health.

The AT&T Medical Imaging and Information Management Solution [52][54] allows the physician to monitor and accelerate patient care through cloud-enabled virtual collaboration and mutual interpretation of patient images such as X-rays, computed tomography (CT) or Magnetic resonance imaging (MRI) scans. This program allows medical staff to almost immediately, from anywhere, connect, and monitor patient photos, providing vital point-of-care notifications to physicians who are attending. This dramatically lowers costs and speeds up the patient care cycle.

The section below illustrates a few trends we can anticipate in the coming years.

### IoT Healthcare Trends

1. **IoT will help to stimulate patient care in smart hospitals** that make full use of the connectivity and autonomy available through medical IoT devices. Facilities of this type will become normal and the quality of patient care and work-life for physicians and nurses will be improved to new levels [80].

2. **Surgical [[concepts/robotics|robotics]]** are already in use to some extent but will take on a more prominent role as the technology matures. The precision that can be achieved through artificial intelligence-guided robots will outperform the [[concepts/capabilities|capabilities]] of the most skilled human surgeons.

3. **Remote monitoring of patients** would reduce the need for several doctor visits. The data made available to healthcare professionals will make it possible for them to fine-tune daily treatment regimens.

4. **Wearables will hold to the top of the market.** Major providers of mobile devices such as Apple, Android and BlackBerry are developing and upgrading their authentic wearables, introducing more health monitoring features to them.

op of the market.** Major providers of mobile devices such as Apple, Android and BlackBerry are developing and upgrading their authentic wearables, introducing more health monitoring features to them.

5. **Robot surgery becomes a common reality.** On more than one occasion, artificial intelligence-powered, robotic surgery appeared to be more accurate than actual doctors. There are still challenges and threats involved, but the technology is certainly in the spotlight and aiming to become more popular in the near future.

6. **Integrating with other popular IoT innovations** broadens the scope. Artificial Intelligence (AI), Augmented reality (AR), [[concepts/machine-learning|Machine Learning]], Big Data, Blockchain are just a few of the technologies which further fuel and expand IoT forces. For one example, AI is already better and far more accurate in predicting breast cancer in women [81].

---

## V. IoT Healthcare Technologies

The Internet of Things has been taken part in designing innovative solutions with the aid of IoT enabled technologies. There are many enabling technologies available for the time being and in the following section, we focus on core IoT-enabling technologies that have the potential to stimulate health care.

### 1. Cloud Computing

In a typical IoT-based healthcare context, different devices that are distributed in nature gather, analyze, and transfer clinical information to the cloud in real time, allowing the collection, storage, and analysis of broad data streams in many new ways and produce context-dependent alarms based on the patterns of analyzed data [33]. This revolutionary approach to data collection using cloud computing allows for constant and omnipresent access to medical information from any connected device over the internet [5].

### 2. Grid Computing

evolutionary approach to data collection using cloud computing allows for constant and omnipresent access to medical information from any connected device over the internet [5].

### 2. Grid Computing

Grid computing is a term that is often used with cloud and the inadequate computational power of medical sensor nodes can be resolved by the [[concepts/adoption|implementation]] of grid computing into the pervasive healthcare network. Grid computing, more specifically known as cluster computing, can be seen as the foundation of cloud computing.

### 3. Big Data

Big data can facilitate for huge amounts of health data generated from different medical devices, sensors and can provide various resources to enhance the efficiency of health diagnosis and monitoring methods using enhanced data analytics capability. A detailed review and in-depth discussion of cloud-based processing of big data in healthcare were conducted in [72].

### 4. Fog Computing

Fog is basically a layer of a distributed network environment that is closely associated with the Internet of things and Cloud Computing. A basic fog architecture is comprised of a number of heterogeneous devices that are geographically dispersed and are connected omnipresently at the edge of a network to provide reliable and scalable connectivity, a substantial amount of computation, and storage services. Fog computing has many advantages and is suitable for applications where high response time and low latency are of the utmost importance, especially applications for health care [13][47]. Most medical healthcare applications use the cloud as storage and to process the generated information. Using cloud-enabled technologies, however, can create delays intolerable to critical medical applications. This novel paradigm of Fog computing thus emerged as an alternative to overcome this problem of cloud, bringing computation and storage closer to the sources of data.

to critical medical applications. This novel paradigm of Fog computing thus emerged as an alternative to overcome this problem of cloud, bringing computation and storage closer to the sources of data.

In [68], authors have discussed novel Fog computing-based software architecture designed to facilitate the management of medical records. This architecture uses blockchain concepts to provide the security features and to enable fog nodes to distribute the [[concepts/authorization|authorization]] process.

### 5. Networks

A typical IoT enabled healthcare network comprises numerous networks ranging from short-range communications networks (e.g., WPANs, WBANs, WLANs, 6LoWPANs, to WSNs) to long-range communications (e.g., All sort of cellular networks). The use of ultra-wideband (UWB), BLE, NFC, and RFID technologies can also help to design medical networks with low power medical sensor devices. Technological advances in low-powered network systems and medical sensor devices enable the use of wireless sensor networks in healthcare. Wireless sensor networks can be used in a wide range of applications including precision farming, incident tracking, disaster management, and health care [5][12][36].

The ever-increasing emergence in the communication technology of modern smart objects brings a new age of application growth for IoT based networks. Because of the contactless design and [[concepts/software-reliability|reliability]] of data recovery of mobile smart objects such as wearable devices or custom-made bio-sensors, many creative forms of healthcare systems with body sensor networks (BSN) and Wireless Sensor Networks (WSNs) are increasingly having an impact in our everyday lives [11].

### 6. Ambient Intelligence

many creative forms of healthcare systems with body sensor networks (BSN) and Wireless Sensor Networks (WSNs) are increasingly having an impact in our everyday lives [11].

### 6. Ambient Intelligence

Since end-users, providers, and customers are human (patients, or health-conscious individuals) in a healthcare network, it is important to apply ambient intelligence. Ambient intelligence allows the continuous learning of human actions and executes any actions that are required, triggered by an accepted event. Integrating autonomous control and human-computer interaction (HCI) technologies into environmental intelligence will further enhance the functionality of IoT-assisted healthcare services [22].

### 7. Wearables

Wearable medical devices can be used to promote patient interaction and enhance public safety. Gamification, target-oriented healthcare networks, and real-time details are the main advantages of this [[entities/wearable-devices|wearable technology]].

### 8. Augmented Reality

Augmented reality is a huge part of IoT and performs a critical role in the advent of health care. In life-threatening procedures, simulations, and [[concepts/remote-health-monitoring|remote patient monitoring]], this augmented reality is highly beneficial.

### 9. Blockchain

Blockchain is a decentralized and distributed innovative technology and has extensive uses in the context of health care settings. Blockchain records are mostly used in banking and finance industries, but now they are being used for security, privacy, and data sharing purposes between various parties in the healthcare industry. Blockchain has enormous potential to enhance the security aspect of IoT-based healthcare applications. The following section shows a few examples of IoT-based healthcare applications that use blockchain technologies [70][71].

- Clinical Data Sharing
- Personal Health Record (PHR) [[concepts/data-management|Data Management]]
- Electronic Health Record (EHR) Data Management
- Medicine Supply Chain
- Billing/Payers

---

## VI. IoT Healthcare Challenges

- Clinical Data Sharing
- Personal Health Record (PHR) Data Management
- Electronic Health Record (EHR) Data Management
- Medicine Supply Chain
- Billing/Payers

---

## VI. IoT Healthcare Challenges

It is no doubt that IoT has a greater potential in healthcare to supersede other technologies on which healthcare is dependent on. In doing so, it will surmount and face obstacles along the way. There are several authors who have discussed potential challenges of IoT in healthcare and interested readers are encouraged to read [6][7][18][35][74][78] for further information. In the long run, there will be a multitude of technical difficulties and problems, regarding the adaptation of this technology, which we will discuss in the next section. We believe this section will be highly useful researchers who are engaged in finding innovative solutions to overcome the challenges following mentioned.

### 1. Underdeveloped Initiatives

Many healthcare programs related to IoT will need time to evolve and improve to work with the thrust. This whole technological niche needs to grow a lot to begin delivering better enhancement and precise results.

### 2. Lack of Available Memory and Power

IoT healthcare devices are equipped with low speed [[concepts/central-processing-units|processors]] and have a very limited on device memory and limited storage capacities, which means that devices can only perform small computational operations and can only serve as a sensor or actuator. These sensors and devices, on the other hand, basically generates large amounts of data, which are indeed important and need to be further analyzed. This raises doubt about potentially large data repositories that can hold all these large volumes of data for indefinite terms and devices that can perform on-demand analytics without any interference from the underlying memory and processing power.

### 3. Difficulties with Regular Updates

olumes of data for indefinite terms and devices that can perform on-demand analytics without any interference from the underlying memory and processing power.

### 3. Difficulties with Regular Updates

For IoT health devices, regular updation of security patches are needed to patch their potential vulnerabilities. Constant updates would take a lot of work and may also lead to several technological problems.

### 4. Regulations Governing Global Healthcare

Any changes or changes to IoT in healthcare still need to be approved and must go through global healthcare regulatory bodies all over the world, making it a time-consuming process. As a consequence and because of some certain formalities it holds several developments at bay.

### 5. Energy Consumption

A growing number of sensors and devices on an IoT network needs to process higher energy. It thus increases the power leakage and the consumption of energy. It is possible to use an optimization algorithm to reduce energy consumption but due to the complexity of devices it is becoming a tedious task.

### 6. Integration with Heterogeneous Protocols and Devices

The convergence of numerous system forms in the healthcare sector creates impediments to IoT implementation. The explanation behind this challenge is that device manufacturers have not reached consensus on communication protocol and [[concepts/open-standards|standards]], thereby making each manufacturer build their own separate IoT device ecosystem that doesn't fit with the devices and applications of competing manufacturers, thereby making [[concepts/integration|integration]] difficult. This non-uniformity slows down the process and reduces the scalability of IoT in the healthcare sector.

### 7. Accuracy of Data

tions of competing manufacturers, thereby making integration difficult. This non-uniformity slows down the process and reduces the scalability of IoT in the healthcare sector.

### 7. Accuracy of Data

Given the non-uniformity of data and heterogeneous communication protocols, it is very difficult to gather data for important insights and further analysis. IoT collects data in bulk and it is necessary to separate the data in chunks without overloading with accurate precision for better performance for proper analysis of the data. Overloading of data could impact the decision-making process in medical care in the longer term.

### 8. Cost

Cost is a significant aspect that has to be taken into account when designing IoT healthcare solutions and introducing new initiatives. Whilst you will be investing huge sums of money and resources on implementing, the return on investment will be equally high as your business saves time and manpower, whilst improving the whole process, generating more [[concepts/revenue-streams|revenue streams]].

### 9. Education and Training

Hospitals and Healthcare organizations need to train their staff adequately regarding the functions and the usage of various IoT devices. They do need to be aware of the risks and challenges involved in managing IoT

## Related Concepts
- [[concepts/internet-of-things|Internet of Things]] — [Wikipedia](https://en.wikipedia.org/wiki/Internet_of_Things)
- [[concepts/health-care|Health Care]] — [Wikipedia](https://en.wikipedia.org/wiki/Health_Care)
- [[concepts/systematic-study|Systematic Study]] — [Wikipedia](https://en.wikipedia.org/wiki/Systematic_Study)
- [[concepts/comprehensive-review|Comprehensive Review]] — [Wikipedia](https://en.wikipedia.org/wiki/Comprehensive_Review)
- Medical Internet of Things — [Wikipedia](https://en.wikipedia.org/wiki/Medical_Internet_of_Things)
- [[concepts/digital-health|eHealth]] — [Wikipedia](https://en.wikipedia.org/wiki/eHealth)
- mHealth — [Wikipedia](https://en.wikipedia.org/wiki/mHealth)
- Cyber-Physical Systems — [Wikipedia](https://en.wikipedia.org/wiki/Cyber-Physical_Systems)
- [[concepts/cloud-computing|Cloud Computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Cloud_Computing)
- Fog Computing — [Wikipedia](https://en.wikipedia.org/wiki/Fog_Computing)
- [[concepts/wallet|Blockchain]] — [Wikipedia](https://en.wikipedia.org/wiki/Blockchain)
- [[concepts/big-data|Big Data]] — [Wikipedia](https://en.wikipedia.org/wiki/Big_Data)
- Security and Privacy — [Wikipedia](https://en.wikipedia.org/wiki/Security_and_Privacy)
- Chronic Diseases — [Wikipedia](https://en.wikipedia.org/wiki/Chronic_Diseases)
- Smart Devices — [Wikipedia](https://en.wikipedia.org/wiki/Smart_Devices)
- Sensors and Actuators — [Wikipedia](https://en.wikipedia.org/wiki/Sensors_and_Actuators)
- Systematic Review — [Wikipedia](https://en.wikipedia.org/wiki/Systematic_Review)
- Global Pandemics — [Wikipedia](https://en.wikipedia.org/wiki/Global_Pandemics)

## Related Entities
- Navod Neranjan Thilakarathne — [Wikipedia](https://en.wikipedia.org/wiki/Navod_Neranjan_Thilakarathne)
- [[entities/mohan-krishna-kagita|Mohan Krishna Kagita]] — [Wikipedia](https://en.wikipedia.org/wiki/Mohan_Krishna_Kagita)
- Dr. Thippa Reddy Gadekallu — [Wikipedia](https://en.wikipedia.org/wiki/Dr._Thippa_Reddy_Gadekallu)
- Charles Sturt University — [Wikipedia](https://en.wikipedia.org/wiki/Charles_Sturt_University)
- University of Colombo — [Wikipedia](https://en.wikipedia.org/wiki/University_of_Colombo)
- Vellore Institute of Technology — [Wikipedia](https://en.wikipedia.org/wiki/Vellore_Institute_of_Technology)
- Faculty of Technology — [Wikipedia](https://en.wikipedia.org/wiki/Faculty_of_Technology)
- School of Computing and Mathematics — [Wikipedia](https://en.wikipedia.org/wiki/School_of_Computing_and_Mathematics)
- School of Information Technology and Engineering — [Wikipedia](https://en.wikipedia.org/wiki/School_of_Information_Technology_and_Engineering)