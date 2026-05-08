---
wiki-ingested: true
domain: history-anthropology
group: architecture-cities-heritage
---
<https://www.youtube.com/watch?v=juEfJERgBE8>
Here is a comprehensive [[concepts/markdown|Markdown]] guide based on the video [[concepts/tutorial|tutorial]].

# Building a [[concepts/full-stack-web-app|Full-Stack Web App]] with [[entities/google|Google]] [[entities/ai-studio|AI Studio]] & Firebase

This guide outlines how to transform a static website [[concepts/design|design]] into a functional [[concepts/web-application|web application]] with user accounts, database storage, and file uploads using **[[entities/google-ai|Google AI]] Studio** and **Firebase**.
**The Goal:** Build an app where users can sign up, log in, manage their own data, and upload files—where every user only sees their own information.

* * *

## 📋 Roadmap

1. **User Authentication:** Sign up, Log in, Log out.
2. **Store User Data:** Save user settings and text data (Firestore).
3. **File Uploads:** Upload and manage files (Firebase Storage).
4. **Connect to UI:** Make the interface [[entities/react|react]] to the user state.

* * *

## 🛠️ Phase 1: User Authentication

The goal is to allow users to create accounts and log in securely.

### 1\. Firebase [[concepts/setup|Setup]]

1. Go to the **Firebase Console** and create a new project.
2. Select **Web App** (`</>`) icon to register your app.
3. **Copy the** `**firebaseConfig**` **[[concepts/code|code]]** provided (SDK setup). You [[entities/will|will]] need this for the AI prompt.

### 2\. Configure Authentication

1. In Firebase, go to **Build > Authentication**.
2. Click **Get Started**.
3. **Enable Email/Password:** Toggle to enable and save.
4. **Enable Google Sign-In:**
	* Add new provider > Google.
	* Set the **Project Support Email**.
	* _Note:_ Google Sign-in requires the app to be deployed to a live URL to function fully.
5. **Customize Emails (Templates Tab):**
	* Edit the "Sender Name" to your App Name (e.g., "VaultFlow") so users trust the email.

### 3\. AI Studio Implementation

Go to Google AI Studio and use the following prompt logic to connect the backend:

> **Prompt:** "Connect my existing web app to Firebase using this SDK: \[PASTE CONFIG HERE\]. Requirements: Use Firebase Auth only. Do not use Firestore/Storage yet. Do not redesign UI. Authenticate users via Email/Password and Google."

* * *

## 🗄️ Phase 2: Store User Data (Firestore)

Authentication identifies _who_ the user is, but the Database stores _what_ belongs to them.

### 1\. Enable Firestore

1. In Firebase, go to **Build > Firestore Database**.
2. Click **Create Database**.
3. Select **Standard** or **Production Mode** (Never use Test Mode for real apps).
4. Select the **Region** closest to your users.

### 2\. Set [[concepts/secure|Security]] Rules

Delete default rules and use rules that ensure data [[concepts/disconnection|isolation]] (User A cannot see User B's data).
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Root user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;

      // Subcollections (files, notes, etc.)
      match /{allPaths=**} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}


```

### 3\. AI Studio Implementation

Update the dashboard to show user-specific data.

> **Prompt:** "Dashboard Upgrade: Add sections for 'My Files', 'My [[concepts/notes|Notes]]', and 'Team'. Store this data in Firestore. Structure: Users > \[UserID\] > Collections. Ensure each user only sees their own data."

* * *

## ☁️ Phase 3: File Uploads (Storage)

Firestore is for text/JSON. Firebase Storage is for images, PDFs, and audio.

### 1\. Enable Storage

1. In Firebase, go to **Build > Storage**.
2. **Upgrade to Blaze Plan (Pay as you go):**
	* _Note:_ This is required to enable Storage, but the free tier is generous. Set a budget alert (e.g., $5) to avoid surprises.
3. Create a **Default Bucket** (select a "No Cost" region like `us-central1` if available).
4. Set to **Production Mode**.

### 2\. Storage Security Rules

Replace default rules with specific user-isolation rules:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /user_uploads/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}


```

### 3\. AI Studio Implementation

Enable the file upload button functionality.

> **Prompt:** "Connect the 'Add File' button to Firebase Storage. Requirements: Upload files from device. Save file [[concepts/metadata|metadata]] (name, type, URL) to Firestore. Store actual file in Storage path: `user_uploads/{uid}/{filename}`."

* * *

## 🔗 Phase 4: Connect & Logic

Now, ensure the UI reacts to the backend logic dynamically.

### 1\. Dynamic UI

The app should greet the user by name and display their specific content.

* **Logic:** When `AuthState` changes to "Logged In", fetch data from Firestore `users/{uid}` and populate the Dashboard.

### 2\. Implementing Limits ([[concepts/saas|SaaS]] Features)

You can use logic to simulate [[concepts/paid-plans|paid plans]].

> **Prompt:** "Implement a Free Plan limit. Max 5 files per user. Check Firestore count. If user has 5+ files, disable the 'Upload' button and show a modal: 'Limit Reached - Upgrade Plan'."

* * *

## 🚀 Deployment (Crucial Step)

For features like **Google Sign-In** to work properly, your app must be hosted on a live domain, not just a local preview.

1. **Deploy your code** (e.g., via Vercel, Netlify, or Firebase Hosting).
2. Copy your new domain (e.g., `https://myapp.com`).
3. Go to **Firebase Console > Authentication > Settings > Authorized Domains**.
4. **Add Domain:** Paste your live URL here.

**Result:** You now have a fully functional web application with secure authentication, database management, and file storage.

## Related Concepts
- [[concepts/user-authentication|authentication]] — [Wikipedia](https://en.wikipedia.org/wiki/authentication)
- [[concepts/authorization|authorization]] — [Wikipedia](https://en.wikipedia.org/wiki/authorization)
- [[concepts/user-interface|user interface]] — [Wikipedia](https://en.wikipedia.org/wiki/user_interface)
- [[concepts/full-stack-development|full-stack development]] — [Wikipedia](https://en.wikipedia.org/wiki/full-stack_development)
- [[concepts/firebase-firestore|Firebase Firestore]] — [Wikipedia](https://en.wikipedia.org/wiki/Firebase_Firestore)
- [[concepts/firebase-storage|Firebase Storage]] — [Wikipedia](https://en.wikipedia.org/wiki/Firebase_Storage)
- [[concepts/system-instructions|Google AI Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_AI_Studio)
- [[concepts/database-storage|database storage]] — [Wikipedia](https://en.wikipedia.org/wiki/database_storage)
- [[concepts/file-uploads|file uploads]] — [Wikipedia](https://en.wikipedia.org/wiki/file_uploads)

## Related Entities
- [[entities/google-ai-studio|Google AI Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_AI_Studio)
- [[entities/storage|Storage]] — [Wikipedia](https://en.wikipedia.org/wiki/Storage)