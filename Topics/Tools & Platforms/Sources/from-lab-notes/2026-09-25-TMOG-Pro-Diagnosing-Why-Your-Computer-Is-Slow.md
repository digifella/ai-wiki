---
wiki-ingested: true
title: "TMOG Pro: Diagnosing Why Your Computer Is Slow"
date: 2026-09-25
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: developer-tooling-clis
type: "source-summary"
aliases:
  - "lab-notes/2026-09-25-TMOG-Pro-Diagnosing-Why-Your-Computer-Is-Slow"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## TMOG Pro: Diagnosing Why Your Computer Is Slow
**Clip title:** Why Your Computer Is Slow — Task Manager Can't Tell You
**Author / channel:** Dave's Garage
**URL:** https://www.youtube.com/watch?v=z_mFHlUpC-g

### Summary
The video introduces TMOG Pro, a sophisticated system monitoring and diagnostic tool developed by the creator of the original Windows [[concepts/task-manager|Task Manager]]. Its core philosophy diverges from traditional task managers, which primarily report "what" is happening in real-time. Instead, TMOG Pro aims to reveal "why" performance issues occur, and crucially, to capture and analyze system behavior from past events, even when no one was actively observing. The developer illustrates this by intentionally "breaking" his computer in various ways and using TMOG Pro to diagnose the root causes.

The demonstration begins with CPU-related slowdowns. Unlike generic CPU utilization percentages, TMOG Pro offers granular insight, differentiating between activity on performance and efficiency cores in modern processors. This allows users to understand not just that the CPU is busy, but *where* the work is being processed. The speaker emphasizes the distinction between mere "measurement" (like a thermometer indicating fever) and "diagnosis" (identifying the cause of the fever). This diagnostic approach extends to [[concepts/memory|memory]], where TMOG Pro highlights "[[concepts/memory|memory]] [[concepts/pressure|pressure]]" rather than just total memory usage, indicating when the operating system is struggling to manage resources. The creator shares a personal anecdote about developing the tool during hospital visits with his child, using the time to implement decades of accumulated ideas for a more insightful task manager.

Further diagnostic capabilities are showcased with disk and power issues. For disk performance, TMOG Pro helps identify if slowdowns are due to processes waiting for disk access or insufficient free space, offering tools like the "Disk Space Wizard" for visual mapping of storage consumption. When addressing laptop battery life, the tool monitors real-time power consumption, temperature, and fan activity. This reveals if a program is excessively draining power, potentially causing thermal throttling that slows the computer down, even if CPU utilization appears normal. The goal is always to trace a vague symptom back to its specific cause, rather than applying a generalized "fix."

Two particularly innovative features are the "Flight Recorder" and "Benchmarks." The Flight Recorder continuously logs system telemetry, allowing users to replay past performance events and pinpoint the exact moment and cause of a problem, even after it has resolved. This is critical for diagnosing intermittent or transient issues. The built-in benchmark suite generates a comprehensive "TMOG Score," providing a quantifiable baseline for comparison, whether against other systems, or the same machine before and after hardware or software changes. The developer stresses that TMOG is designed as a precision instrumentation tool, offering robust, native applications across Windows, macOS, and Linux, ensuring accurate and trustworthy data for deep system diagnostics beyond just a superficial overview. A free version is available at tmog.org, encouraging users to discover hidden insights about their own computer's performance.

### Video Description & Links
#### Description
I wrote the original Windows Task Manager. Then I broke this PC in four different ways — CPU, memory, disk, and power — and showed why the usual Task Manager diagnosis is looking at the wrong suspect.

#### Tags
`task manager`, `windows nt`, `windows xp`, `windows vista`, `windows 10`, `compatible`

## Related Concepts
- [[concepts/tmog-pro|TMOG Pro]]
- [[concepts/tmog-pro|system monitoring]] — [Wikipedia](https://en.wikipedia.org/wiki/System_monitor)
- [[concepts/performance-diagnostics|performance diagnostics]]
- [[concepts/task-manager|Task Manager]] — [Wikipedia](https://en.wikipedia.org/wiki/Task_manager)
- [[concepts/system-behavior-analysis|system behavior analysis]]
- memory [[concepts/pressure|pressure]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory_hierarchy)
- thermal throttling — [Wikipedia](https://en.wikipedia.org/wiki/Thermal_design_power)
- Flight Recorder — [Wikipedia](https://en.wikipedia.org/wiki/Flight_recorder)
- [[concepts/performance-benchmarking|performance benchmarking]]
- root cause analysis — [Wikipedia](https://en.wikipedia.org/wiki/Root-cause_analysis)

## Related Entities
- [[entities/daves-garage|Dave's Garage]] — [Wikipedia](https://en.wikipedia.org/wiki/Dave_Plummer)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- Windows Task Manager — [Wikipedia](https://en.wikipedia.org/wiki/Task_Manager_%28Windows%29)
- Windows — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Windows)
- macOS — [Wikipedia](https://en.wikipedia.org/wiki/MacOS)
- Linux — [Wikipedia](https://en.wikipedia.org/wiki/Linux)
- Windows NT — [Wikipedia](https://en.wikipedia.org/wiki/Windows_NT)
- Windows XP — [Wikipedia](https://en.wikipedia.org/wiki/Windows_XP)
- Windows Vista — [Wikipedia](https://en.wikipedia.org/wiki/Windows_Vista)
- Windows 10 — [Wikipedia](https://en.wikipedia.org/wiki/Windows_10)