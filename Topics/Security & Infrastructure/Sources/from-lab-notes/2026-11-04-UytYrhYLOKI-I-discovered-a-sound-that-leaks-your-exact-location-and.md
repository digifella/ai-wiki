---
selected-topic: "Security & Infrastructure"
wiki-ready: true
review-status: "approved"
lab-review-id: 9fad52245a233d16446c
suggested-topic: "Undecided"
domain: "security-infrastructure"
title: "I discovered a sound that leaks your exact location (and it's everywhere)"
date: 2026-11-04
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-04-UytYrhYLOKI-I-discovered-a-sound-that-leaks-your-exact-location-and"
credibility_tier: 1
credibility_label: "Commentary"
---
## I discovered a sound that leaks your exact location (and it's everywhere)
**Clip title:** I discovered a sound that leaks your exact location (and it's everywhere)
**Author / channel:** colsto
**URL:** https://www.youtube.com/watch?v=UytYrhYLOKI
**Credibility:** Commentary (tier 1 of 5). YouTube video from colsto: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary

### **Main Topic**
The video explores an advanced technique of geolocation using open-source intelligence (OSINT), specifically by analyzing background airplane sounds and Doppler curves captured in an audio recording.

### **Key Points Discussed**
- **Introduction to Doppler Curves:** The speaker introduces Doppler curves as a powerful geolocation clue present in audio recordings. When an airplane passes, the sound of its engines shifts in frequency (the Doppler effect), which can be mapped to determine the aircraft's speed, closest point of approach (CPA), and trajectory.
- **Data Collection and Filtering:** The speaker gathered ADS-B data (flight path data) for the continental United States for a specific day. They used this vast dataset alongside DEMs (Digital Elevation Models) and 3D physics modeling to filter and match flight paths with the Doppler curves found in the audio.
- **Methodology & Constraints:** By analyzing two distinct flight events separated by a specific time interval, the speaker applied spatial, temporal, and silence filters to narrow down potential candidate points. They calculated the delayed CPA time and accounted for measurement errors to score and rank possible locations.
- **Scoring & Verification:** The speaker detailed how they scored candidate points by comparing modeled Doppler curves with actual spectrogram data from the recording. By testing and refining these filters, they successfully identified the exact location where the recording was made, down to a specific street view in Oyster Bay, New York.

### **Conclusions and Takeaways**
- **The Power of Acoustic OSINT:** The video demonstrates that even subtle background noises, such as the faint sound of passing airplanes, can contain enough data to precisely geolocate an audio recording.
- **Privacy Implications:** The speaker notes that modern recording devices and ambient sounds can unintentionally leak precise location data, highlighting the hidden risks in everyday audio recordings.

### Video Description & Links
#### Description
This video examines the amount of location information carried by inaudible background sounds, using the Doppler effect to locate a reference recording within ~100m, and only needing (in some cases) less 1-min of audio. This video raises awareness of these capabilities and closes by discussing preventative measures one could take.

Methodology: 
Aircraft position, altitude, and velocity data were sourced from ADS-B data and filtered in Python using ICAO type-code classification for propeller vs jet types. For each candidate location on a 200m grid, the closest point of approach (CPA) and sound propagation delay were computed from 3D slant distance, using a digital elevation model (DEM).

Doppler curve spectrogram measurements constrained each event's velocity and CPA slant distance. Candidates were then filtered by the 920-second offset between two flyovers, plus a silence constraint. The exact Doppler curve each candidate would hear was modelled, using emission-time radial velocity from interpolated ADS-B data. 

Modelled doppler curves were scored against the observed spectrogram using a locked two-event scoring method. This corrected for measurement error on CPA time & fundamental frequency, while preserving the purely physics-derived temporal offset between the two events.

The pipeline was repeated again for a single 1-min clip of known time, US-wide search, and again, successfully scored the true location 1st.

Lastly, preventative measures were assessed, including rationale behind why common signal processing fixes fail (high-pass filtering, drowning out, and phone call compression/noise reduction).

This video is an educational demonstration of acoustics, signal processing, and data analysis using publicly available data. No code or tools are being released.

Link to full recording: https://youtu.be/4CxVxuMVkMc

#### URLs
- https://youtu.be/4CxVxuMVkMc
