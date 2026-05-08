---
wiki-ingested: true
title: "Ubuntu media server"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: video-content-systems
---
# [[entities/ubuntu-media-server|Ubuntu media server]]

---
---
<https://www.youtube.com/watch?v=UFmZCyo_vHY>
Here is a [[concepts/summary|summary]] of the video [[concepts/text-transcript|transcript]] in [[concepts/markdown|Markdown]] format:

# How to Build a Subscription-Killing Server for Under $100

The video details a project to replace expensive monthly subscriptions ([[concepts/netflix|Netflix]], [[entities/spotify|Spotify]], iCloud) with a self-hosted [[concepts/home-server|home server]]. The host takes advantage of the market flood of cheap PCs caused by the upcoming "End of Life" for [[entities/windows-10|Windows 10]].

## 1\. Sourcing the [[concepts/hardware|Hardware]]

* **The Opportunity:** With Windows 10 support ending, businesses are dumping perfectly good hardware that isn't compatible with [[entities/windows-11|Windows 11]].
* **The Hunt:** After failing to find deals on Craigslist and Facebook Marketplace, the host turned to **eBay**.
* **The Purchase:** A used **[[entities/dell-optiplex-5050|Dell OptiPlex 5050]]** was purchased for **$55**.
	* **Specs:** 7th Gen Intel i5 processor, 8GB RAM, and a DVD drive.
	* **The Catch:** It arrived without a hard drive (likely shredded for [[concepts/privacy|privacy]]), requiring the host to install a spare SSD she already owned.

## 2\. [[concepts/software|Software]] Setup: The Operating System

* **Choice:** Instead of Windows, **Ubuntu Desktop (Linux)** was chosen for better stability and to ensure the server doesn't force-reboot for updates.
* **Installation:** The physical installation of the SSD and the [[concepts/software-installation|software installation]] of Ubuntu took only about 10 minutes combined.

## 3\. Replacing [[concepts/streaming-services|Streaming Services]] (Netflix/Spotify)

The host used **Plex** to manage movies, TV shows, and music.

* **Installation:** Plex has a native Ubuntu installer, making initial setup easy.
* **The Linux Hurdle:** A major issue arose with file permissions. Because Plex runs via [[concepts/docker|Docker]], it couldn't see the media folders on the desktop. This required about 30 minutes of troubleshooting via the command line to grant the correct permissions.
* **Acquiring Content (Ripping):**
	* **CDs:** Easy to rip via drag-and-drop for high-quality music [[entities/storage|storage]].
	* **DVDs/Blu-Rays:** To get 4K quality, the host bought a **$40 USB Blu-ray drive**.
	* **Software:** **[[entities/makemkv|MakeMKV]]** was used to bypass encryption and rip the discs.
* **Result:** A fully functional media server capable of streaming high-quality, uncompressed video to a projector and music to mobile devices via [[concepts/remote-access|remote access]].

## 4\. Replacing iCloud (Photo Storage)

To replace iCloud without paying for storage tiers, the host used **Immich**, an [[concepts/open-source|open-source]] self-hosted photo and video management [[concepts/solution|solution]].

* **Setup:** This was the most difficult part of the build. The documentation required complex [[concepts/command-line-interface|command-line]] prompts.
* **Solution:** Following a [[entities/youtube|YouTube]] [[concepts/tutorial|tutorial]] simplified the installation process via Docker Compose.
* **[[concepts/connection|Connection]] Issue:** connecting the mobile app to the server required finding the server's local IP address using the Ubuntu terminal (`hostname -I`).
* **Result:** A Google Photos/iCloud clone that automatically backs up photos from the phone to the server, allows for searching by face/object, and works over mobile data.

## 5\. Conclusion & Cost

* **Total Cost:** Approximately **$100** ($55 for the PC + $40 for the Blu-ray drive + cost of a spare SSD if not already owned).
* **Verdict:** Despite some [[concepts/friction|friction]] with Linux terminal [[concepts/commands|commands]] and networking configurations, the setup successfully replaces subscriptions that cost over $1,500/year. The cheap office PC proved to be powerful enough to handle 4K streaming and [[concepts/photo-management|photo management]] simultaneously.
