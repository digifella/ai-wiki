---
wiki-ingested: true
title: 1970 Lincoln Continental Mark III Hidden RGB LED Third Brake Light Integration
date: 2026-06-26
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: apis-integrations-mcp
type: "source-summary"
aliases:
  - "lab-notes/2026-06-26-1970-Lincoln-Continental-Mark-III-Hidden-RGB-LED-Third-B"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## 1970 Lincoln Continental Mark III Hidden RGB LED Third Brake Light Integration
**Clip title:** The Secret RGB LED Features I Hid in this 1970 Lincoln Continental Mark III
**[[entities/tasia-custode|Author]] / channel:** [[entities/dave|Dave's Garage]]
**URL:** https://www.youtube.com/watch?v=hRhBuHJ-j_o

### Summary
The video details the intricate process of adding a modern, high-mounted third brake [[concepts/light|light]] to a vintage [[concepts/1970-lincoln-continental-mark-iii|1970 Lincoln Continental Mark III]], emphasizing the hidden [[entities/national-academies|engineering]] complexities involved in integrating new technology with a classic vehicle. The main challenge was to enhance safety without compromising the car's original aesthetic or electrical [[concepts/honesty|integrity]]. Given that the Mark III, with its limited head and neck support, predates modern safety features like the Center High Mounted Stop Lamp (CHMSL), the project aimed to provide a visible, unambiguous brake signal to alert [[concepts/causes|drivers]] of larger, newer vehicles in traffic.

The [[concepts/solution|solution]] involved discreetly installing a six-foot addressable LED strip in a narrow, half-inch gap above the rear bumper, making it completely invisible when inactive. To achieve this, a custom circuit board was developed, featuring an ESP32 microcontroller, a buck converter for a clean 5V power supply, and optocouplers for signal [[concepts/disconnection|isolation]]. The optocouplers were crucial for safely translating the old car's noisy, fluctuating 12V signals (left/right turn, brake, reverse) into reliable digital inputs for the microcontroller, without electrically coupling the two distinct systems.

The core of the project lay in the software's "translation layer," specifically a state machine designed to interpret the car's ambiguous electrical signals. Unlike modern vehicles with digital communication buses (CAN bus), the 1970 Lincoln uses shared bulbs for brake and turn signals, requiring the microcontroller to infer the driver's intent. The state machine monitors signal timing and context to differentiate between braking, turning, or combinations thereof, prioritizing the brake signal for immediate and clear communication. The LED strip then displays semantically meaningful animations, such as a red "bloom" for braking, amber sweeps for turn signals, and white for reverse, all synchronized with the original vehicle's flasher timing. An "emergency" red and blue strobe mode was also included for demonstration, isolated to prevent accidental activation on public roads.

Ultimately, the project serves as a compelling case study in embedded systems design, highlighting how constraints can lead to elegant solutions. The modification is parasitic, observing the car's signals without altering its factory wiring, ensuring that the original lighting functions remain intact even if the new system fails. This careful approach maintains the car's authenticity while significantly improving rear-end visibility and driver safety. The successful integration demonstrates that thoughtful [[entities/national-academies|engineering]] can bridge decades of technological advancement, enhancing functionality without sacrificing the timeless appeal of a classic.

### Video Description & Links
#### Description
https://youtu.be/ZUvDO2g5Y1s

Get the Code: https://github.com/davepl/ThirdBrakeLight

#### URLs
- https://youtu.be/ZUvDO2g5Y1s
- https://github.com/davepl/ThirdBrakeLight

## Related Concepts
- [[concepts/third-brake-light|Third Brake Light]] — [Wikipedia](https://en.wikipedia.org/wiki/Automotive_lighting)
- [[concepts/rgb-led|RGB LED]] — [Wikipedia](https://en.wikipedia.org/wiki/Light-emitting_diode)
- [[concepts/vintage-car-restoration|Vintage Car Restoration]]
- [[concepts/electrical-integration|Electrical Integration]]
- [[concepts/hidden-engineering|Hidden Engineering]]
- [[concepts/automotive-safety|Automotive Safety]] — [Wikipedia](https://en.wikipedia.org/wiki/Automotive_safety)
- [[concepts/classic-car-modification|Classic Car Modification]]
- [[concepts/1970-lincoln-continental-mark-iii|1970 Lincoln Continental Mark III]]
- [[concepts/rgb-led|RGB LED Integration]]
- [[concepts/printed-circuit-board-pcb|Embedded Systems]] — [Wikipedia](https://en.wikipedia.org/wiki/Embedded_system)
- Signal [[concepts/disconnection|Isolation]]
- Optocouplers — [Wikipedia](https://en.wikipedia.org/wiki/Opto-isolator)
- State Machine [[concepts/open-source-philosophy|Logic]]
- Buck Converter — [Wikipedia](https://en.wikipedia.org/wiki/Buck_converter)

## Related Entities
- [[entities/daves-garage|Dave's Garage]] — [Wikipedia](https://en.wikipedia.org/wiki/Dave_Plummer)
- [[entities/dave-plummer|Dave Plummer]] — [Wikipedia](https://en.wikipedia.org/wiki/Dave_Plummer)
- ESP32 — [Wikipedia](https://en.wikipedia.org/wiki/ESP32)
- EasyEDA — [Wikipedia](https://en.wikipedia.org/wiki/EasyEDA)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- [[entities/amazon|Amazon]]
- ShopTalk — [Wikipedia](https://en.wikipedia.org/wiki/Shop_Talk)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]