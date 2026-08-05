---
title: "WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop"
date: 2026-07-07
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop
Generated: 2026-07-07 · API: Gemini 2.5 Flash · Modes: Summary

---

## WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop
**Clip title:** No more Docker Desktop! WSL Containers are here with wslc!
**Author / channel:** Ed Andersen
**URL:** https://www.youtube.com/watch?v=4mkSbJUZpLs

### Summary
This video introduces Microsoft's native solution for running Docker containers on Windows Subsystem for Linux (WSL) using the `wslc` CLI, negating the need for Docker Desktop or other third-party container management tools. The presenter highlights this as a significant development, especially in light of Docker Desktop's shift to a paid model for many users, positioning `wslc` as a "rug-pull" antidote by providing container functionality built directly into Windows.

The first step demonstrated is updating WSL to its latest pre-release version using `wsl --update --pre-release`, followed by verifying the `wslc` version (which should be 2.9.3.0 or higher to include container features). The core of the demonstration involves taking an existing ASP.NET Core web application, "MVP Love," and containerizing it. A standard multi-stage `Dockerfile` is created, leveraging `mcr.microsoft.com/dotnet/sdk:10.0` for the build stage and `mcr.microsoft.com/dotnet/aspnet:10.0-runtime` for the runtime stage. Key steps in the Dockerfile include restoring dependencies, copying source code, executing a `dotnet run` command to fetch MVP profiles into a JSON file during the build, and finally publishing the application. A `.dockerignore` file is also utilized to optimize the build context.

The video then shows how to build the Docker image using the `wslc build -t mvp-love-image .` command, demonstrating the entire build process, including fetching external data. After a successful build, the image is run using `wslc run -p 8080:8080 --name mvplove mvp-love-image`, mapping port 8080 from the container to the host. The application quickly starts, and the presenter successfully accesses it via `localhost:8080` in a browser, confirming it's running from within the WSL container.

The primary conclusion and takeaway is the newfound ability to natively build and run Docker containers on Windows machines without any external commercial or open-source tools like Docker Desktop, Podman, or Rancher. This integrated approach, enabled by the `wslc` CLI within WSL, streamlines the development workflow, reduces overhead, and eliminates potential licensing or procurement complexities, offering a seamless and cost-effective container experience for Windows developers.

### Video Description & Links
#### Description
Finally we will be able to run docker containers on Linux in WSL2 with an entirely native solution on Windows without third party software like Docker Desktop or Podman or Rancher! Thank you Based Microsoft for this!

Full docs: https://learn.microsoft.com/en-us/windows/wsl/wsl-container

#coding #docker #dotnet

#### Tags
`C#`, `.NET`, `.NET 10`, `Microsoft`, `WSL`, `Windows Subsystem for Linux`, `containers`, `Docker`, `Docker Desktop alternative`, `wslc`, `programming`, `software development`, `web development`, `ASP.NET Core`, `tech tutorial`, `coding`, `developer tools`, `Podman`, `Rancher`

#### URLs
- https://learn.microsoft.com/en-us/windows/wsl/wsl-container
