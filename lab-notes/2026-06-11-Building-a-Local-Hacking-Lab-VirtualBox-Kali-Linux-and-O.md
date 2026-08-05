---
title: "Building a Local Hacking Lab: VirtualBox, Kali Linux, and Online Platform Integration"
date: 2026-06-11
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Building a Local Hacking Lab: VirtualBox, Kali Linux, and Online Platform Integration
Generated: 2026-06-11 · API: Gemini 2.5 Flash · Modes: Summary

---

## Building a Local Hacking Lab: VirtualBox, Kali Linux, and Online Platform Integration
**Clip title:** Get Started Hacking: Creating a Virtual Lab
**Author / channel:** Cyber Ryan | Cyber Security
**URL:** https://www.youtube.com/watch?v=sDOB2rvyFOg

### Summary
This video addresses a common question among aspiring cybersecurity enthusiasts: "How do I start hacking?" The presenter advises against immediately relying on web-based virtual machines (VMs) like TryHackMe's AttackBox or Hack The Box's Pwnbox. Instead, he emphasizes the foundational importance of setting up a local, persistent virtual hacking environment on one's own computer. This approach allows for greater hands-on experience with Linux and virtualization, enabling users to save their tools and scripts and connect to external platforms from a self-controlled setup.

The video then provides a detailed, step-by-step tutorial on how to build this environment. Key steps include installing a hypervisor, specifically VirtualBox, as the platform to manage virtual machines. Following this, the user is guided through creating a Kali Linux VM, a popular Debian-based distribution pre-loaded with hacking tools. This involves downloading a pre-built Kali image, importing it into VirtualBox, and configuring essential settings like allocating sufficient RAM and CPU, and crucially, setting up a NAT network to allow the Kali VM to communicate with other virtual machines and the internet. The presenter also covers basic Kali setup, such as logging in with default credentials, changing the password, and verifying internet connectivity.

Next, the tutorial explains how to extend this local environment to interact with online learning platforms. It demonstrates connecting the Kali Linux VM to both TryHackMe and Hack The Box Academy via OpenVPN, allowing users to leverage their powerful local hacking station for challenges and labs instead of the web-based alternatives. Finally, for practical application, the video guides the viewer through spinning up a second VM: Metasploitable 2. This intentionally vulnerable Ubuntu Linux machine serves as a safe and legal target for practicing hacking techniques within the newly created local virtual network.

The video culminates in a practical demonstration of a "first hack." Using the Kali Linux VM, the presenter scans the Metasploitable 2 VM to identify open ports and running services. He then focuses on a known backdoor vulnerability in the `vsftpd 2.3.4` FTP service running on Metasploitable 2. By exploiting this vulnerability through specific FTP commands, he successfully gains root access to the Metasploitable 2 machine. This hands-on experience showcases the power and flexibility of a custom-built virtual hacking environment, providing a solid foundation for continued learning and skill development in cybersecurity.

### Video Description & Links
#### Description
New to hacking? Trying to figure out how to get started?

Whether you're a beginner or looking to refine your skills, this guide will walk you through everything you need to know to create a simple virtual lab.

This video shows you how to download and run VirtualBox, a virtualization software for creating and running virtual machines.

After VirtualBox is running, we will download and create our own Kali Linux virtual machine to run in our virtual lab.

This video will also show you how to connect to the TryHackMe and Hack The Box networks using OpenVPN on our Kali Linux virtual machine.

In this video, we will create our own Metasploitable2 virtual machine that will run in the same lab environment as our Kali VM. We will then perform our very first ethical hack against Metasploitable.

🔗 Useful Links:
VirtualBox Download - https://www.virtualbox.org/wiki/Downloads
Kali Linux Download - https://www.kali.org/get-kali/#kali-virtual-machines
Metasploitable2 Download - https://docs.rapid7.com/metasploit/metasploitable-2/
TryHackMe - https://tryhackme.com/
HackTheBox Academy - https://academy.hackthebox.com/

⏰ Timestamps:
00:00 Introduction
02:00 VirtualBox Setup
02:15 Creating Kali Linux VM
05:04 Connecting to TryHackMe / HackTheBox VPN
06:25 Creating Metasploitable VM
08:24 Performing our First Hack on Metasploitable2

#### Tags
`Ethical Hacking`, `Virtual Network Setup`, `Hacking Lab`, `Cybersecurity`, `Virtualization`, `VMware`, `VirtualBox`, `Hacking Tutorial`, `Network Topology`, `Penetration Testing`, `Cybersecurity Training`, `Beginner Hacking Guide`, `Learn Ethical Hacking`, `Virtual Lab Setup`, `InfoSec`, `Cybersecurity Lab`, `Ethical Hacking for Beginners`, `Cybersecurity Basics`, `Hacking Practice`, `Security Tools`, `Metasploitable`, `TryHackMe`, `HackTheBox`, `THM`, `HTB`, `Metasploitable2`, `Learn Hacking`, `CTF`, `Capture the Flag`, `cyber ryan`

#### URLs
- https://www.virtualbox.org/wiki/Downloads
- https://www.kali.org/get-kali/#kali-virtual-machines
- https://docs.rapid7.com/metasploit/metasploitable-2/
- https://tryhackme.com/
- https://academy.hackthebox.com/
