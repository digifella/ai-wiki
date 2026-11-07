---
wiki-ingested: true
title: "PDP-11/73 Modernization: Overcoming Hardware/Software Challenges to Host Public Website"
date: 2026-10-05
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: tools-platforms-infrastructure
group: web-publishing-quartz-websites
aliases:
  - "lab-notes/2026-10-05-PDP-1173-Modernization-Overcoming-HardwareSoftware-Chall"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## PDP-11/73 Modernization: Overcoming Hardware/Software Challenges to Host Public Website
**Clip title:** My Computer is now 4× Faster! That’s Why It Won’t Boot...
**[[entities/tasia-custode|Author]] / channel:** [[entities/dave-plummer|Dave]]'s Garage
**URL:** https://www.youtube.com/watch?v=EzfHqE9-rbY

### Summary
The video chronicles a fascinating journey of bringing a vintage [[concepts/pdp-1173|PDP-11/73]] computer, a relic from the mid-1970s, into the modern internet age. The main topic revolves around the intricate challenges and eventual triumph of upgrading, troubleshooting, and integrating this decades-old hardware and its [[concepts/211bsd|2.11BSD]] [[concepts/unix|Unix]] operating system with contemporary technologies to serve a public website and host an AI chatbot named "[[entities/gary|Gary]]." The [[entities/speaker|speaker]], [[entities/dave-plummer|Dave]], highlights the appealing aspect of working within an existing architecture to significantly enhance its capabilities.

The adventure began with the acquisition of a Mentec [[concepts/cpu|processor]] board, promising a substantial 400% [[concepts/speed|speed]] increase and 4MB of fast onboard [[concepts/memory|memory]] for the [[concepts/pdp-11-architecture|PDP-11]]. However, this upgrade initiated a cascade of technical hurdles. Initial attempts to boot revealed incompatibilities with the SCSI disk controller, necessitating meticulous hardware modifications, including soldering jumpers to properly configure the backplane's bus grant arrangements. Once the controller was recognized, a new problem emerged: the system couldn't boot from the SD card, traced back to an incompatible GUID Partition Table (GPT) layout, requiring a switch to a Master Boot Record (MBR) partition.

Further challenges arose with the operating system itself. The BSD kernel's floating-point unit (FPU) assumptions clashed with the new [[concepts/cpu|processor]], requiring modifications to enable a software floating-point simulator (FPSIM) and untangle related kernel configurations. Fitting the modified kernel into the [[concepts/pdp-11-architecture|PDP-11]]'s limited 64KB (or 128KB with [[concepts/memory|memory]] overlays) address space proved another complex task, with [[entities/chatgpt|ChatGPT]] assisting in generating appropriate makefiles. Even after successfully compiling a custom kernel and setting up networking, the system failed to reliably boot in its main chassis due to a timing incompatibility in the Mentec boot firmware. This critical issue was diagnosed by creating a custom diagnostic bootstrap using ChatGPT to generate octal machine code, which was then painstakingly loaded and analyzed through the serial [[concepts/cli|console]]. The [[concepts/solution|solution]] involved patching the firmware chip with increased polling iterations to allow the disk controller sufficient time to initialize.

With the PDP-11 finally booting reliably and connected to the internet, Dave integrated it into a sophisticated service architecture. Modern components like Cloudflare, Caddy, and Varnish handle public DNS, HTTPS, and [[concepts/caching|caching]] of static content, protecting the vintage machine from repetitive load. The PDP-11 serves dynamic elements and live kernel activity, while the AI chatbot "Gary" leverages powerful modern GPUs on a separate [[entities/linux|Linux]] machine for [[concepts/ai-inference|inference]]. This distributed approach allows the PDP-11 to contribute meaningfully without being overwhelmed. The project’s key takeaway is the successful synergy of diverse [[concepts/computation|computing]] generations: the PDP-11 handles its niche tasks, modern systems manage web traffic and heavy AI processing, and tools like ChatGPT accelerate complex [[concepts/debugging|debugging]] and [[concepts/code-generation|code generation]], ultimately giving a 40-year-old machine a practical and engaging new purpose.

### Video Description & Links
#### Description
A Mentec CPU made this PDP-11 about 4× faster. That is why it would not boot. Once it did, it went on the internet as pdp1173.com, serving a live UNIX process list and the front end for Gary, a curmudgeonly wizard whose answers come from a pair of modern GPUs.

The machine is still a PDP-11. The software still sees 2.11BSD. The faster board just ran the firmware’s wait [[concepts/loops|loops]] before the disk controller was ready.

Visit it: https://pdp1173.com

• A Mentec processor with 4MB on the board, roughly 4× my 11/73 and 8× my 11/44 on integer benchmarks
• Bus-grant jumpers, a ZuluSCSI that was reading an EFI partition, and a kernel that had to be told to fake floating point
• A diagnostic bootstrap pasted into ODT in octal, because the machine would not boot any other way
• The MSCP firmware’s polling limits, 40 and 100, raised to 256 in a RAM copy, then abandoned for a controller that answers in time
• Why a cached page from a PDP is the only way this site survives a [[entities/meta|Facebook]] link
• Gary: the page and the interface run on the PDP, the model runs on GPUs over a socket, and the credentials never touch 2.11BSD

Chapters
0:00 The machine, the site, and Gary
0:00 The Mentec, and why faster is not simpler
0:00 Spare backplane, bus grants, and a disk full of zeros
0:00 Floating point, overlays, and a kernel that fits in 64K
0:00 It boots on the bench, then refuses in the chassis
0:00 Pasting a bootstrap into ODT
0:00 The firmware was counting [[concepts/instructions|instructions]], not time
0:00 The CMD controller, and the numbers
0:00 pdp1173.com: cache, failover, and a live process list
0:00 Gary, and the 10% the GPUs do
0:00 Facebook appends a query string and breaks the path

If it [[entities/will|will]] not boot, it does not get a job. This one finally has one.

[[concepts/task-manager|Task Manager]], the way I wanted it: https://tmog.org

Drop a question mark on a real question and I will look for it to discuss on Shop Talk!  Check it out here: https://www.youtube.com/watch?v=c3EEs-O3bGE

#### URLs
- https://pdp1173.com
- https://tmog.org
- https://www.youtube.com/watch?v=c3EEs-O3bGE

## Related Concepts
- [[concepts/pdp-1173|PDP-11/73]] — [Wikipedia](https://en.wikipedia.org/wiki/PDP-11/73)
- [[concepts/211bsd|2.11BSD]]
- [[concepts/unix|Unix]] — [Wikipedia](https://en.wikipedia.org/wiki/Unix)
- [[concepts/vintage-computing|vintage computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrocomputing)
- [[concepts/hardware-modernization|hardware modernization]]
- [[concepts/system-integration|system integration]] — [Wikipedia](https://en.wikipedia.org/wiki/System_integration)
- [[concepts/internal-knowledge-base-bot|AI chatbot]] — [Wikipedia](https://en.wikipedia.org/wiki/Chatbot)
- Boot Firmware — [Wikipedia](https://en.wikipedia.org/wiki/Booting)
- [[concepts/wire-count|Cloudflare]] — [Wikipedia](https://en.wikipedia.org/wiki/Cloudflare)

## Related Entities
- [[entities/daves-garage|Dave's Garage]] — [Wikipedia](https://en.wikipedia.org/wiki/Dave_Plummer)
- [[entities/gary|Gary]]
- [[entities/dave|Dave]]
- PDP-11/73 — [Wikipedia](https://en.wikipedia.org/wiki/PDP-11/73)
- Unix — [Wikipedia](https://en.wikipedia.org/wiki/Unix)
- Mentec — [Wikipedia](https://en.wikipedia.org/wiki/Mentec)
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- Cloudflare — [Wikipedia](https://en.wikipedia.org/wiki/Cloudflare)
- Varnish — [Wikipedia](https://en.wikipedia.org/wiki/Varnish)