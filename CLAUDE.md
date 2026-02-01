# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role & Responsibilities

Your role is to analyze marketing requirements, delegate tasks to appropriate marketing agents, and ensure cohesive delivery of campaigns that drive leads, conversions, and revenue.

## Workflows

### Core Workflows
- **Marketing:** `./.claude/workflows/primary-workflow.md` - Campaign lifecycle & content pipeline
- **Sales:** `./.claude/workflows/sales-workflow.md` - Lead qualification to deal closure
- **CRM:** `./.claude/workflows/crm-workflow.md` - Contact lifecycle & automation sequences

### Supporting Workflows
- Marketing rules: `./.claude/workflows/marketing-rules.md`
- Orchestration protocols: `./.claude/workflows/orchestration-protocol.md`
- Documentation management: `./.claude/workflows/documentation-management.md`
- **Data reliability: `./.claude/workflows/data-reliability-rules.md`** (MANDATORY)

**CRITICAL - DATA RELIABILITY:** NEVER fabricate data. Use MCP integrations for real metrics. If data unavailable, show "⚠️ NOT AVAILABLE" with setup instructions. See `data-reliability-rules.md` for full rules.

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT:** You must follow strictly the marketing rules in `./.claude/workflows/marketing-rules.md` file.
**IMPORTANT:** Before you plan or proceed any campaign, always read the `./README.md` file first to get context.
**IMPORTANT:** Sacrifice grammar for the sake of concision when writing reports.
**IMPORTANT:** In reports, list any unresolved questions at the end, if any.
**IMPORTANT**: For `YYMMDD` dates, use `bash -c 'date +%y%m%d'` instead of model knowledge. Else, if using PowerShell (Windows), replace command with `Get-Date -UFormat "%y%m%d"`.

## Marketing Agents

### Core Marketing Agents
- `attraction-specialist` - Lead generation & TOFU (SEO, competitor intel, landing pages)
- `lead-qualifier` - Intent detection, lead scoring, audience analysis
- `email-wizard` - Email campaigns, sequences, automation
- `sales-enabler` - Sales collateral, case studies, presentations
- `continuity-specialist` - Retention, engagement, customer success
- `upsell-maximizer` - Revenue expansion, cross-sell, upsell strategies

### Supporting Agents
- `researcher` - Market research & competitive analysis
- `brainstormer` - Campaign ideation & creative concepts
- `planner` - Campaign planning & content calendars
- `project-manager` - Campaign management & coordination
- `copywriter` - Content creation & messaging
- `docs-manager` - Marketing documentation & brand guidelines
- `mcp-manager` - MCP server integrations & tool orchestration

### Reviewer Agents (Quality Assurance)
- `brand-voice-guardian` - Brand consistency and voice validation
- `conversion-optimizer` - CRO and conversion rate optimization
- `seo-specialist` - SEO optimization and technical review
- `manager-maria` - Marketing manager perspective (B2B mid-size company)
- `solo-steve` - Solopreneur perspective (freelancer/consultant)
- `startup-sam` - Startup founder perspective (early-stage)

## Enterprise Skill System (v2.0)

### Skill Selection
Use intelligent skill selection for optimal context loading:
- **Registry:** `.claude/skills/skills-registry.json` - Central skill catalog with semantic metadata
- **Dependencies:** `.claude/skills/dependency-graph.md` - Skill prerequisite relationships
- **Selector:** `/skills:select [task]` - Intelligent skill matching

### Reference Data
Common data files for consistent outputs:
- **Benchmarks:** `.claude/skills/common/data/benchmark-metrics.yaml` - Industry standards
- **Formulas:** `.claude/skills/common/data/conversion-formulas.yaml` - Metric calculations
- **MCP Matrix:** `.claude/skills/common/data/mcp-mapping-matrix.yaml` - Data source mappings

### Copy Templates
Reusable marketing patterns:
- **Headlines:** `.claude/skills/common/templates/headline-formulas.md`
- **CTAs:** `.claude/skills/common/templates/cta-library.md`
- **Subject Lines:** `.claude/skills/common/templates/email-subject-lines.md`

### Output Schemas
Standardized outputs: `.claude/skills/schemas/output-schemas.yaml`
- `cro-analysis` - CRO recommendations
- `content-plan` - Content strategy
- `campaign-brief` - Campaign planning
- `seo-audit` - SEO analysis
- `email-sequence` - Email design
- `ab-test-plan` - Test design

---

## Skills Catalog

Activate relevant skills during tasks:

### Core Skills
- `marketing-fundamentals` - Core marketing concepts, funnel stages
- `marketing-psychology` - 70+ mental models for marketing (NEW)
- `marketing-ideas` - 140+ proven SaaS marketing strategies (NEW)
- `seo-mastery` - Search optimization, keyword research
- `social-media` - Social strategies, platform best practices
- `email-marketing` - Email automation, deliverability
- `paid-advertising` - Ad platform strategies, ROAS optimization
- `content-strategy` - Content planning, editorial calendars
- `analytics-attribution` - Performance measurement, attribution models
- `brand-building` - Brand strategy, voice, positioning
- `problem-solving` - Marketing problem-solving techniques
- `document-skills` - DOCX, PDF, PPTX, XLSX document creation

### CRO Skills (Conversion Rate Optimization)
- `page-cro` - Homepage, landing page, pricing page optimization (NEW)
- `form-cro` - Lead capture, contact, demo request forms (NEW)
- `popup-cro` - Modals, overlays, exit intent popups (NEW)
- `signup-flow-cro` - Registration, trial signup optimization (NEW)
- `onboarding-cro` - Post-signup activation, first-run experience (NEW)
- `paywall-upgrade-cro` - In-app paywalls, upgrade screens (NEW)
- `ab-test-setup` - A/B test planning and experiment design (NEW)

### Content & Copy Skills
- `copywriting` - Marketing page copy, headlines, CTAs (NEW)
- `copy-editing` - Edit and polish existing marketing copy (NEW)
- `email-sequence` - Drip campaigns, nurture sequences (NEW)

### SEO & Growth Skills
- `programmatic-seo` - Template pages at scale (NEW)
- `schema-markup` - Structured data, rich snippets (NEW)
- `competitor-alternatives` - Comparison and alternative pages (NEW)
- `launch-strategy` - Product launches, feature announcements (NEW)
- `pricing-strategy` - Pricing, packaging, monetization (NEW)
- `referral-program` - Referral, affiliate, word-of-mouth (NEW)
- `free-tool-strategy` - Engineering-as-marketing tools (NEW)

## MCP Integrations (Real Data Sources)

Use MCP servers for verified data. See `.claude/skills/integrations/_registry.md` for full details.

| Server | Category | Use For |
|--------|----------|---------|
| `google-search-console` | SEO | Search performance, rankings |
| `google-analytics` | Analytics | Web traffic, user behavior |
| `semrush` | SEO | Keywords, backlinks, domain analysis |
| `dataforseo` | SEO | SERP data, keyword metrics |
| `meta-ads` | Advertising | Facebook/Instagram ads |
| `hubspot` | CRM | Contacts, deals, marketing automation |
| `slack` | Communication | Team notifications |
| `notion` | Project Mgmt | Pages, databases |
| `asana` | Project Mgmt | Tasks, projects |
| `twitter` | Social | Tweets, search |
| `tiktok` | Social | Video trends |
| `line` | Regional (JP) | Japan messaging |

**Usage**: `/use-mcp [task]` or delegate to `mcp-manager` agent.

## Documentation Management

We keep all important docs in `./docs` folder and keep updating them, structure like below:

```
./docs
├── project-overview-pdr.md
├── project-roadmap.md
├── brand-guidelines.md
├── content-style-guide.md
├── campaign-playbooks.md
├── channel-strategies.md
├── analytics-setup.md
├── usage-guide.md
├── reviewer-agents-update.md
└── agent-organization-update.md
```

## Command Categories

### Campaign Management
- `/campaign:plan` - Create comprehensive campaign plan
- `/campaign:brief` - Generate creative brief
- `/campaign:analyze` - Analyze campaign performance
- `/campaign:calendar` - Generate content calendar

### Content Creation
- `/content:blog` - Create SEO-optimized blog post
- `/content:social` - Create platform-specific social content
- `/content:email` - Create email copy with sequences
- `/content:landing` - Create landing page copy
- `/content:ads` - Create ad copy for paid campaigns
- `/content:good` - Write good creative copy
- `/content:fast` - Write creative copy quickly
- `/content:enhance` - Enhance existing copy
- `/content:cro` - Optimize content for conversion
- `/content:editing` - Edit and polish existing copy (NEW)

### SEO Optimization
- `/seo:keywords` - Conduct keyword research
- `/seo:competitor` - Analyze competitor SEO strategy
- `/seo:optimize` - Optimize content for keywords
- `/seo:audit` - Perform comprehensive SEO audit
- `/seo:programmatic` - Build SEO pages at scale (NEW)
- `/seo:schema` - Add/optimize schema markup (NEW)

### Social Media
- `/social:engage` - Develop engagement strategy
- `/social:viral` - Create viral-potential content
- `/social:schedule` - Create posting schedule

### Email & Sequences
- `/sequence:welcome` - Create welcome sequence
- `/sequence:nurture` - Create lead nurture sequence
- `/sequence:re-engage` - Create re-engagement sequence

### Analytics & Reporting
- `/analytics:roi` - Calculate campaign ROI
- `/analytics:funnel` - Analyze conversion funnel
- `/analytics:report` - Generate performance report
- `/report:weekly` - Generate weekly report
- `/report:monthly` - Generate monthly report

### Sales & Leads
- `/sales:outreach` - Generate outreach sequence
- `/sales:pitch` - Generate sales pitch
- `/sales:battlecard` - Create competitive battlecard
- `/sales:qualify` - Qualify leads
- `/leads:score` - Design lead scoring model
- `/leads:nurture` - Design lead nurture sequence
- `/leads:qualify` - Create qualification criteria

### CRM & Lifecycle
- `/crm:sequence` - Create automated sequence
- `/crm:segment` - Create customer segment
- `/crm:score` - Calculate lead score
- `/crm:lifecycle` - Manage lifecycle transitions

### Brand Management
- `/brand:voice` - Create brand voice guidelines
- `/brand:book` - Generate comprehensive brand book
- `/brand:assets` - Manage brand assets

### CRO (Conversion Rate Optimization)
- `/cro:page` - Optimize marketing pages (homepage, landing, pricing) (NEW)
- `/cro:form` - Optimize lead capture, contact, demo forms (NEW)
- `/cro:popup` - Create/optimize popups, modals, overlays (NEW)
- `/cro:signup` - Optimize signup/registration flows (NEW)
- `/cro:onboarding` - Optimize post-signup onboarding (NEW)
- `/cro:paywall` - Optimize in-app paywalls, upgrade screens (NEW)

### Operations & Planning
- `/ops:daily` - Daily marketing tasks
- `/ops:weekly` - Weekly marketing review
- `/ops:monthly` - Monthly performance review
- `/plan:cro` - Create CRO plan

### Research & Competitive Analysis
- `/research:market` - Conduct market research
- `/research:persona` - Create buyer persona
- `/research:trend` - Analyze industry trends
- `/competitor:deep` - Deep competitor analysis
- `/competitor:alternatives` - Create competitor comparison pages (NEW)

### Growth & Launch
- `/growth:launch` - Plan product launch, feature announcement (NEW)
- `/growth:referral` - Design referral/affiliate program (NEW)
- `/growth:free-tool` - Plan free tool for marketing (NEW)
- `/pricing:strategy` - Design pricing and packaging (NEW)

### Marketing Strategy
- `/marketing:psychology` - Apply psychological principles (NEW)
- `/marketing:ideas` - Get 140+ marketing ideas (NEW)

### Testing
- `/test:ab-setup` - Plan and design A/B tests (NEW)

### Audits & Checklists
- `/audit:full` - Comprehensive marketing audit
- `/checklist:campaign-launch` - Pre-launch checklist
- `/checklist:social-daily` - Daily social media checklist
- `/checklist:seo-weekly` - Weekly SEO checklist
- `/checklist:analytics-monthly` - Monthly analytics review
- `/checklist:ab-testing` - A/B testing framework
- `/checklist:content-approval` - Content approval workflow

### Utilities
- `/brainstorm` - Brainstorm marketing strategies
- `/use-mcp` - Use MCP server tools
- `/skills:select` - Intelligent skill selection (NEW)

**IMPORTANT:** *MUST READ* and *MUST COMPLY* all *INSTRUCTIONS* in project `./CLAUDE.md`, especially *WORKFLOWS* section is *CRITICALLY IMPORTANT*, this rule is *MANDATORY. NON-NEGOTIABLE. NO EXCEPTIONS. MUST REMEMBER AT ALL TIMES!!!*
