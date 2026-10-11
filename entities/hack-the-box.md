---
type: entity
tags:
  - "cybersecurity"
  - "penetration-testing"
  - "ethical-hacking"
  - "online-platform"
  - "ctf-training"
  - "vulnerability-research"
aliases:
  - "HTB"
  - "Online Hacking Lab"
summary: Hack The Box is an online platform providing vulnerable machines, challenges, and structured learning paths for practicing penetration testing and cybersecurity skills.
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# Hack The Box

## Overview
Hack The Box (HTB) is a leading online platform for [[concepts/cybersecurity|cybersecurity]] professionals and enthusiasts to practice penetration testing, ethical hacking, and [[concepts/security|security]] research in a legal environment. It provides a wide variety of vulnerable machines, challenges, and [[concepts/learning|learning]] paths designed to simulate real-[[entities/earth|world]] attack [[concepts/scenarios|scenarios]].

## Core Features
- **Active Machines:** Dynamically hosted vulnerable systems ranging from beginner-friendly to expert-level difficulty.
- **Challenges:** Specific task-based exercises covering web exploitation, [[concepts/cryptography|cryptography]], forensics, [[concepts/reverse-engineering|reverse engineering]], and more.
- **Learning Paths:** Structured educational tracks for [[concepts/skill|skill]] development in specific domains like Active Directory or Penetration Testing.
- **Competitions:** Live events including Hackthebox Academy certifications and seasonal competitions.

## Setup & Lab Integration
To effectively utilize HTB resources alongside local practice, users often build [[concepts/isolated-environments|isolated environments]] to ensure safety and reproducibility.

- See [[lab-notes/2026-06-11-Building-a-Local-Hacking-Lab-VirtualBox-Kali-Linux-and-O|Building a Local Hacking Lab: VirtualBox, Kali Linux, and Online Platform Integration]] for guidance on setting up a local lab using VirtualBox and [[concepts/kali-linux]].
- **Key [[concepts/recommendations|Recommendations]] from Recent Guides:**
  - Avoid relying solely on web-based virtual [[entities/labs|labs]] initially; local setup offers better control over network configurations.
  - Use VirtualBox to host attacker machines (e.g., Kali) and potential victim targets in isolated internal networks.
  - Integrate local lab findings with HTB methodologies by treating local VMs as proxies for HTB machine types.

## Related Entities
- [[concepts/kali-linux]]
- VirtualBox
- Penetration Testing
- Ethical Hacking
