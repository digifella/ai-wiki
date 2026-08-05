---
wiki-ingested: true
title: "Europe-wide GPS Jamming Events: Satellite Source Investigation Summary"
date: 2026-06-05
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: applied-ai-workflows
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-05 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

## Europe-wide GPS Jamming Events: Satellite Source Investigation Summary
**Clip title:** Something is jamming GPS over [[entities/europe|Europe]]. Here's what we found
**Author / channel:** Veritasium
**URL:** https://www.youtube.com/watch?v=tz23G_UXCGA

### Summary
In November 2024, Professor Todd Humphreys, a GPS expert, received a mysterious tip-off about unusual data from 2021. Investigating a dataset collected by a network of GPS monitoring stations across [[entities/europe|Europe]], he and his student, [[entities/zack-clements|Zack Clements]], discovered something surprising: [[concepts/assistive-technology|at]] precise moments on 75 days since 2019, receivers across the network reported a sudden, simultaneous drop in their [[concepts/camera-raw|signal-to-noise ratio]]. This indicated that navigation signals were being overwhelmed. The disruption spanned across Europe, from Svalbard in the north to Spain in the south, and as far west as Canada and east as Poland, with the blast center appearing to be in Poland or Kaliningrad. Initial hypotheses of ground-based interference were dismissed because such a broad effect cannot be caused by terrestrial sources due to the Earth's curvature. Similarly, solar interference was ruled out because the events were too brief (3-5 seconds) and confined to a narrow frequency band (5 MHz wide, centered [[concepts/assistive-technology|at]] 1577.5 MHz), unlike typical broadband solar bursts. The only plausible explanation for such wide-area, simultaneous impact was a source high above the Earth, at least 1,200 km up, pointing to a satellite.

The subsequent investigation involved sifting through orbital mechanics to identify the potential culprits. Using constraints that the source must have been visible to all affected stations simultaneously, researchers narrowed down over 15,000 active satellites to 14 primary suspects. One candidate, an Algerian satellite, was ruled out after further analysis showed it was also a victim of the interference, not the source. The remaining satellites lacked sufficient public documentation to confirm their capabilities, leading to a standstill. The breakthrough came with raw radio signal data from two specialized receivers in the Netherlands and Norway. This high-resolution data allowed for precise measurement of the tiny time difference in which the jamming signal arrived at each station. By comparing these measurements to the known orbital paths of all satellites, a single culprit emerged: a Russian satellite, Cosmos 2546. This satellite is part of a six-satellite constellation in a Molniya orbit, forming [[entities/russia|Russia]]'s early missile warning system. These highly elliptical orbits allow satellites to linger high over the Northern Hemisphere, providing extensive coverage.

Professor Humphreys theorizes that these observed interference events are likely intentional periodic tests of a powerful jamming capability, rather than accidental malfunctions or full-scale [[concepts/deployment|deployment]]. This is supported by the signal being immensely powerful but slightly offset from the exact GPS frequency—a tactic that would allow [[concepts/testing|testing]] without causing full disruption, reserving that for a potential "hot [[concepts/conflict|conflict]]." The raw data further revealed a second, similar interference burst targeting signals from the Chinese BeiDou navigation system. This military-grade capability, operating from space, represents a significant escalation in electronic warfare. The potential impact of its full [[concepts/deployment|deployment]] is enormous, affecting critical infrastructure from aviation and global shipping to financial systems, cellular networks, and ride-hailing services, causing widespread disruption and fear globally.

The findings underscore the extreme [[concepts/vulnerability|vulnerability]] of modern society's pervasive reliance on Global Navigation Satellite Systems (GNSS). As an "invisible utility," GNSS underpins almost every aspect of contemporary technology and daily life. To mitigate this threat, experts advocate for the development of resilient Position, Navigation, and Timing ([[concepts/prime-number-theorem|PNT]]) architectures. These systems would incorporate diverse phenomena like signals from terrestrial broadcasts, fiber optic cables for [[concepts/secure|secure]] time synchronization via atomic clocks, and advanced quantum navigation systems that do not rely on external signals. Countries like South Korea, [[entities/china|China]], and the [[entities/uk|UK]] are already investing in building such resilient backups. Despite these ongoing efforts, most nations, including the [[entities/united-states|United States]], remain heavily dependent on the fragile satellite signals, making continued research and development in resilient [[concepts/prime-number-theorem|PNT]] solutions critical.

### Video Description & Links
#### Description
Something is disrupting GPS signals across Europe. Sponsored by Ground News. Go to https://ground.news/Ve for 40% off the unlimited Vantage plan. 

If you’re looking for a molecular modelling kit, try Snatoms, a kit I invented where the atoms snap together magnetically - https://ve42.co/SnatomsV

Sign up for the Veritasium newsletter for weekly [[concepts/science|science]] updates - https://ve42.co/Newsletter

▀▀▀
0:00 What is jamming Europe’s GPS?
4:43 How does GPS work?
10:46 How easy is it to jam GPS?
12:18 The Hunt To Find The Jammer
17:12 Who are the possible culprits?
20:06 The Investigation Goes Public
23:00 Narrowing In On The Jammer
25:15 Cosmos 2546
28:25 A Secret [[concepts/communication|Messaging]] Service?
29:19 What happens if we lose GPS?

▀▀▀
Special thanks to the experts and collaborators who made this video possible:

Professor Todd Humphreys and Dr Zach Clements at the University of [[entities/texas|Texas]] at Austin, whose research this story is based on - thank you for sharing your data, your time, and the inside story of the hunt.

Ramsey Faragher, for the brilliant interview, [[concepts/feedback|feedback]] and stories that helped to shape this video.

[[concepts/feynman|Richard]] D. Easton, for helping [[entities/us|us]] understand the history of GPS. 

Dana Goward, President of the Resilient Navigation and Timing Foundation, for providing context on interference and alternative systems.

Richard Bowden and Luis Enrique Aguado from GMV for sharing their independent work tracing the source of the interference.

Ben Watts, for sharing his first-hand [[concepts/experience|experience]] of GPS jamming and spoofing from the cockpit.

KeepTrack (https://keeptrack.space/) for generously giving us access to their satellite-tracking [[concepts/software|software]], which we used to visualise the search through 15,000 satellites for the culprit. And to GPSWise (https://gpswise.aero/) for kindly providing their software which we used to visualise GPS jamming and spoofing.

Bartosz Ciechanowski, whose interactive GPS explainer (https://ciechanow.ski/gps/) was a great resource for research and the basis for one of our technical animations.  Thank you for allowing us to build on your work.

▀▀▀
References:

Clements, Z. L., Kriezis, A., & Humphreys, T. E. (2026). Chasing Lightning: Detecting, Characterizing, and Identifying a Powerful Space-Based GNSS Interference  - https://ve42.co/GNSSInterference

The rest here: https://ve42.co/GPSJammingRefs

▀▀▀
Special thanks to our Patreon supporters:
Adam Foreman, Albert Wenger, Alex Porter, Alexander Tamas, André Powell, Anton Ragin, Balkrishna Heroor, Bertrand Serlet, Blake Byers, Bruce, Bryan Ackermann, Chris Brewer, Data Don, [[entities/dave|Dave]] Kircher, [[entities/david|David]] Johnston, David Tseng, EJ Alexandra, Evgeny Skvortsov, Garrett Mueller, Gnare, gpoly, Hayden Christensen, Hong Thai Le, Ibby Hadeed, Jeromy Johnson, Jesse Brandsoy, Juan Benet, Kelcey Steele, KeyWestr, Kyi, Lee Redden, Marinus Kuivenhoven, Mark Heising, Martin Paull, Meekay, [[entities/meg|meg]] noah, [[entities/michael|Michael]] Krugman, Moebiusol - Cristian, Orlando Bassotto, Parsee [[concepts/health|Health]], [[entities/paul|Paul]] Peijzel, Richard Sundvall, Robson, Sam Lutfi, Shalva Bukia, Sinan Taifour, Tj Steyn, Ubiquity Ventures, Vahe Andonians, wolfee


▀▀▀
Writer, Producer & Director: Emilia Gyles
Presenters: Derek Muller & Gregor Čavlović
Editor: [[entities/peter-omara|Peter]] Nelson
Asst. Editor & Sound Designer: James Stuart
Animators: Domonkos Józsa, Emma Wright, Alex Drakoulis & Andrew Neet
Illustrators: Jakub Misiek & Maria Gusakovich
Stop Motion: Sulli Yost
Researchers: Aakash Singh Bagga, Sophia Rose & Callum Cuttle
Thumbnail Designers: Abdallah Rabah, Ren Hurley, Ben Powell & [[entities/daniel-miessler|Daniel]] Ellacott
Production Team: Jess Bishop-Laggett, Matthew Cavanagh & Anna Milkovic
Executive Producers: Casper Mebius, Derek Muller & Gregor Čavlović

Additional video/photos supplied by Getty [[concepts/images|Images]] and Storyblocks
Music from Epidemic Sound

#### Tags
`veritasium`, `science`, `physics`, `Veritasium`, `engineering`, `gps`, `gps jamming`, `jamming`, `satellite`, `europe`, `russia`, `russian gps jamming`, `aeroplane`, `airplane`, `airplane gps`, `gps satellites`, `experiment`, `navigation`, `gnss`, `jammer`

#### URLs
- https://ground.news/Ve
- https://ve42.co/SnatomsV
- https://ve42.co/Newsletter
- https://keeptrack.space/
- https://gpswise.aero/
- https://ciechanow.ski/gps/
- https://ve42.co/GNSSInterference
- https://ve42.co/GPSJammingRefs

## Related Concepts
- [[concepts/gps-jamming|GPS jamming]] — [Wikipedia](https://en.wikipedia.org/wiki/GPS_jamming)
- [[concepts/satellite-source-investigation|satellite source investigation]] — [Wikipedia](https://en.wikipedia.org/wiki/satellite_source_investigation)
- [[concepts/camera-raw|signal-to-noise ratio]] — [Wikipedia](https://en.wikipedia.org/wiki/signal-to-noise_ratio)
- [[concepts/thematic-analysis|data analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/data_analysis)
- Orbital Mechanics — [Wikipedia](https://en.wikipedia.org/wiki/Orbital_Mechanics)
- Molniya Orbit — [Wikipedia](https://en.wikipedia.org/wiki/Molniya_Orbit)
- Electronic Warfare — [Wikipedia](https://en.wikipedia.org/wiki/Electronic_Warfare)
- GNSS [[concepts/vulnerability|Vulnerability]] — [Wikipedia](https://en.wikipedia.org/wiki/GNSS_Vulnerability)
- Space-Based Interference — [Wikipedia](https://en.wikipedia.org/wiki/Space-Based_Interference)
- Radio Signal Analysis — [Wikipedia](https://en.wikipedia.org/wiki/Radio_Signal_Analysis)
- Molniya Constellation — [Wikipedia](https://en.wikipedia.org/wiki/Molniya_Constellation)
- Missile Warning System — [Wikipedia](https://en.wikipedia.org/wiki/Missile_Warning_System)
- BeiDou Navigation System — [Wikipedia](https://en.wikipedia.org/wiki/BeiDou_Navigation_System)
- Terrestrial Interference — [Wikipedia](https://en.wikipedia.org/wiki/Terrestrial_Interference)
- Solar Interference — [Wikipedia](https://en.wikipedia.org/wiki/Solar_Interference)
- Frequency Offset — [Wikipedia](https://en.wikipedia.org/wiki/Frequency_Offset)
- Resilient Infrastructure — [Wikipedia](https://en.wikipedia.org/wiki/Resilient_Infrastructure)

## Related Entities
- Professor Todd Humphreys — [Wikipedia](https://en.wikipedia.org/wiki/Professor_Todd_Humphreys)
- [[entities/zack-clements|Zack Clements]] — [Wikipedia](https://en.wikipedia.org/wiki/Zack_Clements)
- Todd Humphreys — [Wikipedia](https://en.wikipedia.org/wiki/Todd_Humphreys)
- [[entities/veritasium|Veritasium]] — [Wikipedia](https://en.wikipedia.org/wiki/Veritasium)
- Cosmos 2546 — [Wikipedia](https://en.wikipedia.org/wiki/Cosmos_2546)
- [[entities/russia|Russia]] — [Wikipedia](https://en.wikipedia.org/wiki/Russia)
- Algeria — [Wikipedia](https://en.wikipedia.org/wiki/Algeria)
- Poland — [Wikipedia](https://en.wikipedia.org/wiki/Poland)
- Kaliningrad — [Wikipedia](https://en.wikipedia.org/wiki/Kaliningrad)
- Svalbard — [Wikipedia](https://en.wikipedia.org/wiki/Svalbard)
- Spain — [Wikipedia](https://en.wikipedia.org/wiki/Spain)
- Canada — [Wikipedia](https://en.wikipedia.org/wiki/Canada)
- Netherlands — [Wikipedia](https://en.wikipedia.org/wiki/Netherlands)