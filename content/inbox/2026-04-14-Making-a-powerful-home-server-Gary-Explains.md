---
wiki-ingested: true
title: "Making a powerful home server - Gary Explains"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: security-infrastructure
group: devices-access-networks
---
# Making a powerful [[concepts/home-server|home server]] - [[entities/gary-explains|Gary Explains]]

---
---
<https://www.youtube.com/watch?v=9jKlDCnk-mM>
Here is a [[concepts/summary|summary]] of the video review for the **[[entities/terramaster|TerraMaster F4-425 Plus]]**, presented by Gary Explains.

# TerraMaster F4-425 Plus Review: NAS & Home Server

Gary presents the TerraMaster F4-425 Plus as not just a [[entities/storage|storage]] [[concepts/solution|solution]], but a capable candidate for a home server, highlighting its powerful specifications, storage flexibility, and virtualization [[concepts/capabilities|capabilities]].

## 1\. Key [[concepts/hardware|Hardware]] Specifications

* **Processor:** [[concepts/intel-n150|Intel N150]] CPU (Performance-efficient, low power).
* **[[concepts/memory|Memory]]:** 16GB [[concepts/ddr5-ram|DDR5 RAM]] (Excellent for [[concepts/running|running]] VMs and [[concepts/docker|Docker]]).
* **Networking:** 2x [[concepts/5gbe-ethernet|5GbE Ethernet]] ports (Supports [[concepts/link-aggregation|link aggregation]] and failover).
* **Storage Capacity:**
	* 4x [[concepts/sata-drive-bays|SATA Drive Bays]] (3.5" or 2.5").
	* 2x M.2 NVMe Slots (Accessible by removing the outer casing).
	* Maximum Raw Capacity: 144TB.

## 2\. Installation & [[concepts/setup|Setup]]

* **HDD Installation:** Tool-less, slide-out trays make installing 3.5" drives very easy.
* **NVMe Installation:** Requires unscrewing the back plate and sliding off the cover to access the motherboard.
* **[[concepts/software|Software]] Initialization:** Accessed via `tnas.local` or a desktop app. The setup wizard installs the TOS operating system and formats the drives.
* **File System:** Supports **TRAID** and **TRAID+**. TRAID+ allows for up to two drive failures without data loss.

## 3\. [[concepts/user-interface|User Interface]] & Features

* **OS:** Runs on TOS (TerraMaster Operating System), which features a desktop-like web interface.
* **Services:** SMB ([[entities/windows|Windows]] networking) is enabled by default with home directories automatically shared.
* **App Center:** Allows installation of various applications including backup tools, Plex, Jellyfin, Docker, and VirtualBox.

## 4\. [[concepts/performance-benchmarks|Performance Benchmarks]]

_Test Setup:_ Gary used a PC with a 2.5GbE port, which created a bottleneck (max [[concepts/speed|speed]] capped around 280 MB/s).

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| Test Scenario | Source | Destination | Speed | [[concepts/notes|Notes]] |
| **Large File (10GB)** | NAS HDD | PC SSD | **280 MB/s** | Saturated 2.5GbE link |
| **Large File (10GB)** | NAS SSD | PC SSD | **280 MB/s** | Saturated 2.5GbE link |
| **10k Small [[concepts/files|Files]]** | NAS HDD | PC SSD | **~180 MB/s** |     |
| **10k Small Files** | NAS SSD | PC SSD | **~170 MB/s** | Slightly slower on random reads |
| **Internal Copy** | NAS HDD | NAS SSD | **222 MB/s** | No network bottleneck |
| **Internal Copy** | NAS SSD | NAS HDD | **292 MB/s** | No network bottleneck |

## 5\. Media Server & [[concepts/transcoding|Transcoding]]

Gary tested the device using **Jellyfin**:

* **Direct Play:** Handles 4K H.264 content flawlessly.
* **4K Transcoding:** The Intel N150 chip supports hardware transcoding. It successfully transcoded high-bitrate 4K footage down to 15Mbps with very low CPU usage (approx. 5%) because the GPU handled the load.
* **Legacy Formats:** Transcoded old MPEG2 video to H.264 at incredibly high speeds (800+ FPS).

## 6\. Home Server Capabilities (Virtualization)

Because the unit has **16GB of RAM**, it excels as a home server.

* **VirtualBox:** Users can install VirtualBox from the App Center to run [[concepts/virtual-machines|Virtual Machines]].
* **Demo:** Gary successfully installed and ran a **Debian [[entities/linux|Linux]]** desktop environment directly on the NAS. It functioned smoothly via a web-based remote [[concepts/desktop-interface|desktop interface]], turning the NAS into a fully functional Linux server.

## Verdict

The **TerraMaster F4-425 Plus** is a robust unit that bridges the gap between simple storage and a home lab server. Its combination of the Intel N150 chip, generous RAM, and mixed storage options (SATA + NVMe) makes it ideal for users who want to run virtual machines, [[concepts/docker-containers|Docker containers]], and media servers alongside standard file storage.
