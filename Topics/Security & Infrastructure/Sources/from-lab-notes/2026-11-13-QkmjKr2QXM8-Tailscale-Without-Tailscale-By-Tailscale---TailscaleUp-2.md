---
selected-topic: "Security & Infrastructure"
wiki-ready: true
review-status: "approved"
lab-review-id: 56e78be61baeaa411cd5
suggested-topic: "Undecided"
domain: "security-infrastructure"
title: "Tailscale Without Tailscale, By Tailscale - TailscaleUp 2026"
date: 2026-11-13
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-13-QkmjKr2QXM8-Tailscale-Without-Tailscale-By-Tailscale---TailscaleUp-2"
---
## Tailscale Without Tailscale, By Tailscale - TailscaleUp 2026
**Clip title:** Tailscale Without Tailscale, By Tailscale - TailscaleUp 2026
**Author / channel:** Tailscale
**URL:** https://www.youtube.com/watch?v=QkmjKr2QXM8
**Credibility:** Commentary (tier 1 of 5). YouTube video from Tailscale: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
Tailscale product manager Kabir Sikand and engineers Brad Fitzpatrick and Murad Akhundov introduced "Tailcat," a command-line tool and Go library that combines Tailscale’s data plane components—such as MagicSock, WireGuard, and DERP—without needing Tailscale’s control plane. Tailcat acts like netcat over Tailscale's secure, encrypted data plane, offering features like NAT traversal and a G-visor TCP stack for user-space TCP termination.

Brad Fitzpatrick demonstrated Tailcat's functionality in the terminal, showing how users can establish encrypted, peer-to-peer connections across arbitrary networks and expose local ports (such as port 22 for SSH) securely. He highlighted that Tailcat is open source and can be used as a standalone Go library or CLI tool, with free rate-limited DERP relays provided by Tailscale.

Murad Akhundov presented a live demonstration of Tailcat in Minecraft Java Edition. He showed how a player can share a local Minecraft world over Tailcat without setting up Tailscale clients, user limits, or separate accounts. The Minecraft mod embeds Tailcat's Go binaries, enabling seamless local area network (LAN) play with multiple players over encrypted direct connections or DERP relays.

### Video Description & Links
#### Description
Tailcat brings Tailscale’s encrypted connections and NAT traversal to a standalone command-line tool and Go library, without a Tailscale account or control plane.

In this session from TailscaleUp 2026, Brad explains how Tailcat combines WireGuard, DERP, and userspace networking, then demonstrates connections between machines and SSH access. Murad shows a Minecraft mod that lets players share a world without installing a separate Tailscale client. 

Learn more about Tailcat:
https://tailscale.com/tailcat

Tailcat on GitHub:
https://github.com/tailscale/tailcat

Chapters:
00:00 Introducing Tailcat
01:06 What Tailscale adds to WireGuard
03:06 How Tailcat works
04:03 Connecting two machines
04:40 SSH access and authentication
05:21 Tailcat addresses and running your own DERP server
06:27 Minecraft multiplayer with Tailcat
07:55 Inside the Minecraft mod and browser support
09:03 Debugging Windows with Claude over Tailcat
10:14 Using DNS names for Tailcat connections

#### URLs
- https://tailscale.com/tailcat
- https://github.com/tailscale/tailcat
