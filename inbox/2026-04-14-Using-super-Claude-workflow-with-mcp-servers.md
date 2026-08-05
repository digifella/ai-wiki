---
wiki-ingested: true
title: "Using super Claude workflow with mcp servers"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Using super Claude workflow with [[concepts/mcp-servers|mcp servers]]

---
---
<https://www.youtube.com/watch?v=Ph_Pbaqn2EM>

Channel: [[entities/eric-tech|Eric Tech]] Aug 29 2025
https://youtu.be/Ph\_Pbaqn2EM
This video is a tutorial on how to use SuperClaude, a [[concepts/configuration-framework|configuration framework]] that enhances [[concepts/claude-code|Claude Code]] with specialized [[concepts/commands|commands]], [[concepts/cognitive-personas|cognitive personas]], and [[concepts/development-methodologies|development methodologies]].
**Key Features of SuperClaude**

* **Commands:** SuperClaude offers 16 essential commands categorized for common tasks: **Development:** `/sc:implement`, `/sc:build`, `/sc:design` **Analysis:** `/sc:analyze`, `/sc:troubleshoot`, `/sc:explain` **Quality:** `/sc:improve`, `/sc:test`, `/sc:cleanup` **Others:** `/sc:document`, `/sc:git`, `/sc:estimate`, `/sc:task`, `/sc:index`, `/sc:load`, `/sc:spawn`
* **Smart Personas:** [[concepts/ai-specialists|AI specialists]] that jump in when relevant: **architect:** Systems design and [[concepts/architecture|architecture]] **frontend:** UI/UX and [[concepts/accessibility|accessibility]] **backend:** APIs and infrastructure **analyzer:** [[concepts/debugging|Debugging]] and figuring things out **security:** Security concerns and vulnerabilities **scribe:** Documentation and writing ... and 5 more specialists.
* **MCP [[concepts/integration|Integration]]:** [[concepts/external-tools|External tools]] that connect when useful: **Context7:** Grabs official library docs and patterns **Sequential:** Helps with complex multi-step thinking **Magic:** Generates modern UI components **Playwright:** [[concepts/browser-automation|Browser automation]] and testing stuff

**Installation and Setup**

1. **Prerequisites:** Ensure Claude Code is installed and set up on your local machine.
2. **Clone the Repository:**
	`cd Desktop git clone https://github.com/NomenAK/SuperClaude.git cd SuperClaude`
	
3. **Install SuperClaude:**
	`python3 SuperClaude.py install --quick`
	Confirm the installation when prompted.
	
4. **Restart Claude Code:** After successful installation, restart your Claude Code session.
5. **Add MCP Servers:** Inside your Claude Code terminal, add the MCP servers: **Context7:**
	`claude mcp add --transport http context7 https://mcp.context7.com/mcp`
	**Puppeteer (for Playwright):**
	`claude mcp add puppeteer npx @modelcontextprotocol/server-puppeteer`
	**Magic:**
	`claude mcp add magic npx @21st-dev/magic@latest`
	**Sequential-thinking:**
	`claude mcp add sequential-thinking npx @modelcontextprotocol/server-sequential-thinking`
	Verify the added servers by typing `/mcp` in the Claude Code terminal.
	

**Using [[concepts/superclaude-commands|SuperClaude Commands]]**
The video demonstrates the `/sc:analyze` command on a "match-me" dating application project.

1. **Initiate Analysis:**
	`/sc:analyze --architecture --persona-architect --seq`
	`--architecture`: Flag to analyze the system's architecture. `--persona-architect`: Assigns the architect persona. `--seq`: Activates the Sequential MCP for complex multi-step thinking.
	
2. **Analysis Output:** SuperClaude generates a detailed "Architecture Analysis Report" including:
	**Update Todos:** A list of tasks to discover and map project architecture, analyze database schema, evaluate [[concepts/authentication|authentication]] and security, generate comprehensive reports, assess state management and data flow, review API designs, and analyze component/UI patterns. **System Overview:** Description of the application and its [[concepts/tech-stack|tech stack]] (Next.js 14, [[concepts/typescript|TypeScript]], PostgreSQL, Prisma, NextAuth, Pusher, Cloudinary, NextUI, Zustand). **Architectural Assessment:** **Core Architecture Patterns:** Framework design (Next.js App Router, Server Actions, Middleware-based auth, Component co-location). **Data Layer:** User, Member, Token [[concepts/relationships|relationships]]. **Security Architecture:** Authentication & [[concepts/authorization|authorization]] (NextAuth v5, JWT strategy, Role-based access, Email [[concepts/verification|verification]], Password hashing, [[concepts/token-management|Token management]]), Route protection, Data security (Prisma ORM, Server Actions, [[concepts/input-validation|Input validation]], Photo approval). **Database Design:** Schema Analysis (strengths: clean relational design, proper foreign key constraints, soft deletion, approval system, cascading deletes; potential optimization: missing indexes, no database-level constraints for business rules). **State Management:** Current Pattern (Zustand stores, Server state, URL state, Real-time); Architecture Concerns (no centralized server state management, manual cache invalidation patterns, potential state synchronization issues). **API Architecture:** Server Actions Pattern, API Routes (NextAuth integration, real-time authorization, Cloudinary signatures). **Component Architecture:** Design System (NextUI, Tailwind CSS, Component [[concepts/structure|structure]], Reusable patterns); File Organization. **Performance Considerations:** Strengths (server-side rendering, image optimization, component lazy loading); Optimization Opportunities (no React Query, missing pagination optimization, no image preloading strategy). **Scalability Assessment:** Current Capacity (Medium Scale: 1K-10K users); Bottlenecks (real-time connections, database query optimization, no caching layer); Scaling Path (add React Query, implement Redis caching, database query optimization, CDN for static assets). **Critical Recommendations:** High Priority (server state management, database optimization, error boundaries, performance monitoring); Medium Priority (testing coverage, TypeScript strictness, image optimization, rate limiting); Long-term Architecture (Microservices split, [[concepts/event-driven-architecture|event-driven architecture]], advanced caching). **Architecture Score:** B+ (82/100).
	
3. **Generating the Report:** The analysis results can be saved to a Markdown file (e.g., `ARCHITECTURE_ANALYSIS.md`) for review, commits, and pull requests.

**Integrated Development Workflow**
The video also outlines a typical development workflow using SuperClaude commands:

1. **Project Planning:**
	`/design --api --ddd --plan --persona-architect`
	This command assigns the design task with API and Domain-Driven Design (DDD) flags to the architect persona to create a plan.
	
2. **[[concepts/frontend-development|Frontend Development]]:**
	`/build --react --magic --tdd --persona-frontend`
	This command initiates frontend development using React, Magic for UI components, [[concepts/test-driven-development|Test-Driven Development]] (TDD), and assigns it to the frontend persona.
	
3. **Backend Development:**
	`/build --api --tdd --coverage --persona-backend`
	This command starts backend development, focusing on APIs with TDD and test coverage, assigned to the backend persona.
	
4. **Quality Check:**
	`/review --quality --evidence --persona-qa`
	This command performs a quality review with evidence, assigned to the QA persona.
	
5. **Security Scan:**
	`/scan --security --owasp --persona-security`
	This command conducts a security scan using OWASP guidelines, assigned to the security persona.
	
6. **Performance Optimization:**
	`/improve --performance --iterate --persona-performance`
	This command initiates performance improvement iterations, assigned to the performance persona.
	
7. **[[concepts/deployment|Deployment]] [[concepts/preparation|Preparation]]:**
	`/deploy --env staging --plan --persona-architect`
	This command prepares for deployment to a staging environment, generating a plan assigned to the architect persona.
	

**Troubleshooting Workflow**
For issues during development, SuperClaude can facilitate troubleshooting:

1. **Problem Analysis:**
	`/troubleshoot --investigate --prod --persona-analyzer`
	This command investigates a problem in the production environment, assigned to the analyzer persona.
	
2. **Root Cause Analysis:**
	`/troubleshoot --prod --five-whys --seq --persona-analyzer`
	This command uses the "Five Whys" technique in the production environment with sequential thinking to find the root cause, assigned to the analyzer persona.
	
3. **Performance Analysis:**
	`/analyze --profile --perf --seq --persona-performance`
	This command analyzes the code's performance profile with sequential thinking, assigned to the performance persona.
	
4. **Fix Implementation:**
	`/improve --quality --threshold 95% --persona-refactorer`
	This command improves the quality of the implementation with a 95% test coverage threshold, assigned to the refactorer persona.
	

**Conclusion:**
SuperClaude aims to provide a structured and professional workflow for complex software development tasks within Claude Code, leveraging specialized commands, personas, and integrations to streamline the development process.
