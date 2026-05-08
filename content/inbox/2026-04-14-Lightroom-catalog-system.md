---
wiki-ingested: true
title: "Lightroom catalog system"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "photography"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: lightroom-color-workflows
---
# [[concepts/lightroom-catalog|Lightroom catalog]] system

---
---
<https://www.youtube.com/watch?v=Hv-gDVuNpbU>
Here is a detailed [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the [[concepts/lightroom|Lightroom]] [[concepts/catalog|Catalog]] lesson from [[entities/will|Will]]’s _Master of Editing_ course.

# Mastering Lightroom Catalogs

**Instructor:** Will **Context:** A lesson from the _Lightroom [[concepts/master-of-editing|Master of Editing]] Course_ **Goal:** To explain exactly what a Lightroom catalog is, how it functions, and the [[concepts/best-practices|best practices]] for managing your photo [[concepts/workflow|workflow]].

* * *

## 1\. What is a Catalog?

The most common misconception is that the catalog contains your actual photos. It does not.

### The "Cookbook" Analogy

* **The Catalog is a Cookbook:** It contains the "recipes" (edits) and the [[concepts/instructions|instructions]].
* **The Content:** It stores data such as:
	* [[concepts/edit-history|Edit history]] and [[concepts/adjustments|adjustments]].
	* [[concepts/star-ratings|Star ratings]], [[concepts/flags|flags]], and [[concepts/color-labels|color labels]].
	* [[concepts/keywords|Keywords]] and [[concepts/notes|notes]].
	* **Location data:** It maps where your actual [[concepts/files|files]] live on your hard [[concepts/motivation|drive]].
* **The Photos are Ingredients:** Your RAW files, JPEGs, and TIFFs are the "ingredients." They are stored separately on your hard drive, not inside the catalog file.

**Key Takeaway:** When you open a photo in Lightroom, the catalog reads the original file location and overlays the "recipe" (edits) on top of it for you to see.

* * *

## 2\. Creating and Managing Catalogs

### Starting Fresh

If you are new to Lightroom, it creates a default catalog. If you have been using it for years without creating a new one, you have been working in a single catalog.

* **To create a new catalog:** Go to `File > New Catalog`.
* **Process:** Lightroom will close the current catalog and relaunch with the new, empty one.
* **[[concepts/disconnection|Isolation]]:** Catalogs are completely separate. Edits, presets, or notes made in **Catalog A** will not appear in **Catalog B**.

### The `.lrcat` File

When you create a catalog, Lightroom creates a folder on your computer containing:

1. **The Catalog File (**`**.lrcat**`**):** This is the database (the cookbook). It is usually very small in file size (e.g., a few megabytes) because it only holds text data, not images.
2. **Preview Files:** Helper files that allow Lightroom to display images quickly.

* * *

## 3\. File Management Rules

Because the catalog relies on "mapping" where your files are, moving files incorrectly breaks the link.

### The Golden Rule of Moving Files

**Never move, rename, or delete photos using your computer's file browser (Finder/Explorer) after importing them.**

* **The Consequence:** If you move a file outside of Lightroom, the catalog looks at the old address, finds nothing, and displays an **Exclamation Point (!)** icon. The photo cannot be edited or exported.
* **How to Fix it:** You must click the exclamation point and manually "Locate" the file to re-establish the link.
* **The Correct Way:** Drag and drop folders or rename files **inside the Lightroom Library panel**. Lightroom will move the actual file on the disk _and_ update the catalog database simultaneously.

* * *

## 4\. Workflow Strategies: One vs. Many

There is an ongoing debate on how to [[concepts/structure|structure]] catalogs.

|     |     |     |     |
| --- | --- | --- | --- |
| Strategy | Description | Pros | Cons |
| **Master Catalog** | One single catalog for every photo you have ever taken. | Searchability. You can find any photo from any year instantly. Easy to plug in a hard drive and go. | Can become slow/sluggish once it contains hundreds of thousands of images. |
| **Time-Based** | One catalog per year (e.g., "2024 Catalog"). | Keeps catalogs relatively fast and organized by date. | Harder to find older photos if you forget which year they were taken. |
| **Client/Shoot Based** | A new catalog for every specific client or job. | Maximum [[concepts/speed|speed]]. Keeps client work completely isolated. | [[concepts/zero|Zero]] cross-referencing. You have to open different files constantly to find specific work. |

**Will's Preference:** A **Master Catalog** (Single Catalog workflow) for ease of access, though he acknowledges different [[concepts/methods|methods]] work for different photographers.

* * *

## 5\. Important Settings & Maintenance

You can access these via `Lightroom Classic > Catalog Settings`.

### Backups (Critical)

The "Backup" setting in Lightroom backs up the **Catalog file (.lrcat)**, not your photos.

* **Why:** If your catalog file corrupts, you lose all your edits, ratings, and organization.
* **Recommendation:** Set this to back up "Once a week when exiting Lightroom" or "Every time Lightroom exits."

### Optimization

If a catalog becomes slow or laggy, you can clean up the database mechanics.

* **Action:** Go to `File > Optimize Catalog`.
* **Function:** Cleans up deleted artifacts and streamlines the database to improve performance.

* * *

## 6\. Working with External Editors

If you need to send photos to a retoucher or an external editor, you use the "Export as Catalog" feature.

1. **Select Photos:** Choose the images you want to send.
2. **Export:** Go to `File > Export as Catalog`.
3. **Crucial Settings:**
	* Check **"Export negative files"**: This ensures the actual RAW files are included in the package.
	* Check **"Build/Include Smart Previews"**.
4. **Send:** Zip/Compress the resulting folder and send it to the editor.
5. **Importing Back:** When the editor sends the catalog back, go to `File > Import from Another Catalog`. Lightroom will merge their edits into your master catalog (Note: This will overwrite your current edits on those specific files).