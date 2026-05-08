---
wiki-ingested: true
title: "Encrypted dns dave garage"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: maths-cryptography
group: cryptography-codes-ciphers
---
# Encrypted [[concepts/dns|dns]] [[entities/dave|dave]] garage

---
---
<https://www.youtube.com/watch?v=lxFd5xAN4cg>
Here is a detailed [[concepts/summary|summary]] of the video **"Are You The Product? [[concepts/isp-tracking|ISP Tracking]] vs [[concepts/vpn|VPNs]] vs [[concepts/encrypted-dns|Encrypted DNS]]"** by Dave's Garage.

# 🛡️ Are You The Product? Understanding Internet [[concepts/privacy|Privacy]]

In this video, [[entities/dave-plummer|Dave Plummer]] explores how Internet Service Providers (ISPs) track users, why VPNs are often oversold as privacy solutions, and how Encrypted DNS offers a more effective, free alternative to stop being "the product."

## 📋 Executive Summary

While HTTPS encrypts the _content_ of your browsing (passwords, emails), the _metadata_—specifically [[concepts/dns-lookups|DNS lookups]]—remains visible to your ISP by default. This allows ISPs to build profiles on your [[concepts/habits|habits]] and monetize that data. While VPNs are often marketed as the [[concepts/solution|solution]], they merely shift trust from the ISP to the VPN provider. The most high-leverage, practical solution is enabling **Encrypted DNS (DoH/DoT)** and **Encrypted Client Hello (ECH)**.

* * *

## 🔍 The Leak: How ISPs See You

When you type a URL (e.g., `example.com`), two specific pieces of information leak by default:

1. **IP Addresses:** The destination numbers you connect to.
2. **DNS Lookups:** The "phonebook" request turning a domain name into an IP address.

### The "Table of Contents" Analogy

If your web browsing is a book:

* **HTTPS** encrypts the pages (the text, images, and secrets). Even the NSA cannot easily read this.
* **DNS** is the **Table of Contents**. Your ISP cannot read the pages, but they know exactly which chapters (websites) you are visiting, when, and how often.

### Monetization of [[concepts/metadata|Metadata]]

ISPs generally do not sell raw lists of your history (due to [[concepts/legal-risks|legal risks]]). Instead, they aggregate data to create **"Interest Cohorts"**:

* _Examples:_ "Sports enthusiast," "Insomniac gamer," "New parent."
* **Marketing:** These cohorts are sold to advertisers.
* **Upselling:** Data is used to push ISP products (e.g., selling faster speeds to detected 4K streamers).
* **DNS Error Assist:** Historically, ISPs redirected typo domains to ad-filled search pages.

* * *

## 🚫 The VPN Myth

Dave argues that for home browsing, consumer VPNs are often "orthogonal to the problem."

* **Trust Shifting:** A VPN hides your traffic from the ISP but exposes it all to the VPN provider. You haven't stopped being the product; you've just changed _who_ the product is.
* **Valid [[concepts/scenarios|Use Cases]] for VPNs:**
	* **Hostile Networks:** Public Wi-Fi (airports, cafes) where the operator might intercept traffic.
	* **Geo-shifting:** Accessing content locked to specific regions.
	* **Censorship Circumvention:** Bypassing local blocking.

* * *

## 🔐 The Real Solution: Encrypted DNS

To shrink the "breadcrumb trail" without buying a VPN, Dave recommends **DoH** or **DoT**.

### The Technologies

* **DoH (DNS over HTTPS):** Wraps DNS requests inside standard HTTPS traffic.
* **DoT (DNS over TLS):** Encrypts DNS over a dedicated TLS [[concepts/tunnel|tunnel]].
* **ECH (Encrypted Client Hello):** Closes the final leak in the TLS handshake (Server Name Indication or SNI), encrypting the server name itself.

### The Result

When enabled, your ISP sees only an encrypted blob and the destination IP. Because Content Delivery Networks (CDNs) host millions of sites on shared IPs, the ISP can no longer easily determine specific websites you are visiting.

* * *

## ⚙️ Practical Guide: How to [[concepts/secure|Secure]] Your DNS

"Defaults are destiny." You must manually change these settings to stop using your ISP's default resolver.

|     |     |
| --- | --- |
| Platform | Action |
| **[[entities/windows|Windows]] 11** | Settings $\\rightarrow$ Network & Internet $\\rightarrow$ Edit DNS Server assignment $\\rightarrow$ Select "Encrypted only" (DoH). |
| **[[entities/android|Android]]** | Settings $\\rightarrow$ Network $\\rightarrow$ **Private DNS**. Enter a hostname (e.g., `dns.quad9.net` or `1dot1dot1dot1.cloudflare-dns.com`). |
| **macOS / iOS** | Install a **DNS Profile** (mobile config file) that points to a DoH/DoT provider. |
| **Browsers** | Chrome and Firefox have "Secure DNS" settings to enable DoH directly in the browser. |
| **Advanced** | Run a local resolver like **Pi-hole** or **AdGuard Home** to control logging and strip trackers network-wide. |

### Recommended Providers (The "Trust Trade")

You are still trusting _someone_, but these providers have better auditing/incentives than ISPs:

* **Cloudflare (1.1.1.1):** Speed-focused, audits for privacy.
* **Quad9 (9.9.9.9):** Security/Malware blocking focused.
* **[[entities/google|Google]] (8.8.8.8):** Reliable, but it's Google.

* * *

## ⚠️ Limitations & Nuance

1. **Fingerprinting (Panopticlick):** Even with encrypted DNS, browsers leak [[concepts/hardware|hardware]] details (screen resolution, fonts, battery level) that can uniquely identify a machine.
2. **ECS (EDNS Client Subnet):** Some resolvers send part of your IP to the destination to optimize [[concepts/speed|speed]] (geo-location). Privacy-focused resolvers usually disable this.
3. **Destination IPs:** A determined adversary can still correlate IP traffic patterns (e.g., massive data [[concepts/flow|flow]] to a [[entities/netflix|Netflix]] IP address), but it creates a "rough [[concepts/sketch|sketch]]" rather than a "high fidelity portrait."

## 🏁 Conclusion

Privacy is about reducing the [[concepts/attack-surface|attack surface]]. By switching to Encrypted DNS, you turn a highly detailed log of your life into a vague set of [[concepts/connection|connection]] patterns, making your data significantly less valuable to your ISP.

> **"Be the customer, not the product."**