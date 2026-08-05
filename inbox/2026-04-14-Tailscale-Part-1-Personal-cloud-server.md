---
wiki-ingested: true
title: "Tailscale Part 1 - Personal cloud server"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: tools-platforms
group: platforms-runtimes-environments
---
# Tailscale Part 1 - [[concepts/personal-cloud-server|Personal cloud server]]

---
---
<https://www.youtube.com/watch?v=zngSuqCM4d8>
This video from **[[entities/alex-kretzschmar|Alex Kretzschmar]] (Lead [[entities/developer|Developer]] Advocate at Tailscale)** introduces the concept of self-hosting and sets up the foundational [[concepts/hardware|hardware]] and [[concepts/software|software]] for a personal, private, and [[concepts/secure-network|secure network]].
Alex begins by contrasting the traditional [[entities/raspberry-pi|Raspberry Pi]] (RPi 4 shown) for self-hosting – highlighting its limitations like slow performance, reliance on USB for [[entities/storage|storage]], shared [[concepts/bus-bandwidth|bus bandwidth]], and soldered [[concepts/ram|RAM]] – with a more suitable alternative: a 1-liter small form factor (SFF) X86 PC (specifically a [[entities/dell-optiplex-7050|Dell Optiplex 7050]], purchased for ~$150 refurbished) \[0:25\]. The Dell PC offers better [[concepts/expandability|expandability]] (e.g., up to 8TB [[concepts/sata-ssd-storage|SATA SSD storage]]), [[concepts/tool-less-servicing|tool-less servicing]], and upgradable laptop DIMM RAM (up to 32GB demonstrated) \[1:44\]. These X86 mini PCs are powerful enough for self-hosted services like Immich (a [[entities/google-photos|Google Photos]] clone), Jellyfin/Plex, Audiobookshelf, and Home Assistant \[2:57\].
Part 1 of this video series focuses on installing the foundational software: Proxmox [[concepts/virtual-environment|Virtual Environment]] (VE) \[3:30\]. The installation process involves:

1. **Downloading the Proxmox ISO** from [proxmox.com](https://proxmox.com) and using Balena Etcher (or Rufus for [[entities/windows|Windows]]) to create a bootable USB drive \[3:48\].
2. **Connecting the Dell PC** to a Gigabit network switch (any basic switch works, Ubiquiti is shown for demo purposes) and using a JetKVM (a small KVM-over-IP device) for remote keyboard, video, and mouse control via a laptop \[6:00\].
3. **Booting the Dell PC** from the USB stick and performing the graphical Proxmox installation \[9:14\]. This includes accepting the EULA, selecting the NVMe drive for the OS (leaving the SATA SSD for data), configuring location and time zone, setting a root password and [[entities/email|email]], and assigning a static IP address (e.g., [192.168.1.10](https://192.168.1.10)), [[concepts/gateway|gateway]], and [[concepts/dns|DNS]] server \[10:50\]. Alex provides a mini-lesson on basic network fundamentals like DHCP, gateways, and DNS servers \[12:53\].
4. **Performing post-installation steps** via [[concepts/ssh|SSH]], using a helper script from [helper-scripts.com](https://helper-scripts.com) \[15:17\]. This script disables the Proxmox subscription nag, corrects package sources, and disables high availability (for a single-node [[concepts/setup|setup]]). Finally, Alex manually updates (apt update) and upgrades (pveupgrade) Proxmox to its latest version, followed by a reboot \[17:08\].

The video concludes with a fully functional Proxmox web interface accessible via <https://<Proxmox_IP>:8006> \[18:37\], ready to create [[concepts/virtual-machines|virtual machines]] and containers. Part 2 of the series [[entities/will|will]] detail installing specific self-hosted applications like Immich and Home Assistant, along with configuring mobile devices for encrypted access via Tailscale \[19:20\].