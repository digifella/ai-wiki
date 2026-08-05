---
wiki-ingested: true
title: "WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop"
date: 2026-07-07
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: deployment-docker-services
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-07-07 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop
**Clip title:** No more [[concepts/docker|Docker]] Desktop! [[concepts/native-linux-containerization|WSL Containers]] are here with wslc!
**[[entities/tasia-custode|Author]] / channel:** Ed Andersen
**URL:** https://www.youtube.com/watch?v=4mkSbJUZpLs

### Summary
This video introduces [[entities/microsoft|Microsoft]]'s native [[concepts/solution|solution]] for running [[concepts/docker-containers|Docker containers]] on [[entities/wsl|Windows Subsystem for Linux]] (WSL) using the `wslc` CLI, negating the need for [[entities/docker-desktop|Docker Desktop]] or other third-party [[concepts/container-management|container management]] tools. The presenter highlights this as a significant development, especially in [[concepts/light|light]] of Docker Desktop's shift to a paid model for many users, positioning `wslc` as a "rug-pull" antidote by providing container functionality built directly into [[entities/windows|Windows]].

The first step demonstrated is updating WSL to its latest pre-[[concepts/deployment|release]] version using `wsl --update --pre-release`, followed by verifying the `wslc` version (which should be 2.9.3.0 or higher to include container features). The core of the demonstration involves taking an existing ASP.NET Core [[concepts/web-application|web application]], "MVP [[concepts/love|Love]]," and containerizing it. A standard multi-stage `Dockerfile` is created, leveraging `mcr.microsoft.com/dotnet/sdk:10.0` for the build stage and `mcr.microsoft.com/dotnet/aspnet:10.0-runtime` for the runtime stage. Key steps in the Dockerfile include restoring dependencies, copying source code, executing a `dotnet run` command to fetch MVP profiles into a JSON file during the build, and finally publishing the application. A `.dockerignore` file is also utilized to optimize the build context.

The video then shows how to build the [[concepts/container-images|Docker image]] using the `wslc build -t mvp-love-image .` command, demonstrating the entire [[concepts/application-build|build process]], including fetching [[concepts/external-data|external data]]. After a successful build, the image is run using `wslc run -p 8080:8080 --name mvplove mvp-love-image`, mapping port 8080 from the container to the host. The application quickly starts, and the presenter successfully accesses it via `localhost:8080` in a browser, confirming it's running from within the WSL container.

The primary conclusion and takeaway is the newfound ability to natively build and run [[concepts/docker-containers|Docker containers]] on Windows machines without any external commercial or [[concepts/open-source|open-source]] tools like Docker Desktop, Podman, or Rancher. This integrated approach, enabled by the `wslc` CLI within WSL, streamlines the development workflow, reduces overhead, and eliminates potential [[concepts/licensing|licensing]] or procurement complexities, offering a seamless and cost-effective container [[concepts/experience|experience]] for Windows developers.

### Video Description & Links
#### Description
Finally we [[entities/will|will]] be able to run docker containers on Linux in [[entities/wsl2|WSL2]] with an entirely native solution on Windows without third party software like Docker Desktop or Podman or Rancher! Thank you Based Microsoft for this!

Full [[entities/google-docs|docs]]: https://learn.microsoft.com/en-us/windows/wsl/wsl-container

#coding #docker #dotnet

#### Tags
`C#`, `.NET`, `.NET 10`, `Microsoft`, `WSL`, `Windows Subsystem for Linux`, `containers`, `Docker`, `Docker Desktop alternative`, `wslc`, `programming`, `software development`, `web development`, `ASP.NET Core`, `tech tutorial`, `coding`, `developer tools`, `Podman`, `Rancher`

#### URLs
- https://learn.microsoft.com/en-us/windows/wsl/wsl-container

## Related Concepts
- [[concepts/wsl-containers|WSL Containers]] — [Wikipedia](https://en.wikipedia.org/wiki/WSL_Containers)
- [[concepts/wslc-cli|wslc CLI]] — [Wikipedia](https://en.wikipedia.org/wiki/wslc_CLI)
- [[concepts/docker-desktop|Docker Desktop]] — [Wikipedia](https://en.wikipedia.org/wiki/Docker_Desktop)
- [[concepts/wsl-containers|Container Runtime]] — [Wikipedia](https://en.wikipedia.org/wiki/Container_Runtime)
- [[concepts/linux-commands|Windows Subsystem for Linux]] — [Wikipedia](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)
- [[concepts/native-container-support|Native Container Support]] — [Wikipedia](https://en.wikipedia.org/wiki/Native_Container_Support)
- [[concepts/wsl-containers|Linux Containers]] — [Wikipedia](https://en.wikipedia.org/wiki/Linux_Containers)
- [[concepts/container-management|Container Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Container_Management)
- [[concepts/microsoft-windows|Microsoft Windows]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Windows)
- [[concepts/open-source-alternatives|Open Source Alternatives]] — [Wikipedia](https://en.wikipedia.org/wiki/Open_Source_Alternatives)
- [[concepts/docker-desktop|Docker Desktop Alternative]] — [Wikipedia](https://en.wikipedia.org/wiki/Docker_Desktop_Alternative)
- Dockerfile — [Wikipedia](https://en.wikipedia.org/wiki/Dockerfile)
- Multi-stage Build — [Wikipedia](https://en.wikipedia.org/wiki/Multi-stage_Build)
- ASP.NET Core — [Wikipedia](https://en.wikipedia.org/wiki/ASP.NET_Core)
- [[concepts/development-speed|Development Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/Development_Workflow)
- Cost-effective [[concepts/containerization|Containerization]] — [Wikipedia](https://en.wikipedia.org/wiki/Cost-effective_Containerization)
- Pre-[[concepts/deployment|release]] [[concepts/software-updates|Updates]] — [Wikipedia](https://en.wikipedia.org/wiki/Pre-release_Updates)
- Port Mapping — [Wikipedia](https://en.wikipedia.org/wiki/Port_Mapping)

## Related Entities
- [[entities/ed-andersen|Ed Andersen]] — [Wikipedia](https://en.wikipedia.org/wiki/Ed_Andersen)
- [[entities/docker|Docker]] — [Wikipedia](https://en.wikipedia.org/wiki/Docker)
- [[entities/wslc|WSLC]] — [Wikipedia](https://en.wikipedia.org/wiki/WSLC)
- [[entities/microsoft|Microsoft]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft)
- [[entities/docker-desktop|Docker Desktop]] — [Wikipedia](https://en.wikipedia.org/wiki/Docker_Desktop)
- Podman — [Wikipedia](https://en.wikipedia.org/wiki/Podman)
- Rancher — [Wikipedia](https://en.wikipedia.org/wiki/Rancher)
- [[entities/windows|Windows]] — [Wikipedia](https://en.wikipedia.org/wiki/Windows)
- [[entities/linux|Linux]] — [Wikipedia](https://en.wikipedia.org/wiki/Linux)
- ASP.NET Core — [Wikipedia](https://en.wikipedia.org/wiki/ASP.NET_Core)
- MVP Love — [Wikipedia](https://en.wikipedia.org/wiki/MVP_Love)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)