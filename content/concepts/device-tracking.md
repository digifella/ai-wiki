---
type: concept
domain: science-physics
updated: 2026-05-23
group: engineering-systems-robotics-autonomous-vehicles
---
# Device Tracking

**Device Tracking** refers to the capability to monitor and log the physical location of a device, often used for recovery after theft or loss. While essential for asset recovery, it presents significant [[concepts/privacy|privacy]] and [[concepts/security|security]] vulnerabilities if not properly secured against unauthorized access.

## Security Risks & Vulnerabilities
- **Unauthorized Location Access**: Threat actors may exploit lock-screen [[concepts/accessibility|accessibility]] features to view location data before the device is locked down.
- **[[concepts/power|Control]] Center Exploitation**: Default settings may allow access to Wi-Fi, Bluetooth, or Location Services toggles from the lock screen, enabling a thief to disable tracking or mask their location.
- **Silent Mode Manipulation**: Attackers can switch devices to silent mode to prevent audible recovery alerts.

## Mitigation Strategies
- **Restrict Lock Screen Actions**: Configure device settings to require [[concepts/authentication|authentication]] for accessing Control Center, Notifications, and [[concepts/wallet]] on the lock screen.
- **Disable Lock Screen Access**: Specifically prevent access to toggles that affect connectivity and location services until the device is unlocked.
- **Implement Deadbolts**: Use biometric or passcode "deadbolts" that require a fresh authentication attempt even after brief interruptions.

## Related Resources
- [[lab-notes/2026-05-23-iPhone-Lock-Screen-Security-Preventing-Thief-Access-to-C|iPhone Lock Screen Security: Preventing Thief Access to Control Center and Tracking]]
- Find My Network
- Digital Privacy
