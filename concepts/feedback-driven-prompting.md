---
type: concept
domain: ai-agents
group: reasoning-context-prompting
tags:
  - "concept"
  - "feedback-loops"
  - "autonomous-systems"
  - "video-generation"
  - "ai-optimization"
  - "prompt-engineering"
aliases:
  - "iterative-prompting"
  - "feedback-based-prompts"
summary: A technique for improving AI outputs through iterative feedback cycles, demonstrated in an autonomous video content generation system.
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Feedback Driven Prompting

Feedback Driven Prompting is a technique for iteratively improving AI system outputs through structured feedback cycles. Rather than relying on a single prompt-response exchange, this approach treats an AI's initial output as a starting point for refinement. Subsequent prompts incorporate feedback about what worked, what failed, and what adjustments are needed, allowing the system to progressively approach better results. This methodology acknowledges that complex tasks often require multiple iterations to achieve desired quality.

## Application in Autonomous Systems

The technique has been demonstrated in autonomous video content generation systems, where an AI agent produces initial video scripts, storyboards, or edits and receives feedback on aspects such as pacing, narrative coherence, or technical specifications. The agent then refines its outputs based on this feedback, repeating the cycle until the results meet specified criteria. This iterative approach reduces the need for manual intervention at every step while maintaining human oversight through the feedback mechanism.

## Key Characteristics

Feedback Driven Prompting differs from static prompting by creating a dialogue between the AI system and its feedback source—whether human or automated. The feedback loop must be structured clearly, specifying what aspects of the output require adjustment and to what degree. Success depends on the clarity of feedback signals and the AI system's ability to integrate and act on that information in subsequent iterations, making it particularly suited to tasks where quality is difficult to specify in advance.

## Source Notes
- 2026-04-07: [[concepts/claude-code|Claude Code + Karpathy's Autoresearch = GOD MODE!]]
- 2026-04-25: [[lab-notes/2026-04-25-Advanced-AI-Video-Production-Using-GPT-Image-2-and-Iterative-Prompt-Engineering|Advanced AI Video Production Using GPT Image 2 and Iterative Prompt Engineering]] · [▶ source](https://www.youtube.com/watch?v=XdQq90Ug8eY)
