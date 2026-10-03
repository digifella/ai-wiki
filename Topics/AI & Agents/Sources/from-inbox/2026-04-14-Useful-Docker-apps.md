---
wiki-ingested: true
title: "Useful Docker apps"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: security-infrastructure
group: deployment-docker-services
type: "source-summary"
---
# Useful [[concepts/docker|Docker]] apps

---
---
Here is a detailed summary of the video "5 Underrated Docker Containers for Your Home Lab" formatted in [[concepts/markdown|Markdown]].
<https://youtu.be/hgaP-ndM9Ds>

# 5 Underrated Docker Containers for Your Home Lab

This video highlights five Docker containers that may not always get the spotlight but offer significant utility for home lab users. From document management to server monitoring, these tools prioritize [[concepts/privacy|privacy]], ease of use, and self-hosting capabilities.

* * *

## 1\. Stirling-PDF

**The Privacy-Focused PDF Manipulation Tool**

Many users rely on expensive [[concepts/software|software]] like [[entities/adobe|Adobe]] Acrobat for simple PDF tasks, or worse, use free online converters that require uploading sensitive documents to third-party servers. Stirling-PDF offers a robust, local alternative.

	**Primary Function:** A web-based local PDF manipulation tool.
	
	**Key Features:**
		**Editing:** Merge, split, reorder, rotate, and compress PDFs.
		
		**Conversion:** Convert files to and from PDF formats.
		
		**[[concepts/secure|Security]]:** Sign documents, add watermarks, and extract pages.
		
		**Privacy:** Entirely self-hosted. All files remain on your local network, ensuring sensitive data (like tax documents or contracts) is never uploaded to the cloud.
		
	**Why it’s Underrated:** It replaces costly subscriptions and insecure online tools with a fast, browser-accessible interface that runs entirely locally.
	

Better to use BentoPDF 

* * *

## 2\. Beszel

**The Lightweight System Resource Monitor**

While many home lab users monitor _uptime_ (is the server on?), fewer monitor actual system _health_ ([[concepts/cpu|CPU]], [[concepts/ram|RAM]], Disk usage). While tools like Grafana are powerful, they can be complex to set up. Beszel offers a simpler [[concepts/solution|solution]].

	**Primary Function:** Server resource monitoring (Hub and Spoke model).
	
	**How it Works:** You install the main container (Hub) and a lightweight [[entities/agent|agent]] on the systems you want to monitor.
	
	**Key Features:**
		**Metrics:** Monitors CPU usage, [[concepts/memory-management|memory usage]], disk space, and disk I/O.
		
		**Alerting:** Sends notifications based on specific thresholds (e.g., "CPU usage > 80% for 10 minutes") rather than just downtime.
		
		**History:** Provides historical data dashboards to spot trends.
		
	**Comparison:** It complements tools like **Uptime Kuma**. Use Uptime Kuma to know if a service is down; use Beszel to know _why_ (e.g., the disk is full).
	

* * *

## 3\. Authentik

**The Unified Single Sign-On (SSO) Provider**

Logging into multiple different services with different credentials is tedious and insecure. Authentik acts as an Identity Provider (IdP) to centralize access.

	**Primary Function:** Single Sign-On (SSO) and Identity Management.
	
	**Key Features:**
		**Centralized Security:** Secure one account with a strong password and 2FA, then use that account to access all other apps (Proxmox, Portainer, etc.).
		
		**[[concepts/integration|Integration]]:** Supports standard protocols like OAuth2 and OIDC to integrate with various self-[[concepts/saas|hosted applications]].
		
	**Why it’s Underrated:** Many users are intimidated by the complexity of Identity Providers. However, Authentik has excellent documentation and simplifies the user experience by removing the need for repeated logins across the home lab.
	

* * *

## 4\. Linkwarden

**The Advanced Bookmark & Archive Manager**

Standard browser bookmarks are fine for daily sites, but they lack organization for research, long-term archiving, or collaborative lists. Linkwarden fills the gap between a browser favorites bar and a database.

	**Primary Function:** Self-hosted collaborative bookmark manager.
	
	**Key Features:**
		**Organization:** Uses **Collections** (folders) and **Tags** for granular sorting.
		
		**Archiving:** Captures a webpage so you have a copy even if the original site goes down.
		
		**Search:** Powerful search capabilities across your saved links.
		
	**Use Case:** The presenter suggests keeping "daily drivers" in your browser bar, but moving infrequent resources, manuals, and research links into Linkwarden for better categorization and retrieval.
	

* * *

## 5\. Nextcloud (AIO)

**The Private Cloud Alternative**

Nextcloud is often criticized for being "bloated" or difficult to maintain. However, the presenter argues it is underrated specifically because of the **Nextcloud AIO (All-In-One)** installer and its desktop sync features.

	**Primary Function:** Self-hosted file storage and collaboration ([[entities/google|Google]] Drive/Synology [[concepts/motivation|Drive]] alternative).
	
	**The AIO Advantage:** The All-In-One installer automates the difficult parts of setup. It handles containers, backups, and updates automatically, removing the maintenance headache.
	
	**The "Killer Feature" (Virtual Files):**
		The desktop client allows you to see all your files without downloading them.
		
		**On-Demand Access:** Double-clicking a file downloads it locally for use. Saving it syncs it back to the server.
		
		This mimics the functionality of OneDrive or Synology Drive, allowing access to terabytes of data on devices with small hard drives.
		
	**Why it’s Underrated:** It breaks vendor lock-in (unlike Synology Drive) while offering a comparable user experience via the Virtual Files feature.
	

* * *

### Conclusion

These containers [[concepts/range|range]] from simple utilities to complex infrastructure, but they all share a common goal: taking control of your data and streamlining your home lab [[concepts/workflow|workflow]] without relying on expensive or invasive third-party services.