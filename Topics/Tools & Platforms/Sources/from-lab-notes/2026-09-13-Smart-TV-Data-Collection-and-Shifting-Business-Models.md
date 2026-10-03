---
wiki-ingested: true
title: Smart TV Data Collection and Shifting Business Models
date: 2026-09-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
type: "source-summary"
aliases:
  - "lab-notes/2026-09-13-Smart-TV-Data-Collection-and-Shifting-Business-Models"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Smart TV Data Collection and Shifting Business Models
**Clip title:** LG Isn't the Only TV Company Spying on You
**Author / channel:** RTINGS R&D
**URL:** https://www.youtube.com/watch?v=IvFu343KNek

### Summary
This video critically examines the surprising affordability of modern smart TVs, attributing their low price not to hardware innovation, but to a fundamental shift in business models. Unlike 15 years ago when TVs cost thousands, today they can be purchased for under $500, even as most other products inflate in price. The video highlights that companies like [[entities/vizio|Vizio]], which was recently acquired by [[entities/walmart|Walmart]] for its SmartCast operating system, often lose money on TV hardware sales. Their true profitability, and the reason for such acquisitions, lies in the "Platform+" segment – primarily through advertising, data collection, and services. Essentially, the user and their viewing data have become the real product being sold.

The core mechanism for this data collection is Automatic Content Recognition (ACR). Smart TVs use ACR to "Shazam" virtually everything displayed on screen, from streaming apps like Netflix and Plex to content played via external devices such as gaming consoles, laptops, or USB drives. This process creates digital fingerprints of viewed content, which are then sent to company servers for identification and profiling. The video's testing of 15 different devices (smart TVs, streaming boxes, and monitors) revealed inconsistent behavior. While some TVs, like the Samsung S95F, clearly stopped sending ACR-related data bursts when the feature was disabled, others, such as the TCL QM8K, merged this data with regular background communication, making it difficult to verify if disabling ACR was truly effective.

A significant takeaway is the prevalent "informed consent problem" in the [[concepts/smart-tv|smart TV]] industry. Opting out of ACR and similar data collection features is often deliberately complex and confusing. The video showcases how [[concepts/privacy|privacy]] settings are frequently buried in lengthy legal terms with ambiguous language (e.g., "[[concepts/privacy|Privacy]] Agreement," "Smart TV Experience," "Enhanced Viewing," "Viewing Data"). Roku OS was presented as a particularly egregious example, requiring users to agree to voice remote data collection (which implicitly includes ACR viewing data collection) just to proceed with basic setup, without clear initial disclosure. Similarly, Vizio mandates logging in with a Vizio or Walmart account and warns that declining any data terms will disable all smart features, with the only recourse for withdrawing consent after acceptance being a full factory reset.

Ultimately, consumers face a difficult choice regarding their data privacy with smart TVs. While workarounds exist, such as fully disconnecting the TV from the internet (thus sacrificing built-in smart apps), using external streaming devices (which merely shifts the data collection responsibility to another company, often with similar business models), or implementing network-level blocking like a Pi-hole, these all come with trade-offs in functionality or convenience. The video concludes that true resolution to these opaque privacy practices will likely require legal and regulatory intervention, emphasizing that the low cost of smart TVs directly reflects the value manufacturers place on collecting and monetizing user viewing habits and personal data.

### Video Description & Links
#### Description
Whoops! Are you sure that you want to disable data collection on your TV? Walmart, Roku, and other TV companies sure would love for you not to. It may mean missing out on the smart features of your TV, but that's the price we're being asked to pay for our TVs now—often without true informed consent. 

Links
Read more about our full investigation: https://www.rtings.com/tv/learn/research/smart-tv-data-privacy 

Our VPN privacy investigation: https://youtu.be/-i_BB2uFYYA  

Learn how to set up a pi-hole to block ACR at the network level: https://docs.pi-hole.net/main/basic-install/  

---
00:00 Intro 
00:22 You're the product 
00:56 ACR Explained 
01:19 How we tested 
01:58 The data 
02:40 Everything you plug into your TV is tracked 
03:11 Why is this happening 
03:26 People don't know this is happening 
04:16 Beam me up, Roku (you can't opt out) 
05:04 Every TV calls ACR something different 
05:30 Enhanced (ACR) "Picture Mode" 
05:45 All hail Wal-Mart 
06:14 Just ask Tozzi 
06:37 What can you actually do about it? 
07:18 Streaming scheming 
08:04 Informed consent problem 
08:25 Lawful solutions 
08:47 Is it worth it? 
---

SUPPORT US 
Careers: https://grnh.se/eb4de72f7us

#### Tags
`rtings`, `rtings review`, `rtings testing`, `smart tvs`, `data tracking`, `tv data`, `data spying`, `spying on you`, `tracking data`, `dumb tvs`, `Smart TV`, `tv`, `acr`, `automatic content recognition`, `spyware`, `surveilance`, `targeted advertising`, `privacy`, `digital rights`, `advertising`, `you are the product`

#### URLs
- https://www.rtings.com/tv/learn/research/smart-tv-data-privacy
- https://youtu.be/-i_BB2uFYYA
- https://docs.pi-hole.net/main/basic-install/
- https://grnh.se/eb4de72f7us

## Related Concepts
- [[concepts/smart-tv|Smart TV]] — [Wikipedia](https://en.wikipedia.org/wiki/Smart_TV)
- [[concepts/ubuntu|data collection]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_collection)
- [[concepts/business-model|business model]] — [Wikipedia](https://en.wikipedia.org/wiki/Business_model)
- [[concepts/hardware-pricing|hardware pricing]]
- [[concepts/ubuntu|operating system]] — [Wikipedia](https://en.wikipedia.org/wiki/Operating_system)
- Automatic Content Recognition — [Wikipedia](https://en.wikipedia.org/wiki/Automatic_content_recognition)
- [[concepts/adobe-camera-raw|ACR]]
- Informed Consent — [Wikipedia](https://en.wikipedia.org/wiki/Informed_consent)
- Privacy Settings — [Wikipedia](https://en.wikipedia.org/wiki/Privacy_settings)
- Advertising Revenue — [Wikipedia](https://en.wikipedia.org/wiki/Advertising_revenue)
- Viewing Data — [Wikipedia](https://en.wikipedia.org/wiki/Audience_measurement)
- Pi-hole — [Wikipedia](https://en.wikipedia.org/wiki/Pi-hole)

## Related Entities
- [[entities/lg|LG]] — [Wikipedia](https://en.wikipedia.org/wiki/LG)
- [[entities/vizio|Vizio]] — [Wikipedia](https://en.wikipedia.org/wiki/Vizio)
- [[entities/walmart|Walmart]] — [Wikipedia](https://en.wikipedia.org/wiki/Walmart)
- [[entities/rtings-rd|RTINGS R&D]]
- Samsung — [Wikipedia](https://en.wikipedia.org/wiki/Samsung)
- Roku — [Wikipedia](https://en.wikipedia.org/wiki/Roku)
- Netflix — [Wikipedia](https://en.wikipedia.org/wiki/Netflix)
- Plex — [Wikipedia](https://en.wikipedia.org/wiki/Plex)
- Roku OS — [Wikipedia](https://en.wikipedia.org/wiki/Roku_OS)