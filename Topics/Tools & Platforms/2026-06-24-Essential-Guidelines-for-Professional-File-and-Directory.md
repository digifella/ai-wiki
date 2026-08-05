---
wiki-ingested: true
title: Essential Guidelines for Professional File and Directory Naming
date: 2026-06-24
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: developer-tooling-clis
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-06-24 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Essential Guidelines for Professional File and Directory Naming
**Clip title:** Naming Files and Directories the Right Way
**[[entities/tasia-custode|Author]] / channel:** [[concepts/skill|Skill]] [[concepts/foundry|Foundry]]
**URL:** https://www.youtube.com/watch?v=pjnSE99-cz0

### Summary
The video provides essential guidelines for naming files and directories, particularly aimed at beginners entering the IT profession. It highlights that while operating systems are often user-friendly, certain naming [[concepts/habits|habits]] common among casual users can create significant problems in professional technical environments. The core message is to adopt [[concepts/structured-naming|structured naming]] conventions from the outset to enhance efficiency, avoid errors, and improve collaboration.

The first two rules address character usage. Rule 1 strictly advises **against using spaces** in file and directory names. Spaces are interpreted as command separators in [[concepts/cli|terminal]] [[concepts/commands|commands]] and require cumbersome "escape characters" or quotation marks. Furthermore, spaces are invalid in web URLs and must be converted (e.g., to `%20`), leading to potential issues. Preferred alternatives include underscores (`my_project_file.py`), hyphens (`my-project-file.py`), camelCase (`myProjectFile.py`), or PascalCase (`MyProjectFile.py`). Rule 2 expands on this by advocating for the **avoidance of special characters** like `!@#$%^&*(){}[];:`. These characters are often reserved for system [[concepts/commands|commands]] or programming languages and can lead to unexpected errors or broken code. Safe characters generally include alphanumeric characters (a-z, A-Z, 0-9) and underscores. The dot (`.`) is noted as an exception, typically used to separate file names from their extensions or to denote hidden files.

The next two rules focus on clarity and [[concepts/logical-consistency|consistency]]. Rule 3 emphasizes being **descriptively concise**. Names should clearly and accurately convey the file's or directory's content or purpose without being excessively long or vague. For example, "inventory.csv" is preferred over "stuff.json". The goal is to provide enough information for anyone to understand the item's function without needing to open it, while still being practical to type. Rule 4 deals with **case sensitivity**, explaining that in many technical contexts (especially Linux/Unix systems and programming), "Hello" is not considered the same as "hello." To prevent errors, it's best to always assume letter casing matters and, when uncertain, default to using lowercase characters, as this is the most common convention, particularly on servers.

Finally, Rule 5 addresses the specific practice of including dates in names. When a file or directory name needs to reference a date (e.g., for logs or reports), it should follow the **`YYYY-MM-DD` format with leading zeros** (e.g., `report_2024_12_03.pdf`). This ensures that files are sorted chronologically by default, as computer systems [[concepts/feynmans-three-step-scientific-method|compare]] characters from left to right. Incorrect date formats (e.g., `report_12_3_2024.pdf`) [[entities/will|will]] lead to improper alphabetical sorting. The video concludes with a bonus rule: **be consistent**. Once a naming pattern is chosen for a project or team, strict adherence to it is crucial. Inconsistent naming is a common source of frustration and inefficiency in professional [[concepts/coding|software development]], where [[concepts/style|style]] guides are often established to maintain uniformity. By applying these rules from the beginning, individuals can significantly streamline their workflow, reduce errors, and foster a more organized and collaborative technical environment.

### Video Description & Links
#### Description
It seems like no one actually teaches people how to name files and directories. Modern Operating Systems allow pretty much any format, but when you step into IT, code, and automation, there are some rules to follow that will save you time and frustration later.

In this video, Eric covers the 5 rules for naming files and directories in ways that are friendly for coding and system administration.

====================

Don't learn alone. Join a community that helps you succeed!

At Skill Foundry, you'll learn [[concepts/full-stack-development|full-stack development]] with a supportive community of peers and mentors. Our comprehensive program gives you the structured curriculum and projects you need to build a career in tech.

Choose the path that's right for you:

Community Plan: Get a structured curriculum and a supportive peer community.

Direct Mentorship Plan: Get everything in the Community Plan, plus weekly one-on-one meetings and a private chat channel with me.

Get started for free:

- Join our free community on Discord: https://discord.gg/skillfoundry
- Take our free introductory courses on our site.
- Questions? [[entities/email|Email]] us at hello@skillfoundry.io

Ready to get started?
https://www.skillfoundry.io/

#cleancode #softwaredevelopment #codingtips #developerlife

#### Tags
`file naming conventions`, `directory structure`, `clean code`, `coding best practices`, `file organization`, `folder structure`, `naming variables`, `software development tips`, `programming tips`, `developer workflow`, `code organization`, `project structure`, `readable code`, `maintainable code`, `coding standards`, `software engineering`, `programming fundamentals`, `developer productivity`, `clean architecture`, `code quality`, `tech tips`, `coding guidelines`, `professional coding`, `developer best practices`

#### URLs
- https://discord.gg/skillfoundry
- https://www.skillfoundry.io/

## Related Concepts
- [[concepts/file-naming-conventions|File Naming Conventions]] — [Wikipedia](https://en.wikipedia.org/wiki/File_Naming_Conventions)
- [[concepts/directory-structure|Directory Structure]] — [Wikipedia](https://en.wikipedia.org/wiki/Directory_Structure)
- [[concepts/it-best-practices|IT Best Practices]] — [Wikipedia](https://en.wikipedia.org/wiki/IT_Best_Practices)
- [[concepts/professional-output-standards|Professional Standards]] — [Wikipedia](https://en.wikipedia.org/wiki/Professional_Standards)
- [[concepts/operating-system-compatibility|Operating System Compatibility]] — [Wikipedia](https://en.wikipedia.org/wiki/Operating_System_Compatibility)
- [[concepts/technical-efficiency|Technical Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Technical_Efficiency)
- [[concepts/preventing-mistakes-in-camera-settings|Error Prevention]] — [Wikipedia](https://en.wikipedia.org/wiki/Error_Prevention)
- [[concepts/structured-naming|Structured Naming]] — [Wikipedia](https://en.wikipedia.org/wiki/Structured_Naming)
- [[concepts/beginner-it-guidelines|Beginner IT Guidelines]] — [Wikipedia](https://en.wikipedia.org/wiki/Beginner_IT_Guidelines)
- [[concepts/casual-user-habits|Casual User Habits]] — [Wikipedia](https://en.wikipedia.org/wiki/Casual_User_Habits)
- Space Avoidance — [Wikipedia](https://en.wikipedia.org/wiki/Space_Avoidance)
- Special Character Restrictions — [Wikipedia](https://en.wikipedia.org/wiki/Special_Character_Restrictions)
- Descriptive Conciseness — [Wikipedia](https://en.wikipedia.org/wiki/Descriptive_Conciseness)
- Case Sensitivity — [Wikipedia](https://en.wikipedia.org/wiki/Case_Sensitivity)
- ISO 8601 Date Formatting — [Wikipedia](https://en.wikipedia.org/wiki/ISO_8601_Date_Formatting)
- Naming [[concepts/logical-consistency|Consistency]] — [Wikipedia](https://en.wikipedia.org/wiki/Naming_Consistency)

## Related Entities
- [[entities/skill-foundry|Skill Foundry]] — [Wikipedia](https://en.wikipedia.org/wiki/Skill_Foundry)
- Eric — [Wikipedia](https://en.wikipedia.org/wiki/Eric)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/linux|Linux]] — [Wikipedia](https://en.wikipedia.org/wiki/Linux)
- Unix — [Wikipedia](https://en.wikipedia.org/wiki/Unix)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)