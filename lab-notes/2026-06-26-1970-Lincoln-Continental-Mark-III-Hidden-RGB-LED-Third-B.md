---
title: 1970 Lincoln Continental Mark III Hidden RGB LED Third Brake Light Integration
date: 2026-06-26
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# 1970 Lincoln Continental Mark III Hidden RGB LED Third Brake Light Integration
Generated: 2026-06-26 · API: Gemini 2.5 Flash · Modes: Summary

---

## 1970 Lincoln Continental Mark III Hidden RGB LED Third Brake Light Integration
**Clip title:** The Secret RGB LED Features I Hid in this 1970 Lincoln Continental Mark III
**Author / channel:** Dave's Garage
**URL:** https://www.youtube.com/watch?v=hRhBuHJ-j_o

### Summary
The video details the intricate process of adding a modern, high-mounted third brake light to a vintage 1970 Lincoln Continental Mark III, emphasizing the hidden engineering complexities involved in integrating new technology with a classic vehicle. The main challenge was to enhance safety without compromising the car's original aesthetic or electrical integrity. Given that the Mark III, with its limited head and neck support, predates modern safety features like the Center High Mounted Stop Lamp (CHMSL), the project aimed to provide a visible, unambiguous brake signal to alert drivers of larger, newer vehicles in traffic.

The solution involved discreetly installing a six-foot addressable LED strip in a narrow, half-inch gap above the rear bumper, making it completely invisible when inactive. To achieve this, a custom circuit board was developed, featuring an ESP32 microcontroller, a buck converter for a clean 5V power supply, and optocouplers for signal isolation. The optocouplers were crucial for safely translating the old car's noisy, fluctuating 12V signals (left/right turn, brake, reverse) into reliable digital inputs for the microcontroller, without electrically coupling the two distinct systems.

The core of the project lay in the software's "translation layer," specifically a state machine designed to interpret the car's ambiguous electrical signals. Unlike modern vehicles with digital communication buses (CAN bus), the 1970 Lincoln uses shared bulbs for brake and turn signals, requiring the microcontroller to infer the driver's intent. The state machine monitors signal timing and context to differentiate between braking, turning, or combinations thereof, prioritizing the brake signal for immediate and clear communication. The LED strip then displays semantically meaningful animations, such as a red "bloom" for braking, amber sweeps for turn signals, and white for reverse, all synchronized with the original vehicle's flasher timing. An "emergency" red and blue strobe mode was also included for demonstration, isolated to prevent accidental activation on public roads.

Ultimately, the project serves as a compelling case study in embedded systems design, highlighting how constraints can lead to elegant solutions. The modification is parasitic, observing the car's signals without altering its factory wiring, ensuring that the original lighting functions remain intact even if the new system fails. This careful approach maintains the car's authenticity while significantly improving rear-end visibility and driver safety. The successful integration demonstrates that thoughtful engineering can bridge decades of technological advancement, enhancing functionality without sacrificing the timeless appeal of a classic.

### Video Description & Links
#### Description
Dave demos his RGB LED third brake light strip and dives into the interface and power electronics needed to run it.  Check out an episode of ShopTalk on Dave's Attic where we answer the best user questions!

https://youtu.be/ZUvDO2g5Y1s

Get the Code: https://github.com/davepl/ThirdBrakeLight
Get the LED Strips (2): https://amzn.to/3R0jKHm

Check out JLCPCB.com for PCB and EasyEDA!

Video Credit: Pinal County Sheriff - https://www.youtube.com/@UCkQLMKbkhyCDJmY1MEcXnLQ

#### URLs
- https://youtu.be/ZUvDO2g5Y1s
- https://github.com/davepl/ThirdBrakeLight
- https://amzn.to/3R0jKHm
- https://www.youtube.com/@UCkQLMKbkhyCDJmY1MEcXnLQ
