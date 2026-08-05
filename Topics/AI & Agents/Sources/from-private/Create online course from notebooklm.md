---
wiki-ingested: true
domain: ai-agents
group: google-ai-ecosystem
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=67GoIe4PQIg>
Hannnel Charles Terence [[entities/harper|Harper]]
Here is a step-by-step guide on how to turn **[[concepts/notebooklm|NotebookLM]]** into an interactive online course using **[[entities/google-classroom|Google Classroom]]**.

### **Prerequisites**

* A fully populated NotebookLM [[concepts/notebook|notebook]] (with sources and generated assets).
* A Google account.

* * *

### **1\. Set Up the Course Portal (Google Classroom)**

Instead of building a custom website, use Google Classroom as the free host for your course.

1. Navigate to **classroom.google.com**.
2. Click **Create Class**.
3. Agree to the disclosure (if not using a school account) and click **Continue**.
4. **Name your class** (e.g., "[[concepts/theory|Theory]] of Constraints") and click **Create**.

### **2\. Customize the Appearance**

To make the course look professional, customize the banner to match your branding.

1. Click **Customize** on the class header.
2. **Generate a Banner:** The video suggests using **Google [[concepts/gemini|Gemini]]** (specifically the _Nano Banana Pro_ extension) to generate a relevant banner image.
	* _Prompt:_ Upload a screenshot of your NotebookLM interface and ask Gemini to "create a banner image for Google Classroom."
3. **Upload:** Download the generated image and upload it to the Google Classroom header area.

### **3\. Create the Welcome Experience**

Set the stage for your students (clients) in the **Stream** tab.

1. Click **New Announcement**.
2. Write a welcome message explaining that they need to access their specific NotebookLM notebook.
3. **Add Training:** It is recommended to attach a short video (via [[entities/youtube|YouTube]] or [[concepts/google-drive|Google Drive]]) demonstrating _how_ to log in and navigate the NotebookLM interface.

### **4\. Integrate NotebookLM Content**

This is where you link your AI notebook to the classroom.

1. Go to the **Classwork** tab and click **Create > Material**.
2. Title the material (e.g., "Course Notebook").
3. **Get the Link:**
	* Go to your **NotebookLM**.
	* Click **Share**.
	* **Set Permissions:** Ensure the student's email is added. Choose **"Full Notebook"** (if you want them to see sources) or **"Chat Only"**.
	* Copy the link.
4. **Add to Classroom:** Paste the link into the "Material" created in step 2 and assign it to the specific student/client.

### **5\. Student Onboarding**

1. In Google Classroom, go to the **People** tab.
2. Invite your client via email.
3. The client [[entities/will|will]] receive an email invitation to join the class. Once joined, they can click the link in the "Classwork" tab to open the NotebookLM interface.

### **6\. Facilitate Interaction and Assignments**

You can create a two-way [[concepts/dialogue|dialogue]] using the Classroom features.

* **Discussion:** Clients can leave comments on the "Material" post in Google Classroom regarding the notebook content. You can reply directly in the thread.
* **Assignments:**
	* Create a new **Assignment** in the Classwork tab.
	* Set instructions (e.g., "Listen to the [[concepts/audio-overview|Audio Overview]] and formulate a plan").
	* Set a **Due Date** (this will sync with the client's [[entities/google-calendar|Google Calendar]]).
	* The client can mark the task as "Done" or attach their own work.

### **7\. Alternative Method: [[concepts/privacy|Privacy]] & Asset Control**

If you do not want clients to see your raw source documents, use this method:

1. **Restrict Access:** In NotebookLM, set sharing to **"Chat Only"** or do not share the notebook link at all.
2. **Download Assets:** Download specific AI-generated assets from NotebookLM (such as the "Audio Overview" or specific text summaries) to your computer.
3. **Upload to Classroom:** Create an Assignment in Google Classroom and **upload the file** directly.
4. **Result:** The client interacts only with the specific asset (e.g., watching the video or listening to the audio) within the Google Classroom interface, without accessing the backend data of your notebook.

## Related Concepts
- [[concepts/notebooklm-notebook|Google Classroom]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Classroom)
- [[concepts/online-courses|online courses]] — [Wikipedia](https://en.wikipedia.org/wiki/online_courses)
- [[concepts/interactive-learning|interactive learning]] — [Wikipedia](https://en.wikipedia.org/wiki/interactive_learning)
- [[concepts/educational-resources|educational resources]] — [Wikipedia](https://en.wikipedia.org/wiki/educational_resources)

## Related Entities
- Hannnel Charles Terence Harper — [Wikipedia](https://en.wikipedia.org/wiki/Hannnel_Charles_Terence_Harper)
- [[entities/notebooklm|NotebookLM]] — [Wikipedia](https://en.wikipedia.org/wiki/NotebookLM)
- [[entities/google-gemini|Google Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Gemini)