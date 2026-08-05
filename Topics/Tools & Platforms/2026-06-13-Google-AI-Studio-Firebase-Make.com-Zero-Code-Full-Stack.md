---
wiki-ingested: true
title: "Google AI Studio, Firebase & Make.com: Zero-Code Full-Stack AI App Creation"
date: 2026-06-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: app-builders-no-code-tools
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-06-13 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

## Google AI Studio, Firebase & Make.com: Zero-Code Full-Stack AI App Creation
**Clip title:** [[concepts/user-accounts|Google AI Studio]] Just Unlocked Firebase 🤯 (Login + Database in Seconds)
**Author / channel:** Your [[concepts/advanced-ai-processing|AI Workflow]]
**URL:** https://www.youtube.com/watch?v=XUuVnH6gSa8

### Summary
This video provides a comprehensive guide on building powerful, full-stack [[concepts/ai-powered-applications|AI applications]] using [[concepts/user-accounts|Google AI Studio]], leveraging its integration with Firebase and [[concepts/makecom|Make.com]]. The core premise is that users can create sophisticated, reliable tools with real [[concepts/backend-features|backend features]] and AI capabilities, requiring minimal to [[concepts/concept-of-nothingness|zero]] [[concepts/coding|coding]], saving significant time and subscription costs for various [[concepts/ai-platforms|AI services]]. The presenter showcases two primary examples: a "[[entities/youtube|YouTube]] Learner" app that transcribes and summarizes YouTube videos, storing them in a personalized history, and a "Notification Hub" which centralizes emails, calendar events, and competitor YouTube videos into a single, filterable interface.

The [[concepts/tutorial|tutorial]] elaborates on creating the "YouTube Learner" app step-by-step. It begins by demonstrating how to use a simple text prompt within Google AI Studio to generate the app's [[concepts/frontend-development|front-end]] UI for video embedding, insights, and transcription. Next, it integrates Google Firebase to handle user [[concepts/authentication|authentication]] (email/password login/registration) and serve as a [[concepts/secure|secure]] database (Firestore) to store user-specific video history. Crucially, the video shows how to prompt AI Studio to write the necessary code for Firebase integration and update [[concepts/security|security]] rules, allowing users to manage their own data securely.

To infuse the AI capabilities, the video guides viewers through setting up Make.com [[concepts/scenarios|scenarios]]. These [[concepts/scenarios|scenarios]] utilize custom webhooks to receive YouTube links from the AI Studio app, process them with [[concepts/google-ai|Google Gemini]] AI (using [[concepts/api-keys|API keys]] generated in AI Studio) to generate summaries and detailed transcripts, and then send the processed data back to the app. The "Notification Hub" app is then introduced as an extension, demonstrating how to integrate multiple data sources ([[entities/gmail|Gmail]], [[entities/google-calendar|Google Calendar]], YouTube) by creating specific sub-collections in Firestore and building corresponding Make.com [[concepts/automations|automations]] to monitor and fetch data from these platforms. This process also involves connecting [[entities/google-cloud|Google Cloud]] to Make.com and Firebase for [[concepts/secure|secure]] API access and data transfer. Finally, the completed [[concepts/apps|apps]] are deployed to [[entities/google-cloud|Google Cloud]] Run, making them accessible via a public URL.

In conclusion, the video effectively illustrates that Google AI Studio, when combined with Firebase for backend services and Make.com for automation and [[concepts/ai-integration|AI integration]], transforms into an incredibly versatile and accessible platform. It empowers users to build complex, personalized, and fully functional [[concepts/ai-powered-applications|AI applications]] quickly and efficiently, largely through natural [[concepts/natural-language-prompting|language prompts]], thereby democratizing [[concepts/app-creation|app development]] for both technical and non-technical users. The presenter emphasizes the cost-effectiveness and ease of this no-code/low-code approach, presenting it as a powerful alternative to traditional development methods and costly third-party AI tool subscriptions.

### Video Description & Links
#### Description
*👩🏼‍💻 Want to build *your* custom app? Book a 1:1 coaching [[concepts/session|session]] with me:*
→ https://calendly.com/antonina-youraiworkflow

*⚙️ Get 1,000 FREE Make.com Credits:*
→ https://www.make.com/en/register?pc=youraiworkflow

*👉 For Services/Collaborations:*
→ [[entities/email|Email]]: antonina@youraiworkflow.co
→ WhatsApp: https://wa.me/34632407883

🤔 Are you a video editor? Email me to siteskulpt@gmail.com ( ❗Include [[concepts/pricing|Pricing]] and Works to receive a response)

*▶️ How to Set Up a Public [[entities/storage|Storage]] Bucket (for images/icons):*
→ https://www.youtube.com/watch?v=k_tykH-vg8s  (Timestamp 3:32)

-----

Google AI Studio has just been completely transformed. You can now build fully reliable, full-stack apps with real backend features—and it's completely free.

In this video, I show you how to build two unbelievable apps from scratch: a YouTube summarizer with a saveable history and an "all-in-one" personal notification hub that pulls in emails, calendar events, and new videos from your competitors. You'll learn the complete workflow from front-end to database, saving hundreds on [[concepts/ai-subscriptions|AI subscriptions]].

✨ **WHAT YOU'LL LEARN IN THIS VIDEO: ✨**

**App 1: AI YouTube Summarizer**
🤖 **Build the Front-End:** Prompt a multi-page app in Google AI Studio.
🔐 **Add Authentication:** Integrate Firebase to add secure user sign-in and registration.
🗃️ **Create a Database:** Set up a Firestore database to store user info and video history.
🔗 **Connect the Back-End:** Use Make.com to create AI features (summary & [[concepts/text-transcript|transcript]]) and save them to the user's personal history.

**App 2: All-in-One Notification Hub**
🔔 **Prompt the UI:** Design a custom dashboard to display notifications from multiple sources.
⚙️ **Build a Multi-Source Backend:** Set up Make.com automations to "watch" for new Gmails, Google Calendar events, and new YouTube videos.
🔄 **Link Firestore:** Automatically save all incoming notifications to your Firestore database in real-time.
📤 **(Optional) Add Email Sending:** Build a feature to reply to emails directly from your new app.

-----

⏰ **TIMESTAMPS**

00:00 - Intro: The 2 Full-Stack Apps We're Building

**App 1: AI YouTube Summarizer Tool**
01:02 - **01:** Build the Front-End in Google AI Studio (The Prompt)
02:23 - **02:** Setting Up Firebase (Create Project, App & Get SDK Code)
03:03 - **03:** Build Firebase Authentication (Email & Password)
03:33 - **04:** Add Login & Registration to AI Studio (The Prompt)
04:25 - **05:** Building the Firestore Database (Collections & Sub-collections)
05:58 - **06:** Setting Up Secure Firebase Security Rules with AI
06:40 - **07:** Link AI Studio to Firestore DB (Save User History)
08:06 - **08:** Build AI Features (Summary & Transcript) in Make.com

**App 2: All-in-One Notification Hub**
13:27 - **01:** Prompting the Notification Hub Front-End
15:13 - **02:** Set Up Firebase & Firestore Database Structure
16:00 - **03:** Setting Up Notification Scenarios in Make.com
17:05 - --- How to Authenticate Google Cloud Firestore in Make.com
22:13 - **04:** Link Firestore to AI Studio to Display Notifications
24:55 - **05:** (Optional) Adding Email Sending from the App
25:27 - Outro & My 1:1 Coaching

\#GoogleAIStudio \#Firebase \#MakeCom \#NoCode \#FullStackApp \#AIAppBuilder \#GeminiAI \#AIAutomation \#BuildWithAI \#TechTutorial

#### Tags
`ai`, `business`, `automation`

#### URLs
- https://calendly.com/antonina-youraiworkflow
- https://www.make.com/en/register?pc=youraiworkflow
- https://wa.me/34632407883
- https://www.youtube.com/watch?v=k_tykH-vg8s

## Related Concepts
- [[concepts/zero-code-full-stack-ai-app-creation|Google AI Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_AI_Studio)
- [[concepts/makecom|Make.com]] — [Wikipedia](https://en.wikipedia.org/wiki/Make.com)
- [[concepts/zero-code-full-stack-ai-app-creation|Zero-Code Full-Stack AI App Creation]] — [Wikipedia](https://en.wikipedia.org/wiki/Zero-Code_Full-Stack_AI_App_Creation)
- [[concepts/backend-features|Backend Features]] — [Wikipedia](https://en.wikipedia.org/wiki/Backend_Features)
- [[concepts/no-code-ai-development|Zero-Code Development]] — [Wikipedia](https://en.wikipedia.org/wiki/Zero-Code_Development)
- [[concepts/full-stack-applications|Full-Stack AI Applications]] — [Wikipedia](https://en.wikipedia.org/wiki/Full-Stack_AI_Applications)
- Firebase Integration — [Wikipedia](https://en.wikipedia.org/wiki/Firebase_Integration)
- [[concepts/user-authentication|User Authentication]] — [Wikipedia](https://en.wikipedia.org/wiki/User_Authentication)
- [[concepts/firebase-firestore|Firestore Database]] — [Wikipedia](https://en.wikipedia.org/wiki/Firestore_Database)
- Make.com Automation — [Wikipedia](https://en.wikipedia.org/wiki/Make.com_Automation)
- Custom Webhooks — [Wikipedia](https://en.wikipedia.org/wiki/Custom_Webhooks)
- [[concepts/gemini-api|Gemini API]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_API)
- [[concepts/prompt-engineering|Natural Language Prompts]] — [Wikipedia](https://en.wikipedia.org/wiki/Natural_Language_Prompts)
- Google Cloud Run Deployment — [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud_Run_Deployment)
- YouTube Video Processing — [Wikipedia](https://en.wikipedia.org/wiki/YouTube_Video_Processing)
- Notification Hub Architecture — [Wikipedia](https://en.wikipedia.org/wiki/Notification_Hub_Architecture)
- Cost-Effective [[concepts/app-creation|App Development]] — [Wikipedia](https://en.wikipedia.org/wiki/Cost-Effective_App_Development)
- [[concepts/democratization-of-software-creation|Low-Code Platforms]] — [Wikipedia](https://en.wikipedia.org/wiki/Low-Code_Platforms)
- Secure [[concepts/data-management|Data Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Secure_Data_Management)

## Related Entities
- [[entities/your-ai-workflow|Your AI Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/Your_AI_Workflow)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- Firebase — [Wikipedia](https://en.wikipedia.org/wiki/Firebase)
- Make.com — [Wikipedia](https://en.wikipedia.org/wiki/Make.com)
- [[entities/google-ai-studio|Google AI Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_AI_Studio)
- [[entities/gemini|Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini)
- Firestore — [Wikipedia](https://en.wikipedia.org/wiki/Firestore)
- Google Cloud Run — [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud_Run)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- [[entities/gmail|Gmail]] — [Wikipedia](https://en.wikipedia.org/wiki/Gmail)
- [[entities/google-calendar|Google Calendar]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Calendar)
- Antonina — [Wikipedia](https://en.wikipedia.org/wiki/Antonina)