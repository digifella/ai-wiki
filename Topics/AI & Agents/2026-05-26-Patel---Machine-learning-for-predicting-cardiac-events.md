---
wiki-ingested: true
title: Patel - Machine learning for predicting cardiac events
author: Brijesh Patel, Partho Sengupta
published_date: 2016
source_url: "https://doi.org/10.1080/14779072.2020.1732208"
category: digital-health
credibility: Peer-Reviewed
date: 2026-05-26
source_type: document
wiki-ready: true
migrated_from: library
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

---
preface_schema: '1.0'
title: 'elucidating statistical inferences at the population level using representative sampling. With'
source_type: 'Academic'
publisher: 'Ieee'
publishing_date: '2016'
authors: ['Brijesh Patel', 'Partho Sengupta']
available_at: 'https://doi.org/10.1080/14779072.2020.1732208'
[[concepts/keywords|keywords]]: ['machine [[concepts/learning|learning]]', 'cardiovascular events', 'prediction', '[[concepts/ai-technologies|artificial intelligence]] 1. introduction cardiovascular diseases (cvd) accounted for nearly 900', '000 deaths in 2016 in the us alone [1]', 'and it is well known that the cvd burden will rise because of the aging population. researchers have created prediction models from existing data to identify individuals who are at risk for cardiovascular events using statistical methods. statistical analysis is heavily dependent on data sampling methods', 'their distribution', 'and the types of tests used before elucidating statistical inferences at the population level using representative sampling. with [[entities/contact|contact]] partho sengupta partho.sengupta@hsc.wvu.edu heart and vascular institute']
abstract: 'Introduction: With the increase in the number of patients with cardiovascular diseases, better risk-prediction models for cardiovascular events are needed. Statistical-based risk-prediction models for cardiovascular events (CVEs) are available, but they lack the ability to predict individual-level risk. Machine learning (ML) methods are especially equipped to handle complex data and provide accurate risk-prediction models at the individual level. Areas covered: In this review, the authors summarize the literature comparing the performance of machine learning methods to that of traditional, statistical-based models in predicting CVEs. They provide a brief summary of ML methods and then discuss risk-prediction models for CVEs such as major adverse cardiovascular events, heart failure and arrhythmias. Expert opinion: Current evidence supports the superiority of ML methods over statistical-based models in predicting CVEs

VEs such as major adverse cardiovascular events, heart failure and arrhythmias. Expert opinion: Current evidence supports the superiority of ML methods over statistical-based models in predicting CVEs. Statistical models are applicable at the population level and are subject to over-fitting, while ML methods can provide an individualized risk level for CVEs. Further prospective research on ML-guided treatments to prevent CVEs is needed.'
---
## Page 1

Machine learning for predicting cardiac events: what does the
future hold?
Brijesh Patel, Partho Sengupta
Heart and Vascular Institute, West Virginia University, Morgantown, WV, USA
Abstract
Introduction: With the increase in the number of patients with cardiovascular diseases, better
risk-prediction models for cardiovascular events are needed. Statistical-based risk-prediction
models for cardiovascular events (CVEs) are available, but they lack the ability to predict
individual-level risk. Machine learning (ML) methods are especially equipped to handle complex
data and provide accurate risk-prediction models at the individual level.
Areas covered: In this review, the authors summarize the literature comparing the performance
of machine learning methods to that of traditional, statistical-based models in predicting CVEs.
They provide a brief summary of ML methods and then discuss risk-prediction models for CVEs
such as major adverse cardiovascular events, heart failure and arrhythmias.
Expert opinion: Current evidence supports the superiority of ML methods over statistical-based
models in predicting CVEs. Statistical models are applicable at the population level and are
subject to over-fitting, while ML methods can provide an individualized risk level for CVEs.
Further prospective research on ML-guided treatments to prevent CVEs is needed.
Keywords
Machine Learning; cardiovascular events; prediction; artificial intelligence
1. Introduction
Cardiovascular diseases (CVD) accounted for nearly 900,000 deaths in 2016 in th

nt CVEs is needed.
Keywords
Machine Learning; cardiovascular events; prediction; artificial intelligence
1. Introduction
Cardiovascular diseases (CVD) accounted for nearly 900,000 deaths in 2016 in the US alone
[1], and it is well known that the CVD burden will rise because of the aging population.
Researchers have created prediction models from existing data to identify individuals who
are at risk for cardiovascular events using statistical methods. Statistical analysis is heavily
dependent on data sampling methods, their distribution, and the types of tests used before
elucidating statistical inferences at the population level using representative sampling. With
CONTACT Partho Sengupta Partho.sengupta@hsc.wvu.edu Heart and Vascular Institute, West Virginia University, 1 Medical Center
Drive, Morgantown, WV 26505, USA.
Declaration of interest
P Sengupta is an advisor to HeartSciences, Ultromics Ltd. And Kencor Health and has received stock options from all three entities.
The authors have no other relevant affiliations or financial involvement with any organization or entity with a financial interest in or
financial [[concepts/conflict|conflict]] with the subject matter or materials discussed in the manuscript apart from those disclosed.
Reviewer disclosures
Peer reviewers on this manuscript have no relevant financial or other [[concepts/relationships|relationships]] to disclose.
HHS Public Access
Author manuscript
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.
Published in final edited form as:
Expert Rev Cardiovasc Ther. 2020 February ; 18(2): 77–84. doi:10.1080/14779072.2020.1732208.

> **[Image 1]**: The photograph shows the logo of the Department of Health & Human Services USA. It features a circular emblem with the department's name in blue text surrounding a blue graphic of three stylized human figures. The main subject is the official logo, set against a plain background, and the primary color used throughout is blue.

---

## Page 2

e text surrounding a blue graphic of three stylized human figures. The main subject is the official logo, set against a plain background, and the primary color used throughout is blue.

---

## Page 2

machine learning (ML), it is possible to make individual-level predictions about
cardiovascular diseases and events. ML is a form of artificial intelligence (AI) that uses
complex algorithms and does not require any assumption about the sample or population –
unlike statistical methods. Statistical methods are useful for drawing inferences, while ML
methods are better suited to make predictions [2]. ML can aid clinicians in providing
individualized predictions and tailoring treatment plans for their patients.
In this article, we will succinctly discuss how machine learning works, followed by a review
of how machine learning has been utilized to predict cardiovascular events such as major
adverse cardiovascular events, heart failure and arrhythmias. We will also focus on how
various machine learning algorithms [[concepts/feynmans-three-step-scientific-method|compare]] to existing statistical-based models for
predicting cardiovascular events.
2. Machine learning
The concept of artificial intelligence emerged around 1950 s. One of the seminal papers
published by Alan Turing about “[[concepts/machine-intelligence|Can machines think?]] in 1950 created a platform for future
work for computer scientists [3]. Over the next few decades, the field suffered from ‘AI
winter’ before its revival and tremendous growth in algorithms and technology. There are
many ML algorithms exist, however, a simplest form of ML algorithm we know is logistic
regression. But, its inability to process data as an ML algorithm may limit its utilization on
[[concepts/big-data|big data]] and in complex data analysis. There are three approaches through which the
‘machine’ can be trained: (1) supervised learning, (2) [[concepts/unsupervised-learning|unsupervised learning]], and (3)
[[concepts/reinforcement-learning|reinforcement learning]] [4]. In supervised learning, the input datasets and desired outcomes
are labeled. For example, let us say that we would like the ma

learning, (2) unsupervised learning, and (3)
reinforcement learning [4]. In supervised learning, the input datasets and desired outcomes
are labeled. For example, let us say that we would like the machine to identify cases of heart
failure. First, we train it with known (labeled) variables, such as biomarkers, imaging and
clinical exam findings that are associated with the outcome (heart failure). In unsupervised
learning, data points (biomarkers, imaging and clinical assessment findings) are entered into
the algorithm, and we ask the machine to identify patterns or clusters within the population
without a prespecified outcome. In this case, the algorithm is not asked to identify heart
failure patients; rather, it creates clusters of variables that are closely related to heart failure.
Neither of these approaches involves any [[concepts/feedback|feedback]] mechanism. In reinforcement learning,
the algorithm is challenged to reanalyze the data and optimize the predictive model based on
feedback given for falsely identified cases. For example, crackles could be present in
patients without heart failure. Patients without heart failure can have crackles, and they are
relabeled as non-heart failure cases. The machine ‘relearns’ that the presence of crackles
does not equate to heart failure. Thus, we can say that reinforcement learning is a hybrid
form of supervised and unsupervised learning. Supervised learning is the most common
method used in ML. Figure 1 summarizes the steps taken to create a predictive model using
ML.
Patel and Sengupta
Page 2
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 3

ML. Figure 1 summarizes the steps taken to create a predictive model using
ML.
Patel and Sengupta
Page 2
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 3

3. Predicting cardiovascular events
In the remainder of the paper, we will discuss specific cardiovascular events than can be
predicted by ML and how it has performed in comparison to statistical methods in the recent
literature (Figure 2). We have summarized the information and major points in Table 1.
3.1. Major adverse cardiovascular events and myocardial infarction
Ischemic heart disease accounts for more than 9 million deaths globally, with a downward
trend in mortality in Western countries. This phenomenon is attributed to advanced therapy
and a strong emphasis on [[concepts/preventive-care|prevention]] [5]. It is essential to identify high-risk patients with
readily available and pragmatic predictive models.
Simple EKG-based predictive models using [[concepts/neural-networks|neural networks]] have been used to detect
myocardial infarction with an [[concepts/accuracy|accuracy]] of more than 95% [6]. The availability of electronic
health records and the incorporation of data from various cardiac imaging modalities allow
us to create better predictive models. Prior studies have focused on regression-based models
such as the Framingham risk score (FRS), thrombolysis in myocardial infarction (TIMI) and
the Global Registry of Acute Coronary Events (GRACE) for [[concepts/risk-assessment|risk assessment]] of initial, short-
term and long-term major adverse cardiovascular events (MACE), respectively [7–10].
However, regression-based models do not address the complex interactions between clinical
variables existing in the studies. ML can reveal complex interactions among variables and
provide accurate, predictive models for future outcomes.
To predict outcomes after myocardial infarction, various machine learning algorithms have
been tested for their predictive ability [11]. Using the Hungarian Myocardial Infarction
Registry, researchers studied 47,391 patients who were hospi

farction, various machine learning algorithms have
been tested for their predictive ability [11]. Using the Hungarian Myocardial Infarction
Registry, researchers studied 47,391 patients who were hospitalized for acute myocardial
infarction. They compared the relative performance of decision tree, [[concepts/neural-network|neural network]] and
logistic regression models for short-term (30-day) and long-term (1-year) mortality post-
myocardial infarction. The decision tree, neural network and logistic regression models had
areas under the receiver operating characteristic curves (AUCs) of 0.788, 0.837 and 0.834
for 30-day mortality and 0.754, 0.819 and 0.819 for 1-year mortality, respectively. Although
the neural network was not superior to logistic regression, it was significantly superior to the
decision tree model in this study. Another registry-based (KAMIR: Korea Acute Myocardial
Infarction Registry) ML model was superior to regression-based models in predicting
outcomes up to one year post-myocardial infarction [12]. More than 14,000 acute
myocardial infarction patients were included in the registry. The primary goal was to predict
MACE using 51 variables, such as demographic information, clinical presentation variables
and other variables. For this project, three ML algorithms, a deep neural network (DNN), a
generalized linear model (GLM) and a gradient-boosting model (GBM) were developed, and
the accuracy of traditional regression-based GRACE model was also tested. For the 1-, 6-,
and 12-month follow-ups, the AUCs for predicting MACE were as follows: 0.97, 0.94, and
0.96 for the DNN; 0.96, 0.95, and 0.96 for the GBM; 0.76, 0.67, and 0.72 for the GLM; and
0.75, 0.72 and 0.76 for GRACE, respectively. In fact, the DNN had a > 95% accuracy for the
prediction of MACE, and thus, ML far outperformed the regression-based GRACE model.
Patel and Sengupta
Page 3
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 4

iction of MACE, and thus, ML far outperformed the regression-based GRACE model.
Patel and Sengupta
Page 3
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 4

Nevertheless, in an Israeli study, ML-derived models did not outperform GRACE [13]. The
study included 2,782 patients and 54 variables. The objective of this study was to predict 30-
day mortality after ST-elevation myocardial infarction. Six different ML models were
compared, along with GRACE and TIMI. The GRACE risk score outperformed that of
TIMI, but the ML models were not superior to GRACE. Interestingly, the performance of
the algorithm plateaued with 15 variables, which means that only certain variables are
necessary to predict such outcomes; creatinine level, Killip class on admission, blood
pressure, glucose and age were among the important predictors.
Patients with angina or its equivalent symptoms often undergo stress [[concepts/testing|testing]]. In nuclear
cardiology, ML has shown improved detection of myocardial ischemia [14]. It is possible to
combine clinical variables and stress test data to predict cardiovascular outcomes. Betancur
and colleagues studied 2,619 consecutive patients who underwent [[concepts/exercise|exercise]] or pharmacologic
stress myocardial perfusion imaging (MPI) [15]. The goal was to study the combined value
of MPI and clinical variables to predict 3-year MACE, including nonfatal myocardial
infarction. As expected, the combined ML model predicted with better accuracy than the
imaging ML model (AUC 0.81 vs. 0.78, respectively, p < 0.01). While there is value in
incorporating MPI data, better predicting models are needed to identify short- and long-term
MACE.
Computer computed tomography angiography (CCTA) has been studied to predict long-term
outcomes. CCTA is an invaluable tool in both diagnosing and excluding coronary artery
disease [16]. Data from the CONFIRM registry [17] was used to predict 5-year all-cause
mortality by combining 44 CCTA variables and 25 clinical vari

ol in both diagnosing and excluding coronary artery
disease [16]. Data from the CONFIRM registry [17] was used to predict 5-year all-cause
mortality by combining 44 CCTA variables and 25 clinical variables [18]. The study
included more than 10,000 patients with suspected coronary artery disease and had at least 5
years of follow-up data. They utilized the iterative LogitBoost algorithm, which is an
ensemble boosting algorithm. Compared to FRS (AUC: 0.61) as well other CCTA-based risk
models [segment stenosis score (AUC: 0.64), segment involvement score (AUC: 0.64)], the
ML model combining CCTA and clinical variables (AUC: 0.79) was far better in predicting
5-year all-cause mortality.
With ML, it is possible to predict MACE. A large-scale, registry-based analysis in the
[[entities/uk|United Kingdom]] has shown the superiority of ML-based [[concepts/predictive-modeling|predictive modeling]] [19,20].
Similar analyses using US registries are needed. The accuracy of models heavily relies on
the selected algorithm, clinical variables and heterogeneity of the population. Based on the
available data, ML methods seem to perform better when combining clinical variables with
cardiac imaging modalities.
3.2. Heart failure
Acute heart failure (AHF) leads to more than one million hospital admissions representing 1
to 2% of all hospitalizations. The condition has been associated with morbidity and
mortality as well as financial burden. Nearly 26 million patients worldwide carry a diagnosis
of heart failure [21]. The overall survival rate from heart failure has improved with improved
diagnostic tools and new drug therapies, but 2–17% of individuals admitted with heart
failure die while hospitalized [21,22]. Risk models (GWTG-HF, MAGGIC, ADHERE,
LAPS2, EFFECT, Premier) to identify individuals at high risk for mortality have been
Patel and Sengupta
Page 4
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 5

, EFFECT, Premier) to identify individuals at high risk for mortality have been
Patel and Sengupta
Page 4
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 5

developed for inpatient and outpatient settings [23]. These models require commonly
collected variables in typical heart failure patients. However, the complexity of inter-variable
interactions are not be well defined with statistical methods used to create these predictive
models.
Traditional mortality models for heart failure patients were compared to [[concepts/artificial-intelligence-models|machine learning
models]] in a Korean study [24]. The source of data was hospitalized patients at two Korean
hospitals (test data set) and the KorAHF registry [25] (validation dataset). They analyzed
more than 8,000 patients for testing and validation purposes. When the GWTG-HF and
MAGGIC risk models were compared to ML models to predict in-hospital, 12- and 36-
month mortality in AHF patients, the ML models significantly outperformed the other two
models. The AUCs for in-hospital mortality were 0.88 [deep learning (DL) algorithm] and
0.73 for the ML and GWTG-HF models, respectively. Similarly, the AUCs for 12-month and
36-month mortality were 0.78 and 0.81 (deep learning) and 0.72 and 0.73 (MAGGIC score),
respectively. In fact, the deep learning algorithm also outperformed the random forest,
support vector machine, Bayesian network and logistic regression models for all three time
points.
Machine learning is also able to predict HF better than the Cox-based method in diabetic
patients [26]. Data from ACCORD (Action to Control Cardiovascular Risk in Diabetes) and
ALLHAT (Anti-hypertensive and Lipid-lowering Treatment to Prevent Heart Attack Trial)
were analyzed to compare a random survival forest (RSF) model and the Cox-based method
for HF events (death or hospitalization). The RSF model had a better AUC of 0.77 vs. 0.73
for the Cox-based model. Using the best predictors from the RSF algorithm, the WATCH-
DM model was cr

d method
for HF events (death or hospitalization). The RSF model had a better AUC of 0.77 vs. 0.73
for the Cox-based model. Using the best predictors from the RSF algorithm, the WATCH-
DM model was created. Weight, age, hypertension, creatinine, high-[[concepts/density|density]] lipoprotein level,
QRS duration, myocardial infarction and coronary artery bypass surgery were the prediction
variables in the model. An increase of 1 unit was associated with a 24% increased risk of
HF.
In the most recent analysis of TOPCAT (Treatment of Preserved Cardiac Function Heart
Failure with an Aldosterone Antagonist), Angraal and colleagues demonstrated that ML had
a better predictive ability than logistic regression for HF-related hospitalization or mortality
[27]. Among the studied algorithms (logistic regression, gradient boosting, random forest
and support vector machine), the random forest model had the best predictive ability, with
AUCs of 0.72 and 0.76 for mortality and HF hospitalizations over 3 years of follow-up,
respectively. The analysis also showed that blood urea nitrogen (BUN) and alkaline
phosphatase levels, Kansas City Cardiomyopathy Questionnaire (KCCQ) score and body
mass index were the best predictors for mortality, while hemoglobin and BUN levels, KCCQ
score and previous HF-related admissions were the best predictors for HF hospitalizations
over 3 years of follow-up.
Readmission is another issue burdening our [[concepts/health-sector|healthcare system]]. The Hospital Readmission
Reduction Program was intended to reduce hospital admissions for certain conditions,
including heart failure. Despite its best efforts, readmission rates for heart failure-related
readmission remain approximately 20% nationwide. Several studies have tried to identify
high-risk patients, and a better prediction model is still needed. Mortazavi and colleagues
Patel and Sengupta
Page 5
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 6

tients, and a better prediction model is still needed. Mortazavi and colleagues
Patel and Sengupta
Page 5
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 6

used data from Tele-HF to compare a [[concepts/machine-learning-model|machine learning model]] to a logistic regression model
to predict heart failure-related readmissions [28]. They analyzed the 30-day post-discharge
readmission data from 1,001 patients. The majority of patients had a left ventricle ejection
fraction <40%. The ML-based algorithms had better C-statistics (AUCs) than the logistic
regression model. The random forest algorithm (vs. logistic regression) had the highest C-
statistic of 0.68 (vs. 0.54) for readmission at 30 days.
Additional supporting data to predict 30-day HF readmission risk using ML (vs. traditional
models) comes from a retrospective analysis of 11,510 patients (out of 27,334 admissions)
[29]. Among the logistic regression, gradient boosting, deep unified network (DUN) and
max-out network models, the DUN model was the best prediction model for 30-day risk of
readmission, with an AUC of 0.71 vs. 0.66 for logistic regression. A similar finding was also
observed in another study, in which ML-based algorithms (deep neural network and random
forest models) outperformed logistic regression models for the 30-day risk of readmission
[30].
To predict post-discharge outcomes (readmissions and deaths), enhanced machine learning,
multilayer perceptron (MLP) technique is even superior to traditional ML or regression-
based modeling. In MLP, there is input, hidden and output layers. All input layers directly
connect to nodes in the hidden layer(s), which also receive output from the output layer(s).
This creates a higher level of non-linear transformation for learning. Using the Western
Australia Data Linkage System, Awan and colleagues studied a cohort of 10,757 patients,
among whom 23.6% were readmitted or died within 30 days of the index discharge [31].
They created a multilayer perc

tralia Data Linkage System, Awan and colleagues studied a cohort of 10,757 patients,
among whom 23.6% were readmitted or died within 30 days of the index discharge [31].
They created a multilayer perception (MLP) model, which is a model derived from a neural
network. They also formed models using other ML algorithms used in the other studies
described above. The MLP model has the best AUC (0.63) vs. 0.55 for the LR model or 0.53
for the weighted random forest model. The MLP model had an improved sensitivity (48%)
compared to the other models. This study highlighted intra-ML model variability to predict
post-HF discharge outcomes. It is important to consider various ML algorithms before
creating a final predictive model.
For HF patients, machine learning algorithms are superior to conventional statistical-based
models for predicting HF-related readmissions and mortality in multiple studies. However,
data on model-based [[concepts/decision-making|decision making]] and interventions to avert readmissions or improve
outcomes are not well defined.
3.3. Arrhythmia
The dynamic and transient nature of arrhythmias make them unpredictable in a clinical
setting. Limited epidemiologic data have shown that the worldwide burden of arrhythmia
and sudden cardiac death is rising. This phenomenon is probably due to better detection
methods, an aging population and an increased incidence of risk factors [32]. While there
are tools available to detect arrhythmias as they are occurring, predictive tools for
arrhythmia before the onset are lacking.
Atrial fibrillation (AF) is well known to be independently associated with thromboembolic
events such as stroke [33]. In the SMART (The Stroke and Monitoring for PAF in Real
Patel and Sengupta
Page 6
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 7

ts such as stroke [33]. In the SMART (The Stroke and Monitoring for PAF in Real
Patel and Sengupta
Page 6
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 7

Time) study, AF was detected in 1 out of 9 cryptogenic stroke patients with a 30-day event
monitor [34]. This finding means that AF can be transient and clinically unknown unless
patients are monitored for a long time. However, the goal should be to identify patients who
are likely to develop AF so that they are promptly treated. With this question in mind, a large
study involving 180,000 patients in normal sinus rhythm (SR) was carried out by Attia and
colleagues [35]. The authors developed a convolutional neural network (CNN) using AI-
enabled EKGs to predict AF in patients in sinus rhythm. For this study, both AF and atrial
flutter (AFL) were labeled as AF. More than 450,000 EKGs from 126,526 patients, 64,340
EKGs from 18,116 patients, and 130,802 EKGs from 36,280 patients were used for training,
internal validation and testing, respectively. The model predicted AF from a single EKG
with an area under the curve (AUC) of 0.89(0.86–.88) and 0.90 (0.90–0.91) when the EKGs
with the highest risk score were used. The sensitivity and specificity of the model were 79%
and 79.5%, respectively. Since AF affects many individuals and such data can influence
treatment, validation using an external dataset and optimization of the model is necessary.
EKG signals have been studied to predict sudden cardiac death (SCD). Heart rate variability
(HRV) was studied by Ebrahimzadeh and colleagues using various ML algorithms to predict
SCDs [36]. In this study, the authors analyzed EKGs from 70 patients (35 who had
experienced SCD and 35 healthy subjects) with a sampling rate of 256 Hz. They found that
the two-minute interval before an SCD can be prognostically important to identify high-risk
patients. The multilayer perceptron (MLP) neural network showed superiority to the k-
nearest

hey found that
the two-minute interval before an SCD can be prognostically important to identify high-risk
patients. The multilayer perceptron (MLP) neural network showed superiority to the k-
nearest neighbor (k-NN) algorithm. The MLP model had an 84% SCD prediction rate of vs.
81.5% for the k-NN model 4 minutes before the event. EKG signals and various ratios
calculated from EKG, such as the timing of the T-wave relative to the QT interval, have been
shown to predict SCDs by means of ML-based models with greater than 97% accuracy (the
maximum accuracy for the random forest model was 99.49%) [37].
More than 200,000 in-hospital cardiac arrest events occur in US hospitals [38]. For [[concepts/secondary-prevention|early
detection]], at-risk patients are admitted to hospitals, but accurate prediction is essential to
divert appropriate resources to these patients. Using only blood pressure, heart and
respiratory rates and body temperature, Kwon and colleagues developed deep and machine
learning models to predict in-hospital cardiac arrest [39]. The DL-based early warning
system outperformed the Modified Early Warning Score (MEWS) significantly (AUC of
0.85 vs. 0.60). Random forest and LR models were also better than MEWS with AUCs of
0.78 and 0.61, respectively. Importantly, the DL- and ML-based algorithms reduced the
number of early warnings without compromising sensitivity. In essence, DL and ML models
predicted cardiac arrest significantly better than the currently adopted MEWS. Likewise, ML
has been used to accurately predict out-of-hospital cardiac arrest via data obtained from
emergency calls with medical dispatchers [40].
Heart failure (HF) patients are susceptible to fatal arrhythmias and sudden cardiac deaths
(SCDs). Implantable cardioverter defibrillators (ICDs) are associated with a greater than
50% risk reduction in SCD in selected patients [41]. Patients with reduced systolic function
(≤ 35%) are susceptible to fatal ventricular arrhythmias and can benefit from an ICD. A
study was designe

50% risk reduction in SCD in selected patients [41]. Patients with reduced systolic function
(≤ 35%) are susceptible to fatal ventricular arrhythmias and can benefit from an ICD. A
study was designed to create a predictive model based on existing data from a retrospective,
multicenter registry of Chinese patients with HF [42]. The primary goal of this study is to
Patel and Sengupta
Page 7
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 8

predict all-cause sudden cardiac deaths. Various ML algorithms and Cox proportional
hazards regression models will be utilized to create a predictive model for SCD in HF
patients with low systolic function.
Hypertrophic cardiomyopathy patients are at increased risk for sudden cardiac death. An
ML-based model (HCM-VAr-Risk) was created to predict ventricular arrhythmias in
hypertrophic cardiomyopathy patients [43]. The goal was to detect at least one episode of
sustained ventricular tachycardia or fibrillation. The baseline logistic regression model had
an AUC of 0.80, and a 0.80 [[concepts/type-ii-error|false-negative]] rate, the HCM-VAr-Risk model had an AUC of
0.83 and a 0.27 false-negative rate. Out of 93 clinical variables, twenty-two variables (11
positively and 11 negatively) predicted the risk of arrhythmia. There are currently 10 known
variables in the HCM-Risk-SCD model (AUC ~ 0.69) developed by the American College
of Cardiology and American Heart Association [44], but the HCM-VAr-Risk model
identified 12 new variables that increased the predictive ability; blood pressure before
exercise, early diastolic strain rate, body mass index and statin use were among the new
variables.
Furthermore, ML and DL algorithms have been utilized to optimize automated external
defibrillators (AEDs). These devices notify the operator whether the rhythm is shockable or
not (for ventricular tachycardia or fibrillation). Minimum [[concepts/open-standards|standards]] for arrhythmia analysis
algorithms for AEDs have been published [45]. To further enhan

operator whether the rhythm is shockable or
not (for ventricular tachycardia or fibrillation). Minimum standards for arrhythmia analysis
algorithms for AEDs have been published [45]. To further enhance the accuracy, an ML-
derived algorithm using a convolutional neural network has been proposed. The algorithm
had an accuracy of 99.26%, with a sensitivity of 97.07% and a specificity of 99.44% [46].
Ideally, a sensitivity of 100% is preferable to avoid artificial sudden cardiac arrest, but the
current work promises future development for further optimization.
The application of ML seems very promising for detecting arrhythmias using simple clinical
variables and EKGs. In the era of [[concepts/wearable-devices|wearable devices]] such as those used in the Apple Heart
Study [47] and improved algorithms, the ability to predict arrhythmias before their
occurrence in the near future is very plausible.
4. Bayesian statistics
Regression-based models lack the ability to predict outcomes at an individual level, while
Bayesian statistical-based modeling can overcome this hurdle. The majority of current risk-
predicting models are regression based (or frequentist statistics). Fundamentally, Bayesian
statistics uses prior knowledge, data or belief to construct a [[concepts/probability|probability]] distribution, while
frequentist statistics does not take any prior knowledge of an event into account.
Individualized risk prediction and learning from prior data are similar features in Bayesian
statistics and ML. Risk prediction models using Bayesian statistics have been created for
cardiovascular events [48,49]. Regression-based models can be incorporated in the Bayesian
methods; similarly, Bayesian theory is also utilized in ML algorithms. But, a comparative
study for various ML algorithms that includes Bayesian theory to predict cardiovascular
event is lacking. Future work should focus on comparing various ML modeling that includes
Bayesian machine learning approach.
Patel and Sengupta
Page 8
Expert Rev Cardiovasc Ther. Author manuscr

cular
event is lacking. Future work should focus on comparing various ML modeling that includes
Bayesian machine learning approach.
Patel and Sengupta
Page 8
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 9

5. Conclusion
Machine learning-based algorithms are superior to traditional statistical methods for
predicting cardiovascular events. Certain algorithms, such as [[concepts/deep-neural-networks|deep neural networks]], are
superior to other ML algorithms for certain outcomes. Further studies evaluating the
applicability of such algorithms in the real world are needed
6. Expert opinion
Enormous amounts of data are generated by electronic health records, registries, research
studies, and genomic and biospecimens. The complexity and size of the data poses
challenges for data scientists to process, analyze, interpret and put them into clinical
contexts. Although AI is not a new concept, its popularity has grown tremendously in the
last decade. Machine learning is a part of AI and addresses complex data and ‘trains’ itself
through mathematical models. By 2020, the US healthcare industry is expected to generate a
trillion megabytes of data, with an annual growth of 36–48% [50]. To process even a fraction
of these data, advanced modeling and statistical analysis techniques are necessary. Due to
fast computing power, ML methods allow us to look at the data in unforeseeable ways.
Machine learning-based models have a better predictive ability than statistical-based models.
Nonlinear modeling, complex calculations, and a higher dimension of data analysis are
unique characteristics that set ML apart from statistical analysis. Further analysis should
focus on the [[concepts/adoption|implementation]] of a prediction model for altering clinical outcomes. If an
EKG-based algorithm can detect the future risk of developing atrial fibrillation, then trials
should evaluate whether early treatment with anticoagulation reduces the risk of future
cardiovascular events. Indeed, atrial fibri

etect the future risk of developing atrial fibrillation, then trials
should evaluate whether early treatment with anticoagulation reduces the risk of future
cardiovascular events. Indeed, atrial fibrillation is detected in 10–30% of patients after an
index cryptogenic stroke [51]. Similarly, algorithm-based at-risk detection for HF or
myocardial infarction can possibly alter outcomes and save healthcare costs. Duration of
dual-antiplatelet therapy, identifying ideal candidates for implantable cardioverter
defibrillators or cardiac resynchronization therapy and advanced heart failure treatments are
among several topics and issues that ML can help us to further delineate. The role of ML in
structural heart disease and interventions can be paramount. The application of ML in
genome-based projects has been shown to predict advanced coronary artery calcium, which
is a known risk factor for future cardiovascular events [52]. Studies focusing on
incorporating genomic-level data into existing large datasets are quintessential to predict
cardiovascular events. Future studies focusing on cost-saving strategies using ML algorithms
are also needed as healthcare costs are skyrocketing.
Our ongoing work is focused on the reclassification and clustering of patients for specific
diseases and outcomes using patient similarity analysis. In a patient similarity analysis,
patients are presented as nodes, and they are connected by edges that represent similarities
among the patients. This analysis reveals a heterogeneous relationship among the patients
and represents the data in network and graphical format. In a recent publication, we showed
the two main pathways of how patients with severe aortic stenosis progress and how they
respond to treatment after aortic valve replacement using patient similarities [53]. We are
working on a study to demonstrate how patients with heart failure are clustered using similar
Patel and Sengupta
Page 9
Expert Rev Cardiovasc Ther. Author manuscript; a

tient similarities [53]. We are
working on a study to demonstrate how patients with heart failure are clustered using similar
Patel and Sengupta
Page 9
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 10

clinical and echocardiographic data. The patient clusters were divided into four regions
based on the similarities, and we were able to demonstrate how each region predicted
MACE. For example, patients with increased filling pressure and increased left atrial volume
index will have an increased risk of cardiovascular events, and then, the patients can be
treated to have these [[concepts/parameters|parameters]] within the normal range. Thus, the application of AI can aid
the analysis of data in unique ways that can aid clinicians in identifying and predicting
individual-level risk.
One of major caveat in understanding of ML based prediction model is the ‘black box’. Lack
of clear understanding how information journeys from input variables to outcomes
predictors create uncertain trusts in the implantation of ML based decision making.
Improper and undertested models can create a huge [[concepts/population-health|public health]] risk. Creating testing and
validation datasets requires utmost accuracy and confidence as much as implementing the
model prospectively. An applicability of data interpretation is not as widely common as
statistical based research among clinicians, and therefore, the systemwide [[concepts/integration|integration]] of
predictive models are not practical in every hospital or clinic at present time. AI-based
modeling is largely driven by data scientists. Mastering the complexity of programming,
[[concepts/data-management|data management]], and application of appropriate algorithms can be a daunting task for
clinicians. We therefore recommend establishing a team approach in which clinicians,
statisticians and data scientists are included. Although AI is widely popular among
commercialized industries, it is still lagging in the medical field. We strongly believe that AI
can transform the medical industry and d

a scientists are included. Although AI is widely popular among
commercialized industries, it is still lagging in the medical field. We strongly believe that AI
can transform the medical industry and deliver precision medicine.
Funding
This paper was not funded.
References
Papers of special note have been highlighted as either of interest (•) or of considerable
interest (••) to readers.
1. Global Burden of Cardiovascular Diseases C, Roth GA, Johnson CO, et al. The burden of
cardiovascular diseases among US States, 1990–2016. JAMA Cardiol. 2018 5 1;3(5):375–389.
[PubMed: 29641820]
2. Bzdok D, Altman N, Krzywinski M. Statistics versus machine learning. Nat Methods. 2018 4 03
online;15:233. [PubMed: 30100822]
3. TURING AMI. Computing machinery and intelligence. Mind. 1950;LIX(236):433–460.• This is
one of the seminal papers that introduced the concept of machine learning. Many papers in
computer [[concepts/science|science]] were published on ML after this article.
4. Simeone O A very brief introduction to machine learning with [[concepts/software|applications]] to [[concepts/communication|communication]]
systems. IEEE Trans Cognit Commun Networking. 2018;4(4):648–664.
5. Nowbar AN, Gitto M, Howard JP, et al. Mortality from ischemic heart disease. Circulation
Cardiovasc Qual Outcomes. 2019;12(6):e005375.
6. Acharya UR, Fujita H, Oh SL, et al. Application of deep convolutional neural network for
automated detection of myocardial infarction using ECG signals. Inf Sci 2017 11 01;415–416:190–
198.
7. D’Agostino RB, Vasan RS, Pencina MJ, et al. General cardiovascular risk profile for use in primary
care. Circulation. 2008;117(6):743–753. [PubMed: 18212285]
Patel and Sengupta
Page 10
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 11

r use in primary
care. Circulation. 2008;117(6):743–753. [PubMed: 18212285]
Patel and Sengupta
Page 10
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 11

8. Antman EM, Cohen M, Bernink PJLM, et al. The TIMI risk score for unstable angina/non–ST
elevation MIA method for prognostication and therapeutic decision making. JAMA.
2000;284(7):835–842. [PubMed: 10938172]
9. Fox KAA, Dabbous OH, Goldberg RJ, et al. Prediction of risk of death and myocardial infarction in
the six months after presentation with acute coronary syndrome: prospective multinational
observational study (GRACE). BMJ. 2006;333(7578):1091. [PubMed: 17032691]
10. Huang W, FitzGerald G, Goldberg RJ, et al. Performance of the GRACE risk score 2.0 simplified
algorithm for predicting 1-year death after hospitalization for an acute coronary syndrome in a
contemporary multiracial cohort. Am J Cardiol. 2016;118(8):1105–1110. [PubMed: 27561191]
11. Piros P, Ferenci T, Fleiner R, et al. Comparing machine learning and regression models for
mortality prediction based on the hungarian myocardial infarction registry. Knowledge-Based Syst.
2019 9 01;179:1–7.
12. Kim YJ, Saqlian M, Lee JY. Deep learning–based prediction model of occurrences of major
adverse cardiac events during 1-year follow-up after hospital discharge in patients with AMI using
knowledge mining. Pers Ubiquitous Comput. 2019 7 04.•• In this study, the authors studied various
ML algorithms to compare them with GRACE score, to predict long-term outcomes after acute
myocardial infarction. They were able to show the ML algorithms outformed GRACE score in
predicting cardivascular events.
13. Shouval R, Hadanny A, Shlomo N, et al. Machine learning for prediction of 30-day mortality after
ST elevation myocardial infraction: an acute coronary syndrome israeli survey data mining study.
Int J Cardiol. 2017;246:7–13. [PubMed: 28867023]
14. Juarez-Orozco LE, Martinez-Manzanera O, Storti AE, et al. M

n myocardial infraction: an acute coronary syndrome israeli survey data mining study.
Int J Cardiol. 2017;246:7–13. [PubMed: 28867023]
14. Juarez-Orozco LE, Martinez-Manzanera O, Storti AE, et al. Machine learning in the evaluation of
myocardial ischemia through nuclear cardiology. Curr Cardiovasc Imaging Rep. 2019 Feb
09;12(2):5.
15. Betancur J, Otaki Y, Motwani M, et al. Prognostic value of combined clinical and myocardial
perfusion imaging data using machine learning. JACC Cardiovasc Imaging. 2018;11(7):1000–
1009. [PubMed: 29055639]
16. Budoff MJ, Dowe D, Jollis JG, et al. Diagnostic performance of 64-multi-detector row coronary
computed tomographic angiography for evaluation of coronary artery stenosis in individuals
without known coronary artery disease: results from the prospective multicenter ACCURACY
(Assessment by Coronary Computed Tomographic Angiography of Individuals Undergoing
Invasive Coronary Angiography) trial. J Am Coll Cardiol. 2008 11 18;52(21):1724–1732.
[PubMed: 19007693]
17. Min JK, Dunning A, Lin FY, et al. Rationale and design of the CONFIRM (CORONARY CT
angiography evaluation for clinical outcomes: an international multicenter) registry. J Cardiovasc
Comput Tomogr. 2011 Mar-Apr;5(2):84–92. [PubMed: 21477786]
18. Motwani M, Dey D, Berman DS, et al. Machine learning for prediction of all-cause mortality in
patients with suspected coronary artery disease: a 5-year multicentre prospective registry analysis.
Eur Heart J. 2016;38(7):500–507.
19. Alaa AM, Bolton T, Di Angelantonio E, et al. Cardiovascular disease risk prediction using
automated machine learning: a prospective study of 423,604 UK biobank participants. Plos One.
2019;14(5):e0213653. [PubMed: 31091238]
20. Weng SF, Reps J, Kai J, et al. Can machine-learning improve cardiovascular risk prediction using
routine clinical data? Plos One. 2017;12(4):e0174944. [PubMed: 28376093]
21. Ponikowski P, Anker SD, AlHabib KF, et al. Heart failure: preventing disease and death
worldwide.

ar risk prediction using
routine clinical data? Plos One. 2017;12(4):e0174944. [PubMed: 28376093]
21. Ponikowski P, Anker SD, AlHabib KF, et al. Heart failure: preventing disease and death
worldwide. ESC Heart Fail. 2014;1(1):4–25. [PubMed: 28834669]
22. Ambrosy AP, Fonarow GC, Butler J, et al. The global health and economic burden of
hospitalizations for heart failure: lessons learned from hospitalized heart failure registries. J Am
Coll Cardiol. 2014 4 01;63(12):1123–1133. [PubMed: 24491689]
23. Lagu T, Pekow PS, Shieh M-S, et al. Validation and comparison of seven mortality prediction
models for hospitalized patients with acute decompensated heart failure. Circulation.
2016;9(8):e002912. [PubMed: 27514749]
24. Kwon J-M, Kim K-H, Jeon K-H, et al. Artificial intelligence algorithm for predicting mortality of
patients with acute heart failure. Plos One. 2019;14(7):e0219302. [PubMed: 31283783]
Patel and Sengupta
Page 11
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 12

s with acute heart failure. Plos One. 2019;14(7):e0219302. [PubMed: 31283783]
Patel and Sengupta
Page 11
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 12

25. Lee SE, Cho H-J, Lee H-Y, et al. A multicentre cohort study of acute heart failure syndromes in
Korea: rationale, design, and interim observations of the Korean Acute Heart Failure (KorAHF)
registry. Eur J Heart Fail 2014;16(6):700–708. [PubMed: 24797348]
26. Segar MW, Vaduganathan M, Patel KV, et al. machine learning to predict the risk of incident heart
failure hospitalization among patients with diabetes: the WATCH-DM risk score. Diabetes Care.
2019 9 13;42:2298–2306. [PubMed: 31519694] •• In this study, the authors studied two large-
study databases. One database was used for testing database and the other to validate. They created
the WATCH-DM score with clinical variables to predict the risk of heart failure.
27. Angraal S, Mortazavi BJ, Gupta A, et al. Machine learning prediction of mortality and
hospitalization in heart failure with preserved ejection fraction. JACC Heart Fail. 2019 10
5;8(1):12–21. [PubMed: 31606361]
28. Mortazavi BJ, Downing NS, Bucholz EM, et al. Analysis of machine learning techniques for heart
failure readmissions. Circ Cardiovasc Qual Outcomes. 2016;9(6):629–640. [PubMed: 28263938]
29. Golas SB, Shibahara T, Agboola S, et al. A machine learning model to predict the risk of 30-day
readmissions in patients with heart failure: a retrospective analysis of [[concepts/electronic-health-records|electronic medical records]]
data. BMC Med Inform Decis Mak. 2018 6 22;18(1):44. [PubMed: 29929496]
30. Futoma J, Morris J, Lucas J. A comparison of models for predicting early hospital readmissions. J
Biomed Inform. 2015 Aug;56:229–238.
31. Awan SE, Bennamoun M, Sohel F, et al. Machine learning-based prediction of heart failure
readmission or death: implications of choosing the right model and the right metrics. ESC Heart
Fail. 2019 4;6(2):428–435. [PubMed: 30810291]
32.

Machine learning-based prediction of heart failure
readmission or death: implications of choosing the right model and the right metrics. ESC Heart
Fail. 2019 4;6(2):428–435. [PubMed: 30810291]
32. Aro AL, Chugh SS, ESC CardioMed. [[concepts/epidemiology|Epidemiology]] and global burden of arrhythmias. Oxford,
UK: Oxford University Press; 2018.
33. Wolf PA, Abbott RD, Kannel WB. Atrial fibrillation as an independent risk factor for stroke: the
Framingham study. Stroke. 1991;22(8):983–988. [PubMed: 1866765]
34. Flint AC, Banki NM, Ren X, et al. Detection of paroxysmal atrial fibrillation by 30-day event
monitoring in cryptogenic ischemic stroke. Stroke. 2012;43(10):2788–2790. [PubMed: 22871679]
35. Attia ZI, Noseworthy PA, Lopez-Jimenez F, et al. An artificial intelligence-enabled ECG algorithm
for the identification of patients with atrial fibrillation during sinus rhythm: a retrospective analysis
of outcome prediction. Lancet. 2019 9 7;394(10201):861–867. [PubMed: 31378392] •• This paper
used EKG as tool to predict one of the most common arrhythmia, atrial fibrillation. This project
created an opportunity many researchers to use EKG as a tool to predict various cardiovascular
events.
36. Ebrahimzadeh E, Pooyan M, Bijar A. A Novel Approach to Predict Sudden Cardiac Death (SCD)
Using Nonlinear and Time-Frequency Analyses from HRV Signals. Plos One. 2014;9(2):e81896.
[PubMed: 24504331]
37. Lai D, Zhang Y, Zhang X, et al. An automated strategy for early risk identification of sudden
cardiac death by using machine learning approach on measurable arrhythmic risk markers. IEEE
Access. 2019 7 01;1:94701–94716.
38. Merchant RM, Yang L, Becker LB, et al. Incidence of treated cardiac arrest in hospitalized patients
in the [[entities/united-states|United States]]. Crit Care Med. 2011 11;39(11):2401–2406. [PubMed: 21705896]
39. Kwon J, Lee Y, Lee Y, et al. An algorithm based on deep learning for predicting in-hospital cardiac
arrest. J Am Heart Assoc. 2018;7(13):e008678. [PubMed: 29945914]
40. Blomberg SN, Folke F

05896]
39. Kwon J, Lee Y, Lee Y, et al. An algorithm based on deep learning for predicting in-hospital cardiac
arrest. J Am Heart Assoc. 2018;7(13):e008678. [PubMed: 29945914]
40. Blomberg SN, Folke F, Ersbøll AK, et al. Machine learning as a supportive tool to recognize
cardiac arrest in emergency calls. Resuscitation. 2019;138:322–329. [PubMed: 30664917]
41. Yousuf O, Chrispin J, Tomaselli GF, et al. Clinical management and prevention of sudden cardiac
death. Circ Res. 2015 6 5;116(12):2020–2040. [PubMed: 26044254]
42. Meng F, Zhang Z, Hou X, et al. Machine learning for prediction of sudden cardiac death in heart
failure patients with low left ventricular ejection fraction: study protocol for a retroprospective
multicentre registry in China. BMJ Open. 2019 5 16;9(5):e023724.
43. Bhattacharya M, Lu D-Y, Kudchadkar SM, et al. Identifying ventricular arrhythmias and their
predictors by applying machine learning methods to electronic health records in patients with
hypertrophic cardiomyopathy (HCM-VAr-risk model). Am J Cardiol. 2019;123(10):1681–1689.
[PubMed: 30952382]
Patel and Sengupta
Page 12
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 13

M-VAr-risk model). Am J Cardiol. 2019;123(10):1681–1689.
[PubMed: 30952382]
Patel and Sengupta
Page 12
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 13

44. O’Mahony C, Jichi F, Pavlou M, et al. A novel clinical risk prediction model for sudden cardiac
death in hypertrophic cardiomyopathy (HCM Risk-SCD). Eur Heart J. 2013;35(30):2010–2020.
[PubMed: 24126876]
45. Kerber RE, Becker LB, Bourland JD, et al. Automatic external defibrillators for public access
defibrillation: recommendations for specifying and reporting arrhythmia analysis algorithm
performance, incorporating new waveforms, and enhancing safety. Circulation. 1997;95(6):1677–
1682. [PubMed: 9118556]
46. Nguyen MT, Nguyen BV, Kim K. Deep feature learning for sudden cardiac arrest detection in
automated external defibrillators. Sci Rep. 2018 11 21;8(1):17196. [PubMed: 30464177]
47. Perez MV, Mahaffey KW, Hedlin H, et al. Large-scale assessment of a smartwatch to identify atrial
fibrillation. N Engl J Med. 2019 11 14;381(20):1909–1917. [PubMed: 31722151]
48. Liu YM, Chen SL, Yen AM, et al. Individual risk prediction model for incident cardiovascular
disease: a Bayesian [[concepts/clinical-reasoning|clinical reasoning]] approach. Int J Cardiol. 2013 9 1;167(5):2008–2012.
[PubMed: 22658349]
49. Marshall G, Shroyer AL, Grover FL, et al. Bayesian-logit model for risk assessment in coronary
artery bypass grafting. Ann Thorac Surg. 1994 6;57(6):1492–9;discussion 1500. [PubMed:
8010792] • In statistal realm, Bayesian theory can provide individual risk assessment, but further
research is needed comparing ML models to Baysian statistics.
50. Thompson ME, Dulin MF. Leveraging data analytics to advance personal, population, and system
health: moving beyond merely capturing services provided. N C Med J. 2019 July–
Aug;80(4):214–218.
51. Bridge F, Thijs V. How and when to screen for atrial fibrillation after stroke: insights from
insertable cardiac monitoring devices. J Stroke. 2016 5;18

C Med J. 2019 July–
Aug;80(4):214–218.
51. Bridge F, Thijs V. How and when to screen for atrial fibrillation after stroke: insights from
insertable cardiac monitoring devices. J Stroke. 2016 5;18(2):121–128. [PubMed: 27283276]
52. Oguz C, Sen SK, Davis AR, et al. Genotype-driven identification of a molecular network predictive
of advanced coronary calcium in ClinSeq® and Framingham heart study cohorts. BMC Syst Biol.
2017;11(1):99. [PubMed: 29073909]
53. Casaclang-Verzosa G, Shrestha S, Khalil MJ, et al. Network tomography for understanding
phenotypic presentations in aortic stenosis. JACC Cardiovasc Imaging. 2019;12(2):236–248.
[PubMed: 30732719]
Patel and Sengupta
Page 13
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 14

Article Highlights
•
Machine learning (ML), a branch of artificial intelligence, is widely utilized
in cardiovascular medicine
•
Thus far, predictive models for cardiovascular events are based on statistical-
based methods
•
Evidence favors ML as a better predictive tool for cardiovascular events
•
Future research showing applications of ML to prevent cardiovascular events
is needed
Patel and Sengupta
Page 14
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

---

## Page 15

Figure 1.
Generalized diagram of the steps in machine learning used to create models.
Page 15
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

> **[Image 1]**: The photograph displays a flowchart with three blue sections labeled Raw Data, Machine Learning, and Model, each containing bullet points about their components. The main subject is the process of applying machine learning to healthcare data, moving from raw inputs to model outputs. The setting is a diagram showing a sequential [[concepts/workflow|workflow]] with arrows connecting the stages. The colors are blue rectangular boxes with white text throughout.

---

## Page 16

aw inputs to model outputs. The setting is a diagram showing a sequential workflow with arrows connecting the stages. The colors are blue rectangular boxes with white text throughout.

---

## Page 16

Figure 2.
Central theme of literature reviewed in this review article.
Page 16
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

> **[Image 1]**: This flowchart explores whether cardiovascular events can be predicted, starting with data sources like clinical trials and electronic records. It compares statistical methods and machine learning approaches for predicting these events, showing both paths lead to the same prediction goal. The diagram uses purple for the main question and conclusion, blue for data sources, orange for statistical methods, green for machine learning, and gray for the prediction outcome. Current evidence highlighted at the bottom states machine learning outperforms statistical models for this prediction task.

---

## Page 17

Page 17
Table 1.
Summary for predicting cardiovascular events.
Ref.
Major Adverse Cardiovascular Events (MACE) and Myocardial Infarction (MI)
1
[11,12]
Machine learning (ML) is more accurate in predicting short-,intermediate and long-term mortality after index the myocardial infarction event
2
[12]
In comparison to Global Registry of Acute Coronary Events (known as GRACE) risk score, ML based models are better predictors of MACE
3
[15]
The combination of clinical, demographics and nuclear imaging findings have better predictive ability for MACE using ML algorithms.
4
[18]
Coronary computed tomography angiography plus clinical variables have better predictive values with ML algorithms than Framingham Risk Score for all-cause mortality.
Heart Failure
1
[25]
Traditional statistics-based models such as Get With the Guideline-Heart Failure and MAGGIC risk scores were outperformed by ML models for short- and long-term mortality in
acute heart failure patients.
2
[26]
Using ML models, a simple risk s

s Get With the Guideline-Heart Failure and MAGGIC risk scores were outperformed by ML models for short- and long-term mortality in
acute heart failure patients.
2
[26]
Using ML models, a simple risk score in diabetic patients, WATCH-DM was created. This model requires patient’s age, presence of hypertension, creatinine and high-density
lipoprotein levels, QRS duration, history of MI and coronary artery bypass surgery. A unit increase indicated 24% increased risk of heart failure.
3
[27]
The risks of mortality and hospitalization in diastolic heart failure patients were better predicted by ML algorithms. Kansas City Cardiomyopathy Questionnaire (KCCQ) score and
body mass index were the best predictors of mortality, while BUN and hemoglobin levels, KCCQ score and previous heart failure admissions were the best [[concepts/indicators|indicators]] for
rehospitalization.
4
[28–30]
The ML algorithms can predict 30-risk of readmissions and post-discharge outcomes with decent accuracy.
Arrhythmia
1
[35]
The future prediction of developing atrial fibrillation is made possible by ML models.
2
[36]
ML can predict the risk of sudden cardiac death (SCD) from heart rate variability.
3
[37]
In-hospital risk of cardiac arrest was developed using ML from patients’ body temperature, heart and respiratory rate, which outperformed Modified Early Warning Score (MEWS)
4
[43]
The risk of SCD in hypertrophic cardiomyopathy patients can be more accurately predicted by ML models.
5
[45,46]
A shockable rhythm detection on automated external defibrillators improvisation has been proposed with ML derived algorithm.
Expert Rev Cardiovasc Ther. Author manuscript; available in PMC 2021 March 16.

## Related Concepts
- [[concepts/machine-learning|machine learning]] — [Wikipedia](https://en.wikipedia.org/wiki/machine_learning)
- [[concepts/cardiovascular-events|cardiovascular events]] — [Wikipedia](https://en.wikipedia.org/wiki/cardiovascular_events)
- [[concepts/user-attention-prediction|prediction]] — [Wikipedia](https://en.wikipedia.org/wiki/prediction)
- [[concepts/trusted-frameworks|artificial intelligence]] — [Wikipedia](https://en.wikipedia.org/wiki/artificial_intelligence)
- [[concepts/type-i-error|statistical inference]] — [Wikipedia](https://en.wikipedia.org/wiki/statistical_inference)
- [[concepts/representative-sampling|representative sampling]] — [Wikipedia](https://en.wikipedia.org/wiki/representative_sampling)
- [[concepts/population-level-analysis|population level analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/population_level_analysis)
- [[concepts/cardiovascular-disease-burden|cardiovascular disease burden]] — [Wikipedia](https://en.wikipedia.org/wiki/cardiovascular_disease_burden)
- risk prediction — [Wikipedia](https://en.wikipedia.org/wiki/risk_prediction)
- individual-level risk — [Wikipedia](https://en.wikipedia.org/wiki/individual-level_risk)
- [[concepts/population-level-analysis|population-level analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/population-level_analysis)
- [[concepts/cardiovascular-events|major adverse cardiovascular events]] — [Wikipedia](https://en.wikipedia.org/wiki/major_adverse_cardiovascular_events)
- heart failure — [Wikipedia](https://en.wikipedia.org/wiki/heart_failure)
- arrhythmias — [Wikipedia](https://en.wikipedia.org/wiki/arrhythmias)
- over-fitting — [Wikipedia](https://en.wikipedia.org/wiki/over-fitting)
- complex data handling — [Wikipedia](https://en.wikipedia.org/wiki/complex_data_handling)

## Related Entities
- [[entities/brijesh-patel|Brijesh Patel]] — [Wikipedia](https://en.wikipedia.org/wiki/Brijesh_Patel)
- [[entities/partho-sengupta|Partho Sengupta]] — [Wikipedia](https://en.wikipedia.org/wiki/Partho_Sengupta)
- [[entities/ieee|Ieee]] — [Wikipedia](https://en.wikipedia.org/wiki/Ieee)
- Heart and Vascular Institute — [Wikipedia](https://en.wikipedia.org/wiki/Heart_and_Vascular_Institute)
- West Virginia University — [Wikipedia](https://en.wikipedia.org/wiki/West_Virginia_University)