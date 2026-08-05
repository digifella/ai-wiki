---
wiki-ingested: true
title: "WSL Containers: Native Linux Containerization, Docker Hub Integration, GPU Passthrough"
date: 2026-07-04
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
type: "source-summary"
domain: tools-platforms-infrastructure
group: apis-integrations-mcp
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-07-04 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

## WSL Containers: Native Linux Containerization, Docker Hub Integration, GPU Passthrough
**Clip title:** Goodbye [[concepts/docker|Docker]], Hello Native WSL Containers - Run [[entities/linux|Linux]] Containers on [[entities/windows|Windows]]
**[[entities/tasia-custode|Author]] / channel:** Gary Explains
**URL:** https://www.youtube.com/watch?v=sF5opJgyh_A

### Summary
[[entities/microsoft|Microsoft]] has recently launched [[concepts/wsl-containers|WSL Containers]], a new [[concepts/containerization|containerization]] technology built directly into [[entities/wsl|Windows Subsystem for Linux]] (WSL). This offering is designed to be very similar in look and feel to [[concepts/docker|Docker]], utilizing familiar [[concepts/commands|commands]] and even pulling [[concepts/container-images|container images]] directly from [[entities/docker-hub|Docker Hub]]. The video demonstrates that WSL Containers are not a separate product [[concepts/installation|installation]] but rather a feature of WSL, requiring only a simple update to access. It emphasizes the ease with which users familiar with Docker can transition to WSL Containers due to the near-identical command structure and [[concepts/flags|flags]].

The video provides practical demonstrations of WSL Containers in action. It begins by showing how to update WSL to enable the new feature and verify its presence using the `wslc --help` command (or its alias `container --help`). Basic functionality is illustrated by running a simple "Hello [[entities/earth|World]]" message within a temporary [[entities/ubuntu|Ubuntu]] container, highlighting that the [[entities/ubuntu|Ubuntu]] image is pulled from Docker Hub. Further examples include confirming the downloaded image list, verifying the Ubuntu kernel and OS [[concepts/deployment|release]] within a container, and setting up an Nginx web server that maps a host port to the container's port, all managed through `wslc` [[concepts/commands|commands]]. A significant feature showcased is [[concepts/gpu-passthrough|GPU passthrough]], demonstrated by running a PyTorch container and confirming its ability to detect and utilize the host machine's [[entities/nvidia|NVIDIA]] GPU, enabling AI/ML workloads.

Regarding [[entities/microsoft|Microsoft]]'s [[concepts/motivation|motivation]] for introducing WSL Containers, the video acknowledges the common "embrace, extend, extinguish" criticism often leveled at Microsoft for adopting [[concepts/open-source|open-source]] technologies. However, it counters this by pointing out that both WSL and WSL Containers are entirely [[concepts/open-source|open-source]] projects, indicating no proprietary hidden agenda. Instead, the primary [[concepts/motivation|motivation]] appears to be enhancing [[entities/windows|Windows]] as a premier *[[concepts/developer|developer]] workstation*. Many popular development tools and frameworks, particularly in modern [[concepts/web-development|web development]] ([[concepts/typescript-development|TypeScript]], [[concepts/javascript|JavaScript]], [[concepts/react-framework|React]]) and AI/ML, are traditionally more straightforward to set up and use on [[entities/linux|Linux]] or [[entities/macos|macOS]] environments.

The conclusion posits that Microsoft's strategic goal is not to compete with Docker for production deployments (which often remain on Linux servers) but rather to lower the barrier to entry for developers who prefer or require Linux-native tools and containerized workflows on their local machines. By integrating robust container technology natively within Windows via WSL, Microsoft aims to keep developers on the Windows platform, offering them a seamless and powerful environment to build and test their applications without needing to switch operating systems or manage complex [[concepts/vps|virtual machine]] setups. This move ultimately makes Windows a more appealing and competitive platform for a diverse range of developers.

### Video Description & Links
#### Description
Microsoft has just released the first version of WSL Containers. This new feature of Windows Subsystem for Linux enables you to run Linux containers directly on Windows without using Docker.
---

X: https://twitter.com/garyexplains
[[entities/github|GitHub]]: https://github.com/garyexplains

#garyexplains

#### Tags
`Gary Explains`, `Tech`, `Explanation`, `Tutorial`, `WSL`, `Linux`, `Containers`, `WSL Containers`, `Docker`, `cloud-native`, `GPU passthru`, `GPU passthrough`

#### URLs
- https://twitter.com/garyexplains
- https://github.com/garyexplains

## Related Concepts
- [[concepts/wsl-containers|WSL Containers]] — [Wikipedia](https://en.wikipedia.org/wiki/WSL_Containers)
- [[concepts/native-linux-containerization|Native Linux Containerization]] — [Wikipedia](https://en.wikipedia.org/wiki/Native_Linux_Containerization)
- [[concepts/docker-hub-integration|Docker Hub Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/Docker_Hub_Integration)
- [[concepts/gpu-passthrough|GPU Passthrough]] — [Wikipedia](https://en.wikipedia.org/wiki/GPU_Passthrough)
- [[concepts/linux-commands|Windows Subsystem for Linux]] — [Wikipedia](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)
- [[concepts/container-images|Container Images]] — [Wikipedia](https://en.wikipedia.org/wiki/Container_Images)
- [[concepts/containerization-technology|Containerization Technology]] — [Wikipedia](https://en.wikipedia.org/wiki/Containerization_Technology)

## Related Entities
- [[entities/gary-explains|Gary Explains]] — [Wikipedia](https://en.wikipedia.org/wiki/Gary_Explains)
- [[entities/docker-hub|Docker Hub]] — [Wikipedia](https://en.wikipedia.org/wiki/Docker_Hub)