---
title: "Google OKF v0.2: Trust Signals for AI Knowledge Representation"
date: 2026-07-30
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Google OKF v0.2: Trust Signals for AI Knowledge Representation
Generated: 2026-07-30 · API: Gemini 2.5 Flash · Modes: Summary

---

## Google OKF v0.2: Trust Signals for AI Knowledge Representation
**Clip title:** Google's OKF (Open Knowledge Format) Just Added Trust Signals — Here's Why It Matters
**Author / channel:** AI with Surya
**URL:** https://www.youtube.com/watch?v=S_LZQV0VS8s

### Summary
This video provides a comprehensive overview of Google's Open Knowledge Format (OKF) v0.2 update, highlighting its core focus on establishing "trust" in knowledge representation for AI agents. Initially, OKF v0.1 was introduced as a human- and agent-friendly format for structuring metadata, context, and curated insights around data and systems, essentially organizing unstructured knowledge into plain markdown files within a hierarchical folder structure. This allowed for concepts like database schemas, metric definitions, and process flows to be documented in a machine-readable yet human-comprehensible way. The format's minimalism and portability were key features, designed for agents to write, update, and read information.

However, the initial version of OKF quickly revealed a critical missing component: trust. Without explicit metadata regarding who authored or verified a piece of knowledge, AI agents (and even humans) couldn't ascertain its reliability. This posed significant risks, ranging from agents "hallucinating" facts due to unverified information to enterprises facing accountability issues. The problem was universal, affecting both large-scale organizational data management (e.g., has the VP of Finance approved this metric definition?) and personal workflows (e.g., did I write this code documentation, or did an AI generate it?). Such ambiguities could lead to significant wasted time and resources.

The v0.2 update directly addresses this trust deficit by introducing optional fields within the markdown file's frontmatter. These new fields allow for explicit recording of the knowledge's "provenance" (where it came from, who generated it), "attestation" (who verified or approved it, including human or machine-confirmed status), "freshness" (is it still true?), and "lifecycle" (is it the current version, stable, deprecated, or stale after a certain date). These additions provide explicit signals that empower AI agents to evaluate the credibility and applicability of the knowledge they consume, differentiating between machine-generated content and human-reviewed information. The format intentionally keeps these fields optional to maintain minimalism but rewards detailed contributions with higher trust signals.

The video culminates in a practical demonstration using Antigravity IDE to create an OKF v0.2 bundle for the presenter's own YouTube channel analytics. By defining a video library dataset, successful video metrics (with specific thresholds), and performance standards, the user illustrates how an AI agent (an ADK agent) can interpret and reason about this structured knowledge. The demonstration highlights how the agent can differentiate between deprecated and stable metric definitions, ensuring it only relies on the most trustworthy and current information. This capability to build, manage, and query a knowledge graph with inherent trust signals is a significant leap towards more reliable, accountable, and efficient AI systems.

### Video Description & Links
#### Description
Google's Open Knowledge Format just got its first update — and it's all about trust.

OKF is Google's open standard for writing down the knowledge that surrounds your data and systems: what a table actually means, how your company defines "active user," what to do when the pipeline breaks at 2am. Not a product, not a database — a folder of markdown files. Version 0.2 adds something version 0.1 couldn't do: tell your AI agent whether the file it just read is worth believing.

In this video I go through the what, the why, and most importantly the HOW — so you can build one of these for your own data by the end.

I read the spec straight from Google's repo, walk through their sample bundle, and then build my own OKF bundle for my YouTube channel using Antigravity. Then I point an ADK agent at it and ask a simple question: which of my videos were successful?

The agent finds two competing definitions in my own files and tells me it has no idea which one I actually use. Then I change one word — one field in one markdown file — and it answers cleanly.

That's the update. That's the whole thing.

WHAT YOU'LL LEARN
▸ What the Open Knowledge Format actually is, in plain English
▸ Why v0.1 broke down once agents started writing the files
▸ The new frontmatter fields: generated, verified, status, stale_after
▸ Trust tiers — unverified, machine-confirmed, human-reviewed
▸ How to generate an OKF bundle with an agent instead of writing markdown by hand
▸ How to wire an ADK agent to read a bundle and respect its trust signals
▸ Why "deprecated" matters more than deleting an old definition

WHO THIS IS FOR
Product managers, data leaders, analytics teams, and anyone building with AI agents who has watched an assistant confidently return a number that doesn't match the dashboard. No prior OKF knowledge needed.

CHAPTERS
0:00 Introduction
0:24 What is OKF?
1:02 The Trust Problem
2:32 Video Roadmap
3:18 The What: Reading the OKF Spec
5:59 The Why: Can Agents Be Trusted?
6:56 The How: Exploring Google's Sample Bundle
9:53 Building Your Own OKF Bundle with Antigravity
11:41 Generating the Bundle
12:41 Testing with an ADK Agent

TOOLS USED
Google Antigravity · Google ADK (Agent Development Kit) · BigQuery · Gemini · the OKF reference agent and visualizer

If you build a bundle of your own, drop it in the comments — I'd genuinely like to see what people write down first.

All opinions are my own and do not belong to my employer.

#OpenKnowledgeFormat #GoogleCloud #AIAgents

#### Tags
`ADK`, `AI agent context`, `AI agent memory`, `AI agent tutorial`, `AI data governance`, `LLM context engineering`, `OKF`, `OKF v0.2`, `agent development kit`, `agent knowledge base`, `agent trust signals`, `antigravity IDE`, `bigquery`, `data catalog`, `deprecated metrics`, `enterprise AI`, `gemini`, `google OKF`, `google antigravity`, `google cloud AI`, `markdown knowledge base`, `metric definitions`, `open knowledge format`, `open knowledge format explained`, `semantic layer`, `single source of truth`, `video editing`
