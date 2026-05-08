---
type: concept
domain: security-infrastructure
group: devices-access-networks
tags:
  - "network-security"
  - "infrastructure-hardening"
  - "access-control"
  - "security-architecture"
aliases:
  - "network-isolation"
  - "network-partitioning"
summary: A security technique used in the context of hardening infrastructure such as airforce bases.
updated: 2026-05-01
---
# Network Segmentation

[[concepts/air-gaps|Network segmentation]] is a security infrastructure technique that divides a computer network into separate logical or physical sub-networks, or segments. Each segment operates with restricted communication pathways to other segments, typically controlled by firewalls or similar access control mechanisms. This isolation limits the lateral [[concepts/exercise|movement]] of threats within a network, meaning that a compromise in one segment cannot automatically grant an attacker access to other segments.

## Military and Critical Infrastructure Applications

Network segmentation is a fundamental hardening measure for critical infrastructure installations, including military facilities such as air force bases. In these environments, segmentation separates operational systems—such as those controlling air defense, communications, or weapons systems—from administrative networks and external-facing systems. This architectural approach reduces the [[concepts/attack-surface|attack surface]] available to adversaries and constrains the potential impact of a successful intrusion to a specific operational domain rather than the entire installation.

## Implementation Considerations

Effective network segmentation requires careful design of communication [[concepts/policies|policies]] between segments, specification of which systems can communicate with others, and enforcement through [[concepts/network-controls|network access controls]]. The technique must balance security objectives against operational requirements, as excessive restriction can impede legitimate [[concepts/capabilities|system functionality]] and cross-segment communication needed for coordinated defense operations.
